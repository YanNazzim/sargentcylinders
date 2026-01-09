// src/components/ResultsDisplay.js
import React from 'react';
import './ResultsDisplay.css'; 
import { images } from '../images/images';

const COLLAR_SEPARATE_NOTE = "NOTE: This collar/rosette is always ordered separately (does NOT come with cylinder by default).";

function ResultsDisplay({ cylinders }) {
  // CRITICAL FIX: Ensure cylinders is defined and is an array before checking length
  if (!cylinders || !Array.isArray(cylinders)) {
    return null; // Or return a loading spinner / error message
  }

  return (
    <div className="results-display-container">
      <h3 className="results-display-heading">Required Cylinders & Collars</h3>
      {cylinders.length === 0 ? (
        <p className="results-display-empty-message">No cylinders required for this configuration (e.g., Passage/Dummy functions).</p>
      ) : (
        <div className="results-display-list">
          {cylinders.map((cyl, index) => {
            // Extra safety check for individual items
            if (!cyl) return null;
            
            return (
                <div key={index} className={`results-display-item ${cyl.collars && cyl.collars.length > 0 ? 'has-collar' : ''}`}>
                  <div className="cylinder-info">
                    <p className="results-display-item-role-label">**{cyl.role}**</p>
                    <img src={cyl.imageUrl || images.sargentlogo} alt={cyl.partNumber} className="item-image" />
                    
                    <p className="results-display-item-part-number">
                      {cyl.partNumber}
                      {cyl.quantity > 1 && <span className="results-display-item-quantity"> (QTY: {cyl.quantity})</span>}
                    </p>
                    
                    {cyl.description && <p className="results-display-item-description">{cyl.description}</p>}
                    
                    {/* CORE DETAILS */}
                    {cyl.coreDetails && (
                        <div className="core-details-box core-included">
                            <p className="core-title">Core Required:</p>
                            <p className="core-part-number-text">{cyl.coreDetails.partNumber}</p>
                            <p className="core-description-text">{cyl.coreDetails.description}</p>
                        </div>
                    )}
                    
                    {cyl.notes && <p className="results-display-item-notes">{cyl.notes}</p>}
                  </div>
                  
                  {/* COLLAR DISPLAY */}
                  {cyl.collars && cyl.collars.length > 0 && (
                    <div className="collar-info">
                      <h4 className="collar-sub-heading">REQUIRED COLLAR / ROSE</h4>
                      {cyl.collars.map((collar, collarIndex) => (
                        <div key={`collar-${index}-${collarIndex}`} className="collar-item">
                            <img src={collar.imageUrl || images.sargentlogo} alt={collar.partNumber} className="item-image" />
                            <p className="results-display-item-part-number">
                              {collar.partNumber}
                              {collar.projection && <span className="results-display-item-quantity"> ({collar.projection} Proj.)</span>}
                            </p>
                            <p className="results-display-item-description">{collar.description}</p>
                            <p className="results-display-item-notes warning-note">{COLLAR_SEPARATE_NOTE}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ResultsDisplay;