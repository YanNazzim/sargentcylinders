// src/utils/cylinderUtils.js

import { images } from '../images/images';
import { getMortiseCollarPartNumber, getProjection } from '../utils/collarLogic'; // Import required collar functions

// Utility function to get cylinder length description
export const getCylinderLengthDescription = (partNumber) => {
    const lengths = {
        41: '1-1/8"', 42: '1-1-4"', 43: '1-3/8"', 44: '1-1/2"', 46: '1-3-4"', 48: '2"', 50: '2-1/4"', 
        52: '2-1/2"', 54: '2-3/4"', 56: '3"',
        "C10-1": "Key-in-Lever/Knob", "C10X-1": "Key-in-Lever/Knob (10X)", "C11-1": "Key-in-Lever/Knob (11 Line)", 
        "C6-1B": "Key-in-Knob (6 Line)",
    };
    return lengths[partNumber.replace("#", "")] || partNumber;
};

// Utility function to check if a prefix is an Auxiliary (stackable/checkbox) control
export const isAuxPrefix = (id) => id.startsWith("106") || id.startsWith("306") || id.startsWith("127");


// --- CORE LOOKUP LOGIC ---
export const getCoreDetails = (prefix, isBoredLock) => {
    const keyingSuffix = " x Keying Details";
    const systemPrefixMatch = prefix.match(/^(DG[123]-|11-)/);
    const systemPrefix = systemPrefixMatch ? systemPrefixMatch[0] : "";
    const basePrefixRaw = prefix.replace(systemPrefix, "");

    if (prefix.startsWith("F1-83-")) { return { partNumber: `F1-51xx${keyingSuffix}`, description: "KESO F1 Removable Core. (Size depends on housing)" }; }

    if (isBoredLock) {
        const is7Pin = basePrefixRaw.includes("7P-");
        
        // LFIC CORE LOGIC (Bored Locks)
        if (basePrefixRaw.includes("63-")) { return { partNumber: `${systemPrefix}6300${keyingSuffix}`, description: "LFIC Permanent Core (INCLUDED with device).", coreModel: "6300" }; }
        if (basePrefixRaw.includes("64-")) { return { partNumber: `${systemPrefix}6400${keyingSuffix}`, description: "LFIC Construction Core (INCLUDED with device).", coreModel: "6400" }; }
        if (basePrefixRaw.includes("60-")) {
            const permanentCore = `${systemPrefix}6300`;
            const constructionCore = `${systemPrefix}6400`;
            return { partNumber: `${permanentCore} OR ${constructionCore}${keyingSuffix}`, description: `LFIC Core (MUST BE ORDERED SEPARATELY). Permanent: ${permanentCore} or Construction: ${constructionCore}.`, coreModel: "60-HOUSING" };
        }

        // SFIC CORE LOGIC (Bored Locks)
        const coreModelPerm = is7Pin ? "7P-7300B" : "7300B";
        const coreModelConst = "7200";
        
        if (basePrefixRaw.includes("73-")) { return { partNumber: `${systemPrefix}${coreModelPerm}${keyingSuffix}`, description: `SFIC ${is7Pin ? '7-Pin' : '6-Pin'} Permanent Core (INCLUDED with device).`, coreModel: "7300B" }; }
        if (basePrefixRaw.includes("72-")) { return { partNumber: `${systemPrefix}${coreModelConst}${keyingSuffix}`, description: `SFIC ${is7Pin ? '7-Pin' : '6-Pin'} Construction Core (INCLUDED with device).`, coreModel: "7200" }; }
        if (basePrefixRaw.includes("70-")) {
            const permanentCore = `${systemPrefix}${coreModelPerm}`;
            const constructionCore = `${systemPrefix}${coreModelConst}`;
            return { partNumber: `${permanentCore} OR ${constructionCore}${keyingSuffix}`, description: `SFIC Core (MUST BE ORDERED SEPARATELY). Permanent: ${permanentCore} or Construction: ${constructionCore}.`, coreModel: "70-HOUSING" };
        }
    } else {
        // EXIT/MORTISE LOCK LOGIC (simplified acceptance/included check)
        if (basePrefixRaw.includes("63-") || basePrefixRaw.includes("73-") || basePrefixRaw.includes("72-") || basePrefixRaw.includes("64-")) {
            return { partNumber: "Core Included", description: "Core is included with the cylinder housing.", coreModel: "Included" };
        }
        if (basePrefixRaw.includes("60-") || basePrefixRaw.includes("70-")) {
            return { partNumber: "Core Acceptance Housing", description: "Core must be ordered separately.", coreModel: "Housing" };
        }
    }

    return null;
};
// --- END CORE LOOKUP LOGIC ---


