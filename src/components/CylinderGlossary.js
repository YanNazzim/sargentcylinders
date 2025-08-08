// src/components/CylinderGlossary.js
import React, { useState } from 'react';
import { glossaryData } from '../data/glossaryData';
import { glossaryCategories } from '../data/glossaryCategories';
import CylinderBreakdown from './CylinderBreakdown';
import './CylinderGlossary.css';

function CylinderGlossary() {
  const cylinderOptions = ['mortise', 'bored-locks', 'rim']
    .map((id) => glossaryData.cylinderTypes.find((c) => c.id === id))
    .filter(Boolean);

  const [selectedTypeId, setSelectedTypeId] = useState(cylinderOptions[0].id);
  const [selectedCategoryId, setSelectedCategoryId] = useState(glossaryCategories[0].id);

  const selectedCylinder = cylinderOptions.find((c) => c.id === selectedTypeId);
  const showParts = selectedCylinder && selectedCylinder.parts.length > 0;

  return (
    <div className="glossary-container">
      <h2 className="glossary-title">Cylinder Parts Glossary</h2>

      <div className="glossary-selector-container">
        <label htmlFor="type-select" className="glossary-selector-label">
          Select cylinder:
        </label>
        <select
          id="type-select"
          value={selectedTypeId}
          onChange={(e) => setSelectedTypeId(e.target.value)}
          className="glossary-selector-select"
        >
          {cylinderOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      <div className="glossary-selector-container">
        <label htmlFor="category-select" className="glossary-selector-label">
          Select type:
        </label>
        <select
          id="category-select"
          value={selectedCategoryId}
          onChange={(e) => setSelectedCategoryId(e.target.value)}
          className="glossary-selector-select"
        >
          {glossaryCategories.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>

      {showParts ? (
        selectedCylinder && selectedCylinder.parts.length > 0 ? (
          <CylinderBreakdown
            imageUrl={selectedCylinder.imageUrl}
            parts={selectedCylinder.parts}
          />
        ) : (
          <p className="no-parts-message">No parts available for this selection.</p>
        )
      ) : null}
    </div>
  );
}

export default CylinderGlossary;

