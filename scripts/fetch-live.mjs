#!/usr/bin/env node
// Fetch a live snapshot of aircraft near OKBK.
//
// Provider priority:
//   1. FR24_TOKEN  → FlightRadar24 /api/live/flight-positions/full
//                    (richest data, real coverage, paid; sandbox returns canned global samples)
//   2. OPENSKY_USER / OPENSKY_PASS → authenticated OpenSky /states/all
//                    (higher rate limit, last-30-day historical)
//   3. (no creds)  → anonymous OpenSky /states/all (sparse community ADS-B)
//
// Writes public/data/okbk_live.json. Soft-fails on network errors so the
// hourly GH Actions cron doesn't email failures on transient hiccups.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const OKBK = { lat: 29.2266, lon: 47.9689 };
// Wide bbox covering most of the Persian Gulf so we capture aircraft within
// range of OKBK plus broader regional traffic for context.
const BBOX = { lamin: 22.0, lomin: 46.0, lamax: 32.0, lomax: 58.0 };

const FR24_TOKEN  = process.env.FR24_TOKEN;
const OPENSKY_USER = process.env.OPENSKY_USER;
const OPENSKY_PASS = process.env.OPENSKY_PASS;

const cosLat = Math.cos(OKBK.lat * Math.PI / 180);
function distNm(lat, lon) {
  const dxKm = (lon - OKBK.lon) * 111.32 * cosLat;
  const dyKm = (lat - OKBK.lat) * 111.32;
  return Math.hypot(dxKm, dyKm) * 1000 / 1852;
}

// ---- shared helpers ----

async function fetchWithRetry(url, options, { retries = 3, timeoutMs = 30000 } = {}) {
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const t = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const r = await fetch(url, { ...options, signal: controller.signal });
      clearTimeout(t);
      return r;
    } catch (err) {
      clearTimeout(t);
      lastErr = err;
      console.warn(`  attempt ${attempt}/${retries} failed: ${err.message}`);
      if (attempt < retries) await new Promise((r) => setTimeout(r, attempt * 3000));
    }
  }
  throw lastErr;
}

async function writeSnapshot(snapshot) {
  const outDir = path.join(ROOT, 'public', 'data');
  await fs.mkdir(outDir, { recursive: true });
  const outPath = path.join(outDir, 'okbk_live.json');
  await fs.writeFile(outPath, JSON.stringify(snapshot, null, 2));
  const near    = snapshot.counts?.near_50nm ?? 0;
  const distant = snapshot.counts?.distant   ?? 0;
  console.log(`✓ ${path.relative(ROOT, outPath)}: ${snapshot.aircraft.length} total · ${near} within 50 nm · ${distant} distant`);
}

// ---- FR24 path ----

async function fetchFR24() {
  // bounds parameter format: north,south,west,east
  const bounds = `${BBOX.lamax},${BBOX.lamin},${BBOX.lomin},${BBOX.lomax}`;
  const url = `https://fr24api.flightradar24.com/api/live/flight-positions/full?bounds=${bounds}`;
  const headers = {
    'Authorization': `Bearer ${FR24_TOKEN}`,
    'Accept-Version': 'v1',
    'Accept': 'application/json',
  };
  console.log(`[fr24] GET ${url}`);

  let res;
  try {
    res = await fetchWithRetry(url, { headers });
  } catch (err) {
    console.warn(`[fr24] unreachable after retries: ${err.message}`);
    return null;
  }
  if (!res.ok) {
    console.warn(`[fr24] ${res.status} ${res.statusText}`);
    console.warn((await res.text()).slice(0, 400));
    return null;
  }
  const json = await res.json();
  const items = json.data || [];
  console.log(`[fr24] received ${items.length} aircraft`);

  const aircraft = items.map(parseFR24Aircraft).filter(Boolean)
    .sort((a, b) => a.dist_nm - b.dist_nm);

  const near    = aircraft.filter((a) => a.dist_nm < 50);
  const distant = aircraft.filter((a) => a.dist_nm >= 50);

  return {
    source: 'fr24',
    time_unix: Math.floor(Date.now() / 1000),
    time_iso:  new Date().toISOString(),
    bbox: BBOX,
    okbk: OKBK,
    counts: { total: aircraft.length, near_50nm: near.length, distant: distant.length },
    aircraft,
  };
}

function parseFR24Aircraft(d) {
  if (d.lat == null || d.lon == null) return null;
  const alt = d.alt || 0;
  const gs  = d.gspeed || 0;
  const vs  = d.vspeed || 0;
  const callsign = (d.callsign || d.flight || d.hex || '').trim();
  return {
    icao24: (d.hex || '').toLowerCase(),
    callsign,
    type: d.type || '',
    state: classifyFR24(d),
    lat: d.lat,
    lon: d.lon,
    alt,
    hdg: Math.round(d.track ?? 0),
    speed_kt: Math.round(gs),
    vrate_fpm: Math.round(vs),
    on_ground: alt < 100 && gs < 50,
    origin: d.orig_iata || d.orig_icao || '',
    destination: d.dest_iata || d.dest_icao || '',
    eta: d.eta || null,
    reg: d.reg || '',
    dist_nm: Math.round(distNm(d.lat, d.lon)),
  };
}

