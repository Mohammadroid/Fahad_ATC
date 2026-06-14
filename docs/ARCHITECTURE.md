# Architecture

Plain ES modules, no framework. Everything is driven from `src/main.js`, which builds the
scene, picks a traffic source and map renderer, wires interaction + panels + features, and
runs a single `requestAnimationFrame`/`setAnimationLoop` render loop.

## Module map

```
index.html ──► src/main.js  (orchestrator)
│
├─ Airport (map renderers — pick one via ?airport=)
│   ├─ airport.js            OSM geometry + Esri satellite ground (default)
│   │                         exports SCALE, OKBK_LAT/LON, latLonToTab(), setOSMOverlaysVisible()
│   ├─ airport_cyberpunk.js  additive cyan wireframe + range rings + radar ping
│   └─ airport_tiles.js      Google Photorealistic 3D Tiles (needs API key)
│
├─ Aircraft
│   ├─ aircraft.js           buildAircraftGroup(): glTF model (public/models) scaled to
│   │                         ICAO dims + airline livery + state ring + callsign card.
│   │                         STATES, getAirlineAccent/Name, getTypeName.
│   └─ flightpath.js         buildFlightPath(): curved past trail + projected approach,
│                             anchored on real runway thresholds (RUNWAYS table).
│
├─ Traffic sources (one is chosen in main.js)
│   ├─ feeds/snapshot.js     SnapshotPlayer — loads a JSON snapshot, places aircraft, and
│   │                         (demo mode) interpolates scripted waypoints each frame.
│   ├─ feeds/demo_script.js  buildDemoAircraft() — the scripted 5-min demo in TABLETOP coords.
│   └─ traffic.js            TrafficSimulator — legacy animated mock (?mode=sim).
│
├─ Interaction
│   └─ interaction.js        setupInteraction(): laser pointers, pinch select, grab system
│                             (registerGrabbable), hit-test placement, flight-strip card.
│
├─ Panels / UI
│   ├─ panels.js             SpatialPanel (canvas-textured plane) + draw fns
│   │                         (drawCombinedPanel, drawSettingsMenu, …)
│   └─ dock.js               PanelDock — uniform-height row layout, per-panel Home/Collapse
│                             headers, edge tabs, MOVE ALL handle (drag + two-hand spin).
│
└─ Advanced features (src/features/*, each {setEnabled,update,dispose})
    ├─ index.js              FEATURE_DEFS registry + localStorage flags
    ├─ conflicts.js          STCA separation alerts (red/amber links)
    ├─ emergency.js          7500/7600/7700 squawk halo + label
    ├─ notams.js             Q-code decode → panel + map overlays
    ├─ weather.js            METAR / wind-rose / active-runway panel
    └─ strips.js             electronic flight-strip board panel
```

## Render loop (`src/main.js`)

```
setAnimationLoop((time, frame) => {
  dt = clamped delta
  orbit.update()               // desktop preview only
  interaction.update(frame)    // laser raycasts, hit-test reticle, grabs, card refresh
  traffic.update(dt)           // demo interpolation / sim motion (no-op for static snapshots)
  tilesAirport?.update()       // 3D-tiles LOD (if photoreal mode)
  cyberpunkAirport?.update(dt) // radar-ping animation (if cyber mode)
  for (id in features) features[id].update(dt)   // no-op when a feature is disabled
  dock.update()                // lay out the panel row, follow tabletop, MOVE ALL handle
  // settings menu floats above main panel when open
  refreshPanels()              // redraw combined panel (clock/lists) on a throttle
  renderer.render(scene, camera)
})
```

## Coordinate systems

Everything on the table lives in the **tabletop group** (`tabletop`), which is what the
user places/scales/moves in AR. Inside it:

