import * as THREE from 'three';
import { SCALE } from '../airport.js';
import { buildAircraftGroup } from '../aircraft.js';

// Loads a moment-in-time snapshot JSON (produced by scripts/fetch-snapshot.mjs
// or hand-authored) and places aircraft at their geographic coordinates,
// projected onto the tabletop using OKBK as the local origin.

const OKBK_LAT = 29.2266;
const OKBK_LON = 47.9689;
const COS_LAT = Math.cos(OKBK_LAT * Math.PI / 180);

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
    this.aircraft = (snapshot.aircraft || []).map((a) => this.spawn(a));
    console.log(`[snapshot] ${this.aircraft.length} aircraft @ ${snapshot.time_iso || snapshot.time_local || '?'}`);
  }

  spawn(data) {
    const group = buildAircraftGroup(data);
    const { x, z } = latLonToTabletop(data.lat, data.lon);
    const altLift = data.alt > 0 ? 0.04 + Math.min(data.alt / 12000, 1.5) * 0.10 : 0.005;
    group.position.set(x, altLift, z);
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
