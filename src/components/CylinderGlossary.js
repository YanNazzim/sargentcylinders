// src/components/CylinderGlossary.js
import React, { useState } from 'react';
import { glossaryData } from '../data/glossaryData';
import CylinderBreakdown from './CylinderBreakdown';
import './CylinderGlossary.css';

function CylinderGlossary() {
  const [selectedCylinderId, setSelectedCylinderId] = useState(glossaryData.cylinderTypes[0].id);

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