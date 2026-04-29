import * as THREE from 'three';
import { ARButton } from 'three/addons/webxr/ARButton.js';
import { XRHandModelFactory } from 'three/addons/webxr/XRHandModelFactory.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildAirport } from './airport.js';
import { TrafficSimulator } from './traffic.js';
import { SnapshotPlayer } from './feeds/snapshot.js';
import { setupInteraction } from './interaction.js';

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

const airport = await buildAirport();
tabletop.add(airport);

// Feed selection: ?snapshot=<filename> loads a snapshot JSON from /data/.
// Default is the live simulator.
const params = new URLSearchParams(location.search);
const snapshotName = params.get('snapshot');
let traffic;
let statusText = 'Simulator (animated)';
if (snapshotName) {
  try {
    traffic = await SnapshotPlayer.load(`${import.meta.env.BASE_URL}data/${snapshotName}`, tabletop);
    const snap = traffic.snapshot;
    const ts = snap?.time_iso ? new Date(snap.time_iso).toLocaleString() : '?';
    const total = snap?.counts?.total ?? snap?.aircraft?.length ?? 0;
    const near = snap?.counts?.near_50nm ?? '-';
    const distant = snap?.counts?.distant ?? '-';
    statusText = `${snap?.source || snapshotName} · ${ts} · ${total} aircraft (near ${near} / distant ${distant})`;
  } catch (err) {
    console.error('[snapshot] load failed, falling back to simulator:', err);
    traffic = new TrafficSimulator(tabletop);
    statusText = `Snapshot load failed → simulator`;
  }
} else {
  traffic = new TrafficSimulator(tabletop);
}
const statusEl = document.getElementById('status-badge');
if (statusEl) statusEl.textContent = `Source: ${statusText}`;

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
    new THREE.Vector3(0, 0, -3), // 3 m forward along controller -Z
  ]);
  const mat = new THREE.LineBasicMaterial({
    color: 0x4a9eff, transparent: true, opacity: 0.45, depthTest: false,
  });
  const line = new THREE.Line(geo, mat);
  line.renderOrder = 30;
  return line;
}

const interaction = setupInteraction({
  scene, tabletop,
  hands: [hand0, hand1],
  controllers: [ctrl0, ctrl1],
  traffic,
});

// Desktop preview controls (only used outside XR)
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.target.set(0, 0.9, -1.2);
orbit.update();

const arButton = ARButton.createButton(renderer, {
  optionalFeatures: ['hand-tracking', 'local-floor', 'bounded-floor'],
});
document.getElementById('ar-btn-wrap').appendChild(arButton);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  if (!renderer.xr.isPresenting) orbit.update();
  interaction.update();
  traffic.update(dt);
  renderer.render(scene, camera);
});
