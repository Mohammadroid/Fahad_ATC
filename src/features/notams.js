import * as THREE from 'three';
import { SCALE, latLonToTab as _ll } from '../airport.js';

// NOTAM feature (Phase A — curated). Loads okbk_notams.json, decodes the
// machine-readable ICAO Q-code of each NOTAM into a severity + map action, and
// presents them two ways:
//   • a floating NOTAM panel listing active notices (ID, validity, raw text)
//   • map overlays on the tabletop (closed runway hatch + X, closed taxiway in
//     red, obstacle cone with height) for geo-locatable notices.
// Self-contained: one module + one toggle, easy to remove.

const SEV = {
  critical: { color: 0xff2a2a, label: 'CRITICAL' },
  caution:  { color: 0xffb020, label: 'CAUTION'  },
  info:     { color: 0x4aa8ff, label: 'INFO'     },
};

// Q-code (2-letter subject + 2-letter condition) → human subject/condition.
const QSUBJECT = {
  MR: 'Runway', MX: 'Taxiway', MS: 'Stopway', FA: 'Aerodrome',
  IC: 'ILS', IG: 'Glidepath', LP: 'PAPI/Lights', OB: 'Obstacle', FA_HW: 'Wildlife',
};
const QCOND = { LC: 'Closed', LT: 'Limited', AS: 'Unserviceable', CE: 'Erected', HW: 'Hazard' };

function decodeQ(qcode) {
  const m = /^Q([A-Z]{2})([A-Z]{2})$/.exec(qcode || '');
  if (!m) return { subject: '', cond: '' };
  return { subject: QSUBJECT[m[1]] || m[1], cond: QCOND[m[2]] || m[2] };
}

