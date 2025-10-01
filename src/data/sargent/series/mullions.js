// src/data/sargent/series/mullions.js
import { cylinderPrefixCategories } from "../cylinderPrefixes";
import { images } from "../../../images/images";

const allCylinderPrefixes = cylinderPrefixCategories.flatMap(
  (category) => category.prefixes
);

// --- Custom Collars ---
// Collar for 980C2 Mullions (forces #46 cylinder and 97 Rosette/Collar)
const CollarInfo97 = {
  default: {
    partNumber: "97 x Finish",
    description: "Standard Rosette for Mullion (Mandatory for 980C2)",
    imageUrl: images.Rosette97,
    projection: '9/32"',
  },
};

// --- Custom Prefix for Mullion Logic (980C1*) - For standard lockable mullions ---
const cylinderKit980C1 = {
  id: "980C1",
  description: "980C1 Cylinder Kit",
  // This cylinder is a placeholder, its actual size (#41/#42/#43) depends on the chosen key prefix (60- or 70-)
  addsCylinder: { 
      partNumber: "#41", // Default size for Mullion, is converted to #42/#43 in finder logic based on prefix
      type: "Mortise Cylinder",
      notes: "Cylinder size will be #42 or #43 if an LFIC/SFIC prefix is selected." 
  },
  isDeviceSpecific: true,
  keywords: ["Mullion", "980C1"],
};

// --- Reusable Logic for 980C2 Mullions (Fixed #46 Cylinder) ---
const get980C2Model = (modelNumber, description) => ({
    modelNumber,
    description,
    imageUrl: images.MullionEL980, // Default to EL980 image for Electric versions
    baseCylinder: { partNumber: "#46", type: "Mortise Cylinder" }, // Forces #46 cylinder
    collars: CollarInfo97, // Forces 97 Rosette
    prefixes: [
        { 
            id: "980C2", 
            description: "980C2 Cylinder Kit (Fixed #46 Mortise w/ 97 Rosette)", 
            addsCylinder: {partNumber: "#46", type: "Mortise Cylinder"}, 
            isDeviceSpecific: true, 
            keywords: ["Mullion", "980C2"] 
        },
        ...allCylinderPrefixes, // Allows key system prefix selection (e.g., 60-46)
    ],
});


// 1. REGULAR MULLIONS: Aluminum Lockable Mullions (L980*/L980A*)
export const seriesL980Aluminum = {
  name: "L980 / L980A (Aluminum)",
  imageUrl: images.MullionL980A, // <--- UPDATED Series image
  models: [
    {
      modelNumber: "L980*/L980A*",
      description: "Removable, Lockable Aluminum Mullion",
      imageUrl: images.MullionL980A, // <--- UPDATED Model image
      baseCylinder: null,
      prefixes: [
        cylinderKit980C1,
        ...allCylinderPrefixes,
      ],
    },
  ],
};

// 2. REGULAR MULLIONS: Steel Lockable Mullions (Standard, EL, & Hurricane)
export const seriesLockableSteel = { 
  name: "Lockable Steel Mullions (Standard, EL, & Hurricane)",
  imageUrl: images.MullionL980S, // <--- UPDATED Series image
  models: [
    {
      modelNumber: "L980S*/12-L980",
      description: "Lockable Steel Mullion (Fire-Rated Option)",
      imageUrl: images.MullionL980S, // <--- UPDATED Model image
      baseCylinder: null,
      prefixes: [
        cylinderKit980C1,
        ...allCylinderPrefixes,
      ],
    },
    // EL980 using the new 980C2 logic (Fixed #46)
    { 
        ...get980C2Model("EL980", "Electrified Lockable Steel Mullion (980C2 Kit/Fixed #46)"),
        imageUrl: images.MullionEL980, // <--- Assigned EL980 image
    },
    
    {
      modelNumber: "HCL980*/12-HCL980",
      description: "Lockable, Hurricane Rated Steel Mullion",
      imageUrl: images.MullionHCL980S, // <--- Assigned HCL980S image
      baseCylinder: null,
      prefixes: [
        cylinderKit980C1,
        ...allCylinderPrefixes,
      ],
    }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber)), 
};


// 3. SPLIT MULLIONS
export const seriesSplitMullions = {
  name: "SM Split Mullions (Steel)",
  imageUrl: images.MullionSMEL980S, // <--- UPDATED Series image
  models: [
    {
        modelNumber: "SML980S",
        description: "Lockable Split Steel Mullion (980C1 Kit)",
        imageUrl: images.MullionSMEL980S, // <--- Assigned SML980S image
        baseCylinder: null,
        prefixes: [
          cylinderKit980C1, 
          ...allCylinderPrefixes,
        ],
        excludedPrefixes: [], 
    },
    // SMEL980 using the new 980C2 logic (Fixed #46)
    {
        ...get980C2Model("SMEL980", "Electrical Lockable Split Steel Mullion (980C2 Kit/Fixed #46)"),
        imageUrl: images.MullionSMEL980S, // <--- Assigned SML980S image
    },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber)), 
};

export const mullions = {
    category: "Mullions",
    series: [
        seriesL980Aluminum,
        seriesLockableSteel,
        seriesSplitMullions,
    ]
};