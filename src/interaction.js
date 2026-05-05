import * as THREE from 'three';
import { getAirlineName, getTypeName, getAirlineAccent, STATES } from './aircraft.js';
import { buildFlightPath } from './flightpath.js';
import { SCALE } from './airport.js';

// Pinch + laser-pointer interactions:
//   • Each hand emits a 3 m laser ray from its targetRay (along the pinch axis).
//   • Per frame: raycast each laser against aircraft and the tabletop base.
//     The hit aircraft / hit point gets a cursor dot and subtle hover highlight.
//   • Pinch (selectstart):
//       - Laser hit on aircraft → toggle selection (re-pinch the same one
//         deselects it and hides its card + flight path).
//       - Laser hit on tabletop OR direct touch on tabletop → grab.
//       - Direct touch on aircraft (≤6 cm) → select (legacy fallback).
//   • Grabbing: one hand = translate; two hands = scale + yaw + translate
//     around the midpoint between the two hands.
//
// Caller drives update() from the render loop so per-frame ray-targeting,
// hover state, cursor positions and tabletop transforms all stay in sync.

const NM_TO_M = 1852;

export function setupInteraction({ scene, tabletop, hands, controllers, traffic, renderer }) {
  // ----- card sprite -----
  const card = makeCard();
  scene.add(card);
  card.visible = false;
  let selected = null;

  // ----- tabletop grab state -----
  const grabs = new Set(); // active hands grabbing the tabletop
  let grabState = null;
  const base = tabletop.getObjectByName('tabletop-base');
  const baseOriginalEmissive = base?.material?.emissive?.clone();

  // ----- laser-pointer cursors -----
  const cursors = controllers.map(() => makeCursor());
  for (const c of cursors) scene.add(c);

  // ----- per-frame ray hover -----
  let hovers = controllers.map(() => null); // {type, target, point} per controller

  // ----- hit-test placement (AR-only) -----
  const reticle = makeReticle();
  scene.add(reticle);
  let hitTestSource = null;
  let placedOnSurface = false;
  let savedTabletopPos = null;

  if (renderer) {
    renderer.xr.addEventListener('sessionstart', async () => {
      const session = renderer.xr.getSession();
      if (!session?.requestHitTestSource) return;
      try {
        const viewerSpace = await session.requestReferenceSpace('viewer');
        hitTestSource = await session.requestHitTestSource({ space: viewerSpace });
        // Hide the tabletop until the user picks a surface to place it on.
        savedTabletopPos = tabletop.position.clone();
        tabletop.visible = false;
        placedOnSurface = false;
      } catch (err) {
        console.warn('[xr] hit-test unavailable, using default placement:', err);
      }
    });

    renderer.xr.addEventListener('sessionend', () => {
      hitTestSource = null;
      reticle.visible = false;
      tabletop.visible = true;
      if (savedTabletopPos) tabletop.position.copy(savedTabletopPos);
      placedOnSurface = false;
    });
  }

  for (let i = 0; i < controllers.length; i++) {
    const ctrl = controllers[i];
    ctrl.userData.handIdx = i;
    ctrl.addEventListener('selectstart', () => onPinchStart(i));
    ctrl.addEventListener('selectend',   () => onPinchEnd(i));
  }

  // -----------------------------------------------------------
  // Per-frame loop driver
  function update(frame) {
    // 0) Hit-test placement reticle (AR-only, until first pinch on surface)
    if (hitTestSource && frame && !placedOnSurface) {
      const refSpace = renderer.xr.getReferenceSpace();
      const hits = frame.getHitTestResults(hitTestSource);
      if (hits.length > 0) {
        const pose = hits[0].getPose(refSpace);
        if (pose) {
          reticle.matrix.fromArray(pose.transform.matrix);
          reticle.visible = true;
        }
      } else {
        reticle.visible = false;
      }
    }

    // 1) Update laser hits + cursors
    for (let i = 0; i < controllers.length; i++) {
      const hit = rayHit(controllers[i]);
      hovers[i] = hit;
      const cursor = cursors[i];
      if (hit) {
        cursor.position.copy(hit.point);
        cursor.visible = true;
        cursor.material.color.setHex(hit.type === 'aircraft' ? 0xffd86b : 0x4a9eff);
      } else {
        cursor.visible = false;
      }
    }

    // 2) Update tabletop grab transform
    updateGrab();
  }

  // -----------------------------------------------------------
  // Ray hit: returns {type, target, point} or null
  function rayHit(ctrl) {
    const origin = new THREE.Vector3();
    origin.setFromMatrixPosition(ctrl.matrixWorld);
    const direction = new THREE.Vector3(0, 0, -1).transformDirection(ctrl.matrixWorld);

    const FAR = 5;
    // Aircraft: closest perpendicular distance to ray, within ~3° angular tolerance
    let bestAc = null, bestPerp = Infinity, bestT = 0;
    for (const ac of traffic.aircraft) {
      const acPos = new THREE.Vector3();
      ac.getWorldPosition(acPos);
      const v = acPos.clone().sub(origin);
      const t = v.dot(direction);
      if (t < 0 || t > FAR) continue;
      const closest = origin.clone().addScaledVector(direction, t);
      const perp = closest.distanceTo(acPos);
      // Angular tolerance: 5 cm at 1 m = ~3°; scale with distance for fairness.
      const tolerance = Math.max(0.04, t * 0.05);
      if (perp < tolerance && perp < bestPerp) {
        bestAc = ac; bestPerp = perp; bestT = t;
      }
    }
    if (bestAc) {
      const acPos = new THREE.Vector3();
      bestAc.getWorldPosition(acPos);
      return { type: 'aircraft', target: bestAc, point: acPos };
    }

    // Tabletop base: actual mesh raycast
    if (base) {
      const raycaster = new THREE.Raycaster(origin, direction, 0, FAR);
      const hits = raycaster.intersectObject(base, false);
      if (hits.length > 0) return { type: 'tabletop', target: tabletop, point: hits[0].point };
    }
    return null;
  }

  // -----------------------------------------------------------
  // Pinch handlers (selectstart / selectend)
  function onPinchStart(idx) {
    const ctrl = controllers[idx];
    const hand = hands[idx];
    const hit = hovers[idx];

    // 0. First-time AR placement: pinch with reticle visible drops the
    //    tabletop onto the detected surface (your real table).
    if (!placedOnSurface && reticle.visible) {
      const surfacePos = new THREE.Vector3();
      surfacePos.setFromMatrixPosition(reticle.matrix);
      tabletop.position.copy(surfacePos);
      tabletop.rotation.set(0, tabletop.rotation.y, 0); // keep airport level
      tabletop.scale.setScalar(1);
      tabletop.updateMatrix();
      tabletop.visible = true;
      placedOnSurface = true;
      reticle.visible = false;
      return; // consume this pinch — don't also trigger select/grab
    }

    // 1. Laser hit on aircraft → toggle select
    if (hit?.type === 'aircraft') {
      toggleSelect(hit.target);
      return;
    }

    // 2. Direct touch fallback on aircraft (≤6 cm from index fingertip)
    const tip = handTipPos(hand);
    if (tip) {
      let nearest = null, nd = 0.06;
      for (const ac of traffic.aircraft) {
        const acPos = ac.getWorldPosition(new THREE.Vector3());
        const d = acPos.distanceTo(tip);
        if (d < nd) { nearest = ac; nd = d; }
      }
      if (nearest) { toggleSelect(nearest); return; }
    }

    // 3. Tabletop grab — laser-hit on table OR direct touch on table
    if (hit?.type === 'tabletop' || (tip && isOnTabletop(tip))) {
      grabs.add(hand);
      snapshotGrab();
      setGrabFeedback(true);
    }
  }

  function onPinchEnd(idx) {
    const hand = hands[idx];
    if (!grabs.has(hand)) return;
    grabs.delete(hand);
    if (grabs.size > 0) snapshotGrab();
    else { grabState = null; setGrabFeedback(false); }
  }

  // -----------------------------------------------------------
  // Aircraft selection (toggle on re-pinch)
  function toggleSelect(ac) {
    if (selected === ac) {
      deselect();
      return;
    }
    if (selected) deselect();
    selected = ac;
    setHighlight(ac, true);
    showFlightPath(ac);
    redrawCard(ac.userData);
    positionCardForAircraft(ac);
    card.visible = true;
  }

  function deselect() {
    if (!selected) return;
    setHighlight(selected, false);
    hideFlightPath(selected);
    selected = null;
    card.visible = false;
  }

  function positionCardForAircraft(ac) {
    const p = new THREE.Vector3();
    ac.getWorldPosition(p);
    // Place card to the upper-right of the aircraft, in world space.
    card.position.copy(p).add(new THREE.Vector3(0.20, 0.14, 0));
  }

  function setHighlight(group, on) {
    const ring = group.userData?.stateRing;
    if (!ring) return;
    ring.material.opacity = on ? 0.95 : 0.55;
    ring.scale.setScalar(on ? 1.45 : 1.0);
  }

  function showFlightPath(ac) {
    if (!ac.userData.flightPath) {
      const path = buildFlightPath(ac);
      if (!path) return;
      ac.userData.flightPath = path;
      tabletop.add(path);
    }
    ac.userData.flightPath.visible = true;
  }

  function hideFlightPath(ac) {
    if (ac.userData.flightPath) ac.userData.flightPath.visible = false;
  }

  // -----------------------------------------------------------
  // Tabletop grab (drag / scale / yaw)
  function isOnTabletop(worldPos) {
    const local = tabletop.worldToLocal(worldPos.clone());
    return Math.abs(local.x) < 0.85 && Math.abs(local.z) < 0.85 && Math.abs(local.y) < 0.20;
  }

  function snapshotGrab() {
    const handPositions = [];
    for (const hand of grabs) {
      const p = handTipPos(hand);
      if (p) handPositions.push(p);
    }
    if (handPositions.length === 0) { grabState = null; return; }
    tabletop.updateMatrix();
    grabState = {
      handPositions,
      initialMatrix: tabletop.matrix.clone(),
    };
  }

  function updateGrab() {
    if (!grabState) return;
    const currentPositions = [];
    for (const hand of grabs) {
      const p = handTipPos(hand);
      if (p) currentPositions.push(p);
    }
    if (currentPositions.length !== grabState.handPositions.length) {
      snapshotGrab();
      return;
    }
    if (currentPositions.length === 0) return;

    if (currentPositions.length === 1) {
      const delta = currentPositions[0].clone().sub(grabState.handPositions[0]);
      const M = grabState.initialMatrix.clone();
      M.elements[12] += delta.x; M.elements[13] += delta.y; M.elements[14] += delta.z;
      applyMatrix(M);
    } else {
      const A0 = grabState.handPositions[0], B0 = grabState.handPositions[1];
      const A1 = currentPositions[0],        B1 = currentPositions[1];
      const m0 = A0.clone().add(B0).multiplyScalar(0.5);
      const m1 = A1.clone().add(B1).multiplyScalar(0.5);
      const d0 = Math.max(A0.distanceTo(B0), 1e-4);
      const d1 = A1.distanceTo(B1);
      const scaleRatio = clamp(d1 / d0, 0.4, 3.0);
      const v0 = B0.clone().sub(A0); v0.y = 0;
      const v1 = B1.clone().sub(A1); v1.y = 0;
      const yaw = Math.atan2(v1.x, v1.z) - Math.atan2(v0.x, v0.z);

      const T1 = new THREE.Matrix4().makeTranslation(m1.x, m1.y, m1.z);
      const R = new THREE.Matrix4().makeRotationY(yaw);
      const S = new THREE.Matrix4().makeScale(scaleRatio, scaleRatio, scaleRatio);
      const Tn = new THREE.Matrix4().makeTranslation(-m0.x, -m0.y, -m0.z);
      const M = T1.multiply(R).multiply(S).multiply(Tn).multiply(grabState.initialMatrix);
      applyMatrix(M);
    }

    if (selected) positionCardForAircraft(selected);
  }

  function applyMatrix(M) {
    M.decompose(tabletop.position, tabletop.quaternion, tabletop.scale);
    const s = THREE.MathUtils.clamp(tabletop.scale.x, 0.25, 4.0);
    tabletop.scale.setScalar(s);
    tabletop.updateMatrix();
  }

  function setGrabFeedback(on) {
    if (!base?.material) return;
    if (on) {
      base.material.emissive = new THREE.Color(0x2a4a78);
      base.material.emissiveIntensity = 0.5;
    } else {
      base.material.emissive = baseOriginalEmissive ? baseOriginalEmissive.clone() : new THREE.Color(0x000000);
      base.material.emissiveIntensity = 0;
    }
  }

  function handTipPos(hand) {
    const tip = hand?.joints?.['index-finger-tip'];
    if (!tip) return null;
    const p = new THREE.Vector3();
    tip.getWorldPosition(p);
    return p;
  }

  // -----------------------------------------------------------
  // Card UI (rich layout)
  function makeCard() {
    const canvas = document.createElement('canvas');
    canvas.width = 600; canvas.height = 460;
    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    tex.anisotropy = 4;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex, transparent: true, depthTest: false,
    }));
    sprite.scale.set(0.30, 0.23, 1);
    sprite.renderOrder = 20;
    sprite.userData = { canvas, tex };
    return sprite;
  }

  function redrawCard(data) {
    const { canvas, tex } = card.userData;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = 'rgba(10, 14, 22, 0.95)';
    roundRect(ctx, 0, 0, canvas.width, canvas.height, 16);
    ctx.fill();
    const accent = `#${getAirlineAccent(data.callsign).toString(16).padStart(6, '0')}`;
    ctx.strokeStyle = accent;
    ctx.lineWidth = 4;
    ctx.stroke();

    // Top state stripe
    const stateColor = stateHexColor(data.state);
    ctx.fillStyle = stateColor;
    ctx.fillRect(0, 0, canvas.width, 8);

    // Header: callsign
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText(data.callsign, 28, 26);

    // Header: airline name
    const airline = getAirlineName(data.callsign);
    ctx.fillStyle = accent;
    ctx.font = '24px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText(airline || ' ', 28, 90);

    // Divider
    ctx.strokeStyle = 'rgba(120,140,170,0.25)';
    ctx.lineWidth = 1;
    line(ctx, 28, 130, canvas.width - 28, 130);

    // State badge + type
    ctx.fillStyle = stateColor;
    ctx.font = 'bold 28px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText(String(data.state || '').replace('_', ' '), 28, 142);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '22px ui-sans-serif, system-ui, sans-serif';
    const typeName = getTypeName(data.type);
    ctx.fillText(`${typeName}${data.type ? `  (${data.type})` : ''}`, 28, 180);

    // Telemetry rows
    const rowY0 = 220;
    const rows = [
      ['Heading',  `${data.hdg ?? '-'}°`],
      ['Altitude', `${(data.alt ?? 0).toLocaleString()} ft`],
      ['Speed',    data.speed_kt != null ? `${data.speed_kt} kt` : '-'],
    ];
    if (data.vrate_fpm != null && Math.abs(data.vrate_fpm) > 50) {
      const arrow = data.vrate_fpm > 0 ? '↑' : '↓';
      rows.push(['V/Rate', `${arrow} ${Math.abs(data.vrate_fpm).toLocaleString()} fpm`]);
    }
    rows.forEach(([k, v], i) => {
      const y = rowY0 + i * 36;
      ctx.fillStyle = '#7d8b9e';
      ctx.font = '20px ui-sans-serif, system-ui, sans-serif';
      ctx.fillText(k, 28, y);
      ctx.fillStyle = '#e6edf3';
      ctx.font = '22px ui-sans-serif, system-ui, sans-serif';
      ctx.fillText(v, 180, y);
    });

    // Divider
    line(ctx, 28, 360, canvas.width - 28, 360);

    // Route + ETA
    ctx.fillStyle = '#7d8b9e';
    ctx.font = '20px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText('Route', 28, 374);

    ctx.fillStyle = '#e6edf3';
    ctx.font = 'bold 24px ui-sans-serif, system-ui, sans-serif';
    const routeText = `${data.origin || '?'}  →  ${data.destination || '?'}`;
    ctx.fillText(routeText, 180, 372);

    // ETA — only meaningful for inbound airborne
    const eta = computeEta(data);
    ctx.fillStyle = '#7d8b9e';
    ctx.font = '20px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText('ETA', 28, 416);
    ctx.fillStyle = '#e6edf3';
    ctx.font = 'bold 22px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText(eta, 180, 414);

    tex.needsUpdate = true;
  }

  function computeEta(data) {
    if (data.state !== 'AIRBORNE_IN') return '—';
    const speed = data.speed_kt;
    if (!speed || speed < 50) return '—';
    // Distance to OKBK in nm via lat/lon great-circle approximation
    const lat = data.lat, lon = data.lon;
    if (lat == null || lon == null) return '—';
    const cosLat = Math.cos(29.2266 * Math.PI / 180);
    const dxKm = (lon - 47.9689) * 111.32 * cosLat;
    const dyKm = (lat - 29.2266) * 111.32;
    const distKm = Math.hypot(dxKm, dyKm);
    const distNm = distKm * 1000 / NM_TO_M;
    const minutes = Math.round((distNm / speed) * 60);
    if (minutes < 1) return '< 1 min';
    if (minutes < 60) return `${minutes} min`;
    return `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
  }

  return { update };
}

// -----------------------------------------------------------------------
// Helpers (file-scope)

function makeCursor() {
  const m = new THREE.Mesh(
    new THREE.SphereGeometry(0.006, 16, 12),
    new THREE.MeshBasicMaterial({ color: 0x4a9eff, transparent: true, opacity: 0.85, depthTest: false }),
  );
  m.renderOrder = 25;
  m.visible = false;
  return m;
}

function makeReticle() {
  // Outer ring (pulse target) + inner cross hairs — visible against any surface.
  const g = new THREE.Group();
  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.07, 0.085, 32).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0x4a9eff, transparent: true, opacity: 0.9, depthTest: false })
  );
  const dot = new THREE.Mesh(
    new THREE.CircleGeometry(0.012, 16).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, depthTest: false })
  );
  ring.renderOrder = 26;
  dot.renderOrder = 27;
  g.add(ring);
  g.add(dot);
  g.matrixAutoUpdate = false;
  g.visible = false;
  return g;
}

function stateHexColor(state) {
  switch (state) {
    case 'PARKED':       return '#b0b0b0';
    case 'TAXI':         return '#ffcc33';
    case 'QUEUED':       return '#ff6633';
    case 'CLEARED':      return '#33ff77';
    case 'AIRBORNE_OUT': return '#ff8844';
    case 'AIRBORNE_IN':  return '#4499ff';
    default:             return '#ffffff';
  }
}

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

function line(ctx, x0, y0, x1, y1) {
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.lineTo(x1, y1);
  ctx.stroke();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y,     x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x,     y + h, r);
  ctx.arcTo(x,     y + h, x,     y,     r);
  ctx.arcTo(x,     y,     x + w, y,     r);
  ctx.closePath();
}
