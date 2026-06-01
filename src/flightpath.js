import * as THREE from 'three';
import { SCALE } from './airport.js';

// Curved flight-path overlay for a selected airborne aircraft.
//
// Paths are 3-D: both the past trail (solid) and the projected path (dashed)
// terminate AT the aircraft's actual position (including altitude), so they
// visually attach to the aircraft and don't lie flat on the ground.
//
//   • Past trail: 5 control points curving in from a vectoring leg ~25 nm
//     back, ending at the aircraft. Altitude tapers: higher further back for
//     INBOUND (descent), lower at the runway end for OUTBOUND (climb-out).
//   • Projected path: 4 control points starting at the aircraft. For INBOUND
//     it descends along the final-approach corridor onto the runway threshold;
//     for OUTBOUND it climbs and turns toward the destination if known.
//
// The path is rebuilt per frame for the selected aircraft (see interaction.js)
// so it tracks the aircraft if it's moving (sandbox simulator).

const NM_TO_M = 1852;
const PATH_RANGE_NM = 25;
const SAMPLE_COUNT = 48;

const OKBK_LAT = 29.2266;
const OKBK_LON = 47.9689;
const COS_LAT = Math.cos(OKBK_LAT * Math.PI / 180);

// OKBK runways — coordinates from OSM aeroway data, headings from the AIP
// chart. Three physical runways:
//   • 15L / 33R — east civilian runway (asphalt, 3500 m)
//   • 15R / 33L — middle civilian runway (concrete, 3400 m)
//   •  16 / 34  — west military runway (parallel pair to the east)
// Each entry: { thr: lat/lon of the threshold, hdg: degrees true the aircraft
// is pointing when landing on this end }.
const RUNWAYS = {
  '33R': { thr: { lat: 29.2126, lon: 47.9986 }, hdg: 335 },  // east, south thr
  '33L': { thr: { lat: 29.2127, lon: 47.9763 }, hdg: 335 },  // middle, south thr
  '15L': { thr: { lat: 29.2412, lon: 47.9834 }, hdg: 155 },  // east, north thr
  '15R': { thr: { lat: 29.2405, lon: 47.9615 }, hdg: 155 },  // middle, north thr
  '34':  { thr: { lat: 29.1899, lon: 47.9623 }, hdg: 343 },  // west military, south thr
  '16':  { thr: { lat: 29.2293, lon: 47.9414 }, hdg: 163 },  // west military, north thr
};

const STATE_COLORS = {
  AIRBORNE_IN:  0x4499ff,
  AIRBORNE_OUT: 0xff8844,
  CLEARED:      0x33ff77,
  TAXI:         0xffcc33,
  QUEUED:       0xff6633,
  PARKED:       0x808080,
};

const KNOWN_AIRPORTS = {
  OKBK: { lat: 29.2266, lon:  47.9689 }, KWI: { lat: 29.2266, lon:  47.9689 },
  LHR:  { lat: 51.4775, lon:  -0.4614 }, KUL: { lat:  2.7456, lon: 101.7099 },
  JED:  { lat: 21.6796, lon:  39.1565 }, BOM: { lat: 19.0887, lon:  72.8679 },
  DEL:  { lat: 28.5562, lon:  77.1000 }, DXB: { lat: 25.2532, lon:  55.3657 },
  DOH:  { lat: 25.2731, lon:  51.6080 }, AUH: { lat: 24.4330, lon:  54.6511 },
  BAH:  { lat: 26.2708, lon:  50.6336 }, IST: { lat: 41.2753, lon:  28.7519 },
  BEY:  { lat: 33.8208, lon:  35.4884 }, ISU: { lat: 35.5677, lon:  45.3169 },
};

// Map altitude (feet) → vertical position in tabletop world units. Mirrors the
// altLift formula in snapshot.js so the path altitude matches the aircraft's.
function altYFromFt(altFt) {
  if (altFt == null || altFt <= 0) return 0.005;
  return 0.04 + Math.min(altFt / 12000, 1.5) * 0.10;
}

function latLonToLocalXZ(lat, lon) {
  const dxM = (lon - OKBK_LON) * 111320 * COS_LAT;
  const dzM = -(lat - OKBK_LAT) * 111320;
  return { x: dxM * SCALE, z: dzM * SCALE };
}

