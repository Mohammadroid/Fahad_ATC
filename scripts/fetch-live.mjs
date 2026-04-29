#!/usr/bin/env node
// Fetch a CURRENT (now) snapshot of live aircraft over the Persian Gulf from
// OpenSky Network. Anonymous access works for live state vectors. Saves to
// public/data/okbk_today.json with a timestamp + count.
//
// Run via:
//   node scripts/fetch-live.mjs
//   OPENSKY_USER=foo OPENSKY_PASS=bar node scripts/fetch-live.mjs   (higher rate limit)
//
// Designed to be called by a GitHub Actions cron — see .github/workflows/refresh-data.yml.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const OKBK = { lat: 29.2266, lon: 47.9689 };
// Wide bbox covering most of the Persian Gulf so we always capture the few
// aircraft within range of OKBK plus broader regional traffic for context.
const BBOX = { lamin: 22.0, lomin: 46.0, lamax: 32.0, lomax: 58.0 };

const url = new URL('https://opensky-network.org/api/states/all');
for (const [k, v] of Object.entries(BBOX)) url.searchParams.set(k, String(v));

const headers = {};
if (process.env.OPENSKY_USER && process.env.OPENSKY_PASS) {
  headers.Authorization = 'Basic ' + Buffer.from(
    `${process.env.OPENSKY_USER}:${process.env.OPENSKY_PASS}`
  ).toString('base64');
}

console.log(`Fetching ${url.toString()}`);
const res = await fetch(url, { headers });
if (!res.ok) {
  console.error(`OpenSky ${res.status} ${res.statusText}`);
  console.error((await res.text()).slice(0, 400));
  process.exit(1);
}
const json = await res.json();
const states = json.states || [];
const fetchTime = json.time || Math.floor(Date.now() / 1000);
console.log(`Received ${states.length} state vectors at ${new Date(fetchTime * 1000).toISOString()}`);

const cosLat = Math.cos(OKBK.lat * Math.PI / 180);
function distNm(lat, lon) {
  const dxKm = (lon - OKBK.lon) * 111.32 * cosLat;
  const dyKm = (lat - OKBK.lat) * 111.32;
  return Math.hypot(dxKm, dyKm) * 1000 / 1852;
}

const aircraft = states
  .map((sv) => {
    const [icao24, rawCs, , , , lon, lat, baroAlt, onGround, velocity, track, vertRate] = sv;
    if (lat == null || lon == null) return null;
    const callsign = (rawCs || '').trim() || icao24.toUpperCase();
    const altFt = Math.round((baroAlt ?? 0) * 3.28084);
    return {
      icao24, callsign, type: '',
      state: classify({ onGround, velocity, vertRate, lat, lon }),
      lat, lon,
      alt: altFt,
      hdg: Math.round(track ?? 0),
      speed_kt: Math.round((velocity ?? 0) * 1.94384),
      vrate_fpm: Math.round((vertRate ?? 0) * 196.85),
      on_ground: !!onGround,
      dist_nm: Math.round(distNm(lat, lon)),
    };
  })
  .filter(Boolean)
  .sort((a, b) => a.dist_nm - b.dist_nm);

function classify({ onGround, velocity, vertRate, lat, lon }) {
  if (onGround) {
    if ((velocity ?? 0) < 2) return 'PARKED';
    if ((velocity ?? 0) > 25) return 'CLEARED';
    return 'TAXI';
  }
  if ((vertRate ?? 0) < -2) return 'AIRBORNE_IN';
  if ((vertRate ?? 0) >  2) return 'AIRBORNE_OUT';
  return lat < OKBK.lat ? 'AIRBORNE_IN' : 'AIRBORNE_OUT';
}

const near    = aircraft.filter((a) => a.dist_nm < 50);
const distant = aircraft.filter((a) => a.dist_nm >= 50);

const snapshot = {
  source: 'opensky-live',
  time_unix: fetchTime,
  time_iso: new Date(fetchTime * 1000).toISOString(),
  bbox: BBOX,
  okbk: OKBK,
  counts: { total: aircraft.length, near_50nm: near.length, distant: distant.length },
  aircraft,
};

const outDir = path.join(ROOT, 'public', 'data');
await fs.mkdir(outDir, { recursive: true });
// Writes okbk_live.json (the curated okbk_today.json is left untouched as the
// default scenario when live data is unavailable).
const outPath = path.join(outDir, 'okbk_live.json');
await fs.writeFile(outPath, JSON.stringify(snapshot, null, 2));
console.log(`✓ ${path.relative(ROOT, outPath)}: ${aircraft.length} total · ${near.length} within 50 nm · ${distant.length} distant`);