- **World scale:** `SCALE = 1/5000` (1 world unit = 5 km). Exported from `airport.js`.
- **Origin:** OKBK aerodrome reference point `29.2266° N, 47.9689° E`.
- **`latLonToTab(lat, lon)` → `[x, z]`** — linear projection: `x = ΔlonE·metres·SCALE`,
  `z = −ΔlatN·metres·SCALE`. **+X = east, −Z = north.** Used for airport geometry and the
  scripted demo's runway/gate coordinates.
- **`compressedTabletopPos(lat, lon)`** (in `feeds/snapshot.js`) — a **piecewise log
  compression** used only for *live snapshot* aircraft so distant traffic still fits on the
  table: linear `1/5000` inside `PIVOT_KM` (1.75 km), then logarithmic out to `MAX_DISPLAY_W`
  at `NEAR_RADIUS_KM` (500 km). Beyond that → edge chevron. **Do not** route the scripted
  demo through this — it warps straight lines and speeds (the demo authors waypoints directly
  in tabletop world units).
- **Aircraft heading → mesh yaw:** the demo/snapshot sets `rotation.y` from the **motion
  vector** (`atan2(vx, vz)`), not from compass heading, so the nose always follows travel.
  glTF models are authored nose-+Z.

## Panel + dock system

- **`SpatialPanel`** (`panels.js`) = a `THREE.Group` holding a canvas-textured `PlaneGeometry`.
  `redraw(fn)` paints the 2D canvas and flags the texture. Panels are grabbable/scalable.
- **`PanelDock`** (`dock.js`) lays out registered panels as **one uniform-height row** that
  follows the tabletop. Each panel gets a header bar (Home = re-dock+reset, Collapse =
  minimise to an edge tab) and an edge tab. A **MOVE ALL** handle below the main panel drags
  (one hand) and spins (two-hand twist) the whole row. Dragging a panel body "floats" it out
  of the row until Home.

## Interaction model (`interaction.js`)

- **Laser pointers** from each hand's target-ray; per-frame raycast against aircraft
  (perpendicular-distance test) and all registered grabbable surfaces.
- **`registerGrabbable(group, {surfaces, onGrabStart, onGrabEnd, minScale, maxScale})`** — the
  single entry point for anything draggable/scalable. One hand = translate, two hands =
  scale + yaw + translate. A group may also set `userData.onPinchClick(uv, point)` to consume
  a pinch as a button press (returns `true` to consume).
- **Hit-test placement** — on AR session start the tabletop hides until the user pinches a
  detected surface to drop it (WebXR `hit-test`).
- **Flight-strip card** — pinch an aircraft to toggle the floating card; it live-refreshes
  while selected and shows the curved flight path.

## Feature framework (`src/features/`)

Each advanced feature is a self-contained module exporting a `create…({deps})` factory that
returns a uniform interface:

```js
{ setEnabled(bool), update(dt), dispose(), /* panel features also: */ panel, group, isEnabled() }
```

`features/index.js` holds `FEATURE_DEFS` (id, label, default, desc) and `isEnabled/setEnabled`
backed by `localStorage` (`fahad_atc_feat_<id>`). `main.js` instantiates them, applies the
persisted flags, calls `update(dt)` every frame (a disabled feature's `update` no-ops), and
renders Advanced-tab toggles. **To remove a feature:** delete its module + its line in the
`features` object + its `FEATURE_DEFS` entry. Nothing else depends on it.

## Map renderers

`?airport=` selects one. All three georeference to the same OKBK origin + `SCALE`, so
aircraft/paths/overlays line up regardless of renderer:
- **osm** — `buildAirport()`: Esri satellite ground plane + OSM runways/taxiways/aprons +
  extruded terminals/hangars. `setOSMOverlaysVisible()` hides the satellite + buildings when
  another renderer is active.
- **cyber** — additive cyan wireframe of the same OSM geometry + range rings + animated ping.
- **tiles** — Google Photorealistic 3D Tiles via `3d-tiles-renderer`, anchored at OKBK.
