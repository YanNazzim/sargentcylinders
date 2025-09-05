// src/components/HardwareSelector.js
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import './HardwareSelector.css';

function CustomSelect({ label, options, value, onChange, disabled = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);

    const selectedOption = useMemo(() => options.flatMap(group => group.options).find(opt => opt.value === value), [options, value]);

    const handleOptionClick = useCallback((optionValue, optionLabel) => {
        onChange(optionValue);
        setSearchTerm(optionLabel);
        setIsOpen(false);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [onChange]);
    

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchTerm(query);
        if (!isOpen) {
            setIsOpen(true);
        }
    };
    
    const handleInputClick = () => {
        setIsOpen(prev => !prev);
        if (!isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    };
    
    const handleBlur = (e) => {
        if (!e.relatedTarget || !wrapperRef.current.contains(e.relatedTarget)) {
            setIsOpen(false);
            if (selectedOption) {
                setSearchTerm(selectedOption.label);
            } else {
                setSearchTerm('');
            }
        }
    };

    useEffect(() => {
        if (selectedOption) {
            setSearchTerm(selectedOption.label);
        } else {
            setSearchTerm('');
        }
    }, [selectedOption]);

    const filteredOptions = useMemo(() => {
        if (label !== "Model" || !searchTerm) {
            return options;
        }
        const lowercasedTerm = searchTerm.toLowerCase();
        return options.map(group => ({
            ...group,
            options: group.options.filter(option => 
                option.label.toLowerCase().includes(lowercasedTerm) || 
                option.value.toLowerCase().includes(lowercasedTerm)
            )
        })).filter(group => group.options.length > 0);
    }, [options, searchTerm, label]);
    
    const isSearchable = label === "Model";

    return (
        <div className={`hardware-selector-container ${disabled ? 'disabled' : ''}`} ref={wrapperRef} onBlur={handleBlur}>
            <label className="hardware-selector-label">{label}</label>
            <div className="custom-select-wrapper">
                {isSearchable ? (
                    <input
                        ref={inputRef}
                        type="text"
                        className="custom-select-input"
                        value={searchTerm}
                        placeholder={`-- Select ${label} --`}
                        onChange={handleSearchChange}
                        onClick={handleInputClick}
                        disabled={disabled}
                        readOnly={false}
                    />
                ) : (
                    <button
                        type="button"
                        className="custom-select-input"
                        onClick={handleInputClick}
                        disabled={disabled}
                    >
                        {selectedOption ? (
                            <div className="selected-option-content">
                                {selectedOption.imageUrl && <img src={selectedOption.imageUrl} alt={selectedOption.label} className="selected-option-image" />}
                                <span className="option-label">{selectedOption.label}</span>
                            </div>
                        ) : (
                            <span className="placeholder-label">-- Select {label} --</span>
                        )}
                    </button>
                )}
                <button
                    type="button"
                    className="dropdown-toggle"
                    onClick={handleInputClick}
                    disabled={disabled}
                >
                    {isOpen ? '▲' : '▼'}
                </button>
            </div>
            
            {isOpen && (
                <div className="custom-select-options" onMouseDown={(e) => e.preventDefault()}>
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map(group => (
                            <div key={group.label} className="option-group">
                                <div className="option-group-label">{group.label}</div>
                                {group.options.map(option => (
                                    <div
                                        key={option.value}
                                        className={`custom-option ${option.value === value ? 'selected' : ''}`}
                                        onMouseDown={() => handleOptionClick(option.value, option.label)}
                                    >
                                        {option.imageUrl && <img src={option.imageUrl} alt={option.label} className="option-image" />}
                                        <span className="option-label">{option.label}</span>
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <div className="no-options-message">No matches found.</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default CustomSelect;