export function buildFlightPath(aircraft) {
  const data = aircraft.userData;
  const isAirborne = !data.on_ground && (data.alt || 0) >= 100;
  if (!isAirborne) return null;

  const group = new THREE.Group();
  group.userData.isFlightPath = true;

  // Aircraft's CURRENT 3-D position (with altitude). Every path endpoint
  // touching the aircraft uses this exact point.
  const pos = aircraft.position.clone();
  const acAltFt = data.alt || 0;

  const stateColor = STATE_COLORS[data.state] || 0xffffff;

  const pastPoints   = buildPastPoints(pos, acAltFt, data);
  const futurePoints = buildFuturePoints(pos, acAltFt, data);

  if (pastPoints.length >= 2) {
    const samples = sampleCurve(pastPoints, SAMPLE_COUNT);
    group.add(makeLine(samples, 0xc8d0d8, 0.65, false));
    // Sparse dots along the past trail to evoke ADS-B fixes
    for (let i = 4; i < samples.length - 2; i += 6) {
      group.add(makeDot(samples[i], 0xc8d0d8, 0.7));
    }
  }

  if (futurePoints.length >= 2) {
    const samples = sampleCurve(futurePoints, SAMPLE_COUNT);
    group.add(makeLine(samples, stateColor, 0.9, true));
  }

  if (futurePoints.length > 0) {
    group.add(makeWaypoint(futurePoints[futurePoints.length - 1], stateColor));
  }

  return group;
}

// ---------------------------------------------------------------------------
// Past trail control points — end at aircraft, start ~25 nm behind on a
// vectoring leg with appropriate altitude profile.

function buildPastPoints(pos, acAltFt, data) {
  const hdg = THREE.MathUtils.degToRad(data.hdg || 0);
  const fwd = new THREE.Vector3(Math.sin(hdg), 0, -Math.cos(hdg));
  const right = new THREE.Vector3(-fwd.z, 0, fwd.x);
  const range = PATH_RANGE_NM * NM_TO_M * SCALE;
  const acY = pos.y;

  if (data.state === 'AIRBORNE_IN') {
    // Descending in; past altitude higher than current
    const pastAltFt = Math.min(acAltFt * 1.6, 18000);
    const pastY = altYFromFt(pastAltFt);
    const originSide = originSideSign(pos, fwd, data);

    // 5 control points from farthest back (high) to aircraft (current)
    return [
      mkPt(pos, fwd, right, -range,        range * 0.45 * originSide, pastY),
      mkPt(pos, fwd, right, -range * 0.65, range * 0.25 * originSide, lerp(pastY, acY, 0.40)),
      mkPt(pos, fwd, right, -range * 0.35, range * 0.06 * originSide, lerp(pastY, acY, 0.70)),
      mkPt(pos, fwd, right, -range * 0.12, 0,                         lerp(pastY, acY, 0.90)),
      pos.clone(),
    ];
  }

  if (data.state === 'AIRBORNE_OUT') {
    // Climbing out from runway: pick the heading-matching departure runway
    // and start the past trail at its threshold.
    const rw = pickDepartureRunway(data.hdg);
    const startXZ = latLonToLocalXZ(rw.thr.lat, rw.thr.lon);
    const start = new THREE.Vector3(startXZ.x, altYFromFt(0), startXZ.z);
    const distToStart = pos.clone().setY(0).distanceTo(start.clone().setY(0));
    const sideSign = destSideSign(pos, fwd, data);

    return [
      start,
      mkPt(pos, fwd, right, -distToStart * 0.66, distToStart * 0.12 * sideSign, lerp(start.y, acY, 0.34)),
      mkPt(pos, fwd, right, -distToStart * 0.33, distToStart * 0.04 * sideSign, lerp(start.y, acY, 0.70)),
      pos.clone(),
    ];
  }

  // Generic cruise — straight back along reverse heading at same altitude
  return [
    mkPt(pos, fwd, right, -range,        0, acY),
    mkPt(pos, fwd, right, -range * 0.5,  0, acY),
    pos.clone(),
  ];
}

// ---------------------------------------------------------------------------
// Projected path — starts at aircraft, ends at runway threshold or projection.

