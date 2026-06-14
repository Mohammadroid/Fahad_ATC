import * as THREE from 'three';
import { getAirlineAccent, getTypeName } from './aircraft.js';

// Floating spatial panels in AR. Each panel is a canvas-textured plane wrapped
// in a Group. The group is registered as grabbable, so users pinch-drag to
// reposition it and two-handed pinch to scale + yaw.

const NM_TO_M = 1852;
const OKBK_LAT = 29.2266;
const OKBK_LON = 47.9689;
const COS_LAT = Math.cos(OKBK_LAT * Math.PI / 180);

export class SpatialPanel {
  constructor({ name, width, height, canvasW = 512, canvasH = 768, anchor, faceTarget }) {
    this.name = name;
    this.width = width;
    this.height = height;

    this.canvas = document.createElement('canvas');
    this.canvas.width = canvasW;
    this.canvas.height = canvasH;
    this.ctx = this.canvas.getContext('2d');

    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.minFilter = THREE.LinearFilter;
    this.texture.anisotropy = 4;
    this.texture.colorSpace = THREE.SRGBColorSpace;

    const mat = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(width, height), mat);
    this.mesh.name = `panel-${name}-surface`;
    this.mesh.renderOrder = 15;

    this.group = new THREE.Group();
    this.group.name = `panel-${name}`;
    this.group.add(this.mesh);
    if (anchor) this.group.position.copy(anchor);
    if (faceTarget) this.group.lookAt(faceTarget);

    // Marker so the interaction system can find this as a grabbable target.
    this.group.userData.grabbable = true;
    this.group.userData.panelName = name;
    this.group.userData.grabSurface = this.mesh;

    this._lastDraw = 0;
  }

  shouldRedraw(now, throttleMs) {
    if (now - this._lastDraw < throttleMs) return false;
    this._lastDraw = now;
    return true;
  }

  redraw(drawFn) {
    drawFn(this.ctx, this.canvas.width, this.canvas.height);
    this.texture.needsUpdate = true;
  }
}

// ---------------------------------------------------------------------------
// Flight list panel content (inbound / outbound)

export function drawFlightList(ctx, w, h, opts) {
  const { title, flights, accentHex, headerSubtitle } = opts;

  // Background
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(8, 12, 20, 0.95)';
  roundRect(ctx, 0, 0, w, h, 18);
  ctx.fill();
  ctx.strokeStyle = accentHex;
  ctx.lineWidth = 5;
  ctx.stroke();

  // Top color stripe
  ctx.fillStyle = accentHex;
  ctx.fillRect(0, 0, w, 10);

  // Title
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 44px ui-sans-serif, system-ui, sans-serif';
  ctx.fillText(title, 24, 28);

  // Subtitle
  ctx.font = '22px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = '#9aa4b2';
  ctx.fillText(headerSubtitle, 24, 84);

  // Column headers
  const colY = 130;
  ctx.font = 'bold 18px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = '#7d8b9e';
  ctx.fillText('FLIGHT',  24, colY);
  ctx.fillText('TYPE',   160, colY);
  ctx.fillText(title === 'INBOUND' ? 'FROM' : 'TO', 240, colY);
  ctx.fillText('ALT',    340, colY);
  ctx.fillText(title === 'INBOUND' ? 'ETA' : 'HDG', 430, colY);

  // Header underline
  ctx.strokeStyle = 'rgba(120,140,170,0.4)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(24, colY + 26);
  ctx.lineTo(w - 24, colY + 26);
  ctx.stroke();

  // Rows
  if (!flights.length) {
    ctx.fillStyle = '#7d8b9e';
    ctx.font = 'italic 22px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText('No flights tracked.', 24, colY + 60);
    return;
  }

  const rowH = 44;
  flights.slice(0, 12).forEach((data, i) => {
    const y = colY + 50 + i * rowH;
    ctx.font = 'bold 22px ui-sans-serif, system-ui, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText((data.callsign || '').slice(0, 9), 24, y);

    ctx.font = '20px ui-sans-serif, system-ui, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText((data.type || '-').slice(0, 5), 160, y);

    const route = title === 'INBOUND' ? (data.origin || '-') : (data.destination || '-');
    ctx.fillText(String(route).slice(0, 5), 240, y);

    ctx.fillStyle = '#a8c4ff';
    const altText = data.alt ? formatAlt(data.alt) : 'gnd';
    ctx.fillText(altText, 340, y);

    if (title === 'INBOUND') {
      ctx.fillStyle = '#e6edf3';
      ctx.fillText(computeEta(data), 430, y);
    } else {
      ctx.fillStyle = '#e6edf3';
      ctx.fillText(`${data.hdg ?? '-'}°`, 430, y);
    }
  });
}

