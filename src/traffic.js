import * as THREE from 'three';
import { SCALE } from './airport.js';
import { buildAircraftGroup } from './aircraft.js';

// Sandbox fleet — representative mix of Kuwait-region carriers and states.
const FLEET = [
  { callsign: 'KAC101',  type: 'B772', state: 'AIRBORNE_IN',  alt: 8000,  hdg: 333 },
  { callsign: 'KAC512',  type: 'A320', state: 'AIRBORNE_OUT', alt: 4500,  hdg: 153 },
  { callsign: 'JZR223',  type: 'A320', state: 'TAXI',         alt: 0,     hdg: 90  },
  { callsign: 'JZR318',  type: 'A320', state: 'QUEUED',       alt: 0,     hdg: 333 },
  { callsign: 'UAE855',  type: 'B77W', state: 'CLEARED',      alt: 0,     hdg: 153 },
  { callsign: 'QTR1077', type: 'A359', state: 'PARKED',       alt: 0,     hdg: 0   },
  { callsign: 'KAC788',  type: 'B788', state: 'AIRBORNE_IN',  alt: 12000, hdg: 333 },
  { callsign: 'FDB061',  type: 'B738', state: 'AIRBORNE_OUT', alt: 6500,  hdg: 153 },
];

const TABLE_HALF_X = 0.78;
const TABLE_HALF_Z = 0.58;

export class TrafficSimulator {
  constructor(parent) {
    this.parent = parent;
    this.aircraft = FLEET.map((data) => this.spawn(data));
  }

  spawn(data) {
    const group = buildAircraftGroup(data);
    const altLift = data.alt > 0 ? 0.04 + (data.alt / 12000) * 0.10 : 0.005;
    group.position.set(
      (Math.random() - 0.5) * TABLE_HALF_X * 1.6,
      altLift,
      (Math.random() - 0.5) * TABLE_HALF_Z * 1.6
    );
    this.parent.add(group);
    return group;
  }

  update(dt) {
    for (const ac of this.aircraft) {
      const speed = stateSpeed(ac.userData.state);
      if (speed === 0) continue;
      const fwd = new THREE.Vector3(0, 0, speed * dt * SCALE);
      fwd.applyEuler(new THREE.Euler(0, ac.rotation.y, 0));
      ac.position.add(fwd);

      // Wrap when leaving tabletop bounds
      if (ac.position.x >  TABLE_HALF_X) ac.position.x = -TABLE_HALF_X;
      if (ac.position.x < -TABLE_HALF_X) ac.position.x =  TABLE_HALF_X;
      if (ac.position.z >  TABLE_HALF_Z) ac.position.z = -TABLE_HALF_Z;
      if (ac.position.z < -TABLE_HALF_Z) ac.position.z =  TABLE_HALF_Z;
    }
  }
}

function stateSpeed(state) {
  // Real-world m/s; scaled by SCALE in update()
  switch (state) {
    case 'PARKED':       return 0;
    case 'TAXI':         return 8;     // ~15 kt ground speed
    case 'QUEUED':       return 0;
    case 'CLEARED':      return 35;    // takeoff roll
    case 'AIRBORNE_OUT': return 200;   // ~390 kt climb
    case 'AIRBORNE_IN':  return 130;   // ~250 kt approach
    default:             return 0;
  }
}
