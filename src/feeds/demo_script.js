// Choreographed 5-minute demo. Six aircraft on a fixed schedule with
// well-defined runway assignments so they never conflict on the same runway
// at the same time.
//
// Each aircraft has a list of waypoints {t, lat, lon, alt, hdg, state, speed_kt}.
// The animator linearly interpolates between consecutive waypoints. State
// strings come from the LATEST waypoint with t <= current time, so transitions
// happen exactly at the waypoint timestamps.
//
// Runway use timeline (no overlaps):
//   33L:  30–40 JZR506 take-off · 95–115 KAC101 land · 235–255 KAC411 land
//   33R:  55–65 FDB061 take-off · 140–160 UAE855 land · 250–265 KAC415 take-off

const OKBK = { lat: 29.2266, lon: 47.9689 };
const COS_LAT = Math.cos(OKBK.lat * Math.PI / 180);

// Real OKBK thresholds (from OSM)
const RWY = {
  '33L': { lat: 29.2127, lon: 47.9763, hdg: 335 }, // middle runway, south thr
  '33R': { lat: 29.2126, lon: 47.9986, hdg: 335 }, // east runway, south thr
  '15L': { lat: 29.2412, lon: 47.9834, hdg: 155 }, // east runway, north thr
  '15R': { lat: 29.2405, lon: 47.9615, hdg: 155 }, // middle runway, north thr
};

// Synthetic gate positions near the terminal apron (between the two civilian
// runways, on the east apron).
const GATES = {
  G1: { lat: 29.2320, lon: 47.9840 },
  G2: { lat: 29.2335, lon: 47.9855 },
  G3: { lat: 29.2300, lon: 47.9850 },
  G4: { lat: 29.2345, lon: 47.9870 },
  G5: { lat: 29.2290, lon: 47.9875 },
  G6: { lat: 29.2330, lon: 47.9825 },
};

// Move from (lat, lon) by `distKm` along compass bearing `bDeg`.
function offset(lat, lon, bDeg, distKm) {
  const r = bDeg * Math.PI / 180;
  return {
    lat: lat + (distKm * Math.cos(r)) / 111.32,
    lon: lon + (distKm * Math.sin(r)) / (111.32 * Math.cos(lat * Math.PI / 180)),
  };
}

function rolloutEnd(rwy, lengthKm = 1.2) {
  return offset(rwy.lat, rwy.lon, rwy.hdg, lengthKm);
}

function liftoffPoint(rwy, lengthKm = 1.6) {
  return offset(rwy.lat, rwy.lon, rwy.hdg, lengthKm);
}

// Build an OUTBOUND aircraft script (parked → taxi → take-off → climb-out).
function buildOutbound({
  callsign, type, origin, destination,
  gate, runway,
  pushbackT, holdShortT, takeoffT, liftoffT, exitT,
}) {
  const g = GATES[gate];
  const rwy = RWY[runway];

  // Hold-short point: just south-east of the threshold on the taxiway.
  const holdShort = offset(rwy.lat, rwy.lon, rwy.hdg + 180, 0.05);
  const liftoff = liftoffPoint(rwy, 1.6);
  const climb1   = offset(liftoff.lat, liftoff.lon, rwy.hdg, 15);
  const climb2   = offset(liftoff.lat, liftoff.lon, rwy.hdg, 35);
  const exit     = offset(liftoff.lat, liftoff.lon, rwy.hdg, 70);

  // Hdg from gate toward hold-short for the taxi leg
  const dxKm = (holdShort.lon - g.lon) * 111.32 * COS_LAT;
  const dyKm = (holdShort.lat - g.lat) * 111.32;
  const taxiHdg = Math.round(((Math.atan2(dxKm, dyKm) * 180 / Math.PI) + 360) % 360);

  return {
    callsign, type, origin, destination,
    birth: 0,
    death: exitT,
    script: [
      { t: 0,             lat: g.lat,         lon: g.lon,         alt: 0,     hdg: 270,    state: 'PARKED',       speed_kt: 0 },
      { t: pushbackT,     lat: g.lat,         lon: g.lon,         alt: 0,     hdg: 270,    state: 'PARKED',       speed_kt: 0 },
      { t: pushbackT + 8, lat: holdShort.lat, lon: holdShort.lon, alt: 0,     hdg: taxiHdg, state: 'TAXI',        speed_kt: 12 },
      { t: holdShortT,    lat: holdShort.lat, lon: holdShort.lon, alt: 0,     hdg: rwy.hdg, state: 'QUEUED',      speed_kt: 0 },
      { t: takeoffT,      lat: rwy.lat,       lon: rwy.lon,       alt: 0,     hdg: rwy.hdg, state: 'CLEARED',     speed_kt: 30 },
      { t: liftoffT,      lat: liftoff.lat,   lon: liftoff.lon,   alt: 50,    hdg: rwy.hdg, state: 'AIRBORNE_OUT', speed_kt: 160 },
      { t: liftoffT + 25, lat: climb1.lat,    lon: climb1.lon,    alt: 4000,  hdg: rwy.hdg, state: 'AIRBORNE_OUT', speed_kt: 240 },
      { t: liftoffT + 55, lat: climb2.lat,    lon: climb2.lon,    alt: 11000, hdg: rwy.hdg, state: 'AIRBORNE_OUT', speed_kt: 320 },
      { t: exitT,         lat: exit.lat,      lon: exit.lon,      alt: 24000, hdg: rwy.hdg, state: 'AIRBORNE_OUT', speed_kt: 400 },
    ],
  };
}

