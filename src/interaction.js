import * as THREE from 'three';
import { getAirlineName, getTypeName, getAirlineAccent, STATES } from './aircraft.js';
import { SCALE } from './airport.js';
import { buildFlightPath, disposeFlightPath } from './flightpath.js';

// Pinch + laser-pointer interactions:
//   • Each hand emits a 3 m laser ray from its targetRay (along the pinch axis).
//   • Per-frame: raycast each laser against aircraft and any registered
//     grabbable (the tabletop and any floating panels). Cursor dot lights up
//     on whatever the laser is pointing at.
//   • Pinch on aircraft → toggle selection / card visibility.
//   • Pinch on a grabbable → start a grab on that grabbable. One hand = drag;
//     two hands on the same grabbable = scale + yaw + translate around the
//     midpoint between the two hands.
//   • First pinch in AR with the placement reticle visible places the tabletop
//     onto your real table (hit-test on detected surfaces).
//
// Caller drives update(frame) from the render loop.

const NM_TO_M = 1852;

export function setupInteraction({ scene, tabletop, hands, controllers, traffic, renderer }) {
  // ----- card sprite -----
  const card = makeCard();
  scene.add(card);
  card.visible = false;
  let selected = null;

  // ----- grabbable registry -----
  // Each entry: { group, surfaces[], minScale, maxScale, kind, onGrabStart, onGrabEnd }
  const grabbables = [];
  // Per-group active grab: { hands: Set, state: {handPositions, initialMatrix} | null }
  const activeGrabs = new Map();

  const base = tabletop.getObjectByName('tabletop-base');
  const baseOriginalEmissive = base?.material?.emissive?.clone();

  // Register the tabletop as a grabbable
  registerGrabbable(tabletop, {
    surfaces: base ? [base] : [],
    kind: 'tabletop',
    minScale: 0.25, maxScale: 4.0,
    onGrabStart: () => setGrabFeedback(base, true, 0x2a4a78),
    onGrabEnd:   () => setGrabFeedback(base, false),
  });

  function registerGrabbable(group, options = {}) {
    const entry = {
      group,
      surfaces: options.surfaces || [],
      kind: options.kind || 'object',
      minScale: options.minScale ?? 0.3,
      maxScale: options.maxScale ?? 3.5,
      onGrabStart: options.onGrabStart || null,
      onGrabEnd:   options.onGrabEnd   || null,
    };
    group.userData.grabbable = true;
    group.userData.grabKind = entry.kind;
    grabbables.push(entry);
    return entry;
  }

  // ----- laser cursors -----
  const cursors = controllers.map(() => makeCursor());
  for (const c of cursors) scene.add(c);
  let hovers = controllers.map(() => null);

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
        savedTabletopPos = tabletop.position.clone();
        tabletop.visible = false;
        placedOnSurface = false;
      } catch (err) {
        console.warn('[xr] hit-test unavailable:', err);
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
    // 0) Hit-test placement reticle
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

    // 1) Laser hits + cursors
    for (let i = 0; i < controllers.length; i++) {
      const hit = rayHit(controllers[i]);
      hovers[i] = hit;
      const cursor = cursors[i];
      if (hit) {
        cursor.position.copy(hit.point);
        cursor.visible = true;
        cursor.material.color.setHex(
          hit.type === 'aircraft' ? 0xffd86b :
          hit.type === 'grabbable' ? 0x4a9eff : 0xffffff
        );
      } else {
        cursor.visible = false;
      }
    }

    // 2) Grab transform updates
    updateGrabs();

    // 3) Keep the selected aircraft's path attached + tracking position
    maybeUpdateSelectedPath();
  }

  // -----------------------------------------------------------
  // Ray hit detection: aircraft first, then any grabbable surface
  function rayHit(ctrl) {
    const origin = new THREE.Vector3();
    origin.setFromMatrixPosition(ctrl.matrixWorld);
    const direction = new THREE.Vector3(0, 0, -1).transformDirection(ctrl.matrixWorld);
    const FAR = 5;

    // Aircraft (perpendicular-distance test)
    let bestAc = null, bestPerp = Infinity;
    for (const ac of traffic.aircraft) {
      const acPos = new THREE.Vector3();
      ac.getWorldPosition(acPos);
      const v = acPos.clone().sub(origin);
      const t = v.dot(direction);
      if (t < 0 || t > FAR) continue;
      const closest = origin.clone().addScaledVector(direction, t);
      const perp = closest.distanceTo(acPos);
      const tolerance = Math.max(0.04, t * 0.05);
      if (perp < tolerance && perp < bestPerp) { bestAc = ac; bestPerp = perp; }
    }
    if (bestAc) {
      const acPos = new THREE.Vector3();
      bestAc.getWorldPosition(acPos);
      return { type: 'aircraft', target: bestAc, point: acPos };
    }

    // Grabbable surfaces (tabletop base + panel meshes)
    const allSurfaces = [];
    for (const e of grabbables) allSurfaces.push(...e.surfaces);
    if (allSurfaces.length > 0) {
      const raycaster = new THREE.Raycaster(origin, direction, 0, FAR);
      const hits = raycaster.intersectObjects(allSurfaces, false);
      if (hits.length > 0) {
        const group = findGrabbableAncestor(hits[0].object);
        if (group) return { type: 'grabbable', target: group, point: hits[0].point };
      }
    }
    return null;
  }

  // -----------------------------------------------------------
  // Pinch handlers
  function onPinchStart(idx) {
    const hand = hands[idx];
    const hit = hovers[idx];

    // 0. AR placement on real surface
    if (!placedOnSurface && reticle.visible) {
      const surfacePos = new THREE.Vector3();
      surfacePos.setFromMatrixPosition(reticle.matrix);
      tabletop.position.copy(surfacePos);
      tabletop.rotation.set(0, tabletop.rotation.y, 0);
      tabletop.scale.setScalar(1);
      tabletop.updateMatrix();
      tabletop.visible = true;
      placedOnSurface = true;
      reticle.visible = false;
      return;
    }

    // 1. Aircraft via laser
    if (hit?.type === 'aircraft') { toggleSelect(hit.target); return; }

    // 2. Aircraft via direct touch
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

    // 3. Grabbable via laser
    if (hit?.type === 'grabbable' && hit.target) {
      startGrab(hit.target, hand);
      return;
    }

    // 4. Grabbable via direct touch (tabletop only, panels handled by laser)
    if (tip && isOnTabletop(tip)) {
      startGrab(tabletop, hand);
    }
  }

  function onPinchEnd(idx) {
    const hand = hands[idx];
    endGrab(hand);
  }

  // -----------------------------------------------------------
  // Aircraft selection (toggle on re-pinch). Selecting an aircraft pops the
  // flight-strip card AND draws its past trail + projected path. Re-pinching
  // the same aircraft (or clicking another) hides them.
  function toggleSelect(ac) {
    if (selected === ac) { deselect(); return; }
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
    card.position.copy(p).add(new THREE.Vector3(0.20, 0.14, 0));
  }
  function setHighlight(group, on) {
    const ring = group.userData?.stateRing;
    if (!ring) return;
    ring.material.opacity = on ? 0.95 : 0.55;
    ring.scale.setScalar(on ? 1.45 : 1.0);
  }

  // Show the flight path for an aircraft. Rebuilt each time so it reflects
  // the aircraft's current 3-D position (start/end attach to the aircraft).
  function showFlightPath(ac) {
    rebuildFlightPath(ac);
  }
  function hideFlightPath(ac) {
    const path = ac.userData?.flightPath;
    if (path) {
      path.parent?.remove(path);
      disposeFlightPath(path);
      ac.userData.flightPath = null;
    }
  }
  function rebuildFlightPath(ac) {
    const old = ac.userData?.flightPath;
    if (old) {
      old.parent?.remove(old);
      disposeFlightPath(old);
      ac.userData.flightPath = null;
    }
    const fresh = buildFlightPath(ac);
    if (!fresh) return;
    ac.userData.flightPath = fresh;
    ac.parent?.add(fresh);
  }

  // Per-frame path rebuild for the selected aircraft, throttled to 5 Hz so
  // it tracks any movement (the sandbox simulator animates aircraft).
  let _lastPathRebuild = 0;
  function maybeUpdateSelectedPath() {
    if (!selected) return;
    const now = performance.now();
    if (now - _lastPathRebuild < 200) return;
    _lastPathRebuild = now;
    rebuildFlightPath(selected);
  }

  // -----------------------------------------------------------
  // Grab system (works for any registered grabbable)
  function startGrab(group, hand) {
    let g = activeGrabs.get(group);
    if (!g) {
      g = { hands: new Set(), state: null };
      activeGrabs.set(group, g);
      const entry = grabbables.find((e) => e.group === group);
      entry?.onGrabStart?.();
    }
    g.hands.add(hand);
    snapshotGrab(group, g);
  }

  function endGrab(hand) {
    for (const [group, g] of activeGrabs) {
      if (!g.hands.has(hand)) continue;
      g.hands.delete(hand);
      if (g.hands.size === 0) {
        activeGrabs.delete(group);
        const entry = grabbables.find((e) => e.group === group);
        entry?.onGrabEnd?.();
      } else {
        snapshotGrab(group, g);
      }
      return;
    }
  }

  function snapshotGrab(group, g) {
    const hps = [];
    for (const hand of g.hands) {
      const p = handTipPos(hand);
      if (p) hps.push(p);
    }
    if (hps.length === 0) { g.state = null; return; }
    group.updateMatrix();
    g.state = { handPositions: hps, initialMatrix: group.matrix.clone() };
  }

  function updateGrabs() {
    for (const [group, g] of activeGrabs) {
      if (!g.state) continue;
      const cps = [];
      for (const hand of g.hands) {
        const p = handTipPos(hand);
        if (p) cps.push(p);
      }
      if (cps.length !== g.state.handPositions.length) { snapshotGrab(group, g); continue; }
      if (cps.length === 0) continue;
      applyGrabTransform(group, g, cps);
    }
    if (selected) positionCardForAircraft(selected);
  }

  function applyGrabTransform(group, g, cps) {
    if (cps.length === 1) {
      const delta = cps[0].clone().sub(g.state.handPositions[0]);
      const M = g.state.initialMatrix.clone();
      M.elements[12] += delta.x;
      M.elements[13] += delta.y;
      M.elements[14] += delta.z;
      applyMatrix(group, M);
    } else {
      const A0 = g.state.handPositions[0], B0 = g.state.handPositions[1];
      const A1 = cps[0], B1 = cps[1];
      const m0 = A0.clone().add(B0).multiplyScalar(0.5);
      const m1 = A1.clone().add(B1).multiplyScalar(0.5);
      const d0 = Math.max(A0.distanceTo(B0), 1e-4);
      const d1 = A1.distanceTo(B1);
      const scaleRatio = clamp(d1 / d0, 0.4, 3.0);
      const v0 = B0.clone().sub(A0); v0.y = 0;
      const v1 = B1.clone().sub(A1); v1.y = 0;
      const yaw = Math.atan2(v1.x, v1.z) - Math.atan2(v0.x, v0.z);
      const T1 = new THREE.Matrix4().makeTranslation(m1.x, m1.y, m1.z);
      const R  = new THREE.Matrix4().makeRotationY(yaw);
      const S  = new THREE.Matrix4().makeScale(scaleRatio, scaleRatio, scaleRatio);
      const Tn = new THREE.Matrix4().makeTranslation(-m0.x, -m0.y, -m0.z);
      const M = T1.multiply(R).multiply(S).multiply(Tn).multiply(g.state.initialMatrix);
      applyMatrix(group, M);
    }
  }

  function applyMatrix(group, M) {
    M.decompose(group.position, group.quaternion, group.scale);
    const entry = grabbables.find((e) => e.group === group);
    const s = THREE.MathUtils.clamp(group.scale.x, entry?.minScale ?? 0.3, entry?.maxScale ?? 3.5);
    group.scale.setScalar(s);
    group.updateMatrix();
  }

  function setGrabFeedback(mesh, on, colorHex = 0x2a4a78) {
    if (!mesh?.material) return;
    if (on) {
      mesh.material.emissive = new THREE.Color(colorHex);
      mesh.material.emissiveIntensity = 0.5;
    } else {
      mesh.material.emissive = baseOriginalEmissive ? baseOriginalEmissive.clone() : new THREE.Color(0);
      mesh.material.emissiveIntensity = 0;
    }
  }

  function isOnTabletop(worldPos) {
    const local = tabletop.worldToLocal(worldPos.clone());
    return Math.abs(local.x) < 0.85 && Math.abs(local.z) < 0.85 && Math.abs(local.y) < 0.20;
  }

  function handTipPos(hand) {
    const tip = hand?.joints?.['index-finger-tip'];
    if (!tip) return null;
    const p = new THREE.Vector3();
    tip.getWorldPosition(p);
    return p;
  }

  function findGrabbableAncestor(obj) {
    let cur = obj;
    while (cur) {
      if (cur.userData?.grabbable) return cur;
      cur = cur.parent;
    }
    return null;
  }

  // -----------------------------------------------------------
  // Card UI
  function makeCard() {
    const canvas = document.createElement('canvas');
    canvas.width = 600; canvas.height = 460;
    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter; tex.anisotropy = 4;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
    sprite.scale.set(0.30, 0.23, 1);
    sprite.renderOrder = 20;
    sprite.userData = { canvas, tex };
    return sprite;
  }

  function redrawCard(data) {
    const { canvas, tex } = card.userData;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(10, 14, 22, 0.95)';
    roundRect(ctx, 0, 0, canvas.width, canvas.height, 16);
    ctx.fill();
    const accent = `#${getAirlineAccent(data.callsign).toString(16).padStart(6, '0')}`;
    ctx.strokeStyle = accent; ctx.lineWidth = 4; ctx.stroke();
    const stateColor = stateHexColor(data.state);
    ctx.fillStyle = stateColor;
    ctx.fillRect(0, 0, canvas.width, 8);
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText(data.callsign, 28, 26);
    const airline = getAirlineName(data.callsign);
    ctx.fillStyle = accent;
    ctx.font = '24px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText(airline || ' ', 28, 90);
    ctx.strokeStyle = 'rgba(120,140,170,0.25)';
    ctx.lineWidth = 1;
    line(ctx, 28, 130, canvas.width - 28, 130);
    ctx.fillStyle = stateColor;
    ctx.font = 'bold 28px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText(String(data.state || '').replace('_', ' '), 28, 142);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '22px ui-sans-serif, system-ui, sans-serif';
    const typeName = getTypeName(data.type);
    ctx.fillText(`${typeName}${data.type ? `  (${data.type})` : ''}`, 28, 180);
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
    line(ctx, 28, 360, canvas.width - 28, 360);
    ctx.fillStyle = '#7d8b9e';
    ctx.font = '20px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText('Route', 28, 374);
    ctx.fillStyle = '#e6edf3';
    ctx.font = 'bold 24px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText(`${data.origin || '?'}  →  ${data.destination || '?'}`, 180, 372);
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

  return { update, registerGrabbable };
}

// -----------------------------------------------------------------------
// Helpers

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
  g.add(ring); g.add(dot);
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
  ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
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
