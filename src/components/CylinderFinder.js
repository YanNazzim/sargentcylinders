// src/components/CylinderFinder.js
import React, { useState, useMemo } from 'react';
import { sargentData, cylinderPrefixCategories } from '../data/sargentData';
import HardwareSelector from './HardwareSelector';
import PrefixSelector from './PrefixSelector'; // For device-tied prefixes
import CategorizedPrefixSelector from './CategorizedPrefixSelector'; // For cylinder options
import ResultsDisplay from './ResultsDisplay';
import './CylinderFinder.css';

function CylinderFinder() {
    const [category, setCategory] = useState('');
    const [series, setSeries] = useState('');
    const [model, setModel] = useState('');
    const [selectedPrefixes, setSelectedPrefixes] = useState([]);
    const [showResults, setShowResults] = useState(false); // New state to control results visibility

    // --- Derived Data for Selectors ---
    const categories = useMemo(() => sargentData.hardware.map(h => h.category), []);
    
    const seriesOptions = useMemo(() => {
        if (!category) return [];
        return sargentData.hardware.find(h => h.category === category)?.series.map(s => s.name) || [];
    }, [category]);

    const modelOptions = useMemo(() => {
        if (!category || !series) return [];
        const catData = sargentData.hardware.find(h => h.category === category);
        return catData?.series.find(s => s.name === series)?.models.map(m => m.modelNumber) || [];
    }, [category, series]);

    const activeModelData = useMemo(() => {
        if (!category || !series || !model) return null;
        const catData = sargentData.hardware.find(h => h.category === category);
        const seriesData = catData?.series.find(s => s.name === series);
        return seriesData?.models.find(m => m.modelNumber === model) || null;
    }, [category, series, model]);

    // --- Filter prefixes into two categories for display ---
    const deviceTiedPrefixes = useMemo(() => {
        if (!activeModelData) return [];
        return activeModelData.prefixes.filter(p => p.isDeviceSpecific);
    }, [activeModelData]);

    const cylinderOptionsCategories = useMemo(() => {
        if (!activeModelData) return [];
        
        // Filter `cylinderPrefixCategories` to only show categories that have relevant prefixes
        // for the currently active model and are not device-specific.
        return cylinderPrefixCategories.map(cat => ({
            ...cat,
            prefixes: cat.prefixes.filter(p => 
                activeModelData.prefixes.some(ap => ap.id === p.id && !ap.isDeviceSpecific)
            )
        })).filter(cat => cat.prefixes.length > 0); // Only show categories with actual prefixes
    }, [activeModelData]);


    // --- Logic for Calculating Results ---
    const finalCylinders = useMemo(() => {
        if (!activeModelData) return [];
        
        let cylinders = [];
        if (activeModelData.baseCylinder) {
            cylinders.push({ ...activeModelData.baseCylinder, notes: activeModelData.baseCylinder.notes || 'Base cylinder for this model.' });
        }

        selectedPrefixes.forEach(prefixId => {
            const prefixData = activeModelData.prefixes.find(p => p.id === prefixId);
            if (prefixData && prefixData.addsCylinder) {
                cylinders.push(prefixData.addsCylinder);
            }
        });

        return cylinders;
    }, [activeModelData, selectedPrefixes]);

    // --- Event Handlers ---
    const handleCategoryChange = (value) => {
        setCategory(value);
        setSeries('');
        setModel('');
        setSelectedPrefixes([]);
        setShowResults(false); // Hide results on new selection
    };
    
    const handleSeriesChange = (value) => {
        setSeries(value);
        setModel('');
        setSelectedPrefixes([]);
        setShowResults(false); // Hide results on new selection
    };

    const handleModelChange = (value) => {
        setModel(value);
        setSelectedPrefixes([]);
        setShowResults(false); // Hide results on new selection
    };

    const handlePrefixChange = (prefixId) => {
        setSelectedPrefixes(prev => 
            prev.includes(prefixId) 
                ? prev.filter(id => id !== prefixId) 
                : [...prev, prefixId]
        );
        setShowResults(false); // Hide results if prefixes change, user needs to re-evaluate
    };
    
    const handleReset = () => {
        setCategory('');
        setSeries('');
        setModel('');
        setSelectedPrefixes([]);
        setShowResults(false); // Hide results on reset
    };

    const handleShowResults = () => {
        setShowResults(true); // Explicitly show results
    };

    // Determine if the prefix selection area should even be displayed
    const shouldShowPrefixSelection = activeModelData && 
                                     (deviceTiedPrefixes.length > 0 || cylinderOptionsCategories.length > 0);

  return (
    <div className="cylinder-finder-card">
      <div className="cylinder-finder-header">
        <h2 className="cylinder-finder-title">Sargent Cylinder Finder</h2>
        <button onClick={handleReset} className="cylinder-finder-reset-button">Reset</button>
      </div>
      
      <div className="cylinder-finder-selectors">
        <HardwareSelector label="Hardware Category" options={categories} value={category} onChange={handleCategoryChange} />
        <HardwareSelector label="Product Series" options={seriesOptions} value={series} onChange={handleSeriesChange} disabled={!category} />
        <HardwareSelector label="Model Number" options={modelOptions} value={model} onChange={handleModelChange} disabled={!series} />
      </div>

      {activeModelData && (
        <> {/* Use a fragment to group conditional content */}
            {shouldShowPrefixSelection ? (
                <div className="cylinder-finder-options-area"> {/* Grouping div for prefix selectors */}
                    {/* Device-Tied Prefixes Section */}
                    {deviceTiedPrefixes.length > 0 && (
                        <div className="prefix-section device-options-section">
                            <h3 className="prefix-section-title">Device Options (might add cylinders)</h3>
                            <p className="section-description">Select any special functions for your device here. These may affect the required cylinder type.</p>
                            <PrefixSelector 
                                prefixes={deviceTiedPrefixes} 
                                selectedPrefixes={selectedPrefixes} 
                                onChange={handlePrefixChange} 
                            />
                        </div>
                    )}

                    {/* Cylinder Options Categories Section */}
                    {cylinderOptionsCategories.length > 0 && (
                        <div className="prefix-section cylinder-options-section">
                            <h3 className="prefix-section-title">Cylinder Type & Keying Options</h3>
                            <p className="section-description">Expand a category below to choose specific cylinder or keying system options. Only one category can be open at a time.</p>
                            <CategorizedPrefixSelector
                                categories={cylinderOptionsCategories} 
                                selectedPrefixes={selectedPrefixes} 
                                onChange={handlePrefixChange} 
                            />
                        </div>
                    )}
                </div>
            ) : (
                activeModelData.baseCylinder && (
                    <p className="no-cylinder-info-message">This model does not require or offer additional cylinder prefixes, but has a base cylinder.</p>
                )
            )}

            {/* Always show the "Show Results" button if a model is selected and there's something to display (base cylinder or prefixes) */}
            {(activeModelData.baseCylinder || shouldShowPrefixSelection) && (
                <div className="show-results-button-container">
                    <button onClick={handleShowResults} className="show-results-button">
                        Show Required Cylinders
                    </button>
                </div>
            )}

            {/* Display ResultsDisplay only if showResults is true */}
            {showResults && (
                 <div className="cylinder-finder-results-area">
                    <ResultsDisplay cylinders={finalCylinders} />
                </div>
            )}

            {/* If no prefixes and no base cylinder at all for the selected model */}
            {activeModelData && !activeModelData.baseCylinder && !shouldShowPrefixSelection && (
                <p className="no-cylinder-info-message">This model does not require or offer any cylinder-related options.</p>
            )}
        </>
      )}
    </div>
  );
}

export default CylinderFinder;