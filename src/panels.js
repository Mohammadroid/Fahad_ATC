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
