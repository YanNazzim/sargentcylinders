// src/components/CylinderFinder.js
import React, { useState, useMemo, useEffect, useCallback } from "react";
import { sargentData, cylinderPrefixCategories } from "../data/sargentData";
import { images } from "../images/images";
import ButtonSelector from "./ButtonSelector";
import PrefixSelector from "./PrefixSelector";
import CategorizedPrefixSelector from "./CategorizedPrefixSelector";
import ResultsDisplay from "./ResultsDisplay";
import "./CylinderFinder.css";

// Map hardware categories to images for the first step
const categoryImages = {
  "Exit Devices": images.RimExit80,
  "Mortise Locks": images.Mortise8200,
  "Bored Locks": images.Bored10XLine,
};

// Map series to images for the new series selection step
const seriesImages = {
  "80 Series": images.RimExit80,
  "PE80 Series": images.RimExitPE80,
  "90 Series": images.Series9800,
  "20/30 Series": images.MortiseCyls, // Placeholder for 20/30 Series
  "8200 Series": images.Mortise8200,
  "10X Line": images.Bored10XLine,
  "11 Line": images.Bored11Line,
  "6 Line": images.Bored6Line,
  "7 Line": images.Bored7Line,
  "8X Line": images.Bored8XLine,
  "6500 Line": images.Bored6500Line,
};

