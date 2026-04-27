#!/usr/bin/env node
// Analyse each bundled glTF airliner to determine its native orientation
// (which axis is forward / up) and emit a rotation config so we can render
// every aircraft with nose along world +Z and belly along world -Y.
//
// Heuristic:
//   - Smallest bbox axis ≈ vertical (height); the others are length & wingspan.
//   - Length axis = the larger of the two non-vertical axes.
//   - The TAIL end of the length axis has greater vertical spread than the
//     nose (vertical stabiliser sticks up at the tail). We compare slices at
//     each end and infer nose direction from the smaller-spread end.

import fs from 'node:fs/promises';
import path from 'node:path';

async function loadGlb(filepath) {
  const buf = await fs.readFile(filepath);
  if (buf.readUInt32LE(0) !== 0x46546c67) throw new Error('not a glb');
  const jsonLen = buf.readUInt32LE(12);
  const json = JSON.parse(buf.slice(20, 20 + jsonLen).toString());
  const chunk1Start = 20 + jsonLen;
  const binLen = buf.readUInt32LE(chunk1Start);
  const bin = buf.slice(chunk1Start + 8, chunk1Start + 8 + binLen);
  return { json, bin };
}

function getPositions(json, bin) {
  const out = [];
  for (const mesh of json.meshes || []) {
    for (const prim of mesh.primitives || []) {
      const accIdx = prim.attributes?.POSITION;
      if (accIdx == null) continue;
      const acc = json.accessors[accIdx];
      const bv = json.bufferViews[acc.bufferView];
      const offset = (bv.byteOffset || 0) + (acc.byteOffset || 0);
      // VEC3 floats
      const arr = new Float32Array(bin.buffer, bin.byteOffset + offset, acc.count * 3);
      out.push(arr);
    }
  }
  return out;
}

function analyse(filepath) {
  return loadGlb(filepath).then(({ json, bin }) => {
    const arrs = getPositions(json, bin);
    let mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
    const points = [];
    for (const arr of arrs) {
      for (let i = 0; i < arr.length; i += 3) {
        const p = [arr[i], arr[i + 1], arr[i + 2]];
        points.push(p);
        for (let a = 0; a < 3; a++) {
          if (p[a] < mn[a]) mn[a] = p[a];
          if (p[a] > mx[a]) mx[a] = p[a];
        }
      }
    }
    const size = [mx[0] - mn[0], mx[1] - mn[1], mx[2] - mn[2]];

    // Smallest axis = vertical (height)
    const verticalIdx = size.indexOf(Math.min(...size));
    const others = [0, 1, 2].filter((i) => i !== verticalIdx);

    // Determine length axis by asymmetry of vertical spread.
    // For a candidate axis, slice both ends and measure vertical (height) spread.
    // The LENGTH axis has asymmetric spread (tail's vertical stabilizer >> nose's
    // tapered cone). The SPAN axis is left/right symmetric, so spreads are equal.
    function vSpreadAt(lengthIdx, lo, hi) {
      let vMin = Infinity, vMax = -Infinity;
      for (const p of points) {
        if (p[lengthIdx] < lo || p[lengthIdx] > hi) continue;
        if (p[verticalIdx] < vMin) vMin = p[verticalIdx];
        if (p[verticalIdx] > vMax) vMax = p[verticalIdx];
      }
      return vMax - vMin;
    }
    function asymmetryOf(lengthIdx) {
      const slice = size[lengthIdx] * 0.18;
      const s = vSpreadAt(lengthIdx, mn[lengthIdx], mn[lengthIdx] + slice);
      const e = vSpreadAt(lengthIdx, mx[lengthIdx] - slice, mx[lengthIdx]);
      return { s, e, asym: Math.abs(s - e) / Math.max(s, e, 1e-9) };
    }
    const candA = asymmetryOf(others[0]);
    const candB = asymmetryOf(others[1]);
    const lengthIdx = candA.asym >= candB.asym ? others[0] : others[1];
    const spanIdx = lengthIdx === others[0] ? others[1] : others[0];
    const { s: startEnd_spread, e: endEnd_spread } = lengthIdx === others[0] ? candA : candB;
    const startEnd = { spread: startEnd_spread };
    const endEnd = { spread: endEnd_spread };

    // Tail end = the side with larger vertical spread. Nose = opposite.
    const tailAtMax = endEnd.spread > startEnd.spread;
    const noseDir = tailAtMax ? -1 : +1; // sign along lengthIdx

    // Up direction: which side of vertical axis has the wheels / belly?
    // For Y-up airliners, belly is at low Y (negative). For Z-up, low Z.
    // Heuristic: belly is whichever end of vertical axis has more points
    // (cabin floor is densely sampled, top of cabin less so).
    function pointsBelow(threshold) {
      let n = 0;
      const v = verticalIdx;
      for (const p of points) if (p[v] < threshold) n++;
      return n;
    }
    const mid = (mn[verticalIdx] + mx[verticalIdx]) / 2;
    const belowMid = pointsBelow(mid);
    const totalPts = points.length;
    const bellyAtMin = belowMid > totalPts / 2;
    const upDir = bellyAtMin ? +1 : -1; // sign along verticalIdx

    // Compute rotation so length axis → +Z (forward), vertical axis → +Y (up).
    // Three Euler angles to pick: depends on which axes the model uses.
    const axisName = ['x', 'y', 'z'];
    const rotation = computeRotation(lengthIdx, noseDir, verticalIdx, upDir);

    return {
      file: path.basename(filepath),
      size: size.map((s) => +s.toFixed(2)),
      lengthAxis:   `${noseDir > 0 ? '+' : '-'}${axisName[lengthIdx]}`,
      verticalAxis: `${upDir   > 0 ? '+' : '-'}${axisName[verticalIdx]}`,
      spanAxis:     axisName[spanIdx],
      vSpreadStart: +startEnd.spread.toFixed(2),
      vSpreadEnd:   +endEnd.spread.toFixed(2),
      rotation,
    };
  });
}

