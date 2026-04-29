#!/usr/bin/env node
// Fetch a satellite image of OKBK from Esri World Imagery and cache it locally.
//
// Usage:  node scripts/fetch-satellite.mjs
// Output: public/data/okbk_satellite.jpg + okbk_satellite.json (metadata)
//
// Esri World Imagery is free for non-commercial use with attribution. For
// production / commercial use you'd need an ArcGIS account.
// Attribution: "Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community".

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const OKBK_LAT = 29.2266;
const OKBK_LON = 47.9689;
const RADIUS_KM = 3.5; // ~7 km × 7 km coverage centred on OKBK
const SIZE_PX = 2048;  // resolution → ~3.4 m/px at this radius

const dLat = RADIUS_KM / 111.32;
const dLon = RADIUS_KM / (111.32 * Math.cos(OKBK_LAT * Math.PI / 180));

const bbox = {
  lon_min: +(OKBK_LON - dLon).toFixed(5),
  lat_min: +(OKBK_LAT - dLat).toFixed(5),
  lon_max: +(OKBK_LON + dLon).toFixed(5),
  lat_max: +(OKBK_LAT + dLat).toFixed(5),
};

const url = new URL('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export');
url.searchParams.set('bbox', `${bbox.lon_min},${bbox.lat_min},${bbox.lon_max},${bbox.lat_max}`);
url.searchParams.set('bboxSR', '4326');
url.searchParams.set('imageSR', '4326');
url.searchParams.set('size', `${SIZE_PX},${SIZE_PX}`);
url.searchParams.set('format', 'jpg');
url.searchParams.set('f', 'image');

console.log(`Fetching ${url.toString()}`);

const res = await fetch(url);
if (!res.ok) {
  console.error(`Esri returned ${res.status} ${res.statusText}`);
  process.exit(1);
}
const ct = res.headers.get('content-type') || '';
if (!ct.startsWith('image/')) {
  console.error(`Unexpected content-type: ${ct}`);
  console.error((await res.text()).slice(0, 400));
  process.exit(1);
}
const buf = Buffer.from(await res.arrayBuffer());

const outDir = path.join(ROOT, 'public', 'data');
await fs.mkdir(outDir, { recursive: true });
const imgPath = path.join(outDir, 'okbk_satellite.jpg');
await fs.writeFile(imgPath, buf);
const metaPath = path.join(outDir, 'okbk_satellite.json');
await fs.writeFile(metaPath, JSON.stringify({
  source: 'Esri World Imagery via ArcGIS Online (https://www.arcgis.com/)',
  attribution: 'Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community',
  image: 'okbk_satellite.jpg',
  bbox,
  size_px: [SIZE_PX, SIZE_PX],
  fetched_via: 'scripts/fetch-satellite.mjs',
}, null, 2));

console.log(`✓ Wrote ${path.relative(ROOT, imgPath)} (${(buf.length / 1024 / 1024).toFixed(2)} MB)`);
console.log(`✓ Wrote ${path.relative(ROOT, metaPath)}`);
