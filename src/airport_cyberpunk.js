import * as THREE from 'three';
import { SCALE, OKBK_LAT, OKBK_LON, latLonToTab } from './airport.js';

// Cyberpunk / holographic-overlay rendering of OKBK.
//
// Aesthetic notes:
//   • Additive-blended cyan line work over a dark base, so on passthrough the
//     lines glow against your real room and on desktop they sit on a deep
//     navy/black plate. Mimics a CAD wireframe / 3-D scan overlay.
//   • Concentric topographic rings radiate from the OKBK reference point —
//     they double as range markers (every ~5 nm at airport scale) and as the
//     "fluid contour lines" called out in the brief.
//   • Animated radar-ping ring pulses outward roughly every 3 s.
//   • Runways are the brightest element; taxiways dimmer; building shells are
//     rendered as wireframe extrusions (base + top + verticals).
//
// Uses the same OSM cache the OSM airport reads (public/data/okbk_osm.json).

const CYBER_CYAN  = 0x00f4ff;
const CYBER_GLOW  = 0x66ffff;
const CYBER_DEEP  = 0x0a1830;
const CYBER_PINK  = 0xff3a8c;

const ground_y    = 0.0001;
const apron_y     = 0.0006;
const taxiway_y   = 0.0010;
const runway_y    = 0.0016;
const building_y0 = 0.0020;

export async function buildAirportCyberpunk() {
  const root = new THREE.Group();
  root.userData.kind = 'airport-cyberpunk';

  // 1. Dark base plate so the wireframes pop on desktop. In passthrough this
  //    sits below the table surface and you mostly see the lines over your
  //    real environment.
  const base = new THREE.Mesh(
    new THREE.PlaneGeometry(2.0, 2.0),
    new THREE.MeshBasicMaterial({ color: CYBER_DEEP, transparent: true, opacity: 0.55 })
  );
  base.rotation.x = -Math.PI / 2;
  base.position.y = ground_y;
  base.userData.kind = 'cyber-base';
  root.add(base);

  // 2. Topographic / range rings — concentric, fading with distance.
  root.add(buildContourRings());

  // 3. Subtle hex/grid overlay (a single faint grid plane)
  root.add(buildGridOverlay());

  // 4. Cardinal/compass marks
  root.add(buildCompass());

  // 5. Animated radar-ping ring
  const ping = buildRadarPing();
  root.add(ping.group);
  root.userData.update = (dt) => ping.update(dt);

  // 6. Load OSM and render runways, taxiways, aprons, buildings
  try {
    const osm = await fetchOSM();
    const els = osm.elements || [];
    const byTag = (tag) => els.filter((e) => e.tags?.aeroway === tag);

    for (const t of byTag('taxiway'))  addTaxiwayLine(root, t);
    for (const a of byTag('apron'))    addPolygonOutline(root, a.geometry, CYBER_CYAN, 0.35, apron_y);
    for (const s of byTag('stopway'))  addStopwayBlock(root, s);
    for (const r of byTag('runway'))   addRunwayWireframe(root, r);
    for (const b of byTag('terminal')) addBuildingWireframe(root, b.geometry, 22 * SCALE, CYBER_GLOW);
    for (const h of byTag('hangar'))   addBuildingWireframe(root, h.geometry, 14 * SCALE, CYBER_CYAN);

    console.log(`[cyber] rendered ${els.length} OSM elements as wireframe`);
  } catch (err) {
    console.warn('[cyber] OSM load failed:', err);
  }

  return root;
}

// ---------------------------------------------------------------------------

