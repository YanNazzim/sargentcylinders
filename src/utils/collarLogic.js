// src/utils/collarLogic.js

// --- LFIC/SFIC Prefix Check Functions ---
export const isLficForCollar = (prefix) => {
    if (!prefix) return false;
    return prefix.includes("60-") || prefix.includes("63-") || prefix.includes("64-");
};

export const isSficForCollar = (prefix) => {
    if (!prefix) return false;
    return prefix.includes("70-") || prefix.includes("72-") || prefix.includes("73-");
};

// --- Mortise Collar Lookup Data (from page 42 collars for mortis.pdf) ---
// Define the single cylinder data first to avoid self-reference issues.
const singleCylinderData = {
    // Sectional Trim (CO, CR, L, LN, O, PT, SL, SN, TO, TR)
    "SECTIONAL": {
        trimDescription: "Sectional Trim",
        lookup: {
            "41": { // Conventional
                "1-3/8\"": { partNumber: "1KB-2", projection: "7/16\" (11mm)" },
                "1-3/4\"": { partNumber: "1KB-1", projection: "5/16\" (8mm)" },
                "2\"":     { partNumber: "1KB-1", projection: "5/16\" (8mm)" },
                "2-1/4\"": { partNumber: "N/A", projection: "N/A" }
            },
            "42": { // LFIC (6x-)/XC-LFIC (11-6x-) uses #42 cylinder
                "1-3/8\"": { partNumber: "1KB-3", projection: "9/16\" (14mm)" },
                "1-3/4\"": { partNumber: "1KB-2", projection: "7/16\" (11mm)" },
                "2\"":     { partNumber: "1KB-2", projection: "7/16\" (11mm)" },
                "2-1/4\"": { partNumber: "1KB-1", projection: "5/16\" (8mm)" }
            },
            "43": { // SFIC (7x-)/XC-SFIC (11-7x-) uses #43 cylinder
                "1-3/8\"": { partNumber: "1KB-4", projection: "11/16\" (16mm)" },
                "1-3/4\"": { partNumber: "1KB-3", projection: "9/16\" (14mm)" },
                "2\"":     { partNumber: "1KB-3", projection: "9/16\" (14mm)" },
                "2-1/4\"": { partNumber: "1KB-3", projection: "9/16\" (14mm)" }
            }
        }
    },
    // Escutcheon Trim (CE, KE1, LE1, LE2, etc.)
    "ESCUTCHEON": {
        trimDescription: "Escutcheon Trim (LE1, CE, etc.)",
        lookup: {
            "41": {
                "1-3/8\"": { partNumber: "1KB-1", projection: "5/16\" (8mm)" },
                "1-3/4\"": { partNumber: "CYLINDER ONLY", projection: "N/A" },
                "2\"":     { partNumber: "CYLINDER ONLY", projection: "N/A" },
                "2-1/4\"": { partNumber: "CYLINDER ONLY", projection: "N/A" }
            },
            "42": {
                "1-3/8\"": { partNumber: "1KB-2", projection: "7/16\" (11mm)" },
                "1-3/4\"": { partNumber: "1KB-1", projection: "5/16\" (8mm)" },
                "2\"":     { partNumber: "CYLINDER ONLY", projection: "N/A" },
                "2-1/4\"": { partNumber: "CYLINDER ONLY", projection: "N/A" }
            },
            "43": {
                "1-3/8\"": { partNumber: "1KB-3", projection: "9/16\" (14mm)" },
                "1-3/4\"": { partNumber: "1KB-1", projection: "5/16\" (8mm)" },
                "2\"":     { partNumber: "1KB-1", projection: "5/16\" (8mm)" },
                "2-1/4\"": { partNumber: "CYLINDER ONLY", projection: "N/A" }
            }
        }
    },
    // Specialty Hardware (BHW, BHL, BHD, ALP)
    "SPECIALTY": {
        trimDescription: "Specialty Hardware (BHW, ALP, etc.)",
        lookup: {
             "41": {
                "1-3/8\"": { partNumber: "1SB-2", projection: "7/16\" (11mm)" },
                "1-3/4\"": { partNumber: "CYLINDER ONLY", projection: "N/A" },
                "2\"":     { partNumber: "1SB-1", projection: "5/16\" (8mm)" },
                "2-1/4\"": { partNumber: "1SB-1", projection: "5/16\" (8mm)" }
            },
            "42": {
                "1-3/8\"": { partNumber: "1SB-3", projection: "9/16\" (14mm)" },
                "1-3/4\"": { partNumber: "1SB-1", projection: "5/16\" (8mm)" },
                "2\"":     { partNumber: "1SB-2", projection: "7/16\" (11mm)" },
                "2-1/4\"": { partNumber: "1SB-2", projection: "7/16\" (11mm)" }
            },
            "43": {
                "1-3/8\"": { partNumber: "1SB-4", projection: "11/16\" (16mm)" },
                "1-3/4\"": { partNumber: "1SB-3", projection: "9/16\" (14mm)" },
                "2\"":     { partNumber: "1SB-3", projection: "9/16\" (14mm)" },
                "2-1/4\"": { partNumber: "1SB-3", projection: "9/16\" (14mm)" }
            }
        }
    }
};

