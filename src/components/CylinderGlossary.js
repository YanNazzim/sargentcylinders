// src/components/CylinderGlossary.js
import React, { useState } from 'react';
import { glossaryData } from '../data/glossaryData';
import { glossaryCategories } from '../data/glossaryCategories';
import CylinderBreakdown from './CylinderBreakdown';
import './CylinderGlossary.css';

function CylinderGlossary() {
  const [selectedCylinderId, setSelectedCylinderId] = useState(glossaryCategories[0].options[0].id);

  const selectedCylinder = glossaryData.cylinderTypes.find(c => c.id === selectedCylinderId);

  return (
    <div className="glossary-container">
      <h2 className="glossary-title">Cylinder Parts Glossary</h2>
      <div className="glossary-selector-container">
        <label htmlFor="cylinder-select" className="glossary-selector-label">Choose a cylinder type:</label>
        <select
          id="cylinder-select"
          value={selectedCylinderId}
          onChange={(e) => setSelectedCylinderId(e.target.value)}
          className="glossary-selector-select"
        >
          {glossaryCategories.map(group => (
            <optgroup key={group.label} label={group.label}>
              {group.options.map(option => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {selectedCylinder && selectedCylinder.parts.length > 0 ? (
        <CylinderBreakdown
          imageUrl={selectedCylinder.imageUrl}
          parts={selectedCylinder.parts}
        />
      ) : (
        <p className="no-parts-message">No parts available for this selection.</p>
      )}
    </div>
  );
}

export default CylinderGlossary;
