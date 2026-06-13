import * as THREE from 'three';

// Conflict Alerts (STCA-style). Scans pairs of airborne aircraft for loss of
// separation using their real lat/lon/alt, and draws a pulsing red link +
// "TFC" warning between any pair inside the minima. Encapsulated: owns one
// group under the tabletop; remove the module and nothing else changes.

const SEP_HORIZ_NM = 3;     // standard radar separation
const SEP_VERT_FT  = 1000;  // standard vertical separation
const ADVISORY_NM  = 6;     // amber proximity advisory band
const COS_LAT = Math.cos(29.2266 * Math.PI / 180);

function horizNm(a, b) {
  if (a.lat == null || b.lat == null) return Infinity;
  const dxKm = (a.lon - b.lon) * 111.32 * COS_LAT;
  const dyKm = (a.lat - b.lat) * 111.32;
  return Math.hypot(dxKm, dyKm) * 1000 / 1852;
}

export function createConflictMonitor({ scene, tabletop, traffic }) {
  let enabled = false;
  const group = new THREE.Group();
  group.name = 'conflict-overlay';
  tabletop.add(group);

  // Reusable line pool to avoid per-frame allocation.
  const pool = [];
  function getLine() {
    let item = pool.find((p) => !p.inUse);
    if (!item) {
      const geo = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
      const mat = new THREE.LineBasicMaterial({ transparent: true, depthTest: false });
      const line = new THREE.Line(geo, mat);
      line.renderOrder = 9;
      const sprite = makeWarnSprite();
      group.add(line);
      group.add(sprite);
      item = { line, sprite, inUse: false };
      pool.push(item);
    }
    item.inUse = true;
    return item;
  }

  let pulse = 0;

  function update(dt) {
    if (!enabled) return;
    pulse += dt;
    const k = (Math.sin(pulse * 5) + 1) / 2;

    for (const p of pool) p.inUse = false;

    const list = traffic.aircraft.filter((g) =>
      g.visible && g.userData && !g.userData.on_ground && (g.userData.alt || 0) > 100
    );

    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        const A = list[i].userData, B = list[j].userData;
        const h = horizNm(A, B);
        if (h > ADVISORY_NM) continue;
        const v = Math.abs((A.alt || 0) - (B.alt || 0));
        const conflict = h < SEP_HORIZ_NM && v < SEP_VERT_FT;
        const advisory = !conflict && h < ADVISORY_NM && v < SEP_VERT_FT * 1.5;
        if (!conflict && !advisory) continue;

        const item = getLine();
        const pa = list[i].position, pb = list[j].position;
        const pos = item.line.geometry.attributes.position;
        pos.setXYZ(0, pa.x, pa.y, pa.z);
        pos.setXYZ(1, pb.x, pb.y, pb.z);
        pos.needsUpdate = true;
        item.line.geometry.computeBoundingSphere();

        const color = conflict ? 0xff2a2a : 0xffb020;
        item.line.material.color.setHex(color);
        item.line.material.opacity = conflict ? 0.5 + k * 0.5 : 0.5;
        item.line.visible = true;

        // Warning label at midpoint
        item.sprite.position.set((pa.x + pb.x) / 2, (pa.y + pb.y) / 2 + 0.03, (pa.z + pb.z) / 2);
        drawWarn(item.sprite, conflict ? 'CONFLICT' : 'TFC', `${h.toFixed(1)}nm`, color, conflict ? (0.6 + k * 0.4) : 0.85);
        item.sprite.visible = true;
      }
    }

    // Hide unused pool items
    for (const p of pool) {
      if (!p.inUse) { p.line.visible = false; p.sprite.visible = false; }
    }
  }

  function setEnabled(on) {
    enabled = on;
    group.visible = on;
    if (!on) for (const p of pool) { p.line.visible = false; p.sprite.visible = false; }
  }

  function dispose() {
    tabletop.remove(group);
    for (const p of pool) {
      p.line.geometry.dispose(); p.line.material.dispose();
      p.sprite.material.map?.dispose(); p.sprite.material.dispose();
    }
  }

  return { setEnabled, update, dispose };
}

function makeWarnSprite() {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 96;
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  sprite.scale.set(0.07, 0.026, 1);
  sprite.renderOrder = 22;
  sprite.userData = { canvas, tex };
  sprite.visible = false;
  return sprite;
}

function drawWarn(sprite, title, sub, colorHex, opacity) {
  const { canvas, tex } = sprite.userData;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const hex = `#${colorHex.toString(16).padStart(6, '0')}`;
  ctx.fillStyle = 'rgba(20, 4, 4, 0.85)';
  roundRect(ctx, 6, 6, canvas.width - 12, canvas.height - 12, 12);
  ctx.fill();
  ctx.strokeStyle = hex; ctx.lineWidth = 4; ctx.stroke();
  ctx.fillStyle = hex;
  ctx.font = 'bold 40px ui-sans-serif, system-ui, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(title, canvas.width / 2, 36);
  ctx.fillStyle = '#ffffff';
  ctx.font = '26px ui-monospace, monospace';
  ctx.fillText(sub, canvas.width / 2, 72);
  sprite.material.opacity = opacity;
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
