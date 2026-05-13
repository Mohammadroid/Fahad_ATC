import * as THREE from 'three';
import { TilesRenderer } from '3d-tiles-renderer';
import { GoogleCloudAuthPlugin } from '3d-tiles-renderer/plugins';
import { SCALE, OKBK_LAT, OKBK_LON } from './airport.js';

// Google Photorealistic 3D Tiles backdrop for OKBK.
//
// Aligns to the same OKBK reference point used by the OSM airport + aircraft
// snapshot, so flight paths and aircraft positions overlay correctly on the
// real photoreal geometry.
//
// Requires a Google Maps Platform API key with the "Map Tiles API" enabled.
// Restrict the key to your domain referrer (`https://mohammadroid.github.io/*`
// and `http://localhost:*` for local dev) so it can be safely exposed in the
// deployed bundle.

export function buildAirportTiles({ parent, apiKey, camera, renderer }) {
  const tiles = new TilesRenderer();
  tiles.registerPlugin(new GoogleCloudAuthPlugin({
    apiToken: apiKey,
    autoRefreshToken: true,
  }));

  // Anchor the tile-world so OKBK reference (29.2266°N, 47.9689°E) sits at the
  // origin with +Y as up. The 3D tiles arrive in real-world metres.
  tiles.setLatLonToYUp(
    THREE.MathUtils.DEG2RAD * OKBK_LAT,
    THREE.MathUtils.DEG2RAD * OKBK_LON,
  );

  // Scale to the tabletop frame (1 world unit = 5 km of real airport).
  tiles.group.scale.setScalar(SCALE);
  parent.add(tiles.group);

  // The tile LOD needs to know which camera is rendering. In XR mode the
  // renderer switches to a stereo ArrayCamera; we swap it in/out as needed.
  let currentCam = null;
  function ensureCamera() {
    const active = renderer.xr.isPresenting ? renderer.xr.getCamera() : camera;
    if (active === currentCam) return;
    if (currentCam) tiles.deleteCamera(currentCam);
    tiles.setCamera(active);
    tiles.setResolutionFromRenderer(active, renderer);
    currentCam = active;
  }
  ensureCamera();

  function update() {
    ensureCamera();
    tiles.update();
  }

  function getAttributions() {
    // 3d-tiles-renderer exposes per-tile credits via the plugin. Aggregate them.
    if (typeof tiles.getAttributions === 'function') {
      return tiles.getAttributions();
    }
    return [{ type: 'string', value: '© Google' }];
  }

  return {
    update,
    dispose: () => tiles.dispose(),
    group: tiles.group,
    getAttributions,
  };
}
