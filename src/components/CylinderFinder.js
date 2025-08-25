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
  "Bored Locks": images.KILCyls,
};

// Map series to images for the new series selection step
const seriesImages = {
  "80 Series": images.RimExit80,
  "PE80 Series": images.RimExitPE80,
  "90 Series": images.Series9800,
  "20/30 Series": images.MortiseCyls, // Placeholder for 20/30 Series
  "8200 Series": images.Mortise8200,
  "10X Line": images.KILCyls,
  "11 Line": images.KILCyls,
  "6 Line": images.KILCyls,
  "7 Line": images.KILCyls,
  "8X Line": images.KILCyls,
  "6500 Line": images.KILCyls,
};

function CylinderFinder() {
  const [currentView, setCurrentView] = useState("category"); // 'category', 'series', 'model', 'options', 'results'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedDevicePrefixes, setSelectedDevicePrefixes] = useState([]);
  const [selectedCylinderPrefix, setSelectedCylinderPrefix] = useState(null);
  const [prefixSearchTerm, setPrefixSearchTerm] = useState("");

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

    const seriesGroups = {
      "80 Series": [],
      "PE80 Series": [],
      "90 Series": [],
      "20/30 Series": [],
    };

    allSeries.forEach((s) => {
      const seriesName = s.name;
      if (seriesName.startsWith("PE8")) {
        seriesGroups["PE80 Series"].push(s);
      } else if (seriesName.startsWith("8")) {
        seriesGroups["80 Series"].push(s);
      } else if (seriesName.startsWith("9")) {
        seriesGroups["90 Series"].push(s);
      } else if (seriesName.startsWith("2") || seriesName.startsWith("3")) {
        seriesGroups["20/30 Series"].push(s);
      }
    });

    return Object.keys(seriesGroups)
      .filter((key) => seriesGroups[key].length > 0)
      .map((key) => ({
        id: key,
        name: key,
        imageUrl: seriesImages[key],
      }));
  }, [selectedCategory]);

  // Updated to use a more specific data set for the next step
  const specificSeriesOptions = useMemo(() => {
    if (!selectedCategory || !selectedSeries) return [];
    const seriesData = sargentData.hardware
      .find((h) => h.category === selectedCategory)
      ?.series.filter((s) => {
        // This logic correctly groups the series by their prefix
        if (selectedSeries === "80 Series")
          return (
            s.name.startsWith("8") &&
            !s.name.startsWith("82") &&
            !s.name.startsWith("8X")
          );
        if (selectedSeries === "PE80 Series") return s.name.startsWith("PE8");
        if (selectedSeries === "90 Series") return s.name.startsWith("9");
        if (selectedSeries === "20/30 Series")
          return s.name.startsWith("2") || s.name.startsWith("3");
        return false;
      })
      .map((s) => ({
        id: s.name,
        name: s.name,
        imageUrl:
          seriesImages[selectedSeries] || categoryImages[selectedCategory],
      }));

    return seriesData;
  }, [selectedCategory, selectedSeries]);

  // NEW Memo for Mortise and Bored Series
  const seriesOptions = useMemo(() => {
    if (selectedCategory === "Exit Devices" || !selectedCategory) return [];
    const hardwareCategoryData = sargentData.hardware.find(
      (h) => h.category === selectedCategory
    );
    return hardwareCategoryData?.series.map((s) => ({
      id: s.name,
      name: s.name,
      imageUrl:
        s.imageUrl || seriesImages[s.name] || categoryImages[selectedCategory], // Use series-specific image if available
    }));
  }, [selectedCategory]);

  const modelOptions = useMemo(() => {
    if (!selectedCategory || !selectedSeries) return [];

    let modelsToDisplay = [];
    const hardwareCategoryData = sargentData.hardware.find(
      (h) => h.category === selectedCategory
    );
    const seriesData = hardwareCategoryData?.series.find(
      (s) => s.name === selectedSeries
    );

    modelsToDisplay = seriesData?.models || [];

    return modelsToDisplay.map((m) => ({
      id: m.modelNumber,
      name: `${m.modelNumber} - ${m.description}`,
      imageUrl:
        m.imageUrl ||
        seriesImages[selectedSeries] ||
        categoryImages[selectedCategory],
    }));
  }, [selectedCategory, selectedSeries]);

  const activeModelData = useMemo(() => {
    if (!selectedCategory || !selectedSeries || !selectedModel) return null;
    const catData = sargentData.hardware.find(
      (h) => h.category === selectedCategory
    );
    const seriesData = catData?.series.find((s) => s.name === selectedSeries);
    return (
      seriesData?.models.find((m) => m.modelNumber === selectedModel) || null
    );
  }, [selectedCategory, selectedSeries, selectedModel]);

  const deviceTiedPrefixes = useMemo(() => {
    if (!activeModelData) return [];

    const allDevicePrefixes = activeModelData.prefixes.filter(
      (p) => p.isDeviceSpecific
    );

    const universalPrefixes = ["16", "59", "AL"];

    const is80Family =
      selectedSeries &&
      (selectedSeries.includes("80 Series") || selectedSeries.includes("PE80"));

    if (is80Family) {
      return allDevicePrefixes.filter((p) => universalPrefixes.includes(p.id));
    } else {
      return allDevicePrefixes.filter((p) => !universalPrefixes.includes(p.id));
    }
  }, [activeModelData, selectedSeries]);

  const cylinderOptionsCategories = useMemo(() => {
    if (!activeModelData) return [];

    let allowedPrefixIds = [];
    if (activeModelData.modelNumber === "9404") {
      allowedPrefixIds = [
        "10-",
        "11-",
        "11-21-",
        "82-",
        "F1-82-",
        "BR-",
        "SC-",
        "SE-",
      ];
    } else {
      const allModelPrefixes = new Set(
        activeModelData.prefixes.map((p) => p.id)
      );
      allowedPrefixIds = Array.from(allModelPrefixes);
    }

    return cylinderPrefixCategories
      .map((cat) => ({
        ...cat,
        prefixes: cat.prefixes.filter((p) => allowedPrefixIds.includes(p.id)),
      }))
      .filter((cat) => cat.prefixes.length > 0);
  }, [activeModelData]);

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

  const finalCylinders = useMemo(() => {
    if (!activeModelData) return [];

    const lficPrefixes = [
      "60-",
      "63-",
      "64-",
      "DG1-60-",
      "DG1-63-",
      "DG1-64-",
      "DG2-60-",
      "DG2-63-",
      "DG2-64-",
      "DG3-60-",
      "DG3-63-",
      "DG3-64-",
      "10-63-",
      "11-60-",
      "11-63-",
      "11-64-",
    ];
    const sficPrefixes = [
      "70-",
      "72-",
      "73-",
      "65-73-",
      "65-73-7P-",
      "73-7P-",
      "11-70-7P-",
      "11-72-7P-",
      "11-73-7P-",
      "11-65-73-7P-",
    ];
    const kesoPrefixes = ["F1-82-", "F1-83-", "82-", "83-"];

    const hasLficPrefix =
      selectedCylinderPrefix && lficPrefixes.includes(selectedCylinderPrefix);
    const hasSficPrefix =
      selectedCylinderPrefix && sficPrefixes.includes(selectedCylinderPrefix);
    const hasKesoPrefix =
      selectedCylinderPrefix && kesoPrefixes.includes(selectedCylinderPrefix);

    const rawCylinderList = [];
    if (activeModelData.baseCylinder) {
      const modelNumberSuffix = activeModelData.modelNumber.slice(-2);
      let cylinder = { ...activeModelData.baseCylinder };

      if (modelNumberSuffix === "50") {
        if (selectedSeries.includes("10X")) cylinder.partNumber = "C10X-2";
        else if (selectedSeries.includes("11")) cylinder.partNumber = "C11-2";
        else if (selectedSeries.includes("6 Line"))
          cylinder.partNumber = "C6-2B";
        else if (
          ["10 Line", "7 Line", "6500 Line"].some((s) =>
            selectedSeries.includes(s)
          )
        ) {
          cylinder.partNumber = "C10-2";
        }
      } else if (modelNumberSuffix === "65") {
        if (selectedSeries.includes("10X")) cylinder.partNumber = "C10X-3";
        else if (
          ["10 Line", "7 Line", "6500 Line"].some((s) =>
            selectedSeries.includes(s)
          )
        ) {
          cylinder.partNumber = "C10-3";
        }
      }
      rawCylinderList.push(cylinder);
    }

    selectedDevicePrefixes.forEach((prefixId) => {
      const prefixData = activeModelData.prefixes.find(
        (p) => p.id === prefixId
      );
      if (prefixData && prefixData.addsCylinder) {
        rawCylinderList.push({ ...prefixData.addsCylinder });
      }
    });

    const transformedCylinderList = rawCylinderList.map((cyl) => {
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
    transformedCylinderList.forEach((cyl) => {
      const key = cyl.partNumber;
      if (consolidatedMap.has(key)) {
        consolidatedMap.get(key).quantity++;
      } else {
        consolidatedMap.set(key, { ...cyl, quantity: 1 });
      }
    });

    let finalCylindersArray = Array.from(consolidatedMap.values());

    if (selectedCylinderPrefix) {
      finalCylindersArray = finalCylindersArray.map((cyl) => {
        const basePartNumber = cyl.partNumber.replace("#", "");
        let lengthDesc = "";
        let finalPartNumber = "";

        if (hasKesoPrefix) {
          const kesoLengths = {
            "F1-71": '1-1/8"',
            "F1-72": '1-1/4"',
            "F1-73": '1-3/8"',
            "F1-74": '1-1/2"',
            "F1-76": '1-3/4"',
            "F1-64": '1-3/4" to 3-1/8"',
          };
          lengthDesc = kesoLengths[basePartNumber] || "";
          finalPartNumber = `${basePartNumber} x Keying Details x Finish`;
        } else {
          lengthDesc = getCylinderLengthDescription(basePartNumber);
          finalPartNumber = `${selectedCylinderPrefix}${basePartNumber} x Keying Details x Finish`;
        }

        const prefixData = cylinderPrefixCategories
          .flatMap((c) => c.prefixes)
          .find((p) => p.id === selectedCylinderPrefix);
        const prefixDesc = prefixData
          ? prefixData.description.replace("Device", "Housing")
          : "";
        const finalDescription = `${lengthDesc} ${cyl.type} ${prefixDesc}`;
        return {
          ...cyl,
          partNumber: finalPartNumber,
          description: finalDescription,
        };
      });
    } else {
      finalCylindersArray = finalCylindersArray.map((cyl) => {
        const lengthDesc = getCylinderLengthDescription(cyl.partNumber);
        const finalDescription = `${lengthDesc} ${cyl.type}`;
        return {
          ...cyl,
          partNumber: `${cyl.partNumber} x Keying Details x Finish`,
          description: finalDescription.trim(),
        };
      });
    }

    return finalCylindersArray;
  }, [
    activeModelData,
    selectedDevicePrefixes,
    selectedCylinderPrefix,
    selectedSeries,
  ]);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedSeries(null);
    setSelectedModel(null);
    if (categoryId === "Exit Devices") {
      setCurrentView("seriesGroup");
    } else {
      setCurrentView("series");
    }
  };

  const handleSelectSeriesGroup = (seriesGroupId) => {
    setSelectedSeries(seriesGroupId);
    setSelectedModel(null);
    setCurrentView("series");
  };

  const handleSelectSpecificSeries = (seriesId) => {
    setSelectedSeries(seriesId);
    setSelectedModel(null);
    setCurrentView("model");
  };

  // NEW handleSelectSeries for Mortise/Bored locks
  const handleSelectSeries = (seriesId) => {
    setSelectedSeries(seriesId);
    setSelectedModel(null);
    setCurrentView("model");
  };

  const handleSelectModel = (modelId) => {
    setSelectedModel(modelId);

    const currentActiveModelData = sargentData.hardware
      .find((h) => h.category === selectedCategory)
      ?.series.find((s) => s.name === selectedSeries)
      ?.models.find((m) => m.modelNumber === modelId);

    const shouldSkipToResults =
      currentActiveModelData &&
      !currentActiveModelData.baseCylinder &&
      deviceTiedPrefixes.length === 0;

    if (shouldSkipToResults) {
      setCurrentView("results");
    } else {
      setCurrentView("options");
    }
  };

  const handleDevicePrefixChange = (prefixId) => {
    setSelectedDevicePrefixes((prev) =>
      prev.includes(prefixId)
        ? prev.filter((id) => id !== prefixId)
        : [...prev, prefixId]
    );
  };

  const handleCylinderPrefixChange = (prefixId) => {
    setSelectedCylinderPrefix((prev) => (prev === prefixId ? null : prefixId));
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setSelectedSeries(null);
    setSelectedModel(null);
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setCurrentView("category");
    setPrefixSearchTerm("");
  };

  const handleBack = useCallback(() => {
    if (currentView === "seriesGroup") {
      setCurrentView("category");
    } else if (currentView === "series") {
      if (selectedCategory === "Exit Devices") {
        setCurrentView("seriesGroup");
      } else {
        setCurrentView("category");
      }
    } else if (currentView === "model") {
      setCurrentView("series");
    } else if (currentView === "options") {
      setCurrentView("model");
    } else if (currentView === "results") {
      const currentActiveModelData = sargentData.hardware
        .find((h) => h.category === selectedCategory)
        ?.series.find((s) => s.name === selectedSeries)
        ?.models.find((m) => m.modelNumber === selectedModel);
      const shouldSkipToResults =
        currentActiveModelData &&
        !currentActiveModelData.baseCylinder &&
        deviceTiedPrefixes.length === 0;
      if (shouldSkipToResults) {
        setCurrentView("model");
      } else {
        setCurrentView("options");
      }
    }
  }, [
    currentView,
    selectedCategory,
    selectedSeries,
    selectedModel,
    deviceTiedPrefixes,
  ]);

  // This effect handles the mouse back button functionality
  useEffect(() => {
    const handleMouseUp = (event) => {
      // The mouse back button is typically button 3 or 4 depending on the browser
      if (event.button === 3 || event.button === 4) {
        // Prevent the default browser back action
        event.preventDefault();
        handleBack();
      }
    };

    // Add the event listener to the document
    document.addEventListener("mouseup", handleMouseUp);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleBack]);

  return (
    <div className="cylinder-finder-card">
      <div className="cylinder-finder-header">
        <h2 className="cylinder-finder-title">Sargent Cylinder Finder</h2>
        <button onClick={handleReset} className="cylinder-finder-reset-button">
          Reset
        </button>
      </div>

      {/* Render content based on currentView */}
      {currentView === "category" && (
        <div className="wizard-step active">
          <ButtonSelector
            title="Select a Hardware Category"
            options={categories}
            selected={selectedCategory}
            onSelect={handleSelectCategory}
          />
        </div>
      )}

      {currentView === "seriesGroup" && selectedCategory === "Exit Devices" && (
        <div className="wizard-step active">
          <ButtonSelector
            title="Select a Product Series Group"
            options={seriesGroupOptions}
            selected={selectedSeries}
            onSelect={handleSelectSeriesGroup}
          />
          <div className="wizard-controls">
            <button onClick={handleBack} className="wizard-back-button">
              Back
            </button>
          </div>
        </div>
      )}

      {currentView === "series" && (
        <div className="wizard-step active">
          <ButtonSelector
            title="Select a Product Series"
            options={
              selectedCategory === "Exit Devices"
                ? specificSeriesOptions
                : seriesOptions
            }
            selected={selectedSeries}
            onSelect={
              selectedCategory === "Exit Devices"
                ? handleSelectSpecificSeries
                : handleSelectSeries
            }
          />
          <div className="wizard-controls">
            <button onClick={handleBack} className="wizard-back-button">
              Back
            </button>
          </div>
        </div>
      )}

      {currentView === "model" && (
        <div className="wizard-step active">
          <ButtonSelector
            title="Select a Model / Function"
            options={modelOptions}
            selected={selectedModel}
            onSelect={handleSelectModel}
          />
          <div className="wizard-controls">
            <button onClick={handleBack} className="wizard-back-button">
              Back
            </button>
          </div>
        </div>
      )}

      {currentView === "options" && (
        <div className="wizard-step active">
          <div className="selected-hardware-note">
            Selected: {selectedCategory} &gt; {selectedSeries} &gt;{" "}
            {selectedModel}
          </div>
          <div className="cylinder-finder-options-area">
            {deviceTiedPrefixes.length > 0 && (
              <div className="prefix-section device-options-section">
                <h3 className="prefix-section-title">Device Options</h3>
                <PrefixSelector
                  prefixes={deviceTiedPrefixes}
                  selectedPrefixes={selectedDevicePrefixes}
                  onChange={handleDevicePrefixChange}
                />
              </div>
            )}
            {cylinderOptionsCategories.length > 0 && (
              <div className="prefix-section cylinder-options-section">
                <h3 className="prefix-section-title">Cylinder Options</h3>
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
            <button onClick={handleBack} className="wizard-back-button">
              Back
            </button>
            <button
              onClick={() => setCurrentView("results")}
              className="wizard-find-button"
            >
              Find Cylinder
            </button>
          </div>
        </div>
      )}

      {currentView === "results" && (
        <div className="wizard-step active">
          <div className="selected-hardware-note">
            Selected: {selectedCategory} &gt; {selectedSeries} &gt;{" "}
            {selectedModel}
          </div>
          <ResultsDisplay cylinders={finalCylinders} />
          <div className="wizard-controls">
            <button onClick={handleBack} className="wizard-back-button">
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CylinderFinder;
