// src/components/PrefixSelector.js
import React from 'react';
import './PrefixSelector.css';

function PrefixSelector({ prefixes, selectedPrefixes, onChange }) {
    if (!prefixes || prefixes.length === 0) {
        return (
            <div className="prefix-selector-empty">
                No options available for this model.
            </div>
        );
    }
    
  return (
    <div className="prefix-selector-container">
        <div className="prefix-selector-options">
            {prefixes.map((prefix) => (
                <label key={prefix.id} className="prefix-selector-option-label" data-tooltip={prefix.description}>
                    <input
                        type="checkbox"
                        checked={selectedPrefixes.includes(prefix.id)}
                        onChange={() => onChange(prefix.id)}
                        className="prefix-selector-checkbox"
                    />
                    <span className="prefix-selector-option-id">{prefix.id}</span>
                </label>
            ))}
        </div>
    </div>
  );
}

export default PrefixSelector;