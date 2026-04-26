import * as THREE from 'three';

// Pinch-to-select: on a hand 'selectstart' event (which fires for the pinch
// gesture in WebXR hand tracking), find the aircraft nearest to the index
// fingertip within a small radius and pop a flight-strip card next to it.
export function setupInteraction({ scene, tabletop, hands, traffic }) {
  const tmp = new THREE.Vector3();
  let selected = null;
  const card = makeCard();
  scene.add(card);
  card.visible = false;

  for (const hand of hands) {
    hand.addEventListener('selectstart', () => onPinch(hand));
  }

  function onPinch(hand) {
    const tip = hand.joints?.['index-finger-tip'];
    if (!tip) return;
    tip.getWorldPosition(tmp);

    let best = null;
    let bestDist = 0.06; // 6 cm pinch radius
    for (const ac of traffic.aircraft) {
      const acPos = ac.getWorldPosition(new THREE.Vector3());
      const d = acPos.distanceTo(tmp);
      if (d < bestDist) { best = ac; bestDist = d; }
    }
    select(best);
  }

  function select(ac) {
    if (selected && selected !== ac) {
      selected.children[0].material.emissiveIntensity = 0.5;
    }
    selected = ac;
    if (!ac) { card.visible = false; return; }
    ac.children[0].material.emissiveIntensity = 1.6;
    redrawCard(ac.userData);
    ac.getWorldPosition(tmp);
    card.position.copy(tmp).add(new THREE.Vector3(0.18, 0.08, 0));
    card.visible = true;
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

    // Card background
    ctx.fillStyle = 'rgba(10, 14, 22, 0.94)';
    roundRect(ctx, 0, 0, canvas.width, canvas.height, 14);
    ctx.fill();
    ctx.strokeStyle = '#58a6ff';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Header strip with state color
    const stateColor = stateHexColor(data.state);
    ctx.fillStyle = stateColor;
    ctx.fillRect(0, 0, canvas.width, 8);

    // Callsign
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 56px ui-sans-serif, system-ui, sans-serif';
    ctx.textBaseline = 'top';
    ctx.fillText(data.callsign, 28, 32);

    // State badge
    ctx.fillStyle = stateColor;
    ctx.font = 'bold 26px ui-sans-serif, system-ui, sans-serif';
    ctx.fillText(data.state.replace('_', ' '), 28, 100);

    // Detail rows
    ctx.fillStyle = '#a8c4ff';
    ctx.font = '24px ui-sans-serif, system-ui, sans-serif';
    const rows = [
      ['Type',     data.type],
      ['Heading',  `${data.hdg}°`],
      ['Altitude', `${data.alt.toLocaleString()} ft`],
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

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y,     x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x,     y + h, r);
  ctx.arcTo(x,     y + h, x,     y,     r);
  ctx.arcTo(x,     y,     x + w, y,     r);
  ctx.closePath();
}
