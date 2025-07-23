// src/data/sargentData.js
const sargentData = {
  "hardware": [
    {
      "category": "Exit Devices",
      "series": [
        {
          "name": "80 Series",
          "models": [
            {
              "modelNumber": "8813",
              "description": "Rim Exit Device",
              "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "Standard 1-1/8\" body length." },
              "prefixes": [
                { "id": "16", "description": "Cylinder Dogging", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true },
                { "id": "59", "description": "Delayed Egress", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "For alarm control." }, "isDeviceSpecific": true },
                { "id": "AL", "description": "Alarmed Exit", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "For alarm kit control." }, "isDeviceSpecific": true }
              ]
            },
            {
              "modelNumber": "8888",
              "description": "Mortise Exit Device",
              "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "Used with 8200 series mortise lock." },
              "prefixes": [] // No original device-specific prefixes for 8888
            }
          ]
        }
      ]
    },
    {
      "category": "Mortise Locks",
      "series": [
        {
          "name": "8200 Series",
          "models": [
            {
              "modelNumber": "8204",
              "description": "Passage Function",
              "baseCylinder": null, // No cylinder needed for this function
              "prefixes": []
            },
            {
              "modelNumber": "8237",
              "description": "Storeroom Lock",
              "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "Standard cylinder." },
              "prefixes": []
            }
          ]
        }
      ]
    }
  ]
};

