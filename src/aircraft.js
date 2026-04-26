import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { SCALE } from './airport.js';

// Aircraft visualization. Each aircraft starts with a procedural placeholder
// mesh so it appears immediately, then asynchronously upgrades to a real glTF
// airliner model from public/models/ — scaled to its ICAO-type real dimensions
// and tinted with the airline's livery body colour.
//
// Models are CC-BY 3.0 from Poly Pizza — see CREDITS.md for attribution.

export const STATES = {
  PARKED:       { color: 0xb0b0b0, label: 'PARKED'   },
  TAXI:         { color: 0xffcc33, label: 'TAXI'     },
  QUEUED:       { color: 0xff6633, label: 'HOLD'     },
  CLEARED:      { color: 0x33ff77, label: 'CLEARED'  },
  AIRBORNE_OUT: { color: 0xff8844, label: 'OUTBOUND' },
  AIRBORNE_IN:  { color: 0x4499ff, label: 'INBOUND'  },
};

const ACFT_SCALE = 1 / 1500;             // 3.3× exaggeration over the 1/5000 airport scale
const LABEL_HEIGHT = 0.075;               // 75 mm above aircraft origin — well clear of any silhouette

// Real ICAO-type dimensions (metres, length × wingspan × height)
const TYPE_DIMS = {
  B737: { len: 33.6, span: 28.9, ht: 11.1 }, B738: { len: 39.5, span: 35.8, ht: 12.5 },
  B739: { len: 42.1, span: 35.8, ht: 12.5 }, B752: { len: 47.3, span: 38.1, ht: 13.6 },
  B763: { len: 54.9, span: 47.6, ht: 15.8 }, B772: { len: 63.7, span: 60.9, ht: 18.5 },
  B77W: { len: 73.9, span: 64.8, ht: 18.6 }, B788: { len: 56.7, span: 60.1, ht: 17.0 },
  B789: { len: 62.8, span: 60.1, ht: 17.0 }, B78X: { len: 68.3, span: 60.1, ht: 17.0 },
  B748: { len: 76.3, span: 68.4, ht: 19.4 },
  A319: { len: 33.8, span: 35.8, ht: 11.8 }, A320: { len: 37.6, span: 35.8, ht: 11.8 },
  A321: { len: 44.5, span: 35.8, ht: 11.8 }, A332: { len: 58.8, span: 60.3, ht: 17.4 },
  A333: { len: 63.7, span: 60.3, ht: 16.8 }, A359: { len: 66.8, span: 64.8, ht: 17.1 },
  A35K: { len: 73.8, span: 64.8, ht: 17.1 }, A388: { len: 72.7, span: 79.8, ht: 24.1 },
  E170: { len: 29.9, span: 26.0, ht:  9.85 }, E190: { len: 36.2, span: 28.7, ht: 10.6 },
};
const DEFAULT_DIM = TYPE_DIMS.A320;

// Airline liveries by ICAO callsign prefix.
const LIVERIES = {
  KAC: { body: 0xeeeeee, accent: 0x1a4ea3, name: 'Kuwait Airways'  },
  JZR: { body: 0xeeeeee, accent: 0xc8102e, name: 'Jazeera Airways' },
  WJA: { body: 0xeeeeee, accent: 0xfff200, name: 'Wataniya'        },
  UAE: { body: 0xf2f2f2, accent: 0xc41230, name: 'Emirates'        },
  QTR: { body: 0xeeeeee, accent: 0x5c0632, name: 'Qatar Airways'   },
  ETD: { body: 0xeeeeee, accent: 0xb89048, name: 'Etihad'          },
  FDB: { body: 0xeeeeee, accent: 0xff7f00, name: 'flydubai'        },
  GFA: { body: 0xeeeeee, accent: 0x1a4f96, name: 'Gulf Air'        },
  KNE: { body: 0xeeeeee, accent: 0x009b48, name: 'Saudia'          },
  OMA: { body: 0xeeeeee, accent: 0x118456, name: 'Oman Air'        },
  THY: { body: 0xeeeeee, accent: 0xc70a0c, name: 'Turkish Airlines'},
  IGO: { body: 0xeeeeee, accent: 0x1c3f95, name: 'IndiGo'          },
  AIC: { body: 0xeeeeee, accent: 0xd71920, name: 'Air India'       },
  DLH: { body: 0xeeeeee, accent: 0xfedb00, name: 'Lufthansa'       },
  BAW: { body: 0xeeeeee, accent: 0x1d3a6f, name: 'British Airways' },
};
const DEFAULT_LIVERY = { body: 0xcccccc, accent: 0x808080, name: '' };

