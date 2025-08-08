// src/components/CylinderGlossary.js
import React, { useState } from 'react';
import { glossaryData } from '../data/glossaryData';
import CylinderBreakdown from './CylinderBreakdown';
import './CylinderGlossary.css';

function CylinderGlossary() {
  const [selectedCylinderType, setSelectedCylinderType] = useState(glossaryData.cylinderTypes[0].id);

  const selectedCylinder = glossaryData.cylinderTypes.find(c => c.id === selectedCylinderType);

  const handleCylinderTypeChange = (event) => {
    setSelectedCylinderType(event.target.value);
  };

  return (
    <div className="glossary-container">
      <h2 className="glossary-title">Parts Glossary</h2>
      <div className="glossary-selector-container">
        <label htmlFor="cylinder-type-selector" className="glossary-selector-label">Select Cylinder Type:</label>
        <select
          id="cylinder-type-selector"
          value={selectedCylinderType}
          onChange={handleCylinderTypeChange}
          className="glossary-selector-select"
        >
          {glossaryData.cylinderTypes.map(cylinder => (
            <option key={cylinder.id} value={cylinder.id}>
              {cylinder.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCylinder && (
        <CylinderBreakdown
          imageUrl={selectedCylinder.imageUrl}
          parts={selectedCylinder.parts}
        />
      )}
    </div>
  );
}

export default CylinderGlossary;