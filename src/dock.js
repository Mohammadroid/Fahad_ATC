import * as THREE from 'three';

// PanelDock — lays out a set of panels as one continuous, uniform-height row
// that follows the tabletop. Each panel gets a header bar above it with a
// Home button (re-dock + reset size) and a Collapse button (minimise to an
// edge tab). Collapsed panels show a thin tab at the row's outer edge; click
// it to expand. Panels can still be grabbed/scaled freely (which "floats"
// them); Home re-docks them.
//
// All panels share ONE height so they align edge-to-edge into a single panel.

const HEADER_H = 0.040;
const HEADER_GAP = 0.006;
const TAB_W = 0.052;
const ROW_GAP = 0.004;

export class PanelDock {
  constructor({ scene, interaction, tabletop, offset }) {
    this.scene = scene;
    this.interaction = interaction;
    this.tabletop = tabletop;
    this.offset = offset.clone();
    this.quat = new THREE.Quaternion();
    this.entries = [];
    this.manualShift = new THREE.Vector3(); // user drag of the whole row
    this.handleGrabbed = false;
    this._makeMoveHandle();
  }

  setOrientation(q) { this.quat.copy(q); }

  // The "move all" anchor — a grip bar under the main panel. Dragging it
  // translates the entire docked row (all non-floating panels move together).
  _makeMoveHandle() {
    const canvas = document.createElement('canvas');
    canvas.width = 420; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(31, 111, 235, 0.92)';
    roundRect(ctx, 0, 0, canvas.width, canvas.height, 14); ctx.fill();
    ctx.strokeStyle = '#7dd3ff'; ctx.lineWidth = 2.5; ctx.stroke();
    // grip dots
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    for (let r = 0; r < 2; r++) for (let c = 0; c < 4; c++) {
      ctx.beginPath(); ctx.arc(28 + c * 11, 24 + r * 14, 3, 0, Math.PI * 2); ctx.fill();
    }
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 26px ui-sans-serif, system-ui, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('✥  MOVE ALL', canvas.width / 2 + 24, canvas.height / 2);
    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter; tex.anisotropy = 4;
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.30, 0.046),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
    );
    mesh.renderOrder = 18;
    const group = new THREE.Group();
    group.add(mesh);
    this.scene.add(group);
    this.moveHandle = { group, mesh };

    this.interaction.registerGrabbable(group, {
      surfaces: [mesh], kind: 'panel', minScale: 1, maxScale: 1,
      onGrabStart: () => { this.handleGrabbed = true; },
      onGrabEnd:   () => { this.handleGrabbed = false; },
    });
  }

  // cfg: { key, panel, title, accent, side:'left'|'right'|'main',
  //        collapsible:bool, isActive:()=>bool }
  add(cfg) {
    const entry = { collapsed: false, floating: false, _active: true, ...cfg };
    entry.collapsible = cfg.collapsible !== false && cfg.side !== 'main';
    entry.header = makeHeader(entry);
    entry.tab = makeTab(entry);
    this.scene.add(entry.header.group);
    this.scene.add(entry.tab.group);
    entry.tab.group.visible = false;

    // Register the panel body for grab (dragging it "floats" it).
    this.interaction.registerGrabbable(entry.panel.group, {
      surfaces: [entry.panel.mesh], kind: 'panel', minScale: 0.5, maxScale: 2.5,
      onGrabStart: () => { entry.floating = true; },
    });

    // Header buttons (always consume the click so the header isn't a drag).
    entry.header.group.userData.grabbable = true;
    entry.header.group.userData.onPinchClick = (uv) => this._headerClick(entry, uv);
    this.interaction.registerGrabbable(entry.header.group, {
      surfaces: [entry.header.mesh], kind: 'panel', minScale: 1, maxScale: 1,
    });

    // Tab click → expand.
    entry.tab.group.userData.grabbable = true;
    entry.tab.group.userData.onPinchClick = () => { this._expand(entry); return true; };
    this.interaction.registerGrabbable(entry.tab.group, {
      surfaces: [entry.tab.mesh], kind: 'panel', minScale: 1, maxScale: 1,
    });

    this.entries.push(entry);
    return entry;
  }

  _headerClick(entry, uv) {
    if (!uv) return true;
    const px = uv.x * entry.header.canvas.width;
    const py = (1 - uv.y) * entry.header.canvas.height;
    for (const r of entry.header.regions) {
      if (px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h) {
        if (r.id === 'home') this._home(entry);
        else if (r.id === 'collapse') entry.collapsed = true;
        return true;
      }
    }
    return true; // consume — header is not a drag handle
  }

  _home(entry) {
    entry.floating = false;
    entry.collapsed = false;
    entry.panel.group.scale.setScalar(1);
  }
  _expand(entry) {
    entry.collapsed = false;
    entry.floating = false;
    entry.panel.group.scale.setScalar(1);
  }

  update() {
    const main0 = this.entries.find((e) => e.side === 'main');
    const mainHalf = (main0 ? main0.panel.height : 0.5) / 2;
    const base = this.tabletop.position.clone().add(this.offset);

    // Move-all handle drives BOTH the row's position (drag with one hand) and
    // its orientation (grab with two hands and twist). While grabbed, the row
    // follows the handle's transform; otherwise the handle is parked just
    // below the main panel.
    let anchor;
    if (this.handleGrabbed) {
      this.quat.copy(this.moveHandle.group.quaternion);          // spin follows handle
      const downNow = new THREE.Vector3(0, 1, 0).applyQuaternion(this.quat)
        .multiplyScalar(-(mainHalf + 0.07));
      anchor = this.moveHandle.group.position.clone().sub(downNow);
      this.manualShift.copy(anchor).sub(base);
    } else {
      anchor = base.clone().add(this.manualShift);
      const down = new THREE.Vector3(0, 1, 0).applyQuaternion(this.quat)
        .multiplyScalar(-(mainHalf + 0.07));
      this.moveHandle.group.position.copy(anchor).add(down);
      this.moveHandle.group.quaternion.copy(this.quat);
    }

    const R = new THREE.Vector3(1, 0, 0).applyQuaternion(this.quat);
    const U = new THREE.Vector3(0, 1, 0).applyQuaternion(this.quat);

    for (const e of this.entries) {
      e._active = e.isActive ? e.isActive() : true;
      if (!e._active) { e.panel.group.visible = false; e.header.group.visible = false; e.tab.group.visible = false; }
    }

    const main = this.entries.find((e) => e.side === 'main');
    const mainW = main ? main.panel.width : 0.8;

    // Main (never collapses; can float)
    if (main && main._active) {
      if (!main.floating) this._dock(main, anchor, R, U, 0);
      else this._headerToFloating(main);
      main.panel.group.visible = !main.collapsed;
      main.header.group.visible = main.panel.group.visible;
      main.tab.group.visible = false;
    }

    const left = this.entries.filter((e) => e.side === 'left' && e._active);
    const right = this.entries.filter((e) => e.side === 'right' && e._active);

    let leftEdge = -mainW / 2;
    for (const e of left) {
      if (e.collapsed || e.floating) continue;
      const w = e.panel.width;
      const cx = leftEdge - ROW_GAP - w / 2;
      this._dock(e, anchor, R, U, cx);
      e.panel.group.visible = true; e.header.group.visible = true; e.tab.group.visible = false;
      leftEdge = cx - w / 2;
    }
    let rightEdge = mainW / 2;
    for (const e of right) {
      if (e.collapsed || e.floating) continue;
      const w = e.panel.width;
      const cx = rightEdge + ROW_GAP + w / 2;
      this._dock(e, anchor, R, U, cx);
      e.panel.group.visible = true; e.header.group.visible = true; e.tab.group.visible = false;
      rightEdge = cx + w / 2;
    }

    // Floating active panels — header follows them, no tab.
    for (const e of this.entries) {
      if (!e._active || e === main) continue;
      if (e.floating && !e.collapsed) {
        e.panel.group.visible = true;
        this._headerToFloating(e);
        e.header.group.visible = true;
        e.tab.group.visible = false;
      }
    }

    // Collapsed tabs stacked at the outer edges.
    let lx = leftEdge;
    for (const e of left) {
      if (!e.collapsed) continue;
      e.panel.group.visible = false; e.header.group.visible = false;
      const cx = lx - ROW_GAP - TAB_W / 2;
      this._placeTab(e, anchor, R, cx);
      e.tab.group.visible = true;
      lx = cx - TAB_W / 2;
    }
    let rx = rightEdge;
    for (const e of right) {
      if (!e.collapsed) continue;
      e.panel.group.visible = false; e.header.group.visible = false;
      const cx = rx + ROW_GAP + TAB_W / 2;
      this._placeTab(e, anchor, R, cx);
      e.tab.group.visible = true;
      rx = cx + TAB_W / 2;
    }
  }

  _dock(e, anchor, R, U, xOffset) {
    e.panel.group.position.copy(anchor).addScaledVector(R, xOffset);
    e.panel.group.quaternion.copy(this.quat);
    e.panel.group.scale.setScalar(1);
    e.header.group.position.copy(e.panel.group.position)
      .addScaledVector(U, e.panel.height / 2 + HEADER_GAP + HEADER_H / 2);
    e.header.group.quaternion.copy(this.quat);
  }

  _headerToFloating(e) {
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(e.panel.group.quaternion);
    const h = e.panel.height * e.panel.group.scale.y;
    e.header.group.position.copy(e.panel.group.position)
      .addScaledVector(up, h / 2 + HEADER_GAP + HEADER_H / 2);
    e.header.group.quaternion.copy(e.panel.group.quaternion);
  }

  _placeTab(e, anchor, R, xOffset) {
    e.tab.group.position.copy(anchor).addScaledVector(R, xOffset);
    e.tab.group.quaternion.copy(this.quat);
  }
}

