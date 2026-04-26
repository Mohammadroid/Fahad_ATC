#!/usr/bin/env node
// Fetch a moment-in-time snapshot of Kuwait airspace from OpenSky Network.
//
// Usage:
//   OPENSKY_USER=foo OPENSKY_PASS=bar node scripts/fetch-snapshot.mjs
//   OPENSKY_USER=foo OPENSKY_PASS=bar node scripts/fetch-snapshot.mjs --time 1767200400
//   OPENSKY_USER=foo OPENSKY_PASS=bar node scripts/fetch-snapshot.mjs --date 2025-12-31 --hour 20
//
// Default target: 2025-12-31 20:00 Asia/Kuwait (= 17:00 UTC, unix 1767200400)
//
// Notes:
//   - Anonymous OpenSky access only returns realtime/last-hour data; historical
//     queries require a registered account, and going further than ~30 days back
//     on free tier may fail with 403 — researcher tier covers full history.
//   - /states/all does NOT include aircraft type; we leave `type` blank. Future
//     enrichment can call /metadata/aircraft/icao/<icao24> per aircraft.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const OKBK = { lat: 29.2266, lon: 47.9689 };
// ~±0.3° = ~33 km radius around OKBK. Tight enough to fit on the tabletop scale.
const BBOX = { lamin: 28.93, lomin: 47.66, lamax: 29.53, lomax: 48.28 };

const args = parseArgs(process.argv.slice(2));
const targetTime = resolveTime(args);

const url = new URL('https://opensky-network.org/api/states/all');
url.searchParams.set('time', String(targetTime));
for (const [k, v] of Object.entries(BBOX)) url.searchParams.set(k, String(v));

const headers = {};
const user = process.env.OPENSKY_USER;
const pass = process.env.OPENSKY_PASS;
if (user && pass) {
  headers.Authorization = 'Basic ' + Buffer.from(`${user}:${pass}`).toString('base64');
}

console.log(`Fetching ${url.toString()}`);
console.log(`Target  : ${new Date(targetTime * 1000).toISOString()}  (unix ${targetTime})`);
console.log(`Auth    : ${headers.Authorization ? 'registered user' : 'anonymous'}`);

let res;
try {
  res = await fetch(url, { headers });
} catch (err) {
  console.error(`\nNetwork error: ${err.message}`);
  process.exit(1);
}

if (!res.ok) {
  const body = await res.text();
  console.error(`\nOpenSky returned ${res.status} ${res.statusText}`);
  console.error(body.slice(0, 500));
  if (res.status === 401) console.error('\nHint: set OPENSKY_USER and OPENSKY_PASS env vars.');
  if (res.status === 403) console.error('\nHint: historical data this far back may need a researcher account.');
  process.exit(1);
}

const json = await res.json();
const states = json.states || [];
console.log(`Received ${states.length} state vectors.`);

const snapshot = {
  source: 'opensky',
  time_unix: targetTime,
  time_iso: new Date(targetTime * 1000).toISOString(),
  bbox: BBOX,
  okbk: OKBK,
  aircraft: states.map(parseStateVector).filter(Boolean),
};

const outDir = path.join(ROOT, 'public', 'data');
await fs.mkdir(outDir, { recursive: true });
const fname = `okbk_${targetTime}.json`;
const outPath = path.join(outDir, fname);
await fs.writeFile(outPath, JSON.stringify(snapshot, null, 2));

console.log(`\n✓ Wrote ${path.relative(ROOT, outPath)} (${snapshot.aircraft.length} aircraft)`);
console.log(`Open in browser:  https://localhost:5173/?snapshot=${fname}`);

// ---- helpers ----

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const k = a.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith('--')) { out[k] = true; }
    else { out[k] = next; i++; }
  }
  return out;
}

function resolveTime(args) {
  if (args.time) return Number(args.time);
  if (args.date) {
    const hour   = Number(args.hour   ?? 20);
    const minute = Number(args.minute ?? 0);
    const tz     = args.tz ?? '+03:00'; // Asia/Kuwait, no DST
    const iso = `${args.date}T${pad(hour)}:${pad(minute)}:00${tz}`;
    return Math.floor(new Date(iso).getTime() / 1000);
  }
  return 1767200400; // 2025-12-31 20:00 Asia/Kuwait
}

function parseStateVector(sv) {
  // OpenSky /states/all schema (positional array):
  // [icao24, callsign, country, time_position, last_contact, lon, lat,
  //  baro_alt(m), on_ground, velocity(m/s), true_track(deg), vert_rate,
  //  sensors, geo_alt(m), squawk, spi, position_source]
  const [icao24, rawCs, , , , lon, lat, baroAlt, onGround, velocity, track, vertRate] = sv;
  if (lat == null || lon == null) return null;
  const callsign = (rawCs || '').trim() || icao24.toUpperCase();
  const altFt = Math.round(((baroAlt ?? 0) * 3.28084));
  return {
    icao24,
    callsign,
    type: '',
    state: classifyState({ onGround, velocity, vertRate, lat, lon }),
    lat, lon,
    alt: altFt,
    hdg: Math.round(track ?? 0),
    speed_kt: Math.round((velocity ?? 0) * 1.94384),
    on_ground: !!onGround,
  };
}

function classifyState({ onGround, velocity, vertRate, lat, lon }) {
  if (onGround) {
    if ((velocity ?? 0) < 2)  return 'PARKED';
    if ((velocity ?? 0) > 25) return 'CLEARED';
    return 'TAXI';
  }
  if ((vertRate ?? 0) < -2) return 'AIRBORNE_IN';
  if ((vertRate ?? 0) >  2) return 'AIRBORNE_OUT';
  // Level cruise: classify by whether the aircraft is north or south of OKBK
  // (a coarse heuristic — proper classification needs flight-plan data).
  return lat < OKBK.lat ? 'AIRBORNE_IN' : 'AIRBORNE_OUT';
}

function pad(n) { return String(n).padStart(2, '0'); }
