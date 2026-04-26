import * as THREE from 'three';
import { SCALE } from './airport.js';

// Shared aircraft visuals — used by both the simulator and the snapshot loader.

export const STATES = {
  PARKED:       { color: 0xb0b0b0, label: 'PARKED'   },
  TAXI:         { color: 0xffcc33, label: 'TAXI'     },
  QUEUED:       { color: 0xff6633, label: 'HOLD'     },
  CLEARED:      { color: 0x33ff77, label: 'CLEARED'  },
  AIRBORNE_OUT: { color: 0xff8844, label: 'OUTBOUND' },
  AIRBORNE_IN:  { color: 0x4499ff, label: 'INBOUND'  },
};

export function buildAircraftGroup(data) {
  const group = new THREE.Group();
  group.userData = { ...data };

  const stateInfo = STATES[data.state] || STATES.PARKED;

  const body = new THREE.Mesh(
    new THREE.ConeGeometry(7 * SCALE, 22 * SCALE, 4),
    new THREE.MeshStandardMaterial({
      color: stateInfo.color,
      emissive: stateInfo.color,
      emissiveIntensity: 0.5,
      roughness: 0.4,
      metalness: 0.2,
    })
  );
  body.rotation.x = Math.PI / 2;
  group.add(body);

  const labelText = `${data.callsign}\n${data.type || '?'}  ${stateInfo.label}`;
  const label = makeLabelSprite(labelText);
  label.position.y = 30 * SCALE;
  group.add(label);
  group.userData.label = label;

  group.rotation.y = THREE.MathUtils.degToRad(-(data.hdg || 0));
  return group;
}

export function makeLabelSprite(text) {
  const canvas = document.createElement('canvas');
  canvas.width = 320;
  canvas.height = 110;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(10, 14, 22, 0.82)';
  roundRect(ctx, 4, 4, canvas.width - 8, canvas.height - 8, 10);
  ctx.fill();
  ctx.strokeStyle = 'rgba(120, 170, 255, 0.55)';
  ctx.lineWidth = 2;
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
