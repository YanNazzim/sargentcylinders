// src/data/sargent/series/series90.js

import {images} from '../../../images/images';
import { cylinderPrefixCategories } from "../cylinderPrefixes"; // Import cylinder prefixes
import { auxControl306Prefix } from "../devicePrefixes";

const allCylinderPrefixes = cylinderPrefixCategories.flatMap(category => category.prefixes);

// Renamed from rimCollarInfo to CollarInfo
const CollarInfo = {
  default: {
    partNumber: "97-0350 x Finish",
    description: "Standard Collar for ET Trim",
    imageUrl: images.ETCollar,
    projection: '5/8"', // <-- ADDED
  },
  conditional: [
    {
      prefix: "60-",
      partNumber: "97-0351 x Finish",
      description:
        "Collar for ET Trim with LFIC Prefix (60-, 63-, 64-)",
      imageUrl: images.ETCollar,
      projection: '3/4"', // <-- ADDED
    },
    {
      prefix: "70-",
      partNumber: "97-0352 x Finish",
      description:
        "Collar for ET Trim with SFIC Prefix (70-, 72-, 73-)",
      imageUrl: images.ETCollar,
      projection: '7/8"', // <-- ADDED
    },
  ],
};

const CollarInfo04 = {
  default: {
    partNumber: "97 x Finish",
    description: "Standard Rosette (Only used on cylinder only application - when NOT being used with ET)",
    imageUrl: images.Rosette97, // <-- ADDED
        projection: '9/32"', // <-- ADDED
  },
};


export const series9400 = {
  "name": "9400 Series",
    imageUrl: images.Series9400,
  "models": [
    { 
        "modelNumber": "9404", 
        "description": "Key Retracts Latch", 
        "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, 
        "prefixes": [...allCylinderPrefixes],
        collars: CollarInfo04, // <-- UPDATED
    },
    { "modelNumber": "9410", "description": "No outside operation", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};
export const series9700 = {
    imageUrl: images.Series9700,
  "name": "9700 Series",
  "models": [
    { 
        "modelNumber": "9706", 
        "description": "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", 
        "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, 
        "prefixes": [...allCylinderPrefixes, auxControl306Prefix],
        collars: CollarInfo,
    },
    { "modelNumber": "9710", "description": "No outside Operation ET Control is used as Pull Only", "baseCylinder": null, "prefixes": [...allCylinderPrefixes, auxControl306Prefix] },
    { 
        "modelNumber": "9713", 
        "description": "Key Outside Unlocks/locks Trim", 
        "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, 
        "prefixes": [...allCylinderPrefixes, auxControl306Prefix],
        collars: CollarInfo,
    },
    { "modelNumber": "9715", "description": "Passage Only", "baseCylinder": null, "prefixes": [...allCylinderPrefixes, auxControl306Prefix] },
    { "modelNumber": "9728", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [...allCylinderPrefixes, auxControl306Prefix] },
    { 
        "modelNumber": "9762", 
        "description": "Thumbpiece - Key Unlocks/Locks, Retracts Latch", 
        "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, 
        "prefixes": [...allCylinderPrefixes, auxControl306Prefix],
        collars: CollarInfo,
    },
    { 
        "modelNumber": "9763", 
        "description": "Thumbpiece - Key Unlocks/Locks", 
        "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, 
        "prefixes": [...allCylinderPrefixes, auxControl306Prefix],
        collars: CollarInfo,
    },
    { "modelNumber": "9773", "description": "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [...allCylinderPrefixes, auxControl306Prefix] },
    { "modelNumber": "9774", "description": "Electrified ET Trim Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [...allCylinderPrefixes, auxControl306Prefix] },
    { 
        "modelNumber": "9775", 
        "description": "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever, Key Retracts Latch", 
        "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, 
        "prefixes": [...allCylinderPrefixes, auxControl306Prefix],
        collars: CollarInfo,
    },
    { 
        "modelNumber": "9776", 
        "description": "Electrified ET Trim-Fail Secure Power Off, Locks Lever, Key Retracts Latch", 
        "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, 
        "prefixes": [...allCylinderPrefixes, auxControl306Prefix],
        collars: CollarInfo,
    }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};
export const series9800 = {
    imageUrl: images.Series9800,
  "name": "9800 Series",
  "models": [
    { 
        "modelNumber": "9804", 
        "description": "Key Retracts Latch", 
        "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, 
        "prefixes": [...allCylinderPrefixes],
        collars: CollarInfo04, // <-- UPDATED
    },
    { "modelNumber": "9810", "description": "No outside Operation ET Control is used as Pull Only", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
    { 
        "modelNumber": "9813", 
        "description": "Key Outside Unlocks/locks Trim", 
        "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, 
        "prefixes": [...allCylinderPrefixes],
        collars: CollarInfo,
    },
    { "modelNumber": "9815", "description": "Passage Only", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
    { "modelNumber": "9828", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
    { 
        "modelNumber": "9863", 
        "description": "Key Outside Unlocks/Locks Trim", 
        "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, 
        "prefixes": [...allCylinderPrefixes],
        collars: CollarInfo,
    },
    { "modelNumber": "9873", "description": "Electrified ET Trim Fail Safe Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
    { "modelNumber": "9874", "description": "Electrified ET Trim - Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
    { 
        "modelNumber": "9875", 
        "description": "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever, Key Retracts Latch", 
        "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, 
        "prefixes": [...allCylinderPrefixes],
        collars: CollarInfo,
    },
    { 
        "modelNumber": "9876", 
        "description": "Electrified ET Trim-Fail Secure Power Off, Locks Lever, Key Retracts Latch", 
        "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, 
        "prefixes": [...allCylinderPrefixes],
        collars: CollarInfo,
    }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};
export const series9900 = {
    imageUrl: images.Series9900,
  "name": "9900 Series",
  "models": [
    { 
        "modelNumber": "9904", 
        "description": "Key Retracts Latch", 
        "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, 
        "prefixes": [...allCylinderPrefixes],
        collars: CollarInfo04, // <-- UPDATED
    },
    { "modelNumber": "9910", "description": "No outside Operation ET Control is used as Pull Only", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
    { 
        "modelNumber": "9913", 
        "description": "Key Outside Unlocks/locks Trim", 
        "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, 
        "prefixes": [...allCylinderPrefixes],
        collars: CollarInfo,
    },
    { "modelNumber": "9915", "description": "Passage Only", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
    { "modelNumber": "9928", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
    { 
        "modelNumber": "9963", 
        "description": "Key Outside Unlocks/locks Trim", 
        "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, 
        "prefixes": [...allCylinderPrefixes],
        collars: CollarInfo,
    },
    { "modelNumber": "9973", "description": "Electrified ET Trim - Fail Safe, Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
    { "modelNumber": "9974", "description": "Electrified ET Trim - Fail Secure, Power Off, Locks Lever", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
    { 
        "modelNumber": "9975", 
        "description": "Electrified ET Trim-Fail Safe, Power Off, Unlocks Lever, Key Retracts Latch", 
        "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, 
        "prefixes": [...allCylinderPrefixes],
        collars: CollarInfo,
    },
    { 
        "modelNumber": "9976", 
        "description": "Electrified ET Trim - Fail Secure, Power Off, Locks Lever, Key Retracts Latch", 
        "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, 
        "prefixes": [...allCylinderPrefixes],
        collars: CollarInfo,
    }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};