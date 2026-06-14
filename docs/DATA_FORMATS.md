# Data formats & flow

All runtime data is **static JSON/assets under `public/data/`** that the site fetches at
runtime. Live data is produced server-side by a scheduled GitHub Action (browsers can't call
FR24/OpenSky directly due to CORS) and committed/deployed as `okbk_live.json`.

## Files

| File | Produced by | Consumed by | Purpose |
|---|---|---|---|
| `okbk_live.json` | `scripts/fetch-live.mjs` (cron) | `feeds/snapshot.js` | Real-time traffic (default) |
| `okbk_demo.json` | hand-authored trigger | `feeds/snapshot.js` → `demo_script.js` | Signals scripted demo mode |
| `okbk_today.json` | hand-authored | `feeds/snapshot.js` | Curated 14:00 LT scenario |
| `example.json` | hand-authored | `feeds/snapshot.js` | Curated 31 Dec 2025 scenario |
| `okbk_osm.json` | Overpass API (manual) | `airport.js`, `notams.js` | Runway/taxiway/building geometry |
| `okbk_satellite.jpg` + `.json` | `scripts/fetch-satellite.mjs` | `airport.js` | Esri satellite ground + its bbox |
| `okbk_notams.json` | hand-authored (Phase A) | `features/notams.js` | Active NOTAMs |
| `public/models/*.glb` | downloaded (CC-BY) | `aircraft.js` | Airliner models |

## Aircraft snapshot schema

Used by `okbk_live.json`, `okbk_today.json`, `example.json`. `feeds/snapshot.js` reads it.

```jsonc
{
  "source": "fr24",                 // or "opensky-live", "curated"
  "time_iso": "2026-06-01T21:26:37Z",
  "okbk": { "lat": 29.2266, "lon": 47.9689 },
  "counts": { "total": 20, "near_50nm": 0, "distant": 20 },
  "aircraft": [
    {
      "icao24": "896180",           // hex transponder id
      "callsign": "KAC101",
      "type": "B772",               // ICAO type code → model + dimensions
      "state": "AIRBORNE_IN",       // see states below
      "lat": 29.107, "lon": 48.039,
      "alt": 8000,                  // feet
      "hdg": 333,                   // degrees true
      "speed_kt": 240,
      "vrate_fpm": -1200,           // optional, fpm
      "on_ground": false,
      "origin": "LHR", "destination": "OKBK",
      "squawk": "7700",             // optional; drives the Emergency feature
      "dist_nm": 8                  // optional; else computed
    }
  ]
}
```

**States** (`aircraft.js` `STATES`, colors in parentheses):
`PARKED` (grey) · `TAXI` (yellow) · `QUEUED` (orange) · `CLEARED` (green, on runway) ·
`AIRBORNE_OUT` (orange) · `AIRBORNE_IN` (blue) · `OVERFLIGHT` (purple, transit).

Aircraft within **`NEAR_RADIUS_KM` (500 km)** render as full models (log-compressed
position); beyond that → edge chevron; beyond `FAR_RADIUS_KM` (1500 km) → dropped.

## Scripted demo schema (`demo_script.js`)

The demo does **not** use lat/lon — it authors waypoints directly in **tabletop world
coordinates** so motion stays linear. Each aircraft:

```js
{
  callsign, type, origin, destination,
  squawk,                         // optional (KNE671 = '7700' in the demo)
  birth, death,                   // demo-seconds the aircraft is visible
  script: [ { t, p:[x,z], y, state, alt, speed_kt }, … ]  // linearly interpolated
}
```

`buildDemoAircraft()` builds these from high-level `arrival()/departure()/overflight()`
helpers using real OKBK runway thresholds (`RWY_33L/33R`) and gate positions. Runway use is
staggered to be conflict-free. Cycle length: `DEMO_CYCLE_SECONDS` (300).

## NOTAM schema (`okbk_notams.json`)

```jsonc
{
  "source": "curated",
  "notams": [
    {
      "id": "A0419/26",
      "qcode": "QMRLC",            // ICAO Q-code: Q + subject(2) + condition(2)
      "subject": "RWY",
      "severity": "critical",      // critical | caution | info
      "target": { "type": "runway", "ref": "16/34" },   // runway | taxiway | point | none
      "from": "2026-06-07T00:00:00Z",
      "to":   "2026-07-31T23:59:00Z",
      "text": "RWY 16/34 CLSD DUE TO MIL OPS."          // raw E) field, shown verbatim
    }
  ]
}
```

`features/notams.js` decodes the Q-code (`QMRLC`→Runway/Closed, `QMXLC`→Taxiway/Closed,
`QICAS`→ILS/Unserviceable, `QOBCE`→Obstacle/Erected, …) into severity + a map action.
`target.type` drives the overlay: `runway`/`taxiway` match an OSM `ref`; `point` places an
obstacle cone at lat/lon; `none` is list-only.

## Live data pipeline

```
GitHub Actions cron (every 5 min, .github/workflows/refresh-data.yml)
  └─ node scripts/fetch-live.mjs
        ├─ FR24_TOKEN set?  → FlightRadar24 /api/live/flight-positions/full (bbox around OKBK)
        └─ else             → OpenSky /states/all (anonymous or OPENSKY_USER/PASS)
        → normalise to the aircraft snapshot schema → public/data/okbk_live.json
  └─ npm run build → peaceiris/actions-gh-pages publishes dist/
        ↓
Browser loads okbk_live.json and re-polls it every 30 s (SnapshotPlayer.refresh()).
```

`fetch-live.mjs` retries with timeout and **soft-fails** (exit 0, keep previous file) on
transient upstream errors so the cron doesn't email failures.

### Secrets (GitHub repo → Settings → Secrets → Actions)

| Secret | Used by | Notes |
|---|---|---|
| `FR24_TOKEN` | FR24 fetch | Production token. **Sandbox tokens return canned global data and ignore the bbox.** |
| `OPENSKY_USER` / `OPENSKY_PASS` | OpenSky fallback | Optional; raises rate limit + ~30-day history |

## Refreshing static geometry

```bash
# OSM geometry (runways/taxiways/buildings)
curl -X POST 'https://overpass-api.de/api/interpreter' \
  --data-urlencode 'data=[out:json][timeout:90];(way["aeroway"](around:6000,29.2266,47.9689);relation["aeroway"](around:6000,29.2266,47.9689););out geom;' \
  -o public/data/okbk_osm.json

# Satellite ground (Esri World Imagery)
node scripts/fetch-satellite.mjs
```