// --- START: Extracted and Categorized Cylinder Prefixes from Page 75 ---
const cylinderPrefixCategories = [
  {
    name: "Degree Key System Level 1",
    prefixes: [
      { id: "DG1-", description: "SARGENT Degree Key System Level 1 (bump resistant with patented keys)" },
      { id: "DG1-21-", description: "Degree Level 1 Construction Master Keying" },
      { id: "DG1-60-", description: "Degree Level 1 Removable Disposable Construction Core" },
      { id: "DG1-63-", description: "Degree Level 1 Removable Core" },
      { id: "DG1-64-", description: "Degree Level 1 Removable Construction Keyed LFIC" },
      { id: "DG1-65-", description: "Degree Level 1 Unassembled/uncombinated Core" },
    ]
  },
  {
    name: "Degree Key System Level 2",
    prefixes: [
      { id: "DG2-", description: "SARGENT Degree Key System Level 2 (geographically exclusive; bump and pick resistant)" },
      { id: "DG2-21-", description: "Degree Level 2 Construction Master Keying" },
      { id: "DG2-60-", description: "Degree Level 2 Removable Disposable Construction Core" },
      { id: "DG2-63-", description: "Degree Level 2 Removable Core" },
      { id: "DG2-64-", description: "Degree Level 2 Removable Construction Keyed LFIC" },
      { id: "DG2-65-", description: "Degree Level 2 Unassembled/uncombinated Core" },
    ]
  },
  {
    name: "Degree Key System Level 3",
    prefixes: [
      { id: "DG3-", description: "SARGENT Degree Key System Level 3 (geographically exclusive; UL437 certified; bump and pick resistant)" },
      { id: "DG3-21-", description: "Degree Level 3 Construction Master Keying" },
      { id: "DG3-60-", description: "Degree Level 3 Removable Disposable Construction Core" },
      { id: "DG3-63-", description: "Degree Level 3 Removable Core" },
      { id: "DG3-64-", description: "Degree Level 3 Removable Construction Keyed LFIC" },
      { id: "DG3-65", description: "Degree Level 3 Unassembled/uncombinated Core" },
    ]
  },
  {
    name: "Signature Key System",
    prefixes: [
      { id: "10-", description: "SARGENT Signature Key System (Not Available with other Key Systems)" },
      { id: "10-21-", description: "SARGENT Signature Construction Key System (Lost Ball)" },
      { id: "10-63-", description: "SARGENT Signature Large Format Interchangeable Core Cylinder (Removable)" },
    ]
  },
  {
    name: "XC-Key System",
    prefixes: [
      { id: "11-", description: "XC Key System (Not available with other Key systems unless specified)" },
      { id: "11-21-", description: "XC-Construction Key System (Lost Ball)" },
      { id: "11-60-", description: "Device to accept XC- Permanent Large Format Interchangeable Core, Disposable plastic Core- provided" },
      { id: "11-63-", description: "Device provided with XC-Large Format Interchangeable Core Cylinder - (Includes masterkeying, grand masterkeying)" },
      { id: "11-64-", description: "Device provided with Keyed construction core to accept XC- Permanent Large Format Interchangeable Core (ordered separately)" },
    ]
  },
  {
    name: "XC-Small Format Interchangeable Core (SFIC)",
    prefixes: [
      { id: "11-70-7P-", description: "Device to accept XC-SFIC (7-Pin) XC-Permanent Cores, plastic disposable core provided" },
      { id: "11-72-7P-", description: "Device to accept XC-SFIC (7-Pin Keyed Construction Core provided) cylinder Permanent core ordered separately" },
      { id: "11-73-7P-", description: "Device provided with XC- Small Format 7-Pin interchangeable core (Includes masterkeying, grand masterkeying)" },
      { id: "11-65-73-7P-", description: "Device provided to accept XC-Uncombinated 7-Pin SFIC (Permanent) Core - (Packed Loose)" },
    ]
  },
  {
    name: "Construction Key Systems (Lost Ball & Split Key)",
    prefixes: [
      { id: "21-", description: "SARGENT Lost Ball Construction Keying for Conventional, XC and Signature Series (N/A with 63- or 73-)" },
      { id: "22-", description: "SARGENT Construction Split Key System for Conventional Cylinders (Existing Systems Only) (N/A with 10-, 11-, 63-or 73-1" },
    ]
  },
  {
    name: "Old Style Removable Core",
    prefixes: [
      { id: "51-", description: "Removable Core Cylinder (Old Style) provided (existing systems only)" },
      { id: "52-", description: "Removable Construction Core (Old Style) Permanent core ordered separately (existing systems only)" },
    ]
  },
  {
    name: "Large Format Interchangeable Core (LFIC)",
    prefixes: [
      { id: "60-", description: "Device to accept SARGENT Permanent Large Format Interchangeable Core, Disposable plastic Core provided (Permanent Cores ordered separately)" },
      { id: "63-", description: "Device provided with Large Format Interchangeable Core Cylinder- (Includes masterkeying, grand masterkeying)" },
      { id: "64-", description: "Device provided with Keyed construction core to accept Permanent Large Format Interchangeable Core (ordered separately)" },
    ]
  },
  {
    name: "Small Format Interchangeable Core (SFIC)",
    prefixes: [
      { id: "70-", description: "Device to accept 6 or 7-Pin SFIC Permanent Cores, plastic disposable core provided" },
      { id: "72-", description: "Device to accept 6- or 7-Pin SFIC (6-Pin Keyed Construction Core provided) Cylinder (Permanent Core ordered separately)" },
      { id: "73-", description: "Device provided with 6-Pin SFIC (Includes masterkeying, grand masterkeying)" },
      { id: "65-73-", description: "Device provided to accept Uncombinated 6-Pin SFIC (Permanent) Core - (Packed Loose for field keying)" },
      { id: "65-73-7P-", description: "Device provided to accept Uncombinated 7-Pin SFIC (Permanent) Core - (Packed Loose for field keying)" },
      { id: "73-7P-", description: "Device provided with Small Format 7-Pin Interchangeable Core (Includes masterkeying, grand masterkeying)" },
    ]
  },
  {
    name: "Keso & Kesa F1 Systems",
    prefixes: [
      { id: "81-", description: "Device provided with housings to accept Keso (83) & Keso F1 (F1-83-) removable cores. (Permanent Cores ordered separately)" },
      { id: "82-", description: "Device provided with SARGENT Keso Security Cylinder" },
      { id: "F1-82-", description: "Device provided with SARGENT Keso F1 Security Cylinder (Patented)" },
      { id: "83-", description: "Device provided with SARGENT Keso Security Removable Core cylinder" },
      { id: "F1-83-", description: "Device provided with SARGENT Keso F1 Security Removable Core cylinder (Patented)" },
      { id: "84-", description: "Device provided with SARGENT Keso Construction Cores (Permanent Cores ordered separately)" },
    ]
  },
  {
    name: "Added Security & Keyway Options",
    prefixes: [
      { id: "BR-", description: "Bump Resistant Cylinder (Available with Conventional & Conventional XC Cylinders Only)" },
      { id: "SC-", description: "Schlage C keyway cylinder, 0 bitted (not available with: 8904, 8916, 8944, 8975, 8976, 8866, 8304, 8344, 8375 & 8376)" },
      { id: "SE-", description: "Schlage E keyway cylinder, 0 bitted (not available with: 8904, 8916, 8944, 8975, 8976, 8866, 8304, 8344, 8375 & 8376)" },
    ]
  }
];
// --- END: Extracted and Categorized Cylinder Prefixes from Page 75 ---


// Loop through all hardware, series, and models to add the cylinder prefixes
sargentData.hardware.forEach(category => {
  category.series.forEach(series => {
    series.models.forEach(model => {
      const existingPrefixIds = new Set(model.prefixes.map(p => p.id));
      
      let allNewCylinderPrefixes = [];
      cylinderPrefixCategories.forEach(cat => { // Iterate through categories
        cat.prefixes.forEach(cylPrefix => { // Iterate through prefixes within each category
          if (!existingPrefixIds.has(cylPrefix.id)) {
            allNewCylinderPrefixes.push({
              ...cylPrefix,
              isDeviceSpecific: false, // Mark these as NOT device-specific
              addsCylinder: {
                partNumber: "Varies",
                type: "Various Cylinder Types",
                notes: `General cylinder option. Specific part number/type may vary. (${cylPrefix.description})`
              }
            });
          }
        });
      });

      // Append new cylinder prefixes to the existing ones
      model.prefixes = [...model.prefixes, ...allNewCylinderPrefixes];
    });
  });
});

// Export both sargentData and cylinderPrefixCategories
export { sargentData, cylinderPrefixCategories };