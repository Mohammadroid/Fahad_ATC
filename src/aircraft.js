import * as THREE from 'three';
import { SCALE } from './airport.js';

// Procedural airliner meshes, scaled to real ICAO-type dimensions and tinted
// with airline liveries derived from the callsign prefix.

export const STATES = {
  PARKED:       { color: 0xb0b0b0, label: 'PARKED'   },
  TAXI:         { color: 0xffcc33, label: 'TAXI'     },
  QUEUED:       { color: 0xff6633, label: 'HOLD'     },
  CLEARED:      { color: 0x33ff77, label: 'CLEARED'  },
  AIRBORNE_OUT: { color: 0xff8844, label: 'OUTBOUND' },
  AIRBORNE_IN:  { color: 0x4499ff, label: 'INBOUND'  },
};

// Aircraft are drawn at 1/1500 — an exaggeration of ~3.3× over the 1/5000
// airport scale so the silhouettes are legible at desk-height tabletop scale.
const ACFT_SCALE = 1 / 1500;

// Real dimensions in metres (length × wingspan × height) per ICAO type.
const TYPE_DIMS = {
  // Boeing
  B737: { len: 33.6, span: 28.9, ht: 11.1, eng: 2 },
  B738: { len: 39.5, span: 35.8, ht: 12.5, eng: 2 },
  B739: { len: 42.1, span: 35.8, ht: 12.5, eng: 2 },
  B752: { len: 47.3, span: 38.1, ht: 13.6, eng: 2 },
  B763: { len: 54.9, span: 47.6, ht: 15.8, eng: 2 },
  B772: { len: 63.7, span: 60.9, ht: 18.5, eng: 2 },
  B77W: { len: 73.9, span: 64.8, ht: 18.6, eng: 2 },
  B788: { len: 56.7, span: 60.1, ht: 17.0, eng: 2 },
  B789: { len: 62.8, span: 60.1, ht: 17.0, eng: 2 },
  B78X: { len: 68.3, span: 60.1, ht: 17.0, eng: 2 },
  B748: { len: 76.3, span: 68.4, ht: 19.4, eng: 4 },
  // Airbus
  A319: { len: 33.8, span: 35.8, ht: 11.8, eng: 2 },
  A320: { len: 37.6, span: 35.8, ht: 11.8, eng: 2 },
  A321: { len: 44.5, span: 35.8, ht: 11.8, eng: 2 },
  A332: { len: 58.8, span: 60.3, ht: 17.4, eng: 2 },
  A333: { len: 63.7, span: 60.3, ht: 16.8, eng: 2 },
  A359: { len: 66.8, span: 64.8, ht: 17.1, eng: 2 },
  A35K: { len: 73.8, span: 64.8, ht: 17.1, eng: 2 },
  A388: { len: 72.7, span: 79.8, ht: 24.1, eng: 4 },
  // Embraer / regional
  E170: { len: 29.9, span: 26.0, ht:  9.85, eng: 2 },
  E190: { len: 36.2, span: 28.7, ht: 10.6, eng: 2 },
};
const DEFAULT_DIM = TYPE_DIMS.A320;

// Airline liveries by ICAO callsign prefix.
const LIVERIES = {
  // Kuwait region
  KAC: { body: 0xeeeeee, accent: 0x1a4ea3, name: 'Kuwait Airways'  },
  JZR: { body: 0xeeeeee, accent: 0xc8102e, name: 'Jazeera Airways' },
  WJA: { body: 0xeeeeee, accent: 0xfff200, name: 'Wataniya'        },
  // Gulf carriers
  UAE: { body: 0xf0f0f0, accent: 0xc41230, name: 'Emirates'        },
  QTR: { body: 0xeeeeee, accent: 0x5c0632, name: 'Qatar Airways'   },
  ETD: { body: 0xeeeeee, accent: 0xb89048, name: 'Etihad'          },
  FDB: { body: 0xeeeeee, accent: 0xff7f00, name: 'flydubai'        },
  GFA: { body: 0xeeeeee, accent: 0x1a4f96, name: 'Gulf Air'        },
  KNE: { body: 0xeeeeee, accent: 0x009b48, name: 'Saudia'          },
  OMA: { body: 0xeeeeee, accent: 0x118456, name: 'Oman Air'        },
  // Other regional
  THY: { body: 0xeeeeee, accent: 0xc70a0c, name: 'Turkish Airlines'},
  IGO: { body: 0xeeeeee, accent: 0x1c3f95, name: 'IndiGo'          },
  AIC: { body: 0xeeeeee, accent: 0xd71920, name: 'Air India'       },
  DLH: { body: 0xeeeeee, accent: 0xfedb00, name: 'Lufthansa'       },
  BAW: { body: 0xeeeeee, accent: 0x1d3a6f, name: 'British Airways' },
};
const DEFAULT_LIVERY = { body: 0xcccccc, accent: 0x666666, name: '' };

