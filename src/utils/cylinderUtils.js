// src/utils/cylinderUtils.js

/**
 * consistently formats a list of prefixes into a hyphenated string.
 * Example: ["DG2", "60"] -> "DG2-60-"
 */
export const formatPrefixes = (prefixes) => {
  if (!prefixes || prefixes.length === 0) return "";
  // Filter out empty strings and join with hyphens
  const cleanPrefixes = prefixes.filter(p => p && p.trim() !== "");
  if (cleanPrefixes.length === 0) return "";
  return cleanPrefixes.join("-") + "-";
};

/**
 * Determines the specific core part number required based on the housing prefix.
 * Returns an object with partNumber and description.
 */
export const getCoreDetails = (prefixId, isBored = false) => {
  if (!prefixId) return null;

  // --- DEGREE LFIC Logic ---
  if (prefixId.includes("DG1-60") || prefixId.includes("DG1-63") || prefixId.includes("DG1-64")) {
    return {
      partNumber: "DG1-6300",
      description: "Degree Level 1 Permanent Core (Order DG1-6400 for Construction)"
    };
  }
  if (prefixId.includes("DG2-60") || prefixId.includes("DG2-63") || prefixId.includes("DG2-64")) {
    return {
      partNumber: "DG2-6300",
      description: "Degree Level 2 Permanent Core (Order DG2-6400 for Construction)"
    };
  }
  if (prefixId.includes("DG3-60") || prefixId.includes("DG3-63") || prefixId.includes("DG3-64")) {
    return {
      partNumber: "DG3-6300",
      description: "Degree Level 3 Permanent Core (Order DG3-6400 for Construction)"
    };
  }

  // --- STANDARD LFIC Logic ---
  if (prefixId.includes("60-") || prefixId.includes("63-") || prefixId.includes("64-")) {
    return {
      partNumber: "6300",
      description: "Standard 6-Pin LFIC Core (Order 6400 for Construction)"
    };
  }

  // --- SFIC Logic (70-, 72-, 73-) ---
  if (prefixId.includes("70-") || prefixId.includes("72-") || prefixId.includes("73-")) {
    return {
      partNumber: "7300",
      description: "Standard SFIC Core (Specify 6 or 7 pin)"
    };
  }

  // --- XC / SIGNATURE Logic ---
  if (prefixId.includes("11-60") || prefixId.includes("11-63") || prefixId.includes("11-64")) {
      return {
          partNumber: "11-6300",
          description: "XC Series LFIC Core"
      };
  }
  if (prefixId.includes("10-63") || prefixId.includes("10-60")) {
      return {
          partNumber: "10-6300",
          description: "Signature Series LFIC Core"
      };
  }

  return null;
};

/**
 * Checks if a prefix is "auxiliary" (tied to device, not cylinder type directly).
 */
export const isAuxPrefix = (prefix) => {
  const auxPrefixes = ["127", "3", "10", "11", "21", "22", "65", "85", "SG", "AL"]; 
  return auxPrefixes.some(p => prefix.startsWith(p));
};

/**
 * Main function to generate the final cylinder list.
 * Now enforces strict 127- logic for thumbturns.
 */
export const processFinalCylinders = (
  rawCylinders,
  options,
  categories 
) => {
  const { 
    selectedCylinderPrefix, 
    isBoredLock,
    isMortiseLock,
  } = options;

  if (!rawCylinders || rawCylinders.length === 0) return [];

  const processed = rawCylinders.map((cyl) => {
    let finalPartNumber = cyl.partNumber;
    let finalPrefixes = [];
    let coreInfo = null;
    let isALPrefixCylinder = false;

    // Detect specific cylinder types
    if (cyl.sourcePrefix && cyl.sourcePrefix.id === "AL") {
        isALPrefixCylinder = true;
    }

    // Detect Thumbturn (127)
    // We check the role (set in CylinderFinder) or the source ID strictly
    const isThumbturn = (cyl.role && (cyl.role.includes("Thumbturn") || cyl.role.includes("127"))) ||
                        (cyl.sourcePrefix && cyl.sourcePrefix.id === "127");

    // --- PREFIX GATHERING ---
    
    // 1. THUMBTURN LOGIC: 
    //    - Ignore ALL Key System prefixes (60-, DG1-, etc.)
    //    - Force add "127" prefix
    if (isThumbturn) {
        // Only add 127 to the prefixes. Nothing else.
        finalPrefixes.push("127");
        // Ensure no core info is attached to a thumbturn
        coreInfo = null;
    } 
    else {
        // 2. STANDARD KEYED CYLINDER LOGIC:
        if (selectedCylinderPrefix) {
            const parts = selectedCylinderPrefix.split("-").filter(p => p);
            finalPrefixes.push(...parts);
            coreInfo = getCoreDetails(selectedCylinderPrefix, isBoredLock);
        }
    }

    // --- PART NUMBER & SIZING LOGIC ---
    
    // Check for IC types (Only relevant if NOT a thumbturn)
    const isLFIC = !isThumbturn && selectedCylinderPrefix && (
        selectedCylinderPrefix.includes("60") || 
        selectedCylinderPrefix.includes("63") || 
        selectedCylinderPrefix.includes("64")
    );
    
    const isSFIC = !isThumbturn && selectedCylinderPrefix && (
        selectedCylinderPrefix.includes("70") || 
        selectedCylinderPrefix.includes("72") || 
        selectedCylinderPrefix.includes("73")
    );

    // 1. Handle "AL" Prefix Override (Must be Mortise #41)
    if (isALPrefixCylinder) {
        finalPartNumber = `${formatPrefixes(finalPrefixes)}41`;
    } 
    else if (isMortiseLock && (cyl.role.includes("Outside") || cyl.role.includes("Inside") || isThumbturn)) {
        let baseNum = cyl.partNumber;
        
        // --- SIZE ENFORCEMENT (Only for Keyed Cylinders) ---
        if (isLFIC) {
            if (baseNum === "41") baseNum = "42"; // LFIC Min Size
        }
        
        if (isSFIC) {
            if (baseNum === "41" || baseNum === "42") baseNum = "43"; // SFIC Min Size
        }
        
        // --- THUMBTURN ENFORCEMENT ---
        if (isThumbturn) {
            // Ensure we use the proper formatted prefix string which now strictly contains "127-"
            // We assume baseNum is correct (usually 44 from data). 
            // If the data is accidentally 41, we could force 44, but data usually handles this.
            // Result will be strictly "127-44" (or whatever base is).
        }
        
        finalPartNumber = `${formatPrefixes(finalPrefixes)}${baseNum}`;
    } 
    else if (isBoredLock && cyl.role === "Bored Lock Core System") {
        finalPartNumber = coreInfo ? coreInfo.partNumber : cyl.partNumber;
    }
    else {
        // Standard Rim or other
        finalPartNumber = `${formatPrefixes(finalPrefixes)}${cyl.partNumber}`;
    }

    // Apply sizing rules to AL cylinder if it became LFIC/SFIC via prefixes
    if (isALPrefixCylinder) {
         let baseNum = "41";
         if (isLFIC && baseNum === "41") baseNum = "42";
         if (isSFIC && (baseNum === "41" || baseNum === "42")) baseNum = "43";
         finalPartNumber = `${formatPrefixes(finalPrefixes)}${baseNum}`;
    }

    return {
      ...cyl,
      partNumber: finalPartNumber,
      coreDetails: coreInfo,
      collars: cyl.collars
    };
  });

  return processed;
};