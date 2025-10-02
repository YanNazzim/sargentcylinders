// src/components/CylinderFinder.js

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { sargentData, cylinderPrefixCategories } from "../data/sargentData";
import HardwareSelector from "./HardwareSelector";
import ResultsDisplay from "./ResultsDisplay";
import PrefixSelector from "./PrefixSelector";
import CategorizedPrefixSelector from "./CategorizedPrefixSelector";
import ButtonSelector from "./ButtonSelector";
import "./CylinderFinder.css";
import { images } from "../images/images";
import { SearchIcon, ClearIcon } from "./Icons";
import {
  isLficForCollar,
  isSficForCollar,
  getMortiseCollarPartNumber,
  getProjection,
} from "../utils/collarLogic";

// Utility function to get cylinder length description
const getCylinderLengthDescription = (partNumber) => {
  const lengths = {
    41: '1-1/8"',
    42: '1-1-4"',
    43: '1-3/8"',
    44: '1-1/2"',
    46: '1-3/4"',
    48: '2"',
    50: '2-1/4"',
    52: '2-1/2"',
    54: '2-3/4"',
    56: '3"',
    // Added KIL/KIK clarity
    "C10-1": "Key-in-Lever/Knob",
    "C10X-1": "Key-in-Lever/Knob (10X)",
    "C11-1": "Key-in-Lever/Knob (11 Line)",
    "C6-1B": "Key-in-Knob (6 Line)",
  };
  return lengths[partNumber.replace("#", "")] || partNumber; // Return partNumber if description not found
};

// Utility function to determine if a prefix is an Auxiliary (stackable/checkbox) control
const isAuxPrefix = (id) =>
  id.startsWith("106") || id.startsWith("306") || id.startsWith("127");

// --- NEW CORE LOOKUP LOGIC ---
const getCoreDetails = (prefix) => {
  const keyingSuffix = " x Keying Details";

  // --- KESO F1 (Core Part is the main part number, handled by Keso logic) ---
  if (prefix.startsWith("F1-83-")) {
    return {
      partNumber: `F1-51xx${keyingSuffix}`,
      description: "KESO F1 Removable Core. (Size depends on housing)",
    };
  }

  // --- LFIC Cores (6300 Series) ---
  if (
    prefix.includes("63-") ||
    (prefix.startsWith("DG") && prefix.includes("63-"))
  ) {
    // Core IS INCLUDED
    const base = prefix.replace(/-/g, "").replace("63", "6300");
    return {
      partNumber: `${base}${keyingSuffix}`,
      description: "LFIC Keyed Core, ready to install (INCLUDED).",
    };
  }
  if (prefix.includes("60-")) {
    // Core IS NOT INCLUDED (Acceptance Housing)
    const base = prefix.replace(/-/g, "").replace("60", "6300");
    return {
      partNumber: `${base}${keyingSuffix}`,
      description: "LFIC Core (MUST BE ORDERED SEPARATELY).",
    };
  }

  // --- SFIC Cores (7300 Series) ---
  if (prefix.includes("73-") && prefix.includes("7P")) {
    // SFIC 7-Pin INCLUDED
    const base = prefix.includes("11-") ? "11-7P-7300B" : "7P-7300B";
    return {
      partNumber: `${base}${keyingSuffix}`,
      description: "SFIC 7-Pin Keyed Core, ready to install (INCLUDED).",
    };
  }
  if (prefix.includes("73-")) {
    // SFIC 6-Pin INCLUDED
    return {
      partNumber: `7300B${keyingSuffix}`,
      description: "SFIC 6-Pin Keyed Core, ready to install (INCLUDED).",
    };
  }
  if (prefix.includes("70-")) {
    // SFIC Core IS NOT INCLUDED (Acceptance Housing)
    return {
      partNumber: `7300B CORE${keyingSuffix}`,
      description: "SFIC Core (MUST BE ORDERED SEPARATELY).",
    };
  }

  return null;
};
// --- END NEW CORE LOOKUP LOGIC ---

function CylinderFinder() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSeriesName, setSelectedSeriesName] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedDevicePrefixes, setSelectedDevicePrefixes] = useState([]);
  const [selectedCylinderPrefix, setSelectedCylinderPrefix] = useState(null);
  const [currentStep, setCurrentStep] = useState("deviceSelection");
  const [globalSearchTerm, setGlobalSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showMultipleMatchesWarning, setShowMultipleMatchesWarning] =
    useState(false);

  // --- MORTISE COLLAR LOOKUP STATES ---
  const [selectedTrimType, setSelectedTrimType] = useState("SECTIONAL");
  const [selectedDoorThickness, setSelectedDoorThickness] = useState('1-3/4"');

  const doorThicknessOptions = useMemo(
    () => [
      { label: '1-3/8"', value: '1-3/8"' },
      { label: '1-3/4"', value: '1-3/4"' },
      { label: '2"', value: '2"' },
      { label: '2-1/4"', value: '2-1/4"' },
    ],
    []
  );

  const trimTypeOptions = useMemo(
    () => [
      { label: "Sectional Trim (L, O, etc.)", value: "SECTIONAL" },
      { label: "Sectional Trim (E, E2, E3, E4)", value: "SECTIONAL_E_TRIM" },
      { label: "Escutcheon Trim (LE1, CE, etc.)", value: "ESCUTCHEON" },
      { label: "Escutcheon Trim (WT)", value: "ESCUTCHEON_WT_TRIM" },
      { label: "Specialty Hardware (BHW, ALP, etc.)", value: "SPECIALTY" },
      { label: "V-Series Indicator Trim", value: "V_SERIES_TRIM" },
    ],
    []
  );

  const selectedTrimLabel = useMemo(() => {
    return (
      trimTypeOptions.find((opt) => opt.value === selectedTrimType)?.label ||
      selectedTrimType
    );
  }, [trimTypeOptions, selectedTrimType]);

  // --- REFERENCES FOR AUTOSCROLL ---
  const deviceOptionsRef = useRef(null);
  const cylinderOptionsRef = useRef(null);
  const resultsRef = useRef(null);
  const searchResultsRef = useRef(null);
  const categoryRef = useRef(null);
  const seriesRef = useRef(null);
  const modelRef = useRef(null);

  // --- DATA ACCESSORS (UNCHANGED) ---
  const allModels = useMemo(() => {
    const models = [];
    sargentData.hardware.forEach((category) => {
      category.series.forEach((series) => {
        series.models.forEach((model) => {
          models.push({
            category: category.category,
            seriesName: series.name,
            modelNumber: model.modelNumber,
            description: model.description,
            imageUrl: model.imageUrl || series.imageUrl || images.sargentlogo,
          });
        });
      });
    });
    return models;
  }, []);

  const activeModelData = useMemo(() => {
    if (!selectedModel || !selectedCategory || !selectedSeriesName) return null;
    const categoryData = sargentData.hardware.find(
      (h) => h.category === selectedCategory
    );
    const seriesData = categoryData?.series.find(
      (s) => s.name === selectedSeriesName
    );
    const modelData = seriesData?.models.find(
      (m) => m.modelNumber === selectedModel
    );

    if (!modelData) return null;

    const combinedExcludedPrefixes = [
      ...(seriesData?.excludedPrefixes || []),
      ...(modelData.excludedPrefixes || []),
    ];

    return {
      ...modelData,
      category: selectedCategory,
      seriesName: selectedSeriesName,
      imageUrl: modelData.imageUrl || seriesData.imageUrl || images.sargentlogo,
      excludedPrefixes: combinedExcludedPrefixes,
    };
  }, [selectedModel, selectedCategory, selectedSeriesName]);

  const deviceTiedPrefixes = useMemo(() => {
    if (!activeModelData) return [];
    // Only return device-specific options that are NOT the special Inside Cyl or Mullion Core kits.
    let availablePrefixes =
      activeModelData.prefixes?.filter(
        (p) => p.isDeviceSpecific && p.id !== "Inside Cyl" && p.id !== "980C2"
      ) || [];
    // Ensure 127 is only available for 8816/PE8816
    if (
      activeModelData.modelNumber !== "8816" &&
      activeModelData.modelNumber !== "PE8816"
    ) {
      availablePrefixes = availablePrefixes.filter(
        (p) => !p.id.startsWith("127")
      );
    }
    return availablePrefixes;
  }, [activeModelData]);

  const categoryButtonOptions = useMemo(() => {
    return sargentData.hardware.map((h) => {
      let imageUrl;
      switch (h.category) {
        case "Exit Devices":
          imageUrl = images.RimExit80;
          break;
        case "Mortise Locks":
          imageUrl = images.Mortise8200;
          break;
        case "Bored Locks":
          imageUrl = images.Bored10XLine;
          break;
        case "Mullions":
          imageUrl = images.MullionL980S;
          break;
        default:
          imageUrl = images.sargentlogo;
      }
      return { id: h.category, name: h.category, imageUrl };
    });
  }, []);

  // Grouped options for the intermediate Series selection step (uses button selector)
  const seriesGroupedOptions = useMemo(() => {
    if (!selectedCategory || selectedCategory === "Mullions") return [];

    const data =
      sargentData.hardware.find((h) => h.category === selectedCategory)
        ?.series || [];
    const groups = {
      PE80: { title: "PE80 Series", options: [], order: 1 },
      80: { title: "80 Series", options: [], order: 2 },
      90: { title: "90 Series", options: [], order: 3 },
      Other: { title: "Mortise / Bored Locks", options: [], order: 4 }, // Fallback for Mortise/Bored
    };

    data.forEach((series) => {
      // Clean up name for button text for a cleaner look
      const nameCleaned = series.name
        .replace(" Series", "")
        .replace("Narrow Mortise", "N. Mortise")
        .replace("Wide Mortise", "W. Mortise")
        .replace("Wide Rim", "W. Rim")
        .replace("Narrow CVR", "N. CVR")
        .replace("Wide SVR", "W. SVR")
        .replace("Narrow Rim", "N. Rim")
        .replace("Line", "");

      const option = {
        id: series.name,
        name: nameCleaned,
        imageUrl: series.imageUrl || images.sargentlogo,
      };

      if (selectedCategory === "Exit Devices") {
        if (series.name.startsWith("PE8")) {
          groups.PE80.options.push(option);
        } else if (
          series.name.startsWith("8") &&
          !series.name.startsWith("82")
        ) {
          groups["80"].options.push(option);
        } else if (series.name.startsWith("9")) {
          groups["90"].options.push(option);
        }
      } else {
        // Group Mortise and Bored locks under a single 'Other' group
        groups.Other.options.push(option);
      }
    });

    // Filter out empty groups, sort by custom order, and return options
    return Object.values(groups)
      .filter((group) => group.options.length > 0)
      .sort((a, b) => a.order - b.order);
  }, [selectedCategory]);

  // New centralized logic for the final Model dropdown options
  const finalModelOptions = useMemo(() => {
    if (!selectedCategory) return [];

    const categoryData = sargentData.hardware.find(
      (h) => h.category === selectedCategory
    );
    if (!categoryData) return [];

    let modelsToGroup = [];
    let groupingLabel = "Available Models";

    if (selectedCategory === "Mullions") {
      // For Mullions, group all models from all series into one list
      modelsToGroup = categoryData.series.flatMap((series) =>
        series.models.map((model) => ({
          ...model,
          seriesName: series.name,
          seriesImageUrl: series.imageUrl,
        }))
      );
      groupingLabel = "Mullion Models";
    } else if (selectedSeriesName) {
      // For other categories, use the explicitly selected series
      const seriesData = categoryData.series.find(
        (s) => s.name === selectedSeriesName
      );
      if (!seriesData) return [];
      modelsToGroup = seriesData.models.map((model) => ({
        ...model,
        seriesName: seriesData.name,
        seriesImageUrl: seriesData.imageUrl,
      }));
      groupingLabel = selectedSeriesName;
    } else {
      return []; // No series selected yet for multi-series categories
    }

    // Format for HardwareSelector component
    return [
      {
        label: groupingLabel,
        options: modelsToGroup.map((model) => ({
          label: `${model.modelNumber} - ${model.description}`,
          value: model.modelNumber,
          // Use model-specific image if available, otherwise series image
          imageUrl:
            model.imageUrl || model.seriesImageUrl || images.sargentlogo,
        })),
      },
    ];
  }, [selectedCategory, selectedSeriesName]);

  const finalCylinders = useMemo(() => {
    if (!activeModelData) return [];

    const isMortiseLock = activeModelData.category === "Mortise Locks";
    const isBoredLock = activeModelData.category === "Bored Locks";
    const isMullion980C2 = ["EL980", "SMEL980"].includes(
      activeModelData.modelNumber
    ); // Check for specific models tied to 980C2 logic
    const isMullion980C1 =
      activeModelData.category === "Mullions" && !isMullion980C2;

    const has127Prefix = selectedDevicePrefixes.some((p) =>
      p.startsWith("127")
    );
    const hasLficPrefix =
      selectedCylinderPrefix && isLficForCollar(selectedCylinderPrefix);
    const hasSficPrefix =
      selectedCylinderPrefix && isSficForCollar(selectedCylinderPrefix);
    const hasKesoPrefix =
      selectedCylinderPrefix &&
      ["F1-82-", "F1-83-", "82-", "83-"].includes(selectedCylinderPrefix);

    // Core prefixes for displaying core part numbers and descriptions
    const isLficCore =
      selectedCylinderPrefix &&
      (selectedCylinderPrefix.includes("60-") ||
        selectedCylinderPrefix.includes("63-") ||
        selectedCylinderPrefix.includes("64-"));
    const isSficCore =
      selectedCylinderPrefix &&
      (selectedCylinderPrefix.includes("70-") ||
        selectedCylinderPrefix.includes("72-") ||
        selectedCylinderPrefix.includes("73-"));

    // --- DG LOGIC FLAGS ---
    const isDgPrefix =
      selectedCylinderPrefix && selectedCylinderPrefix.startsWith("DG");
    const isDgLfic = isDgPrefix && isLficCore;

    const rawCylinderList = [];

    // --- Collect Cylinder Data from Model/Prefixes ---
    if (isMullion980C1) {
      const kitPrefix = activeModelData.prefixes?.find((p) => p.id === "980C1");
      if (kitPrefix?.addsCylinder) {
        rawCylinderList.push({
          ...kitPrefix.addsCylinder,
          role: "Mullion Cylinder",
          notes: kitPrefix.description,
          sourcePrefix: kitPrefix,
        });
      }
    } else if (activeModelData.baseCylinder) {
      rawCylinderList.push({
        ...activeModelData.baseCylinder,
        role: isBoredLock ? "Keyed Cylinder" : "Outside Cylinder", // Simpler role for bored locks
        notes: activeModelData.baseCylinder.notes || null,
        sourcePrefix: null,
      });
    }

    const insideCylData = activeModelData.prefixes?.find(
      (p) => p.id === "Inside Cyl" && p.addsCylinder
    );
    if (insideCylData && !has127Prefix) {
      rawCylinderList.push({
        ...insideCylData.addsCylinder,
        role: isBoredLock ? "Inside Cylinder" : "Inside Cylinder",
        notes: insideCylData.addsCylinder.notes || insideCylData.description,
        sourcePrefix: insideCylData,
      });
    }

    selectedDevicePrefixes.forEach((prefixId) => {
      const prefixData = activeModelData.prefixes?.find(
        (p) => p.id === prefixId
      );
      if (prefixData?.addsCylinder) {
        rawCylinderList.push({
          ...prefixData.addsCylinder,
          role: prefixId.startsWith("127")
            ? "127 - Mortise Cylinder Thumbturn"
            : prefixData.id,
          notes: prefixData.description,
          sourcePrefix: prefixData,
        });
      }
    });

    // Add 980C2 kit for description purposes if it's not a general keying prefix
    if (isMullion980C2 && !selectedCylinderPrefix) {
      const kitPrefix = activeModelData.prefixes?.find((p) => p.id === "980C2");
      if (kitPrefix?.addsCylinder) {
        rawCylinderList.push({
          ...kitPrefix.addsCylinder,
          role: "Mullion Cylinder",
          notes: "980C2 Mullion Kit for #46 Housing",
          sourcePrefix: kitPrefix,
        });
      }
    }

    const consolidatedMap = new Map();
    rawCylinderList.forEach((cyl) => {
      const key = `${cyl.partNumber}-${cyl.role}`;
      const existing = consolidatedMap.get(key);
      consolidatedMap.set(key, {
        ...cyl,
        quantity: (existing?.quantity || 0) + 1,
        sourcePrefix: existing?.sourcePrefix || cyl.sourcePrefix,
      });
    });

    let finalCylindersArray = Array.from(consolidatedMap.values());
    const isDoubleCylinderMortise =
      isMortiseLock &&
      activeModelData?.prefixes?.some((p) => p.id === "Inside Cyl");
    const cylCount = isDoubleCylinderMortise
      ? "DOUBLE_CYLINDER"
      : "SINGLE_CYLINDER";

    // Determine if the prefix is for a core-acceptance HOUSING (where core is ordered separately or disposable is provided)
    const isInsertCoreHousing =
      selectedCylinderPrefix &&
      (selectedCylinderPrefix.includes("60-") ||
        selectedCylinderPrefix.includes("70-") ||
        (selectedCylinderPrefix.startsWith("DG") &&
          selectedCylinderPrefix.includes("60-")));
    // isInsertCoreSystem variable was removed per ESLint warning.

    return finalCylindersArray.map((cyl) => {
      let basePartNumber = cyl.partNumber.replace("#", "");

      const is127Thumbturn = cyl.role === "127 - Mortise Cylinder Thumbturn";

      // --- CUSTOM INSIDE CYLINDER SIZE ADJUSTMENT FOR 8816/PE8816 ---
      const is8816InsideCylinder =
        (activeModelData.modelNumber === "8816" ||
          activeModelData.modelNumber === "PE8816") &&
        (cyl.role === "Inside Cylinder" || cyl.role.startsWith("Inside Cyl ("));

      // Exclude 127 from this specific rule (127-44 remains 127-44)
      if (
        is8816InsideCylinder &&
        isSficCore &&
        basePartNumber === "44" &&
        !is127Thumbturn
      ) {
        basePartNumber = "46";
        // eslint-disable-next-line
        cyl.notes = cyl.notes
          ? `${cyl.notes} / SFIC prefix detected: Inside cylinder size adjusted to #46 (1-3/4") for correct trim fit.`
          : 'SFIC prefix detected: Inside cylinder size adjusted to #46 (1-3/4") for correct trim fit.';
      }

      // --- GENERAL BASE SIZE ADJUSTMENT LOGIC (For ALL LFIC/SFIC Housings) ---
      const isBaseMortiseOrRimCylinder =
        cyl.type.includes("Mortise Cylinder") ||
        cyl.type.includes("Rim Cylinder");

      if (
        selectedCylinderPrefix &&
        isBaseMortiseOrRimCylinder &&
        !is127Thumbturn
      ) {
        if (isLficCore) {
          if (basePartNumber === "41" || basePartNumber === "44") {
            basePartNumber = "42"; // LFIC housing size for #41 and #44 is #42
          }
        } else if (isSficCore) {
          if (
            basePartNumber === "41" ||
            (basePartNumber === "44" && !is8816InsideCylinder)
          ) {
            basePartNumber = "43"; // SFIC housing size for #41 and #44 is #43 (General rule, exempt 8816/PE8816's inside cylinder here)
          }
        }
      }

      const kesoLengths = {
        "F1-71": '1-1/8"',
        "F1-72": '1-1/4"',
        "F1-73": '1-3/8"',
        "F1-74": '1-1/2"',
        "F1-76": '1-3-4"',
        "F1-64": '1-3-4" to 3-1-8"',
      };
      let lengthDesc = hasKesoPrefix
        ? kesoLengths[basePartNumber] || ""
        : getCylinderLengthDescription(basePartNumber);

      let finalPartNumber = `${basePartNumber} x Keying Details x Finish`; // Default
      const prefixData = cylinderPrefixCategories
        .flatMap((c) => c.prefixes)
        .find((p) => p.id === selectedCylinderPrefix);
      const prefixDesc = prefixData
        ? prefixData.description.replace("Device", "Housing")
        : "";

      // Calculate Notes and Description based on initial values/roles
      let calculatedNotes = cyl.notes;
      let calculatedDescription = `${lengthDesc} ${cyl.type}`;
      let coreDetails = null; // NEW FIELD FOR CORE INFO

      // --- Apply key system overrides (Sets Part Number and Description) ---
      if (hasKesoPrefix) {
        finalPartNumber = `${selectedCylinderPrefix.replace(
          "83-",
          basePartNumber
        )} x Keying Details x Finish`; // F1-83-42 etc.
        calculatedDescription = `${lengthDesc} ${cyl.type} ${prefixDesc}`;
        coreDetails = selectedCylinderPrefix.endsWith("83-")
          ? getCoreDetails(selectedCylinderPrefix)
          : null;
      } else if (selectedCylinderPrefix) {
        // SPECIAL CASE: If 127 is selected
        if (is127Thumbturn) {
          finalPartNumber = `127-${basePartNumber} x Finish`;
          calculatedDescription = `Mortise Detachable Thumbturn`;
        }
        // *** BORED LOCK DISPOSABLE CORE MESSAGE (Is Housing & is Bored Lock) ***
        else if (isBoredLock && isInsertCoreHousing) {
          finalPartNumber = `${basePartNumber} Housing x Finish`; // Housing Part Number
          calculatedDescription = `Any bored lock provided with ${selectedCylinderPrefix} is always supplied with a PLASTIC DISPOSABLE CORE in the lever.`;
          calculatedNotes =
            "Requires permanent CORE to be ordered separately. Housing provided with device.";
          coreDetails = getCoreDetails(selectedCylinderPrefix);
        }
        // Generic Insert Core Housing logic (for exit/mortise locks with 60-/70- prefixes)
        else if (isInsertCoreHousing) {
          finalPartNumber = `${selectedCylinderPrefix.replace(
            /-/g,
            ""
          )}${basePartNumber} x Finish`; // Housing Part Number
          calculatedDescription = `${lengthDesc} ${cyl.type} HOUSING: ${prefixDesc}`;
          calculatedNotes = `CORE required for housing (Ordered separately).`;
          coreDetails = getCoreDetails(selectedCylinderPrefix);
        }
        // Full Cylinder/Housing with Core Included (e.g. DG-, 10-, 63-, 73-)
        else {
          finalPartNumber = `${selectedCylinderPrefix}${basePartNumber} x Keying Details x Finish`;
          calculatedDescription += ` ${prefixDesc}`;
          coreDetails = getCoreDetails(selectedCylinderPrefix);
          if (coreDetails?.description.includes("(INCLUDED)")) {
            // Update the main P/N description for clarity when core is included
            calculatedDescription = `${lengthDesc} ${cyl.type} with CORE: ${prefixDesc}`;
          }
        }
      } else {
        // Conventional/Standard (Part number + keying)
        finalPartNumber = `${basePartNumber} x Keying Details x Finish`;
      }

      // --- CYLINDER IMAGE LOGIC (UNCHANGED) ---
      let cylinderImageUrl = images.sargentlogo; // Default fallback
      if (selectedCylinderPrefix) {
        if (isDgPrefix) {
          if (cyl.type.includes("Mortise") && isDgLfic)
            cylinderImageUrl = images.DGLFICMortise;
          else if (cyl.type.includes("Mortise"))
            cylinderImageUrl = images.DGMortise;
          else if (cyl.type.includes("Rim") && isDgLfic)
            cylinderImageUrl = images.DGLFICRim;
          else if (cyl.type.includes("Rim")) cylinderImageUrl = images.DGRim;
          else if (
            cyl.type.includes("Key-in-Lever") ||
            cyl.type.includes("Key-in-Knob")
          )
            cylinderImageUrl = images.KILCyls;
        } else if (selectedCylinderPrefix.startsWith("11-")) {
          cylinderImageUrl = images.XCCyls;
        } else if (
          selectedCylinderPrefix.includes("81-") ||
          selectedCylinderPrefix.includes("82-") ||
          selectedCylinderPrefix.includes("83-") ||
          selectedCylinderPrefix.includes("84-") ||
          selectedCylinderPrefix.startsWith("F1-82-") ||
          selectedCylinderPrefix.startsWith("F1-83-")
        ) {
          cylinderImageUrl = images.KESOcyls;
        } else if (isLficCore) {
          if (cyl.type.includes("Mortise"))
            cylinderImageUrl = images.LFICMortise;
          else if (cyl.type.includes("Rim")) cylinderImageUrl = images.LFICRim;
        } else if (isSficCore) {
          if (cyl.type.includes("Mortise"))
            cylinderImageUrl = images.SFICMortise;
          else if (cyl.type.includes("Rim")) cylinderImageUrl = images.SFICRim;
        }
      }
      if (is127Thumbturn) {
        cylinderImageUrl = images.TT127;
      }

      if (cylinderImageUrl === images.sargentlogo) {
        if (
          cyl.type.includes("Key-in-Lever") ||
          cyl.type.includes("Key-in-Knob")
        ) {
          cylinderImageUrl = images.KILCyls;
        } else if (cyl.type.includes("Rim Cylinder")) {
          cylinderImageUrl = images.RimCyls;
        } else if (cyl.type.includes("Mortise Cylinder")) {
          cylinderImageUrl = images.MortiseCyls;
        }
      }
      // --- END CYLINDER IMAGE LOGIC ---

      // --- NOTES OVERWRITE LOGIC ---
      const isSpecialBoredLockMessageApplied =
        isBoredLock && isInsertCoreHousing && !is127Thumbturn;

      if (
        !isMullion980C2 &&
        !isMullion980C1 &&
        !isInsertCoreHousing &&
        !isSpecialBoredLockMessageApplied
      ) {
        if (cyl.role === "Outside Cylinder")
          calculatedNotes = "For the outside of the door.";
        else if (cyl.role === "Inside Cylinder")
          calculatedNotes = "For the inside of the door.";
      }

      // The global "Standard Tailpiece" note only applies when no special core note has been set and it is a bored lock.
      if (isBoredLock && !is127Thumbturn && !isSpecialBoredLockMessageApplied) {
        calculatedNotes =
          (calculatedNotes || "Standard cylinder. ") +
          " **Standard tailpiece provided when ordered 'less cylinder'.**";
      }

      // --- COLLAR LOGIC (UNCHANGED) ---
      const cylinderCollars = [];
      const collarSource = cyl.sourcePrefix?.collars || activeModelData.collars;
      const isRimCylinderOnExitDevice =
        cyl.partNumber.includes("34") &&
        activeModelData.category === "Exit Devices";

      // 1. CUSTOM COLLAR OVERRIDE FOR 127 THUMBTURN
      if (is127Thumbturn) {
        cylinderCollars.push({
          partNumber: "98-0021 x Finish",
          description:
            "Blocking Ring (Mandatory for 127 Thumbturn on 8816/PE8816)",
          projection: getProjection("98-0021"),
          imageUrl: images.BR8816,
        });
      }
      // 2. MORTISE LOCK COLLAR LOGIC
      else if (isMortiseLock) {
        const mortiseCollar = getMortiseCollarPartNumber(
          basePartNumber,
          selectedCylinderPrefix,
          selectedDoorThickness,
          selectedTrimType,
          cylCount
        );
        if (mortiseCollar) {
          let collarImage = images.Collar1KB;
          const pnPrefix = mortiseCollar.partNumber
            .substring(0, mortiseCollar.partNumber.indexOf("x"))
            .trim();
          if (pnPrefix.startsWith("1KA")) collarImage = images.Collar1KA;
          else if (pnPrefix.startsWith("1SB")) collarImage = images.Collar1SB;
          else if (pnPrefix.startsWith("97")) collarImage = images.Rosette97;
          else if (pnPrefix.startsWith("90")) collarImage = images.Ring90;
          cylinderCollars.push({ ...mortiseCollar, imageUrl: collarImage });
        }
      }
      // 3. MULLION COLLAR LOGIC
      else if (isMullion980C1 || isMullion980C2) {
        if (collarSource) {
          const { default: defaultCollar } = collarSource;
          if (defaultCollar)
            cylinderCollars.push({
              ...defaultCollar,
              imageUrl: defaultCollar.imageUrl || images.sargentlogo,
            });
        }
      }
      // 4. GENERIC EXIT DEVICE COLLAR LOGIC (EXCLUDES RIM CYLINDERS)
      else if (collarSource && !isRimCylinderOnExitDevice) {
        const { default: defaultCollar, conditional: conditionalCollars } =
          collarSource;
        let selectedConditionalCollar = null;
        if (conditionalCollars) {
          selectedConditionalCollar = conditionalCollars.find(
            (collar) =>
              (collar.prefix === "60-" && hasLficPrefix) ||
              (collar.prefix === "70-" && hasSficPrefix)
          );
        }
        if (selectedConditionalCollar)
          cylinderCollars.push({
            ...selectedConditionalCollar,
            imageUrl: selectedConditionalCollar.imageUrl || images.sargentlogo,
          });
        else if (defaultCollar)
          cylinderCollars.push({
            ...defaultCollar,
            imageUrl: defaultCollar.imageUrl || images.sargentlogo,
          });
      }

      return {
        ...cyl,
        partNumber: finalPartNumber,
        description: calculatedDescription.trim(),
        notes: calculatedNotes,
        collars: cylinderCollars,
        coreDetails: coreDetails, // <-- NEW FIELD
        imageUrl: cylinderImageUrl,
      };
    });
  }, [
    activeModelData,
    selectedDevicePrefixes,
    selectedCylinderPrefix,
    selectedDoorThickness,
    selectedTrimType,
  ]);

  // --- AUTOSCROLL, SEARCH, AND HANDLER LOGIC (UNCHANGED) ---
  const isModelSelectReady = useMemo(() => {
    const isMullion = selectedCategory === "Mullions";
    return isMullion || !!selectedSeriesName;
  }, [selectedCategory, selectedSeriesName]);

  useEffect(() => {
    // Determine the target ref to scroll to
    let targetRef = null;

    if (currentStep === "deviceSelection") {
      if (!selectedCategory) {
        targetRef = categoryRef;
      } else if (selectedCategory !== "Mullions" && !selectedSeriesName) {
        targetRef = seriesRef;
      } else if (isModelSelectReady && !selectedModel) {
        targetRef = modelRef;
      }
    } else if (currentStep === "deviceOptions") {
      targetRef = deviceOptionsRef;
    } else if (currentStep === "cylinderOptions") {
      targetRef = cylinderOptionsRef;
    }

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [
    currentStep,
    selectedCategory,
    selectedSeriesName,
    selectedModel,
    isModelSelectReady,
  ]);

  // --- SEARCH RESULTS FILTERING ---
  useEffect(() => {
    if (globalSearchTerm.trim().length < 2) {
      setSearchResults([]);
      setShowMultipleMatchesWarning(false);
      return;
    }
    const lowercasedTerm = globalSearchTerm.toLowerCase();
    const results = allModels.filter(
      (model) =>
        model.modelNumber.toLowerCase().includes(lowercasedTerm) ||
        model.description.toLowerCase().includes(lowercasedTerm) ||
        model.seriesName.toLowerCase().includes(lowercasedTerm)
    );
    setSearchResults(results);
    setShowMultipleMatchesWarning(false);
  }, [globalSearchTerm, allModels]);

  const handleSearchClick = (result) => {
    setSelectedCategory(result.category);
    setSelectedSeriesName(result.seriesName);
    setSelectedModel(result.modelNumber);
    setGlobalSearchTerm("");
    setSearchResults([]);
    setShowMultipleMatchesWarning(false);
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setSelectedDoorThickness('1-3/4"');
    setSelectedTrimType("SECTIONAL");

    const fullModelData = sargentData.hardware
      .find((h) => h.category === result.category)
      ?.series.find((s) => s.name === result.seriesName)
      ?.models.find((m) => m.modelNumber === result.modelNumber);
    const isMullion = result.category === "Mullions";
    const hasDeviceOptions =
      !isMullion &&
      fullModelData?.prefixes.filter(
        (p) => p.isDeviceSpecific && p.id !== "Inside Cyl" && p.id !== "980C2"
      ).length > 0;
    const hasCylinderOptions =
      fullModelData?.baseCylinder ||
      fullModelData?.prefixes.some((p) => p.addsCylinder) ||
      isMullion;

    if (!hasCylinderOptions) setCurrentStep("results");
    else if (isMullion) setCurrentStep("cylinderOptions");
    else if (hasDeviceOptions) setCurrentStep("deviceOptions");
    else setCurrentStep("cylinderOptions");
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchResults.length === 1) handleSearchClick(searchResults[0]);
      else if (searchResults.length > 1) setShowMultipleMatchesWarning(true);
    }
  };

  const handleProceedFromDeviceSelection = () => {
    if (!selectedModel) return;
    const isMullion = selectedCategory === "Mullions";
    const hasDeviceOptions = !isMullion && deviceTiedPrefixes.length > 0;
    const hasCylinderOptions =
      activeModelData?.baseCylinder ||
      activeModelData?.prefixes.some((p) => p.addsCylinder) ||
      isMullion;

    if (!hasCylinderOptions) setCurrentStep("results");
    else if (isMullion) setCurrentStep("cylinderOptions");
    else if (hasDeviceOptions) setCurrentStep("deviceOptions");
    else setCurrentStep("cylinderOptions");
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSeriesName("");
    setSelectedModel("");
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setSelectedDoorThickness('1-3/4"');
    setSelectedTrimType("SECTIONAL");
    setGlobalSearchTerm("");
    setSearchResults([]);
    setShowMultipleMatchesWarning(false);
    setCurrentStep("deviceSelection");

    // Auto-set selectedSeriesName for Mullions to bypass Series selection step and proceed to Model dropdown
    if (categoryId === "Mullions") {
      setSelectedSeriesName("Mullion Models");
    }
  };

  // Handler for the intermediate Series selection using buttons
  const handleSeriesButtonChange = (seriesName) => {
    setSelectedSeriesName(seriesName);
    setSelectedModel(""); // Reset model when series changes
  };

  const handleModelChange = (modelId) => {
    setSelectedModel(modelId);
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setSelectedDoorThickness('1-3/4"');
    setSelectedTrimType("SECTIONAL");

    // Find the correct series name based on the chosen modelId to populate activeModelData
    const categoryData = sargentData.hardware.find(
      (h) => h.category === selectedCategory
    );
    const series = categoryData?.series.find((s) =>
      s.models.some((m) => m.modelNumber === modelId)
    );
    if (series) {
      setSelectedSeriesName(series.name);
    } else {
      // Fallback or for mullions
      setSelectedSeriesName(categoryData?.series[0]?.name || "");
    }
  };

  // --- Updated handleDevicePrefixChange to handle Radio (Main) vs Checkbox (Aux) groups ---
  const handleDevicePrefixChange = useCallback(
    (id, isRadio) => {
      setSelectedDevicePrefixes((prev) => {
        if (isRadio) {
          // Logic for Main/Radio Group: only one can be selected (toggle off if already selected).
          const newMainId = id;
          // Filter out existing Aux Prefixes (which are NOT Main Prefixes)
          const currentAuxPrefixes = prev.filter((p) => isAuxPrefix(p));

          // If the incoming ID is a main prefix and it's already selected in prev, newMainPrefixes is empty (toggle off).
          // Otherwise, it's just the new ID.
          const newMainPrefixes = prev.includes(newMainId) ? [] : [newMainId];

          return [...currentAuxPrefixes, ...newMainPrefixes];
        } else {
          // Logic for Aux/Checkbox Group: toggle existence.
          if (prev.includes(id)) {
            return prev.filter((p) => p !== id);
          } else {
            return [...prev, id];
          }
        }
      });
    },
    [setSelectedDevicePrefixes]
  );

  const handleCylinderPrefixChange = useCallback(
    (prefixId) => {
      setSelectedCylinderPrefix((prev) =>
        prev === prefixId ? null : prefixId
      );
    },
    [setSelectedCylinderPrefix]
  );

  const handleNext = () => {
    if (currentStep === "deviceOptions") setCurrentStep("cylinderOptions");
  };

  const handleReset = useCallback(() => {
    setSelectedCategory("");
    setSelectedSeriesName("");
    setSelectedModel("");
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setSelectedDoorThickness('1-3/4"');
    setSelectedTrimType("SECTIONAL");
    setGlobalSearchTerm("");
    setSearchResults([]);
    setShowMultipleMatchesWarning(false);
    setCurrentStep("deviceSelection");
  }, []);

  const handleBack = useCallback(() => {
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    if (currentStep === "results") {
      const hasDeviceOptions =
        selectedCategory !== "Mullions" && deviceTiedPrefixes.length > 0;
      if (hasDeviceOptions) setCurrentStep("deviceOptions");
      else setCurrentStep("cylinderOptions");
    } else if (currentStep === "cylinderOptions") {
      const hasDeviceOptions =
        selectedCategory !== "Mullions" && deviceTiedPrefixes.length > 0;
      if (hasDeviceOptions) setCurrentStep("deviceOptions");
      else {
        // Go back to model selection step
        setSelectedModel("");
        setSelectedSeriesName(
          selectedCategory === "Mullions"
            ? "Mullion Models"
            : selectedSeriesName
        );
        setCurrentStep("deviceSelection");
      }
    } else if (currentStep === "deviceOptions") {
      // Go back to model selection step
      setSelectedModel("");
      setSelectedSeriesName(
        selectedCategory === "Mullions" ? "Mullion Models" : selectedSeriesName
      );
      setCurrentStep("deviceSelection");
    } else if (
      currentStep === "deviceSelection" &&
      (selectedModel || selectedSeriesName)
    ) {
      // Go back to series selection
      setSelectedModel("");
      setSelectedSeriesName("");
    } else if (currentStep === "deviceSelection" && selectedCategory) {
      // Go back to category selection
      setSelectedCategory("");
    }
  }, [
    currentStep,
    deviceTiedPrefixes,
    selectedCategory,
    selectedSeriesName,
    selectedModel,
  ]);

  const handleFindCylinder = () => setCurrentStep("results");

  const isMullion980C2 = ["EL980", "SMEL980"].includes(selectedModel);

  const chosenPrefixes = useMemo(() => {
    const prefixes = [];
    if (selectedCylinderPrefix) {
      const prefixData = cylinderPrefixCategories
        .flatMap((c) => c.prefixes)
        .find((p) => p.id === selectedCylinderPrefix);
      if (prefixData)
        prefixes.push({
          id: prefixData.id,
          description: prefixData.description,
        });
    }
    selectedDevicePrefixes.forEach((prefixId) => {
      const prefixData = activeModelData?.prefixes?.find(
        (p) => p.id === prefixId
      );
      if (prefixData)
        prefixes.push({
          id: prefixData.id,
          description: prefixData.description,
        });
    });
    // Add implicit 980C2 kit description if applicable and no key prefix was chosen
    if (isMullion980C2 && !selectedCylinderPrefix) {
      const kitPrefix = activeModelData?.prefixes?.find(
        (p) => p.id === "980C2"
      );
      if (kitPrefix)
        prefixes.push({ id: kitPrefix.id, description: kitPrefix.description });
    }
    return prefixes;
  }, [
    selectedCylinderPrefix,
    selectedDevicePrefixes,
    activeModelData,
    isMullion980C2,
  ]);

  const availableCylinderPrefixCategories = useMemo(() => {
    return cylinderPrefixCategories.map((category) => ({
      ...category,
      prefixes: category.prefixes.filter(
        (p) =>
          !activeModelData?.excludedPrefixes?.some((excludedPrefix) =>
            p.id.startsWith(excludedPrefix)
          )
      ),
    }));
  }, [activeModelData]);

  const hasAvailableCylinderPrefixes = useMemo(
    () => availableCylinderPrefixCategories.some((c) => c.prefixes.length > 0),
    [availableCylinderPrefixCategories]
  );

  const isInitialState = !globalSearchTerm;

  const renderStep = () => {
    const isMortiseLockSelected = selectedCategory === "Mortise Locks";

    if (isInitialState) {
      switch (currentStep) {
        case "deviceSelection":
          const isMullion = selectedCategory === "Mullions";
          const needsSeriesSelection =
            selectedCategory && !isMullion && !selectedSeriesName;
          const isModelSelectReady = isMullion || selectedSeriesName;

          return (
            <>
              <p className="finder-intro">
                Select a hardware Category, then select the Model to find the
                correct cylinder.
              </p>
              <div className="hardware-selectors">
                {/* STEP 1: CATEGORY SELECTION */}
                <div ref={categoryRef} className="selection-stage-container">
                  <ButtonSelector
                    title="1. Select Hardware Category"
                    options={categoryButtonOptions}
                    selected={selectedCategory}
                    onSelect={handleCategoryChange}
                  />
                </div>

                {/* PERSISTENT SUMMARY CARDS */}
                {selectedCategory && (
                  <div className="selection-summary-card category-summary-card">
                    <p className="selection-summary-item">
                      Category: <strong>{selectedCategory}</strong>
                    </p>
                  </div>
                )}

                {/* STEP 2A: SERIES SELECTION (Only for Exit/Mortise/Bored after Category is picked) */}
                {needsSeriesSelection && (
                  <div
                    ref={seriesRef}
                    className="selection-stage-container series-selection-group"
                  >
                    <h3 className="button-selector-title">
                      2. Select Device Series
                    </h3>
                    {seriesGroupedOptions.map((group) => (
                      <div key={group.title}>
                        <h4 className="series-group-title">{group.title}</h4>
                        <ButtonSelector
                          options={group.options}
                          selected={selectedSeriesName}
                          onSelect={handleSeriesButtonChange}
                          hasImages={false}
                          title=""
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* STEP 2B / STEP 3: MODEL SELECTION (Visible when ready) */}
                {isModelSelectReady && (
                  <div
                    ref={modelRef}
                    className="selection-stage-container model-selection-group"
                  >
                    {selectedSeriesName && !isMullion && (
                      <div className="selection-summary-card series-summary-card">
                        <p className="selection-summary-item">
                          Series:{" "}
                          <strong>
                            {selectedSeriesName.replace(" Series", "")}
                          </strong>
                        </p>
                      </div>
                    )}
                    <HardwareSelector
                      label="3. Select Model / Function"
                      options={finalModelOptions}
                      value={selectedModel}
                      onChange={handleModelChange}
                    />
                  </div>
                )}
              </div>
              <div className="wizard-controls">
                {/* Button is only enabled when a model is selected */}
                <button
                  onClick={handleProceedFromDeviceSelection}
                  className="wizard-find-button"
                  disabled={!selectedModel}
                >
                  Continue
                </button>
                <button
                  onClick={handleReset}
                  className="wizard-find-button reset-button"
                >
                  Start Over
                </button>
              </div>
            </>
          );
        case "deviceOptions":
          return (
            <div ref={deviceOptionsRef} className="wizard-step active">
              {/* Add summary of Category and Model here for context */}
              <div className="selection-summary-card">
                <p className="selection-summary-item">
                  Selected: <strong>{selectedModel}</strong> (
                  {activeModelData.description})
                </p>
                <p className="selection-summary-item sub-item">
                  Type: <strong>{selectedCategory}</strong> (
                  {selectedSeriesName.replace(" Series", "")})
                </p>
              </div>
              <div className="prefix-section">
                <h3 className="prefix-section-title">
                  Step 2: Select Device Accessories/Functions (Optional)
                </h3>
                <PrefixSelector
                  prefixes={deviceTiedPrefixes}
                  selectedPrefixes={selectedDevicePrefixes}
                  onChange={handleDevicePrefixChange}
                />
              </div>
              <div className="wizard-controls">
                <button onClick={handleBack} className="wizard-back-button">
                  Back
                </button>
                <button onClick={handleNext} className="wizard-find-button">
                  Next: Select Key System
                </button>
                <button
                  onClick={handleReset}
                  className="wizard-find-button reset-button"
                >
                  Start Over
                </button>
              </div>
            </div>
          );
        case "cylinderOptions":
          return (
            <div ref={cylinderOptionsRef} className="wizard-step active">
              {/* Add summary of Category and Model here for context */}
              <div className="selection-summary-card">
                <p className="selection-summary-item">
                  Selected: <strong>{selectedModel}</strong> (
                  {activeModelData.description})
                </p>
                <p className="selection-summary-item sub-item">
                  Type: <strong>{selectedCategory}</strong> (
                  {selectedSeriesName.replace(" Series", "")})
                </p>
              </div>
              <h3 className="prefix-section-title">
                Step 3: Choose Key System & Final Details
              </h3>
              {isMortiseLockSelected && (
                <div className="prefix-section mortise-options-section">
                  <h4 className="prefix-section-title mortise-collar-title">
                    Mortise Collar Options (Required for Mortise Locks)
                  </h4>
                  <div className="mortise-options-group">
                    <label className="mortise-option-label">
                      Door Thickness
                    </label>
                    <div className="mortise-option-selector thickness-selector">
                      {doorThicknessOptions.map((option) => (
                        <button
                          key={option.value}
                          className={`mortise-option-button ${
                            selectedDoorThickness === option.value
                              ? "active"
                              : ""
                          }`}
                          onClick={() => setSelectedDoorThickness(option.value)}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mortise-options-group">
                    <label className="mortise-option-label">Trim Type</label>
                    <div className="mortise-option-selector trim-selector">
                      {trimTypeOptions.map((option) => (
                        <button
                          key={option.value}
                          className={`mortise-option-button ${
                            selectedTrimType === option.value ? "active" : ""
                          }`}
                          onClick={() => setSelectedTrimType(option.value)}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {hasAvailableCylinderPrefixes ? (
                <div className="prefix-section">
                  <h4
                    className="prefix-section-title"
                    style={
                      isMortiseLockSelected
                        ? { border: "none", marginBottom: "1rem" }
                        : {}
                    }
                  >
                    Select Key System Prefix (Choose One)
                  </h4>
                  <CategorizedPrefixSelector
                    categories={availableCylinderPrefixCategories}
                    selectedPrefixes={
                      selectedCylinderPrefix ? [selectedCylinderPrefix] : []
                    }
                    onChange={handleCylinderPrefixChange}
                  />
                </div>
              ) : (
                <div className="no-options-message">
                  No key system options available for this device.
                </div>
              )}
              <div className="wizard-controls">
                <button onClick={handleBack} className="wizard-back-button">
                  Back
                </button>
                <button
                  onClick={handleFindCylinder}
                  className="wizard-find-button"
                >
                  View Cylinder Results
                </button>
                <button
                  onClick={handleReset}
                  className="wizard-find-button reset-button"
                >
                  Start Over
                </button>
              </div>
            </div>
          );
        case "results":
          return (
            <div ref={resultsRef} className="wizard-step active">
              <div className="selected-hardware-note">
                <div className="selected-hardware-image-wrapper">
                  <a
                    href={activeModelData?.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={activeModelData?.imageUrl || images.sargentlogo}
                      alt={activeModelData?.modelNumber}
                      className="search-result-image"
                    />
                  </a>
                </div>
                <div className="selected-hardware-text">
                  <p>
                    Selected: <strong>{selectedModel}</strong> (
                    {activeModelData?.description})
                  </p>
                  <span className="selected-hardware-desc">
                    {selectedCategory} -{" "}
                    {selectedSeriesName.replace(" Series", "")}
                  </span>
                  {isMortiseLockSelected && (
                    <>
                      <p className="selected-hardware-mortise-details">
                        Door Thickness: <strong>{selectedDoorThickness}</strong>
                      </p>
                      <p className="selected-hardware-mortise-details">
                        Trim Style:{" "}
                        <strong>
                          {selectedTrimLabel.replace("Trim", "").trim()}
                        </strong>
                      </p>
                    </>
                  )}
                </div>
              </div>
              {chosenPrefixes.length > 0 && (
                <div className="chosen-prefixes-container">
                  <h4 className="chosen-prefixes-title">Options Chosen:</h4>
                  <ul className="chosen-prefixes-list">
                    {chosenPrefixes.map((prefix) => (
                      <li key={prefix.id} className="chosen-prefix-item">
                        <span className="chosen-prefix-id">{prefix.id}</span>
                        <span className="chosen-prefix-description">
                          {prefix.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <ResultsDisplay cylinders={finalCylinders} />
              <div className="wizard-controls">
                <button onClick={handleBack} className="wizard-back-button">
                  Back to Options
                </button>
                <button
                  onClick={handleReset}
                  className="wizard-find-button reset-button"
                >
                  Start Over
                </button>
              </div>
            </div>
          );
        default:
          return null;
      }
    }
    return (
      <div ref={searchResultsRef} className="search-results-list">
        {showMultipleMatchesWarning && (
          <p className="multiple-matches-warning">
            Multiple matches found. Please select one.
          </p>
        )}
        {searchResults.map((result) => (
          <div
            key={`${result.seriesName}-${result.modelNumber}`}
            className="search-result-item"
            onClick={() => handleSearchClick(result)}
          >
            <img
              src={result.imageUrl}
              alt={result.modelNumber}
              className="search-result-image"
            />
            <div className="search-result-text">
              <span className="search-result-model">{result.modelNumber}</span>
              <span className="search-result-desc">{result.description}</span>
              <span className="search-result-series">{result.seriesName}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="cylinder-finder-card">
      {/* ADDED GLOBAL NOTE */}
      <div className="app-page-note">
        <p>
          <strong>IMPORTANT NOTE</strong>: Devices ordered as{" "}
          <strong>less cylinder</strong> will always be supplied with the{" "}
          <strong>standard collar</strong> for an <strong>1-1/8”</strong>{" "}
          cylinder or the <strong>standard tailpiece</strong> in cases of{" "}
          <strong>bored locks</strong>.
        </p>
      </div>
      {/* END ADDED GLOBAL NOTE */}
      <div className="global-search-container">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search by model, series, or function (e.g., 8804, storeroom)..."
          value={globalSearchTerm}
          onChange={(e) => setGlobalSearchTerm(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          className="global-search-input"
        />
        {globalSearchTerm && (
          <button
            onClick={() => setGlobalSearchTerm("")}
            className="clear-search-button"
          >
            <ClearIcon />
          </button>
        )}
      </div>
      {renderStep()}
    </div>
  );
}

export default CylinderFinder;
