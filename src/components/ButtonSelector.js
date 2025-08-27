import React from 'react';
import './ButtonSelector.css';

function ButtonSelector({ title, options, selected, onSelect, hasImages = true }) {
  const handleSelect = (value) => {
    onSelect(value);
  };

  return (
    <div className={`button-selector-container ${hasImages ? '' : 'no-images'}`}>
      {title && <h3 className="button-selector-title">{title}</h3>}
      <div className="button-grid">
        {options.map((option) => (
          <button
            key={option.id}
            className={`selection-button ${selected === option.id ? 'active' : ''} ${hasImages ? '' : 'text-only'}`}
            onClick={() => handleSelect(option.id)}
          >
            {hasImages && option.imageUrl && (
              <img src={option.imageUrl} alt={option.name} className="selection-button-image" />
            )}
            <span className="selection-button-label">{option.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ButtonSelector;