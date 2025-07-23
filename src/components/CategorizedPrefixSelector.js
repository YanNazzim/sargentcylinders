// src/components/CategorizedPrefixSelector.js
import React, { useState } from 'react';
import './CategorizedPrefixSelector.css'; // You'll create this CSS file

function CategorizedPrefixSelector({ categories, selectedPrefixes, onChange }) {
  const [openCategory, setOpenCategory] = useState(null); // State to manage which category is open

  const toggleCategory = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="categorized-prefix-selector-container">
      {categories.map((category) => (
        <div key={category.name} className="category-group">
          <button
            className="category-header"
            onClick={() => toggleCategory(category.name)}
          >
            <span className="category-title">{category.name}</span>
            <span className="toggle-icon">{openCategory === category.name ? '▲' : '▼'}</span>
          </button>
          {openCategory === category.name && (
            <div className="category-content">
              {category.prefixes.length === 0 ? (
                <p className="no-options-message">No options in this category.</p>
              ) : (
                <div className="prefix-list">
                  {category.prefixes.map((prefix) => (
                    <label key={prefix.id} className="prefix-item-label">
                      <input
                        type="checkbox"
                        checked={selectedPrefixes.includes(prefix.id)}
                        onChange={() => onChange(prefix.id)}
                        className="prefix-item-checkbox"
                      />
                      <span className="prefix-item-text">{prefix.id} - {prefix.description}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CategorizedPrefixSelector;