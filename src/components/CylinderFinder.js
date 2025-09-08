// src/components/CylinderFinder.js
import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { sargentData, cylinderPrefixCategories } from "../data/sargentData";
import HardwareSelector from "./HardwareSelector";
import ResultsDisplay from "./ResultsDisplay";
import PrefixSelector from "./PrefixSelector";
import CategorizedPrefixSelector from "./CategorizedPrefixSelector";
import "./CylinderFinder.css";
import { images } from "../images/images";
import { SearchIcon, ClearIcon } from "./Icons";

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

  const deviceOptionsRef = useRef(null);
  const cylinderOptionsRef = useRef(null);
  const resultsRef = useRef(null);
  const searchResultsRef = useRef(null);

  useEffect(() => {
    if (currentStep === "deviceOptions" && deviceOptionsRef.current) {
      deviceOptionsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (currentStep === "cylinderOptions" && cylinderOptionsRef.current) {
      cylinderOptionsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (currentStep === "results" && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (globalSearchTerm.length > 0 && searchResultsRef.current) {
      searchResultsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentStep, globalSearchTerm]);

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

  const groupedCategoryOptions = useMemo(() => {
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
        default:
          imageUrl = images.sargentlogo;
      }
      return {
        label: h.category,
        options: [{ label: h.category, value: h.category, imageUrl: imageUrl }],
      };
    });
  }, []);

  const groupedSeriesOptions = useMemo(() => {
    if (!selectedCategory) return [];

    const exitDeviceSeries =
      sargentData.hardware.find((h) => h.category === "Exit Devices")?.series ||
      [];
    const groupedExitSeries = {
      "80 Series": [],
      "PE80 Series": [],
      "90 Series": [],
      "20/30 Series": [],
    };

    exitDeviceSeries.forEach((series) => {
      const seriesName = series.name;
      if (seriesName.startsWith("PE8"))
        groupedExitSeries["PE80 Series"].push(series);
      else if (seriesName.startsWith("8") && !seriesName.startsWith("82"))
        groupedExitSeries["80 Series"].push(series);
      else if (seriesName.startsWith("9"))
        groupedExitSeries["90 Series"].push(series);
      else if (seriesName.startsWith("2") || seriesName.startsWith("3"))
        groupedExitSeries["20/30 Series"].push(series);
    });

    const categories =
      sargentData.hardware.find((h) => h.category === selectedCategory)
        ?.series || [];

    const allOptions = [];

    if (selectedCategory === "Exit Devices") {
      for (const groupName in groupedExitSeries) {
        if (groupedExitSeries[groupName].length > 0) {
          allOptions.push({
            label: groupName,
            options: groupedExitSeries[groupName].map((series) => ({
              label: series.name,
              value: series.name,
              imageUrl: series.imageUrl || images.sargentlogo,
            })),
          });
        }
      }
    } else {
      allOptions.push({
        label: selectedCategory,
        options: categories.map((series) => ({
          label: series.name,
          value: series.name,
          imageUrl: series.imageUrl || images.sargentlogo,
        })),
      });
    }

    return allOptions;
  }, [selectedCategory]);

  const groupedModelOptions = useMemo(() => {
    if (!selectedSeriesName) return [];
    const seriesData = sargentData.hardware
      .find((h) => h.category === selectedCategory)
      ?.series.find((s) => s.name === selectedSeriesName);
    if (!seriesData) return [];

    return [
      {
        label: selectedSeriesName,
        options: seriesData.models.map((model) => ({
          label: `${model.modelNumber} - ${model.description}`,
          value: model.modelNumber,
          imageUrl: model.imageUrl || seriesData.imageUrl || images.sargentlogo,
        })),
      },
    ];
  }, [selectedCategory, selectedSeriesName]);

  const activeModelData = useMemo(() => {
    if (!selectedModel || !selectedCategory || !selectedSeriesName) return null;

    const categoryData = sargentData.hardware.find(
      (h) => h.category === selectedCategory
    );
    if (!categoryData) return null;

    const seriesData = categoryData.series.find(
      (s) => s.name === selectedSeriesName
    );
    if (!seriesData) return null;

    const modelData = seriesData.models.find(
      (m) => m.modelNumber === selectedModel
    );
    if (!modelData) return null;

    return {
      ...modelData,
      category: selectedCategory,
      seriesName: selectedSeriesName,
      imageUrl: modelData.imageUrl || seriesData.imageUrl || images.sargentlogo,
    };
  }, [selectedModel, selectedCategory, selectedSeriesName]);

  const deviceTiedPrefixes = useMemo(() => {
    if (!activeModelData) return [];

    return (
      activeModelData.prefixes?.filter(
        (p) => p.isDeviceSpecific && p.id !== "Inside Cyl"
      ) || []
    );
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

  const allPrefixes = useMemo(() => {
    const modelPrefixes = activeModelData?.prefixes?.filter(
      (p) => !p.isDeviceSpecific
    ) || [];
    const devicePrefixes = activeModelData?.prefixes?.filter(
      (p) => p.isDeviceSpecific && p.id !== "Inside Cyl"
    ) || [];
    const cylinderPrefixes = cylinderPrefixCategories.flatMap(
      (category) => category.prefixes
    );
  
    return [...modelPrefixes, ...devicePrefixes, ...cylinderPrefixes];
  }, [activeModelData]);

  const getChosenPrefixes = () => {
    const chosenPrefixes = [];
    if (selectedCylinderPrefix) {
      const prefix = allPrefixes.find((p) => p.id === selectedCylinderPrefix);
      if (prefix) {
        chosenPrefixes.push({
          id: prefix.id,
          description: prefix.description,
        });
      }
    }
    selectedDevicePrefixes.forEach((id) => {
      const prefix = allPrefixes.find((p) => p.id === id);
      if (prefix) {
        chosenPrefixes.push({
          id: prefix.id,
          description: prefix.description,
        });
      }
    });
    return chosenPrefixes;
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
      rawCylinderList.push({
        ...activeModelData.baseCylinder,
        role: "Outside Cylinder",
        notes: activeModelData.baseCylinder.notes || null,
      });
    }

    const insideCylData = activeModelData.prefixes?.find(
      (p) => p.id === "Inside Cyl" && p.addsCylinder
    );
    if (insideCylData) {
      rawCylinderList.push({
        ...insideCylData.addsCylinder,
        role: "Inside Cylinder",
        notes: insideCylData.addsCylinder.notes || insideCylData.description,
      });
    }

    selectedDevicePrefixes.forEach((prefixId) => {
      const prefixData = activeModelData.prefixes?.find(
        (p) => p.id === prefixId
      );
      if (prefixData?.addsCylinder) {
        rawCylinderList.push({
          ...prefixData.addsCylinder,
          role: prefixData.id,
          notes: prefixData.description,
        });
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
      const key = `${cyl.partNumber}-${cyl.role}`;
      consolidatedMap.set(key, {
        ...cyl,
        quantity: (consolidatedMap.get(key)?.quantity || 0) + 1,
      });
    });

    let finalCylindersArray = Array.from(consolidatedMap.values());

    if (selectedCylinderPrefix) {
      finalCylindersArray = finalCylindersArray.map((cyl) => {
        const basePartNumber = cyl.partNumber.replace("#", "");
        const kesoLengths = {
          "F1-71": '1-1/8"',
          "F1-72": '1-1/4"',
          "F1-73": '1-3/8"',
          "F1-74": '1-1/2"',
          "F1-76": '1-3/4"',
          "F1-64": '1-3/4" to 3-1/8"',
        };
        const lengthDesc = hasKesoPrefix
          ? kesoLengths[basePartNumber] || ""
          : getCylinderLengthDescription(basePartNumber);
        const finalPartNumber = hasKesoPrefix
          ? `${basePartNumber} x Keying Details x Finish`
          : `${selectedCylinderPrefix}${basePartNumber} x Keying Details x Finish`;
        const prefixData = cylinderPrefixCategories
          .flatMap((c) => c.prefixes)
          .find((p) => p.id === selectedCylinderPrefix);
        const prefixDesc = prefixData
          ? prefixData.description.replace("Device", "Housing")
          : "";
        let newNotes = cyl.notes;

        if (cyl.role === "Outside Cylinder" || cyl.role === "Inside Cylinder") {
          newNotes = `For the ${
            cyl.role.toLowerCase().split(" ")[0]
          } of the door.`;
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
      finalCylindersArray = finalCylindersArray.map((cyl) => {
        let newNotes = cyl.notes;
        if (cyl.role === "Outside Cylinder") {
          newNotes = "For the outside of the door.";
        } else if (cyl.role === "Inside Cylinder") {
          newNotes = "For the inside of the door.";
        } else {
          newNotes = `For ${cyl.role} which is: ${cyl.notes}`;
        }
        const newDescription = `${getCylinderLengthDescription(
          cyl.partNumber
        )} ${cyl.type}`;
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

    const fullModelData = sargentData.hardware
      .find((h) => h.category === result.category)
      ?.series.find((s) => s.name === result.seriesName)
      ?.models.find((m) => m.modelNumber === result.modelNumber);

    const hasDeviceOptions =
      fullModelData?.prefixes.filter(
        (p) => p.isDeviceSpecific && p.id !== "Inside Cyl"
      ).length > 0;
    const hasCylinderOptions =
      fullModelData?.baseCylinder ||
      fullModelData?.prefixes.some((p) => p.addsCylinder);

    if (!hasCylinderOptions) {
      setCurrentStep("results");
    } else if (hasDeviceOptions) {
      setCurrentStep("deviceOptions");
    } else {
      setCurrentStep("cylinderOptions");
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchResults.length === 1) {
        handleSearchClick(searchResults[0]);
      } else if (searchResults.length > 1) {
        setShowMultipleMatchesWarning(true);
      }
    }
  };

  const handleProceedFromDeviceSelection = () => {
    if (!selectedModel) return;

    const hasDeviceOptions =
      selectedCategory === "Exit Devices" && deviceTiedPrefixes.length > 0;
    const hasCylinderOptions =
      activeModelData?.baseCylinder ||
      activeModelData?.prefixes.some((p) => p.addsCylinder);

    if (!hasCylinderOptions) {
      setCurrentStep("results");
    } else if (hasDeviceOptions) {
      setCurrentStep("deviceOptions");
    } else {
      setCurrentStep("cylinderOptions");
    }
  };

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
    setSelectedDevicePrefixes([]);
  };

  const handleDevicePrefixChange = (prefixId) => {
    setSelectedDevicePrefixes((prev) =>
      prev.includes(prefixId)
        ? prev.filter((p) => p !== prefixId)
        : [...prev, prefixId]
    );
  };

  const handleCylinderPrefixChange = (prefixId) => {
    setSelectedCylinderPrefix((prev) => (prev === prefixId ? null : prefixId));
  };

  const handleNext = () => {
    if (currentStep === "deviceOptions") {
      setCurrentStep("cylinderOptions");
    }
  };

  const handleReset = () => {
    setSelectedCategory("");
    setSelectedSeriesName("");
    setSelectedModel("");
    setSelectedDevicePrefixes([]);
    setSelectedCylinderPrefix(null);
    setGlobalSearchTerm("");
    setSearchResults([]);
    setShowMultipleMatchesWarning(false);
    setCurrentStep("deviceSelection");
  };
  
  const handleBack = useCallback(() => {
    if (currentStep === "results") {
      const hasCylinderOptions =
        activeModelData?.baseCylinder ||
        activeModelData?.prefixes.some((p) => p.addsCylinder);
      if (hasCylinderOptions) {
        setCurrentStep("cylinderOptions");
      } else {
        handleReset();
      }
    } else if (currentStep === "cylinderOptions") {
      const hasDeviceOptions =
        deviceTiedPrefixes.length > 0 && selectedCategory === "Exit Devices";
      if (hasDeviceOptions) {
        setCurrentStep("deviceOptions");
      } else {
        handleReset();
      }
    } else if (currentStep === "deviceOptions") {
      handleReset();
    }
  }, [currentStep, deviceTiedPrefixes, selectedCategory, activeModelData]);
  

  const handleFindCylinder = () => {
    setCurrentStep("results");
  };

  const isInitialState = !globalSearchTerm;
  const chosenPrefixes = getChosenPrefixes();

  // Create filtered categories for the cylinder prefix selector
  const availableCylinderPrefixCategories = useMemo(() => {
    return cylinderPrefixCategories.map((category) => ({
      ...category,
      prefixes: category.prefixes.filter((p) => 
        !activeModelData?.excludedPrefixes?.some(excludedPrefix => 
          p.id.startsWith(excludedPrefix)
        )
      ),
    }));
  }, [activeModelData]);

  // Check if there are any available cylinder prefixes to display
  const hasAvailableCylinderPrefixes = useMemo(() => {
    return availableCylinderPrefixCategories.some(c => c.prefixes.length > 0);
  }, [availableCylinderPrefixCategories]);


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
                {selectedCategory && (
                  <HardwareSelector
                    label="Series"
                    options={groupedSeriesOptions}
                    value={selectedSeriesName}
                    onChange={handleSeriesChange}
                    disabled={!selectedCategory}
                  />
                )}
                {selectedSeriesName && (
                  <HardwareSelector
                    label="Model"
                    options={groupedModelOptions}
                    value={selectedModel}
                    onChange={handleModelChange}
                    disabled={!selectedSeriesName}
                  />
                )}
              </div>
              <div className="wizard-controls">
                <button
                  onClick={handleProceedFromDeviceSelection}
                  className="wizard-find-button"
                  disabled={!selectedModel}
                >
                  Find Cylinder
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

        case "deviceOptions":
          return (
            <div ref={deviceOptionsRef} className="wizard-step active">
              <div className="prefix-section">
                <h3 className="prefix-section-title">
                  Step 2 of 3: Select Device Options
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
                  Next
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
              {hasAvailableCylinderPrefixes ? (
                <div className="prefix-section">
                  <h3 className="prefix-section-title">
                    Step 3 of 3: Select Cylinder Options
                  </h3>
                  <CategorizedPrefixSelector
                    categories={availableCylinderPrefixCategories}
                    selectedPrefixes={
                      selectedCylinderPrefix ? [selectedCylinderPrefix] : []
                    }
                    onChange={handleCylinderPrefixChange}
                  />
                </div>
              ) : (
                <div className="no-options-message">No cylinder options available for this device.</div>
              )}
              <div className="wizard-controls">
                <button onClick={handleBack} className="wizard-back-button">
                  Back
                </button>
                <button
                  onClick={handleFindCylinder}
                  className="wizard-find-button"
                >
                  Find Cylinder
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
              <div className="selected-hardware-note">
                <div className="selected-hardware-image-wrapper">
                  <a href={activeModelData?.imageUrl} target="_blank" rel="noopener noreferrer">
                    <img
                      src={activeModelData?.imageUrl || images.sargentlogo}
                      alt={activeModelData?.modelNumber}
                      className="search-result-image"
                    />
                  </a>
                </div>
                <div className="selected-hardware-text">
                  <p>
                    Selected Device: <strong>{selectedModel}</strong>
                  </p>
                  <span className="selected-hardware-desc">
                    {activeModelData?.description}
                  </span>
                </div>
              </div>
              {chosenPrefixes.length > 0 && (
                <div className="chosen-prefixes-container">
                  <h4 className="chosen-prefixes-title">Prefixes Chosen:</h4>
                  <ul className="chosen-prefixes-list">
                    {chosenPrefixes.map((prefix) => (
                      <li key={prefix.id} className="chosen-prefix-item">
                        <span className="chosen-prefix-id">{prefix.id}</span>
                        <span className="chosen-prefix-description">{prefix.description}</span>
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
    // If not in the initial state (i.e., a global search is active), render search results.
    return (
      <div ref={searchResultsRef} className="search-results-container">
        {showMultipleMatchesWarning && (
          <p className="multiple-matches-warning">
            Multiple matches found. Please select one.
          </p>
        )}
        {searchResults.map((result) => (
          <div
            key={result.modelNumber}
            className="search-result-item"
            onClick={() => handleSearchClick(result)}
          >
            <img
              src={result.imageUrl}
              alt={result.modelNumber}
              className="search-result-image"
            />
            <div className="search-result-info">
              <p className="search-result-model">
                <strong>{result.modelNumber}</strong>
              </p>
              <p className="search-result-desc">{result.description}</p>
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