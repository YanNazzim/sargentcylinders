// src/components/HardwareSelector.js
import React, { useState, useMemo } from 'react';
import './HardwareSelector.css';
import { SearchIcon } from './Icons';

function HardwareSelector({ label, options, value, onChange }) {
    const [filterText, setFilterText] = useState('');

    // Filter logic: Match name or description
    // Safety check: ensure options is an array
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const safeOptions = Array.isArray(options) ? options : [];

    const filteredOptions = useMemo(() => {
        if (!filterText) return safeOptions;
        
        const lowerFilter = filterText.toLowerCase();
        return safeOptions.filter(opt => 
            (opt.value && opt.value.toLowerCase().includes(lowerFilter)) || 
            (opt.description && opt.description.toLowerCase().includes(lowerFilter))
        );
    }, [safeOptions, filterText]);

    return (
        <div className="hardware-grid-container">
            {/* 1. Inline Filter Bar */}
            <div className="hardware-filter-bar">
                <SearchIcon />
                <input 
                    type="text"
                    className="hardware-filter-input"
                    placeholder="Filter models..."
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    aria-label="Filter available models"
                />
            </div>

            {/* 2. Grid of Cards */}
            <div className="hardware-card-grid" role="listbox" aria-label={label}>
                {filteredOptions.length > 0 ? (
                    filteredOptions.map((opt) => (
                        <div 
                            key={opt.value}
                            role="option"
                            aria-selected={value === opt.value}
                            tabIndex={0}
                            className={`hardware-card ${value === opt.value ? 'selected' : ''}`}
                            onClick={() => onChange(opt.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    onChange(opt.value);
                                }
                            }}
                        >
                            <div className="hardware-card-img-wrapper">
                                <img src={opt.imageUrl} alt="" className="hardware-card-img" />
                            </div>
                            <div className="hardware-card-content">
                                <span className="hardware-card-title">{opt.value}</span>
                                {opt.description && (
                                    <span className="hardware-card-desc">
                                        {opt.description}
                                    </span>
                                )}
                            </div>
                            {value === opt.value && <div className="card-check-indicator">✓</div>}
                        </div>
                    ))
                ) : (
                    <div className="no-hardware-results">
                        No models match your filter.
                    </div>
                )}
            </div>
        </div>
    );
}

export default HardwareSelector;