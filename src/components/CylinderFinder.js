// src/components/CylinderFinder.js
import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { sargentData, cylinderPrefixCategories } from "../data/sargentData";
import HardwareSelector from "./HardwareSelector";
import PrefixSelector from "./PrefixSelector";
import CategorizedPrefixSelector from "./CategorizedPrefixSelector";
import ResultsDisplay from "./ResultsDisplay";
import "./CylinderFinder.css";
import { images } from "../images/images";
import { SearchIcon, ClearIcon } from "./Icons";

function CylinderFinder() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSeriesName, setSelectedSeriesName] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedDevicePrefixes, setSelectedDevicePrefixes] = useState([]);
  const [selectedCylinderPrefix, setSelectedCylinderPrefix] = useState(null);
  const [prefixSearchTerm, setPrefixSearchTerm] = useState("");
  const [currentStep, setCurrentStep] = useState("deviceSelection"); // New state for steps

  const [globalSearchTerm, setGlobalSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showMultipleMatchesWarning, setShowMultipleMatchesWarning] = useState(false);

  // Refs for auto-scrolling
  const deviceOptionsRef = useRef(null);
  const cylinderOptionsRef = useRef(null);
  const resultsRef = useRef(null);
  const searchResultsRef = useRef(null);


  // Auto-scroll when a new step is activated
  useEffect(() => {
    if (currentStep === "deviceOptions" && deviceOptionsRef.current) {
      deviceOptionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (currentStep === "cylinderOptions" && cylinderOptionsRef.current) {
      cylinderOptionsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (currentStep === "results" && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (globalSearchTerm.length > 0 && searchResultsRef.current) {
      searchResultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentStep, globalSearchTerm]);

  const allModels = useMemo(() => {
    const models = [];
    sargentData.hardware.forEach(category => {
      category.series.forEach(series => {
        series.models.forEach(model => {
          models.push({
            category: category.category,
            seriesName: series.name,
            modelNumber: model.modelNumber,
            description: model.description,
            imageUrl: model.imageUrl || series.imageUrl || images.sargentlogo
          });
        });
      });
    });
    return models;
  }, []);

  useEffect(() => {
    if (globalSearchTerm.trim().length < 2) {
      setSearchResults([]);
      setShowMultipleMatchesWarning(false);
      return;
    }
    const lowercasedTerm = globalSearchTerm.toLowerCase();
    const results = allModels.filter(model =>
      model.modelNumber.toLowerCase().includes(lowercasedTerm) ||
      model.description.toLowerCase().includes(lowercasedTerm) ||
      model.seriesName.toLowerCase().includes(lowercasedTerm)
    );
    setSearchResults(results);
    setShowMultipleMatchesWarning(false); // Clear warning on new search term
  }, [globalSearchTerm, allModels]);


  const groupedCategoryOptions = useMemo(() => {
    return sargentData.hardware.map(h => ({
        label: h.category,
        options: [{ label: h.category, value: h.category, imageUrl: images.sargentlogo }]
    }));
  }, []);

  const groupedSeriesOptions = useMemo(() => {
    if (!selectedCategory) return [];
    
    // Logic to group series for Exit Devices
    const exitDeviceSeries = sargentData.hardware.find(h => h.category === "Exit Devices")?.series || [];
    const groupedExitSeries = { "80 Series": [], "PE80 Series": [], "90 Series": [], "20/30 Series": [] };

    exitDeviceSeries.forEach(series => {
      const seriesName = series.name;
      if (seriesName.startsWith("PE8")) groupedExitSeries["PE80 Series"].push(series);
      else if (seriesName.startsWith("8") && !seriesName.startsWith("82")) groupedExitSeries["80 Series"].push(series);
      else if (seriesName.startsWith("9")) groupedExitSeries["90 Series"].push(series);
      else if (seriesName.startsWith("2") || seriesName.startsWith("3")) groupedExitSeries["20/30 Series"].push(series);
    });

    const categories = sargentData.hardware.find(h => h.category === selectedCategory)?.series || [];

    // Combine all groups into a single array for the selector
    const allOptions = [];

    if (selectedCategory === "Exit Devices") {
        for (const groupName in groupedExitSeries) {
            if (groupedExitSeries[groupName].length > 0) {
                allOptions.push({
                    label: groupName,
                    options: groupedExitSeries[groupName].map(series => ({
                        label: series.name,
                        value: series.name,
                        imageUrl: series.imageUrl || images.sargentlogo
                    }))
                });
            }
        }
    } else {
        allOptions.push({
            label: selectedCategory,
            options: categories.map(series => ({
                label: series.name,
                value: series.name,
                imageUrl: series.imageUrl || images.sargentlogo
            }))
        });
    }

    return allOptions;
  }, [selectedCategory]);
  

  const groupedModelOptions = useMemo(() => {
    if (!selectedSeriesName) return [];
    const seriesData = sargentData.hardware.find(h => h.category === selectedCategory)?.series.find(s => s.name === selectedSeriesName);
    if (!seriesData) return [];

    return [{
        label: selectedSeriesName,
        options: seriesData.models.map(model => ({
            label: `${model.modelNumber} - ${model.description}`,
            value: model.modelNumber,
            imageUrl: model.imageUrl || seriesData.imageUrl || images.sargentlogo
        }))
    }];
  }, [selectedCategory, selectedSeriesName]);

  const activeModelData = useMemo(() => {
    if (!selectedModel) return null;
    return allModels.find(m => m.modelNumber === selectedModel);
  }, [selectedModel, allModels]);


  const deviceTiedPrefixes = useMemo(() => {
    if (!activeModelData) return [];
    const fullModelData = sargentData.hardware
      .find(h => h.category === activeModelData.category)
      ?.series.find(s => s.name === activeModelData.seriesName)
      ?.models.find(m => m.modelNumber === activeModelData.modelNumber);

    return fullModelData?.prefixes.filter(p => p.isDeviceSpecific && p.id !== "Inside Cyl") || [];
  }, [activeModelData]);

  const cylinderOptionsCategories = useMemo(() => {
    if (!activeModelData) return [];
    const fullModelData = sargentData.hardware
      .find(h => h.category === activeModelData.category)
      ?.series.find(s => s.name === activeModelData.seriesName)
      ?.models.find(m => m.modelNumber === activeModelData.modelNumber);

    if (!fullModelData) return [];
    
    let allowedPrefixIds = new Set(fullModelData.prefixes.map(p => p.id));
    return cylinderPrefixCategories
      .map(cat => ({
        ...cat,
        prefixes: cat.prefixes.filter(p => allowedPrefixIds.has(p.id)),
      }))
      .filter(cat => cat.prefixes.length > 0);
  }, [activeModelData]);

  const getCylinderLengthDescription = (partNumber) => {
    const lengths = { 41: '1-1/8"', 42: '1-1/4"', 43: '1-3/8"', 44: '1-1/2"', 46: '1-3/4"', 48: '2"', 50: '2-1/4"', 52: '2-1/2"', 54: '2-3/4"', 56: '3"' };
    return lengths[partNumber.replace("#", "")] || "";
  };

  const finalCylinders = useMemo(() => {
    if (!activeModelData) return [];
    const lficPrefixes = ["60-", "63-", "64-", "DG1-60-", "DG1-63-", "DG1-64-", "DG2-60-", "DG2-63-", "DG2-64-", "DG3-60-", "DG3-63-", "DG3-64-", "10-63-", "11-60-", "11-63-", "11-64-"];
    const sficPrefixes = ["70-", "72-", "73-", "65-73-", "65-73-7P-", "73-7P-", "11-70-7P-", "11-72-7P-", "11-73-7P-", "11-65-73-7P-"];
    const kesoPrefixes = ["F1-82-", "F1-83-", "82-", "83-"];
    const hasLficPrefix = selectedCylinderPrefix && lficPrefixes.includes(selectedCylinderPrefix);
    const hasSficPrefix = selectedCylinderPrefix && sficPrefixes.includes(selectedCylinderPrefix);
    const hasKesoPrefix = selectedCylinderPrefix && kesoPrefixes.includes(selectedCylinderPrefix);

    const rawCylinderList = [];

    if (activeModelData.baseCylinder) {
      rawCylinderList.push({ 
        ...activeModelData.baseCylinder, 
        role: "Outside Cylinder",
        notes: activeModelData.baseCylinder.notes || null,
      });
    }

    const fullModelData = sargentData.hardware.find(h => h.category === activeModelData.category)?.series.find(s => s.name === activeModelData.seriesName)?.models.find(m => m.modelNumber === activeModelData.modelNumber);
    const insideCylData = fullModelData?.prefixes.find(p => p.id === "Inside Cyl" && p.addsCylinder);
    if (insideCylData) {
      rawCylinderList.push({ 
        ...insideCylData.addsCylinder, 
        role: "Inside Cylinder",
        notes: insideCylData.addsCylinder.notes || insideCylData.description,
      });
    }

    selectedDevicePrefixes.forEach(prefixId => {
      const prefixData = fullModelData?.prefixes.find(p => p.id === prefixId);
      if (prefixData?.addsCylinder) {
        rawCylinderList.push({ 
          ...prefixData.addsCylinder, 
          role: prefixData.id,
          notes: prefixData.description,
        });
      }
    });

    const transformedCylinderList = rawCylinderList.map(cyl => {
      const newCyl = { ...cyl };
      const partNumberBase = newCyl.partNumber.replace("#", "");

      if (hasKesoPrefix) {
        if (partNumberBase === "41") newCyl.partNumber = "F1-71";
        else if (partNumberBase === "46") newCyl.partNumber = "F1-76";
        else if (partNumberBase === "34") newCyl.partNumber = "F1-64";
      }
      if (hasLficPrefix) {
        if (partNumberBase === "41") newCyl.partNumber = "#42";
      } else if (hasSficPrefix) {
        if (partNumberBase === "41") newCyl.partNumber = "#43";
        else if (partNumberBase === "44") newCyl.partNumber = "#46";
      }
      return newCyl;
    });

    const consolidatedMap = new Map();
    transformedCylinderList.forEach(cyl => {
      const key = `${cyl.partNumber}-${cyl.role}`;
      consolidatedMap.set(key, { ...cyl, quantity: (consolidatedMap.get(key)?.quantity || 0) + 1 });
    });

    let finalCylindersArray = Array.from(consolidatedMap.values());

    if (selectedCylinderPrefix) {
      finalCylindersArray = finalCylindersArray.map(cyl => {
        const basePartNumber = cyl.partNumber.replace("#", "");
        const kesoLengths = { "F1-71": '1-1/8"', "F1-72": '1-1/4"', "F1-73": '1-3/8"', "F1-74": '1-1/2"', "F1-76": '1-3/4"', "F1-64": '1-3/4" to 3-1/8"' };
        const lengthDesc = hasKesoPrefix ? kesoLengths[basePartNumber] || "" : getCylinderLengthDescription(basePartNumber);
        const finalPartNumber = hasKesoPrefix ? `${basePartNumber} x Keying Details x Finish` : `${selectedCylinderPrefix}${basePartNumber} x Keying Details x Finish`;
        const prefixData = cylinderPrefixCategories.flatMap(c => c.prefixes).find(p => p.id === selectedCylinderPrefix);
        const prefixDesc = prefixData ? prefixData.description.replace("Device", "Housing") : "";
        
        let newNotes = cyl.notes;
        if (cyl.role === "Outside Cylinder" || cyl.role === "Inside Cylinder") {
          newNotes = `For the ${cyl.role.toLowerCase().split(' ')[0]} of the door.`;
        } else {
          newNotes = `For ${cyl.role} which is: ${cyl.notes}`;
        }

        const newDescription = `${lengthDesc} ${cyl.type} ${prefixDesc}`;
        
        return { 
          ...cyl, 
          partNumber: finalPartNumber, 
          description: newDescription.trim(),
          notes: newNotes,
        };
      });
    } else {
      finalCylindersArray = finalCylindersArray.map(cyl => {
        let newNotes = cyl.notes;
        if (cyl.role === "Outside Cylinder") {
          newNotes = "For the outside of the door.";
        } else if (cyl.role === "Inside Cylinder") {
          newNotes = "For the inside of the door.";
        } else {
          newNotes = `For ${cyl.role} which is: ${cyl.notes}`;
        }

        const newDescription = `${getCylinderLengthDescription(cyl.partNumber)} ${cyl.type}`;

        return { 
          ...cyl, 
          partNumber: `${cyl.partNumber} x Keying Details x Finish`, 
          description: newDescription.trim(),
          notes: newNotes,
        };
      });
    }

    return finalCylindersArray;
  }, [activeModelData, selectedDevicePrefixes, selectedCylinderPrefix]);

  const handleSearchClick = (result) => {
    setSelectedCategory(result.category);
    setSelectedSeriesName(result.seriesName);
    setSelectedModel(result.modelNumber);
    setGlobalSearchTerm("");
    setSearchResults([]);
    setShowMultipleMatchesWarning(false);

    const fullModelData = sargentData.hardware.find(h => h.category === result.category)?.series.find(s => s.name === result.seriesName)?.models.find(m => m.modelNumber === result.modelNumber);

    const hasDeviceOptions = fullModelData?.prefixes.filter(p => p.isDeviceSpecific && p.id !== "Inside Cyl").length > 0;
    const hasCylinderOptions = fullModelData?.baseCylinder || fullModelData?.prefixes.some(p => p.addsCylinder);

    if (!hasCylinderOptions) {
      setCurrentStep("results");
    } else if (hasDeviceOptions) {
      setCurrentStep("deviceOptions");
    } else {
      setCurrentStep("cylinderOptions");
    }
  };


  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (searchResults.length === 1) {
        handleSearchClick(searchResults[0]);
      } else if (searchResults.length > 1) {
        setShowMultipleMatchesWarning(true);
      }
    }
  };


  // Handle changes for each step of the wizard
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSeriesName("");
    setSelectedModel("");
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setGlobalSearchTerm("");
    setSearchResults([]);
    setCurrentStep("deviceSelection");
  };

  const handleSeriesChange = (seriesName) => {
    setSelectedSeriesName(seriesName);
    setSelectedModel("");
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setGlobalSearchTerm("");
    setSearchResults([]);
  };

  const handleModelChange = (modelId) => {
    setSelectedModel(modelId);
    if (modelId) {
      setSelectedDevicePrefixes([]); // Ensure device prefixes are unchecked by default 
      const currentActiveModelData = sargentData.hardware
        .find(h => h.category === selectedCategory)?.series
        .find(s => s.name === selectedSeriesName)?.models
        .find(m => m.modelNumber === modelId);
      const hasDeviceOptions = currentActiveModelData?.prefixes.filter(p => p.isDeviceSpecific && p.id !== "Inside Cyl").length > 0;
      const hasCylinderOptions = currentActiveModelData?.baseCylinder || currentActiveModelData?.prefixes.some(p => p.addsCylinder);

      if (!hasCylinderOptions) {
        setCurrentStep("results");
      } else if (hasDeviceOptions) {
        setCurrentStep("deviceOptions");
      } else {
        setCurrentStep("cylinderOptions");
      }
    } else {
      setCurrentStep("deviceSelection");
    }
  };

  const handleDevicePrefixChange = (prefixId) => {
    setSelectedDevicePrefixes(prev =>
      prev.includes(prefixId) ? prev.filter(id => id !== prefixId) : [...prev, prefixId]
    );
  };

  const handleCylinderPrefixChange = (prefixId) => {
    setSelectedCylinderPrefix(prev => (prev === prefixId ? null : prefixId));
  };
  
  const handleNext = () => {
    if (currentStep === "deviceOptions") {
      setCurrentStep("cylinderOptions");
    }
  };

  const handleBack = useCallback(() => {
    if (currentStep === "deviceOptions") {
      setCurrentStep("deviceSelection");
    } else if (currentStep === "cylinderOptions") {
      const hasDeviceOptions = deviceTiedPrefixes.length > 0;
      if (hasDeviceOptions) {
        setCurrentStep("deviceOptions");
      } else {
        setCurrentStep("deviceSelection");
      }
    } else if (currentStep === "results") {
      setCurrentStep("cylinderOptions");
    }
  }, [currentStep, deviceTiedPrefixes]);

  const handleReset = () => {
    setSelectedCategory("");
    setSelectedSeriesName("");
    setSelectedModel("");
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setPrefixSearchTerm("");
    setGlobalSearchTerm("");
    setSearchResults([]);
    setShowMultipleMatchesWarning(false);
    setCurrentStep("deviceSelection");
  };

  const handleFindCylinder = () => {
    setCurrentStep("results");
  };

    const isInitialState = !globalSearchTerm;

  // Render logic based on the current step and search state
  const renderStep = () => {
    if (isInitialState) {
        switch (currentStep) {
            case "deviceSelection":
                return (
                    <>
                        <p className="finder-intro">
                            **Step 1 of 3: Select Your Device**
                            <br />
                            Select a hardware category, series, and model to get started.
                        </p>
                        <div className="hardware-selectors">
                            <HardwareSelector
                                label="Category"
                                options={groupedCategoryOptions}
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            />
                            <HardwareSelector
                                label="Series"
                                options={groupedSeriesOptions}
                                value={selectedSeriesName}
                                onChange={handleSeriesChange}
                                disabled={!selectedCategory}
                            />
                            <HardwareSelector
                                label="Model"
                                options={groupedModelOptions}
                                value={selectedModel}
                                onChange={handleModelChange}
                                disabled={!selectedSeriesName}
                            />
                        </div>
                        <div className="wizard-controls">
                            <button onClick={handleReset} className="wizard-find-button reset-button">Reset</button>
                        </div>
                    </>
                );
            
            case "deviceOptions":
                return (
                    <div ref={deviceOptionsRef} className="wizard-step active">
                        <div className="selected-hardware-note">
                            <img
                                src={activeModelData?.imageUrl || images.sargentlogo}
                                alt={activeModelData?.modelNumber}
                                className="search-result-image"
                            />
                            <p>
                                Selected Device: <strong>{selectedModel}</strong>
                                <br />
                                <span className="selected-hardware-desc">{activeModelData?.description}</span>
                            </p>
                        </div>
                        <p className="finder-intro">
                            **Step 2 of 3: Select Device Options**
                            <br />
                            Select any additional options for your device.
                        </p>
                        <div className="cylinder-finder-options-area">
                            <div className="prefix-section device-options-section">
                                <h3 className="prefix-section-title">Device Options <br /><br />(Choosing one of these will add cylinders for this prefix as well)</h3>
                                <PrefixSelector
                                    prefixes={deviceTiedPrefixes}
                                    selectedPrefixes={selectedDevicePrefixes}
                                    onChange={handleDevicePrefixChange}
                                />
                            </div>
                        </div>
                        <div className="wizard-controls">
                            <button onClick={handleBack} className="wizard-back-button">Back</button>
                            <button onClick={handleNext} className="wizard-find-button">Next</button>
                        </div>
                    </div>
                );

            case "cylinderOptions":
                return (
                    <div ref={cylinderOptionsRef} className="wizard-step active">
                        <div className="selected-hardware-note">
                            <img
                                src={activeModelData?.imageUrl || images.sargentlogo}
                                alt={activeModelData?.modelNumber}
                                className="search-result-image"
                            />
                            <p>
                                Selected Device: <strong>{selectedModel}</strong>
                                <br />
                                <span className="selected-hardware-desc">{activeModelData?.description}</span>
                            </p>
                        </div>
                        <p className="finder-intro">
                            **Step 3 of 3: Select Cylinder Options**
                            <br />
                            Select any cylinder keying systems or prefixes you need.
                        </p>
                        <div className="cylinder-finder-options-area">
                            {cylinderOptionsCategories.length > 0 && (
                                <div className="prefix-section cylinder-options-section">
                                    <h3 className="prefix-section-title">Cylinder Options (Please select one if needed)</h3>
                                    <input
                                        type="text"
                                        placeholder="Search prefixes..."
                                        value={prefixSearchTerm}
                                        onChange={(e) => setPrefixSearchTerm(e.target.value)}
                                        className="prefix-search-bar"
                                    />
                                    <CategorizedPrefixSelector
                                        categories={cylinderOptionsCategories}
                                        selectedPrefixes={[selectedCylinderPrefix]}
                                        onChange={handleCylinderPrefixChange}
                                        searchTerm={prefixSearchTerm}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="wizard-controls">
                            <button onClick={handleBack} className="wizard-back-button">Back</button>
                            <button onClick={handleFindCylinder} className="wizard-find-button">Find Cylinder</button>
                        </div>
                    </div>
                );

            case "results":
                return (
                    <div ref={resultsRef} className="wizard-step active">
                        <div className="selected-hardware-note">
                            <img
                                src={activeModelData?.imageUrl || images.sargentlogo}
                                alt={activeModelData?.modelNumber}
                                className="search-result-image"
                            />
                            <p>
                                Selected Device: <strong>{selectedModel}</strong>
                                <br />
                                <span className="selected-hardware-desc">{activeModelData?.description}</span>
                            </p>
                        </div>
                        <ResultsDisplay cylinders={finalCylinders} />
                        <div className="wizard-controls">
                            <button onClick={handleBack} className="wizard-back-button">Back to Options</button>
                            <button onClick={handleReset} className="wizard-find-button reset-button">Start Over</button>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    } else {
         return (
             <div ref={searchResultsRef} className="wizard-step active">
                 <p className="finder-intro">
                     Search results for "{globalSearchTerm}".
                 </p>
                 {showMultipleMatchesWarning && (
                     <div className="multiple-matches-warning">
                         Multiple matches found. Please select a device from the list below or refine your search.
                     </div>
                 )}
                {searchResults.length > 0 ? (
                    <div className="search-results-list">
                        {searchResults.map((result, index) => (
                            <button key={`${result.modelNumber}-${index}`} className="search-result-item" onClick={() => handleSearchClick(result)}>
                                {result.imageUrl && <img src={result.imageUrl} alt={result.modelNumber} className="search-result-image" />}
                                <div className="search-result-text">
                                    <span className="search-result-model">{result.modelNumber}</span>
                                    <span className="search-result-desc">{result.description}</span>
                                    <span className="search-result-series">{result.seriesName}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="no-search-results">
                        No models found for "{globalSearchTerm}".
                    </div>
                )}
                 <div className="wizard-controls">
                     <button onClick={handleReset} className="wizard-find-button reset-button">Start Over</button>
                 </div>
             </div>
         );
    }
  };

  return (
    <div className="cylinder-finder-card">
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
          <button onClick={() => setGlobalSearchTerm('')} className="clear-search-button">
            <ClearIcon />
          </button>
        )}
      </div>

      {renderStep()}
    </div>
  );
}

export default CylinderFinder;