function buildFuturePoints(pos, acAltFt, data) {
  const hdg = THREE.MathUtils.degToRad(data.hdg || 0);
  const fwd = new THREE.Vector3(Math.sin(hdg), 0, -Math.cos(hdg));
  const right = new THREE.Vector3(-fwd.z, 0, fwd.x);
  const range = PATH_RANGE_NM * NM_TO_M * SCALE;
  const acY = pos.y;

  if (data.state === 'AIRBORNE_IN') {
    // Pick the runway whose heading best matches the aircraft's heading +
    // whose threshold is nearest. Use the runway's actual heading (335° for 33L,
    // 343° for 34, etc.) — not the aircraft's heading — to align the final
    // approach corridor onto the real centerline.
    const rw = pickArrivalRunway(data.hdg, pos);
    const thrY = altYFromFt(0);
    const thrXZ = latLonToLocalXZ(rw.thr.lat, rw.thr.lon);
    const threshold = new THREE.Vector3(thrXZ.x, thrY, thrXZ.z);

    const toThrFlat = new THREE.Vector3(threshold.x - pos.x, 0, threshold.z - pos.z);
    const distToThr = toThrFlat.length();

    // Runway forward direction (aircraft is flying along this when landing).
    const rwyHdgRad = THREE.MathUtils.degToRad(rw.hdg);
    const rwyFwd = new THREE.Vector3(Math.sin(rwyHdgRad), 0, -Math.cos(rwyHdgRad));

    // Intercept point ON the extended centerline behind the threshold.
    const interceptDist = Math.min(distToThr * 0.55, range * 0.4);
    const finalIntercept = threshold.clone().sub(rwyFwd.clone().multiplyScalar(interceptDist));
    finalIntercept.y = lerp(acY, thrY, 0.70);

    // Mid point in front of the aircraft, dropping altitude — Catmull-Rom
    // smooths the bend onto the runway centerline.
    const mid = pos.clone().add(fwd.clone().multiplyScalar(distToThr * 0.30));
    mid.y = lerp(acY, thrY, 0.30);

    return [
      pos.clone(),
      mid,
      finalIntercept,
      threshold,
    ];
  }

  if (data.state === 'AIRBORNE_OUT') {
    // Climbing out and turning toward destination
    const sideSign = destSideSign(pos, fwd, data);
    const futureAltFt = Math.min(acAltFt + 4000, 24000);
    const futureY = altYFromFt(futureAltFt);

    return [
      pos.clone(),
      mkPt(pos, fwd, right, range * 0.30, range * 0.05 * sideSign, lerp(acY, futureY, 0.30)),
      mkPt(pos, fwd, right, range * 0.60, range * 0.18 * sideSign, lerp(acY, futureY, 0.60)),
      mkPt(pos, fwd, right, range * 0.95, range * 0.32 * sideSign, futureY),
    ];
  }

  // Generic cruise: straight ahead at same altitude
  return [
    pos.clone(),
    mkPt(pos, fwd, right, range, 0, acY),
  ];
}

// ---------------------------------------------------------------------------
// Heuristics & helpers

function mkPt(pos, fwd, right, fwdDist, rightDist, y) {
  const p = pos.clone()
    .add(fwd.clone().multiplyScalar(fwdDist))
    .add(right.clone().multiplyScalar(rightDist));
  p.y = y;
  return p;
}

function lerp(a, b, t) { return a + (b - a) * t; }

// Smallest signed angular difference between two compass headings (degrees).
function headingDiff(a, b) {
  let d = ((a - b) % 360 + 540) % 360 - 180;
  return Math.abs(d);
}

// Build candidate list for the heading, sorted by how close their landing
// heading is to the aircraft's actual heading.
function candidatesForHeading(hdgDeg) {
  const codes = Object.keys(RUNWAYS);
  return codes
    .map((code) => ({ code, ...RUNWAYS[code], diff: headingDiff(RUNWAYS[code].hdg, hdgDeg) }))
    .filter((r) => r.diff < 30)         // within 30° of aircraft heading
    .sort((a, b) => a.diff - b.diff);
}

function pickArrivalRunway(hdgDeg, pos) {
  if (hdgDeg == null) return RUNWAYS['33L'];
  const cands = candidatesForHeading(hdgDeg);
  if (!cands.length) return RUNWAYS['33L'];
  // Among heading-compatible runways pick the closest threshold to the aircraft.
  let best = cands[0], bestDist = Infinity;
  for (const r of cands) {
    const xz = latLonToLocalXZ(r.thr.lat, r.thr.lon);
    const d = (xz.x - pos.x) ** 2 + (xz.z - pos.z) ** 2;
    if (d < bestDist) { best = r; bestDist = d; }
  }
  return best;
}

function pickDepartureRunway(hdgDeg) {
  if (hdgDeg == null) return RUNWAYS['33L'];
  const cands = candidatesForHeading(hdgDeg);
  return cands[0] || RUNWAYS['33L'];
}

function originSideSign(pos, fwd, data) {
  const o = data.origin && KNOWN_AIRPORTS[data.origin];
  if (!o) return 1;
  const xz = latLonToLocalXZ(o.lat, o.lon);
  const back = fwd.clone().negate();
  const tox = xz.x - pos.x, toz = xz.z - pos.z;
  const cross = back.x * toz - back.z * tox;
  return cross > 0 ? -1 : 1;
}

function destSideSign(pos, fwd, data) {
  const d = data.destination && KNOWN_AIRPORTS[data.destination];
  if (!d) return -1;
  const xz = latLonToLocalXZ(d.lat, d.lon);
  const tox = xz.x - pos.x, toz = xz.z - pos.z;
  const cross = fwd.x * toz - fwd.z * tox;
  return cross > 0 ? -1 : 1;
}

function sampleCurve(controlPoints, count) {
  if (controlPoints.length < 2) return controlPoints;
  if (controlPoints.length === 2) return controlPoints;
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
    new THREE.SphereGeometry(0.0028, 8, 6),
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
    new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, depthWrite: false }),
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

// ---------------------------------------------------------------------------
// Disposal — called by the interaction layer when an aircraft is deselected
// or its path is being rebuilt to track movement.

export function disposeFlightPath(group) {
  if (!group) return;
  group.traverse((obj) => {
    if (obj.geometry) obj.geometry.dispose();
    if (obj.material) {
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) m.dispose();
    }
  });
}