// Map ICAO type → glTF asset (relative to public/models/). Falls back to DEFAULT_MODEL.
const TYPE_TO_MODEL = {
  B748: 'b747.glb', B747: 'b747.glb', A388: 'b747.glb',
  B788: 'b787.glb', B789: 'b787.glb', B78X: 'b787.glb',
  B772: 'airliner_detail.glb', B77W: 'airliner_detail.glb',
  A332: 'airliner_detail.glb', A333: 'airliner_detail.glb',
  A359: 'airliner_detail.glb', A35K: 'airliner_detail.glb',
  B763: 'airliner_detail.glb',
  A319: 'airliner_gear.glb',   A320: 'airliner_gear.glb', A321: 'airliner_gear.glb',
  B737: 'airliner_gear.glb',   B738: 'airliner_gear.glb', B739: 'airliner_gear.glb',
  B752: 'airliner_gear.glb',
  E170: 'airliner_gear.glb',   E190: 'airliner_gear.glb',
};
const DEFAULT_MODEL = 'airliner_detail.glb';

const loader = new GLTFLoader();
const modelCache = new Map();

function loadModel(url) {
  if (!modelCache.has(url)) {
    modelCache.set(url, new Promise((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    }));
  }
  return modelCache.get(url);
}

function getLivery(callsign) {
  const prefix = (callsign || '').slice(0, 3).toUpperCase();
  return LIVERIES[prefix] || DEFAULT_LIVERY;
}

function getDims(typeCode) {
  return TYPE_DIMS[(typeCode || '').toUpperCase()] || DEFAULT_DIM;
}

export function buildAircraftGroup(data) {
  const group = new THREE.Group();
  group.userData = { ...data };

  const livery = getLivery(data.callsign);
  const stateInfo = STATES[data.state] || STATES.PARKED;

  // 1. Procedural fallback — appears immediately, replaced when glTF loads
  const proc = buildProceduralMesh(data, livery, stateInfo);
  group.add(proc);
  group.userData.model = proc;

  // 2. Persistent state ring (sits underneath the model, not parented to it)
  const dim = getDims(data.type);
  const targetL = dim.len * ACFT_SCALE;
  const ring = makeStateRing(targetL, stateInfo.color);
  group.add(ring);
  group.userData.stateRing = ring;

  // 3. Floating callsign card high above the aircraft
  const labelText = `${data.callsign}\n${data.type || '?'}  ${stateInfo.label}`;
  const label = makeLabelSprite(labelText, livery.accent);
  label.position.y = LABEL_HEIGHT;
  group.add(label);
  group.userData.label = label;

  // 4. Leader line linking aircraft to its card
  const leader = makeLeaderLine(LABEL_HEIGHT, livery.accent);
  group.add(leader);
  group.userData.leader = leader;

  // 5. Heading rotation
  group.rotation.y = THREE.MathUtils.degToRad(-(data.hdg || 0));

  // 6. Async upgrade to a real glTF airliner
  upgradeToGltf(group, data, livery).catch((err) => {
    console.warn('[aircraft] glTF upgrade failed for', data.callsign, err);
  });

  return group;
}

async function upgradeToGltf(group, data, livery) {
  const fname = TYPE_TO_MODEL[(data.type || '').toUpperCase()] || DEFAULT_MODEL;
  const url = `${import.meta.env.BASE_URL}models/${fname}`;

  let gltf;
  try {
    gltf = await loadModel(url);
  } catch (err) {
    console.warn('[aircraft] failed to load', url, err);
    return;
  }

  // Deep-clone the cached scene + clone all materials so per-instance livery
  // tints don't bleed into the shared cache.
  const scene = gltf.scene.clone(true);
  scene.traverse((o) => {
    if (!o.isMesh) return;
    if (Array.isArray(o.material)) o.material = o.material.map((m) => m.clone());
    else if (o.material) o.material = o.material.clone();
  });

  // Detect orientation: longest axis of the bbox = fuselage length.
  const initBbox = new THREE.Box3().setFromObject(scene);
  const initSize = initBbox.getSize(new THREE.Vector3());
  const sizes = [initSize.x, initSize.y, initSize.z];
  const longestIdx = sizes.indexOf(Math.max(...sizes));
  // Rotate so longest axis points along world +Z (our heading axis).
  if (longestIdx === 0) scene.rotation.y = -Math.PI / 2;
  else if (longestIdx === 1) scene.rotation.x = Math.PI / 2;

  // Wrap so we can apply additional transforms cleanly.
  const wrapper = new THREE.Group();
  wrapper.add(scene);

  // Scale to the ICAO type's real length.
  const postBbox = new THREE.Box3().setFromObject(wrapper);
  const postSize = postBbox.getSize(new THREE.Vector3());
  const dim = getDims(data.type);
  const targetL = dim.len * ACFT_SCALE;
  const scaleFactor = targetL / Math.max(postSize.z, 1e-6);
  wrapper.scale.multiplyScalar(scaleFactor);

  // Recenter so origin = mid-fuselage, ground level (bbox.min.y → 0).
  const finalBbox = new THREE.Box3().setFromObject(wrapper);
  const center = finalBbox.getCenter(new THREE.Vector3());
  wrapper.position.x = -center.x;
  wrapper.position.z = -center.z;
  wrapper.position.y = -finalBbox.min.y;

  applyLivery(wrapper, livery);

  // Swap procedural mesh for the loaded model.
  const old = group.userData.model;
  if (old) group.remove(old);
  group.add(wrapper);
  group.userData.model = wrapper;
}