const MORTISE_COLLAR_LOOKUP = {
    "SINGLE_CYLINDER": singleCylinderData,
    "DOUBLE_CYLINDER": {
        "SECTIONAL": {
            trimDescription: "Sectional Trim - Double Cylinder",
            lookup: {
                 "41": {
                    "1-3/8\"": { partNumber: "1KB-3", projection: "9/16\" (14mm)" },
                    "1-3/4\"": { partNumber: "1KB-2", projection: "7/16\" (11mm)" },
                    "2\"":     { partNumber: "1KB-2", projection: "7/16\" (11mm)" },
                    "2-1/4\"": { partNumber: "N/A", projection: "N/A" }
                },
                "42": {
                    "1-3/8\"": { partNumber: "1KB-4", projection: "11/16\" (16mm)" },
                    "1-3/4\"": { partNumber: "1KB-2", projection: "7/16\" (11mm)" },
                    "2\"":     { partNumber: "1KB-3", projection: "9/16\" (14mm)" },
                    "2-1/4\"": { partNumber: "1KB-1", projection: "5/16\" (8mm)" }
                },
                "43": {
                    "1-3/8\"": { partNumber: "97-0352", projection: "Variable" },
                    "1-3/4\"": { partNumber: "1KB-4", projection: "11/16\" (16mm)" },
                    "2\"":     { partNumber: "1KB-3", projection: "9/16\" (14mm)" },
                    "2-1/4\"": { partNumber: "1KB-2", projection: "7/16\" (11mm)" }
                }
            }
        },
        "ESCUTCHEON": {
            ...singleCylinderData.ESCUTCHEON,
            trimDescription: "Escutcheon Trim - Double Cylinder"
        },
        "SPECIALTY": {
            ...singleCylinderData.SPECIALTY,
            trimDescription: "Specialty Hardware - Double Cylinder"
        },
    }
};


// --- Mortise Collar Lookup Function ---
export function getMortiseCollarPartNumber(cylinderPartNumber, keyPrefix, doorThickness, trimType, cylCount) {
    let baseSize = cylinderPartNumber.replace(/[^0-9]/g, '');

    // 1. Determine the effective cylinder size for the lookup table (41/42/43).
    if (baseSize === '42' && isLficForCollar(keyPrefix)) {
        baseSize = '42';
    } else if (baseSize === '43' && isSficForCollar(keyPrefix)) {
        baseSize = '43';
    } else if (baseSize === '41' && isLficForCollar(keyPrefix)) {
        baseSize = '42'; // LFIC #41 is typically housed in a #42 setup
    } else if (baseSize === '41' && isSficForCollar(keyPrefix)) {
        baseSize = '43'; // SFIC #41 is typically housed in a #43 setup
    } else if (baseSize === '41' || baseSize === '44') {
        baseSize = '41'; // Use #41 for all other conventional mortise cylinders
    } else if (baseSize === '46') {
        baseSize = '43'; // Use #43 for #46 (nearest logical size/housing match)
    } else {
        return null; // Size not compatible with lookup matrix
    }


    const trimData = MORTISE_COLLAR_LOOKUP[cylCount]?.[trimType];

    if (!trimData) return null;

    const sizeData = trimData.lookup[baseSize];

    if (!sizeData) return null;

    const collarInfo = sizeData[doorThickness];

    if (!collarInfo || collarInfo.partNumber.includes("N/A") || collarInfo.partNumber.includes("CYLINDER ONLY")) {
        return null;
    }

    return {
        partNumber: `${collarInfo.partNumber} x Finish`,
        description: `${trimData.trimDescription} Collar (Mortise Lock)`,
        projection: collarInfo.projection
    };
}