import * as THREE from 'three';
import { SCALE } from '../airport.js';
import { buildAircraftGroup, getAirlineAccent, getAirlineName, STATES } from '../aircraft.js';
import { buildDemoAircraft, DEMO_CYCLE_SECONDS } from './demo_script.js';

// Loads a moment-in-time snapshot JSON (produced by scripts/fetch-snapshot.mjs,
// scripts/fetch-live.mjs, or hand-authored) and places aircraft on the tabletop.
//
// Aircraft within NEAR_RADIUS_NM of OKBK render as full glTF aircraft at their
// geographic position. Anything further away (typical when feeding live regional
// data with sparse near-airport coverage) renders as an edge indicator on the
// table's compass ring — a small chevron in the bearing direction with a
// callsign + distance label. The user can still pinch to select either form.

const OKBK_LAT = 29.2266;
const OKBK_LON = 47.9689;
const COS_LAT = Math.cos(OKBK_LAT * Math.PI / 180);

// Distance compression — aircraft within NEAR_RADIUS_KM (200 km ≈ 108 nm)
// render as full aircraft using a piecewise-log scale so all of them fit on
// the visible tabletop. Inside PIVOT_KM (the airport boundary) positions use
// the regular 1/5000 airport scale so runway aircraft stay aligned with the
// runways. Beyond that, distance compresses logarithmically to MAX_DISPLAY_W.
//
//   real km → display world units
//     0   →  0
//     1.75 → 0.35  (pivot — runway-extent radius at 1/5000)
//     10  → ~0.378
//     30  → ~0.408
//     55  → ~0.503  (= 30 nm)
//     100 → ~0.597
//     200 → 0.75   (table edge)
//
const NEAR_RADIUS_KM = 500;       // ≤ this = full aircraft (compressed)
const FAR_RADIUS_KM  = 1500;      // ≤ this = edge chevron
const MAX_DISTANT_INDICATORS = 18;
const EDGE_RADIUS_W  = 0.86;      // chevron ring, just outside the display area
const PIVOT_KM       = 1.75;      // boundary where linear → log
const PIVOT_W        = PIVOT_KM * 1000 / 5000;  // = 0.35 m world
const MAX_DISPLAY_W  = 0.75;      // table edge for compressed range

