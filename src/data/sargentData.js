// src/data/sargentData.js
import { series8300, series8400, series8500, series8600, series8700, series8800, series8900 } from './sargent/series/series80';
import { seriesPE8300, seriesPE8400, seriesPE8500, seriesPE8600, seriesPE8700, seriesPE8800, seriesPE8900 } from './sargent/series/seriesPE80';
import { series9400, series9700, series9800, series9900 } from './sargent/series/series90';
import { series8200Locks, series7800Locks, series9200Locks } from './sargent/series/mortiseLocks';
import { series10XLine, series11Line, series6Line, series7Line, series8XLine, series6500Line } from './sargent/series/boredLocks';
import { mullions } from './sargent/series/mullions'; // <-- NEW IMPORT
import { cylinderPrefixCategories } from './sargent/cylinderPrefixes';

const exitDevices = {
  "category": "Exit Devices",
  "series": [
    series8300,
    series8400,
    series8500,
    series8600,
    series8700,
    series8800,
    series8900,
    seriesPE8300,
    seriesPE8400,
    seriesPE8500,
    seriesPE8600,
    seriesPE8700,
    seriesPE8800,
    seriesPE8900,
    series9400,
    series9700,
    series9800,
    series9900,
  ]
};

const mortiseLocks = {
  "category": "Mortise Locks",
  "series": [
    series8200Locks,
    series7800Locks,
    series9200Locks,
  ]
};

const boredLocks = {
    "category": "Bored Locks",
    "series": [
        series10XLine,
        series11Line,
        series7Line,
        series6Line,
        series8XLine,
        series6500Line
    ]
};

// REMOVED redundant mullionDevices variable, now using 'mullions' directly

export const sargentData = {
  "hardware": [
    exitDevices,
    mortiseLocks,
    boredLocks,
    mullions, // <-- FIX: Use the imported mullions object directly.
  ]
};

export { cylinderPrefixCategories };