// ---- header + tab meshes ----

function makeHeader(entry) {
  const canvas = document.createElement('canvas');
  canvas.width = 480; canvas.height = 58;
  const ctx = canvas.getContext('2d');
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter; tex.anisotropy = 4;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(entry.panel.width, HEADER_H),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
  );
  mesh.renderOrder = 16;
  const group = new THREE.Group();
  group.add(mesh);

  const regions = [];
  // Background
  ctx.fillStyle = 'rgba(14, 20, 30, 0.96)';
  roundRect(ctx, 0, 0, canvas.width, canvas.height, 10); ctx.fill();
  ctx.strokeStyle = entry.accent || '#4499ff'; ctx.lineWidth = 2; ctx.stroke();
  // Title
  ctx.fillStyle = '#e6edf3';
  ctx.font = 'bold 24px ui-sans-serif, system-ui, sans-serif';
  ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
  ctx.fillText(entry.title, 16, canvas.height / 2);
  // Buttons (right side): home, then collapse
  let bx = canvas.width - 14;
  const bs = 40, by = (canvas.height - bs) / 2;
  if (entry.collapsible) {
    bx -= bs;
    regions.push({ id: 'collapse', x: bx, y: by, w: bs, h: bs });
    drawBtn(ctx, bx, by, bs, 'collapse', entry.accent);
    bx -= bs + 8;
  }
  regions.push({ id: 'home', x: bx, y: by, w: bs, h: bs });
  drawBtn(ctx, bx, by, bs, 'home', entry.accent);

  tex.needsUpdate = true;
  return { group, mesh, canvas, regions };
}

