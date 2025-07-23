// src/components/CategorizedPrefixSelector.js
import React, { useState, useMemo } from 'react';
import './CategorizedPrefixSelector.css';

function CategorizedPrefixSelector({ categories, selectedPrefixes, onChange, searchTerm }) {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return categories;
    return categories.map(category => ({
      ...category,
      prefixes: category.prefixes.filter(prefix =>
        prefix.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prefix.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(category => category.prefixes.length > 0);
  }, [categories, searchTerm]);

  return (
    <div className="categorized-prefix-selector-container">
      {filteredCategories.map((category) => (
        <div key={category.name} className={`category-group ${openCategory === category.name ? 'open' : ''}`}>
          <button
            className="category-header"
            onClick={() => toggleCategory(category.name)}
            aria-expanded={openCategory === category.name}
            aria-controls={`category-content-${category.name.replace(/\s/g, '-')}`}
          >
            <span className="category-title">{category.name}</span>
            <span className="toggle-icon">{openCategory === category.name ? '▲' : '▼'}</span>
          </button>
          <div
            id={`category-content-${category.name.replace(/\s/g, '-')}`}
            className="category-content"
            role="region"
            aria-labelledby={`category-header-${category.name.replace(/\s/g, '-')}`}
          >
            {category.prefixes.length === 0 ? (
              <p className="no-options-message">No options in this category.</p>
            ) : (
              <div className="prefix-list">
                {category.prefixes.map((prefix) => (
                  <label key={prefix.id} className="prefix-item-label" data-tooltip={prefix.description}>
                    <input
                      type="checkbox"
                      checked={selectedPrefixes.includes(prefix.id)}
                      onChange={() => onChange(prefix.id)}
                      className="prefix-item-checkbox"
                    />
                    <span className="prefix-item-text">{prefix.id}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorizedPrefixSelector;