// src/components/ResultsDisplay.js
import React from 'react';
import './ResultsDisplay.css'; // You'll create this CSS file

function ResultsDisplay({ cylinders }) {
  return (
    <div className="results-display-container"> {/* Replaced w-full mt-4 */}
      <h3 className="results-display-heading">Required Cylinders</h3> {/* Replaced text-xl font-bold text-white mb-3 border-b-2 border-blue-500 pb-2 */}
      {cylinders.length === 0 ? (
        <p className="results-display-empty-message">Select a model to see results.</p> // Replaced text-gray-400
      ) : (
        <div className="results-display-list"> {/* Replaced space-y-4 */}
          {cylinders.map((cyl, index) => (
            <div key={index} className="results-display-item"> {/* Replaced bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md */}
              <p className="results-display-item-part-number">{cyl.partNumber} <span className="results-display-item-type">- {cyl.type}</span></p> {/* Replaced text-lg font-semibold text-blue-400 and text-sm font-normal text-gray-400 */}
              {cyl.notes && <p className="results-display-item-notes">{cyl.notes}</p>} {/* Replaced text-gray-300 mt-1 text-sm */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResultsDisplay;