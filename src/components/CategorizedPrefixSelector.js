import React, { useState, useMemo } from 'react';
import './CategorizedPrefixSelector.css';

function CategorizedPrefixSelector({ categories, selectedPrefixes, onChange, searchTerm }) {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (categoryName) => {
    setOpenCategory(openCategory === categoryName ? null : categoryName);
  };

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

  return (
    <div className="categorized-prefix-selector-container">
      {filteredCategories.map((category) => (
        <div key={category.name} className={`category-group ${openCategory === category.name ? 'open' : ''}`}>
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
            aria-labelledby={`category-header-${category.name.replace(/ /g, '-')}`}
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