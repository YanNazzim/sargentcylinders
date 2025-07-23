// src/components/PrefixSelector.js
import React from 'react';
import './PrefixSelector.css'; // You'll create this CSS file

function PrefixSelector({ prefixes, selectedPrefixes, onChange }) {
    if (!prefixes || prefixes.length === 0) {
        return (
            <div className="prefix-selector-empty"> {/* Replaced p-4 border border-dashed border-gray-600 rounded-md text-center text-gray-400 */}
                No options available for this model.
            </div>
        );
    }
    
  return (
    <div className="prefix-selector-container"> {/* Replaced w-full */}
        <h3 className="prefix-selector-heading">Available Options</h3> {/* Replaced text-lg font-semibold text-gray-200 mb-2 */}
        <div className="prefix-selector-options"> {/* Replaced space-y-2 p-4 bg-gray-900/50 rounded-md border border-gray-700 */}
            {prefixes.map((prefix) => (
                <label key={prefix.id} className="prefix-selector-option-label"> {/* Replaced flex items-center p-2 rounded-md hover:bg-gray-700 transition cursor-pointer */}
                    <input
                        type="checkbox"
                        checked={selectedPrefixes.includes(prefix.id)}
                        onChange={() => onChange(prefix.id)}
                        className="prefix-selector-checkbox" // Replaced h-5 w-5 rounded bg-gray-600 border-gray-500 text-blue-500 focus:ring-blue-600
                    />
                    <span className="prefix-selector-option-text">{prefix.id} - {prefix.description}</span> {/* Replaced ml-3 text-gray-300 */}
                </label>
            ))}
        </div>
    </div>
  );
}

export default PrefixSelector;