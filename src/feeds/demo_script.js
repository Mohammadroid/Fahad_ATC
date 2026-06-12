import { latLonToTab } from '../airport.js';

// Choreographed 5-minute demo, scripted DIRECTLY in tabletop world
// coordinates (linear 1/5000 space — the same frame the airport geometry is
// rendered in). No geo→display compression is involved, so straight lines
// stay straight and speeds look constant. Heading is derived at runtime from
// the motion vector, so the nose always points where the aircraft is going.
//
// Waypoint: { t, p:[x,z], y, state, alt, speed_kt }
//   t        — demo seconds
//   p        — tabletop world XZ
//   y        — render height in world units (visual altitude)
//   state    — ATC state for the segment STARTING at this waypoint
//   alt      — displayed altitude (ft) for the card / lists
//   speed_kt — displayed speed for the card
//
// Runway occupancy (no overlaps):
//   33L: KAC101 land 45-60 · QTR1078 roll 115-127 · KAC411 land 180-195 · KAC415 roll 245-257
//   33R: JZR506 roll 50-62  · UAE855 land 115-130 · FDB061 roll 180-192  · JZR223 land 240-255

export const DEMO_CYCLE_SECONDS = 300;

// Real OKBK runway geometry (OSM) → tabletop world coords.
function runway(thrLat, thrLon, endLat, endLon) {
  const [tx, tz] = latLonToTab(thrLat, thrLon);
  const [ex, ez] = latLonToTab(endLat, endLon);
  const dx = ex - tx, dz = ez - tz;
  const len = Math.hypot(dx, dz);
  const u = [dx / len, dz / len];          // unit vector: threshold → far end
  const perp = [-u[1], u[0]];              // 90° left of u (east side for the 33s)
  return { thr: [tx, tz], end: [ex, ez], u, perp, len };
}

const RWY_33L = runway(29.2127, 47.9763, 29.2405, 47.9615); // middle runway
const RWY_33R = runway(29.2126, 47.9986, 29.2412, 47.9834); // east runway

// Gate positions on the terminal apron (east of 33L) → world coords.
const GATE_LL = [
  [29.2320, 47.9840], [29.2335, 47.9855], [29.2300, 47.9850],
  [29.2345, 47.9870], [29.2290, 47.9875], [29.2330, 47.9825],
  [29.2310, 47.9865], [29.2350, 47.9845],
];
const GATES = GATE_LL.map(([la, lo]) => latLonToTab(la, lo));

// p + u*k  (2-vector helper)
const along = (p, u, k) => [p[0] + u[0] * k, p[1] + u[1] * k];

const GROUND_Y = 0.006;

// ---------------------------------------------------------------------------
// Arrival: glide in along the extended centerline, touch down, roll out,
// taxi to gate, park until end of cycle.
function arrival({ callsign, type, origin, gate, rwy, entryT, touchdownT, parkT }) {
  const appStart   = along(rwy.thr, rwy.u, -0.50);   // 0.50 wu behind threshold
  const shortFinal = along(rwy.thr, rwy.u, -0.12);
  const rollEnd    = along(rwy.thr, rwy.u,  0.40);
  const g          = GATES[gate];
  const finalT     = touchdownT - 12;                // short-final fix
  const rollT      = touchdownT + 15;
  const taxiMidT   = (rollT + parkT) / 2;
  const taxiMid    = [(rollEnd[0] + g[0]) / 2, (rollEnd[1] + g[1]) / 2];

  return {
    callsign, type, origin, destination: 'OKBK',
    birth: entryT, death: DEMO_CYCLE_SECONDS - 2,
    script: [
      { t: entryT,     p: appStart,   y: 0.150,    state: 'AIRBORNE_IN', alt: 8000, speed_kt: 230 },
      { t: finalT,     p: shortFinal, y: 0.040,    state: 'AIRBORNE_IN', alt: 1200, speed_kt: 155 },
      { t: touchdownT, p: rwy.thr,    y: GROUND_Y, state: 'CLEARED',     alt: 0,    speed_kt: 140 },
      { t: rollT,      p: rollEnd,    y: GROUND_Y, state: 'TAXI',        alt: 0,    speed_kt: 25 },
      { t: taxiMidT,   p: taxiMid,    y: GROUND_Y, state: 'TAXI',        alt: 0,    speed_kt: 15 },
      { t: parkT,      p: g,          y: GROUND_Y, state: 'PARKED',      alt: 0,    speed_kt: 0 },
      { t: DEMO_CYCLE_SECONDS, p: g,  y: GROUND_Y, state: 'PARKED',      alt: 0,    speed_kt: 0 },
    ],
  };
}

