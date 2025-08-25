import React from 'react';
import './ButtonSelector.css';

function ButtonSelector({ title, options, selected, onSelect }) {
  const handleSelect = (value) => {
    onSelect(value);
  };

  return (
    <div className="button-selector-container">
      {title && <h3 className="button-selector-title">{title}</h3>}
      <div className="button-grid">
        {options.map((option) => (
          <button
            key={option.id}
            className={`selection-button ${selected === option.id ? 'active' : ''}`}
            onClick={() => handleSelect(option.id)}
          >
            {option.imageUrl && (
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