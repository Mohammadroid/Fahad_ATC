import * as THREE from 'three';

// Tabletop scale: 1 world unit = 5 km of real airport.
// Real OKBK is ~5 km × 5 km — model fits in ~1 m × 1 m on the tabletop.
export const SCALE = 1 / 5000;

// OKBK approximate parameters (sandbox geometry — replace with real AIP/OSM data later).
const RUNWAY_LENGTH_M  = 3400;
const RUNWAY_WIDTH_M   = 60;
const RUNWAY_SPACING_M = 500;
const RUNWAY_HEADING_DEG = 153; // 15/33 — true heading of the "15" approach

export function buildAirport() {
  const root = new THREE.Group();
  root.userData.scale = SCALE;

  // Ground apron
  const groundSize = 5000 * SCALE;
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(groundSize, groundSize),
    new THREE.MeshStandardMaterial({ color: 0x2a3d2a, roughness: 0.95 })
  );
  ground.rotation.x = -Math.PI / 2;
  root.add(ground);

  // Compass ring (subtle visual reference for north)
  root.add(makeCompassRing(groundSize * 0.48));

  // Two parallel runways oriented along the 15/33 heading
  const runways = new THREE.Group();
  runways.rotation.y = THREE.MathUtils.degToRad(-RUNWAY_HEADING_DEG);
  runways.add(positionRunway(makeRunway('15L/33R'), -RUNWAY_SPACING_M / 2));
  runways.add(positionRunway(makeRunway('15R/33L'),  RUNWAY_SPACING_M / 2));
  root.add(runways);

  // Terminal block (placeholder — east of runways)
  const terminal = new THREE.Mesh(
    new THREE.BoxGeometry(700 * SCALE, 30 * SCALE, 200 * SCALE),
    new THREE.MeshStandardMaterial({ color: 0x55668a, roughness: 0.6 })
  );
  terminal.position.set(900 * SCALE, 15 * SCALE, 0);
  root.add(terminal);

  // Apron stripes near terminal
  const apron = new THREE.Mesh(
    new THREE.PlaneGeometry(400 * SCALE, 600 * SCALE),
    new THREE.MeshStandardMaterial({ color: 0x6d6d6d, roughness: 0.9 })
  );
  apron.rotation.x = -Math.PI / 2;
  apron.position.set(700 * SCALE, 0.001, 0);
  root.add(apron);

  return root;
}

function positionRunway(rw, offsetMeters) {
  rw.position.x = offsetMeters * SCALE;
  return rw;
}

function makeRunway(label) {
  const g = new THREE.Group();
  g.userData = { runway: label };

  const surface = new THREE.Mesh(
    new THREE.PlaneGeometry(RUNWAY_WIDTH_M * SCALE, RUNWAY_LENGTH_M * SCALE),
    new THREE.MeshStandardMaterial({ color: 0x0d0d10, roughness: 0.95 })
  );
  surface.rotation.x = -Math.PI / 2;
  surface.position.y = 0.0008;
  g.add(surface);

  // Centerline dashes
  const dashes = 28;
  const dashLen = (RUNWAY_LENGTH_M / dashes * 0.55) * SCALE;
  const dashGeo = new THREE.PlaneGeometry(0.6 * SCALE, dashLen);
  const dashMat = new THREE.MeshBasicMaterial({ color: 0xeeeeee });
  for (let i = 0; i < dashes; i++) {
    const d = new THREE.Mesh(dashGeo, dashMat);
    d.rotation.x = -Math.PI / 2;
    d.position.y = 0.0014;
    d.position.z = (i - dashes / 2 + 0.5) * (RUNWAY_LENGTH_M / dashes * SCALE);
    g.add(d);
  }

  // Threshold bars (one per end)
  const thrGeo = new THREE.PlaneGeometry(RUNWAY_WIDTH_M * 0.85 * SCALE, 6 * SCALE);
  const thrMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  for (const sign of [1, -1]) {
    const t = new THREE.Mesh(thrGeo, thrMat);
    t.rotation.x = -Math.PI / 2;
    t.position.set(0, 0.0014, sign * (RUNWAY_LENGTH_M / 2 - 12) * SCALE);
    g.add(t);
  }

  return g;
}

function makeCompassRing(radius) {
  const g = new THREE.Group();
  // North marker
  const n = new THREE.Mesh(
    new THREE.ConeGeometry(0.012, 0.025, 4),
    new THREE.MeshBasicMaterial({ color: 0xff5555 })
  );
  n.rotation.x = -Math.PI / 2;
  n.position.set(0, 0.001, -radius);
  g.add(n);
  // Subtle ring
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(radius - 0.002, radius, 64),
    new THREE.MeshBasicMaterial({ color: 0x3a4a5a, transparent: true, opacity: 0.4 })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.0005;
  g.add(ring);
  return g;
}
