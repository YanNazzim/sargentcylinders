// src/components/CylinderFinder.js
import React, { useState, useMemo } from 'react';
import { sargentData, cylinderPrefixCategories } from '../data/sargentData';
import HardwareSelector from './HardwareSelector';
import PrefixSelector from './PrefixSelector';
import CategorizedPrefixSelector from './CategorizedPrefixSelector';
import ResultsDisplay from './ResultsDisplay';
import './CylinderFinder.css';

function CylinderFinder() {
    const [step, setStep] = useState(1);
    const [category, setCategory] = useState('');
    const [series, setSeries] = useState('');
    const [model, setModel] = useState('');
    const [selectedDevicePrefixes, setSelectedDevicePrefixes] = useState([]);
    const [selectedCylinderPrefix, setSelectedCylinderPrefix] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const categories = useMemo(() => sargentData.hardware.map(h => h.category), []);

    const seriesOptions = useMemo(() => {
        if (!category) return [];
        const hardwareCategory = sargentData.hardware.find(h => h.category === category);
        return hardwareCategory ? hardwareCategory.series.map(s => s.name) : [];
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
        return activeModelData.prefixes.filter(p => p.isDeviceSpecific);
    }, [activeModelData]);

    const cylinderOptionsCategories = useMemo(() => {
        if (!activeModelData) return [];
        const allModelPrefixes = new Set(activeModelData.prefixes.map(p => p.id));
        return cylinderPrefixCategories.map(cat => ({
            ...cat,
            prefixes: cat.prefixes.filter(p => allModelPrefixes.has(p.id))
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
            rawCylinderList.push({ ...activeModelData.baseCylinder });
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
                const finalPartNumber = `${selectedCylinderPrefix}${basePartNumber}`;
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
                    description: finalDescription.trim(),
                };
            });
        }
        
        return finalCylindersArray;

    }, [activeModelData, selectedDevicePrefixes, selectedCylinderPrefix]);


    const handleCategoryChange = (value) => {
        setCategory(value);
        setSeries('');
        setModel('');
        setSelectedDevicePrefixes([]);
        setSelectedCylinderPrefix(null);
        setShowResults(false);
    };

    const handleSeriesChange = (value) => {
        setSeries(value);
        setModel('');
        setSelectedDevicePrefixes([]);
        setSelectedCylinderPrefix(null);
        setShowResults(false);
    };

    const handleModelChange = (value) => {
        setModel(value);
        setSelectedDevicePrefixes([]);
        setSelectedCylinderPrefix(null);
        setShowResults(false);
    };

    const handleDevicePrefixChange = (prefixId) => {
        setSelectedDevicePrefixes(prev =>
            prev.includes(prefixId)
                ? prev.filter(id => id !== prefixId)
                : [...prev, prefixId]
        );
        setShowResults(false);
    };

    const handleCylinderPrefixChange = (prefixId) => {
        setSelectedCylinderPrefix(prev => (prev === prefixId ? null : prefixId));
        setShowResults(false);
    };

    const handleReset = () => {
        setCategory('');
        setSeries('');
        setModel('');
        setSelectedDevicePrefixes([]);
        setSelectedCylinderPrefix(null);
        setShowResults(false);
        setStep(1);
        setSearchTerm('');
    };

    const handleNextStep = () => {
        if (model) {
            setStep(2);
        }
    };

    const handleFindCylinders = () => {
        setShowResults(true);
    };

    return (
        <div className="cylinder-finder-card">
            <div className="cylinder-finder-header">
                <h2 className="cylinder-finder-title">Sargent Cylinder Finder</h2>
                <button onClick={handleReset} className="cylinder-finder-reset-button">Reset</button>
            </div>

            <div className={`wizard-step ${step === 1 ? 'active' : ''}`}>
                <div className="cylinder-finder-selectors">
                    <HardwareSelector label="Hardware Category" options={categories} value={category} onChange={handleCategoryChange} />
                    <HardwareSelector label="Product Series" options={seriesOptions} value={series} onChange={handleSeriesChange} disabled={!category} />
                    <HardwareSelector label="Model / Function" options={modelOptions} value={model} onChange={handleModelChange} disabled={!series} />
                </div>
                <div className="wizard-controls">
                    <button onClick={handleNextStep} disabled={!model} className="wizard-next-button">Next</button>
                </div>
            </div>

            <div className={`wizard-step ${step === 2 ? 'active' : ''}`}>
                <div className="selected-hardware-note">
                    Selected: {series} > {model}
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
                    <button onClick={() => setStep(1)} className="wizard-back-button">Back</button>
                    <button onClick={handleFindCylinders} className="wizard-find-button">Find Cylinder</button>
                </div>
                {showResults && <ResultsDisplay cylinders={finalCylinders} />}
            </div>
        </div>
    );
}

export default CylinderFinder;