export class SnapshotPlayer {
  static async load(url, parent) {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Snapshot fetch failed: ${res.status} ${res.statusText}`);
    const data = await res.json();
    return new SnapshotPlayer(data, parent, url);
  }

  constructor(snapshot, parent, url = null) {
    this.snapshot = snapshot;
    this.parent = parent;
    this.url = url;
    this.aircraft = [];

    if (snapshot.source === 'demo-scripted') {
      this.isDemo = true;
      this.demoTime = 0;
      this.cycleSec = snapshot.cycle_seconds || DEMO_CYCLE_SECONDS;
      this._spawnDemo();
    } else {
      this._spawnAll(snapshot);
    }
    // Expose for console-side debugging (`window._sp.isDemo`, `_sp.demoTime`, …)
    if (typeof window !== 'undefined') window._sp = this;
  }

  _spawnDemo() {
    const defs = buildDemoAircraft();
    for (const def of defs) {
      const wp0 = def.script[0];
      const data = {
        callsign: def.callsign,
        type: def.type,
        origin: def.origin,
        destination: def.destination,
        state: wp0.state,
        lat: wp0.lat, lon: wp0.lon, alt: wp0.alt, hdg: wp0.hdg,
        speed_kt: wp0.speed_kt,
        on_ground: wp0.alt < 100,
        dist_nm: 0,
      };
      const group = buildAircraftGroup(data);
      const { x, z } = compressedTabletopPos(data.lat, data.lon);
      const altLift = data.alt > 0 ? 0.04 + Math.min(data.alt / 12000, 1.5) * 0.10 : 0.005;
      group.position.set(x, altLift, z);
      group.userData._demoDef = def;
      group.visible = false; // hidden until birth time
      this.parent.add(group);
      this.aircraft.push(group);
    }
    console.log(`[demo] choreographed scene with ${this.aircraft.length} aircraft, ${this.cycleSec}s cycle`);
  }

  _spawnAll(snapshot) {
    // Pre-process: compute distance for each, sort by distance ascending so
    // we keep the closest distant aircraft if there are too many.
    const acs = (snapshot.aircraft || [])
      .map((a) => ({ ...a, _dist_km: distanceKm(a.lat, a.lon) }))
      .sort((a, b) => a._dist_km - b._dist_km);

    const near = acs.filter((a) => a._dist_km <= NEAR_RADIUS_KM);
    const distant = acs
      .filter((a) => a._dist_km > NEAR_RADIUS_KM && a._dist_km <= FAR_RADIUS_KM)
      .slice(0, MAX_DISTANT_INDICATORS);

    for (const a of near) this.aircraft.push(this.spawnNear(a));
    for (const a of distant) this.aircraft.push(this.spawnDistant(a));

    console.log(
      `[snapshot] ${this.aircraft.length} aircraft @ ${snapshot.time_iso || '?'} ` +
      `(near<200km=${near.length} · distant=${distant.length})`
    );
  }

  // Re-fetch the snapshot URL and replace aircraft if the data changed.
  // Returns true if a refresh happened (new timestamp), false otherwise.
  async refresh() {
    if (!this.url) return false;
    if (this.isDemo) return false;   // demo is scripted; never replace its state
    let data;
    try {
      const res = await fetch(this.url, { cache: 'no-store' });
      if (!res.ok) return false;
      data = await res.json();
    } catch {
      return false;
    }
    const oldT = this.snapshot.time_unix;
    const newT = data.time_unix;
    if (oldT && newT && oldT === newT) return false; // unchanged
    this._disposeAll();
    this.snapshot = data;
    this._spawnAll(data);
    return true;
  }

  _disposeAll() {
    for (const ac of this.aircraft) {
      const path = ac.userData?.flightPath;
      if (path) {
        path.parent?.remove(path);
        disposeRecursive(path);
      }
      this.parent.remove(ac);
      disposeRecursive(ac);
    }
    this.aircraft = [];
  }

  spawnNear(data) {
    const group = buildAircraftGroup(data);
    const { x, z } = compressedTabletopPos(data.lat, data.lon);
    // Deterministic jitter (per-callsign) so aircraft at near-identical bearings
    // don't visually stack on top of each other after the log compression.
    const jit = jitterOffset(data);
    const altLift = data.alt > 0 ? 0.04 + Math.min(data.alt / 12000, 1.5) * 0.10 : 0.005;
    group.position.set(x + jit.dx, altLift, z + jit.dz);
    this.parent.add(group);
    return group;
  }

  spawnDistant(data) {
    // Edge indicator: chevron + label at table edge in the bearing direction.
    const bearingRad = bearingFromOKBK(data.lat, data.lon); // radians, 0 = north
    const x = Math.sin(bearingRad) * EDGE_RADIUS_W;
    const z = -Math.cos(bearingRad) * EDGE_RADIUS_W;

    const group = new THREE.Group();
    group.userData = { ...data, isDistant: true };

    const accent = getAirlineAccent(data.callsign);
    const stateInfo = STATES[data.state] || STATES.PARKED;

    // Chevron — flat triangle on the ground, point facing AWAY from OKBK
    const tri = new THREE.Mesh(
      new THREE.ConeGeometry(0.012, 0.024, 3),
      new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.92 })
    );
    tri.rotation.x = -Math.PI / 2;     // lay flat
    tri.rotation.z = -bearingRad;       // tip outward (along bearing)
    tri.position.y = 0.003;
    group.add(tri);

    // Inner state-color dot
    const dot = new THREE.Mesh(
      new THREE.CircleGeometry(0.005, 16),
      new THREE.MeshBasicMaterial({ color: stateInfo.color, transparent: true, opacity: 0.95 })
    );
    dot.rotation.x = -Math.PI / 2;
    dot.position.y = 0.0035;
    group.add(dot);
    group.userData.stateRing = dot; // re-uses the highlight machinery

    // Label sprite (bigger so distance reads)
    const label = makeDistantLabel(data, accent);
    label.position.y = 0.04;
    group.add(label);
    group.userData.label = label;

    group.position.set(x, 0, z);
    this.parent.add(group);
    return group;
  }

  // Scripted demo animation: interpolate each aircraft's position/state from
  // pre-computed waypoints. Static snapshots (live, curated) don't animate.
  update(dt) {
    if (!this.isDemo) return;
    if (dt > 0.1) dt = 0.1;
    this.demoTime += dt;
    if (this.demoTime >= this.cycleSec) this.demoTime -= this.cycleSec;

    // One-shot diagnostic on first update so we can confirm the loop is firing.
    if (!this._loggedFirst) {
      this._loggedFirst = true;
      console.log('[demo] first update — aircraft=', this.aircraft.length,
                  'cycleSec=', this.cycleSec, 'dt=', dt);
    }

    const t = this.demoTime;

    for (const ac of this.aircraft) {
      const def = ac.userData?._demoDef;
      if (!def) continue;
      const visible = t >= def.birth && t <= def.death;
      ac.visible = visible;
      if (!visible) continue;

      // Locate the current segment of the script.
      const wps = def.script;
      let i = 0;
      while (i < wps.length - 1 && wps[i + 1].t <= t) i++;
      const a = wps[i];
      const b = wps[Math.min(i + 1, wps.length - 1)];
      const dur = Math.max(b.t - a.t, 0.0001);
      const k = Math.max(0, Math.min(1, (t - a.t) / dur));

      ac.userData.lat       = lerp(a.lat, b.lat, k);
      ac.userData.lon       = lerp(a.lon, b.lon, k);
      ac.userData.alt       = lerp(a.alt, b.alt, k);
      ac.userData.hdg       = lerpAngle(a.hdg, b.hdg, k);
      ac.userData.speed_kt  = Math.round(lerp(a.speed_kt, b.speed_kt, k));
      ac.userData.state     = a.state; // current segment owns state until next waypoint
      ac.userData.on_ground = ac.userData.alt < 100;

      // dist for the inbound/outbound panel filter
      const dxKm = (ac.userData.lon - 47.9689) * 111.32 * COS_LAT;
      const dyKm = (ac.userData.lat - 29.2266) * 111.32;
      const distKm = Math.hypot(dxKm, dyKm);
      ac.userData.dist_nm = Math.round(distKm / 1.852);

      const { x, z } = compressedTabletopPos(ac.userData.lat, ac.userData.lon);
      const altLift = ac.userData.alt > 0
        ? 0.04 + Math.min(ac.userData.alt / 12000, 1.5) * 0.10
        : 0.005;
      ac.position.set(x, altLift, z);
      // 180° − heading: see aircraft.js — nose +Z, table north = -Z.
      ac.rotation.y = Math.PI - THREE.MathUtils.degToRad(ac.userData.hdg || 0);

      pulseIfActive(ac, dt);
    }
  }
}

function lerp(a, b, k) { return a + (b - a) * k; }
function lerpAngle(a, b, k) {
  const diff = ((b - a + 540) % 360) - 180; // shortest signed delta
  return (a + diff * k + 360) % 360;
}

function pulseIfActive(ac, dt) {
  const d = ac.userData;
  const ring = d.stateRing;
  if (!ring?.material) return;

  // "Active" = on the runway (CLEARED) or on short final (within 5 NM)
  const isOnRwy = d.state === 'CLEARED';
  const isShortFinal = d.state === 'AIRBORNE_IN' && (d.dist_nm ?? 999) < 5;
  const active = isOnRwy || isShortFinal;

  if (!active) {
    if (ring._pulseT != null) {
      ring._pulseT = 0;
      ring.scale.setScalar(1);
      ring.material.opacity = 0.6;
    }
    return;
  }
  ring._pulseT = (ring._pulseT || 0) + dt;
  const k = (Math.sin(ring._pulseT * 6) + 1) / 2;     // 0..1
  ring.scale.setScalar(1.2 + k * 0.6);
  ring.material.opacity = 0.55 + k * 0.45;
}

// Piecewise distance compression: 1/5000 inside the airport boundary, then
// logarithmic compression out to the table edge. See block comment above.
function compressedDisplayDistance(realKm) {
  if (realKm <= PIVOT_KM) {
    return realKm * 1000 / 5000;
  }
  if (realKm >= NEAR_RADIUS_KM) return MAX_DISPLAY_W;
  const t = (realKm - PIVOT_KM) / (NEAR_RADIUS_KM - PIVOT_KM); // 0..1
  const logShaped = Math.log(1 + t * (Math.E - 1));            // 0..1
  return PIVOT_W + (MAX_DISPLAY_W - PIVOT_W) * logShaped;
}

function compressedTabletopPos(lat, lon) {
  const dxKm = (lon - OKBK_LON) * 111.32 * COS_LAT;
  const dyKm = (lat - OKBK_LAT) * 111.32;
  const realKm = Math.hypot(dxKm, dyKm);
  if (realKm < 1e-6) return { x: 0, z: 0 };
  const dispW = compressedDisplayDistance(realKm);
  // Unit bearing direction; +X = east in tabletop, -Z = north
  const ux = dxKm / realKm;
  const uy = dyKm / realKm;
  return { x: ux * dispW, z: -uy * dispW };
}

function distanceKm(lat, lon) {
  const dxKm = (lon - OKBK_LON) * 111.32 * COS_LAT;
  const dyKm = (lat - OKBK_LAT) * 111.32;
  return Math.hypot(dxKm, dyKm);
}

// Deterministic small offset per aircraft so visually-overlapping live entries
// (similar bearing + similar compressed distance) get pushed apart.
function jitterOffset(data) {
  const seed = (data.callsign || data.icao24 || data.hex || 'x') + '';
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  const r1 = ((h        & 0x3ff) / 0x200) - 1; // -1 .. +1
  const r2 = (((h >> 10) & 0x3ff) / 0x200) - 1;
  return { dx: r1 * 0.035, dz: r2 * 0.035 }; // up to ~3.5 cm in any direction
}

function bearingFromOKBK(lat, lon) {
  // Returns radians, 0 = north, +clockwise.
  const dE = (lon - OKBK_LON) * COS_LAT;
  const dN = (lat - OKBK_LAT);
  return Math.atan2(dE, dN);
}

function makeDistantLabel(data, accentHex) {
  const canvas = document.createElement('canvas');
  canvas.width = 360; canvas.height = 110;
  const ctx = canvas.getContext('2d');
  const accent = `#${accentHex.toString(16).padStart(6, '0')}`;
  ctx.fillStyle = 'rgba(10, 14, 22, 0.85)';
  roundRect(ctx, 4, 4, canvas.width - 8, canvas.height - 8, 10);
  ctx.fill();
  ctx.strokeStyle = accent; ctx.lineWidth = 2.5; ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 32px ui-sans-serif, system-ui, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillText(data.callsign, canvas.width / 2, 12);

  const subtitle = `${Math.round(data._dist_km / 1.852)} nm · ${data.alt > 0 ? data.alt.toLocaleString() + ' ft' : 'gnd'}`;
  ctx.font = '20px ui-sans-serif, system-ui, sans-serif';
  ctx.fillStyle = '#9aa4b2';
  ctx.fillText(subtitle, canvas.width / 2, 56);

  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter; tex.anisotropy = 4;

  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: tex, transparent: true, depthTest: false,
  }));
  sprite.scale.set(0.085, 0.026, 1);
  sprite.renderOrder = 12;
  return sprite;
}

function disposeRecursive(obj) {
  obj.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      for (const m of mats) {
        if (m.map) m.map.dispose();
        m.dispose();
      }
    }
  });
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
