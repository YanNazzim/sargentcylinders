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
import { processFinalCylinders, isAuxPrefix } from "../utils/cylinderUtils";
import { isLficForCollar, isSficForCollar } from "../utils/collarLogic";


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

  const deviceOptionsRef = useRef(null);
  const cylinderOptionsRef = useRef(null);
  const resultsRef = useRef(null);
  const searchResultsRef = useRef(null);
  const categoryRef = useRef(null);
  const seriesRef = useRef(null);
  const modelRef = useRef(null);

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
    let availablePrefixes =
      activeModelData.prefixes?.filter(
        (p) => p.isDeviceSpecific && p.id !== "Inside Cyl" && p.id !== "980C2"
      ) || [];
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

  const seriesGroupedOptions = useMemo(() => {
    if (!selectedCategory || selectedCategory === "Mullions") return [];

    const data =
      sargentData.hardware.find((h) => h.category === selectedCategory)
        ?.series || [];
    const groups = {
      PE80: { title: "PE80 Series", options: [], order: 1 },
      80: { title: "80 Series", options: [], order: 2 },
      90: { title: "90 Series", options: [], order: 3 },
      Other: { title: "Mortise / Bored Locks", options: [], order: 4 },
    };

    data.forEach((series) => {
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
        groups.Other.options.push(option);
      }
    });

    return Object.values(groups)
      .filter((group) => group.options.length > 0)
      .sort((a, b) => a.order - b.order);
  }, [selectedCategory]);

  const finalModelOptions = useMemo(() => {
    if (!selectedCategory) return [];

    const categoryData = sargentData.hardware.find(
      (h) => h.category === selectedCategory
    );
    if (!categoryData) return [];

    let modelsToGroup = [];

    if (selectedCategory === "Mullions") {
      modelsToGroup = categoryData.series.flatMap((series) =>
        series.models.map((model) => ({
          ...model,
          seriesName: series.name,
          seriesImageUrl: series.imageUrl,
        }))
      );
    } else if (selectedSeriesName) {
      const seriesData = categoryData.series.find(
        (s) => s.name === selectedSeriesName
      );
      if (!seriesData) return [];
      modelsToGroup = seriesData.models.map((model) => ({
        ...model,
        seriesName: seriesData.name,
        seriesImageUrl: seriesData.imageUrl,
      }));
    } else {
      return [];
    }
    
    return modelsToGroup.map((model) => ({
      label: `${model.modelNumber} - ${model.description}`,
      value: model.modelNumber,
      description: model.description,
      imageUrl: model.imageUrl || model.seriesImageUrl || images.sargentlogo,
    }));
  }, [selectedCategory, selectedSeriesName]);

  const finalCylinders = useMemo(() => {
    if (!activeModelData) return [];

    const isMortiseLock = activeModelData.category === "Mortise Locks";
    const isBoredLock = activeModelData.category === "Bored Locks";
    const isMullion980C2 = ["EL980", "SMEL980"].includes(activeModelData.modelNumber);
    const isMullion980C1 = activeModelData.category === "Mullions" && !isMullion980C2;

    const has127Prefix = selectedDevicePrefixes.some((p) => p.startsWith("127"));
    const isLficCore = selectedCylinderPrefix && isLficForCollar(selectedCylinderPrefix);
    const isSficCore = selectedCylinderPrefix && isSficForCollar(selectedCylinderPrefix);
    
    const isBoredLFICOrSFICPrefix = isBoredLock && 
      selectedCylinderPrefix && 
      (selectedCylinderPrefix.includes("6") || selectedCylinderPrefix.includes("7"));


    const rawCylinderList = [];
    const isBoredLockCoreSystem = isBoredLFICOrSFICPrefix;

    if (isBoredLockCoreSystem) {
        rawCylinderList.push({
            partNumber: "CORE-SYSTEM", 
            role: "Bored Lock Core System", 
            notes: "Core system for Bored Lock",
            sourcePrefix: activeModelData.baseCylinder,
        });
    } else { 
        if (isMullion980C1) {
          const kitPrefix = activeModelData.prefixes?.find((p) => p.id === "980C1");
          if (kitPrefix?.addsCylinder) {
            rawCylinderList.push({ ...kitPrefix.addsCylinder, role: "Mullion Cylinder", notes: kitPrefix.description, sourcePrefix: kitPrefix, });
          }
        } else if (activeModelData.baseCylinder && !isMullion980C2) {
          rawCylinderList.push({
            ...activeModelData.baseCylinder,
            role: isBoredLock ? "Keyed Cylinder" : "Outside Cylinder", 
            notes: activeModelData.baseCylinder.notes || null,
            sourcePrefix: null,
          });
        }
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
      const prefixData = activeModelData.prefixes?.find((p) => p.id === prefixId);
      if (prefixData?.addsCylinder) {
        rawCylinderList.push({
          ...prefixData.addsCylinder,
          role: prefixId.startsWith("127") ? "127 - Mortise Cylinder Thumbturn" : prefixData.id,
          notes: prefixData.description,
          sourcePrefix: prefixData,
        });
      }
    });

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

    const isDoubleCylinderMortise = isMortiseLock && activeModelData?.prefixes?.some((p) => p.id === "Inside Cyl");
    const cylCount = isDoubleCylinderMortise ? "DOUBLE_CYLINDER" : "SINGLE_CYLINDER";
    
    const finalProcessingOptions = {
        selectedCylinderPrefix, 
        selectedDevicePrefixes, 
        activeModelData, 
        selectedDoorThickness, 
        selectedTrimType, 
        cylCount, 
        isBoredLock, 
        isMortiseLock, 
        isMullion980C2, 
        isMullion980C1, 
        isLficCore, 
        isSficCore
    };

    return processFinalCylinders(rawCylinderList, finalProcessingOptions, cylinderPrefixCategories);
  }, [
    activeModelData,
    selectedDevicePrefixes,
    selectedCylinderPrefix,
    selectedDoorThickness,
    selectedTrimType,
  ]);
  
  const handleSearchClick = useCallback((result) => {
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
    
    // SAFETY FIX: Optional chaining on prefixes array access
    const hasDeviceOptions =
      !isMullion &&
      (fullModelData?.prefixes || []).filter(
        (p) => p.isDeviceSpecific && p.id !== "Inside Cyl" && p.id !== "980C2"
      ).length > 0;
      
    const hasCylinderOptions =
      fullModelData?.baseCylinder ||
      (fullModelData?.prefixes || []).some((p) => p.addsCylinder) ||
      isMullion;

    if (!hasCylinderOptions) setCurrentStep("results");
    else if (isMullion) setCurrentStep("cylinderOptions");
    else if (hasDeviceOptions) setCurrentStep("deviceOptions");
    else setCurrentStep("cylinderOptions");
  }, []);

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchResults.length === 1) handleSearchClick(searchResults[0]);
      else if (searchResults.length > 1) setShowMultipleMatchesWarning(true);
    }
  };

  const isModelSelectReady = useMemo(() => {
    const isMullion = selectedCategory === "Mullions";
    return isMullion || !!selectedSeriesName;
  }, [selectedCategory, selectedSeriesName]);

  // Handle auto-scroll
  useEffect(() => {
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
    } else if (currentStep === "results") {
        targetRef = resultsRef;
    }

    if (targetRef && targetRef.current) {
        const headerOffset = 100;
        const elementPosition = targetRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  }, [
    currentStep,
    selectedCategory,
    selectedSeriesName,
    selectedModel,
    isModelSelectReady,
  ]);

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

    if (categoryId === "Mullions") {
      setSelectedSeriesName("Mullion Models");
    }
  };

  const handleSeriesButtonChange = (seriesName) => {
    setSelectedSeriesName(seriesName);
    setSelectedModel("");
  };

  const handleModelChange = (modelId) => {
    setSelectedModel(modelId);
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setSelectedDoorThickness('1-3/4"');
    setSelectedTrimType("SECTIONAL");

    const categoryData = sargentData.hardware.find(
      (h) => h.category === selectedCategory
    );
    const series = categoryData?.series.find((s) =>
      s.models.some((m) => m.modelNumber === modelId)
    );
    if (series) {
      setSelectedSeriesName(series.name);
    } else {
      setSelectedSeriesName(categoryData?.series[0]?.name || "");
    }
  };

  const handleDevicePrefixChange = useCallback(
    (id, isRadio) => {
      setSelectedDevicePrefixes((prev) => {
        if (isRadio) {
          const newMainId = id;
          const currentAuxPrefixes = prev.filter((p) => isAuxPrefix(p));
          const newMainPrefixes = prev.includes(newMainId) ? [] : [newMainId];
          return [...currentAuxPrefixes, ...newMainPrefixes];
        } else {
          if (prev.includes(id)) {
            return prev.filter((p) => p !== id);
          } else {
            return [...prev, id];
          }
        }
      });
    },
    []
  );

  const handleCylinderPrefixChange = useCallback(
    (prefixId) => {
      setSelectedCylinderPrefix((prev) =>
        prev === prefixId ? null : prefixId
      );
    },
    []
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
        setSelectedModel("");
        setSelectedSeriesName(
          selectedCategory === "Mullions"
            ? "Mullion Models"
            : selectedSeriesName
        );
        setCurrentStep("deviceSelection");
      }
    } else if (currentStep === "deviceOptions") {
      setSelectedModel("");
      setSelectedSeriesName(
        selectedCategory === "Mullions" ? "Mullion Models" : selectedSeriesName
      );
      setCurrentStep("deviceSelection");
    } else if (
      currentStep === "deviceSelection" &&
      (selectedModel || selectedSeriesName)
    ) {
      setSelectedModel("");
      setSelectedSeriesName("");
    } else if (currentStep === "deviceSelection" && selectedCategory) {
      setSelectedCategory("");
    }
  }, [
    currentStep,
    deviceTiedPrefixes,
    selectedCategory,
    selectedSeriesName,
    selectedModel,
  ]);

  const handleFindCylinder = () => {
      setCurrentStep("results");
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

    const renderSummaryChoices = () => {
        const choices = [];
        if (selectedCategory) {
            choices.push({ label: 'Category', value: selectedCategory });
        }
        if (selectedSeriesName && selectedCategory !== "Mullions") {
            choices.push({ label: 'Series', value: selectedSeriesName.replace(" Series", "") });
        }
        if (selectedModel) {
            choices.push({ label: 'Model', value: selectedModel });
        }
        if (selectedCategory === "Mortise Locks") {
            choices.push({ label: 'Door Thickness', value: selectedDoorThickness });
            choices.push({ label: 'Trim Type', value: selectedTrimLabel.replace("Trim", "").trim() });
        }
        if (selectedCylinderPrefix) {
            choices.push({ label: 'Key System', value: selectedCylinderPrefix.replace(/-/g, "") });
        }
        if (selectedDevicePrefixes.length > 0) {
            choices.push({ label: 'Accessories', value: selectedDevicePrefixes.map(p => p.split(' ')[0]).join(', ') });
        }

        if (choices.length === 0) return null;

        return (
            <div className="selection-summary-container">
                {choices.map((choice, index) => (
                    <div key={index} className="selection-summary-item">
                        {choice.label}: <strong>{choice.value}</strong>
                    </div>
                ))}
            </div>
        );
    };

  const renderStep = () => {
    const isMortiseLockSelected = selectedCategory === "Mortise Locks";

    if (isInitialState) {
      switch (currentStep) {
        case "deviceSelection":
          const isMullion = selectedCategory === "Mullions";
          const needsSeriesSelection = selectedCategory && !isMullion && !selectedSeriesName;
          const isModelSelectReady = isMullion || selectedSeriesName;

          return (
            <>
              <div ref={categoryRef} className="selection-stage-container">
                <h3 className="prefix-section-title">
                    Hardware Category
                </h3>
                <ButtonSelector
                    options={categoryButtonOptions}
                    selected={selectedCategory}
                    onSelect={handleCategoryChange}
                />
              </div>

              {renderSummaryChoices()}

              {needsSeriesSelection && (
                <div ref={seriesRef} className="selection-stage-container series-selection-group">
                  <h3 className="prefix-section-title">Series</h3>
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

              {isModelSelectReady && (
                <div ref={modelRef} className="selection-stage-container model-selection-group">
                  <h3 className="prefix-section-title">Model / Function</h3>
                  {/* REPLACED DROPDOWN WITH NEW GRID SELECTOR */}
                  <HardwareSelector
                    label="Select Model"
                    options={finalModelOptions}
                    value={selectedModel}
                    onChange={handleModelChange}
                  />
                </div>
              )}

              <div className="wizard-controls">
                <button
                  onClick={handleProceedFromDeviceSelection}
                  className="wizard-find-button"
                  disabled={!selectedModel}
                >
                  Continue Configuration
                </button>
                <button
                  onClick={handleReset}
                  className="wizard-find-button reset-button"
                >
                  Reset
                </button>
              </div>
            </>
          );
        // ... (Other cases remain unchanged)
        case "deviceOptions":
          return (
            <div ref={deviceOptionsRef} className="wizard-step active">
              {renderSummaryChoices()}
              <div className="selection-stage-container">
                <h3 className="prefix-section-title">
                  Device Functions
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
                  Next: Key System
                </button>
                <button
                  onClick={handleReset}
                  className="wizard-find-button reset-button"
                >
                  Reset
                </button>
              </div>
            </div>
          );
        case "cylinderOptions":
          return (
            <div ref={cylinderOptionsRef} className="wizard-step active">
              {renderSummaryChoices()}
              <h3 className="prefix-section-title">
                Key System & Details
              </h3>
              {isMortiseLockSelected && (
                <div className="selection-stage-container mortise-options-section">
                  <h4 className="prefix-section-title mortise-collar-title" style={{fontSize: '1.2rem', marginBottom: '1rem'}}>
                    Mortise Requirements
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
                <div className="selection-stage-container">
                  <h4
                    className="prefix-section-title"
                    style={{ fontSize: '1.2rem' }}
                  >
                    Select Cylinder Option
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
                  Generate Results
                </button>
                <button
                  onClick={handleReset}
                  className="wizard-find-button reset-button"
                >
                  Reset
                </button>
              </div>
            </div>
          );
        case "results":
          return (
            <div ref={resultsRef} className="wizard-step active">
              {renderSummaryChoices()}
              <div className="selected-hardware-note">
                <div className="selected-hardware-image-wrapper">
                  <img
                    src={activeModelData?.imageUrl || images.sargentlogo}
                    alt={activeModelData?.modelNumber}
                    className="search-result-image"
                  />
                </div>
                <div className="selected-hardware-text">
                  <p>
                    <strong>{selectedModel}</strong>
                  </p>
                  <span className="selected-hardware-desc">
                    {activeModelData?.description}
                  </span>
                </div>
              </div>
              <ResultsDisplay cylinders={finalCylinders} />
              <div className="wizard-controls">
                <button onClick={handleBack} className="wizard-back-button">
                  Modify Selection
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
    
    if (globalSearchTerm.length > 0 && searchResults.length === 0) {
        return (
            <div className="search-results-list" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
                 {globalSearchTerm.length < 2 ? "Please type at least 2 characters..." : "No models found matching your search."}
            </div>
        );
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
      <div className="global-search-container">
        {/* WRAPPED INPUT IN A DIV FOR RELATIVE POSITIONING */}
        <div className="search-bar-wrapper">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search model (e.g., 8804, storeroom)..."
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
      </div>
      <div className="app-page-note">
        <p>
          <strong>NOTE</strong>: Devices ordered as{" "}
          <strong>less cylinder</strong> will always be supplied with the{" "}
          <strong>standard collar</strong> for an <strong>1-1/8”</strong>{" "}
          cylinder or the <strong>standard tailpiece</strong> in cases of{" "}
          <strong>bored locks</strong>.
        </p>
      </div>
      {renderStep()}
    </div>
  );
}

export default CylinderFinder;