function drawBtn(ctx, x, y, s, kind, accent) {
  ctx.fillStyle = 'rgba(40, 52, 70, 0.9)';
  roundRect(ctx, x, y, s, s, 8); ctx.fill();
  ctx.strokeStyle = accent || '#4499ff'; ctx.lineWidth = 1.5; ctx.stroke();
  ctx.strokeStyle = '#e6edf3'; ctx.lineWidth = 2.5;
  const cx = x + s / 2, cy = y + s / 2;
  if (kind === 'home') {
    // house glyph
    ctx.beginPath();
    ctx.moveTo(cx - 9, cy + 1); ctx.lineTo(cx, cy - 9); ctx.lineTo(cx + 9, cy + 1);
    ctx.stroke();
    ctx.strokeRect(cx - 6, cy + 1, 12, 8);
  } else {
    // collapse: minus / chevron
    ctx.beginPath();
    ctx.moveTo(cx - 8, cy); ctx.lineTo(cx + 8, cy);
    ctx.stroke();
  }
}

function makeTab(entry) {
  const TAB_H = 0.16;
  const canvas = document.createElement('canvas');
  canvas.width = 80; canvas.height = 240;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(14, 20, 30, 0.96)';
  roundRect(ctx, 2, 2, canvas.width - 4, canvas.height - 4, 12); ctx.fill();
  ctx.strokeStyle = entry.accent || '#4499ff'; ctx.lineWidth = 3; ctx.stroke();
  // Vertical title
  ctx.save();
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = '#e6edf3';
  ctx.font = 'bold 26px ui-sans-serif, system-ui, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(entry.title, 0, -6);
  ctx.fillStyle = entry.accent || '#4499ff';
  ctx.font = '22px ui-sans-serif, sans-serif';
  ctx.fillText('▸', 0, 24);
  ctx.restore();
  const tex = new THREE.CanvasTexture(canvas);
  tex.minFilter = THREE.LinearFilter; tex.anisotropy = 4;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(TAB_W, TAB_H),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
  );
  mesh.renderOrder = 17;
  const group = new THREE.Group();
  group.add(mesh);
  return { group, mesh, canvas };
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
