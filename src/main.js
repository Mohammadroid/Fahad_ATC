import * as THREE from 'three';
import { ARButton } from 'three/addons/webxr/ARButton.js';
import { XRHandModelFactory } from 'three/addons/webxr/XRHandModelFactory.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildAirport, setOSMOverlaysVisible } from './airport.js';
import { buildAirportTiles } from './airport_tiles.js';
import { buildAirportCyberpunk } from './airport_cyberpunk.js';
import { TrafficSimulator } from './traffic.js';
import { SnapshotPlayer } from './feeds/snapshot.js';
import { setupInteraction } from './interaction.js';
import { SpatialPanel, drawFlightList, drawClock } from './panels.js';
import { getAirlineAccent } from './aircraft.js';

// URL params drive feed and airport-renderer selection.
// Default = okbk_live.json (real FR24 data). Pass ?snapshot=<other.json> to
// override (e.g. example.json or okbk_today.json for curated scenarios), or
// ?mode=sim to load the animated mock-traffic sandbox.
const params = new URLSearchParams(location.search);
const useSimulator = params.get('mode') === 'sim';
const snapshotName = params.get('snapshot') || (useSimulator ? null : 'okbk_live.json');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 100);
camera.position.set(0, 1.5, 0.4);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xffffff, 0x1a2030, 1.0));
const sun = new THREE.DirectionalLight(0xffffff, 1.4);
sun.position.set(5, 10, 5);
scene.add(sun);

// Tabletop root — low coffee-table height, 0.7 m forward. User can pinch
// + drag to reposition, or two-handed pinch to scale + rotate (see interaction.js).
const tabletop = new THREE.Group();
tabletop.position.set(0, 0.55, -0.7);
scene.add(tabletop);

// Visible base — sized to fit OKBK including the southern military runway
const base = new THREE.Mesh(
  new THREE.BoxGeometry(1.6, 0.02, 1.6),
  new THREE.MeshStandardMaterial({ color: 0x2a2820, roughness: 0.92, metalness: 0.0 })
);
base.name = 'tabletop-base';
base.position.y = -0.012;
tabletop.add(base);

// Airport renderer selection.
// Default = OSM + satellite (the current "real" map). Opt into others via:
//   ?airport=cyber  → cyberpunk wireframe (this file)
//   ?airport=tiles  → Google Photorealistic 3D Tiles (needs ?gkey=...)
const airportMode = params.get('airport') || 'osm';

const airport = await buildAirport();
tabletop.add(airport);

let cyberpunkAirport = null;
if (airportMode === 'cyber') {
  cyberpunkAirport = await buildAirportCyberpunk();
  tabletop.add(cyberpunkAirport);
  // Hide the satellite + OSM buildings so the wireframe stands out.
  setOSMOverlaysVisible(airport, false);
  airport.traverse((o) => {
    if (o.userData?.runway || o.userData?.terminal) o.visible = false;
  });
}

// Photoreal Google 3D Tiles mode: `?airport=tiles` + a Google Maps API key
// with the "Map Tiles API" enabled. Key persists to localStorage after first
// visit via `?gkey=KEY`.
const wantTiles = airportMode === 'tiles' || params.has('gkey');
const urlKey = params.get('gkey');
if (urlKey) localStorage.setItem('fahad_atc_gkey', urlKey);
const apiKey = urlKey || localStorage.getItem('fahad_atc_gkey');

let tilesAirport = null;
if (wantTiles && apiKey) {
  try {
    tilesAirport = buildAirportTiles({ parent: tabletop, apiKey, camera, renderer });
    setOSMOverlaysVisible(airport, false);
    document.getElementById('google-credit')?.style.setProperty('display', 'block');
  } catch (err) {
    console.error('[tiles] init failed, falling back to OSM:', err);
    tilesAirport = null;
  }
}

// Traffic source
let traffic;
if (snapshotName) {
  try {
    traffic = await SnapshotPlayer.load(`${import.meta.env.BASE_URL}data/${snapshotName}`, tabletop);
  } catch (err) {
    console.error('[snapshot] load failed:', err);
    traffic = new TrafficSimulator(tabletop);
  }
} else {
  traffic = new TrafficSimulator(tabletop);
}

const statusEl = document.getElementById('status-badge');
function updateStatusBadge() {
  if (!statusEl) return;
  const snap = traffic.snapshot;
  if (!snap) {
    statusEl.textContent = 'Source: animated simulator (mock data). Drop ?mode=sim for live FR24 data.';
    return;
  }
  const ts = snap.time_iso ? new Date(snap.time_iso) : null;
  const ageSec = ts ? Math.round((Date.now() - ts.getTime()) / 1000) : null;
  const ageStr = ageSec == null ? '?' : ageSec < 60 ? `${ageSec}s ago`
                              : ageSec < 3600 ? `${Math.round(ageSec / 60)}m ago`
                              : `${Math.round(ageSec / 3600)}h ago`;
  const total = snap.counts?.total ?? snap.aircraft?.length ?? 0;
  const near = snap.counts?.near_50nm ?? '-';
  const distant = snap.counts?.distant ?? '-';
  statusEl.textContent = `${snap.source || 'snapshot'} · ${ageStr} · ${total} aircraft (near ${near} / distant ${distant})`;
}
updateStatusBadge();
// Refresh the age string every 5 s even between refetches
setInterval(updateStatusBadge, 5000);

