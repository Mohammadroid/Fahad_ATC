// Advanced-feature registry + persisted on/off flags.
//
// Each feature is a self-contained module with a uniform interface:
//   createX(deps) -> { setEnabled(bool), update(dt), dispose() }
// so any feature can be removed by deleting its module + one line in main.js.
//
// Flags live in localStorage so a controller's choices persist across sessions.

const STORAGE_PREFIX = 'fahad_atc_feat_';

export const FEATURE_DEFS = [
  { id: 'conflicts', label: 'Conflict Alerts',  default: true,  desc: 'Separation-loss warnings (STCA)' },
  { id: 'emergency', label: 'Emergency Squawk',  default: true,  desc: '7500 / 7600 / 7700 highlight' },
  { id: 'notams',    label: 'NOTAMs',            default: true,  desc: 'Closed RWY/TWY, obstacles, U/S' },
  { id: 'weather',   label: 'Weather Panel',     default: true,  desc: 'METAR + wind + active runway' },
  { id: 'strips',    label: 'Flight Strips',     default: false, desc: 'Electronic strip board' },
];

export function isEnabled(id) {
  const v = localStorage.getItem(STORAGE_PREFIX + id);
  if (v === null) {
    const def = FEATURE_DEFS.find((f) => f.id === id);
    return def ? def.default : false;
  }
  return v === '1';
}

export function setEnabled(id, on) {
  localStorage.setItem(STORAGE_PREFIX + id, on ? '1' : '0');
}
