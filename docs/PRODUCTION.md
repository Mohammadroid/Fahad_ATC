# From prototype to a real-time operational aid

This prototype proves the **visualization and interaction** concept. Turning it into
something usable next to a live ATC position is mostly about **data, latency, reliability,
and regulatory framing** — the rendering/UX seams are already in place.

> **Framing for stakeholders:** position this as a **decision-support / situational-awareness
> aid that augments certified systems**, never replaces them. No civil aviation authority
> (DGCA Kuwait, ICAO) will certify a consumer HMD as a primary control surface. That framing
> is the only realistic regulatory path and should be stated up front.

## 1. Data: from aggregated to authoritative

| Today (prototype) | Real-time target |
|---|---|
| FlightRadar24 aggregated ADS-B/MLAT (5–30 s lag) via a 5-min cron → static JSON | Direct **ADS-B (1090ES) receiver** at/near the field, **A-SMGCS/MLAT** for surface, **ASTERIX Cat 21/48/62** radar fusion |
| Browser polls `okbk_live.json` every 30 s | Sub-second streaming (WebSocket/WebTransport) |
| Curated NOTAMs (Phase A) | Authoritative NOTAM feed (Kuwait AIS / ICAO API), parsed by Q-code |
| No weather feed | Live METAR/ATIS/wind/RVR; runway-in-use logic from real wind |
| No flight plans / clearances | AFTN/FPL + Electronic Flight Strip (EFS) integration |

**Seam that makes this easy:** the entire app consumes one **aircraft snapshot schema**
(see DATA_FORMATS.md). Swapping providers is a fetch-script change, not an app change. For
true real-time, replace the cron+poll with a streaming client that updates the same in-memory
list and interpolates between updates (the demo interpolation in `feeds/snapshot.js` is the
pattern).

## 2. Latency & freshness

Controllers must know **how old** each track is. Build in:
- **Per-track staleness** — fade/enlarge an uncertainty marker as a fix ages (the data already
  carries timestamps; the UI shows a single overall age badge today — extend to per-track).
- **Extrapolation** between updates (Kalman/dead-reckoning) so motion is smooth at render rate
  while honestly showing uncertainty.
- **Bounded, known latency** end-to-end; alarm if the feed stalls.

## 3. Reliability & redundancy

- **Failover** when WiFi drops, battery dies, or passthrough glitches — the certified
  radar/strips remain the source of truth; the HMD must degrade gracefully and never be a
  single point of failure.
- **Write-once audit log** of every controller-visible action and alert.
- **Headset hygiene / shift handover** for 24/7 rotation (per-user face pad, UV cleaning).
- **Glare/sunlight legibility** in a glass tower; colorblind-safe palette; audio alerts
  (controllers can't watch one spot).

## 4. Pose & georeferencing inside a tower

- **GPS does not work** reliably inside a glass tower (multipath). Use the Quest's SLAM +
  **surveyed spatial anchors**: 3–5 known tower-window calibration points (WGS84 → tower-local
  ENU) so the through-the-window AR overlay aligns with real aircraft. (The tabletop mode
  needs none of this; the overlay mode does.)

## 5. Safety functions to harden (already prototyped)

The Advanced features are demonstrations; for operational use each needs real tuning + a real
feed: **STCA** (separation), **runway incursion / RIMCAS**, **MSAW**, **emergency squawk**,
conflict-free clearance validation. Keep them **display-only** — the system advises, the
controller decides and cross-checks the certified source.

## 6. Suggested phased roadmap

1. **Phase 1 — Tabletop SA (done).** WebXR tabletop, real geometry, glTF traffic, panels,
   demo, advanced-feature demos. Validate ergonomics over a full shift, off-position.
2. **Phase 2 — Live observation.** Local ADS-B receiver → streaming feed → same schema.
   Per-track staleness + extrapolation. Still observation-only.
3. **Phase 3 — Through-window overlay.** Surveyed anchors, label real aircraft through the
   glass. Side-by-side trials with off-duty supervisors.
4. **Phase 4 — Multi-controller + read-only EFS.** Shared spatial anchors so Ground/Tower/
   Approach see one table; read-only flight strips.
5. **Phase 5 — Operational trial + DGCA engagement.** Incident logging, fallback procedures,
   formal evaluation. **Engage the regulator early (Phase 1), not late.**

## 7. Native vs WebXR

WebXR was chosen for zero-install iteration. Revisit a native (Unity/Meta XR) build only if a
hard requirement demands it — persistent cross-session spatial anchors, camera-frame access
for CV, or hand-mesh fidelity beyond WebXR. The data/feature architecture would port directly.

## 8. Cost & licensing notes

- **FR24** is paid and its ToS forbids "operational" use — fine for a demo, not for control.
  Production needs a direct receiver or an authoritative feed.
- **Esri World Imagery / Google 3D Tiles** are licensed for non-commercial/attributed use;
  a commercial deployment needs the appropriate paid tier.
- Bundled glTF models are **CC-BY 3.0** (see CREDITS.md) — keep attribution.
