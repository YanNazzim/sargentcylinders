// src/components/PrefixSelector.js
import React, { useMemo } from 'react';
import './PrefixSelector.css';

// Utility function to determine if a prefix is an Auxiliary (stackable/checkbox) control
const isAuxPrefix = (id) => id.startsWith("106") || id.startsWith("306") || id.startsWith("127");

function PrefixSelector({ prefixes, selectedPrefixes, onChange }) {
    
    // Split prefixes into two groups: Main (Radio) and Aux (Checkbox)
    const { mainPrefixes, auxPrefixes } = useMemo(() => {
        const initial = { mainPrefixes: [], auxPrefixes: [] };
        prefixes.forEach(prefix => {
            if (isAuxPrefix(prefix.id)) {
                initial.auxPrefixes.push(prefix);
            } else {
                initial.mainPrefixes.push(prefix);
            }
        });
        return initial;
    }, [prefixes]);

    // Determine the currently selected main prefix for the radio group
    const selectedRadioId = useMemo(() => {
        return selectedPrefixes.find(id => !isAuxPrefix(id));
    }, [selectedPrefixes]);

    if ((!mainPrefixes || mainPrefixes.length === 0) && (!auxPrefixes || auxPrefixes.length === 0)) {
        return (
            <div className="prefix-selector-empty">
                No options available for this model.
            </div>
        );
    }
    
    // Handler for the Main/Radio group (exclusive selection)
    const handleRadioChange = (id) => {
        const newId = selectedRadioId === id ? null : id; // Toggle behavior for radio button
        onChange(newId, true); // Pass true to signal it's a main/radio change
    }

    // Handler for the Aux/Checkbox group (stackable selection)
    const handleCheckboxChange = (id) => {
        onChange(id, false); // Pass false to signal it's an aux/checkbox change
    }

  return (
    <div className="prefix-selector-container">
        
        {/* Aux Controls (Stackable/Checkbox Group) - Rendered first/on top */}
        {auxPrefixes.length > 0 && (
            <div className="prefix-group aux-group">
                <h4 className="prefix-group-title">Auxiliary Controls (Stackable)</h4>
                <div className="prefix-selector-options">
                    {auxPrefixes.map((prefix) => (
                        <label 
                            key={prefix.id} 
                            className={`prefix-selector-option-label ${selectedPrefixes.includes(prefix.id) ? 'selected' : ''}`}
                            data-tooltip={prefix.description}
                        >
                            <input
                                type="checkbox" // Checkbox input
                                checked={selectedPrefixes.includes(prefix.id)}
                                onChange={() => handleCheckboxChange(prefix.id)}
                                className="prefix-selector-checkbox"
                            />
                            <span className="prefix-selector-option-id">{prefix.id}</span>
                        </label>
                    ))}
                </div>
            </div>
        )}

        {/* Main Prefixes (Exclusive/Radio Group) */}
        {mainPrefixes.length > 0 && (
            <div className="prefix-group main-group">
                <h4 className="prefix-group-title">Main Device Functions (Select One)</h4>
                <div className="prefix-selector-options">
                    {mainPrefixes.map((prefix) => (
                        <label 
                            key={prefix.id} 
                            className={`prefix-selector-option-label ${selectedRadioId === prefix.id ? 'selected' : ''}`}
                            data-tooltip={prefix.description}
                        >
                            <input
                                type="radio" // Radio input
                                name="device-prefix-radio"
                                checked={selectedRadioId === prefix.id}
                                onChange={() => handleRadioChange(prefix.id)}
                                className="prefix-selector-checkbox" // Re-use styling class
                            />
                            <span className="prefix-selector-option-id">{prefix.id}</span>
                        </label>
                    ))}
                </div>
            </div>
        )}

    </div>
  );
}

export default PrefixSelector;