import * as THREE from 'three';

// Real OKBK geometry built from OpenStreetMap data (public/data/okbk_osm.json),
// fetched once via the Overpass API. Each lat/lon point is projected onto a flat
// tabletop centered on the airport reference point.

export const SCALE = 1 / 5000;
export const OKBK_LAT = 29.2266;
export const OKBK_LON = 47.9689;
const COS_LAT = Math.cos(OKBK_LAT * Math.PI / 180);

export async function buildAirport() {
  const root = new THREE.Group();
  root.userData.scale = SCALE;

  // Compass north marker (small red cone)
  root.add(makeCompass());

  // Fetch the cached OSM dataset
  let osm;
  try {
    const url = `${import.meta.env.BASE_URL}data/okbk_osm.json`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    osm = await res.json();
  } catch (err) {
    console.error('[airport] OSM data fetch failed:', err);
    return root;
  }

  const elements = osm.elements || [];
  const byTag = (tag) => elements.filter((e) => e.tags?.aeroway === tag);

  console.log(`[airport] OSM loaded: ${elements.length} elements`);

  // Render bottom-up so layers stack correctly.
  // 1. Aerodrome boundary — subtle outline
  for (const a of byTag('aerodrome')) {
    const m = makePolygon(a.geometry, 0x33372a, 0.0004, true);
    if (m) root.add(m);
  }

  // 2. Aprons — light grey concrete
  for (const a of byTag('apron')) {
    const m = makePolygon(a.geometry, 0x6a6c72, 0.0008);
    if (m) root.add(m);
  }

  // 3. Taxiways — medium grey ribbons
  for (const t of byTag('taxiway')) {
    const m = makeFlatRibbon(t.geometry, 0x3a3c40, 23, 0.0010);
    if (m) root.add(m);
  }

  // 4. Runway stopways — dark red
  for (const s of byTag('stopway')) {
    const widthM = parseFloat(s.tags.width) || 45;
    const m = makeFlatRibbon(s.geometry, 0x331111, widthM, 0.0012);
    if (m) root.add(m);
  }

  // 5. Runways — dark surface + white centerline
  for (const r of byTag('runway')) {
    const widthM = parseFloat(r.tags.width) || 45;
    const surface = makeFlatRibbon(r.geometry, 0x09090d, widthM, 0.0014);
    if (surface) {
      surface.userData.runway = r.tags.ref;
      root.add(surface);
    }
    const center = makeFlatRibbon(r.geometry, 0xf0f0f0, 1.5, 0.0020);
    if (center) root.add(center);

    // Threshold bars at each end
    const tBar1 = makeThreshold(r.geometry, widthM * 0.85, 6, 0, 0.0021);
    if (tBar1) root.add(tBar1);
    const tBar2 = makeThreshold(r.geometry, widthM * 0.85, 6, r.geometry.length - 1, 0.0021);
    if (tBar2) root.add(tBar2);
  }

  // 6. Helipads
  for (const h of byTag('helipad')) {
    if (h.geometry?.length >= 3) {
      const m = makePolygon(h.geometry, 0x442222, 0.0016);
      if (m) root.add(m);
    }
  }

  // 7. Terminals — extruded buildings
  for (const t of byTag('terminal')) {
    const m = makeBuilding(t.geometry, 0x4a5a78, 22 * SCALE);
    if (m) {
      m.userData.terminal = t.tags.name || t.tags.ref;
      root.add(m);
    }
  }

  // 8. Hangars — slightly shorter
  for (const h of byTag('hangar')) {
    const m = makeBuilding(h.geometry, 0x5a5a62, 14 * SCALE);
    if (m) root.add(m);
  }

  return root;
}

// ---- geometry helpers ----

export function latLonToTab(lat, lon) {
  const dxM = (lon - OKBK_LON) * 111320 * COS_LAT;
  const dzM = -(lat - OKBK_LAT) * 111320;
  return [dxM * SCALE, dzM * SCALE];
}

