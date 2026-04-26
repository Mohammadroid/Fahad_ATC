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

// Tabletop root — desk height, 1.2 m forward of headset
const tabletop = new THREE.Group();
tabletop.position.set(0, 0.9, -1.2);
scene.add(tabletop);

// Visible base so the tabletop reads as an object in passthrough
const base = new THREE.Mesh(
  new THREE.BoxGeometry(1.6, 0.02, 1.2),
  new THREE.MeshStandardMaterial({ color: 0x1c2230, roughness: 0.85, metalness: 0.1 })
);
base.position.y = -0.012;
tabletop.add(base);

const airport = buildAirport();
tabletop.add(airport);

// Feed selection: ?snapshot=<filename> loads a snapshot JSON from /data/.
// Default is the live simulator.
const params = new URLSearchParams(location.search);
const snapshotName = params.get('snapshot');
let traffic;
if (snapshotName) {
  try {
    traffic = await SnapshotPlayer.load(`${import.meta.env.BASE_URL}data/${snapshotName}`, tabletop);
  } catch (err) {
    console.error('[snapshot] load failed, falling back to simulator:', err);
    traffic = new TrafficSimulator(tabletop);
  }
} else {
  traffic = new TrafficSimulator(tabletop);
}

// Hand tracking
const handFactory = new XRHandModelFactory();
const hand0 = renderer.xr.getHand(0);
const hand1 = renderer.xr.getHand(1);
hand0.add(handFactory.createHandModel(hand0, 'boxes'));
hand1.add(handFactory.createHandModel(hand1, 'boxes'));
scene.add(hand0);
scene.add(hand1);

setupInteraction({ scene, tabletop, hands: [hand0, hand1], traffic });

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
  traffic.update(dt);
  renderer.render(scene, camera);
});
