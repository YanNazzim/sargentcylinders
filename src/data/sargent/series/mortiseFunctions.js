// src/data/sargent/series/mortiseFunctions.js
import { cylinderPrefixCategories } from "../cylinderPrefixes"; // Import cylinder prefixes
import { images } from '../../../images/images'; // Import images
const allCylinderPrefixes = cylinderPrefixCategories.flatMap(category => category.prefixes);

export const series8200MortiseFunctions = [
  // Single Cylinder without Deadbolt
  { 
    "modelNumber": "8204", 
    "description": "Storeroom or Closet", 
    "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, 
    "prefixes": [...allCylinderPrefixes],
    "imageUrl": images.Func8204, // <-- Add this line
  },  { "modelNumber": "8205", "description": "Office or Entry", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8206", "description": "Storeroom or Service", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8231", "description": "Utility", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8236", "description": "Closet", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8237", "description": "Classroom", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8255", "description": "Office or Entry", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8256", "description": "Office & Inner Entry Lock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8257", "description": "Institutional Privacy", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8258", "description": "Institutional Privacy", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8267", "description": "Institutional Privacy", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8289", "description": "Holdback", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8291", "description": "All Purpose Holdback", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  // Single Cylinder with Deadbolt
  { "modelNumber": "8224", "description": "Room Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8225", "description": "Dormitory or Exit", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8227", "description": "Closet or Storeroom", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8228", "description": "Dummy Trim Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8230", "description": "Dummy Trim Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8235", "description": "Storeroom", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8243", "description": "Apartment Corridor Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8245", "description": "Dormitory or Exit", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8247", "description": "Front Door or Apartment Corridor Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8250", "description": "Hotel Guest", "baseCylinder": { "partNumber": "#50", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8251", "description": "Storeroom Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  // Double Cylinder without Deadbolt
  { "modelNumber": "8216", "description": "Apartment, Exit or Public Restroom", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Special cam required for inside cylinder", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8217", "description": "Asylum or Institutional", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8238", "description": "Classroom Security Intruder Latchbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8242", "description": "Classroom Security Intruder Latchbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Handed function", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8259", "description": "Double Locking", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8290", "description": "Classroom Security Holdback", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8292", "description": "All Purpose Holdback", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Special-105 cam required", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  // Double Cylinder with Deadbolt
  { "modelNumber": "8226", "description": "Store Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8229", "description": "Dummy Trim Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8239", "description": "Classroom Security Intruder Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8240", "description": "Classroom Security Intruder Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8241", "description": "Classroom Security Intruder Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8246", "description": "Dormitory or Exit", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8248", "description": "Store Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8249", "description": "Security Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8252", "description": "Institutional Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  // Non-Keyed
  { "modelNumber": "8212", "description": "Passage with Indicator", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8213", "description": "Exit Latch", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8215", "description": "Passage or Closet", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8265", "description": "Privacy Bath/Bedroom", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8266", "description": "Privacy Bath/Bedroom", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8268", "description": "Privacy Bath/Bedroom", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8293", "description": "Trim Dummy", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8294", "description": "Trim Dummy", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8295", "description": "Single Trim Dummy", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8296", "description": "Double Trim Dummy", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8297", "description": "Active Trim Dummy", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  // Deadbolt Only
  { "modelNumber": "8203", "description": "Classroom Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8220", "description": "Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8221", "description": "Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "8222", "description": "Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "8223", "description": "Classroom Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Same as 03 function with cylinder inside", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
];

export const series7800MortiseFunctions = [
  // Single Cylinder without Deadbolt
  { "modelNumber": "7804", "description": "Storeroom or Closet", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7805", "description": "Office or Entry", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7806", "description": "Storeroom or Service", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7831", "description": "Utility", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7836", "description": "Closet", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7837", "description": "Classroom", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7855", "description": "Office or Entry", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7856", "description": "Office & Inner Entry Lock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7857", "description": "Institutional Privacy", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7858", "description": "Institutional Privacy", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7867", "description": "Institutional Privacy", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  // Single Cylinder with Deadbolt
  { "modelNumber": "7824", "description": "Room Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7825", "description": "Dormitory or Exit", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7827", "description": "Closet or Storeroom", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7835", "description": "Storeroom", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7843", "description": "Apartment Corridor Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7845", "description": "Dormitory or Exit", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7847", "description": "Front Door or Apartment Corridor Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7850", "description": "Hotel Guest", "baseCylinder": { "partNumber": "#50", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7851", "description": "Storeroom Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  // Double Cylinder without Deadbolt
  { "modelNumber": "7816", "description": "Apartment, Exit or Public Restroom", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Special-105 cam required for inside cylinder", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "7817", "description": "Asylum or Institutional", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "7838", "description": "Classroom Security Intruder Latchbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "7892", "description": "All Purpose Holdback", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Special-105 cam required for inside cylinder", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  // Double Cylinder with Deadbolt
  { "modelNumber": "7826", "description": "Store Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "7829", "description": "Dummy Trim Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "7839", "description": "Classroom Security Intruder Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "7840", "description": "Classroom Security Intruder Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "7841", "description": "Classroom Security Intruder Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "7846", "description": "Dormitory or Exit", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "7848", "description": "Store Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "7849", "description": "Security Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "7852", "description": "Institutional Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  // Non-Keyed
  { "modelNumber": "7812", "description": "Passage with Indicator", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7813", "description": "Exit Latch", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7815", "description": "Passage or Closet", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7865", "description": "Privacy Bath/Bedroom", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7866", "description": "Privacy Bath/Bedroom", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7868", "description": "Privacy Bath/Bedroom", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7893", "description": "Trim Dummy", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7894", "description": "Trim Dummy", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7895", "description": "Single Trim Dummy", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7896", "description": "Double Trim Dummy", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "7897", "description": "Active Trim Dummy", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
];

export const series9200MortiseFunctions = [
  // Single Cylinder without Deadbolt
  { "modelNumber": "9204", "description": "Storeroom or Closet", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9205", "description": "Office or Entry", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9206", "description": "Storeroom or Service", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9237", "description": "Classroom", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9255", "description": "Office or Entry", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  // Single Cylinder with Deadbolt
  { "modelNumber": "9224", "description": "Storeroom Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9225", "description": "Dormitory or Exit", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9235", "description": "Storeroom", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9243", "description": "Apartment Corridor Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9245", "description": "Dormitory or Exit", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9250", "description": "Hotel Guest", "baseCylinder": { "partNumber": "#50", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  // Double Cylinder without Deadbolt
  { "modelNumber": "9216", "description": "Apartment, Exit or Public Restroom", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Special cam required for inside cylinder", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "9217", "description": "Asylum or Institutional", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "9238", "description": "Classroom Security Intruder Latchbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "9259", "description": "School Security", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  // Double Cylinder with Deadbolt
  { "modelNumber": "9226", "description": "Store Door", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "9239", "description": "Classroom Security Intruder Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "9240", "description": "Classroom Security Intruder Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "9241", "description": "Classroom Security", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "9249", "description": "Security Deadbolt", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  // Non-Keyed
  { "modelNumber": "9215", "description": "Passage or Closet", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9265", "description": "Privacy Bedroom or Bath", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9266", "description": "Privacy Bedroom or Bath", "baseCylinder": null, "prefixes": [...allCylinderPrefixes] },
  // Deadbolt Only
  { "modelNumber": "9203", "description": "Classroom Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9220", "description": "Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9221", "description": "Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...allCylinderPrefixes] },
  { "modelNumber": "9222", "description": "Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
  { "modelNumber": "9223", "description": "Classroom Deadlock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Same as 03 function with cylinder inside", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }, ...allCylinderPrefixes] },
];