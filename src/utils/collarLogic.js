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

// --- Projection Helper Function (New) ---
export const getProjection = (partNumber) => { // <-- FIXED: Added export
    switch (partNumber) {
        case '1KB-1':
        case '1KA-1':
        case '1SB-1':
            return '5/16" (8mm)';
        case '1KB-2':
        case '1KA-2':
        case '1SB-2':
            return '7/16" (11mm)';
        case '1KB-3':
        case '1KA-3':
        case '1SB-3':
            return '9/16" (14mm)';
        case '1KB-4':
        case '1KA-4':
        case '1SB-4':
            return '11/16" (16mm)';
        case '90 1/8':
            return '1/8" (3mm)'; // Blocking ring projection
        case '97':
        case '97-0352':
            return 'Variable (Collar/Rosette)'; // Default rosette/misc collar
        case 'N/A':
        case 'CYLINDER ONLY':
            return 'N/A';
        default:
            return 'Variable'; // Fallback
    }
}


// --- Mortise Collar Lookup Data (Comprehensive Update from PDF) ---
const MORTISE_COLLAR_LOOKUP = {
    // ------------------------------------------------------------------------------------------------------
    // Single Cylinder Tables
    // ------------------------------------------------------------------------------------------------------
    "SINGLE_CYLINDER": {
        // A. Sectional Trim (CO, CR, L, LN, O, PT, SL, SN, TO, TR)
        "SECTIONAL": {
            trimDescription: "Sectional Trim (CO, L, O, etc.)",
            lookup: {
                "41": { "1-3/8\"": { partNumber: "1KB-2" }, "1-3/4\"": { partNumber: "1KB-1" }, "2\"": { partNumber: "1KB-1" }, "2-1/4\"": { partNumber: "N/A" } },
                "42": { "1-3/8\"": { partNumber: "1KB-3" }, "1-3/4\"": { partNumber: "1KB-2" }, "2\"": { partNumber: "1KB-2" }, "2-1/4\"": { partNumber: "1KB-1" } },
                "43": { "1-3/8\"": { partNumber: "1KB-4" }, "1-3/4\"": { partNumber: "1KB-3" }, "2\"": { partNumber: "1KB-3" }, "2-1/4\"": { partNumber: "1KB-3" } }
            }
        },
        // B. Sectional Trim (E, E2, E3, E4)
        "SECTIONAL_E_TRIM": {
            trimDescription: "Sectional Trim (E, E2, E3, E4)",
            lookup: {
                "41": { "1-3/8\"": { partNumber: "1KA-2" }, "1-3/4\"": { partNumber: "1KA-1" }, "2\"": { partNumber: "1KA-1" }, "2-1/4\"": { partNumber: "N/A" } },
                "42": { "1-3/8\"": { partNumber: "1KA-3" }, "1-3/4\"": { partNumber: "1KA-2" }, "2\"": { partNumber: "1KA-2" }, "2-1/4\"": { partNumber: "1KA-1" } },
                "43": { "1-3/8\"": { partNumber: "1KA-4" }, "1-3/4\"": { partNumber: "1KA-3" }, "2\"": { partNumber: "1KA-3" }, "2-1/4\"": { partNumber: "1KA-3" } }
            }
        },
        // C. Escutcheon Trim (CE, KE1, KE2, KW1, LE1, LE2, LW1, TE)
        "ESCUTCHEON": {
            trimDescription: "Escutcheon Trim (LE1, CE, etc.)",
            lookup: {
                "41": { "1-3/8\"": { partNumber: "1KB-2" }, "1-3/4\"": { partNumber: "90 1/8" }, "2\"": { partNumber: "CYLINDER ONLY" }, "2-1/4\"": { partNumber: "CYLINDER ONLY" } },
                "42": { "1-3/8\"": { partNumber: "1KB-3" }, "1-3/4\"": { partNumber: "1KB-2" }, "2\"": { partNumber: "1KB-1" }, "2-1/4\"": { partNumber: "CYLINDER ONLY" } },
                "43": { "1-3/8\"": { partNumber: "1KB-4" }, "1-3/4\"": { partNumber: "1KB-3" }, "2\"": { partNumber: "1KB-2" }, "2-1/4\"": { partNumber: "90 1/8" } }
            }
        },
        // D. Escutcheon Trim (WT)
        "ESCUTCHEON_WT_TRIM": {
            trimDescription: "Escutcheon Trim (WT)",
            lookup: {
                "41": { "1-3/8\"": { partNumber: "97" }, "1-3/4\"": { partNumber: "CYLINDER ONLY" }, "2\"": { partNumber: "CYLINDER ONLY" }, "2-1/4\"": { partNumber: "CYLINDER ONLY" } },
                "42": { "1-3/8\"": { partNumber: "1SB-2" }, "1-3/4\"": { partNumber: "97" }, "2\"": { partNumber: "CYLINDER ONLY" }, "2-1/4\"": { partNumber: "CYLINDER ONLY" } },
                "43": { "1-3/8\"": { partNumber: "1SB-3" }, "1-3/4\"": { partNumber: "97" }, "2\"": { partNumber: "97" }, "2-1/4\"": { partNumber: "CYLINDER ONLY" } }
            }
        },
        // E. Specialty Hardware (BHW, BHL, BHD, ALP)
        "SPECIALTY": {
            trimDescription: "Specialty Hardware (BHW, ALP, etc.)",
            lookup: {
                "41": { "1-3/8\"": { partNumber: "1SB-2" }, "1-3/4\"": { partNumber: "1SB-1" }, "2\"": { partNumber: "1SB-1" }, "2-1/4\"": { partNumber: "N/A" } },
                "42": { "1-3/8\"": { partNumber: "1SB-3" }, "1-3/4\"": { partNumber: "1SB-2" }, "2\"": { partNumber: "1SB-2" }, "2-1/4\"": { partNumber: "1SB-1" } },
                "43": { "1-3/8\"": { partNumber: "1SB-4" }, "1-3/4\"": { partNumber: "1SB-3" }, "2\"": { partNumber: "1SB-3" }, "2-1/4\"": { partNumber: "1SB-3" } }
            }
        },
        // F. Sectional and Escutcheon Trim with V Series Indicators (Single Cyl)
        "V_SERIES_TRIM": {
            trimDescription: "Sectional/Escutcheon Trim with V Series Indicator",
            lookup: {
                "41": { "1-3/8\"": { partNumber: "CYLINDER ONLY" }, "1-3/4\"": { partNumber: "CYLINDER ONLY" }, "2\"": { partNumber: "N/A" }, "2-1/4\"": { partNumber: "N/A" } },
                "42": { "1-3/8\"": { partNumber: "1KB-1" }, "1-3/4\"": { partNumber: "CYLINDER ONLY" }, "2\"": { partNumber: "CYLINDER ONLY" }, "2-1/4\"": { partNumber: "N/A" } },
                "43": { "1-3/8\"": { partNumber: "1KB-2" }, "1-3/4\"": { partNumber: "1KB-1" }, "2\"": { partNumber: "CYLINDER ONLY" }, "2-1/4\"": { partNumber: "CYLINDER ONLY" } }
            }
        },
    },
    // ------------------------------------------------------------------------------------------------------
    // Double Cylinder Tables
    // ------------------------------------------------------------------------------------------------------
    "DOUBLE_CYLINDER": {
        // A. Sectional Trim (CO, CR, L, LN, O, PT, SL, SN, TO, TR)
        "SECTIONAL": {
            trimDescription: "Sectional Trim (CO, L, O, etc.) - Double Cylinder",
            lookup: {
                "41": { "1-3/8\"": { partNumber: "1KB-3" }, "1-3/4\"": { partNumber: "1KB-2" }, "2\"": { partNumber: "1KB-1" }, "2-1/4\"": { partNumber: "N/A" } },
                "42": { "1-3/8\"": { partNumber: "1KB-4" }, "1-3/4\"": { partNumber: "1KB-3" }, "2\"": { partNumber: "1KB-2" }, "2-1/4\"": { partNumber: "1KB-1" } },
                "43": { "1-3/8\"": { partNumber: "97-0352" }, "1-3/4\"": { partNumber: "1KB-4" }, "2\"": { partNumber: "1KB-3" }, "2-1/4\"": { partNumber: "1KB-2" } }
            }
        },
        // B. Sectional Trim (E, E2, E3, E4)
        "SECTIONAL_E_TRIM": {
            trimDescription: "Sectional Trim (E, E2, E3, E4) - Double Cylinder",
            lookup: {
                "41": { "1-3/8\"": { partNumber: "1KA-3" }, "1-3/4\"": { partNumber: "1KA-2" }, "2\"": { partNumber: "1KA-1" }, "2-1/4\"": { partNumber: "N/A" } },
                "42": { "1-3/8\"": { partNumber: "1KA-4" }, "1-3/4\"": { partNumber: "1KA-3" }, "2\"": { partNumber: "1KA-2" }, "2-1/4\"": { partNumber: "1KA-1" } },
                "43": { "1-3/8\"": { partNumber: "1KA-4" }, "1-3/4\"": { partNumber: "1KA-3" }, "2\"": { partNumber: "1KA-2" }, "2-1/4\"": { partNumber: "1KA-1" } }
            }
        },
        // C. Escutcheon Trim (CE, KE1, KE2, KW1, LE1, LE2, LW1, TE) - CORRECTED
        "ESCUTCHEON": {
            trimDescription: "Escutcheon Trim (LE1, CE, etc.) - Double Cylinder",
            lookup: {
                "41": { "1-3/8\"": { partNumber: "1KB-1" }, "1-3/4\"": { partNumber: "90 1/8" }, "2\"": { partNumber: "CYLINDER ONLY" }, "2-1/4\"": { partNumber: "CYLINDER ONLY" } },
                "42": { "1-3/8\"": { partNumber: "1KB-2" }, "1-3/4\"": { partNumber: "1KB-1" }, "2\"": { partNumber: "CYLINDER ONLY" }, "2-1/4\"": { partNumber: "CYLINDER ONLY" } },
                "43": { "1-3/8\"": { partNumber: "1KB-3" }, "1-3/4\"": { partNumber: "1KB-1" }, "2\"": { partNumber: "1KB-1" }, "2-1/4\"": { partNumber: "CYLINDER ONLY" } }
            }
        },
        // D. Escutcheon Trim (WT) - CORRECTED
        "ESCUTCHEON_WT_TRIM": {
            trimDescription: "Escutcheon Trim (WT) - Double Cylinder",
            lookup: {
                "41": { "1-3/8\"": { partNumber: "1SB-2" }, "1-3/4\"": { partNumber: "90 1/8" }, "2\"": { partNumber: "97" }, "2-1/4\"": { partNumber: "CYLINDER ONLY" } },
                "42": { "1-3/8\"": { partNumber: "1SB-3" }, "1-3/4\"": { partNumber: "97" }, "2\"": { partNumber: "1SB-2" }, "2-1/4\"": { partNumber: "CYLINDER ONLY" } },
                "43": { "1-3/8\"": { partNumber: "1SB-4" }, "1-3/4\"": { partNumber: "1SB-2" }, "2\"": { partNumber: "1SB-2" }, "2-1/4\"": { partNumber: "97" } }
            }
        },
        // E. Specialty Hardware (BHW, BHL, BHD, ALP)
        "SPECIALTY": {
            trimDescription: "Specialty Hardware (BHW, ALP, etc.) - Double Cylinder",
            lookup: {
                "41": { "1-3/8\"": { partNumber: "1SB-3" }, "1-3/4\"": { partNumber: "1SB-1" }, "2\"": { partNumber: "1SB-2" }, "2-1/4\"": { partNumber: "N/A" } },
                "42": { "1-3/8\"": { partNumber: "1SB-4" }, "1-3/4\"": { partNumber: "1SB-3" }, "2\"": { partNumber: "1SB-2" }, "2-1/4\"": { partNumber: "1SB-1" } },
                "43": { "1-3/8\"": { partNumber: "1SB-4" }, "1-3/4\"": { partNumber: "1SB-4" }, "2\"": { partNumber: "1SB-3" }, "2-1/4\"": { partNumber: "1SB-2" } }
            }
        },
        // F. Sectional and Escutcheon Trim with V Series Indicators (Double Cyl)
        "V_SERIES_TRIM": {
            trimDescription: "Sectional/Escutcheon Trim with V Series Indicator - Double Cylinder",
            lookup: {
                "41": { "1-3/8\"": { partNumber: "1KB-1" }, "1-3/4\"": { partNumber: "CYLINDER ONLY" }, "2\"": { partNumber: "N/A" }, "2-1/4\"": { partNumber: "N/A" } },
                "42": { "1-3/8\"": { partNumber: "1KB-1" }, "1-3/4\"": { partNumber: "1KB-1" }, "2\"": { partNumber: "CYLINDER ONLY" }, "2-1/4\"": { partNumber: "N/A" } },
                "43": { "1-3/8\"": { partNumber: "1KB-2" }, "1-3/4\"": { partNumber: "1KB-1" }, "2\"": { partNumber: "1KB-1" }, "2-1/4\"": { partNumber: "CYLINDER ONLY" } }
            }
        },
    }
};


// --- Mortise Collar Lookup Function ---
export function getMortiseCollarPartNumber(cylinderPartNumber, keyPrefix, doorThickness, trimType, cylCount) {
    let baseSize = cylinderPartNumber.replace(/[^0-9]/g, '');

    // 1. Determine the effective cylinder size for the lookup table (41/42/43).
    // The previous conditional fix is removed as the data tables were manually corrected.
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
        projection: getProjection(collarInfo.partNumber)
    };
}