function CylinderFinder() {
  const [currentView, setCurrentView] = useState("category");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeriesGroup, setSelectedSeriesGroup] = useState(null);
  const [selectedSeriesName, setSelectedSeriesName] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedDevicePrefixes, setSelectedDevicePrefixes] = useState([]);
  const [selectedCylinderPrefix, setSelectedCylinderPrefix] = useState(null);
  const [prefixSearchTerm, setPrefixSearchTerm] = useState("");

  const [globalSearchTerm, setGlobalSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showMultipleMatchesWarning, setShowMultipleMatchesWarning] = useState(false);

  // Flattened data for searching
  const allModels = useMemo(() => {
    const models = [];
    sargentData.hardware.forEach(category => {
      category.series.forEach(series => {
        let seriesGroup = null;
        if (category.category === 'Exit Devices') {
            if (series.name.startsWith("PE8")) seriesGroup = "PE80 Series";
            else if (series.name.startsWith("8") && !series.name.startsWith("82")) seriesGroup = "80 Series";
            else if (series.name.startsWith("9")) seriesGroup = "90 Series";
            else if (series.name.startsWith("2") || series.name.startsWith("3")) seriesGroup = "20/30 Series";
        }
        series.models.forEach(model => {
          models.push({
            category: category.category,
            seriesGroup: seriesGroup,
            seriesName: series.name,
            modelNumber: model.modelNumber,
            description: model.description,
            imageUrl: model.imageUrl || series.imageUrl || seriesImages[seriesGroup] || categoryImages[category.category]
          });
        });
      });
    });
    return models;
  }, []);

  // Effect for handling global search and clearing the warning
  useEffect(() => {
    if (globalSearchTerm.trim().length < 2) {
      setSearchResults([]);
      setShowMultipleMatchesWarning(false);
      return;
    }
    const lowercasedTerm = globalSearchTerm.toLowerCase();
    const results = allModels.filter(model =>
      model.modelNumber.toLowerCase().startsWith(lowercasedTerm) ||
      model.description.toLowerCase().includes(lowercasedTerm) ||
      model.seriesName.toLowerCase().includes(lowercasedTerm)
    );
    setSearchResults(results);
    setShowMultipleMatchesWarning(false); // Clear warning on new search term
  }, [globalSearchTerm, allModels]);

  const handleSearchResultClick = (result) => {
    setSelectedCategory(result.category);
    setSelectedSeriesGroup(result.seriesGroup);
    setSelectedSeriesName(result.seriesName);
    setSelectedModel(result.modelNumber);
    setGlobalSearchTerm("");
    setSearchResults([]);

    const fullModelData = sargentData.hardware
        .find(h => h.category === result.category)?.series
        .find(s => s.name === result.seriesName)?.models
        .find(m => m.modelNumber === result.modelNumber);

    if (!fullModelData) return;

    const devicePrefixes = fullModelData.prefixes.filter(p => p.isDeviceSpecific);

    if (!fullModelData.baseCylinder && devicePrefixes.length === 0) {
        setCurrentView("results");
    } else {
        setCurrentView("options");
    }
  };

  // New function to handle key presses on the search bar
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (searchResults.length === 1) {
        handleSearchResultClick(searchResults[0]);
      } else if (searchResults.length > 1) {
        setShowMultipleMatchesWarning(true);
      }
    }
  };

  const categories = useMemo(() => {
    return sargentData.hardware.map((h) => ({
      id: h.category,
      name: h.category,
      imageUrl: categoryImages[h.category],
    }));
  }, []);

  const seriesGroupOptions = useMemo(() => {
    if (selectedCategory !== "Exit Devices") return null;

    const allSeries =
      sargentData.hardware.find((h) => h.category === "Exit Devices")?.series ||
      [];

    const seriesGroups = { "80 Series": [], "PE80 Series": [], "90 Series": [], "20/30 Series": [] };

    allSeries.forEach((s) => {
      const seriesName = s.name;
      if (seriesName.startsWith("PE8")) seriesGroups["PE80 Series"].push(s);
      else if (seriesName.startsWith("8") && !seriesName.startsWith("82")) seriesGroups["80 Series"].push(s);
      else if (seriesName.startsWith("9")) seriesGroups["90 Series"].push(s);
      else if (seriesName.startsWith("2") || seriesName.startsWith("3")) seriesGroups["20/30 Series"].push(s);
    });

    return Object.keys(seriesGroups)
      .filter((key) => seriesGroups[key].length > 0)
      .map((key) => ({ id: key, name: key, imageUrl: seriesImages[key] }));
  }, [selectedCategory]);

  const specificSeriesOptions = useMemo(() => {
    if (!selectedCategory || !selectedSeriesGroup) return [];
    return sargentData.hardware
      .find((h) => h.category === selectedCategory)
      ?.series.filter((s) => {
          if (selectedSeriesGroup === "80 Series") return s.name.startsWith("8") && !s.name.startsWith("PE8") && !s.name.startsWith("82");
          if (selectedSeriesGroup === "PE80 Series") return s.name.startsWith("PE8");
          if (selectedSeriesGroup === "90 Series") return s.name.startsWith("9");
          if (selectedSeriesGroup === "20/30 Series") return s.name.startsWith("2") || s.name.startsWith("3");
          return false;
      })
      .map((s) => ({
        id: s.name, name: s.name, imageUrl: s.imageUrl || seriesImages[selectedSeriesGroup] || categoryImages[selectedCategory],
      }));
  }, [selectedCategory, selectedSeriesGroup]);

  const seriesOptions = useMemo(() => {
    if (selectedCategory === "Exit Devices" || !selectedCategory) return [];
    const hardwareCategoryData = sargentData.hardware.find((h) => h.category === selectedCategory);
    return hardwareCategoryData?.series.map((s) => ({
      id: s.name, name: s.name, imageUrl: s.imageUrl || seriesImages[s.name] || categoryImages[selectedCategory],
    }));
  }, [selectedCategory]);

  const modelOptions = useMemo(() => {
    if (!selectedCategory || !selectedSeriesName) return [];
    const seriesData = sargentData.hardware.find((h) => h.category === selectedCategory)?.series.find((s) => s.name === selectedSeriesName);
    return (seriesData?.models || []).map((m) => ({
      id: m.modelNumber, name: `${m.modelNumber} - ${m.description}`, imageUrl: m.imageUrl || seriesData.imageUrl || seriesImages[selectedSeriesGroup] || categoryImages[selectedCategory],
    }));
  }, [selectedCategory, selectedSeriesName, selectedSeriesGroup]);

  const activeModelData = useMemo(() => {
    if (!selectedCategory || !selectedSeriesName || !selectedModel) return null;
    return sargentData.hardware.find((h) => h.category === selectedCategory)?.series.find((s) => s.name === selectedSeriesName)?.models.find((m) => m.modelNumber === selectedModel) || null;
  }, [selectedCategory, selectedSeriesName, selectedModel]);

  const deviceTiedPrefixes = useMemo(() => {
    if (!activeModelData) return [];
    // Only display device-specific prefixes that are NOT "Inside Cyl"
    return activeModelData.prefixes.filter((p) => p.isDeviceSpecific && p.id !== "Inside Cyl");
  }, [activeModelData]);

  const cylinderOptionsCategories = useMemo(() => {
    if (!activeModelData) return [];
    let allowedPrefixIds = new Set(activeModelData.prefixes.map((p) => p.id));
    return cylinderPrefixCategories.map((cat) => ({ ...cat, prefixes: cat.prefixes.filter((p) => allowedPrefixIds.has(p.id))})).filter((cat) => cat.prefixes.length > 0);
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
    if (activeModelData.baseCylinder) rawCylinderList.push({ ...activeModelData.baseCylinder });
    
    // Automatically add the "Inside Cyl" if the model has it
    const insideCylData = activeModelData.prefixes.find(p => p.id === "Inside Cyl" && p.addsCylinder);
    if (insideCylData) {
        rawCylinderList.push({ ...insideCylData.addsCylinder });
    }

    selectedDevicePrefixes.forEach((prefixId) => {
      const prefixData = activeModelData.prefixes.find((p) => p.id === prefixId);
      if (prefixData?.addsCylinder) rawCylinderList.push({ ...prefixData.addsCylinder });
    });
    
    const transformedCylinderList = rawCylinderList.map((cyl) => {
      const newCyl = { ...cyl };
      const partNumberBase = newCyl.partNumber.replace("#", "");
      if (hasKesoPrefix) {
        if (partNumberBase === "41") newCyl.partNumber = "F1-71"; else if (partNumberBase === "46") newCyl.partNumber = "F1-76"; else if (partNumberBase === "34") newCyl.partNumber = "F1-64";
      }
      if (hasLficPrefix) {
        if (partNumberBase === "41") newCyl.partNumber = "#42";
      } else if (hasSficPrefix) {
        if (partNumberBase === "41") newCyl.partNumber = "#43"; else if (partNumberBase === "44") newCyl.partNumber = "#46";
      }
      return newCyl;
    });
    const consolidatedMap = new Map();
    transformedCylinderList.forEach((cyl) => {
      const key = cyl.partNumber;
      consolidatedMap.set(key, { ...cyl, quantity: (consolidatedMap.get(key)?.quantity || 0) + 1 });
    });
    let finalCylindersArray = Array.from(consolidatedMap.values());
    if (selectedCylinderPrefix) {
      finalCylindersArray = finalCylindersArray.map((cyl) => {
        const basePartNumber = cyl.partNumber.replace("#", "");
        const kesoLengths = { "F1-71": '1-1/8"', "F1-72": '1-1/4"', "F1-73": '1-3/8"', "F1-74": '1-1/2"', "F1-76": '1-3/4"', "F1-64": '1-3/4" to 3-1/8"' };
        const lengthDesc = hasKesoPrefix ? kesoLengths[basePartNumber] || "" : getCylinderLengthDescription(basePartNumber);
        const finalPartNumber = hasKesoPrefix ? `${basePartNumber} x Keying Details x Finish` : `${selectedCylinderPrefix}${basePartNumber} x Keying Details x Finish`;
        const prefixData = cylinderPrefixCategories.flatMap((c) => c.prefixes).find((p) => p.id === selectedCylinderPrefix);
        const prefixDesc = prefixData ? prefixData.description.replace("Device", "Housing") : "";
        const finalDescription = `${lengthDesc} ${cyl.type} ${prefixDesc}`;
        return { ...cyl, partNumber: finalPartNumber, description: finalDescription.trim() };
      });
    } else {
      finalCylindersArray = finalCylindersArray.map((cyl) => ({ ...cyl, partNumber: `${cyl.partNumber} x Keying Details x Finish`, description: `${getCylinderLengthDescription(cyl.partNumber)} ${cyl.type}`.trim() }));
    }
    return finalCylindersArray;
  }, [activeModelData, selectedDevicePrefixes, selectedCylinderPrefix]);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSeriesGroup(null);
    setSelectedSeriesName(null);
    setSelectedModel(null);
    setCurrentView(categoryId === "Exit Devices" ? "seriesGroup" : "series");
  };
  const handleSelectSeriesGroup = (seriesGroupId) => {
    setSelectedSeriesGroup(seriesGroupId);
    setSelectedSeriesName(null);
    setSelectedModel(null);
    setCurrentView("series");
  };
  const handleSelectSeries = (seriesId) => {
    setSelectedSeriesName(seriesId);
    setSelectedModel(null);
    setCurrentView("model");
  };
  const handleSelectModel = (modelId) => {
    setSelectedModel(modelId);
    const currentActiveModelData = sargentData.hardware.find((h) => h.category === selectedCategory)?.series.find((s) => s.name === selectedSeriesName)?.models.find((m) => m.modelNumber === modelId);
    
    // Automatically select device-specific prefixes that add a cylinder
    const prefixesToAdd = currentActiveModelData?.prefixes
      .filter(p => p.isDeviceSpecific && p.addsCylinder)
      .map(p => p.id) || [];
    
    setSelectedDevicePrefixes(prefixesToAdd);

    const devicePrefixes = currentActiveModelData?.prefixes.filter(p => p.isDeviceSpecific);
    setCurrentView(!currentActiveModelData?.baseCylinder && devicePrefixes?.length === 0 ? "results" : "options");
  };
  const handleDevicePrefixChange = (prefixId) => setSelectedDevicePrefixes((prev) => prev.includes(prefixId) ? prev.filter((id) => id !== prefixId) : [...prev, prefixId]);
  const handleCylinderPrefixChange = (prefixId) => setSelectedCylinderPrefix((prev) => (prev === prefixId ? null : prefixId));
  
  const handleReset = () => {
    setCurrentView("category");
    setSelectedCategory(null);
    setSelectedSeriesGroup(null);
    setSelectedSeriesName(null);
    setSelectedModel(null);
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setPrefixSearchTerm("");
    setGlobalSearchTerm("");
    setSearchResults([]);
  };

  const handleBack = useCallback(() => {
    setSearchResults([]); // Clear search results on back
    if (currentView === "results") {
        const fullModelData = sargentData.hardware.find(h => h.category === selectedCategory)?.series.find(s => s.name === selectedSeriesName)?.models.find(m => m.modelNumber === selectedModel);
        const devicePrefixes = fullModelData?.prefixes.filter(p => p.isDeviceSpecific);
        setCurrentView((!fullModelData?.baseCylinder && devicePrefixes?.length === 0) ? "model" : "options");
    } else if (currentView === "options") setCurrentView("model");
    else if (currentView === "model") setCurrentView("series");
    else if (currentView === "series") setCurrentView(selectedCategory === "Exit Devices" ? "seriesGroup" : "category");
    else if (currentView === "seriesGroup") setCurrentView("category");
  }, [currentView, selectedCategory, selectedSeriesName, selectedModel]);
  
  useEffect(() => {
    const handleMouseUp = (event) => { if (event.button === 3 || event.button === 4) { event.preventDefault(); handleBack(); } };
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, [handleBack]);

  const showWizard = searchResults.length === 0 && globalSearchTerm.length < 2;
  const showSearchResults = searchResults.length > 0 && globalSearchTerm.length >= 2;
  const showNoResults = searchResults.length === 0 && globalSearchTerm.length >= 2;

  return (
    <div className="cylinder-finder-card">
      <div className="cylinder-finder-header">
        <h2 className="cylinder-finder-title">Cylinder Finder</h2>
        <button onClick={handleReset} className="cylinder-finder-reset-button">Reset</button>
      </div>

      <div className="global-search-container">
        <input
          type="text"
          placeholder="Search by model or function (e.g., 8800, 8815, classroom)..."
          value={globalSearchTerm}
          onChange={(e) => setGlobalSearchTerm(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          className="global-search-input"
        />
        {showMultipleMatchesWarning && (
            <div className="multiple-matches-warning">
                Multiple matches found. Please select a device from the list below.
            </div>
        )}
      </div>

      {showWizard && (
        <>
          {currentView === "category" && <div className="wizard-step active"><ButtonSelector title="Select a Hardware Category" options={categories} selected={selectedCategory} onSelect={handleSelectCategory} /></div>}
          {currentView === "seriesGroup" && <div className="wizard-step active"><ButtonSelector title="Select a Product Series Group" options={seriesGroupOptions} selected={selectedSeriesGroup} onSelect={handleSelectSeriesGroup} /><div className="wizard-controls"><button onClick={handleBack} className="wizard-back-button">Back</button></div></div>}
          {currentView === "series" && <div className="wizard-step active"><ButtonSelector title="Select a Product Series" options={selectedCategory === "Exit Devices" ? specificSeriesOptions : seriesOptions} selected={selectedSeriesName} onSelect={handleSelectSeries} /><div className="wizard-controls"><button onClick={handleBack} className="wizard-back-button">Back</button></div></div>}
          {currentView === "model" && <div className="wizard-step active"><ButtonSelector title="Select a Model / Function" options={modelOptions} selected={selectedModel} onSelect={handleSelectModel} /><div className="wizard-controls"><button onClick={handleBack} className="wizard-back-button">Back</button></div></div>}
          {currentView === "options" && <div className="wizard-step active"><div className="selected-hardware-note">Selected: {selectedCategory} {">"} {selectedSeriesName} {">"} {selectedModel}</div><div className="cylinder-finder-options-area">{deviceTiedPrefixes.length > 0 && (<div className="prefix-section device-options-section"><h3 className="prefix-section-title">Device Options</h3><PrefixSelector prefixes={deviceTiedPrefixes} selectedPrefixes={selectedDevicePrefixes} onChange={handleDevicePrefixChange} /></div>)}{cylinderOptionsCategories.length > 0 && (<div className="prefix-section cylinder-options-section"><h3 className="prefix-section-title">Cylinder Options</h3><input type="text" placeholder="Search prefixes..." value={prefixSearchTerm} onChange={(e) => setPrefixSearchTerm(e.target.value)} className="prefix-search-bar" /><CategorizedPrefixSelector categories={cylinderOptionsCategories} selectedPrefixes={[selectedCylinderPrefix]} onChange={handleCylinderPrefixChange} searchTerm={prefixSearchTerm} /></div>)}</div><div className="wizard-controls"><button onClick={handleBack} className="wizard-back-button">Back</button><button onClick={() => setCurrentView("results")} className="wizard-find-button">Find Cylinder</button></div></div>}
          {currentView === "results" && <div className="wizard-step active"><div className="selected-hardware-note">Selected: {selectedCategory} {">"} {selectedSeriesName} {">"} {selectedModel}</div><ResultsDisplay cylinders={finalCylinders} /><div className="wizard-controls"><button onClick={handleBack} className="wizard-back-button">Back</button></div></div>}
        </>
      )}

      {showSearchResults && (
        <div className="search-results-list">
          {searchResults.map((result, index) => (
            <button key={`${result.modelNumber}-${index}`} className="search-result-item" onClick={() => handleSearchResultClick(result)}>
              {result.imageUrl && <img src={result.imageUrl} alt={result.modelNumber} className="search-result-image" />}
              <div className="search-result-text">
                <span className="search-result-model">{result.modelNumber}</span>
                <span className="search-result-desc">{result.description}</span>
                <span className="search-result-series">{result.seriesName}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {showNoResults && (
        <div className="no-search-results">
            No models found for "{globalSearchTerm}".
        </div>
      )}

    </div>
  );
}

export default CylinderFinder;