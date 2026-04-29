import * as THREE from 'three';
import { SCALE } from './airport.js';

// Build a flight-path overlay for an airborne aircraft:
//   • Past trail: a thin grey line going backwards along reverse heading
//   • Projected path: a brighter line going forward along heading, terminating
//     at OKBK reference (for inbounds) or 30 NM ahead (for outbounds), with
//     a small diamond waypoint marker at the end.
//
// Returned group is added to the same parent as the aircraft (the tabletop)
// so it shares the airport's coordinate system. Caller toggles `.visible`.

const NM_TO_M = 1852;
const PATH_RANGE_NM = 30;

const STATE_COLORS = {
  AIRBORNE_IN:  0x4499ff,
  AIRBORNE_OUT: 0xff8844,
  CLEARED:      0x33ff77,
  TAXI:         0xffcc33,
  QUEUED:       0xff6633,
  PARKED:       0x808080,
};

export function buildFlightPath(aircraft) {
  const data = aircraft.userData;
  const isAirborne = !data.on_ground && (data.alt || 0) >= 100;
  if (!isAirborne) return null;

  const group = new THREE.Group();
  group.userData.isFlightPath = true;

  // Position in tabletop-local coords, projected onto ground (y = 0)
  const pos = aircraft.position.clone();
  pos.y = 0.0022; // sits just above the ground/runway surfaces

  // Heading vector in tabletop-local frame.
  // Convention: heading 0° = north, +Z is south on the table → heading dir = (sin θ, 0, -cos θ).
  const hdg = THREE.MathUtils.degToRad(data.hdg || 0);
  const dir = new THREE.Vector3(Math.sin(hdg), 0, -Math.cos(hdg));

  const range = PATH_RANGE_NM * NM_TO_M * SCALE;

  // ----- past trail: reverse heading, faded grey -----
  const pastEnd = pos.clone().sub(dir.clone().multiplyScalar(range));
  group.add(makeLine([pos, pastEnd], 0x9aa4b2, 0.35));

  // ----- projected path -----
  let futureEnd;
  let futureColor = STATE_COLORS[data.state] || 0xffffff;
  let dashed = true;
  if (data.state === 'AIRBORNE_IN') {
    // Aim at OKBK reference (origin in tabletop-local frame)
    futureEnd = new THREE.Vector3(0, pos.y, 0);
  } else {
    // Outbound or cruising: project ahead by PATH_RANGE_NM
    futureEnd = pos.clone().add(dir.clone().multiplyScalar(range));
  }
  group.add(makeLine([pos, futureEnd], futureColor, 0.85, dashed));

  // ----- destination waypoint marker -----
  group.add(makeWaypoint(futureEnd, futureColor));

  // ----- altitude tick at current position (a small vertical drop line) -----
  // Aircraft is above the ground at altitude * SCALE * exaggeration; show its
  // vertical distance to ground as a thin line.
  const acWorldY = aircraft.position.y;
  if (acWorldY > 0.01) {
    const drop = makeLine(
      [new THREE.Vector3(pos.x, acWorldY, pos.z), pos.clone()],
      futureColor, 0.5
    );
    group.add(drop);
  }

  return group;
}

function makeLine(points, color, opacity, dashed = false) {
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  const mat = dashed
    ? new THREE.LineDashedMaterial({
        color, transparent: true, opacity,
        dashSize: 0.012, gapSize: 0.006,
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

function makeWaypoint(position, color) {
  // Small diamond on the ground
  const size = 0.008;
  const verts = [
    new THREE.Vector3(0,        0, -size),
    new THREE.Vector3(size,     0,  0),
    new THREE.Vector3(0,        0,  size),
    new THREE.Vector3(-size,    0,  0),
    new THREE.Vector3(0,        0, -size),
  ];
  const geo = new THREE.BufferGeometry().setFromPoints(verts);
  const mat = new THREE.LineBasicMaterial({
    color, transparent: true, opacity: 0.9, depthTest: false,
  });
  const line = new THREE.Line(geo, mat);
  line.position.copy(position);
  line.renderOrder = 7;

  // Inner filled diamond for emphasis
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
