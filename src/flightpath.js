import * as THREE from 'three';
import { SCALE } from './airport.js';

// Curved flight-path overlay for a selected airborne aircraft.
//
//   • Past trail: a Catmull-Rom curve through 4 control points showing recent
//     vectoring/turning onto the current heading. Offset to the origin's side
//     when an origin airport is known, so the curve sweeps in from the right
//     direction (e.g. inbound from LHR curves in from the NW).
//
//   • Projected path: another curve. For INBOUND it lands on the closest
//     runway threshold (33L or 15L depending on heading) following a final-
//     approach alignment. For OUTBOUND it sweeps gently toward the destination
//     if known, otherwise just continues ahead.
//
//   • Vertical drop line from the aircraft to its ground projection, so
//     altitude is visible at a glance.
//
// The shape resembles what aircraft-tracking tools (FlightAware, FR24) show:
// a soft S-curve onto final for arrivals, a turning departure for take-offs.

const NM_TO_M = 1852;
const PATH_RANGE_NM = 25;
const SAMPLE_COUNT = 48;

const OKBK_LAT = 29.2266;
const OKBK_LON = 47.9689;
const COS_LAT = Math.cos(OKBK_LAT * Math.PI / 180);

// Runway-threshold coordinates derived from OSM (the southern end of each
// runway = the "33" approach end; the northern end = the "15" approach end).
const RWY_33L_THR = { lat: 29.2127, lon: 47.9763 }; // RWY 15R/33L, 33 end (SW)
const RWY_33R_THR = { lat: 29.2126, lon: 47.9986 }; // RWY 15L/33R, 33 end (SE)
const RWY_15L_THR = { lat: 29.2412, lon: 47.9834 }; // RWY 15L/33R, 15 end (NW)
const RWY_15R_THR = { lat: 29.2405, lon: 47.9615 }; // RWY 15R/33L, 15 end (NW)

const STATE_COLORS = {
  AIRBORNE_IN:  0x4499ff,
  AIRBORNE_OUT: 0xff8844,
  CLEARED:      0x33ff77,
  TAXI:         0xffcc33,
  QUEUED:       0xff6633,
  PARKED:       0x808080,
};

// Coarse coordinates for common origins/destinations referenced in the
// curated snapshot. Used to bias which side the past/future curve sweeps to.
const KNOWN_AIRPORTS = {
  OKBK: { lat: 29.2266, lon:  47.9689 },
  KWI:  { lat: 29.2266, lon:  47.9689 },
  LHR:  { lat: 51.4775, lon:  -0.4614 },
  KUL:  { lat:  2.7456, lon: 101.7099 },
  JED:  { lat: 21.6796, lon:  39.1565 },
  BOM:  { lat: 19.0887, lon:  72.8679 },
  DEL:  { lat: 28.5562, lon:  77.1000 },
  DXB:  { lat: 25.2532, lon:  55.3657 },
  DOH:  { lat: 25.2731, lon:  51.6080 },
  AUH:  { lat: 24.4330, lon:  54.6511 },
  BAH:  { lat: 26.2708, lon:  50.6336 },
  IST:  { lat: 41.2753, lon:  28.7519 },
  BEY:  { lat: 33.8208, lon:  35.4884 },
  ISU:  { lat: 35.5677, lon:  45.3169 },
};

function latLonToLocal(lat, lon, y = 0.0022) {
  const dxM = (lon - OKBK_LON) * 111320 * COS_LAT;
  const dzM = -(lat - OKBK_LAT) * 111320;
  return new THREE.Vector3(dxM * SCALE, y, dzM * SCALE);
}

export function buildFlightPath(aircraft) {
  const data = aircraft.userData;
  const isAirborne = !data.on_ground && (data.alt || 0) >= 100;
  if (!isAirborne) return null;

  const group = new THREE.Group();
  group.userData.isFlightPath = true;

  const pos = aircraft.position.clone();
  pos.y = 0.0022;

  const stateColor = STATE_COLORS[data.state] || 0xffffff;

  const pastPoints   = buildPastPoints(pos, data);
  const futurePoints = buildFuturePoints(pos, data);

  if (pastPoints.length >= 2) {
    const samples = sampleCurve(pastPoints, SAMPLE_COUNT);
    group.add(makeLine(samples, 0xc8d0d8, 0.55, false));     // solid grey
    // Small dots along the past trail to evoke "ADS-B fixes"
    for (let i = 1; i < samples.length - 1; i += 6) {
      group.add(makeDot(samples[i], 0xc8d0d8, 0.55));
    }
  }

  if (futurePoints.length >= 2) {
    const samples = sampleCurve(futurePoints, SAMPLE_COUNT);
    group.add(makeLine(samples, stateColor, 0.85, true));     // dashed colored
  }

  if (futurePoints.length > 0) {
    group.add(makeWaypoint(futurePoints[futurePoints.length - 1], stateColor));
  }

  // Vertical drop from current 3-D aircraft position to its ground projection
  const acWorldY = aircraft.position.y;
  if (acWorldY > 0.01) {
    const drop = makeLine(
      [new THREE.Vector3(pos.x, acWorldY, pos.z), pos.clone()],
      stateColor, 0.5
    );
    group.add(drop);
  }

  return group;
}