export function createNotamMonitor({ scene, tabletop, SpatialPanel, interaction }) {
  let enabled = false;
  let notams = [];
  let pulse = 0;

  // Map-overlay group under the tabletop (scales/moves with the airport).
  const overlay = new THREE.Group();
  overlay.name = 'notam-overlay';
  tabletop.add(overlay);
  const pulsers = []; // critical meshes to pulse

  // Panel
  const panel = new SpatialPanel({
    name: 'notams',
    width: 0.40, height: 0.50, canvasW: 576, canvasH: 720,
    anchor: new THREE.Vector3(-0.95, 1.45, -0.75),
    faceTarget: new THREE.Vector3(0, 1.4, 0),
  });
  scene.add(panel.group);
  panel.group.visible = false;

  // Load data + build everything.
  (async () => {
    try {
      const [nRes, oRes] = await Promise.all([
        fetch(`${import.meta.env.BASE_URL}data/okbk_notams.json`, { cache: 'no-store' }),
        fetch(`${import.meta.env.BASE_URL}data/okbk_osm.json`),
      ]);
      const nJson = await nRes.json();
      const osm = await oRes.json();
      notams = (nJson.notams || []).map((n) => ({ ...n, ...decodeQ(n.qcode) }));
      buildOverlays(osm);
      drawPanel();
      applyVisibility();
      console.log(`[notams] ${notams.length} active notices`);
    } catch (err) {
      console.warn('[notams] load failed:', err);
    }
  })();

  function buildOverlays(osm) {
    const els = osm.elements || [];
    for (const n of notams) {
      const t = n.target || {};
      if (t.type === 'runway') {
        const way = els.find((e) => e.tags?.aeroway === 'runway' && e.tags.ref === t.ref);
        if (way) addClosedRunway(way.geometry, n);
      } else if (t.type === 'taxiway') {
        const way = els.find((e) => e.tags?.aeroway === 'taxiway' && e.tags.ref === t.ref);
        if (way) addClosedTaxiway(way.geometry, n);
      } else if (t.type === 'point') {
        addObstacle(t, n);
      }
    }
  }

  // ---- overlay builders ----
  function pts3(geometry, y) {
    return geometry.map((p) => { const [x, z] = _ll(p.lat, p.lon); return new THREE.Vector3(x, y, z); });
  }

  function addClosedRunway(geometry, n) {
    const widthM = 45;
    const ribbon = ribbonMesh(geometry, widthM, 0xff2a2a, 0.4, 0.0030);
    overlay.add(ribbon);
    pulsers.push({ mesh: ribbon, base: 0.4 });

    // X marks at both ends (closed-runway convention)
    const P = pts3(geometry, 0.0034);
    for (const idx of [0, P.length - 1]) {
      const ref = P[idx];
      const nb = P[idx === 0 ? 1 : P.length - 2];
      const dir = nb.clone().sub(ref).setY(0).normalize();
      const perp = new THREE.Vector3(-dir.z, 0, dir.x);
      const s = (widthM * SCALE) / 2;
      const c = ref.clone().add(dir.clone().multiplyScalar(s));
      overlay.add(xMark(c, dir, perp, s));
    }
    const mid = P[Math.floor(P.length / 2)];
    overlay.add(label(`RWY ${n.target.ref}  ✕ CLOSED`, mid.clone().setY(0.05), 0xff2a2a));
  }

  function addClosedTaxiway(geometry, n) {
    const ribbon = ribbonMesh(geometry, 20, 0xff5a1a, 0.55, 0.0026);
    overlay.add(ribbon);
    const P = pts3(geometry, 0.03);
    const mid = P[Math.floor(P.length / 2)];
    overlay.add(label(`TWY ${n.target.ref} CLSD`, mid, 0xff5a1a));
  }

  function addObstacle(t, n) {
    const [x, z] = _ll(t.lat, t.lon);
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.012, 0.05, 4),
      new THREE.MeshBasicMaterial({ color: 0xff2a2a, transparent: true, opacity: 0.9 })
    );
    cone.position.set(x, 0.025, z);
    overlay.add(cone);
    pulsers.push({ mesh: cone, base: 0.9 });
    overlay.add(label(`OBST ${t.height_ft}ft`, new THREE.Vector3(x, 0.065, z), 0xff8844));
  }

  function update(dt) {
    if (!enabled) return;
    pulse += dt;
    const k = (Math.sin(pulse * 4) + 1) / 2;
    for (const p of pulsers) p.mesh.material.opacity = p.base * (0.5 + k * 0.5);
  }

  function applyVisibility() {
    overlay.visible = enabled;
    panel.group.visible = enabled;
  }
  function setEnabled(on) { enabled = on; applyVisibility(); }
  function isEnabled() { return enabled; }
  function dispose() {
    tabletop.remove(overlay); scene.remove(panel.group);
  }

  // ---- panel ----
  function drawPanel() {
    panel.redraw((ctx, w, h) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(8, 12, 20, 0.96)';
      roundRect(ctx, 0, 0, w, h, 18); ctx.fill();
      ctx.strokeStyle = '#ff8844'; ctx.lineWidth = 5; ctx.stroke();
      ctx.fillStyle = '#ff8844'; ctx.fillRect(0, 0, w, 8);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 32px ui-sans-serif, system-ui, sans-serif';
      ctx.textBaseline = 'top'; ctx.textAlign = 'left';
      ctx.fillText('NOTAMs', 24, 24);
      ctx.fillStyle = '#7d8b9e';
      ctx.font = '18px ui-sans-serif, sans-serif';
      ctx.fillText(`OKBK · ${notams.length} active`, 24, 62);

      let y = 104;
      for (const n of notams.slice(0, 6)) {
        y = drawRow(ctx, 24, y, w - 48, n);
        y += 12;
      }
    });
  }

  function drawRow(ctx, x, y, w, n) {
    const sev = SEV[n.severity] || SEV.info;
    const hex = `#${sev.color.toString(16).padStart(6, '0')}`;
    const lines = wrap(ctx, n.text, w - 40, '15px ui-sans-serif, sans-serif');
    const rowH = 64 + lines.length * 20;

    ctx.fillStyle = 'rgba(28, 36, 50, 0.85)';
    roundRect(ctx, x, y, w, rowH, 8); ctx.fill();
    ctx.fillStyle = hex; roundRect(ctx, x, y, 6, rowH, 3); ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 19px ui-monospace, monospace';
    ctx.fillText(n.id, x + 16, y + 8);

    ctx.fillStyle = hex;
    ctx.font = 'bold 13px ui-sans-serif, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(`${n.subject}  ${n.cond}`.toUpperCase(), x + w - 14, y + 10);
    ctx.textAlign = 'left';

    ctx.fillStyle = '#7d8b9e';
    ctx.font = '13px ui-sans-serif, sans-serif';
    ctx.fillText(`${fmt(n.from)} → ${fmt(n.to)}`, x + 16, y + 32);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '15px ui-sans-serif, sans-serif';
    lines.forEach((ln, i) => ctx.fillText(ln, x + 16, y + 54 + i * 20));
    return y + rowH;
  }

  return { setEnabled, isEnabled, update, dispose, group: panel.group, panel };
}

