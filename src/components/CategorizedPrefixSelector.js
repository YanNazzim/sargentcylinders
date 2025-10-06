// src/components/CategorizedPrefixSelector.js
import React, { useState, useMemo } from 'react';
import './CategorizedPrefixSelector.css';

function CategorizedPrefixSelector({ categories, selectedPrefixes, onChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategoryId, setOpenCategoryId] = useState(null); 

  const handleToggle = (id) => {
    setOpenCategoryId(prevId => (prevId === id ? null : id));
  }

  const filteredCategories = useMemo(() => {
    if (!searchTerm) {
      return categories.filter(category => category.prefixes.length > 0);
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();

    return categories
      .map(category => {
        const matchingPrefixes = category.prefixes.filter(prefix =>
          prefix.id.toLowerCase().includes(lowercasedSearchTerm) ||
          prefix.description.toLowerCase().includes(lowercasedSearchTerm) ||
          (prefix.keywords && prefix.keywords.some(keyword => keyword.toLowerCase().includes(lowercasedSearchTerm)))
        );

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
    <div className="new-prefix-selector-container">
      <div className="prefix-search-wrapper">
        <input
          type="text"
          placeholder="Search prefixes by name, number, or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="prefix-search-bar"
        />
      </div>

      <div className="prefix-list-wrapper">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => {
            // Logic change: Only open if explicitly toggled (openCategoryId matches)
            const isCategoryOpen = openCategoryId === category.name; 

            return (
              // Only display group if there are results or no search term
              <div key={category.name} className={`prefix-category-group ${isCategoryOpen ? 'open' : ''}`}>
                <button 
                  className="prefix-category-toggle"
                  onClick={() => handleToggle(category.name)}
                  aria-expanded={isCategoryOpen}
                  aria-controls={`prefix-content-${category.name.replace(/\s/g, '-')}`}
                >
                  <h4 className="prefix-category-header">{category.name} ({category.prefixes.length})</h4>
                  <span className="toggle-icon">{isCategoryOpen ? '▲' : '▼'}</span>
                </button>
                
                {/* Content only visible when explicitly open */}
                {isCategoryOpen && ( 
                  <div 
                    className="prefix-content"
                    id={`prefix-content-${category.name.replace(/\s/g, '-')}`}
                  >
                    <div className="prefix-grid">
                      {category.prefixes.map((prefix) => (
                        <label
                          key={prefix.id}
                          className={`prefix-item-label ${selectedPrefixes.includes(prefix.id) ? 'selected' : ''}`}
                        >
                          <input
                            type="radio"
                            name="cylinderPrefix"
                            checked={selectedPrefixes.includes(prefix.id)}
                            onChange={() => onChange(prefix.id)}
                            className="prefix-item-radio"
                          />
                          <div className="prefix-item-content">
                            <span className="prefix-item-id">{prefix.id}</span>
                            <p className="prefix-item-description">{prefix.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="no-options-message">No prefixes found for your search.</div>
        )}
      </div>
    </div>
  );
}

export default CategorizedPrefixSelector;