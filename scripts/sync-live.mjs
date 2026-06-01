#!/usr/bin/env node
// Pull the currently-deployed okbk_live.json from GitHub Pages into the local
// public/data/ before a local `npm run deploy`, so we don't overwrite the
// cron's fresh data with stale local test fixtures.

import fs from 'node:fs/promises';
import path from 'node:path';

const URL = 'https://mohammadroid.github.io/Fahad_ATC/data/okbk_live.json';
const OUT = path.resolve('public/data/okbk_live.json');

try {
  const res = await fetch(URL, { cache: 'no-store' });
  if (!res.ok) {
    console.log(`[sync-live] no live file on Pages (HTTP ${res.status}); leaving local as-is`);
    process.exit(0);
  }
  const json = await res.json();
  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.writeFile(OUT, JSON.stringify(json, null, 2));
  const n = json.counts?.total ?? json.aircraft?.length ?? 0;
  console.log(`[sync-live] synced okbk_live.json — ${n} aircraft @ ${json.time_iso || '?'}`);
} catch (err) {
  console.log(`[sync-live] skipped: ${err.message}`);
  process.exit(0);
}
