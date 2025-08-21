// src/data/glossaryData.js
import { mortiseData } from './glossary/mortiseData';
import { rimData } from './glossary/rimData';
import { boredLocksData } from './glossary/boredLocksData';
import { lficData } from './glossary/lficData';
import { sficData } from './glossary/sficData';
import { degreeData } from './glossary/degreeData';
import { kesoF1Data } from './glossary/kesoF1Data';
import { xcData } from './glossary/xcData';

export const glossaryData = {
  cylinderTypes: [
    mortiseData,
    rimData,
    boredLocksData,
    lficData,
    sficData,
    degreeData,
    kesoF1Data,
    xcData,
  ],
};