function applyLivery(root, livery) {
  const body = new THREE.Color(livery.body);
  const accent = new THREE.Color(livery.accent);
  root.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    for (const mat of mats) {
      if (!mat.color) continue;
      const c = mat.color;
      const lum = 0.299 * c.r + 0.587 * c.g + 0.114 * c.b;
      // Tint bright materials (the airline body) — leave dark ones (engines, glass) alone.
      if (lum > 0.35) {
        c.copy(body);
      }
      // Subtle airline-accent emissive glow on every panel
      if (mat.emissive) {
        mat.emissive.copy(accent);
        mat.emissiveIntensity = 0.06;
      }
      if (mat.metalness !== undefined) mat.metalness = Math.max(mat.metalness, 0.4);
      if (mat.roughness !== undefined) mat.roughness = Math.min(mat.roughness, 0.5);
    }
  });
}

function buildProceduralMesh(data, livery, stateInfo) {
  const dim = getDims(data.type);
  const L = dim.len * ACFT_SCALE;
  const S = dim.span * ACFT_SCALE;
  const H = dim.ht * ACFT_SCALE;
  const D = L * 0.105;

  const matBody = new THREE.MeshStandardMaterial({ color: livery.body, roughness: 0.4, metalness: 0.5 });
  const matAccent = new THREE.MeshStandardMaterial({ color: livery.accent, roughness: 0.4, metalness: 0.4 });

  const group = new THREE.Group();

  const fuselage = new THREE.Mesh(new THREE.SphereGeometry(0.5, 14, 10), matBody);
  fuselage.scale.set(D, D, L);
  fuselage.position.y = D * 0.5;
  group.add(fuselage);

  const wing = new THREE.Mesh(new THREE.BoxGeometry(S, D * 0.05, L * 0.18), matBody);
  wing.position.set(0, D * 0.3, -L * 0.04);
  group.add(wing);

  const tailVert = new THREE.Mesh(new THREE.BoxGeometry(D * 0.07, H * 0.55, L * 0.13), matAccent);
  tailVert.position.set(0, H * 0.30 + D * 0.5, -L * 0.42);
  group.add(tailVert);

  return group;
}

function makeStateRing(L, color) {
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(L * 0.55, L * 0.82, 32),
    new THREE.MeshBasicMaterial({
      color, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false,
    })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.0006;
  ring.renderOrder = 5;
  return ring;
}

function makeLeaderLine(height, accentHex) {
  const geo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0.003, 0),
    new THREE.Vector3(0, height - 0.005, 0),
  ]);
  const mat = new THREE.LineBasicMaterial({
    color: accentHex,
    transparent: true,
    opacity: 0.6,
    depthTest: false,
  });
  const line = new THREE.Line(geo, mat);
  line.renderOrder = 8;
  return line;
}

export function makeLabelSprite(text, accentHex = 0x78aaff) {
  const canvas = document.createElement('canvas');
  canvas.width = 320;
  canvas.height = 110;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(10, 14, 22, 0.88)';
  roundRect(ctx, 4, 4, canvas.width - 8, canvas.height - 8, 10);
  ctx.fill();
  ctx.strokeStyle = `#${accentHex.toString(16).padStart(6, '0')}`;
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 32px ui-sans-serif, system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  const lines = text.split('\n');
  ctx.fillText(lines[0], canvas.width / 2, 14);
  ctx.font = '22px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = '#a8c4ff';
  ctx.fillText(lines[1] || '', canvas.width / 2, 56);

  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  tex.anisotropy = 4;

  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  sprite.scale.set(0.075, 0.026, 1);
  sprite.renderOrder = 10;
  return sprite;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y,     x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x,     y + h, r);
  ctx.arcTo(x,     y + h, x,     y,     r);
  ctx.arcTo(x,     y,     x + w, y,     r);
  ctx.closePath();
}