// Build an INBOUND aircraft script (far → final → touchdown → taxi → park).
// All approach waypoints sit on the extended runway centerline so the aircraft
// flies straight in. `entryBearing` is no longer used — it caused waypoints to
// zig-zag across the runway and the aircraft visibly flew backwards.
function buildInbound({
  callsign, type, origin, destination,
  gate, runway,
  entryT, finalT, touchdownT, parkT, deathT,
}) {
  const g = GATES[gate];
  const rwy = RWY[runway];
  const reverseHdg = (rwy.hdg + 180) % 360;

  // Aircraft on a straight-in approach: all points behind the threshold along
  // the reverse runway heading (i.e. SE for landing on the 33s, NW for 15s).
  const farPoint   = offset(rwy.lat, rwy.lon, reverseHdg, 85);
  const midPoint   = offset(rwy.lat, rwy.lon, reverseHdg, 35);
  const finalPoint = offset(rwy.lat, rwy.lon, reverseHdg, 9);
  const touchdown  = { lat: rwy.lat, lon: rwy.lon };
  const rolledOut  = rolloutEnd(rwy, 1.4);
  // Taxi mid-point between rollout end and gate.
  const taxiMid = {
    lat: (rolledOut.lat + g.lat) / 2,
    lon: (rolledOut.lon + g.lon) / 2,
  };

  return {
    callsign, type, origin, destination,
    birth: entryT,
    death: deathT,
    script: [
      { t: entryT,               lat: farPoint.lat,   lon: farPoint.lon,   alt: 13000, hdg: rwy.hdg, state: 'AIRBORNE_IN', speed_kt: 320 },
      { t: (entryT + finalT)/2,  lat: midPoint.lat,   lon: midPoint.lon,   alt: 6000,  hdg: rwy.hdg, state: 'AIRBORNE_IN', speed_kt: 240 },
      { t: finalT,               lat: finalPoint.lat, lon: finalPoint.lon, alt: 800,   hdg: rwy.hdg, state: 'AIRBORNE_IN', speed_kt: 160 },
      { t: touchdownT,           lat: touchdown.lat,  lon: touchdown.lon,  alt: 0,     hdg: rwy.hdg, state: 'CLEARED',     speed_kt: 135 },
      { t: touchdownT + 12,      lat: rolledOut.lat,  lon: rolledOut.lon,  alt: 0,     hdg: rwy.hdg, state: 'TAXI',        speed_kt: 30 },
      { t: touchdownT + 22,      lat: taxiMid.lat,    lon: taxiMid.lon,    alt: 0,     hdg: 90,      state: 'TAXI',        speed_kt: 15 },
      { t: parkT,                lat: g.lat,          lon: g.lon,          alt: 0,     hdg: 270,     state: 'PARKED',      speed_kt: 0 },
      { t: deathT,               lat: g.lat,          lon: g.lon,          alt: 0,     hdg: 270,     state: 'PARKED',      speed_kt: 0 },
    ],
  };
}

export const DEMO_CYCLE_SECONDS = 300;

export function buildDemoAircraft() {
  return [
    // ---- OUTBOUNDS ----
    buildOutbound({
      callsign: 'JZR506', type: 'A320', origin: 'OKBK', destination: 'DOH',
      gate: 'G1', runway: '33L',
      pushbackT: 5, holdShortT: 25, takeoffT: 30, liftoffT: 45, exitT: 180,
    }),
    buildOutbound({
      callsign: 'FDB061', type: 'B738', origin: 'OKBK', destination: 'DXB',
      gate: 'G2', runway: '33R',
      pushbackT: 25, holdShortT: 50, takeoffT: 55, liftoffT: 70, exitT: 200,
    }),
    buildOutbound({
      callsign: 'KAC415', type: 'A332', origin: 'OKBK', destination: 'DEL',
      gate: 'G3', runway: '33R',
      pushbackT: 215, holdShortT: 245, takeoffT: 250, liftoffT: 265, exitT: 295,
    }),
    // ---- INBOUNDS ----
    buildInbound({
      callsign: 'KAC101', type: 'B772', origin: 'LHR', destination: 'OKBK',
      gate: 'G4', runway: '33L',
      entryT: 20, finalT: 80, touchdownT: 100, parkT: 150, deathT: 295,
    }),
    buildInbound({
      callsign: 'UAE855', type: 'B77W', origin: 'DXB', destination: 'OKBK',
      gate: 'G5', runway: '33R',
      entryT: 70, finalT: 130, touchdownT: 145, parkT: 195, deathT: 295,
    }),
    buildInbound({
      callsign: 'KAC411', type: 'B788', origin: 'BOM', destination: 'OKBK',
      gate: 'G6', runway: '33L',
      entryT: 165, finalT: 225, touchdownT: 240, parkT: 285, deathT: 295,
    }),
  ];
}
