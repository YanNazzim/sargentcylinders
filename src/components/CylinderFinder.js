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
    const [selectedPrefixes, setSelectedPrefixes] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

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

    const deviceTiedPrefixes = useMemo(() => {
        if (!activeModelData) return [];
        return activeModelData.prefixes.filter(p => p.isDeviceSpecific);
    }, [activeModelData]);

    const cylinderOptionsCategories = useMemo(() => {
        if (!activeModelData) return [];
        const nonDeviceSpecificPrefixesForModel = activeModelData.prefixes.filter(p => !p.isDeviceSpecific);
        const activePrefixIds = new Set(nonDeviceSpecificPrefixesForModel.map(p => p.id));
        const categorizedResult = cylinderPrefixCategories.map(cat => ({
            ...cat,
            prefixes: cat.prefixes.filter(p => activePrefixIds.has(p.id))
        })).filter(cat => cat.prefixes.length > 0);
        return categorizedResult;
    }, [activeModelData]);

    const finalCylinders = useMemo(() => {
        if (!activeModelData) return [];
        let cylinders = [];
        let baseCylinderToAdd = activeModelData.baseCylinder ? { ...activeModelData.baseCylinder } : null;
        const lficPrefixes = ["60-", "63-", "64-", "DG1-60-", "DG1-63-", "DG1-64-", "DG2-60-", "DG2-63-", "DG2-64-", "DG3-60-", "DG3-63-", "DG3-64-", "10-63-", "11-60-", "11-63-", "11-64-"];
        const sficPrefixes = ["70-", "72-", "73-", "65-73-", "65-73-7P-", "73-7P-", "11-70-7P-", "11-72-7P-", "11-73-7P-", "11-65-73-7P-"];
        const hasLficPrefix = selectedPrefixes.some(prefixId => lficPrefixes.includes(prefixId));
        const hasSficPrefix = selectedPrefixes.some(prefixId => sficPrefixes.includes(prefixId));

        if (baseCylinderToAdd) {
            if (hasLficPrefix) {
                baseCylinderToAdd.partNumber = "#42";
                baseCylinderToAdd.notes = `${baseCylinderToAdd.notes} (Modified for LFIC compatibility)`;
            } else if (hasSficPrefix) {
                baseCylinderToAdd.partNumber = "#43";
                baseCylinderToAdd.notes = `${baseCylinderToAdd.notes} (Modified for SFIC compatibility)`;
            }
            cylinders.push(baseCylinderToAdd);
        }

        selectedPrefixes.forEach(prefixId => {
            const prefixData = activeModelData.prefixes.find(p => p.id === prefixId);
            if (prefixData && prefixData.addsCylinder) {
                const isBaseCylinderModifiedByThisPrefix = (hasLficPrefix && lficPrefixes.includes(prefixId)) || (hasSficPrefix && sficPrefixes.includes(prefixId));
                if (!isBaseCylinderModifiedByThisPrefix || !baseCylinderToAdd) {
                    cylinders.push(prefixData.addsCylinder);
                }
            }
        });

        const uniqueCylinders = [];
        const seenPartNumbers = new Set();
        cylinders.forEach(cyl => {
            if (!seenPartNumbers.has(cyl.partNumber)) {
                uniqueCylinders.push(cyl);
                seenPartNumbers.add(cyl.partNumber);
            }
        });
        return uniqueCylinders;
    }, [activeModelData, selectedPrefixes]);

    const handleCategoryChange = (value) => {
        setCategory(value);
        setSeries('');
        setModel('');
        setSelectedPrefixes([]);
        setShowResults(false);
    };

    const handleSeriesChange = (value) => {
        setSeries(value);
        setModel('');
        setSelectedPrefixes([]);
        setShowResults(false);
    };

    const handleModelChange = (value) => {
        setModel(value);
        setSelectedPrefixes([]);
        setShowResults(false);
    };

    const handlePrefixChange = (prefixId) => {
        setSelectedPrefixes(prev =>
            prev.includes(prefixId)
                ? prev.filter(id => id !== prefixId)
                : [...prev, prefixId]
        );
        setShowResults(false);
    };

    const handleReset = () => {
        setCategory('');
        setSeries('');
        setModel('');
        setSelectedPrefixes([]);
        setShowResults(false);
        setStep(1);
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
                    <HardwareSelector label="Model Number" options={modelOptions} value={model} onChange={handleModelChange} disabled={!series} />
                </div>
                <div className="wizard-controls">
                    <button onClick={handleNextStep} disabled={!model} className="wizard-next-button">Next</button>
                </div>
            </div>

            <div className={`wizard-step ${step === 2 ? 'active' : ''}`}>
                <div className="selected-hardware-note">
                    Selected: {category} > {series} > {model}
                </div>
                <div className="cylinder-finder-options-area">
                    {deviceTiedPrefixes.length > 0 && (
                        <div className="prefix-section device-options-section">
                            <h3 className="prefix-section-title">Device Options</h3>
                            <PrefixSelector
                                prefixes={deviceTiedPrefixes}
                                selectedPrefixes={selectedPrefixes}
                                onChange={handlePrefixChange}
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
                                selectedPrefixes={selectedPrefixes}
                                onChange={handlePrefixChange}
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