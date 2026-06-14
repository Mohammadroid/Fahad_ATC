import * as THREE from 'three';

// Electronic Flight Strips board — the controller's working surface. Shows one
// strip per tracked flight, grouped into ARRIVALS and DEPARTURES bays, with
// callsign, type, runway, route and live phase. Self-contained grabbable panel.

const RWY_BY_STATE = {
  AIRBORNE_IN: '33', CLEARED: '33', TAXI: '—', QUEUED: '33',
  AIRBORNE_OUT: '33', PARKED: '—',
};

export function createStripsPanel({ scene, SpatialPanel, interaction, traffic }) {
  let enabled = false;
  let lastDraw = 0;

  const panel = new SpatialPanel({
    name: 'strips',
    width: 0.40, height: 0.50, canvasW: 576, canvasH: 720,
    anchor: new THREE.Vector3(0.88, 1.45, -0.75),
    faceTarget: new THREE.Vector3(0, 1.4, 0),
  });
  scene.add(panel.group);
  panel.group.visible = false;

  function update(dt) {
    if (!enabled) return;
    const now = performance.now();
    if (now - lastDraw < 800) return;
    lastDraw = now;

    const acs = traffic.aircraft.filter((g) => g.visible).map((g) => g.userData).filter(Boolean);
    const arr = acs.filter((d) => ['AIRBORNE_IN'].includes(d.state) ||
      (['CLEARED', 'TAXI', 'PARKED'].includes(d.state) && d.destination === 'OKBK'));
    const dep = acs.filter((d) => ['AIRBORNE_OUT', 'QUEUED'].includes(d.state) ||
      (['CLEARED', 'TAXI'].includes(d.state) && d.origin === 'OKBK'));

    panel.redraw((ctx, w, h) => draw(ctx, w, h, arr, dep));
  }

  function draw(ctx, w, h, arr, dep) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(8, 12, 20, 0.96)';
    roundRect(ctx, 0, 0, w, h, 18); ctx.fill();
    ctx.strokeStyle = '#9a7dff'; ctx.lineWidth = 5; ctx.stroke();
    ctx.fillStyle = '#9a7dff'; ctx.fillRect(0, 0, w, 8);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px ui-sans-serif, system-ui, sans-serif';
    ctx.textBaseline = 'top'; ctx.textAlign = 'left';
    ctx.fillText('FLIGHT STRIPS', 24, 24);

    let y = 80;
    y = bay(ctx, 'ARRIVALS', '#4499ff', arr, 24, y, w - 48);
    y += 16;
    bay(ctx, 'DEPARTURES', '#ff8844', dep, 24, y, w - 48);
  }

  function bay(ctx, title, accent, flights, x, y, w) {
    ctx.fillStyle = accent;
    ctx.font = 'bold 20px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText(`${title}  (${flights.length})`, x, y);
    y += 30;

    const stripH = 60, gap = 8;
    const max = 6;
    if (!flights.length) {
      ctx.fillStyle = '#7d8b9e'; ctx.font = 'italic 18px ui-sans-serif, sans-serif';
      ctx.fillText('— none —', x, y + 8);
      return y + 40;
    }
    flights.slice(0, max).forEach((d) => {
      // Strip body
      ctx.fillStyle = 'rgba(28, 36, 50, 0.9)';
      roundRect(ctx, x, y, w, stripH, 8); ctx.fill();
      ctx.strokeStyle = accent; ctx.lineWidth = 2; ctx.stroke();
      // Left accent bar
      ctx.fillStyle = accent; roundRect(ctx, x, y, 6, stripH, 3); ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 24px ui-monospace, monospace';
      ctx.fillText(d.callsign || '----', x + 16, y + 8);

      ctx.fillStyle = '#a8c4ff';
      ctx.font = '16px ui-sans-serif, sans-serif';
      ctx.fillText(`${d.type || '?'}  ${d.origin || '?'}→${d.destination || '?'}`, x + 16, y + 36);

      // Right column: runway + phase
      ctx.textAlign = 'right';
      ctx.fillStyle = '#e6edf3';
      ctx.font = 'bold 20px ui-sans-serif, sans-serif';
      ctx.fillText(`RWY ${RWY_BY_STATE[d.state] || '—'}`, x + w - 14, y + 8);
      ctx.fillStyle = phaseColor(d.state);
      ctx.font = '16px ui-sans-serif, sans-serif';
      ctx.fillText(String(d.state || '').replace('_', ' '), x + w - 14, y + 36);
      ctx.textAlign = 'left';

      y += stripH + gap;
    });
    return y;
  }

  function setEnabled(on) { enabled = on; panel.group.visible = on; if (on) lastDraw = 0; }
  function isEnabled() { return enabled; }
  function dispose() { scene.remove(panel.group); }

  return { setEnabled, isEnabled, update, dispose, group: panel.group, panel };
}

function phaseColor(state) {
  switch (state) {
    case 'AIRBORNE_IN':  return '#4499ff';
    case 'AIRBORNE_OUT': return '#ff8844';
    case 'CLEARED':      return '#33ff77';
    case 'TAXI':         return '#ffcc33';
    case 'QUEUED':       return '#ff6633';
    default:             return '#9aa4b2';
  }
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
