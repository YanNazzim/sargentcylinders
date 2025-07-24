// src/components/ResultsDisplay.js
import React from 'react';
import './ResultsDisplay.css'; 

function ResultsDisplay({ cylinders }) {
  return (
    <div className="results-display-container">
      <h3 className="results-display-heading">Required Cylinders</h3>
      {cylinders.length === 0 ? (
        <p className="results-display-empty-message">No cylinders required for this configuration.</p>
      ) : (
        <div className="results-display-list">
          {cylinders.map((cyl, index) => (
            <div key={index} className="results-display-item">
              <p className="results-display-item-part-number">
                {cyl.partNumber}
                {cyl.quantity > 1 && <span className="results-display-item-quantity"> (x{cyl.quantity})</span>}
              </p>
              {cyl.description && <p className="results-display-item-description">{cyl.description}</p>}
              {cyl.notes && <p className="results-display-item-notes">{cyl.notes}</p>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResultsDisplay;