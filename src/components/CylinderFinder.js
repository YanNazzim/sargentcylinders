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
import { isLficForCollar, isSficForCollar, getMortiseCollarPartNumber, getProjection } from "../utils/collarLogic";

// Utility function to get cylinder length description
const getCylinderLengthDescription = (partNumber) => {
    const lengths = {
      41: '1-1/8"',
      42: '1-1/4"',
      43: '1-3/8"',
      44: '1-1/2"',
      46: '1-3/4"',
      48: '2"',
      50: '2-1/4"',
      52: '2-1/2"',
      54: '2-3/4"',
      56: '3"',
    };
    return lengths[partNumber.replace("#", "")] || "";
};

function CylinderFinder() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSeriesName, setSelectedSeriesName] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedDevicePrefixes, setSelectedDevicePrefixes] = useState([]);
  const [selectedCylinderPrefix, setSelectedCylinderPrefix] = useState(null);
  const [currentStep, setCurrentStep] = useState("deviceSelection");
  const [globalSearchTerm, setGlobalSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showMultipleMatchesWarning, setShowMultipleMatchesWarning] = useState(false);

  // --- MORTISE COLLAR LOOKUP STATES ---
  const [selectedTrimType, setSelectedTrimType] = useState("SECTIONAL");
  const [selectedDoorThickness, setSelectedDoorThickness] = useState("1-3/4\"");
  
  const doorThicknessOptions = useMemo(() => [
    { label: "1-3/8\"", value: "1-3/8\"" },
    { label: "1-3/4\"", value: "1-3/4\"" },
    { label: "2\"", value: "2\"" },
    { label: "2-1/4\"", value: "2-1/4\"" },
  ], []); 
  
  const trimTypeOptions = useMemo(() => [
      {label: "Sectional Trim (CO, L, O, etc.)", value: "SECTIONAL"},
      {label: "Sectional Trim (E, E2, E3, E4)", value: "SECTIONAL_E_TRIM"},
      {label: "Escutcheon Trim (LE1, CE, etc.)", value: "ESCUTCHEON"},
      {label: "Escutcheon Trim (WT)", value: "ESCUTCHEON_WT_TRIM"},
      {label: "Specialty Hardware (BHW, ALP, etc.)", value: "SPECIALTY"},
      {label: "V-Series Indicator Trim", value: "V_SERIES_TRIM"},
  ], []);
  
  const selectedTrimLabel = useMemo(() => {
    return trimTypeOptions.find(opt => opt.value === selectedTrimType)?.label || selectedTrimType;
  }, [trimTypeOptions, selectedTrimType]);

  // --- REFERENCES ---
  const deviceOptionsRef = useRef(null);
  const cylinderOptionsRef = useRef(null);
  const resultsRef = useRef(null);
  const searchResultsRef = useRef(null);

  // --- DATA ACCESSORS ---
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
    const categoryData = sargentData.hardware.find((h) => h.category === selectedCategory);
    const seriesData = categoryData?.series.find((s) => s.name === selectedSeriesName);
    const modelData = seriesData?.models.find((m) => m.modelNumber === selectedModel);

    if (!modelData) return null;

    const combinedExcludedPrefixes = [...(seriesData.excludedPrefixes || []), ...(modelData.excludedPrefixes || [])];

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
    let availablePrefixes = activeModelData.prefixes?.filter((p) => p.isDeviceSpecific && p.id !== "Inside Cyl" && p.id !== "980C2") || [];
    if (activeModelData.modelNumber !== "8816" && activeModelData.modelNumber !== "PE8816") {
      availablePrefixes = availablePrefixes.filter((p) => !p.id.startsWith("127"));
    }
    return availablePrefixes;
  }, [activeModelData]);
  
  const categoryButtonOptions = useMemo(() => {
    return sargentData.hardware.map((h) => {
      let imageUrl;
      switch (h.category) {
        case "Exit Devices": imageUrl = images.RimExit80; break;
        case "Mortise Locks": imageUrl = images.Mortise8200; break;
        case "Bored Locks": imageUrl = images.Bored10XLine; break;
        default: imageUrl = images.sargentlogo;
      }
      return { id: h.category, name: h.category, imageUrl };
    });
  }, []);

  const groupedSeriesOptions = useMemo(() => {
      if (!selectedCategory || selectedCategory === "Mullions") return [];
      
      const data = sargentData.hardware.find(h => h.category === selectedCategory)?.series || [];
      const grouped = {};

      data.forEach(series => {
          const name = series.name;
          let groupKey = 'Other';
          if (selectedCategory === "Exit Devices") {
              if (name.startsWith("PE8")) groupKey = "PE80 Series";
              else if (name.startsWith("8") && !name.startsWith("82")) groupKey = "80 Series";
              else if (name.startsWith("9")) groupKey = "90 Series";
              else if (name.startsWith("2") || name.startsWith("3")) groupKey = "20/30 Series";
          } else {
              groupKey = selectedCategory;
          }
          if (!grouped[groupKey]) grouped[groupKey] = [];
          grouped[groupKey].push(series);
      });

      return Object.keys(grouped).map(groupName => ({
          label: groupName,
          options: grouped[groupName].map(series => ({
              label: series.name,
              value: series.name,
              imageUrl: series.imageUrl || images.sargentlogo,
          }))
      }));
  }, [selectedCategory]);
  
  const groupedModelOptions = useMemo(() => {
    if (!selectedCategory) return [];
    const categoryData = sargentData.hardware.find((h) => h.category === selectedCategory);
    if (!categoryData) return [];

    if (selectedCategory === "Mullions") {
        const allMullionModels = categoryData.series.flatMap(series => 
            series.models.map(model => ({
                label: `${model.modelNumber} - ${model.description}`,
                value: model.modelNumber,
                imageUrl: model.imageUrl || series.imageUrl || images.sargentlogo,
            }))
        );
        return [{ label: "Lockable Mullion Models", options: allMullionModels }];
    }
    
    if (!selectedSeriesName) return [];
    const seriesData = categoryData?.series.find((s) => s.name === selectedSeriesName);
    if (!seriesData) return [];
    return [{
      label: selectedSeriesName,
      options: seriesData.models.map((model) => ({
        label: `${model.modelNumber} - ${model.description}`,
        value: model.modelNumber,
        imageUrl: model.imageUrl || seriesData.imageUrl || images.sargentlogo,
      })),
    }];
  }, [selectedCategory, selectedSeriesName]);

  const finalCylinders = useMemo(() => {
    if (!activeModelData) return [];

    const isMortiseLock = activeModelData.category === "Mortise Locks";
    const isMullion980C2 = ["EL980", "SMEL980"].includes(activeModelData.modelNumber); // Check for specific models tied to 980C2 logic
    const isMullion980C1 = activeModelData.category === "Mullions" && !isMullion980C2;

    const has127Prefix = selectedDevicePrefixes.some((p) => p.startsWith("127"));
    const hasLficPrefix = selectedCylinderPrefix && isLficForCollar(selectedCylinderPrefix);
    const hasSficPrefix = selectedCylinderPrefix && isSficForCollar(selectedCylinderPrefix);
    const hasKesoPrefix = selectedCylinderPrefix && ["F1-82-", "F1-83-", "82-", "83-"].includes(selectedCylinderPrefix);
    
    // Core prefixes for displaying core part numbers and descriptions
    const isLficCore = selectedCylinderPrefix && (selectedCylinderPrefix.includes("60-") || selectedCylinderPrefix.includes("63-") || selectedCylinderPrefix.includes("64-"));
    const isSficCore = selectedCylinderPrefix && (selectedCylinderPrefix.includes("70-") || selectedCylinderPrefix.includes("72-") || selectedCylinderPrefix.includes("73-"));


    const rawCylinderList = [];
    
    if (isMullion980C1) {
        const kitPrefix = activeModelData.prefixes?.find(p => p.id === '980C1');
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
        role: "Outside Cylinder",
        notes: activeModelData.baseCylinder.notes || null,
        sourcePrefix: null,
      });
    }

    const insideCylData = activeModelData.prefixes?.find(p => p.id === "Inside Cyl" && p.addsCylinder);
    if (insideCylData && !has127Prefix) {
      rawCylinderList.push({ ...insideCylData.addsCylinder, role: "Inside Cylinder", notes: insideCylData.addsCylinder.notes || insideCylData.description, sourcePrefix: insideCylData });
    }

    selectedDevicePrefixes.forEach((prefixId) => {
      const prefixData = activeModelData.prefixes?.find((p) => p.id === prefixId);
      if (prefixData?.addsCylinder) {
        rawCylinderList.push({ ...prefixData.addsCylinder, role: prefixId.startsWith("127") ? "Inside Cylinder" : prefixData.id, notes: prefixData.description, sourcePrefix: prefixData });
      }
    });
    
    // Add 980C2 kit for description purposes if it's not a general keying prefix
    if (isMullion980C2 && !selectedCylinderPrefix) {
        const kitPrefix = activeModelData.prefixes?.find(p => p.id === '980C2');
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
      consolidatedMap.set(key, { ...cyl, quantity: (existing?.quantity || 0) + 1, sourcePrefix: existing?.sourcePrefix || cyl.sourcePrefix });
    });

    let finalCylindersArray = Array.from(consolidatedMap.values());
    const isDoubleCylinderMortise = isMortiseLock && activeModelData?.prefixes?.some(p => p.id === "Inside Cyl");
    const cylCount = isDoubleCylinderMortise ? "DOUBLE_CYLINDER" : "SINGLE_CYLINDER";

    return finalCylindersArray.map((cyl) => {
      let basePartNumber = cyl.partNumber.replace("#", ""); 
      const kesoLengths = { "F1-71":'1-1/8"', "F1-72":'1-1/4"', "F1-73":'1-3/8"', "F1-74":'1-1/2"', "F1-76":'1-3/4"', "F1-64":'1-3/4" to 3-1/8"' };
      let lengthDesc = hasKesoPrefix ? kesoLengths[basePartNumber] || "" : getCylinderLengthDescription(basePartNumber);
      
      let finalPartNumber = `${basePartNumber} x Keying Details x Finish`; // Default
      const prefixData = cylinderPrefixCategories.flatMap(c => c.prefixes).find(p => p.id === selectedCylinderPrefix);
      const prefixDesc = prefixData ? prefixData.description.replace("Device", "Housing") : "";
      
      // Calculate Notes and Description based on initial values/roles
      let calculatedNotes = cyl.notes;
      let calculatedDescription = `${lengthDesc} ${cyl.type}`;

      // --- START MULLION 980C2 FIXED #46 LOGIC (Forces #46) ---
      if (isMullion980C2 && selectedCylinderPrefix) {
          // All fixed mullion outputs use the prefix followed by the size '46'
          finalPartNumber = `${selectedCylinderPrefix}${basePartNumber} x Keying Details x Finish`;

          if (isLficCore) {
              cyl.type = "LFIC Core (for Housing)"; 
              cyl.description = `LFIC Core for #46 Housing: ${prefixDesc}`;
              cyl.notes = "Core for fixed #46 Housing (Housing comes with mullion).";
          } else if (isSficCore) {
              cyl.type = "SFIC Core (for Housing)"; 
              cyl.description = `SFIC Core for #46 Housing: ${prefixDesc}`; 
              cyl.notes = "Core for fixed #46 Housing (Housing comes with mullion).";
          } else {
              // Conventional/Other prefix selected with 980C2 logic
              cyl.notes = "Cylinder for fixed #46 Housing (Housing comes with mullion).";
          }
          
          calculatedNotes = cyl.notes;
          calculatedDescription = `${lengthDesc} ${cyl.type}`;
      // --- END MULLION 980C2 FIXED #46 LOGIC ---

      // --- START MULLION 980C1 VARIABLE SIZE LOGIC (Converts #41) ---
      } else if (isMullion980C1 && selectedCylinderPrefix) {
          // Logic for variable size mullions (converts #41 placeholder to #42 or #43)
          if (hasLficPrefix) {
            basePartNumber = '42';
          } else if (hasSficPrefix) {
            basePartNumber = '43';
          }
          finalPartNumber = `${selectedCylinderPrefix}${basePartNumber} x Keying Details x Finish`;
          
          // Recalculate description based on new basePartNumber and prefix
          calculatedDescription = `${getCylinderLengthDescription(basePartNumber)} ${cyl.type} ${prefixDesc}`;

      // --- END MULLION 980C1 VARIABLE SIZE LOGIC ---
      
      // --- START STANDARD CYLINDER LOGIC ---
      } else if (has127Prefix && basePartNumber === "44") {
          finalPartNumber = `127-44 x Keying Details x Finish`;
      } else if (hasKesoPrefix) {
          if (basePartNumber === "41") finalPartNumber = "F1-71 x Keying Details x Finish";
          else if (basePartNumber === "46") finalPartNumber = "F1-76 x Keying Details x Finish";
          else if (basePartNumber === "34") finalPartNumber = "F1-64 x Keying Details x Finish";
      } else if (selectedCylinderPrefix) {
          finalPartNumber = `${selectedCylinderPrefix}${basePartNumber} x Keying Details x Finish`;
          calculatedDescription += ` ${prefixDesc}`;
      } else {
          finalPartNumber = `${basePartNumber} x Keying Details x Finish`;
      }
      // --- END STANDARD CYLINDER LOGIC ---
      
      // Overwrite notes for general Outside/Inside roles (applies to standard locks)
      if (!isMullion980C2 && !isMullion980C1) {
          if (cyl.role === "Outside Cylinder") calculatedNotes = "For the outside of the door.";
          else if (cyl.role === "Inside Cylinder") calculatedNotes = "For the inside of the door.";
      }
      

      const cylinderCollars = [];
      const collarSource = cyl.sourcePrefix?.collars || activeModelData.collars;
      
      if (isMortiseLock) {
          const mortiseCollar = getMortiseCollarPartNumber(basePartNumber, selectedCylinderPrefix, selectedDoorThickness, selectedTrimType, cylCount);
          if (mortiseCollar) {
              let collarImage = images.Collar1KB;
              const pnPrefix = mortiseCollar.partNumber.substring(0, mortiseCollar.partNumber.indexOf('x')).trim();
              if (pnPrefix.startsWith("1KA")) collarImage = images.Collar1KA;
              else if (pnPrefix.startsWith("1SB")) collarImage = images.Collar1SB;
              else if (pnPrefix.startsWith("97")) collarImage = images.Rosette97;
              else if (pnPrefix.startsWith("90")) collarImage = images.Ring90; 
              cylinderCollars.push({...mortiseCollar, imageUrl: collarImage});
          }
      } else if (isMullion980C1 || isMullion980C2) {
          // Mullion collar logic is mandatory (97 Rosette)
          if (collarSource) {
            const { default: defaultCollar } = collarSource;
            if (defaultCollar) cylinderCollars.push({...defaultCollar, imageUrl: defaultCollar.imageUrl || images.sargentlogo});
          }
          
          // Fallback logic for 980C1 if not already covered by collarSource
          if (isMullion980C1 && cylinderCollars.length === 0) {
               let requiredPart, description;
               if (hasLficPrefix) {
                  requiredPart = "1KB-2";
                  description = "1KB-2 Collar (Required for LFIC on Mullion)";
              } else if (hasSficPrefix) {
                  requiredPart = "1KB-3";
                  description = "1KB-3 Collar (Required for SFIC on Mullion)";
              } else {
                  requiredPart = "1KB-1";
                  description = "1KB-1 Collar (Required for Conventional on Mullion)";
              }
              if (requiredPart) {
                  cylinderCollars.push({ partNumber: `${requiredPart} x Finish`, description, projection: getProjection(requiredPart), imageUrl: images.Collar1KB });
              }
          }
      } else if (collarSource) {
          const { default: defaultCollar, conditional: conditionalCollars } = collarSource;
          let selectedConditionalCollar = null;
          if (conditionalCollars) {
              selectedConditionalCollar = conditionalCollars.find(collar => (collar.prefix === "60-" && hasLficPrefix) || (collar.prefix === "70-" && hasSficPrefix));
          }
          if (selectedConditionalCollar) cylinderCollars.push({...selectedConditionalCollar, imageUrl: selectedConditionalCollar.imageUrl || images.sargentlogo});
          else if (defaultCollar) cylinderCollars.push({...defaultCollar, imageUrl: defaultCollar.imageUrl || images.sargentlogo});
      }
      
      return { ...cyl, partNumber: finalPartNumber, description: calculatedDescription.trim(), notes: calculatedNotes, collars: cylinderCollars, imageUrl: images.sargentlogo };
    });
  }, [activeModelData, selectedDevicePrefixes, selectedCylinderPrefix, selectedDoorThickness, selectedTrimType]);

  useEffect(() => {
    if (currentStep === "deviceOptions" && deviceOptionsRef.current) deviceOptionsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    if (currentStep === "cylinderOptions" && cylinderOptionsRef.current) cylinderOptionsRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); // FIX: Corrected variable name from cylinderOptions to cylinderOptionsRef
    if (currentStep === "results" && resultsRef.current) resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    if (globalSearchTerm.length > 0 && searchResultsRef.current) searchResultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentStep, globalSearchTerm]);

  useEffect(() => {
    if (globalSearchTerm.trim().length < 2) {
      setSearchResults([]);
      setShowMultipleMatchesWarning(false);
      return;
    }
    const lowercasedTerm = globalSearchTerm.toLowerCase();
    const results = allModels.filter((model) => model.modelNumber.toLowerCase().includes(lowercasedTerm) || model.description.toLowerCase().includes(lowercasedTerm) || model.seriesName.toLowerCase().includes(lowercasedTerm));
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
    setSelectedDoorThickness("1-3/4\""); 
    setSelectedTrimType("SECTIONAL");
    
    const fullModelData = sargentData.hardware.find(h => h.category === result.category)?.series.find(s => s.name === result.seriesName)?.models.find(m => m.modelNumber === result.modelNumber);
    const isMullion = result.category === "Mullions";
    const hasDeviceOptions = !isMullion && fullModelData?.prefixes.filter(p => p.isDeviceSpecific && p.id !== "Inside Cyl" && p.id !== "980C2").length > 0;
    const hasCylinderOptions = fullModelData?.baseCylinder || fullModelData?.prefixes.some(p => p.addsCylinder);
    
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
    const hasCylinderOptions = activeModelData?.baseCylinder || activeModelData?.prefixes.some(p => p.addsCylinder) || isMullion;
    
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
    setSelectedDoorThickness("1-3/4\""); 
    setSelectedTrimType("SECTIONAL"); 
    setGlobalSearchTerm("");
    setSearchResults([]);
    setCurrentStep("deviceSelection");
    if (categoryId === "Mullions") {
        const mullionCategory = sargentData.hardware.find(h => h.category === "Mullions");
        if (mullionCategory && mullionCategory.series.length > 0) setSelectedSeriesName(mullionCategory.series[0].name); 
    }
  };

  const handleSeriesChange = (seriesName) => {
    setSelectedSeriesName(seriesName);
    setSelectedModel("");
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setSelectedDoorThickness("1-3/4\""); 
    setSelectedTrimType("SECTIONAL"); 
    setGlobalSearchTerm("");
    setSearchResults([]);
  };

  const handleModelChange = (modelId) => {
    setSelectedModel(modelId);
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setSelectedDoorThickness("1-3/4\""); 
    setSelectedTrimType("SECTIONAL"); 
    if (selectedCategory === "Mullions") {
        const categoryData = sargentData.hardware.find(h => h.category === "Mullions");
        const series = categoryData.series.find(s => s.models.some(m => m.modelNumber === modelId));
        if(series) setSelectedSeriesName(series.name);
    }
  };

  const handleDevicePrefixChange = (prefixId) => {
    setSelectedDevicePrefixes((prev) => prev.includes(prefixId) ? prev.filter((p) => p !== prefixId) : [...prev, prefixId]);
  };

  const handleCylinderPrefixChange = (prefixId) => {
    setSelectedCylinderPrefix((prev) => (prev === prefixId ? null : prefixId));
  };

  const handleNext = () => { if (currentStep === "deviceOptions") setCurrentStep("cylinderOptions"); };

  const handleReset = useCallback(() => {
    setSelectedCategory("");
    setSelectedSeriesName("");
    setSelectedModel("");
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setSelectedDoorThickness("1-3/4\"");
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
      const hasCylinderOptions = activeModelData?.baseCylinder || activeModelData?.prefixes.some(p => p.addsCylinder);
      if (hasCylinderOptions) setCurrentStep("cylinderOptions");
      else handleReset();
    } else if (currentStep === "cylinderOptions") {
      const isMullion = selectedCategory === "Mullions";
      const hasDeviceOptions = !isMullion && deviceTiedPrefixes.length > 0;
      if (hasDeviceOptions) setCurrentStep("deviceOptions");
      else handleReset();
    } else if (currentStep === "deviceOptions") {
      handleReset();
    }
  }, [currentStep, deviceTiedPrefixes, selectedCategory, activeModelData, handleReset]);

  const handleFindCylinder = () => setCurrentStep("results");

  const isMullion980C2 = ["EL980", "SMEL980"].includes(selectedModel);

  const chosenPrefixes = useMemo(() => {
    const prefixes = [];
    if (selectedCylinderPrefix) {
      const prefixData = cylinderPrefixCategories.flatMap(c => c.prefixes).find(p => p.id === selectedCylinderPrefix);
      if (prefixData) prefixes.push({ id: prefixData.id, description: prefixData.description });
    }
    selectedDevicePrefixes.forEach(prefixId => {
      const prefixData = activeModelData?.prefixes?.find(p => p.id === prefixId);
      if (prefixData) prefixes.push({ id: prefixData.id, description: prefixData.description });
    });
    // Add implicit 980C2 kit description if applicable and no key prefix was chosen
     if (isMullion980C2 && !selectedCylinderPrefix) {
        const kitPrefix = activeModelData?.prefixes?.find(p => p.id === '980C2');
        if (kitPrefix) prefixes.push({ id: kitPrefix.id, description: kitPrefix.description });
    }
    return prefixes;
  }, [selectedCylinderPrefix, selectedDevicePrefixes, activeModelData, isMullion980C2]);

  const availableCylinderPrefixCategories = useMemo(() => {
    return cylinderPrefixCategories.map(category => ({
      ...category,
      prefixes: category.prefixes.filter(p => !activeModelData?.excludedPrefixes?.some(excludedPrefix => p.id.startsWith(excludedPrefix)))
    }));
  }, [activeModelData]);

  const hasAvailableCylinderPrefixes = useMemo(() => availableCylinderPrefixCategories.some(c => c.prefixes.length > 0), [availableCylinderPrefixCategories]);
  
  const isInitialState = !globalSearchTerm;

  const renderStep = () => {
    const isMortiseLockSelected = selectedCategory === "Mortise Locks";
    const isMullionSelected = selectedCategory === "Mullions";

    if (isInitialState) {
      switch (currentStep) {
        case "deviceSelection": return (
          <>
            <p className="finder-intro">Select a hardware category, series, and model to get started.</p>
            <div className="hardware-selectors">
              <ButtonSelector title="Select Hardware Category" options={categoryButtonOptions} selected={selectedCategory} onSelect={handleCategoryChange} />
              {selectedCategory && !isMullionSelected && <HardwareSelector label="Series" options={groupedSeriesOptions} value={selectedSeriesName} onChange={handleSeriesChange} disabled={!selectedCategory} />}
              {(selectedSeriesName || isMullionSelected) && <HardwareSelector label="Model" options={groupedModelOptions} value={selectedModel} onChange={handleModelChange} disabled={!selectedCategory || (!isMullionSelected && !selectedSeriesName)} />}
            </div>
            <div className="wizard-controls">
              <button onClick={handleProceedFromDeviceSelection} className="wizard-find-button" disabled={!selectedModel}>Next</button>
              <button onClick={handleReset} className="wizard-find-button reset-button">Reset</button>
            </div>
          </>
        );
        case "deviceOptions": return (
          <div ref={deviceOptionsRef} className="wizard-step active">
            <div className="prefix-section">
              <h3 className="prefix-section-title">Select Keyed Device Options</h3>
              <PrefixSelector prefixes={deviceTiedPrefixes} selectedPrefixes={selectedDevicePrefixes} onChange={handleDevicePrefixChange} />
            </div>
            <div className="wizard-controls">
              <button onClick={handleBack} className="wizard-back-button">Back</button>
              <button onClick={handleNext} className="wizard-find-button">Next</button>
              <button onClick={handleReset} className="wizard-find-button reset-button">Reset</button>
            </div>
          </div>
        );
        case "cylinderOptions": return (
          <div ref={cylinderOptionsRef} className="wizard-step active">
            <h3 className="prefix-section-title">Select Cylinder Options</h3>
            {isMortiseLockSelected && (
              <div className="prefix-section mortise-options-section" style={{marginBottom: '1.5rem'}}>
                <h4 className="prefix-section-title mortise-collar-title">Mortise Collar Options</h4>
                <div className="mortise-options-group">
                  <label className="mortise-option-label">Door Thickness</label>
                  <div className="mortise-option-selector thickness-selector">
                    {doorThicknessOptions.map(option => <button key={option.value} className={`mortise-option-button ${selectedDoorThickness === option.value ? 'active' : ''}`} onClick={() => setSelectedDoorThickness(option.value)}>{option.label}</button>)}
                  </div>
                </div>
                <div className="mortise-options-group">
                  <label className="mortise-option-label">Trim Type</label>
                  <div className="mortise-option-selector trim-selector">
                    {trimTypeOptions.map(option => <button key={option.value} className={`mortise-option-button ${selectedTrimType === option.value ? 'active' : ''}`} onClick={() => setSelectedTrimType(option.value)}>{option.label}</button>)}
                  </div>
                </div>
              </div>
            )}
            {hasAvailableCylinderPrefixes ? (
              <div className="prefix-section">
                <h4 className="prefix-section-title" style={isMortiseLockSelected ? {border: 'none', marginBottom: '1rem'} : {}}>Select Key System</h4>
                <CategorizedPrefixSelector categories={availableCylinderPrefixCategories} selectedPrefixes={selectedCylinderPrefix ? [selectedCylinderPrefix] : []} onChange={handleCylinderPrefixChange} />
              </div>
            ) : <div className="no-options-message">No key system options available for this device.</div>}
            <div className="wizard-controls">
              <button onClick={handleBack} className="wizard-back-button">Back</button>
              <button onClick={handleFindCylinder} className="wizard-find-button">Find Cylinder</button>
              <button onClick={handleReset} className="wizard-find-button reset-button">Reset</button>
            </div>
          </div>
        );
        case "results": return (
          <div ref={resultsRef} className="wizard-step active">
            <div className="selected-hardware-note">
              <div className="selected-hardware-image-wrapper">
                <a href={activeModelData?.imageUrl} target="_blank" rel="noopener noreferrer">
                  <img src={activeModelData?.imageUrl || images.sargentlogo} alt={activeModelData?.modelNumber} className="search-result-image" />
                </a>
              </div>
              <div className="selected-hardware-text">
                <p>Selected Device: <strong>{selectedModel}</strong></p>
                <span className="selected-hardware-desc">{activeModelData?.description}</span>
                {isMortiseLockSelected && (
                    <>
                      <p className="selected-hardware-mortise-details">Door Thickness: <strong>{selectedDoorThickness}</strong></p>
                      <p className="selected-hardware-mortise-details">Trim Style: <strong>{selectedTrimLabel}</strong></p>
                    </>
                )}
              </div>
            </div>
            {chosenPrefixes.length > 0 && (
              <div className="chosen-prefixes-container">
                <h4 className="chosen-prefixes-title">Options Chosen:</h4>
                <ul className="chosen-prefixes-list">
                  {chosenPrefixes.map((prefix) => <li key={prefix.id} className="chosen-prefix-item"><span className="chosen-prefix-id">{prefix.id}</span><span className="chosen-prefix-description">{prefix.description}</span></li>)}
                </ul>
              </div>
            )}
            <ResultsDisplay cylinders={finalCylinders} />
            <div className="wizard-controls">
              <button onClick={handleBack} className="wizard-back-button">Back to Options</button>
              <button onClick={handleReset} className="wizard-find-button reset-button">Start Over</button>
            </div>
          </div>
        );
        default: return null;
      }
    }
    return (
      <div ref={searchResultsRef} className="search-results-list">
        {showMultipleMatchesWarning && <p className="multiple-matches-warning">Multiple matches found. Please select one.</p>}
        {searchResults.map((result) => (
          <div key={`${result.seriesName}-${result.modelNumber}`} className="search-result-item" onClick={() => handleSearchClick(result)}>
            <img src={result.imageUrl} alt={result.modelNumber} className="search-result-image" />
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
      <div className="global-search-container">
        <SearchIcon />
        <input type="text" placeholder="Search by model, series, or function (e.g., 8804, storeroom)..." value={globalSearchTerm} onChange={(e) => setGlobalSearchTerm(e.target.value)} onKeyDown={handleSearchKeyDown} className="global-search-input" />
        {globalSearchTerm && <button onClick={() => setGlobalSearchTerm("")} className="clear-search-button"><ClearIcon /></button>}
      </div>
      {renderStep()}
    </div>
  );
}

export default CylinderFinder;