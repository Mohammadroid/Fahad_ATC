# Fahad_ATC — Quest 3 WebXR ATC Visualization (OKBK / Kuwait Intl)

A mixed-reality **air-traffic situational-awareness aid** for the Quest 3, built as a
WebXR web app. It renders a holographic **tabletop of Kuwait International Airport
(OKBK)** with live or scripted traffic, flight-strip cards, flight paths, and a row
of controller panels (clock, inbound/outbound, weather, flight strips, NOTAMs), plus
ATC safety overlays (separation conflicts, emergency squawk).

> ⚠️ **Positioning.** This is a **supplemental** situational-awareness aid and concept
> prototype — **not** a certified primary control tool. No civil aviation authority will
> certify a consumer HMD as a primary control surface. See [docs/PRODUCTION.md](docs/PRODUCTION.md).

**Live:** https://mohammadroid.github.io/Fahad_ATC/
**Repo:** https://github.com/Mohammadroid/Fahad_ATC

---

## Quick start

```bash
npm install
npm run dev          # HTTPS dev server (mkcert) on https://<lan-ip>:5173 — required for WebXR
```

Open the printed HTTPS URL in the **Meta Quest 3 browser**, tap **START AR**, point at
your table, and **pinch** to place the airport. On desktop it falls back to a drag-orbit
preview (no headset needed).

### Build & deploy

```bash
npm run build        # → dist/
npm run deploy       # sync-live.mjs → vite build → gh-pages (publishes dist/ to gh-pages branch)
```

`deploy` needs git identity env vars (the repo has no committed git config):

```bash
GIT_AUTHOR_NAME="Mohammadroid" GIT_AUTHOR_EMAIL="Mohammadroid@users.noreply.github.com" \
GIT_COMMITTER_NAME="Mohammadroid" GIT_COMMITTER_EMAIL="Mohammadroid@users.noreply.github.com" \
npm run deploy
```

`scripts/sync-live.mjs` first pulls the currently-deployed `okbk_live.json` so a local
deploy never clobbers the cron-managed live data.

---

## URL parameters

| Param | Values | Effect |
|---|---|---|
| `?snapshot=` | `okbk_live.json` (default), `okbk_demo.json`, `okbk_today.json`, `example.json` | Traffic data source |
| `?mode=sim` | — | Old animated mock simulator instead of a snapshot |
| `?airport=` | `osm` (default), `cyber`, `tiles` | Map renderer |
| `?gkey=` | Google Maps API key | Required for `airport=tiles`; persisted to `localStorage` |

Examples:
- Real-time FR24: `https://mohammadroid.github.io/Fahad_ATC/`
- Scripted 5-min demo: `…/?snapshot=okbk_demo.json`
- Cyberpunk wireframe + demo: `…/?airport=cyber&snapshot=okbk_demo.json`
- Photoreal Google tiles: `…/?airport=tiles&gkey=YOUR_KEY`

Most of these are also switchable in-headset from the **Settings gear** (General tab).

---

## What it does

- **Tabletop OKBK** from real OpenStreetMap geometry + Esri satellite imagery, with three
  alternative map renderers (satellite, cyberpunk wireframe, Google Photorealistic 3D Tiles).
- **Aircraft** as glTF airliner models scaled to real ICAO-type dimensions, tinted to
  airline liveries, with state-colored rings.
- **Distance compression** so far traffic (out to 500 km) is visible on the small table.
- **Pinch an aircraft** → live flight-strip card (callsign, airline, type, telemetry,
  route, ETA, INBOUND/OUTBOUND/OVERFLIGHT badge) + curved past trail and projected approach
  onto the real runway centerline.
- **Panel dock** — a uniform-height row of panels (NOTAMs · main clock+inbound/outbound ·
  weather · flight strips) with per-panel Home/Collapse and a **MOVE ALL** handle to
  translate/spin the whole row.
- **Advanced ATC features** (toggleable): separation conflict alerts (STCA), emergency
  squawk highlight (7500/7600/7700), weather panel, flight strips, NOTAMs.
- **Data**: real-time FlightRadar24 (primary) or OpenSky (fallback), refreshed by a GitHub
  Actions cron; plus a fully scripted 5-minute demo and curated scenarios.

---

## Documentation

| Doc | Contents |
|---|---|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Module map, render loop, coordinate systems, panel/dock & feature frameworks |
| [docs/DATA_FORMATS.md](docs/DATA_FORMATS.md) | Every JSON schema (aircraft snapshot, NOTAM, OSM, satellite), data flow, secrets |
| [docs/EXTENDING.md](docs/EXTENDING.md) | How to add a data feed, a feature, a panel, an airport |
| [docs/PRODUCTION.md](docs/PRODUCTION.md) | Path from prototype to a real-time operational aid: data, latency, redundancy, certification |
| [CREDITS.md](CREDITS.md) | Model / imagery / data attributions and licenses |

---

## Tech stack

Three.js · WebXR (`immersive-ar`, hand-tracking, hit-test) · Vite · plain ES modules (no
framework). 3D tiles via `3d-tiles-renderer`. Deployed as a static site on GitHub Pages.