function getLivery(callsign) {
  const prefix = (callsign || '').slice(0, 3).toUpperCase();
  return LIVERIES[prefix] || DEFAULT_LIVERY;
}

function getDims(typeCode) {
  return TYPE_DIMS[typeCode?.toUpperCase()] || DEFAULT_DIM;
}

export function buildAircraftGroup(data) {
  const group = new THREE.Group();
  group.userData = { ...data };

  const model = buildAircraftMesh(data);
  group.add(model);
  group.userData.model = model;
  group.userData.stateRing = model.userData.stateRing;

  const stateInfo = STATES[data.state] || STATES.PARKED;
  const livery = getLivery(data.callsign);
  const labelText = `${data.callsign}\n${data.type || '?'}  ${stateInfo.label}`;
  const label = makeLabelSprite(labelText, livery.accent);
  label.position.y = 30 * SCALE;
  group.add(label);
  group.userData.label = label;

  group.rotation.y = THREE.MathUtils.degToRad(-(data.hdg || 0));
  return group;
}

function buildAircraftMesh(data) {
  const dim = getDims(data.type);
  const livery = getLivery(data.callsign);
  const stateInfo = STATES[data.state] || STATES.PARKED;

  const L = dim.len  * ACFT_SCALE;
  const S = dim.span * ACFT_SCALE;
  const H = dim.ht   * ACFT_SCALE;
  const D = L * 0.105;

  const matBody = new THREE.MeshStandardMaterial({
    color: livery.body, roughness: 0.35, metalness: 0.55,
  });
  const matAccent = new THREE.MeshStandardMaterial({
    color: livery.accent, roughness: 0.4, metalness: 0.4,
  });
  const matEngine = new THREE.MeshStandardMaterial({
    color: 0x18181c, roughness: 0.5, metalness: 0.7,
  });

  const group = new THREE.Group();

  // Fuselage — sphere stretched along Z (heading axis)
  const fuselage = new THREE.Mesh(new THREE.SphereGeometry(0.5, 14, 10), matBody);
  fuselage.scale.set(D, D, L);
  group.add(fuselage);

  // Main wings (slight forward sweep approximated by chord placement)
  const wing = new THREE.Mesh(
    new THREE.BoxGeometry(S, D * 0.05, L * 0.18),
    matBody
  );
  wing.position.z = -L * 0.04;
  group.add(wing);

  // Vertical stabilizer (in airline accent colour)
  const tailVert = new THREE.Mesh(
    new THREE.BoxGeometry(D * 0.07, H * 0.55, L * 0.13),
    matAccent
  );
  tailVert.position.set(0, H * 0.30, -L * 0.42);
  group.add(tailVert);

  // Horizontal stabilizer
  const tailHoriz = new THREE.Mesh(
    new THREE.BoxGeometry(S * 0.36, D * 0.04, L * 0.07),
    matBody
  );
  tailHoriz.position.set(0, 0, -L * 0.42);
  group.add(tailHoriz);

  // Engines under wings
  const engCount = dim.eng || 2;
  const engR = D * 0.45;
  const engLen = L * 0.18;
  const engOffsets = engCount === 4 ? [-0.40, -0.22, 0.22, 0.40] : [-0.32, 0.32];
  for (const offX of engOffsets) {
    const eng = new THREE.Mesh(
      new THREE.CylinderGeometry(engR / 2, engR / 2, engLen, 12),
      matEngine
    );
    eng.rotation.x = Math.PI / 2;
    eng.position.set(offX * S, -D * 0.42, -L * 0.04);
    group.add(eng);
  }

  // Cockpit "windows" hint — a small darker oval near the nose
  const cockpit = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 10, 8),
    new THREE.MeshStandardMaterial({ color: 0x222a3a, roughness: 0.2, metalness: 0.6 })
  );
  cockpit.scale.set(D * 0.65, D * 0.45, L * 0.08);
  cockpit.position.set(0, D * 0.10, L * 0.42);
  group.add(cockpit);

  // State indicator ring underneath
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(L * 0.55, L * 0.78, 28),
    new THREE.MeshBasicMaterial({
      color: stateInfo.color,
      transparent: true,
      opacity: 0.55,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = -D * 0.55;
  ring.renderOrder = 5;
  group.add(ring);
  group.userData.stateRing = ring;

  return group;
}

export function makeLabelSprite(text, accentHex = 0x78aaff) {
  const canvas = document.createElement('canvas');
  canvas.width = 320;
  canvas.height = 110;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(10, 14, 22, 0.85)';
  roundRect(ctx, 4, 4, canvas.width - 8, canvas.height - 8, 10);
  ctx.fill();
  ctx.strokeStyle = `#${accentHex.toString(16).padStart(6, '0')}`;
  ctx.lineWidth = 2.5;
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
