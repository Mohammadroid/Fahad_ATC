# Extending the system

The codebase is built around a few clean seams. Most additions touch exactly one new file
plus one registration line.

## Add / swap a live data feed

The render layer only knows the **aircraft snapshot schema** (see
[DATA_FORMATS.md](DATA_FORMATS.md)). To use a different provider (AeroDataBox, FlightAware,
ICAO, a real ADS-B/radar feed), you only change the fetch script:

1. Edit `scripts/fetch-live.mjs` (or add `scripts/fetch-<provider>.mjs`). Map the provider's
   response into the snapshot schema (`callsign, type, state, lat, lon, alt, hdg, speed_kt,
   on_ground, origin, destination, squawk, …`) and write `public/data/okbk_live.json`.
2. Implement the `state` classifier (`AIRBORNE_IN/OUT`, `TAXI`, `CLEARED`, `PARKED`, …).
3. Add the provider's API key as a GitHub Actions **secret** and reference it in
   `.github/workflows/refresh-data.yml` `env:`.
4. Nothing in `src/` changes — `SnapshotPlayer` already polls `okbk_live.json` every 30 s.

To change cadence, edit the `cron:` in the workflow (currently `*/5 * * * *`).

## Add an Advanced ATC feature

1. Create `src/features/<id>.js` exporting a factory with the uniform interface:

   ```js
   export function createX({ scene, tabletop, traffic, SpatialPanel, interaction }) {
     let enabled = false;
     // build meshes/panels once…
     function update(dt) { if (!enabled) return; /* per-frame */ }
     function setEnabled(on) { enabled = on; /* show/hide */ }
     function dispose() { /* remove from scene */ }
     return { setEnabled, isEnabled: () => enabled, update, dispose /*, panel */ };
   }
   ```

2. Register it in `src/features/index.js` `FEATURE_DEFS` (`id, label, default, desc`).
3. Instantiate it in `main.js` `features = { …, x: createX({…}) }`.
4. (If it owns a panel) add it to the dock with `dock.add({ key, panel, title, accent, side, isActive })`.

It now appears as a toggle on the **Advanced** settings tab, persists in `localStorage`, and
its `update` no-ops when disabled. Removal = delete the file + those 2–3 lines.

## Add a dock panel

Panels are `SpatialPanel` instances (canvas-textured planes). Either create one directly or
have a feature own it, then:

```js
dock.add({
  key: 'myPanel', panel: mySpatialPanel, title: 'MY PANEL',
  accent: '#4499ff', side: 'left' | 'right' | 'main',
  isActive: () => featureEnabled('myPanel'),   // omit for always-on
});
```

The dock gives it a Home/Collapse header, an edge tab, drag-to-float, and includes it in the
uniform-height row + MOVE ALL transform. Keep `height` equal to the other panels (0.50) so
the row stays aligned.

## Add / change the airport

The whole map is georeferenced to one origin + scale:

- `OKBK_LAT/LON` and `SCALE` in `src/airport.js`.
- Geometry comes from `public/data/okbk_osm.json` (Overpass query in DATA_FORMATS.md).
- To model a **different airport**: change the origin, re-fetch OSM for the new bbox,
  re-fetch the satellite (`scripts/fetch-satellite.mjs` — update the centre), and update the
  runway thresholds in `src/flightpath.js` (`RUNWAYS`) and `src/feeds/demo_script.js`.

## Add an aircraft type or livery

In `src/aircraft.js`:
- **Dimensions:** add to `TYPE_DIMS` (length × wingspan × height in metres).
- **Model:** map the ICAO type to a `.glb` in `TYPE_TO_MODEL` (or it falls back to a generic).
  New models go in `public/models/`; run `node scripts/analyze-models.mjs` to compute the
  correct nose-orientation entry for `MODEL_ORIENT`.
- **Livery:** add a callsign prefix → `{ body, accent, name }` to `LIVERIES`.
- **Type name** (cards): add to `TYPE_NAMES`.

## Conventions

- Plain ES modules, no framework, no TypeScript.
- Keep features **encapsulated** — one module, uniform interface, toggleable, removable.
- Don't route scripted/animated motion through `compressedTabletopPos` (it's for live
  snapshots only). Author motion in tabletop world units.
- Heading → mesh yaw comes from the **motion vector** (`atan2(vx, vz)`), never `-hdg`.
- WebXR requires HTTPS — dev uses `vite-plugin-mkcert`.
