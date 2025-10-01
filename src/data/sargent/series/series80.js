// src/data/sargent/series/series80.js
import {
  devicePrefixes80Series,
  auxControl106Prefix,
  auxControl306Prefix,
} from "../devicePrefixes";
import { cylinderPrefixCategories } from "../cylinderPrefixes"; // Import cylinder prefixes
import { images } from "../../../images/images";

// Create a flat array of all cylinder prefixes
const allCylinderPrefixes = cylinderPrefixCategories.flatMap(
  (category) => category.prefixes
);

// Define the collars object once for re-use across all keyed Rim Exit functions
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

// Inside cylinder definition for 8816. Note: Size is fixed at #44 and 
// will be conditionally overridden to #46 in CylinderFinder.js if SFIC is selected.
const insideCyl8816 = {
    id: "Inside Cyl",
    description: "Inside Cylinder for 8816 Function",
    addsCylinder: { partNumber: "#44", type: "Mortise Cylinder" },
    isDeviceSpecific: true,
    keywords: [],
};


export const series8300 = {
  name: "8300 Series Narrow Mortise",
  imageUrl: images.Series8300,

  models: [
    {
      modelNumber: "8304",
      description: "Key Retracts Latch",
      collars: CollarInfo04,
      baseCylinder: { partNumber: "#46", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8310",
      description: "No Outside Operation",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8313",
      description: "Key Outside Unlocks/locks Trim",
      collars: CollarInfo,
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8315",
      description: "Passage Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8328",
      description: "Thumbpiece - Passage Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8340",
      description: "Freewheeling Trim - No outside operation Dummy Trim",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8343",
      description: "Freewheeling Trim - Key Outside Unlocks/locks Trim",
      collars: CollarInfo,
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8344",
      collars: CollarInfo04,
      description: "Freewheeling Trim - Key Retracts Latch",
      baseCylinder: { partNumber: "#46", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8363",
      description: "Thumbpiece - Key Unlocks/Locks",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8375",
      description:
        "Electrified ET Trim Fail Safe Power Off, Unlocks Lever, Key Retracts Latch",
      collars: CollarInfo,
      baseCylinder: { partNumber: "#46", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8376",
      description:
        "Electrified ET Trim Fail Secure Power Off, Locks Lever, Key Retracts Latch",
      collars: CollarInfo,
      baseCylinder: { partNumber: "#46", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber)),
};

export const series8400 = {
  name: "8400 Series Narrow CVR",
  imageUrl: images.Series8400,

  models: [
    {
      modelNumber: "8406",
      description:
        "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed",
      collars: CollarInfo,
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8410",
      description: "No outside operation Trim is used as Pull Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8413",
      description: "Key Outside Unlocks/locks Trim",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8415",
      description: "Passage Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8440",
      description: "Freewheeling Trim - No outside operation Dummy Trim",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8443",
      description: "Freewheeling Trim - Key Outside Unlocks/locks Trim",
      collars: CollarInfo,
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8446",
      description:
        "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed",
      collars: CollarInfo,
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8473",
      description:
        "Electrified lever Trim - Fail Safe Power Off, Unlocks Lever",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8474",
      description:
        "Electrified lever Trim - Fail Secure Power Off, Locks Lever",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber)),
};

export const series8500 = {
  name: "8500 Series Narrow Rim",
  imageUrl: images.Series8500,

  models: [
    {
      modelNumber: "8504",
      collars: CollarInfo04,
      description: "Key Retracts Latch",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8506",
      description:
        "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
      collars: CollarInfo,
    },
    {
      modelNumber: "8510",
      description: "No outside operation Trim is used as Pull Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8513",
      description: "Key Outside Unlocks/Locks Trim",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8515",
      description: "Passage Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8528",
      description: "Thumbpiece - Passage Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8540",
      description: "Freewheeling Trim- No outside operation Dummy Trim",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8543",
      description: "Freewheeling Trim - Key Outside Unlocks/locks Trim",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
      collars: CollarInfo,
    },
    {
      modelNumber: "8544",
      collars: CollarInfo04,
      description: "Freewheeling Trim - Key Retracts Latch",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8546",
      description:
        "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
      collars: CollarInfo,
    },
    {
      modelNumber: "8563",
      description: "Thumbpiece - Key Unlocks/Locks",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
      collars: CollarInfo,
    },
    {
      modelNumber: "8573",
      description: "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8574",
      description: "Electrified ET Trim - Fail Secure Power Off, Locks Lever",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber)),
};

export const series8600 = {
  name: "8600 Series Wide CVR",
  imageUrl: images.Series8600,
  models: [
    {
      modelNumber: "8606",
      description:
        "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl106Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8610",
      description: "No outside operation Dummy Trim",
      baseCylinder: null,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl106Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8613",
      description: "Key Outside Unlocks/locks Trim",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl106Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8615",
      description: "Passage Only",
      baseCylinder: null,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl106Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8628",
      description: "Thumbpiece - Passage Only",
      baseCylinder: null,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl106Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8640",
      description: "Freewheeling Trim - No outside Operation Dummy Trim",
      baseCylinder: null,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl106Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8643",
      description: "Freewheeling Trim - Key Outside Unlocks/locks Trim",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl106Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8646",
      description:
        "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl106Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8673",
      description:
        "Electrified Lever Trim - Fail Safe Power Off, Unlocks Lever",
      baseCylinder: null,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl106Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8674",
      description:
        "Electrified Lever Trim - Fail Secure Power Off, Locks Lever",
      baseCylinder: null,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl106Prefix,
        ...allCylinderPrefixes,
      ],
    },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber)),
};

export const series8700 = {
  name: "8700 Series Wide SVR",
  imageUrl: images.Series8700,
  models: [
    {
      modelNumber: "8706",
      description:
        "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl306Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8710",
      description: "No Outside Operation (Dummy)",
      baseCylinder: null,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl306Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8713",
      description: "Key Outside Unlocks/Locks Trim",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl306Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8715",
      description: "Passage Only",
      baseCylinder: null,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl306Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8728",
      description: "Thumbpiece - Passage Only",
      baseCylinder: null,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl306Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8740",
      description: "Freewheeling Trim - No outside operation Dummy Trim",
      baseCylinder: null,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl306Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8743",
      description: "Freewheeling Trim - Key Outside Unlocks/locks Trim",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl306Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8746",
      description:
        "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl306Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8762",
      description: "Thumbpiece - Key Unlocks/Locks, Retracts Latch",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [
        ...devicePrefixes80Series,
        auxControl306Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8763",
      description: "Thumbpiece - Key Unlocks/Locks",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [
        ...devicePrefixes80Series,
        auxControl306Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8773",
      description: "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever",
      baseCylinder: null,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl306Prefix,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8774",
      description: "Electrified ET Trim - Fail Secure Power Off, Locks Lever",
      baseCylinder: null,
      prefixes: [
        ...devicePrefixes80Series,
        auxControl306Prefix,
        ...allCylinderPrefixes,
      ],
    },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber)),
};

export const series8800 = {
  name: "8800 Series Wide Rim",
  imageUrl: images.RimExit80,
  models: [
    {
      modelNumber: "8804",
      description: "Key Retracts Latch",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
      collars: CollarInfo04,
    },
    {
      modelNumber: "8806",
      description:
        "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
      collars: CollarInfo,
    },
    {
      modelNumber: "8810",
      description: "No outside operation ET Control is used as Pull Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8813",
      description: "Key Outside Unlocks/Locks Trim",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
      collars: CollarInfo,
    },
    {
      modelNumber: "8815",
      description: "Passage Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8816",
      description:
        "Key Outside Retracts Latch; Key Inside Unlocks/Locks O/S Trim",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [
        // Inside Cyl prefix will be size-adjusted in CylinderFinder.js based on selectedCylinderPrefix
        insideCyl8816, 
        // Device Prefixes
        ...devicePrefixes80Series.filter(
          (p) => p.id !== "127 - Mortise Cylinder Thumbturn"
        ), 
        // Aux Prefixes (127)
        {
          id: "127 - Mortise Cylinder Thumbturn",
          description:
            "Turns your inside Keyed Cylinder into a detachable mortise thumbturn",
          addsCylinder: {
            partNumber: "#44",
            type: "Mortise Cylinder",
            notes: "For alarm kit control.",
          },
          isDeviceSpecific: true,
          keywords: ["127", "thumbturn", "TT"],
        },
        // All non-keyed cylinder prefixes (for the outside rim cyl)
        ...allCylinderPrefixes
      ],
      collars: CollarInfo,
    },
    {
      modelNumber: "8828",
      description: "Thumbpiece - Passage Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8840",
      description: "Freewheeling Trim- No outside operation Dummy Trim",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8843",
      description: "Freewheeling Trim- Key Outside Unlocks/locks Trim",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
      collars: CollarInfo,
    },
    {
      modelNumber: "8844",
      collars: CollarInfo04,
      description: "Freewheeling Trim - Key Retracts Latch",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8846",
      description:
        "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
      collars: CollarInfo,
    },
    {
      modelNumber: "8863",
      description: "Thumbpiece - Key Unlocks/Locks",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
      collars: CollarInfo,
    },
    {
      modelNumber: "8866",
      description:
        "Thumbpiece - Key Outside Retracts, Inside Unlocks/Locks Trim",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [
        {
            id: "Inside Cyl",
            description: `Inside Cylinder (Conventional/LFIC) - Default Size #44 (1-1/2")`,
            addsCylinder: { partNumber: "#44", type: "Mortise Cylinder" },
            isDeviceSpecific: true,
            keywords: [],
        },
        ...devicePrefixes80Series,
        ...allCylinderPrefixes,
      ],
      collars: CollarInfo,
    },
    {
      modelNumber: "8873",
      description: "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8874",
      description: "Electrified ET Trim-Fail Secure Power Off, Locks Lever",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8875",
      description:
        "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever, Key Retracts Latch",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8876",
      description:
        "Electrified ET Trim - Fail Secure Power Off, Locks Lever, Key Retracts Latch",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber)),
};

export const series8900 = {
  name: "8900 Series Wide Mortise",
  imageUrl: images.Series8900,
  models: [
    {
      modelNumber: "8904",
      collars: CollarInfo04,
      description: "Key Retracts Latch",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8906",
      description:
        "Key unlocks Trim, Trim retracts Latch/Trim relocks when key is removed",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8910",
      description: "No outside operation ET Control is used as Pull Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8913",
      description: "Key Outside Unlocks/Locks Trim",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8915",
      description: "Passage Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8916",
      description:
        "Key Outside Retracts Latch, Key Inside Unlocks/Locks O/S Trim",
      baseCylinder: { partNumber: "#46", type: "Mortise Cylinder" },
      prefixes: [
        {
          id: "Inside Cyl",
          description: "Inside Cylinder for 8916 Function",
          addsCylinder: { partNumber: "#34", type: "Rim Cylinder" },
          isDeviceSpecific: true,
          keywords: [],
        },
        ...devicePrefixes80Series,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8928",
      description: "Thumbpiece - Passage Only",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8940",
      description: "Freewheeling Trim- No outside Operation Dummy Trim",
      baseCylinder: null,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8943",
      description: "Freewheeling Trim- Key Outside Unlocks/locks Trim",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8944",
      collars: CollarInfo04,
      description: "Freewheeling Trim- Key Retracts Latch",
      baseCylinder: { partNumber: "#46", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8963",
      description: "Thumbpiece - Key Unlocks/Locks",
      baseCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8966",
      description:
        "Thumbpiece - Key Outside Retracts, Inside Unlocks/Locks Trim",
      baseCylinder: { partNumber: "#34", type: "Rim Cylinder" },
      prefixes: [
        {
          id: "Inside Cyl",
          description: "Inside Cylinder for 8966 Function",
          addsCylinder: { partNumber: "#41", type: "Mortise Cylinder" },
          isDeviceSpecific: true,
          keywords: [],
        },
        ...devicePrefixes80Series,
        ...allCylinderPrefixes,
      ],
    },
    {
      modelNumber: "8975",
      description:
        "Electrified ET Trim-Fail Safe Power Off, Unlocks Lever, Key Retracts Latch",
      baseCylinder: { partNumber: "#46", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
    {
      modelNumber: "8976",
      description:
        "Electrified ET Trim Fail Secure Power Off, Locks Lever, Key Retracts Latch",
      baseCylinder: { partNumber: "#46", type: "Mortise Cylinder" },
      collars: CollarInfo,
      prefixes: [...devicePrefixes80Series, ...allCylinderPrefixes],
    },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber)),
};