async function fetchOSM() {
  const url = `${import.meta.env.BASE_URL}data/okbk_osm.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`OSM HTTP ${res.status}`);
  return res.json();
}

function makeLineMat(color, opacity = 0.85) {
  return new THREE.LineBasicMaterial({
    color, transparent: true, opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
}

// ---- contour / topographic rings ------------------------------------------

function buildContourRings() {
  const g = new THREE.Group();
  // 8 rings from 0.06 m to 0.74 m. At our scale that's roughly 3 nm to 38 nm
  // intervals — close to airport range bands the controller would care about.
  const counts = 8;
  for (let i = 0; i < counts; i++) {
    const r = 0.06 + i * (0.68 / (counts - 1));
    const seg = 96;
    const pts = [];
    for (let j = 0; j <= seg; j++) {
      const a = (j / seg) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * r, ground_y + 0.0001, Math.sin(a) * r));
    }
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const opacity = 0.5 - (i / counts) * 0.35;     // outer rings dimmer
    g.add(new THREE.Line(geo, makeLineMat(CYBER_CYAN, opacity)));
  }

  // Radial spokes every 30°
  const SPOKE_R = 0.76;
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * Math.PI * 2;
    const inner = 0.04, outer = SPOKE_R;
    const pts = [
      new THREE.Vector3(Math.cos(a) * inner, ground_y + 0.0001, Math.sin(a) * inner),
      new THREE.Vector3(Math.cos(a) * outer, ground_y + 0.0001, Math.sin(a) * outer),
    ];
    g.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(pts),
      makeLineMat(CYBER_CYAN, 0.12)
    ));
  }
  return g;
}

function buildGridOverlay() {
  // Faint square grid — 8×8 cells across the visible area.
  const g = new THREE.Group();
  const half = 0.78;
  const cells = 16;
  const step = (half * 2) / cells;
  const positions = [];
  for (let i = 0; i <= cells; i++) {
    const t = -half + i * step;
    positions.push(-half, ground_y + 0.00005, t,  half, ground_y + 0.00005, t);
    positions.push(t, ground_y + 0.00005, -half,  t, ground_y + 0.00005,  half);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.add(new THREE.LineSegments(geo, makeLineMat(CYBER_CYAN, 0.08)));
  return g;
}

function buildCompass() {
  const g = new THREE.Group();
  // North arrow in pink (the only non-cyan accent — sells the cyberpunk
  // colour-pop)
  const r = 0.72;
  const pts = [
    new THREE.Vector3(0, ground_y + 0.0003, -r + 0.04),
    new THREE.Vector3(0, ground_y + 0.0003, -r - 0.025),
    new THREE.Vector3(-0.018, ground_y + 0.0003, -r + 0.005),
    new THREE.Vector3(0, ground_y + 0.0003, -r - 0.025),
    new THREE.Vector3(0.018, ground_y + 0.0003, -r + 0.005),
  ];
  g.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    makeLineMat(CYBER_PINK, 1.0)
  ));
  return g;
}

// ---- animated radar ping --------------------------------------------------

function buildRadarPing() {
  const group = new THREE.Group();
  const seg = 96;
  const pts = [];
  for (let j = 0; j <= seg; j++) {
    const a = (j / seg) * Math.PI * 2;
    pts.push(new THREE.Vector3(Math.cos(a), ground_y + 0.0002, Math.sin(a)));
  }
  const geo = new THREE.BufferGeometry().setFromPoints(pts);
  const mat = makeLineMat(CYBER_GLOW, 1.0);
  const line = new THREE.Line(geo, mat);
  group.add(line);

  let phase = 0;
  function update(dt) {
    phase += dt / 3.5; // ~3.5 s period
    if (phase > 1) phase -= 1;
    const r = 0.04 + phase * 0.74;
    line.scale.set(r, 1, r);
    line.material.opacity = (1 - phase) * 0.9;
  }
  return { group, update };
}

// ---- runway wireframe -----------------------------------------------------

function addRunwayWireframe(root, way) {
  if (!way.geometry || way.geometry.length < 2) return;
  const widthM = parseFloat(way.tags.width) || 45;
  const halfW = (widthM * SCALE) / 2;

  const pts = way.geometry.map((p) => {
    const [x, z] = latLonToTab(p.lat, p.lon);
    return new THREE.Vector3(x, runway_y, z);
  });

  // Centerline — solid, bright
  const center = new THREE.BufferGeometry().setFromPoints(pts);
  root.add(new THREE.Line(center, makeLineMat(CYBER_GLOW, 1.0)));

  // Parallel edges (offset perpendicular to each segment).
  for (const sign of [-1, 1]) {
    const edgePts = [];
    for (let i = 0; i < pts.length; i++) {
      const prev = pts[Math.max(i - 1, 0)];
      const next = pts[Math.min(i + 1, pts.length - 1)];
      const dx = next.x - prev.x;
      const dz = next.z - prev.z;
      const len = Math.hypot(dx, dz) || 1e-6;
      const nx = -dz / len * sign;
      const nz =  dx / len * sign;
      edgePts.push(new THREE.Vector3(pts[i].x + nx * halfW, runway_y, pts[i].z + nz * halfW));
    }
    const edgeGeo = new THREE.BufferGeometry().setFromPoints(edgePts);
    root.add(new THREE.Line(edgeGeo, makeLineMat(CYBER_CYAN, 0.85)));
  }

  // Threshold bars at each end (perpendicular line segments)
  for (const idx of [0, pts.length - 1]) {
    const ref = pts[idx];
    const neighbor = pts[idx === 0 ? 1 : pts.length - 2];
    const dx = neighbor.x - ref.x;
    const dz = neighbor.z - ref.z;
    const len = Math.hypot(dx, dz) || 1e-6;
    const nx = -dz / len;
    const nz =  dx / len;
    const bar = [
      new THREE.Vector3(ref.x + nx * halfW * 0.85, runway_y + 0.0002, ref.z + nz * halfW * 0.85),
      new THREE.Vector3(ref.x - nx * halfW * 0.85, runway_y + 0.0002, ref.z - nz * halfW * 0.85),
    ];
    root.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(bar),
      makeLineMat(CYBER_PINK, 1.0)
    ));
  }

  // Runway label "33L" / "15R" etc. — small glow tick at each end.
}

function addStopwayBlock(root, way) {
  if (!way.geometry || way.geometry.length < 2) return;
  const widthM = parseFloat(way.tags.width) || 45;
  const halfW = (widthM * SCALE) / 2;
  const pts = way.geometry.map((p) => {
    const [x, z] = latLonToTab(p.lat, p.lon);
    return new THREE.Vector3(x, runway_y - 0.0002, z);
  });
  for (const sign of [-1, 1]) {
    const edgePts = [];
    for (let i = 0; i < pts.length; i++) {
      const prev = pts[Math.max(i - 1, 0)];
      const next = pts[Math.min(i + 1, pts.length - 1)];
      const dx = next.x - prev.x, dz = next.z - prev.z;
      const len = Math.hypot(dx, dz) || 1e-6;
      const nx = -dz / len * sign, nz = dx / len * sign;
      edgePts.push(new THREE.Vector3(pts[i].x + nx * halfW, pts[i].y, pts[i].z + nz * halfW));
    }
    root.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(edgePts),
      makeLineMat(CYBER_PINK, 0.5)
    ));
  }
}

// ---- taxiway lines --------------------------------------------------------

function addTaxiwayLine(root, way) {
  if (!way.geometry || way.geometry.length < 2) return;
  const pts = way.geometry.map((p) => {
    const [x, z] = latLonToTab(p.lat, p.lon);
    return new THREE.Vector3(x, taxiway_y, z);
  });
  const geo = new THREE.BufferGeometry().setFromPoints(pts);
  root.add(new THREE.Line(geo, makeLineMat(CYBER_CYAN, 0.35)));
}

// ---- polygon outlines (aprons, helipads) ---------------------------------

function addPolygonOutline(root, geometry, color, opacity, y) {
  if (!geometry || geometry.length < 3) return;
  const pts = geometry.map((p) => {
    const [x, z] = latLonToTab(p.lat, p.lon);
    return new THREE.Vector3(x, y, z);
  });
  pts.push(pts[0].clone());
  root.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(pts),
    makeLineMat(color, opacity)
  ));
}

// ---- building wireframe (base + top + vertical edges) --------------------

function addBuildingWireframe(root, geometry, heightWorld, color) {
  if (!geometry || geometry.length < 3) return;

  const base = geometry.map((p) => {
    const [x, z] = latLonToTab(p.lat, p.lon);
    return new THREE.Vector3(x, building_y0, z);
  });
  const top = base.map((p) => new THREE.Vector3(p.x, p.y + heightWorld, p.z));

  const baseClosed = [...base, base[0].clone()];
  const topClosed = [...top, top[0].clone()];

  root.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(baseClosed),
    makeLineMat(color, 0.85)
  ));
  root.add(new THREE.Line(
    new THREE.BufferGeometry().setFromPoints(topClosed),
    makeLineMat(color, 0.65)
  ));

  // Vertical edges
  for (let i = 0; i < base.length; i++) {
    const seg = [base[i], top[i]];
    root.add(new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(seg),
      makeLineMat(color, 0.55)
    ));
  }
}
