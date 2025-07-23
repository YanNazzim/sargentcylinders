// src/components/HardwareSelector.js
import React from 'react';
import './HardwareSelector.css'; // You'll create this CSS file

function HardwareSelector({ label, options, value, onChange, disabled = false }) {
  return (
    <div className="hardware-selector-container"> {/* Replaced w-full */}
      <label className="hardware-selector-label">{label}</label> {/* Replaced block text-sm font-medium text-gray-400 mb-1 */}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="hardware-selector-select" // Replaced w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition
      >
        <option value="">-- Select {label} --</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default HardwareSelector;