// --- IMAGE LOOKUP LOGIC ---
const getCylinderImage = (cyl, selectedCylinderPrefix, isLficCore, isSficCore) => {
    const isDgPrefix = selectedCylinderPrefix?.startsWith("DG");
    const isDgLfic = isDgPrefix && isLficCore;
    const hasKesoPrefix = selectedCylinderPrefix && ["F1-82-", "F1-83-", "82-", "83-"].some(p => selectedCylinderPrefix.startsWith(p));

    if (cyl.coreDetails?.coreModel) {
        if (cyl.coreDetails.coreModel.includes("6300") || cyl.coreDetails.coreModel === "60-HOUSING") return images.CoreLFIC6300;
        if (cyl.coreDetails.coreModel.includes("6400")) return images.CoreLFIC6400;
        if (cyl.coreDetails.coreModel.includes("7300B") || cyl.coreDetails.coreModel === "70-HOUSING") return images.CoreSFIC7300;
        if (cyl.coreDetails.coreModel.includes("7200")) return images.CoreSFIC7200;
    }

    if (cyl.role === "127 - Mortise Cylinder Thumbturn") return images.TT127;
    
    if (selectedCylinderPrefix) {
        if (isDgPrefix) {
            if (cyl.type.includes("Mortise") && isDgLfic) return images.DGLFICMortise;
            if (cyl.type.includes("Mortise")) return images.DGMortise;
            if (cyl.type.includes("Rim") && isDgLfic) return images.DGLFICRim;
            if (cyl.type.includes("Rim")) return images.DGRim;
            if (cyl.type.includes("Key-in-Lever") || cyl.type.includes("Key-in-Knob")) return images.KILCyls;
        } 
        if (selectedCylinderPrefix.startsWith("11-")) return images.XCcyls;
        if (hasKesoPrefix) return images.KESOcyls;
        if (isLficCore) {
            if (cyl.type.includes("Mortise")) return images.LFICMortise;
            if (cyl.type.includes("Rim")) return images.LFICRim;
        } 
        if (isSficCore) {
            if (cyl.type.includes("Mortise")) return images.SFICMortise;
            if (cyl.type.includes("Rim")) return images.SFICRim;
        }
    }

    if (cyl.type.includes("Key-in-Lever") || cyl.type.includes("Key-in-Knob")) return images.KILCyls;
    if (cyl.type.includes("Rim Cylinder")) return images.RimCyls;
    if (cyl.type.includes("Mortise Cylinder")) return images.MortiseCyls;

    return images.sargentlogo;
};
// --- END IMAGE LOOKUP LOGIC ---


/**
 * Processes the raw list of required cylinders (Base + Aux/Device Prefixes)
 * into the final, formatted list, applying prefix logic, size adjustments,
 * core details, image URLs, and collar recommendations.
 */
