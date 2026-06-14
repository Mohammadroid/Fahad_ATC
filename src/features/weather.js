import * as THREE from 'three';

// Weather panel — METAR, wind rose, and active-runway recommendation for OKBK.
// Self-contained floating panel. Uses a realistic static METAR with the wind
// gently varying over time (so the wind rose animates and the recommended
// runway can flip), demonstrating the controller's runway-in-use decision.

export function createWeatherPanel({ scene, SpatialPanel, interaction }) {
  let enabled = false;
  let lastDraw = 0;

  const panel = new SpatialPanel({
    name: 'weather',
    width: 0.34, height: 0.40, canvasW: 520, canvasH: 620,
    anchor: new THREE.Vector3(-0.85, 1.45, -0.75),
    faceTarget: new THREE.Vector3(0, 1.4, 0),
  });
  scene.add(panel.group);
  panel.group.visible = false;
  interaction.registerGrabbable(panel.group, {
    surfaces: [panel.mesh], kind: 'panel', minScale: 0.5, maxScale: 2.0,
  });

  // Base OKBK conditions; wind direction drifts slowly for a live feel.
  const base = { windDir: 330, windKt: 12, gust: 18, vis: 9999, temp: 38, dew: 9, qnh: 1009 };

  function currentWind(tSec) {
    const dir = (base.windDir + Math.round(20 * Math.sin(tSec / 25))) % 360;
    const kt = base.windKt + Math.round(4 * Math.sin(tSec / 17));
    return { dir, kt };
  }

  function activeRunway(windDir) {
    // OKBK runways 15/33 (~155/335). Land into wind: choose the end whose
    // heading is closest to the wind direction.
    const ends = [
      { name: '33', hdg: 335 }, { name: '15', hdg: 155 },
    ];
    let best = ends[0], bestDiff = 999;
    for (const e of ends) {
      const d = Math.abs(((windDir - e.hdg + 540) % 360) - 180);
      if (d < bestDiff) { best = e; bestDiff = d; }
    }
    return best.name;
  }

  function update(dt) {
    if (!enabled) return;
    const now = performance.now();
    if (now - lastDraw < 1000) return;
    lastDraw = now;
    const tSec = now / 1000;
    const wind = currentWind(tSec);
    const rwy = activeRunway(wind.dir);
    panel.redraw((ctx, w, h) => draw(ctx, w, h, wind, rwy));
  }

  function draw(ctx, w, h, wind, rwy) {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(8, 12, 20, 0.95)';
    roundRect(ctx, 0, 0, w, h, 18); ctx.fill();
    ctx.strokeStyle = '#33c6a8'; ctx.lineWidth = 5; ctx.stroke();
    ctx.fillStyle = '#33c6a8'; ctx.fillRect(0, 0, w, 8);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px ui-sans-serif, system-ui, sans-serif';
    ctx.textBaseline = 'top'; ctx.textAlign = 'left';
    ctx.fillText('OKBK WX', 24, 26);
    ctx.fillStyle = '#7d8b9e';
    ctx.font = '18px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText('Kuwait Intl · METAR', 24, 70);

    // Wind rose
    const cx = w / 2, cy = 230, R = 90;
    ctx.strokeStyle = 'rgba(120,140,170,0.4)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#7d8b9e'; ctx.font = '16px ui-sans-serif, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('N', cx, cy - R - 20); ctx.fillText('S', cx, cy + R + 6);
    ctx.fillText('W', cx - R - 16, cy - 8); ctx.fillText('E', cx + R + 16, cy - 8);
    // Wind arrow (points FROM the wind direction, i.e. where wind comes from)
    const a = (wind.dir - 90) * Math.PI / 180;
    const fx = cx + Math.cos(a) * R, fy = cy + Math.sin(a) * R;
    ctx.strokeStyle = '#33c6a8'; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(fx, fy); ctx.lineTo(cx, cy); ctx.stroke();
    ctx.fillStyle = '#33c6a8'; ctx.beginPath(); ctx.arc(cx, cy, 7, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 30px ui-monospace, monospace';
    ctx.fillText(`${String(wind.dir).padStart(3, '0')}° / ${wind.kt}kt`, cx, cy + R + 28);

    // Data rows
    let ry = cy + R + 78;
    const rows = [
      ['Visibility', `${base.vis >= 9999 ? '10+ km' : base.vis + ' m'}`],
      ['Temp / Dew', `${base.temp}°C / ${base.dew}°C`],
      ['QNH', `${base.qnh} hPa`],
    ];
    ctx.textAlign = 'left';
    for (const [k, v] of rows) {
      ctx.fillStyle = '#7d8b9e'; ctx.font = '20px ui-sans-serif, sans-serif';
      ctx.fillText(k, 24, ry);
      ctx.fillStyle = '#e6edf3'; ctx.font = 'bold 22px ui-sans-serif, sans-serif';
      ctx.fillText(v, 240, ry);
      ry += 38;
    }

    // Active runway recommendation
    ry += 8;
    ctx.fillStyle = 'rgba(51, 198, 168, 0.18)';
    roundRect(ctx, 24, ry, w - 48, 70, 12); ctx.fill();
    ctx.strokeStyle = '#33c6a8'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#7d8b9e'; ctx.font = '16px ui-sans-serif, sans-serif';
    ctx.fillText('RECOMMENDED RUNWAY', 40, ry + 12);
    ctx.fillStyle = '#33c6a8'; ctx.font = 'bold 38px ui-sans-serif, sans-serif';
    ctx.fillText(`RWY ${rwy}`, 40, ry + 30);
  }

  function setEnabled(on) { enabled = on; panel.group.visible = on; if (on) lastDraw = 0; }
  function isEnabled() { return enabled; }
  function dispose() { scene.remove(panel.group); }

  return { setEnabled, isEnabled, update, dispose, group: panel.group };
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
