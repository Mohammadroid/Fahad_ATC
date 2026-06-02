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
import { SpatialPanel, drawCombinedPanel, drawSettingsIcon, drawSettingsMenu } from './panels.js';
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

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1a2030, 1.0);
scene.add(hemiLight);
const sun = new THREE.DirectionalLight(0xffffff, 1.4);
sun.position.set(5, 10, 5);
scene.add(sun);

// Day / night theme (persisted in localStorage)
function applyTheme(theme) {
  if (theme === 'night') {
    hemiLight.intensity = 0.35;
    sun.intensity = 0.45;
    scene.background = new THREE.Color(0x050a14);
  } else {
    hemiLight.intensity = 1.0;
    sun.intensity = 1.4;
    scene.background = null; // transparent for passthrough
  }
  localStorage.setItem('fahad_atc_theme', theme);
}
const initialTheme = localStorage.getItem('fahad_atc_theme') || 'day';
applyTheme(initialTheme);
let currentTheme = initialTheme;

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
// Combined flight panel (clock on top + inbound/outbound split) + settings
// icon + settings menu. All grabbable + scalable; settings menu+icon are
// also clickable via userData.onPinchClick (interaction.js reads UV from
// the raycast hit).

const combinedPanel = new SpatialPanel({
  name: 'combined',
  width: 0.85, height: 0.60, canvasW: 1200, canvasH: 850,
  anchor: new THREE.Vector3(0, 1.45, -1.0),
  faceTarget: new THREE.Vector3(0, 1.4, 0),
});
scene.add(combinedPanel.group);
interaction.registerGrabbable(combinedPanel.group, {
  surfaces: [combinedPanel.mesh], kind: 'panel', minScale: 0.4, maxScale: 3.0,
});

const settingsIcon = new SpatialPanel({
  name: 'settings-icon',
  width: 0.09, height: 0.09, canvasW: 200, canvasH: 200,
  anchor: new THREE.Vector3(0.50, 1.78, -1.0),
  faceTarget: new THREE.Vector3(0, 1.4, 0),
});
scene.add(settingsIcon.group);
interaction.registerGrabbable(settingsIcon.group, {
  surfaces: [settingsIcon.mesh], kind: 'panel', minScale: 0.5, maxScale: 2.0,
});
settingsIcon.redraw((ctx, w, h) => drawSettingsIcon(ctx, w, h));
settingsIcon.group.userData.onPinchClick = () => {
  settingsMenu.group.visible = !settingsMenu.group.visible;
  return true;
};

const settingsMenu = new SpatialPanel({
  name: 'settings-menu',
  width: 0.48, height: 0.55, canvasW: 640, canvasH: 740,
  anchor: new THREE.Vector3(0.75, 1.45, -0.7),
  faceTarget: new THREE.Vector3(0, 1.4, 0),
});
scene.add(settingsMenu.group);
settingsMenu.group.visible = false;
interaction.registerGrabbable(settingsMenu.group, {
  surfaces: [settingsMenu.mesh], kind: 'panel', minScale: 0.5, maxScale: 2.0,
});

// Current settings state (read from URL + localStorage)
const settingsState = {
  map: airportMode === 'cyber' ? 'cyber' : airportMode === 'tiles' ? 'tiles' : 'osm',
  data: snapshotName && snapshotName !== 'okbk_live.json' ? 'demo' : 'live',
  theme: currentTheme,
};

let settingsRegions = [];

function redrawSettingsMenu() {
  settingsMenu.redraw((ctx, w, h) => {
    settingsRegions = drawSettingsMenu(ctx, w, h, {
      currentMap: settingsState.map,
      currentData: settingsState.data,
      currentTheme: settingsState.theme,
    });
  });
}
redrawSettingsMenu();

settingsMenu.group.userData.onPinchClick = (uv) => {
  if (!uv) return false;
  const px = uv.x * settingsMenu.canvas.width;
  const py = (1 - uv.y) * settingsMenu.canvas.height;
  for (const r of settingsRegions) {
    if (px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h) {
      handleSettingsClick(r.id);
      return true;
    }
  }
  return false;
};

function handleSettingsClick(id) {
  const [cat, val] = id.split(':');
  if (cat === 'theme') {
    settingsState.theme = val;
    currentTheme = val;
    applyTheme(val);
    redrawSettingsMenu();
    return;
  }
  if (cat === 'map') {
    const url = new URL(location);
    if (val === 'osm') url.searchParams.delete('airport');
    else url.searchParams.set('airport', val);
    location.href = url.toString();
    return;
  }
  if (cat === 'data') {
    const url = new URL(location);
    if (val === 'live') url.searchParams.delete('snapshot');
    else url.searchParams.set('snapshot', 'okbk_today.json');
    location.href = url.toString();
    return;
  }
}

function refreshPanels() {
  const now = performance.now();

  // Combined panel — re-render every 500 ms (smooth seconds counter) using
  // the latest aircraft state + clock.
  if (combinedPanel.shouldRedraw(now, 500)) {
    const acs = traffic.aircraft.map((g) => g.userData).filter(Boolean);
    const inbounds = acs.filter((d) => d.state === 'AIRBORNE_IN')
      .sort((a, b) => (a.dist_nm ?? 9999) - (b.dist_nm ?? 9999));
    const outbounds = acs.filter((d) =>
      d.state === 'AIRBORNE_OUT' || d.state === 'CLEARED' || d.state === 'QUEUED'
    );
    combinedPanel.redraw((ctx, w, h) =>
      drawCombinedPanel(ctx, w, h, { inbounds, outbounds })
    );
  }
}
// Prime once
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