// Browser-side polling: every 30 s ask the static JSON if it's been updated
// by the cron. Replaces aircraft in place if the timestamp moved.
if (traffic?.refresh) {
  setInterval(async () => {
    const changed = await traffic.refresh();
    if (changed) {
      console.log('[snapshot] refreshed with newer data');
      updateStatusBadge();
    }
  }, 30000);
}

// Hand tracking + targetRay-space controllers (used for laser pointers)
const handFactory = new XRHandModelFactory();
const hand0 = renderer.xr.getHand(0);
const hand1 = renderer.xr.getHand(1);
hand0.add(handFactory.createHandModel(hand0, 'boxes'));
hand1.add(handFactory.createHandModel(hand1, 'boxes'));
scene.add(hand0);
scene.add(hand1);

const ctrl0 = renderer.xr.getController(0);
const ctrl1 = renderer.xr.getController(1);
ctrl0.add(makeLaserBeam());
ctrl1.add(makeLaserBeam());
scene.add(ctrl0);
scene.add(ctrl1);

function makeLaserBeam() {
  const geo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, -3),
  ]);
  const mat = new THREE.LineBasicMaterial({
    color: 0x4a9eff, transparent: true, opacity: 0.45, depthTest: false,
  });
  const line = new THREE.Line(geo, mat);
  line.renderOrder = 30;
  return line;
}

const interaction = setupInteraction({
  scene, tabletop, renderer,
  hands: [hand0, hand1],
  controllers: [ctrl0, ctrl1],
  traffic,
});

// -----------------------------------------------------------------------
// Floating panels (inbound list, outbound list, clock). Each is grabbable +
// scalable via the same pinch gestures as the tabletop.

const ATC_BLUE   = '#4499ff';
const ATC_ORANGE = '#ff8844';

const inboundPanel = new SpatialPanel({
  name: 'inbound',
  width: 0.42, height: 0.62, canvasW: 560, canvasH: 820,
  anchor: new THREE.Vector3(-0.95, 1.35, -0.9),
  faceTarget: new THREE.Vector3(0, 1.4, 0),
});
scene.add(inboundPanel.group);
interaction.registerGrabbable(inboundPanel.group, {
  surfaces: [inboundPanel.mesh], kind: 'panel', minScale: 0.4, maxScale: 3.0,
});

const outboundPanel = new SpatialPanel({
  name: 'outbound',
  width: 0.42, height: 0.62, canvasW: 560, canvasH: 820,
  anchor: new THREE.Vector3(0.95, 1.35, -0.9),
  faceTarget: new THREE.Vector3(0, 1.4, 0),
});
scene.add(outboundPanel.group);
interaction.registerGrabbable(outboundPanel.group, {
  surfaces: [outboundPanel.mesh], kind: 'panel', minScale: 0.4, maxScale: 3.0,
});

const clockPanel = new SpatialPanel({
  name: 'clock',
  width: 0.30, height: 0.20, canvasW: 600, canvasH: 400,
  anchor: new THREE.Vector3(0, 1.95, -1.15),
  faceTarget: new THREE.Vector3(0, 1.6, 0),
});
scene.add(clockPanel.group);
interaction.registerGrabbable(clockPanel.group, {
  surfaces: [clockPanel.mesh], kind: 'panel', minScale: 0.4, maxScale: 3.0,
});

function refreshPanels() {
  const now = performance.now();

  if (clockPanel.shouldRedraw(now, 250)) {
    clockPanel.redraw((ctx, w, h) => drawClock(ctx, w, h));
  }

  if (inboundPanel.shouldRedraw(now, 2000)) {
    const inbounds = traffic.aircraft
      .map((g) => g.userData)
      .filter((d) => d && d.state === 'AIRBORNE_IN')
      .sort((a, b) => (a.dist_nm ?? 9999) - (b.dist_nm ?? 9999));
    inboundPanel.redraw((ctx, w, h) =>
      drawFlightList(ctx, w, h, {
        title: 'INBOUND',
        flights: inbounds,
        accentHex: ATC_BLUE,
        headerSubtitle: `${inbounds.length} aircraft on approach`,
      })
    );
  }

  if (outboundPanel.shouldRedraw(now, 2000)) {
    const outbounds = traffic.aircraft
      .map((g) => g.userData)
      .filter((d) => d && (d.state === 'AIRBORNE_OUT' || d.state === 'CLEARED' || d.state === 'QUEUED'));
    outboundPanel.redraw((ctx, w, h) =>
      drawFlightList(ctx, w, h, {
        title: 'OUTBOUND',
        flights: outbounds,
        accentHex: ATC_ORANGE,
        headerSubtitle: `${outbounds.length} aircraft departing`,
      })
    );
  }
}
// Prime the panels once so they aren't blank for the first 2 s.
refreshPanels();

// Desktop preview controls (only used outside XR)
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.target.set(0, 0.9, -1.2);
orbit.update();

const arButton = ARButton.createButton(renderer, {
  optionalFeatures: ['hand-tracking', 'local-floor', 'bounded-floor', 'hit-test'],
});
document.getElementById('ar-btn-wrap').appendChild(arButton);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clk = new THREE.Clock();
renderer.setAnimationLoop((time, frame) => {
  const dt = Math.min(clk.getDelta(), 0.05);
  if (!renderer.xr.isPresenting) orbit.update();
  interaction.update(frame);
  traffic.update(dt);
  if (tilesAirport) tilesAirport.update();
  if (cyberpunkAirport?.userData?.update) cyberpunkAirport.userData.update(dt);
  refreshPanels();
  renderer.render(scene, camera);
});