export const processFinalCylinders = (rawCylinderList, options, cylinderPrefixCategories) => {
    const {
        selectedCylinderPrefix, activeModelData, selectedDoorThickness, selectedTrimType, cylCount, 
        isBoredLock, isMortiseLock, isMullion980C2, isMullion980C1, isLficCore, isSficCore
    } = options;
    
    // 1. CONSOLIDATION (Merge duplicate cylinders/kits)
    const consolidatedMap = new Map();
    rawCylinderList.forEach((cyl) => {
        const key = `${cyl.partNumber}-${cyl.role}`;
        const existing = consolidatedMap.get(key);
        consolidatedMap.set(key, { ...cyl, quantity: (existing?.quantity || 0) + 1, sourcePrefix: existing?.sourcePrefix || cyl.sourcePrefix });
    });
    let finalCylindersArray = Array.from(consolidatedMap.values());
    
    // 2. FINAL MAPPING & ADJUSTMENTS
    return finalCylindersArray.map((cyl) => {
        let basePartNumber = cyl.partNumber.replace("#", "");
        const is127Thumbturn = cyl.role === "127 - Mortise Cylinder Thumbturn";
        const is8816InsideCylinder = (activeModelData.modelNumber === "8816" || activeModelData.modelNumber === "PE8816") && (cyl.role.includes("Inside Cylinder"));
        const isRimCylinderOnExitDevice = cyl.partNumber.includes("34") && activeModelData.category === "Exit Devices";
        const isBaseMortiseOrRimCylinder = cyl.type.includes("Mortise Cylinder") || cyl.type.includes("Rim Cylinder");
        const isBoredLFICOrSFICSystem = isBoredLock && cyl.role === "Bored Lock Core System";


        // A. SIZE ADJUSTMENTS (For Exit/Mortise LFIC/SFIC Housings)
        if (selectedCylinderPrefix && isBaseMortiseOrRimCylinder && !is127Thumbturn) {
            if (isLficCore) {
                if (basePartNumber === "41" || basePartNumber === "44") basePartNumber = "42"; 
            } else if (isSficCore) {
                if (basePartNumber === "41" || (basePartNumber === "44" && !is8816InsideCylinder)) basePartNumber = "43";
                if (is8816InsideCylinder && basePartNumber === "44") {
                    basePartNumber = "46";
                    cyl.notes = (cyl.notes ? `${cyl.notes} / ` : '') + 'SFIC prefix detected: Inside cylinder size adjusted to #46 (1-3/4") for correct trim fit.';
                }
            }
        }
        
        // B. CORE DETAILS & DESCRIPTIONS
        let coreDetails = cyl.coreDetails;
        if (selectedCylinderPrefix && !is127Thumbturn && !isBoredLFICOrSFICSystem) {
             coreDetails = getCoreDetails(selectedCylinderPrefix, isBoredLock);
        }
        
        let finalPartNumber = `${basePartNumber} x Keying Details x Finish`;
        let calculatedNotes = cyl.notes;
        let lengthDesc = getCylinderLengthDescription(basePartNumber);
        let calculatedDescription = `${lengthDesc} ${cyl.type}`;

        if (isBoredLFICOrSFICSystem) {
            // Logic for Bored Lock core-only entries
            const corePartDisplay = coreDetails.partNumber.replace(" x Keying Details", "");
            finalPartNumber = `${corePartDisplay} x Keying Details x Finish`;
            
            if (coreDetails.coreModel.includes("HOUSING")) {
                calculatedDescription = `${cyl.type} Core Acceptance Housing`; // Simplified main description
                calculatedNotes = null; // Let the coreDetails box handle the details
            } else {
                calculatedDescription = coreDetails.description.split('(')[0].trim(); // Use description like "LFIC Permanent Core"
                calculatedNotes = `Core Part Number: ${corePartDisplay}. This is INCLUDED with the device.`;
                coreDetails = null; // Don't show the separate coreDetails box if it's included.
            }
        } else if (is127Thumbturn) {
            finalPartNumber = `127-${basePartNumber} x Finish`;
            calculatedDescription = `Mortise Detachable Thumbturn`;
        } else if (selectedCylinderPrefix) {
            const prefixData = cylinderPrefixCategories.flatMap(c => c.prefixes).find(p => p.id === selectedCylinderPrefix);
            const prefixDesc = prefixData ? prefixData.description.replace("Device", "Cylinder") : "";

            if (coreDetails?.description?.includes("MUST BE ORDERED SEPARATELY") || coreDetails?.coreModel === "Housing") {
                finalPartNumber = `${selectedCylinderPrefix.replace(/-/g, "")}${basePartNumber} x Finish`; 
                calculatedDescription = `${lengthDesc} ${cyl.type} HOUSING: ${prefixDesc}`;
                calculatedNotes = `CORE required for housing (Ordered separately).`;
            } else {
                finalPartNumber = `${selectedCylinderPrefix}${basePartNumber} x Keying Details x Finish`;
                calculatedDescription += ` ${prefixDesc}`;
                if (coreDetails?.description.includes("(INCLUDED)")) {
                    calculatedDescription = `${lengthDesc} ${cyl.type} with CORE: ${prefixDesc}`;
                }
            }
        } else {
            finalPartNumber = `${basePartNumber} x Keying Details x Finish`;
        }
        
        // C. NOTES Finalization
        if (!isBoredLFICOrSFICSystem && isBoredLock && !is127Thumbturn && !cyl.notes) {
            calculatedNotes = "Standard cylinder. **Standard tailpiece provided when ordered 'less cylinder'.**";
        } else if (!isMullion980C2 && !isMullion980C1 && !coreDetails && !isBoredLock) {
            if (cyl.role === "Outside Cylinder") calculatedNotes = "For the outside of the door.";
            else if (cyl.role === "Inside Cylinder") calculatedNotes = "For the inside of the door.";
        }

        // D. IMAGE LOOKUP
        const cylinderImageUrl = getCylinderImage({ ...cyl, coreDetails }, selectedCylinderPrefix, isLficCore, isSficCore);


        // E. COLLAR LOGIC 
        const cylinderCollars = [];
        const collarSource = cyl.sourcePrefix?.collars || activeModelData.collars;
        
        if (is127Thumbturn) {
            cylinderCollars.push({
              partNumber: "98-0021 x Finish",
              description: "Blocking Ring (Mandatory for 127 Thumbturn on 8816/PE8816)",
              projection: getProjection("98-0021"),
              imageUrl: images.BR8816,
            });
        }
        else if (isMortiseLock) {
            const mortiseCollar = getMortiseCollarPartNumber(basePartNumber, selectedCylinderPrefix, selectedDoorThickness, selectedTrimType, cylCount);
            if (mortiseCollar) {
              let collarImage = images.Collar1KB;
              const pnPrefix = mortiseCollar.partNumber.substring(0, mortiseCollar.partNumber.indexOf("x")).trim();
              if (pnPrefix.startsWith("1KA")) collarImage = images.Collar1KA;
              else if (pnPrefix.startsWith("1SB")) collarImage = images.Collar1SB;
              else if (pnPrefix.startsWith("97")) collarImage = images.Rosette97;
              else if (pnPrefix.startsWith("90")) collarImage = images.Ring90;
              cylinderCollars.push({ ...mortiseCollar, imageUrl: collarImage });
            }
        }
        else if (collarSource && !isRimCylinderOnExitDevice) {
            const { default: defaultCollar, conditional: conditionalCollars } = collarSource;
            let selectedConditionalCollar = null;
            
            if (conditionalCollars) {
              selectedConditionalCollar = conditionalCollars.find(
                (collar) =>
                  (collar.prefix === "60-" && isLficCore) ||
                  (collar.prefix === "70-" && isSficCore)
              );
            }
            if (selectedConditionalCollar)
              cylinderCollars.push({ ...selectedConditionalCollar, imageUrl: selectedConditionalCollar.imageUrl || images.sargentlogo, });
            else if (defaultCollar)
              cylinderCollars.push({ ...defaultCollar, imageUrl: defaultCollar.imageUrl || images.sargentlogo, });
        }


        return {
            ...cyl,
            partNumber: finalPartNumber,
            description: calculatedDescription.trim(),
            notes: calculatedNotes,
            collars: cylinderCollars,
            coreDetails: coreDetails,
            imageUrl: cylinderImageUrl,
        };
    });
};