function formatAlt(ft) {
  if (ft >= 1000) return `${Math.round(ft / 100) / 10}k`;
  return String(ft);
}

function computeEta(data) {
  if (data.state !== 'AIRBORNE_IN') return '-';
  const speed = data.speed_kt;
  if (!speed || speed < 50) return '-';
  const lat = data.lat, lon = data.lon;
  if (lat == null || lon == null) return '-';
  const dxKm = (lon - OKBK_LON) * 111.32 * COS_LAT;
  const dyKm = (lat - OKBK_LAT) * 111.32;
  const distKm = Math.hypot(dxKm, dyKm);
  const distNm = distKm * 1000 / NM_TO_M;
  const min = Math.round((distNm / speed) * 60);
  if (min < 1) return '<1m';
  if (min < 60) return `${min}m`;
  return `${Math.floor(min / 60)}h${min % 60}m`;
}

// ---------------------------------------------------------------------------
// Clock panel content (with seconds)

export function drawClock(ctx, w, h) {
  const now = new Date();

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(8, 12, 20, 0.95)';
  roundRect(ctx, 0, 0, w, h, 18);
  ctx.fill();
  ctx.strokeStyle = '#58a6ff';
  ctx.lineWidth = 5;
  ctx.stroke();

  // Top stripe
  ctx.fillStyle = '#58a6ff';
  ctx.fillRect(0, 0, w, 8);

  // Big time HH:MM:SS
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 150px ui-monospace, "SF Mono", "Roboto Mono", monospace';
  ctx.fillText(`${hh}:${mm}`, w / 2, h * 0.42);

  ctx.font = 'bold 64px ui-monospace, "SF Mono", "Roboto Mono", monospace';
  ctx.fillStyle = '#58a6ff';
  ctx.fillText(`:${ss}`, w / 2, h * 0.66);

  // Date line
  ctx.font = '28px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = '#a8c4ff';
  const dateStr = now.toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
  });
  ctx.fillText(dateStr, w / 2, h * 0.84);

  // Header label
  ctx.font = 'bold 20px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = '#7d8b9e';
  ctx.fillText('LOCAL TIME', w / 2, 38);

  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
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

// ---------------------------------------------------------------------------
// Combined panel: clock on top + inbound (left) + outbound (right)

