// src/data/sargent/series/boredLocks.js

import { images } from "../../../images/images";
import { cylinderPrefixCategories } from "../cylinderPrefixes";

const allCylinderPrefixes = cylinderPrefixCategories.flatMap(
  (category) => category.prefixes
);

export const series10XLine = {
  name: "10X Line",
  imageUrl: images.Bored10XLine,
  excludedPrefixes: ["51-", "52-"], // <-- Add this line

  models: [
    {
      modelNumber: "10XG04",
      description: "Storeroom or Closet",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XG05",
      description: "Entrance or Office",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XG07",
      description: "Communicating Storeroom",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [
        {
          id: "Inside Cyl",
          description: "Inside cylinder required",
          addsCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
          isDeviceSpecific: true,
        },
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "10XG08",
      description: "Communicating Classroom",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [
        {
          id: "Inside Cyl",
          description: "Inside cylinder required",
          addsCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
          isDeviceSpecific: true,
        },
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "10XG13",
      description: "Exit",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XG14",
      description: "Patio or Privacy",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XU15",
      description: "Passage",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XG15-3",
      description: "Exit or Communicating",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XG16",
      description: "Classroom Security",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [
        {
          id: "Inside Cyl",
          description: "Inside cylinder required",
          addsCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
          isDeviceSpecific: true,
        },
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "10XG17",
      description: "Utility, Asylum or Institutional",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [
        {
          id: "Inside Cyl",
          description: "Inside cylinder required",
          addsCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
          isDeviceSpecific: true,
        },
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "10XG24",
      description: "Entrance or Office",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [
        {
          id: "Inside Cyl",
          description: "Inside cylinder required",
          addsCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
          isDeviceSpecific: true,
        },
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "10XG26",
      description: "Store or Storeroom",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [
        {
          id: "Inside Cyl",
          description: "Inside cylinder required",
          addsCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
          isDeviceSpecific: true,
        },
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "10XG30",
      description: "Communicating",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [
        {
          id: "Inside Cyl",
          description: "Inside cylinder required",
          addsCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
          isDeviceSpecific: true,
        },
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "10XG37",
      description: "Classroom",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XG38",
      description: "Classroom Security Intruder",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [
        {
          id: "Inside Cyl",
          description: "Inside cylinder required",
          addsCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
          isDeviceSpecific: true,
        },
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "10XG44",
      description: "Service Station",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [
        {
          id: "Inside Cyl",
          description: "Inside cylinder required",
          addsCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
          isDeviceSpecific: true,
        },
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "10XG50",
      description: "Hotel, Dormitory or Apartment",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XG53",
      description: "Corridor, Dormitory",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XG54",
      description: "Corridor, Dormitory",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XG60",
      description: "Barrier Free Storeroom/Public Restroom",
      baseCylinder: { partNumber: "C10X-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XG64",
      description: "Time Out Lock",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XU65",
      description: "Privacy/Bathroom",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XU66",
      description: "Privacy/Bathroom",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XU68",
      description: "Hospital Privacy",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XU93",
      description: "Single Lever Pull",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XU94",
      description: "Double Lever Pull",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "10XU94-2",
      description: "Double Lever Pull",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
  ].sort(
    (a, b) =>
      parseInt(a.modelNumber.slice(-2)) - parseInt(b.modelNumber.slice(-2))
  ),
};

export const series11Line = {
  name: "11 Line",
  excludedPrefixes: ["51-", "52-"], // <-- Add this line

  models: [
    {
      modelNumber: "11G04",
      description: "Storeroom or Closet",
      baseCylinder: { partNumber: "C11-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "11G05",
      description: "Entrance or Office",
      baseCylinder: { partNumber: "C11-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "11U15",
      description: "Passage",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "11G16",
      description: "Classroom Security",
      baseCylinder: { partNumber: "C11-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "11G37",
      description: "Classroom",
      baseCylinder: { partNumber: "C11-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "11G38",
      description: "Classroom Security Intruder",
      baseCylinder: { partNumber: "C11-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "11U65",
      description: "Privacy/Bathroom",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
  ].sort(
    (a, b) =>
      parseInt(a.modelNumber.slice(-2)) - parseInt(b.modelNumber.slice(-2))
  ),
};

export const series6Line = {
  name: "6 Line",
  excludedPrefixes: ["51-", "52-"], // <-- Add this line

  models: [
    {
      modelNumber: "6G04",
      description: "Storeroom or Closet",
      baseCylinder: { partNumber: "C6-1B", type: "Key-in-Knob Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "6G05",
      description: "Entrance or Office",
      baseCylinder: { partNumber: "C6-1B", type: "Key-in-Knob Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "6U15",
      description: "Passage",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "6G37",
      description: "Classroom",
      baseCylinder: { partNumber: "C6-1B", type: "Key-in-Knob Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "6U65",
      description: "Privacy/Bathroom",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "6U93",
      description: "Single Knob Pull",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
  ].sort(
    (a, b) =>
      parseInt(a.modelNumber.slice(-2)) - parseInt(b.modelNumber.slice(-2))
  ),
};

export const series7Line = {
  name: "7 Line",
  excludedPrefixes: ["51-", "52-"], // <-- Add this line

  models: [
    {
      modelNumber: "7G04",
      description: "Storeroom or Closet",
      baseCylinder: { partNumber: "C10-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "7G05",
      description: "Entrance or Office",
      baseCylinder: { partNumber: "C10-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "7U15",
      description: "Passage",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "7G15-3",
      description: "Exit or Communicating",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "7G37",
      description: "Classroom",
      baseCylinder: { partNumber: "C10-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "7U65",
      description: "Privacy/Bathroom",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "7U68",
      description: "Hospital Privacy",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "7U93",
      description: "Single Lever Pull",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "7U94",
      description: "Double Lever Pull",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "7U94-2",
      description: "Double Lever Pull",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
  ].sort(
    (a, b) =>
      parseInt(a.modelNumber.slice(-2)) - parseInt(b.modelNumber.slice(-2))
  ),
};

export const series8XLine = {
  name: "8X Line",
  excludedPrefixes: ["51-", "52-"], // <-- Add this line

  models: [
    {
      modelNumber: "8XG04",
      description: "Storeroom or Closet",
      baseCylinder: { partNumber: "C10-1", type: "Key-in-Knob Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "8XG05",
      description: "Entrance or Office",
      baseCylinder: { partNumber: "C10-1", type: "Key-in-Knob Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "8XU15",
      description: "Passage",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "8XG17",
      description: "Utility, Asylum or Institutional",
      baseCylinder: { partNumber: "C10-1", type: "Key-in-Knob Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "8XG37",
      description: "Classroom",
      baseCylinder: { partNumber: "C10-1", type: "Key-in-Knob Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "8XU65",
      description: "Privacy/Bathroom",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "8XU93",
      description: "Single Knob Pull",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
  ].sort(
    (a, b) =>
      parseInt(a.modelNumber.slice(-2)) - parseInt(b.modelNumber.slice(-2))
  ),
};

export const series6500Line = {
  name: "6500 Line",
  excludedPrefixes: ["51-", "52-"], // <-- Add this line

  models: [
    {
      modelNumber: "65G04",
      description: "Storeroom or Closet",
      baseCylinder: { partNumber: "C10-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "65G05",
      description: "Entrance or Office",
      baseCylinder: { partNumber: "C10-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "65U15",
      description: "Passage",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "65G15-3",
      description: "Exit or Communicating",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "65G37",
      description: "Classroom",
      baseCylinder: { partNumber: "C10-1", type: "Key-in-Lever Cylinder" },
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "65U65",
      description: "Privacy/Bathroom",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "65U93",
      description: "Single Lever Pull",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
    {
      modelNumber: "65U94",
      description: "Double Lever Pull",
      baseCylinder: null,
      prefixes: [...allCylinderPrefixes],
    },
  ].sort(
    (a, b) =>
      parseInt(a.modelNumber.slice(-2)) - parseInt(b.modelNumber.slice(-2))
  ),
};
