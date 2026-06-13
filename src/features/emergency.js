import * as THREE from 'three';

// Emergency Squawk highlight. Watches each aircraft's transponder code and
// puts a flashing red halo + EMERG label on anything squawking 7500 (hijack),
// 7600 (radio failure) or 7700 (general emergency). Live FR24 data carries the
// squawk; the scripted demo tags one aircraft so the effect is visible.

const EMERG = {
  '7500': { label: 'HIJACK',   color: 0xff00aa },
  '7600': { label: 'NORDO',    color: 0xffaa00 },
  '7700': { label: 'EMERGENCY', color: 0xff2a2a },
};

export function createEmergencyMonitor({ tabletop, traffic }) {
  let enabled = false;
  const group = new THREE.Group();
  group.name = 'emergency-overlay';
  tabletop.add(group);

  const halos = new Map(); // aircraft group -> { ring, sprite }
  let pulse = 0;

  function ensureHalo(ac) {
    let h = halos.get(ac);
    if (!h) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.022, 0.030, 40).rotateX(-Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: 0xff2a2a, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false })
      );
      ring.renderOrder = 8;
      const sprite = makeLabelSprite();
      group.add(ring); group.add(sprite);
      h = { ring, sprite };
      halos.set(ac, h);
    }
    return h;
  }

  function update(dt) {
    if (!enabled) return;
    pulse += dt;
    const k = (Math.sin(pulse * 6) + 1) / 2;

    const active = new Set();
    for (const ac of traffic.aircraft) {
      const sq = String(ac.userData?.squawk || '');
      const info = EMERG[sq];
      if (!info || !ac.visible) continue;
      active.add(ac);
      const h = ensureHalo(ac);
      h.ring.position.copy(ac.position).setY(ac.position.y + 0.002);
      h.ring.scale.setScalar(1 + k * 0.5);
      h.ring.material.color.setHex(info.color);
      h.ring.material.opacity = 0.4 + k * 0.6;
      h.ring.visible = true;
      h.sprite.position.copy(ac.position).setY(ac.position.y + 0.055);
      drawLabel(h.sprite, info.label, sq, info.color);
      h.sprite.visible = true;
    }
    // Hide halos for aircraft no longer in emergency
    for (const [ac, h] of halos) {
      if (!active.has(ac)) { h.ring.visible = false; h.sprite.visible = false; }
    }
  }

  function setEnabled(on) {
    enabled = on;
    group.visible = on;
    if (!on) for (const [, h] of halos) { h.ring.visible = false; h.sprite.visible = false; }
  }

  function dispose() {
    tabletop.remove(group);
    for (const [, h] of halos) {
      h.ring.geometry.dispose(); h.ring.material.dispose();
      h.sprite.material.map?.dispose(); h.sprite.material.dispose();
    }
    halos.clear();
  }

  return { setEnabled, update, dispose };
}

function makeLabelSprite() {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 80;
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  sprite.scale.set(0.065, 0.02, 1);
  sprite.renderOrder = 24;
  sprite.userData = { canvas, tex };
  sprite.visible = false;
  return sprite;
}

function drawLabel(sprite, label, squawk, colorHex) {
  const { canvas, tex } = sprite.userData;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const hex = `#${colorHex.toString(16).padStart(6, '0')}`;
  ctx.fillStyle = 'rgba(25, 2, 2, 0.9)';
  roundRect(ctx, 4, 4, canvas.width - 8, canvas.height - 8, 10);
  ctx.fill();
  ctx.strokeStyle = hex; ctx.lineWidth = 3; ctx.stroke();
  ctx.fillStyle = hex;
  ctx.font = 'bold 34px ui-sans-serif, system-ui, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(`⚠ ${label}`, canvas.width / 2, 30);
  ctx.fillStyle = '#ffffff';
  ctx.font = '22px ui-monospace, monospace';
  ctx.fillText(`SQ ${squawk}`, canvas.width / 2, 60);
  tex.needsUpdate = true;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