// Build a flat ribbon (quad strip) along a polyline at the given world-space
// width, sitting at `yOffset`. Each segment is rendered as two triangles;
// corners overlap which is acceptable for a tabletop visualization.
function makeFlatRibbon(geometry, color, widthMeters, yOffset) {
  if (!geometry || geometry.length < 2) return null;
  const halfW = (widthMeters * SCALE) / 2;
  const positions = [];
  const indices = [];

  const pts = geometry.map((p) => latLonToTab(p.lat, p.lon));

  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, z1] = pts[i];
    const [x2, z2] = pts[i + 1];
    const dx = x2 - x1;
    const dz = z2 - z1;
    const len = Math.hypot(dx, dz);
    if (len < 1e-7) continue;
    // Perpendicular (90° rotation in XZ plane)
    const nx = -dz / len;
    const nz = dx / len;

    const v0 = positions.length / 3;
    positions.push(x1 + nx * halfW, yOffset, z1 + nz * halfW);
    positions.push(x1 - nx * halfW, yOffset, z1 - nz * halfW);
    positions.push(x2 + nx * halfW, yOffset, z2 + nz * halfW);
    positions.push(x2 - nx * halfW, yOffset, z2 - nz * halfW);

    indices.push(v0, v0 + 2, v0 + 1, v0 + 1, v0 + 2, v0 + 3);
  }

  if (positions.length === 0) return null;

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  return new THREE.Mesh(
    geo,
    new THREE.MeshStandardMaterial({ color, roughness: 0.92, metalness: 0.0 })
  );
}

function makeThreshold(geometry, lengthMeters, depthMeters, atIndex, yOffset) {
  if (!geometry || atIndex < 0 || atIndex >= geometry.length) return null;
  const pt = geometry[atIndex];
  const neighbor = geometry[atIndex === 0 ? 1 : atIndex - 1];
  const [x1, z1] = latLonToTab(pt.lat, pt.lon);
  const [x2, z2] = latLonToTab(neighbor.lat, neighbor.lon);
  const dx = x2 - x1;
  const dz = z2 - z1;
  const len = Math.hypot(dx, dz);
  if (len < 1e-7) return null;
  // Direction along runway (toward neighbor)
  const tx = dx / len;
  const tz = dz / len;
  // Perpendicular
  const nx = -tz;
  const nz = tx;
  const halfL = (lengthMeters * SCALE) / 2;
  const halfD = (depthMeters * SCALE) / 2;
  // Offset slightly inward from the actual end
  const cx = x1 + tx * halfD * 1.2;
  const cz = z1 + tz * halfD * 1.2;

  const positions = [
    cx + nx * halfL - tx * halfD, yOffset, cz + nz * halfL - tz * halfD,
    cx - nx * halfL - tx * halfD, yOffset, cz - nz * halfL - tz * halfD,
    cx + nx * halfL + tx * halfD, yOffset, cz + nz * halfL + tz * halfD,
    cx - nx * halfL + tx * halfD, yOffset, cz - nz * halfL + tz * halfD,
  ];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex([0, 2, 1, 1, 2, 3]);
  geo.computeVertexNormals();

  return new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
}

function makePolygon(geometry, color, yOffset, transparent = false) {
  if (!geometry || geometry.length < 3) return null;
  const shape = new THREE.Shape();
  for (let i = 0; i < geometry.length; i++) {
    const [x, z] = latLonToTab(geometry[i].lat, geometry[i].lon);
    if (i === 0) shape.moveTo(x, z);
    else shape.lineTo(x, z);
  }
  const geo = new THREE.ShapeGeometry(shape);
  const mat = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.9,
    side: THREE.DoubleSide,
    transparent,
    opacity: transparent ? 0.5 : 1.0,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = yOffset;
  return mesh;
}

function makeBuilding(geometry, color, heightWorld) {
  if (!geometry || geometry.length < 3) return null;
  const shape = new THREE.Shape();
  for (let i = 0; i < geometry.length; i++) {
    const [x, z] = latLonToTab(geometry[i].lat, geometry[i].lon);
    if (i === 0) shape.moveTo(x, z);
    else shape.lineTo(x, z);
  }
  const geo = new THREE.ExtrudeGeometry(shape, { depth: heightWorld, bevelEnabled: false });
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.7, metalness: 0.15 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = -Math.PI / 2;
  return mesh;
}

function makeCompass() {
  const g = new THREE.Group();
  const n = new THREE.Mesh(
    new THREE.ConeGeometry(0.012, 0.025, 4),
    new THREE.MeshBasicMaterial({ color: 0xff5555 })
  );
  n.rotation.x = -Math.PI / 2;
  n.position.set(0, 0.001, -0.65);
  g.add(n);
  return g;
}