// ---- shared helpers ----

function ribbonMesh(geometry, widthM, color, opacity, y) {
  const halfW = (widthM * SCALE) / 2;
  const positions = [], indices = [];
  const pts = geometry.map((p) => _ll(p.lat, p.lon));
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, z1] = pts[i], [x2, z2] = pts[i + 1];
    const dx = x2 - x1, dz = z2 - z1, len = Math.hypot(dx, dz) || 1e-6;
    const nx = -dz / len, nz = dx / len;
    const v = positions.length / 3;
    positions.push(x1 + nx * halfW, y, z1 + nz * halfW, x1 - nx * halfW, y, z1 - nz * halfW,
                   x2 + nx * halfW, y, z2 + nz * halfW, x2 - nx * halfW, y, z2 - nz * halfW);
    indices.push(v, v + 2, v + 1, v + 1, v + 2, v + 3);
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setIndex(indices);
  const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
    color, transparent: true, opacity, side: THREE.DoubleSide, depthWrite: false,
  }));
  mesh.renderOrder = 7;
  return mesh;
}

function xMark(center, dir, perp, s) {
  const g = new THREE.Group();
  const mat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.95, depthTest: false });
  const a1 = dir.clone().add(perp).multiplyScalar(s);
  const a2 = dir.clone().sub(perp).multiplyScalar(s);
  for (const v of [a1, a2]) {
    const geo = new THREE.BufferGeometry().setFromPoints([center.clone().sub(v), center.clone().add(v)]);
    const ln = new THREE.Line(geo, mat); ln.renderOrder = 9; g.add(ln);
  }
  return g;
}

function label(text, pos, colorHex) {
  const canvas = document.createElement('canvas');
  canvas.width = 320; canvas.height = 70;
  const ctx = canvas.getContext('2d');
  const hex = `#${colorHex.toString(16).padStart(6, '0')}`;
  ctx.fillStyle = 'rgba(15, 6, 6, 0.9)';
  roundRect(ctx, 4, 4, canvas.width - 8, canvas.height - 8, 10); ctx.fill();
  ctx.strokeStyle = hex; ctx.lineWidth = 3; ctx.stroke();
  ctx.fillStyle = hex;
  ctx.font = 'bold 30px ui-sans-serif, system-ui, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  const tex = new THREE.CanvasTexture(canvas); tex.minFilter = THREE.LinearFilter;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  sprite.scale.set(0.10, 0.022, 1);
  sprite.position.copy(pos);
  sprite.renderOrder = 23;
  return sprite;
}

function wrap(ctx, text, maxW, font) {
  ctx.font = font;
  const words = text.split(' '); const lines = []; let cur = '';
  for (const wd of words) {
    const test = cur ? cur + ' ' + wd : wd;
    if (ctx.measureText(test).width > maxW && cur) { lines.push(cur); cur = wd; }
    else cur = test;
  }
  if (cur) lines.push(cur);
  return lines.slice(0, 2);
}

function fmt(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }) + ' ' +
         d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
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
