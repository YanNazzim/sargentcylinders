// src/data/sargent/devicePrefixes.js

export const devicePrefixes80Series = [
  { "id": "16 - Cylinder Dogging", "description": "Keyed Cylinder at the end of the rail which 'dogs' the device down (meaning it is held open)", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true, "keywords": [] },
  { "id": "59 - Delayed Egress", "description": "Can delay the egress by 15 or 30 seconds | an alarm beeps continuously until reset by turning the keyed cylinder (for situations where you would want security to be able to reach the door in tim)", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "For alarm control." }, "isDeviceSpecific": true, "keywords": [] },
  { "id": "AL - Alarmed Exit", "description": "Alarm continuosly beeps when the push bar is used (can only be reset by turning the keyed cylinder)", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "For alarm kit control." }, "isDeviceSpecific": true, "keywords": [] },
];

export const devicePrefixesPE80Series = [
  { "id": "16", "description": "Cylinder Dogging", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true, "keywords": [] },
  { "id": "59", "description": "Delayed Egress", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "For alarm control." }, "isDeviceSpecific": true, "keywords": [] },
  { "id": "AL", "description": "Alarmed Exit", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "For alarm kit control." }, "isDeviceSpecific": true, "keywords": [] },
];

export const auxControl106Prefix = { "id": "106 - Aux Control", "description": "Cylinder + Thumbturn box that mounts above where a standard lever trim would go - Allows for Cylinder override on exit only or Electrified functions", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "Only needed if you have Aux Control" }, "isDeviceSpecific": true, "keywords": [] };
export const auxControl306Prefix = { "id": "306 - Aux Control", "description": "Cylinder + Thumbturn box that mounts above where a standard lever trim would go - Allows for Cylinder override on exit only or Electrified functions", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "Only needed if you have Aux Control" }, "isDeviceSpecific": true, "keywords": [] };