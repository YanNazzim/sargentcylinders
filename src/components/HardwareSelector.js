// src/components/HardwareSelector.js
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import './HardwareSelector.css';
import { SearchIcon, ExpandIcon } from './Icons'; // Ensure ExpandIcon is imported or use a simple text arrow

function CustomSelect({ label, options, value, onChange, disabled = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);

    // Find the currently selected option object
    const selectedOption = useMemo(() => 
        options.flatMap(group => group.options).find(opt => opt.value === value), 
    [options, value]);

    // Handle selection
    const handleOptionClick = useCallback((optionValue, optionLabel) => {
        onChange(optionValue);
        setSearchTerm(optionLabel);
        setIsOpen(false);
        // Reset search focus
        if (inputRef.current) inputRef.current.blur();
    }, [onChange]);

    // Filter options based on search
    const filteredOptions = useMemo(() => {
        if (!searchTerm && document.activeElement !== inputRef.current) {
             // If not searching and not focused, usually we show everything or the selected group
             // But let's just show everything for the dropdown list
             return options;
        }
        
        // If the user is typing, filter the list
        // If the current search term matches the selected option exactly, don't filter (show all)
        // unless the user is actively typing to change it.
        if (selectedOption && searchTerm === selectedOption.label && !isOpen) {
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
    }, [options, searchTerm, selectedOption, isOpen]);

    // Sync local search input with prop value
    useEffect(() => {
        if (selectedOption) {
            setSearchTerm(selectedOption.label);
        } else if (!isOpen) {
            setSearchTerm('');
        }
    }, [selectedOption, isOpen]);

    // Click handler for the main input box
    const handleInputClick = () => {
        if (disabled) return;
        setIsOpen(prev => !prev);
        if (!isOpen && inputRef.current) {
            // If opening, clear search if it matches selection to allow fresh search
            if (selectedOption && searchTerm === selectedOption.label) {
                setSearchTerm(''); 
            }
            inputRef.current.focus();
        }
    };

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
                // Revert search term if no selection was made
                if (selectedOption) {
                    setSearchTerm(selectedOption.label);
                } else {
                    setSearchTerm('');
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [selectedOption]);

    const isSearchable = true; // Always treat as searchable for better UX

    return (
        <div 
            className={`hardware-selector-container ${disabled ? 'disabled' : ''} ${isOpen ? 'open-stacking' : ''}`} 
            ref={wrapperRef}
        >
            <label className="hardware-selector-label">{label}</label>
            
            <div className={`custom-select-wrapper ${isOpen ? 'focused' : ''}`} onClick={handleInputClick}>
                {/* Icon Left */}
                <div className="input-icon-wrapper">
                    <SearchIcon />
                </div>

                <input
                    ref={inputRef}
                    type="text"
                    className="custom-select-input"
                    value={searchTerm}
                    placeholder={selectedOption ? selectedOption.label : "Type to search..."}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        if (!isOpen) setIsOpen(true);
                    }}
                    disabled={disabled}
                    readOnly={!isSearchable}
                />

                {/* Arrow Indicator */}
                <div className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`}>
                    <ExpandIcon /> 
                </div>
            </div>
            
            {isOpen && (
                <div className="custom-select-dropdown">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map(group => (
                            <div key={group.label} className="dropdown-group">
                                {group.label !== "Available Models" && (
                                    <div className="dropdown-group-header">{group.label}</div>
                                )}
                                {group.options.map(option => (
                                    <div
                                        key={option.value}
                                        className={`dropdown-option ${option.value === value ? 'selected' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent bubbling to wrapper click
                                            handleOptionClick(option.value, option.label);
                                        }}
                                    >
                                        <div className="option-image-wrapper">
                                            <img 
                                                src={option.imageUrl} 
                                                alt="" 
                                                className="option-thumbnail" 
                                            />
                                        </div>
                                        <div className="option-details">
                                            <span className="option-name">{option.value}</span>
                                            <span className="option-desc">
                                                {option.label.replace(option.value, '').replace(/^ - /, '')}
                                            </span>
                                        </div>
                                        {option.value === value && <span className="check-mark">✓</span>}
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <div className="dropdown-no-results">
                            No matching models found.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default CustomSelect;