// Returns the canvas-pixel region for the gear icon so the caller can map a
// raycast UV to it for click handling.
export function drawCombinedPanel(ctx, w, h, opts) {
  const { inbounds, outbounds, gearActive } = opts;

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(8, 12, 20, 0.95)';
  roundRect(ctx, 0, 0, w, h, 22);
  ctx.fill();
  ctx.strokeStyle = '#4499ff';
  ctx.lineWidth = 5;
  ctx.stroke();

  // Top accent stripe
  ctx.fillStyle = '#4499ff';
  ctx.fillRect(0, 0, w, 8);

  // ---- gear icon (top-right) — generous hit target ----
  const gearSize = 96;
  const gearPad = 14;
  const gearRegion = {
    x: w - gearSize - gearPad,
    y: gearPad,
    w: gearSize,
    h: gearSize,
  };
  // Subtle backing so the tap target is visible
  ctx.fillStyle = gearActive ? 'rgba(68,153,255,0.22)' : 'rgba(40,52,70,0.5)';
  roundRect(ctx, gearRegion.x, gearRegion.y, gearSize, gearSize, 14);
  ctx.fill();
  ctx.strokeStyle = gearActive ? '#7dd3ff' : 'rgba(120,140,170,0.5)';
  ctx.lineWidth = 2;
  ctx.stroke();
  drawGear(ctx, gearRegion.x + gearSize / 2, gearRegion.y + gearSize / 2, gearSize * 0.34, gearActive);

  // ---- clock section (top 28%) ----
  const clockH = Math.round(h * 0.28);
  drawClockSection(ctx, 0, 0, w, clockH);

  // Demo timer (only when in demo mode — caller passes opts.demoTime)
  if (typeof opts.demoTime === 'number') {
    const sec = Math.floor(opts.demoTime);
    const mm = String(Math.floor(sec / 60)).padStart(1, '0');
    const ss = String(sec % 60).padStart(2, '0');
    ctx.fillStyle = '#ffd86b';
    ctx.font = 'bold 22px ui-monospace, monospace';
    ctx.textBaseline = 'top';
    ctx.textAlign = 'left';
    ctx.fillText(`▶ DEMO ${mm}:${ss}`, 28, clockH - 36);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
  }

  // Horizontal divider
  ctx.strokeStyle = 'rgba(120, 140, 170, 0.35)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(28, clockH);
  ctx.lineTo(w - 28, clockH);
  ctx.stroke();

  // Vertical divider between the two lists
  const midX = w / 2;
  ctx.beginPath();
  ctx.moveTo(midX, clockH + 20);
  ctx.lineTo(midX, h - 20);
  ctx.stroke();

  // ---- inbound list (left column) ----
  drawListColumn(ctx, 0, clockH, midX, h - clockH, {
    title: 'INBOUND',
    flights: inbounds,
    accentHex: '#4499ff',
    routeKey: 'origin',
    extraKey: 'eta',
  });

  // ---- outbound list (right column) ----
  drawListColumn(ctx, midX, clockH, w - midX, h - clockH, {
    title: 'OUTBOUND',
    flights: outbounds,
    accentHex: '#ff8844',
    routeKey: 'destination',
    extraKey: 'hdg',
  });

  return { gearRegion };
}

function drawGear(ctx, cx, cy, radius, active = false) {
  const teeth = 8;
  ctx.save();
  ctx.strokeStyle = active ? '#7dd3ff' : '#58a6ff';
  ctx.lineWidth = 4;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * Math.PI * 2;
    const a1 = ((i + 0.4) / teeth) * Math.PI * 2;
    const a2 = ((i + 0.6) / teeth) * Math.PI * 2;
    const a3 = ((i + 1) / teeth) * Math.PI * 2;
    const r1 = radius, r2 = radius * 0.72;
    const p = (a, r) => [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
    if (i === 0) ctx.moveTo(...p(a0, r1));
    ctx.lineTo(...p(a0, r1));
    ctx.lineTo(...p(a1, r1));
    ctx.lineTo(...p(a2, r2));
    ctx.lineTo(...p(a3, r2));
  }
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.4, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

function drawClockSection(ctx, x, y, w, h) {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  // Header label
  ctx.fillStyle = '#7d8b9e';
  ctx.font = 'bold 18px ui-sans-serif, system-ui, sans-serif';
  ctx.textBaseline = 'top';
  ctx.textAlign = 'center';
  ctx.fillText('LOCAL TIME', x + w / 2, y + 22);

  // Big HH:MM (white) with smaller :SS (cyan)
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 96px ui-monospace, "SF Mono", monospace';
  const hmText = `${hh}:${mm}`;
  const ssText = `:${ss}`;
  ctx.font = 'bold 96px ui-monospace, "SF Mono", monospace';
  const hmWidth = ctx.measureText(hmText).width;
  ctx.font = 'bold 56px ui-monospace, "SF Mono", monospace';
  const ssWidth = ctx.measureText(ssText).width;
  const totalWidth = hmWidth + ssWidth;
  const startX = x + (w - totalWidth) / 2;
  ctx.font = 'bold 96px ui-monospace, "SF Mono", monospace';
  ctx.textAlign = 'left';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(hmText, startX, y + h * 0.52);
  ctx.font = 'bold 56px ui-monospace, "SF Mono", monospace';
  ctx.fillStyle = '#58a6ff';
  ctx.fillText(ssText, startX + hmWidth, y + h * 0.58);

  // Date
  ctx.textAlign = 'center';
  ctx.font = '22px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = '#a8c4ff';
  const dateStr = now.toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
  });
  ctx.fillText(dateStr, x + w / 2, y + h * 0.88);

  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
}