// ---------------------------------------------------------------------------
// Past trail — control points showing where the aircraft recently was.

function buildPastPoints(pos, data) {
  const hdg = THREE.MathUtils.degToRad(data.hdg || 0);
  const fwd = new THREE.Vector3(Math.sin(hdg), 0, -Math.cos(hdg));
  const right = new THREE.Vector3(-fwd.z, 0, fwd.x); // 90° clockwise from fwd
  const range = PATH_RANGE_NM * NM_TO_M * SCALE;

  if (data.state === 'AIRBORNE_IN') {
    // Vectored onto final: last 8 nm straight on heading, then curve from
    // a downwind/base leg further back. Bias the curve toward the origin side.
    const originSide = originSideSign(pos, fwd, data);
    return [
      pos.clone()
        .sub(fwd.clone().multiplyScalar(range))
        .add(right.clone().multiplyScalar(range * 0.45 * originSide)),
      pos.clone()
        .sub(fwd.clone().multiplyScalar(range * 0.65))
        .add(right.clone().multiplyScalar(range * 0.25 * originSide)),
      pos.clone()
        .sub(fwd.clone().multiplyScalar(range * 0.35))
        .add(right.clone().multiplyScalar(range * 0.06 * originSide)),
      pos.clone()
        .sub(fwd.clone().multiplyScalar(range * 0.12)),
      pos.clone(),
    ];
  }

  if (data.state === 'AIRBORNE_OUT') {
    // Climbing out from runway — past trail starts at OKBK and turns onto
    // current heading. Use the heading-appropriate runway threshold as start.
    const startThr = pickDepartureThreshold(data.hdg);
    const start = latLonToLocal(startThr.lat, startThr.lon);
    const distToStart = pos.distanceTo(start);
    // Bias curve away from current heading (turn-out direction)
    const sideSign = destSideSign(pos, fwd, data);
    return [
      start,
      pos.clone()
        .sub(fwd.clone().multiplyScalar(distToStart * 0.66))
        .add(right.clone().multiplyScalar(distToStart * 0.12 * sideSign)),
      pos.clone()
        .sub(fwd.clone().multiplyScalar(distToStart * 0.33))
        .add(right.clone().multiplyScalar(distToStart * 0.04 * sideSign)),
      pos.clone(),
    ];
  }

  // Generic airborne — straight reverse-heading trail
  return [
    pos.clone().sub(fwd.clone().multiplyScalar(range)),
    pos.clone().sub(fwd.clone().multiplyScalar(range * 0.5)),
    pos.clone(),
  ];
}

// ---------------------------------------------------------------------------
// Projected path — control points to the runway (inbound) or onward (outbound).

function buildFuturePoints(pos, data) {
  const hdg = THREE.MathUtils.degToRad(data.hdg || 0);
  const fwd = new THREE.Vector3(Math.sin(hdg), 0, -Math.cos(hdg));
  const right = new THREE.Vector3(-fwd.z, 0, fwd.x);
  const range = PATH_RANGE_NM * NM_TO_M * SCALE;

  if (data.state === 'AIRBORNE_IN') {
    // Pick a runway threshold matching the current heading. Aircraft on
    // heading ~330° land on the "33" runway end; heading ~150° land on "15".
    const threshold = pickArrivalThreshold(data.hdg, pos);
    const toThr = threshold.clone().sub(pos);
    const distToThr = toThr.length();

    // Final-approach centerline direction: into the threshold along reverse
    // runway heading. Use heading as a stand-in.
    const finalDir = fwd.clone(); // aircraft already aligned-ish; subtle correction below
    const finalIntercept = threshold.clone().sub(finalDir.clone().multiplyScalar(distToThr * 0.55));

    // Smoothly merge from current straight ahead into the centerline before
    // touching down at the threshold.
    return [
      pos.clone(),
      pos.clone().add(fwd.clone().multiplyScalar(distToThr * 0.30)),
      finalIntercept,
      threshold,
    ];
  }

  if (data.state === 'AIRBORNE_OUT') {
    // Climb out + turn toward destination (if known).
    const sideSign = destSideSign(pos, fwd, data);
    return [
      pos.clone(),
      pos.clone()
        .add(fwd.clone().multiplyScalar(range * 0.30))
        .add(right.clone().multiplyScalar(range * 0.05 * sideSign)),
      pos.clone()
        .add(fwd.clone().multiplyScalar(range * 0.60))
        .add(right.clone().multiplyScalar(range * 0.18 * sideSign)),
      pos.clone()
        .add(fwd.clone().multiplyScalar(range * 0.95))
        .add(right.clone().multiplyScalar(range * 0.32 * sideSign)),
    ];
  }

  // Generic projection straight ahead
  return [
    pos.clone(),
    pos.clone().add(fwd.clone().multiplyScalar(range)),
  ];
}

