// src/data/sargent/devicePrefixes.js
import { images } from "../../images/images";

// 1. Collar Logic for 16 - Cylinder Dogging (Assumed part numbers for variants)
const COLLAR_LOGIC_16 = {
  default: {
    partNumber: "97 x Finish",
    description: "Standard Rosette for 16- Cylinder Dogging",
    imageUrl: images.Rosette97,
    projection: '9/32"'
  },
  conditional: [
    {
      prefix: "60-", // LFIC cores (60-, 63-, 64-, DG-6x-)
      partNumber: "97 x Finish",
      description: "LFIC Rosette for 16- Dogging",
      imageUrl: images.Rosette97,
      projection: '9/32"'
    },
    {
      prefix: "70-", // SFIC cores (70-, 72-, 73-)
      partNumber: "1KB-1 x Finish",
      description: "SFIC Collar for 16- Dogging",
      imageUrl: images.Collar1KB,
      projection: '5/16"'
    },
  ],
};

// 2. Collar Logic for 59 - Delayed Egress (Based on your explicit request)
const COLLAR_LOGIC_59 = {
  default: {
    partNumber: "97 x Finish",
    description: "Standard Rosette for 59- Delayed Egress",
    imageUrl: images.Rosette97,
    projection: '9/32"'
  },
  conditional: [
    {
      prefix: "60-", // LFIC cores (60-, 63-, 64-, DG-6x-)
      partNumber: "98-0276 x Finish",
      description: "LFIC Collar for 59- Delayed Egress",
      imageUrl: images.ETCollar,
      projection: '3/4"'
    },
    {
      prefix: "70-", // SFIC cores (70-, 72-, 73-)
      partNumber: "97-0349 x Finish",
      description: "SFIC Collar for 59- Delayed Egress",
      imageUrl: images.ETCollar,
      projection: '7/8"'
    },
  ],
};

// 3. Collar Logic for AL - Alarmed Exit (Assuming specific part numbers for variants)
const COLLAR_LOGIC_AL = {
  default: {
    partNumber: "98-0276 x Finish",
    description: "Standard Collar for AL- Alarmed Exit",
    imageUrl: images.ETCollar,
    projection: '3/8"'
  },
  conditional: [
    {
      prefix: "60-", // LFIC cores (60-, 63-, 64-, DG-6x-)
      partNumber: "97-0349 x Finish",
      description: "LFIC Collar for AL- Alarmed Exit",
      imageUrl: images.ETCollar,
      projection: '1/2"'
    },
    {
      prefix: "70-", // SFIC cores (70-, 72-, 73-)
      partNumber: "97-0350 x Finish",
      description: "SFIC Collar for AL- Alarmed Exit",
      imageUrl: images.ETCollar,
      projection: '5/8"'
    },
  ],
};

// 4. NEW: Standard ET Trim Collar Logic for Aux Controls (Mimics standard ET Trim)
const COLLAR_LOGIC_AUX_CONTROL = {
  default: {
    partNumber: "97-0350 x Finish",
    description: "Standard Collar for Aux Control (Matches ET Trim)",
    imageUrl: images.ETCollar,
    projection: '5/8"',
  },
  conditional: [
    {
      prefix: "60-",
      partNumber: "97-0351 x Finish",
      description:
        "Collar for Aux Control with LFIC Prefix (Matches ET Trim)",
      imageUrl: images.ETCollar,
      projection: '3/4"',
    },
    {
      prefix: "70-",
      partNumber: "97-0352 x Finish",
      description:
        "Collar for Aux Control with SFIC Prefix (Matches ET Trim)",
      imageUrl: images.ETCollar,
      projection: '7/8"',
    },
  ],
};


export const devicePrefixes80Series = [
  // 1. 16- Cylinder Dogging uses COLLAR_LOGIC_16
  { "id": "16 - Cylinder Dogging", "description": "Keyed Cylinder at the end of the rail which 'dogs' the device down (meaning it is held open)", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "collars": COLLAR_LOGIC_16, "isDeviceSpecific": true, "keywords": [] },

  // 2. 59- Delayed Egress uses COLLAR_LOGIC_59
  { "id": "59 - Delayed Egress", "description": "Can delay the egress by 15 or 30 seconds | an alarm beeps continuously until reset by turning the keyed cylinder (for situations where you would want security to be able to reach the door in tim)", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "For alarm control." }, "collars": COLLAR_LOGIC_59, "isDeviceSpecific": true, "keywords": [] },

  // 3. AL - Alarmed Exit uses COLLAR_LOGIC_AL
  { "id": "AL - Alarmed Exit", "description": "Alarm continuosly beeps when the push bar is used (can only be reset by turning the keyed cylinder)", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "For alarm kit control." }, "collars": COLLAR_LOGIC_AL, "isDeviceSpecific": true, "keywords": [] },

  { "id": "127 - Mortise Cylinder Thumbturn", "description": "Turns your inside Keyed Cylinder into a detachable mortise thumbturn", "addsCylinder": { "partNumber": "#44", "type": "Mortise Cylinder", "notes": "For alarm kit control." }, "isDeviceSpecific": true, "keywords": ["127", "thumbturn"] },
];

export const devicePrefixesPE80Series = [
  // Mirroring 80 Series logic for consistency
  { "id": "16", "description": "Cylinder Dogging", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "collars": COLLAR_LOGIC_16, "isDeviceSpecific": true, "keywords": [] },
  { "id": "59", "description": "Delayed Egress", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "For alarm control." }, "collars": COLLAR_LOGIC_59, "isDeviceSpecific": true, "keywords": [] },
  { "id": "AL", "description": "Alarmed Exit", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "For alarm kit control." }, "collars": COLLAR_LOGIC_AL, "isDeviceSpecific": true, "keywords": [] },
  { "id": "127 - Mortise Cylinder Thumbturn", "description": "Turns your inside Keyed Cylinder into a detachable mortise thumbturn", "addsCylinder": { "partNumber": "#44", "type": "Mortise Cylinder", "notes": "For alarm kit control." }, "isDeviceSpecific": true, "keywords": ["127", "thumbturn"] },
];

// UPDATED to use COLLAR_LOGIC_AUX_CONTROL
export const auxControl106Prefix = { "id": "106 - Aux Control", "description": "Cylinder + Thumbturn box that mounts above where a standard lever trim would go - Allows for Cylinder override on exit only or Electrified functions", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "Only needed if you have Aux Control" }, "collars": COLLAR_LOGIC_AUX_CONTROL, "isDeviceSpecific": true, "keywords": [] };

// UPDATED to use COLLAR_LOGIC_AUX_CONTROL
export const auxControl306Prefix = { "id": "306 - Aux Control", "description": "Cylinder + Thumbturn box that mounts above where a standard lever trim would go - Allows for Cylinder override on exit only or Electrified functions", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "Only needed if you have Aux Control" }, "collars": COLLAR_LOGIC_AUX_CONTROL, "isDeviceSpecific": true, "keywords": [] };