function classifyFR24(d) {
  const alt = d.alt || 0;
  const gs  = d.gspeed || 0;
  const vs  = d.vspeed || 0;
  if (alt < 100) {
    if (gs < 5)  return 'PARKED';
    if (gs > 60) return 'CLEARED';
    return 'TAXI';
  }
  // Airborne: use route info if it matches OKBK
  const isInbound  = (d.dest_iata === 'KWI' || d.dest_icao === 'OKBK');
  const isOutbound = (d.orig_iata === 'KWI' || d.orig_icao === 'OKBK');
  if (isInbound)  return 'AIRBORNE_IN';
  if (isOutbound) return 'AIRBORNE_OUT';
  if (vs < -200) return 'AIRBORNE_IN';
  if (vs >  200) return 'AIRBORNE_OUT';
  return d.lat < OKBK.lat ? 'AIRBORNE_IN' : 'AIRBORNE_OUT';
}

// ---- OpenSky path (existing) ----

async function fetchOpenSky() {
  const url = new URL('https://opensky-network.org/api/states/all');
  for (const [k, v] of Object.entries(BBOX)) url.searchParams.set(k, String(v));

  const headers = {};
  if (OPENSKY_USER && OPENSKY_PASS) {
    headers.Authorization = 'Basic ' + Buffer.from(`${OPENSKY_USER}:${OPENSKY_PASS}`).toString('base64');
  }
  console.log(`[opensky] GET ${url.toString()} (auth=${headers.Authorization ? 'registered' : 'anonymous'})`);

  let res;
  try {
    res = await fetchWithRetry(url.toString(), { headers });
  } catch (err) {
    console.warn(`[opensky] unreachable after retries: ${err.message}`);
    return null;
  }
  if (!res.ok) {
    console.warn(`[opensky] ${res.status} ${res.statusText}`);
    return null;
  }
  const json = await res.json();
  const states = json.states || [];
  const fetchTime = json.time || Math.floor(Date.now() / 1000);
  console.log(`[opensky] received ${states.length} state vectors`);

  const aircraft = states.map(parseOpenSkySV).filter(Boolean)
    .sort((a, b) => a.dist_nm - b.dist_nm);
  const near    = aircraft.filter((a) => a.dist_nm < 50);
  const distant = aircraft.filter((a) => a.dist_nm >= 50);

  return {
    source: 'opensky-live',
    time_unix: fetchTime,
    time_iso:  new Date(fetchTime * 1000).toISOString(),
    bbox: BBOX,
    okbk: OKBK,
    counts: { total: aircraft.length, near_50nm: near.length, distant: distant.length },
    aircraft,
  };
}

function parseOpenSkySV(sv) {
  const [icao24, rawCs, , , , lon, lat, baroAlt, onGround, velocity, track, vertRate] = sv;
  if (lat == null || lon == null) return null;
  const callsign = (rawCs || '').trim() || icao24.toUpperCase();
  const altFt = Math.round((baroAlt ?? 0) * 3.28084);
  return {
    icao24, callsign, type: '',
    state: classifyOpenSky({ onGround, velocity, vertRate, lat, lon }),
    lat, lon,
    alt: altFt,
    hdg: Math.round(track ?? 0),
    speed_kt: Math.round((velocity ?? 0) * 1.94384),
    vrate_fpm: Math.round((vertRate ?? 0) * 196.85),
    on_ground: !!onGround,
    dist_nm: Math.round(distNm(lat, lon)),
  };
}

function classifyOpenSky({ onGround, velocity, vertRate, lat, lon }) {
  if (onGround) {
    if ((velocity ?? 0) < 2) return 'PARKED';
    if ((velocity ?? 0) > 25) return 'CLEARED';
    return 'TAXI';
  }
  if ((vertRate ?? 0) < -2) return 'AIRBORNE_IN';
  if ((vertRate ?? 0) >  2) return 'AIRBORNE_OUT';
  return lat < OKBK.lat ? 'AIRBORNE_IN' : 'AIRBORNE_OUT';
}

// ---- dispatch ----

let snapshot = null;
if (FR24_TOKEN) {
  snapshot = await fetchFR24();
  if (!snapshot) console.warn('[fr24] failed, falling back to OpenSky');
}
if (!snapshot) {
  snapshot = await fetchOpenSky();
}

if (!snapshot) {
  console.warn('All providers failed; keeping previous okbk_live.json unchanged.');
  process.exit(0);
}
await writeSnapshot(snapshot);
