// src/components/PrefixSelector.js
import React from 'react';
import './PrefixSelector.css';

const PrefixSelector = ({ prefixes, selectedPrefixes, onChange }) => {
  // Safety check
  if (!prefixes || prefixes.length === 0) {
    return null;
  }

  return (
    <div className="prefix-grid">
      {prefixes.map((prefix) => {
        const isSelected = selectedPrefixes.includes(prefix.id);
        
        return (
          <button
            key={prefix.id}
            className={`prefix-card ${isSelected ? 'active' : ''}`}
            onClick={() => onChange(prefix.id, prefix.isRadio)}
            aria-pressed={isSelected}
          >
            <div className="prefix-header">
              <span className="prefix-code">{prefix.id}</span>
              {isSelected && <span className="prefix-check">✓</span>}
            </div>
            <span className="prefix-description">
              {prefix.description}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default PrefixSelector;