// ---------------------------------------------------------------------------
// Departure: parked at gate, taxi to hold-short beside the threshold, line
// up, take off, climb straight out, leave the table.
function departure({ callsign, type, destination, gate, rwy, pushT, holdT, rollT, exitT }) {
  const g         = GATES[gate];
  const holdShort = along(along(rwy.thr, rwy.u, 0.02), rwy.perp, -0.035); // beside thr
  const liftoff   = along(rwy.thr, rwy.u, 0.35);
  const exitP     = along(rwy.thr, rwy.u, 1.05);
  const lineupT   = holdT + 6;
  const liftoffT  = rollT + 12;

  return {
    callsign, type, origin: 'OKBK', destination,
    birth: 0, death: exitT,
    script: [
      { t: 0,        p: g,          y: GROUND_Y, state: 'PARKED',       alt: 0,     speed_kt: 0 },
      { t: pushT,    p: g,          y: GROUND_Y, state: 'TAXI',         alt: 0,     speed_kt: 0 },
      { t: holdT,    p: holdShort,  y: GROUND_Y, state: 'QUEUED',       alt: 0,     speed_kt: 14 },
      { t: lineupT,  p: rwy.thr,    y: GROUND_Y, state: 'QUEUED',       alt: 0,     speed_kt: 8 },
      { t: rollT,    p: rwy.thr,    y: GROUND_Y, state: 'CLEARED',      alt: 0,     speed_kt: 40 },
      { t: liftoffT, p: liftoff,    y: 0.015,    state: 'AIRBORNE_OUT', alt: 300,   speed_kt: 165 },
      { t: exitT,    p: exitP,      y: 0.160,    state: 'AIRBORNE_OUT', alt: 16000, speed_kt: 330 },
    ],
  };
}

// ---------------------------------------------------------------------------

export function buildDemoAircraft() {
  return [
    // Arrivals — alternating runways, one on approach almost continuously.
    arrival({ callsign: 'KAC101', type: 'B772', origin: 'LHR', gate: 0, rwy: RWY_33L, entryT: 2,   touchdownT: 45,  parkT: 85 }),
    arrival({ callsign: 'UAE855', type: 'B77W', origin: 'DXB', gate: 3, rwy: RWY_33R, entryT: 70,  touchdownT: 115, parkT: 155 }),
    arrival({ callsign: 'KAC411', type: 'B788', origin: 'BOM', gate: 5, rwy: RWY_33L, entryT: 135, touchdownT: 180, parkT: 220 }),
    arrival({ callsign: 'JZR223', type: 'A320', origin: 'BEY', gate: 7, rwy: RWY_33R, entryT: 195, touchdownT: 240, parkT: 280 }),
    // Departures — interleaved on the opposite runway of whoever is landing.
    departure({ callsign: 'JZR506',  type: 'A320', destination: 'DOH', gate: 1, rwy: RWY_33R, pushT: 10,  holdT: 40,  rollT: 50,  exitT: 110 }),
    departure({ callsign: 'QTR1078', type: 'B788', destination: 'DOH', gate: 2, rwy: RWY_33L, pushT: 75,  holdT: 105, rollT: 115, exitT: 175 }),
    departure({ callsign: 'FDB061',  type: 'B738', destination: 'DXB', gate: 4, rwy: RWY_33R, pushT: 140, holdT: 170, rollT: 180, exitT: 240 }),
    departure({ callsign: 'KAC415',  type: 'A332', destination: 'DEL', gate: 6, rwy: RWY_33L, pushT: 205, holdT: 235, rollT: 245, exitT: 298 }),
  ];
}
