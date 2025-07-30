// src/components/CylinderFinder.js
import React, { useState, useMemo } from 'react';
import { sargentData, cylinderPrefixCategories } from '../data/sargentData';
import HardwareSelector from './HardwareSelector';
import PrefixSelector from './PrefixSelector';
import CategorizedPrefixSelector from './CategorizedPrefixSelector';
import ResultsDisplay from './ResultsDisplay';
import './CylinderFinder.css';

function CylinderFinder() {
    // Replaced 'step' with 'currentView' for explicit state management
    const [currentView, setCurrentView] = useState('form'); // 'form', 'options', 'results'
    const [category, setCategory] = useState('');
    const [series, setSeries] = useState('');
    const [model, setModel] = useState('');
    const [selectedDevicePrefixes, setSelectedDevicePrefixes] = useState([]);
    const [selectedCylinderPrefix, setSelectedCylinderPrefix] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const categories = useMemo(() => sargentData.hardware.map(h => h.category), []);

    const seriesOptions = useMemo(() => {
        if (!category) return [];
        const hardwareCategory = sargentData.hardware.find(h => h.category === category);
        if (!hardwareCategory) return [];

        // If the category is NOT 'Exit Devices', return a flat list of series names
        if (category !== 'Exit Devices') {
            return hardwareCategory.series.map(s => s.name);
        }

        // --- Existing logic for 'Exit Devices' ---
        const groups = {
            '80 Series': [],
            'PE80 Series': [],
            '90 Series': [],
            '30 Series': [],
            '20 Series': [],
            'Other': [], // Fallback for any others
        };

        hardwareCategory.series.forEach(s => {
            const name = s.name;
            if (name.startsWith('PE8')) {
                groups['PE80 Series'].push(name);
            } else if (name.startsWith('8')) {
                groups['80 Series'].push(name);
            } else if (name.startsWith('9')) {
                groups['90 Series'].push(name);
            } else if (name.startsWith('3')) {
                groups['30 Series'].push(name);
            } else if (name.startsWith('2')) {
                groups['20 Series'].push(name);
            } else {
                groups['Other'].push(name);
            }
        });
        
        // Format for the HardwareSelector with optgroups
        return Object.keys(groups)
            .filter(groupName => groups[groupName].length > 0)
            .map(groupName => ({
                label: groupName,
                options: groups[groupName]
            }));

    }, [category]);

    const modelOptions = useMemo(() => {
        if (!category || !series) return [];
        const catData = sargentData.hardware.find(h => h.category === category);
        const seriesData = catData?.series.find(s => s.name === series);
        return seriesData ? seriesData.models.map(m => `${m.modelNumber} - ${m.description}`) : [];
    }, [category, series]);

    const activeModelData = useMemo(() => {
        if (!category || !series || !model) return null;
        const modelNumber = model.split(' - ')[0];
        const catData = sargentData.hardware.find(h => h.category === category);
        const seriesData = catData?.series.find(s => s.name === series);
        return seriesData?.models.find(m => m.modelNumber === modelNumber) || null;
    }, [category, series, model]);

    const deviceTiedPrefixes = useMemo(() => {
        if (!activeModelData) return [];
    
        // All prefixes for the model that are tied to the device itself
        const allDevicePrefixes = activeModelData.prefixes.filter(p => p.isDeviceSpecific);
    
        const universalPrefixes = ['16', '59', 'AL'];
    
        // Check if the selected series is an 80 or PE80 series
        const is80Family = series && (series.includes('80 Series') || series.includes('PE80'));
    
        if (is80Family) {
            // For 80 series family, ONLY show the universal prefixes
            return allDevicePrefixes.filter(p => universalPrefixes.includes(p.id));
        } else {
            // For ALL OTHER series, show their specific prefixes but EXCLUDE the universal ones
            return allDevicePrefixes.filter(p => !universalPrefixes.includes(p.id));
        }
    }, [activeModelData, series]);

    const cylinderOptionsCategories = useMemo(() => {
        if (!activeModelData) return [];

        let allowedPrefixIds = [];
        // Apply specific rule for 9404 model
        if (activeModelData.modelNumber === '9404') {
            allowedPrefixIds = ['10-', '11-', '11-21-', '82-', 'F1-82-', 'BR-', 'SC-', 'SE-'];
        } else {
            // Original logic for all other models
            const allModelPrefixes = new Set(activeModelData.prefixes.map(p => p.id));
            allowedPrefixIds = Array.from(allModelPrefixes);
        }

        return cylinderPrefixCategories.map(cat => ({
            ...cat,
            prefixes: cat.prefixes.filter(p => allowedPrefixIds.includes(p.id))
        })).filter(cat => cat.prefixes.length > 0);
    }, [activeModelData]);

    const getCylinderLengthDescription = (partNumber) => {
        const lengths = {
            '41': '1-1/8"', '42': '1-1/4"', '43': '1-3/8"', '44': '1-1/2"',
            '46': '1-3/4"', '48': '2"', '50': '2-1/4"', '52': '2-1/2"',
            '54': '2-3/4"', '56': '3"',
        };
        return lengths[partNumber.replace('#', '')] || '';
    };

    const finalCylinders = useMemo(() => {
        if (!activeModelData) return [];

        const lficPrefixes = ["60-", "63-", "64-", "DG1-60-", "DG1-63-", "DG1-64-", "DG2-60-", "DG2-63-", "DG2-64-", "DG3-60-", "DG3-63-", "DG3-64-", "10-63-", "11-60-", "11-63-", "11-64-"];
        const sficPrefixes = ["70-", "72-", "73-", "65-73-", "65-73-7P-", "73-7P-", "11-70-7P-", "11-72-7P-", "11-73-7P-", "11-65-73-7P-"];
        
        const hasLficPrefix = selectedCylinderPrefix && lficPrefixes.includes(selectedCylinderPrefix);
        const hasSficPrefix = selectedCylinderPrefix && sficPrefixes.includes(selectedCylinderPrefix);

        const rawCylinderList = [];
        if (activeModelData.baseCylinder) {
            const modelNumberSuffix = activeModelData.modelNumber.slice(-2);
            let cylinder = { ...activeModelData.baseCylinder };

            // --- Logic for Special Function Cylinders ---
            if (modelNumberSuffix === '50') { // Hotel Function
                if (series.includes('10X')) cylinder.partNumber = 'C10X-2';
                else if (series.includes('11')) cylinder.partNumber = 'C11-2';
                else if (series.includes('6 Line')) cylinder.partNumber = 'C6-2B';
                else if (['10 Line', '7 Line', '6500 Line'].some(s => series.includes(s))) {
                    cylinder.partNumber = 'C10-2';
                }
            } else if (modelNumberSuffix === '65') { // Privacy Function
                if (series.includes('10X')) cylinder.partNumber = 'C10X-3';
                else if (['10 Line', '7 Line', '6500 Line'].some(s => series.includes(s))) {
                    cylinder.partNumber = 'C10-3';
                }
            }
            rawCylinderList.push(cylinder);
        }

        selectedDevicePrefixes.forEach(prefixId => {
            const prefixData = activeModelData.prefixes.find(p => p.id === prefixId);
            if (prefixData && prefixData.addsCylinder) {
                rawCylinderList.push({ ...prefixData.addsCylinder });
            }
        });

        const transformedCylinderList = rawCylinderList.map(cyl => {
            const newCyl = { ...cyl };
            if (hasLficPrefix) {
                if (newCyl.partNumber === '#41') newCyl.partNumber = '#42';
            } else if (hasSficPrefix) {
                if (newCyl.partNumber === '#41') newCyl.partNumber = '#43';
                else if (newCyl.partNumber === '#44') newCyl.partNumber = '#46';
            }
            return newCyl;
        });

        const consolidatedMap = new Map();
        transformedCylinderList.forEach(cyl => {
            const key = cyl.partNumber;
            if (consolidatedMap.has(key)) {
                consolidatedMap.get(key).quantity++;
            } else {
                consolidatedMap.set(key, { ...cyl, quantity: 1 });
            }
        });
        
        let finalCylindersArray = Array.from(consolidatedMap.values());
        
        if (selectedCylinderPrefix) {
            finalCylindersArray = finalCylindersArray.map(cyl => {
                const basePartNumber = cyl.partNumber.replace('#', '');
                const lengthDesc = getCylinderLengthDescription(basePartNumber);
                const prefixData = cylinderPrefixCategories.flatMap(c => c.prefixes).find(p => p.id === selectedCylinderPrefix);
                const prefixDesc = prefixData ? prefixData.description.replace('Device', 'Housing') : '';
                const finalPartNumber = `${selectedCylinderPrefix} ${basePartNumber} x Keying Details x Finish`;
                const finalDescription = `${lengthDesc} ${cyl.type} ${prefixDesc}`;
                return {
                    ...cyl,
                    partNumber: finalPartNumber,
                    description: finalDescription,
                };
            });
        } else {
            // Default description logic when no prefix is selected
            finalCylindersArray = finalCylindersArray.map(cyl => {
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

    }, [activeModelData, selectedDevicePrefixes, selectedCylinderPrefix, series]);


    const handleCategoryChange = (value) => {
        setCategory(value);
        setSeries('');
        setModel('');
        setSelectedDevicePrefixes([]);
        setSelectedCylinderPrefix(null);
        setCurrentView('form'); // Reset view to form
    };

    const handleSeriesChange = (value) => {
        setSeries(value);
        setModel('');
        setSelectedDevicePrefixes([]);
        setSelectedCylinderPrefix(null);
        setCurrentView('form'); // Reset view to form
    };

    const handleModelChange = (value) => {
        setModel(value);
        setSelectedDevicePrefixes([]);
        setSelectedCylinderPrefix(null);
        setCurrentView('form'); // Reset view to form
    };

    const handleDevicePrefixChange = (prefixId) => {
        setSelectedDevicePrefixes(prev =>
            prev.includes(prefixId)
                ? prev.filter(id => id !== prefixId)
                : [...prev, prefixId]
        );
        // Do not change view here, let handleFindCylinders handle it.
    };

    const handleCylinderPrefixChange = (prefixId) => {
        setSelectedCylinderPrefix(prev => (prev === prefixId ? null : prefixId));
        // Do not change view here, let handleFindCylinders handle it.
    };

    const handleReset = () => {
        setCategory('');
        setSeries('');
        setModel('');
        setSelectedDevicePrefixes([]);
        setSelectedCylinderPrefix(null);
        setCurrentView('form'); // Reset view to initial form
        setSearchTerm('');
    };

    const handleNextStep = () => {
        if (model) {
            // Check for the QOL condition:
            const shouldSkipToResults = activeModelData && !activeModelData.baseCylinder && deviceTiedPrefixes.length === 0;

            if (shouldSkipToResults) {
                setCurrentView('results'); // Directly show results
            } else {
                setCurrentView('options'); // Otherwise, proceed to options view
            }
        }
    };

    const handleBack = () => {
        setCurrentView('form');
    };

    const handleFindCylinders = () => {
        setCurrentView('results'); // Show results from the options view
    };

    return (
        <div className="cylinder-finder-card">
            <div className="cylinder-finder-header">
                <h2 className="cylinder-finder-title">Sargent Cylinder Finder</h2>
                <button onClick={handleReset} className="cylinder-finder-reset-button">Reset</button>
            </div>

            {/* Render content based on currentView */}
            {currentView === 'form' && (
                <div className="wizard-step active"> {/* 'active' class ensures visibility without complex animation state */}
                    <div className="cylinder-finder-selectors">
                        <HardwareSelector label="Hardware Category" options={categories} value={category} onChange={handleCategoryChange} />
                        <HardwareSelector label="Product Series" options={seriesOptions} value={series} onChange={handleSeriesChange} disabled={!category} />
                        <HardwareSelector label="Model / Function" options={modelOptions} value={model} onChange={handleModelChange} disabled={!series} />
                    </div>
                    <div className="wizard-controls">
                        <button onClick={handleNextStep} disabled={!model} className="wizard-next-button">Next</button>
                    </div>
                </div>
            )}

            {currentView === 'options' && (
                <div className="wizard-step active"> {/* 'active' class ensures visibility */}
                    <div className="selected-hardware-note">
                        Selected: {series} &gt; {model}
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
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="prefix-search-bar"
                                />
                                <CategorizedPrefixSelector
                                    categories={cylinderOptionsCategories}
                                    selectedPrefixes={[selectedCylinderPrefix]}
                                    onChange={handleCylinderPrefixChange}
                                    searchTerm={searchTerm}
                                />
                            </div>
                        )}
                    </div>
                    <div className="wizard-controls">
                        <button onClick={handleBack} className="wizard-back-button">Back</button>
                        <button onClick={handleFindCylinders} className="wizard-find-button">Find Cylinder</button>
                    </div>
                </div>
            )}

            {currentView === 'results' && (
                <div className="wizard-step active"> {/* 'active' class ensures visibility */}
                    <div className="selected-hardware-note">
                        Selected: {series} &gt; {model}
                    </div>
                    {/* Display the ResultsDisplay component here */}
                    <ResultsDisplay cylinders={finalCylinders} />
                    <div className="wizard-controls">
                        <button onClick={handleBack} className="wizard-back-button">Back</button>
                        {/* Optionally, add a "Reset" button here as well if desired */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CylinderFinder;