// src/data/sargentData.js
import { series8300, series8400, series8500, series8600, series8700, series8800, series8900 } from './sargent/series/series80';
import { seriesPE8300, seriesPE8400, seriesPE8500, seriesPE8600, seriesPE8700, seriesPE8800, seriesPE8900 } from './sargent/series/seriesPE80';
import { series9400, series9700, series9800, series9900 } from './sargent/series/series90';
import { series20, series30 } from './sargent/series/series20_30';
import { series8200Locks, series7800Locks, series9200Locks, seriesM9200Locks } from './sargent/series/mortiseLocks';
import { series10XLine, series11Line, series6Line, series7Line, series8XLine, series6500Line } from './sargent/series/boredLocks';
import { cylinderPrefixCategories } from './sargent/cylinderPrefixes';

const exitDevices = {
  "category": "Exit Devices",
  "series": [
    series20,
    series30,
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
    seriesM9200Locks
  ]
};

const boredLocks = {
    "category": "Bored Locks",
    "series": [
        series10XLine,
        series11Line,
        series6Line,
        series7Line,
        series8XLine,
        series6500Line
    ]
};

export const sargentData = {
  "hardware": [
    exitDevices,
    mortiseLocks,
    boredLocks
  ]
};


sargentData.hardware.forEach(category => {
  category.series.forEach(series => {
    series.models.forEach(model => {
      const existingPrefixIds = new Set(model.prefixes.map(p => p.id));
      let allNewCylinderPrefixes = [];
      cylinderPrefixCategories.forEach(cat => {
        cat.prefixes.forEach(cylPrefix => {
          if (!existingPrefixIds.has(cylPrefix.id)) {
            allNewCylinderPrefixes.push({
              ...cylPrefix,
              isDeviceSpecific: false,
              addsCylinder: null
            });
          }
        });
      });
      model.prefixes = [...model.prefixes, ...allNewCylinderPrefixes];
    });
  });
});

export { cylinderPrefixCategories };