// Compute Euler XYZ rotation (degrees) to map (length, vertical) → (+Z, +Y).
function computeRotation(lengthIdx, noseDir, verticalIdx, upDir) {
  // Build rotation table for the 12 valid combinations.
  // We express the desired transform: model's length-axis goes to +Z, vertical-axis goes to +Y.
  const cases = {
    // forward: +X
    'x+,y+': [0,  -90, 0],   'x+,y-': [180, -90, 0],
    'x+,z+': [-90, -90, 0],  'x+,z-': [90, -90, 0],
    // forward: -X
    'x-,y+': [0,   90, 0],   'x-,y-': [180,  90, 0],
    'x-,z+': [-90,  90, 0],  'x-,z-': [90,  90, 0],
    // forward: +Y
    'y+,x+': [0,    0,-90],  'y+,x-': [0,  180,-90],
    'y+,z+': [-90,  0,  0],  'y+,z-': [-90,180,  0],  // common Z-up model: vertical=Z, forward=Y? unusual
    // forward: -Y
    'y-,x+': [0,    0, 90],  'y-,x-': [0,  180, 90],
    'y-,z+': [90,   0,  0],  'y-,z-': [90, 180,  0],
    // forward: +Z (already aligned)
    'z+,x+': [0,    0,-90],  'z+,x-': [0,  180,-90],
    'z+,y+': [0,    0,  0],  'z+,y-': [180,  0,  0],
    // forward: -Z (flip 180 about Y)
    'z-,x+': [0,    0, 90],  'z-,x-': [0,  180, 90],
    'z-,y+': [0,  180,  0],  'z-,y-': [180,180,  0],
  };
  const axisName = ['x', 'y', 'z'];
  const key = `${axisName[lengthIdx]}${noseDir > 0 ? '+' : '-'},${axisName[verticalIdx]}${upDir > 0 ? '+' : '-'}`;
  return cases[key] || [0, 0, 0];
}

const files = ['b747.glb', 'b787.glb', 'airliner_gear.glb', 'airliner_detail.glb'];
const results = [];
for (const f of files) {
  const r = await analyse(`public/models/${f}`);
  results.push(r);
  console.log(JSON.stringify(r, null, 2));
}

console.log('\n// Paste into aircraft.js MODEL_ORIENT:');
console.log('const MODEL_ORIENT = {');
for (const r of results) {
  const [rx, ry, rz] = r.rotation;
  console.log(`  '${r.file}': { rx: ${rx}, ry: ${ry}, rz: ${rz} },  // length=${r.lengthAxis} up=${r.verticalAxis}`);
}
console.log('};');
