// src/components/HardwareSelector.js
import React from 'react';
import './HardwareSelector.css';

function HardwareSelector({ label, options, value, onChange, disabled = false }) {
  // Check if the options are structured for optgroups
  const isGrouped = options.length > 0 && typeof options[0] === 'object' && options[0] !== null && 'label' in options[0] && Array.isArray(options[0].options);

  return (
    <div className="hardware-selector-container">
      <label className="hardware-selector-label">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="hardware-selector-select"
      >
        <option value="">-- Select {label} --</option>
        {isGrouped
          ? (
            // Render with optgroups
            options.map(group => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </optgroup>
            ))
          )
          : (
            // Render as a flat list
            options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          )}
      </select>
    </div>
  );
}

export default HardwareSelector;