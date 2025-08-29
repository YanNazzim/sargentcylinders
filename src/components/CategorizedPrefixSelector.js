// src/components/CategorizedPrefixSelector.js
import React, { useState, useMemo, useEffect } from 'react';
import './CategorizedPrefixSelector.css';

// REMOVE the `searchTerm` prop from here, we will manage it internally
function CategorizedPrefixSelector({ categories, selectedPrefixes, onChange }) {
  const [openCategory, setOpenCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // NEW state for the internal search term

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return categories;

    const lowercasedSearchTerm = searchTerm.toLowerCase();

    return categories
      .map(category => {
        const categoryNameMatches = category.name.toLowerCase().includes(lowercasedSearchTerm);

        const matchingPrefixes = category.prefixes.filter(prefix =>
          prefix.id.toLowerCase().includes(lowercasedSearchTerm) ||
          prefix.description.toLowerCase().includes(lowercasedSearchTerm) ||
          (prefix.keywords && prefix.keywords.some(keyword => keyword.toLowerCase().includes(lowercasedSearchTerm)))
        );

        if (categoryNameMatches) {
          return category;
        }

        if (matchingPrefixes.length > 0) {
          return {
            ...category,
            prefixes: matchingPrefixes
          };
        }

        return null;
      })
      .filter(Boolean);
  }, [categories, searchTerm]);

  useEffect(() => {
    if (searchTerm && filteredCategories.length > 0) {
      setOpenCategory(filteredCategories[0].name);
    } else if (!searchTerm) {
      setOpenCategory(null);
    }
  }, [searchTerm, filteredCategories]);

  const toggleCategory = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="categorized-prefix-selector-container">
      <div className="prefix-search-wrapper">
        <input
          type="text"
          placeholder="Search prefixes by name, number, or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // USE the internal state handler
          className="prefix-search-bar"
        />
      </div>

      {filteredCategories.map((category) => (
        <div key={category.name} className={`category-group ${openCategory === category.name || searchTerm ? 'open' : ''}`}>
          <button
            className="category-header"
            onClick={() => toggleCategory(category.name)}
            aria-expanded={openCategory === category.name}
            aria-controls={`category-content-${category.name.replace(/ /g, '-')}`}
          >
            <span className="category-title">{category.name}</span>
            <span className="toggle-icon">{openCategory === category.name ? '▲' : '▼'}</span>
          </button>
          <div
            id={`category-content-${category.name.replace(/ /g, '-')}`}
            className="category-content"
            role="region"
          >
            {category.prefixes.length === 0 ? (
              <p className="no-options-message">No options in this category.</p>
            ) : (
              <div className="prefix-list">
                {category.prefixes.map((prefix) => (
                  <label
                    key={prefix.id}
                    className={`prefix-item-label ${selectedPrefixes.includes(prefix.id) ? 'selected' : ''}`}
                    data-tooltip={prefix.description}
                  >
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