function drawListColumn(ctx, x, y, w, h, opts) {
  const { title, flights, accentHex, routeKey, extraKey } = opts;
  const pad = 24;

  // Column title
  ctx.fillStyle = accentHex;
  ctx.font = 'bold 34px ui-sans-serif, system-ui, sans-serif';
  ctx.textBaseline = 'top';
  ctx.fillText(title, x + pad, y + 18);

  // Count subtitle
  ctx.font = '18px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = '#9aa4b2';
  ctx.fillText(`${flights.length} aircraft`, x + pad, y + 58);

  // Column headers
  const colY = y + 96;
  ctx.font = 'bold 15px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = '#7d8b9e';
  ctx.fillText('FLT',  x + pad,        colY);
  ctx.fillText('TYPE', x + pad + 100,  colY);
  ctx.fillText(routeKey === 'origin' ? 'FROM' : 'TO', x + pad + 165, colY);
  ctx.fillText('ALT',  x + pad + 240,  colY);
  ctx.fillText(extraKey === 'eta' ? 'ETA' : 'HDG', x + pad + 305, colY);

  // Header underline
  ctx.strokeStyle = 'rgba(120,140,170,0.35)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x + pad, colY + 22);
  ctx.lineTo(x + w - pad, colY + 22);
  ctx.stroke();

  // Rows
  if (!flights.length) {
    ctx.fillStyle = '#7d8b9e';
    ctx.font = 'italic 18px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText('No flights tracked.', x + pad, colY + 50);
    return;
  }

  const rowH = 36;
  const maxRows = Math.floor((h - 130) / rowH);
  flights.slice(0, maxRows).forEach((data, i) => {
    const ry = colY + 42 + i * rowH;

    ctx.font = 'bold 18px ui-sans-serif, system-ui, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText((data.callsign || '').slice(0, 8), x + pad, ry);

    ctx.font = '16px ui-sans-serif, system-ui, sans-serif';
    ctx.fillStyle = '#cbd5e1';
    ctx.fillText((data.type || '-').slice(0, 5), x + pad + 100, ry);

    const route = routeKey === 'origin' ? (data.origin || '-') : (data.destination || '-');
    ctx.fillText(String(route).slice(0, 5), x + pad + 165, ry);

    ctx.fillStyle = '#a8c4ff';
    const altText = data.alt ? formatAlt(data.alt) : 'gnd';
    ctx.fillText(altText, x + pad + 240, ry);

    ctx.fillStyle = '#e6edf3';
    const extra = extraKey === 'eta' ? computeEta(data) : `${data.hdg ?? '-'}°`;
    ctx.fillText(extra, x + pad + 305, ry);
  });
}

// ---------------------------------------------------------------------------
// Settings icon (small gear)

export function drawSettingsIcon(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(10, 14, 22, 0.92)';
  roundRect(ctx, 4, 4, w - 8, h - 8, 16);
  ctx.fill();
  ctx.strokeStyle = '#58a6ff';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Gear glyph
  const cx = w / 2, cy = h / 2;
  const teeth = 8;
  const inner = Math.min(w, h) * 0.22;
  const outer = Math.min(w, h) * 0.36;

  ctx.strokeStyle = '#58a6ff';
  ctx.lineWidth = 6;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * Math.PI * 2;
    const a1 = ((i + 0.4) / teeth) * Math.PI * 2;
    const a2 = ((i + 0.6) / teeth) * Math.PI * 2;
    const a3 = ((i + 1) / teeth) * Math.PI * 2;
    const r1 = outer, r2 = inner * 1.4;
    const p = (a, r) => [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
    if (i === 0) ctx.moveTo(...p(a0, r1));
    ctx.lineTo(...p(a0, r1));
    ctx.lineTo(...p(a1, r1));
    ctx.lineTo(...p(a2, r2));
    ctx.lineTo(...p(a3, r2));
  }
  ctx.closePath();
  ctx.stroke();

  // Hub
  ctx.beginPath();
  ctx.arc(cx, cy, inner * 0.55, 0, Math.PI * 2);
  ctx.stroke();
}

// ---------------------------------------------------------------------------
// Settings menu — list of toggle buttons. Returns clickable regions in canvas
// pixel coords so the interaction layer can map a raycast UV to a button.

export function drawSettingsMenu(ctx, w, h, opts) {
  const { currentMap, currentData, currentTheme, tab = 'general', features = [] } = opts;
  const regions = [];

  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(10, 14, 22, 0.97)';
  roundRect(ctx, 0, 0, w, h, 18);
  ctx.fill();
  ctx.strokeStyle = '#7d8b9e';
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = '#4499ff';
  ctx.fillRect(0, 0, w, 8);

  // Title
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 30px ui-sans-serif, system-ui, sans-serif';
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.fillText('SETTINGS', 28, 24);

  // Tab row
  const tabY = 70, tabH = 44;
  const tabs = [
    { id: 'tab:general',  label: 'General',  active: tab === 'general' },
    { id: 'tab:advanced', label: 'Advanced', active: tab === 'advanced' },
  ];
  const tabW = (w - 56 - 12) / 2;
  tabs.forEach((tb, i) => {
    const tx = 28 + i * (tabW + 12);
    regions.push({ id: tb.id, x: tx, y: tabY, w: tabW, h: tabH });
    ctx.fillStyle = tb.active ? '#4499ff' : 'rgba(30,40,55,0.6)';
    roundRect(ctx, tx, tabY, tabW, tabH, 8); ctx.fill();
    ctx.fillStyle = tb.active ? '#ffffff' : '#a8c4ff';
    ctx.font = `${tb.active ? 'bold ' : ''}20px ui-sans-serif, system-ui, sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(tb.label, tx + tabW / 2, tabY + tabH / 2);
  });
  ctx.textAlign = 'left'; ctx.textBaseline = 'top';

  let yCursor = tabY + tabH + 24;

  if (tab === 'general') {
    yCursor = drawSection(ctx, 'MAP', 28, yCursor, w - 56, [
      { id: 'map:osm',   label: 'Satellite', active: currentMap === 'osm' },
      { id: 'map:cyber', label: 'Cyberpunk', active: currentMap === 'cyber' },
      { id: 'map:tiles', label: 'Photoreal', active: currentMap === 'tiles' },
    ], regions);

    yCursor += 24;
    yCursor = drawSection(ctx, 'DATA SOURCE', 28, yCursor, w - 56, [
      { id: 'data:live', label: 'Live FR24',     active: currentData === 'live' },
      { id: 'data:demo', label: 'Demo 14:00 LT', active: currentData === 'demo' },
    ], regions);

    yCursor += 24;
    yCursor = drawSection(ctx, 'VIEW', 28, yCursor, w - 56, [
      { id: 'theme:day',   label: '☀ Day',   active: currentTheme === 'day' },
      { id: 'theme:night', label: '☾ Night', active: currentTheme === 'night' },
    ], regions);

    // Quick panel show/hide (the weather panel docks beside this menu).
    yCursor += 24;
    const wx = features.find((f) => f.id === 'weather');
    if (wx) {
      ctx.fillStyle = '#7d8b9e';
      ctx.font = '16px ui-sans-serif, system-ui, sans-serif';
      ctx.textBaseline = 'top'; ctx.textAlign = 'left';
      ctx.fillText('PANELS', 28, yCursor);
      yCursor += 28;
      yCursor = drawToggleRow(ctx, 28, yCursor, w - 56,
        { id: 'weather', label: 'Weather Panel', desc: 'METAR · wind · active runway', enabled: wx.enabled },
        regions);
    }
  } else {
    // Advanced — ATC feature toggles, each a full-width on/off row.
    ctx.fillStyle = '#7d8b9e';
    ctx.font = '16px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText('ATC FEATURES', 28, yCursor);
    yCursor += 28;
    for (const f of features) {
      yCursor = drawToggleRow(ctx, 28, yCursor, w - 56, f, regions);
      yCursor += 12;
    }
  }

  return regions;
}

// A labelled on/off toggle row. id = `feature:<featureId>`.
function drawToggleRow(ctx, x, y, w, feature, regions) {
  const rowH = 66;
  regions.push({ id: `feature:${feature.id}`, x, y, w, h: rowH });

  ctx.fillStyle = 'rgba(30, 40, 55, 0.55)';
  roundRect(ctx, x, y, w, rowH, 10); ctx.fill();
  ctx.strokeStyle = 'rgba(120,140,170,0.4)'; ctx.lineWidth = 1.5; ctx.stroke();

  // Label + description
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 20px ui-sans-serif, system-ui, sans-serif';
  ctx.textAlign = 'left'; ctx.textBaseline = 'top';
  ctx.fillText(feature.label, x + 16, y + 12);
  ctx.fillStyle = '#7d8b9e';
  ctx.font = '15px ui-sans-serif, system-ui, sans-serif';
  ctx.fillText(feature.desc || '', x + 16, y + 38);

  // Toggle pill (right side)
  const pw = 76, ph = 36;
  const px = x + w - pw - 16, py = y + (rowH - ph) / 2;
  ctx.fillStyle = feature.enabled ? '#33c66a' : 'rgba(80,90,105,0.8)';
  roundRect(ctx, px, py, pw, ph, ph / 2); ctx.fill();
  // Knob
  const knobR = ph / 2 - 4;
  const knobX = feature.enabled ? px + pw - knobR - 4 : px + knobR + 4;
  ctx.fillStyle = '#ffffff';
  ctx.beginPath(); ctx.arc(knobX, py + ph / 2, knobR, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = feature.enabled ? '#ffffff' : '#c8d0d8';
  ctx.font = 'bold 13px ui-sans-serif, system-ui, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(feature.enabled ? 'ON' : 'OFF', feature.enabled ? px + knobR + 6 : px + pw - knobR - 6, py + ph / 2);
  ctx.textAlign = 'left'; ctx.textBaseline = 'top';

  return y + rowH;
}

function drawSection(ctx, label, x, y, w, items, regions) {
  ctx.fillStyle = '#7d8b9e';
  ctx.font = 'bold 16px ui-sans-serif, system-ui, sans-serif';
  ctx.textBaseline = 'top';
  ctx.textAlign = 'left';
  ctx.fillText(label, x, y);

  const btnY = y + 28;
  const btnH = 56;
  const gap = 12;
  const btnW = (w - gap * (items.length - 1)) / items.length;

  items.forEach((it, i) => {
    const bx = x + i * (btnW + gap);
    const by = btnY;
    regions.push({ id: it.id, x: bx, y: by, w: btnW, h: btnH });

    if (it.active) {
      ctx.fillStyle = 'rgba(68, 153, 255, 0.25)';
      roundRect(ctx, bx, by, btnW, btnH, 10);
      ctx.fill();
      ctx.strokeStyle = '#4499ff';
      ctx.lineWidth = 2.5;
    } else {
      ctx.fillStyle = 'rgba(30, 40, 55, 0.6)';
      roundRect(ctx, bx, by, btnW, btnH, 10);
      ctx.fill();
      ctx.strokeStyle = 'rgba(120, 140, 170, 0.5)';
      ctx.lineWidth = 1.5;
    }
    ctx.stroke();

    ctx.fillStyle = it.active ? '#ffffff' : '#a8c4ff';
    ctx.font = `${it.active ? 'bold ' : ''}18px ui-sans-serif, system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(it.label, bx + btnW / 2, by + btnH / 2);
  });

  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  return btnY + btnH;
}
