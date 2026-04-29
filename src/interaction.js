import * as THREE from 'three';

// Pinch interactions:
//   • Pinch near an aircraft (≤ 6 cm) → select it; the flight-strip card pops.
//   • Pinch on the tabletop (anywhere on the base mesh) → grab the whole table.
//       - One hand pinching: drag to translate (X/Y/Z).
//       - Two hands pinching: scale (hand-distance ratio) + yaw rotate (angle
//         between hand pairs) + translate (midpoint delta) — all around the
//         midpoint between the two hands.
//   • Selectstart fires when WebXR detects a pinch gesture; selectend on release.
//
// Returns { update } — caller drives it from the render loop so per-frame
// transforms track hand motion smoothly.

export function setupInteraction({ scene, tabletop, hands, traffic }) {
  const card = makeCard();
  scene.add(card);
  card.visible = false;
  let selected = null;

  // Tabletop grab state
  const grabs = new Set(); // active hands grabbing the tabletop
  let grabState = null;
  const base = tabletop.getObjectByName('tabletop-base');
  const baseOriginalEmissive = base?.material?.emissive?.clone();

  for (const hand of hands) {
    hand.addEventListener('selectstart', () => onPinch(hand));
    hand.addEventListener('selectend', () => onPinchEnd(hand));
  }

  function onPinch(hand) {
    const tip = handTipPos(hand);
    if (!tip) return;

    // Aircraft selection takes priority
    let best = null, bestDist = 0.06;
    for (const ac of traffic.aircraft) {
      const acPos = ac.getWorldPosition(new THREE.Vector3());
      const d = acPos.distanceTo(tip);
      if (d < bestDist) { best = ac; bestDist = d; }
    }
    if (best) { select(best); return; }

    // Otherwise grab the tabletop if pinch is on/near it
    if (isOnTabletop(tip)) {
      grabs.add(hand);
      snapshotGrab();
      setGrabFeedback(true);
    }
  }

  function onPinchEnd(hand) {
    if (!grabs.has(hand)) return;
    grabs.delete(hand);
    if (grabs.size > 0) snapshotGrab();
    else { grabState = null; setGrabFeedback(false); }
  }

  function handTipPos(hand) {
    const tip = hand.joints?.['index-finger-tip'];
    if (!tip) return null;
    const p = new THREE.Vector3();
    tip.getWorldPosition(p);
    return p;
  }

  function isOnTabletop(worldPos) {
    // Base box is 1.6 × 0.02 × 1.6 (in local coords, before any scale).
    // worldToLocal divides by the tabletop's scale, so bounds stay constant.
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

  function update() {
    if (!grabState) return;

    const currentPositions = [];
    for (const hand of grabs) {
      const p = handTipPos(hand);
      if (p) currentPositions.push(p);
    }
    if (currentPositions.length !== grabState.handPositions.length) {
      // Hand count changed mid-grab → re-snapshot so the next frame is smooth
      snapshotGrab();
      return;
    }
    if (currentPositions.length === 0) return;

    if (currentPositions.length === 1) {
      // ---- Single-hand: translate ----
      const delta = currentPositions[0].clone().sub(grabState.handPositions[0]);
      const M = grabState.initialMatrix.clone();
      M.elements[12] += delta.x;
      M.elements[13] += delta.y;
      M.elements[14] += delta.z;
      applyMatrix(M);
    } else {
      // ---- Two-hand: translate + scale + yaw rotate around midpoint ----
      const A0 = grabState.handPositions[0], B0 = grabState.handPositions[1];
      const A1 = currentPositions[0],        B1 = currentPositions[1];

      const m0 = A0.clone().add(B0).multiplyScalar(0.5);
      const m1 = A1.clone().add(B1).multiplyScalar(0.5);

      const d0 = Math.max(A0.distanceTo(B0), 1e-4);
      const d1 = A1.distanceTo(B1);
      const scaleRatio = clamp(d1 / d0, 0.4, 3.0);

      const v0 = B0.clone().sub(A0); v0.y = 0;
      const v1 = B1.clone().sub(A1); v1.y = 0;
      const a0 = Math.atan2(v0.x, v0.z);
      const a1 = Math.atan2(v1.x, v1.z);
      const yaw = a1 - a0;

      // M_new = T(m1) · R(yaw) · S(scale) · T(-m0) · M_initial
      const T1 = new THREE.Matrix4().makeTranslation(m1.x, m1.y, m1.z);
      const R = new THREE.Matrix4().makeRotationY(yaw);
      const S = new THREE.Matrix4().makeScale(scaleRatio, scaleRatio, scaleRatio);
      const Tn = new THREE.Matrix4().makeTranslation(-m0.x, -m0.y, -m0.z);

      const M = T1.multiply(R).multiply(S).multiply(Tn).multiply(grabState.initialMatrix);
      applyMatrix(M);
    }
  }

  function applyMatrix(M) {
    M.decompose(tabletop.position, tabletop.quaternion, tabletop.scale);
    // Clamp absolute scale so the user can't shrink/grow the tabletop into oblivion
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

  // ---------- aircraft selection (existing) ----------

  function select(ac) {
    if (selected && selected !== ac) setHighlight(selected, false);
    selected = ac;
    if (!ac) { card.visible = false; return; }
    setHighlight(ac, true);
    redrawCard(ac.userData);
    const p = new THREE.Vector3();
    ac.getWorldPosition(p);
    card.position.copy(p).add(new THREE.Vector3(0.18, 0.12, 0));
    card.visible = true;
  }

  function setHighlight(group, on) {
    const ring = group.userData?.stateRing;
    if (!ring) return;
    ring.material.opacity = on ? 0.95 : 0.55;
    ring.scale.setScalar(on ? 1.45 : 1.0);
  }

  function makeCard() {
    const canvas = document.createElement('canvas');
    canvas.width = 540; canvas.height = 340;
    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex, transparent: true, depthTest: false,
    }));
    sprite.scale.set(0.27, 0.17, 1);
    sprite.renderOrder = 20;
    sprite.userData = { canvas, tex };
    return sprite;
  }

  function redrawCard(data) {
    const { canvas, tex } = card.userData;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(10, 14, 22, 0.94)';
    roundRect(ctx, 0, 0, canvas.width, canvas.height, 14);
    ctx.fill();
    ctx.strokeStyle = '#58a6ff';
    ctx.lineWidth = 4;
    ctx.stroke();

    const stateColor = stateHexColor(data.state);
    ctx.fillStyle = stateColor;
    ctx.fillRect(0, 0, canvas.width, 8);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px ui-sans-serif, system-ui, sans-serif';
    ctx.textBaseline = 'top';
    ctx.fillText(data.callsign, 28, 32);

    ctx.fillStyle = stateColor;
    ctx.font = 'bold 26px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText(String(data.state).replace('_', ' '), 28, 100);

    ctx.font = '24px ui-sans-serif, system-ui, sans-serif';
    const rows = [
      ['Type',     data.type || '-'],
      ['Heading',  `${data.hdg ?? '-'}°`],
      ['Altitude', `${(data.alt ?? 0).toLocaleString()} ft`],
    ];
    rows.forEach(([k, v], i) => {
      const y = 160 + i * 42;
      ctx.fillStyle = '#7d8b9e';
      ctx.fillText(k, 28, y);
      ctx.fillStyle = '#e6edf3';
      ctx.fillText(v, 200, y);
    });

    tex.needsUpdate = true;
  }

  return { update };
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

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y,     x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x,     y + h, r);
  ctx.arcTo(x,     y + h, x,     y,     r);
  ctx.arcTo(x,     y,     x + w, y,     r);
  ctx.closePath();
}
