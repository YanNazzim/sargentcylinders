// src/components/HardwareSelector.js
import React, { useState, useRef, useEffect, useCallback } from 'react';
import './HardwareSelector.css';

// Custom Dropdown component that supports options with images and optgroups
function CustomSelect({ label, options, value, onChange, disabled = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Find the currently selected option to display in the header
    const selectedOption = options.flatMap(group => group.options).find(opt => opt.value === value);

    const handleOptionClick = useCallback((optionValue) => {
        onChange(optionValue);
        setIsOpen(false);
    }, [onChange]);

    // Close the dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <div className={`hardware-selector-container ${disabled ? 'disabled' : ''}`} ref={wrapperRef}>
            <label className="hardware-selector-label">{label}</label>
            <button
                type="button"
                className="custom-select-button"
                onClick={() => setIsOpen(!isOpen)}
                disabled={disabled}
            >
                {selectedOption ? (
                    <div className="selected-option-content">
                        {selectedOption.imageUrl && <img src={selectedOption.imageUrl} alt={selectedOption.label} className="selected-option-image" />}
                        <span className="selected-option-label">{selectedOption.label}</span>
                    </div>
                ) : (
                    <span className="placeholder-label">-- Select {label} --</span>
                )}
            </button>
            {isOpen && (
                <div className="custom-select-options">
                    {options.map(group => (
                        <div key={group.label} className="option-group">
                            <div className="option-group-label">{group.label}</div>
                            {group.options.map(option => (
                                <div
                                    key={option.value}
                                    className={`custom-option ${option.value === value ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick(option.value)}
                                >
                                    {option.imageUrl && <img src={option.imageUrl} alt={option.label} className="option-image" />}
                                    <span className="option-label">{option.label}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CustomSelect;