// ---------------------------------------------------------------------------
// Heuristics

function pickArrivalThreshold(hdgDeg, pos) {
  // Heading 270-90 (i.e. crossing N) → landing northward on "33" runway end
  // Heading 90-270 (crossing S) → landing southward on "15" runway end
  // Choose between the two parallel runways by whichever threshold is closer.
  if (hdgDeg == null) return latLonToLocal(RWY_33L_THR.lat, RWY_33L_THR.lon);
  const useThirty3 = hdgDeg >= 270 || hdgDeg < 90;
  const a = useThirty3
    ? [RWY_33L_THR, RWY_33R_THR]
    : [RWY_15L_THR, RWY_15R_THR];
  const pa = latLonToLocal(a[0].lat, a[0].lon);
  const pb = latLonToLocal(a[1].lat, a[1].lon);
  return pos.distanceTo(pa) < pos.distanceTo(pb) ? pa : pb;
}

function pickDepartureThreshold(hdgDeg) {
  // Departed on a runway aligned with current heading (taking off accelerates
  // along the runway, so heading ≈ runway heading at lift-off).
  if (hdgDeg == null) return RWY_33L_THR;
  const useThirty3 = hdgDeg >= 270 || hdgDeg < 90;
  return useThirty3 ? RWY_33L_THR : RWY_15L_THR;
}

function originSideSign(pos, fwd, data) {
  const o = data.origin && KNOWN_AIRPORTS[data.origin];
  if (!o) return 1; // default to right side
  const originLocal = latLonToLocal(o.lat, o.lon);
  // We care which side of "back" (= -fwd) the origin sits on.
  const back = fwd.clone().negate();
  const to = originLocal.clone().sub(pos);
  const cross = back.x * to.z - back.z * to.x; // sign of Y-up cross product
  return cross > 0 ? -1 : 1;
}

function destSideSign(pos, fwd, data) {
  const d = data.destination && KNOWN_AIRPORTS[data.destination];
  if (!d) return -1; // default to a gentle left curve
  const destLocal = latLonToLocal(d.lat, d.lon);
  const to = destLocal.clone().sub(pos);
  const cross = fwd.x * to.z - fwd.z * to.x;
  return cross > 0 ? -1 : 1;
}

// ---------------------------------------------------------------------------
// Drawing helpers

function sampleCurve(controlPoints, count) {
  if (controlPoints.length < 2) return controlPoints;
  if (controlPoints.length === 2) {
    // No interpolation needed
    return [controlPoints[0], controlPoints[1]];
  }
  const curve = new THREE.CatmullRomCurve3(controlPoints, false, 'centripetal', 0.6);
  return curve.getPoints(count);
}

function makeLine(points, color, opacity, dashed = false) {
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  const mat = dashed
    ? new THREE.LineDashedMaterial({
        color, transparent: true, opacity,
        dashSize: 0.014, gapSize: 0.008,
        depthTest: false,
      })
    : new THREE.LineBasicMaterial({
        color, transparent: true, opacity, depthTest: false,
      });
  const line = new THREE.Line(geo, mat);
  if (dashed) line.computeLineDistances();
  line.renderOrder = 6;
  return line;
}

function makeDot(position, color, opacity) {
  const m = new THREE.Mesh(
    new THREE.CircleGeometry(0.0025, 12).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthTest: false }),
  );
  m.position.copy(position);
  m.renderOrder = 7;
  return m;
}

function makeWaypoint(position, color) {
  const size = 0.008;
  const verts = [
    new THREE.Vector3(0,     0, -size),
    new THREE.Vector3(size,  0,  0),
    new THREE.Vector3(0,     0,  size),
    new THREE.Vector3(-size, 0,  0),
    new THREE.Vector3(0,     0, -size),
  ];
  const geo = new THREE.BufferGeometry().setFromPoints(verts);
  const mat = new THREE.LineBasicMaterial({
    color, transparent: true, opacity: 0.9, depthTest: false,
  });
  const line = new THREE.Line(geo, mat);
  line.position.copy(position);
  line.renderOrder = 7;

  const inner = new THREE.Mesh(
    new THREE.PlaneGeometry(size * 0.8, size * 0.8),
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5, depthWrite: false }),
  );
  inner.rotation.x = -Math.PI / 2;
  inner.rotation.z = Math.PI / 4;
  inner.position.copy(position);
  inner.renderOrder = 6;

  const g = new THREE.Group();
  g.add(line);
  g.add(inner);
  return g;
}
