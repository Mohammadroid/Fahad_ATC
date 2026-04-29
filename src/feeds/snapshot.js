import * as THREE from 'three';
import { SCALE } from '../airport.js';
import { buildAircraftGroup, getAirlineAccent, getAirlineName, STATES } from '../aircraft.js';

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

const NEAR_RADIUS_NM = 30;     // ≤ render as full aircraft on the table
const FAR_RADIUS_NM  = 400;    // distant cap; further than this is ignored
const MAX_DISTANT_INDICATORS = 18;
const EDGE_RADIUS_W = 0.70;    // metres — table is 1.6 m wide so 0.7 m fits inside

export class SnapshotPlayer {
  static async load(url, parent) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Snapshot fetch failed: ${res.status} ${res.statusText}`);
    const data = await res.json();
    return new SnapshotPlayer(data, parent);
  }

  constructor(snapshot, parent) {
    this.snapshot = snapshot;
    this.parent = parent;

    // Pre-process: compute distance for each, sort by distance ascending so
    // we keep the closest distant aircraft if there are too many.
    const acs = (snapshot.aircraft || [])
      .map((a) => ({ ...a, _dist_nm: a.dist_nm ?? distanceNm(a.lat, a.lon) }))
      .sort((a, b) => a._dist_nm - b._dist_nm);

    const near = acs.filter((a) => a._dist_nm <= NEAR_RADIUS_NM);
    const distant = acs
      .filter((a) => a._dist_nm > NEAR_RADIUS_NM && a._dist_nm <= FAR_RADIUS_NM)
      .slice(0, MAX_DISTANT_INDICATORS);

    this.aircraft = [];
    for (const a of near) this.aircraft.push(this.spawnNear(a));
    for (const a of distant) this.aircraft.push(this.spawnDistant(a));

    console.log(
      `[snapshot] ${this.aircraft.length} aircraft @ ${snapshot.time_iso || '?'} ` +
      `(near=${near.length} · distant=${distant.length})`
    );
  }

  spawnNear(data) {
    const group = buildAircraftGroup(data);
    const { x, z } = latLonToTabletop(data.lat, data.lon);
    const altLift = data.alt > 0 ? 0.04 + Math.min(data.alt / 12000, 1.5) * 0.10 : 0.005;
    group.position.set(x, altLift, z);
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

  // Static moment — no animation. Future: stitch sequential snapshots and interpolate.
  update(_dt) {}
}

function latLonToTabletop(lat, lon) {
  const dxM = (lon - OKBK_LON) * 111320 * COS_LAT;
  const dzM = -(lat - OKBK_LAT) * 111320;
  return { x: dxM * SCALE, z: dzM * SCALE };
}

function distanceNm(lat, lon) {
  const dxKm = (lon - OKBK_LON) * 111.32 * COS_LAT;
  const dyKm = (lat - OKBK_LAT) * 111.32;
  return Math.hypot(dxKm, dyKm) * 1000 / 1852;
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

  const subtitle = `${Math.round(data._dist_nm)} nm · ${data.alt > 0 ? data.alt.toLocaleString() + ' ft' : 'gnd'}`;
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

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
