// src/components/CylinderGlossary.js
import React, { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { glossaryData } from '../data/glossaryData';
import CylinderBreakdown from './CylinderBreakdown';
import { SearchIcon, WrenchIcon, ClearIcon } from './Icons'; // Import ClearIcon
import './CylinderGlossary.css';

const allParts = glossaryData.cylinderTypes.flatMap(cylinder =>
    cylinder.parts.map(part => ({
        ...part,
        cylinderName: cylinder.name,
        cylinderId: cylinder.id,
        imageUrl: cylinder.imageUrl
    }))
);

const fuseOptions = {
    keys: ['name', 'components.partNumber', 'components.description'],
    includeScore: true,
    threshold: 0.4,
    minMatchCharLength: 2,
};

const fuse = new Fuse(allParts, fuseOptions);

function CylinderGlossary() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCylinderType, setSelectedCylinderType] = useState('all');

    const searchResults = useMemo(() => {
        if (!searchTerm) return [];
        return fuse.search(searchTerm).map(result => result.item);
    }, [searchTerm]);

    const displayedCylinders = useMemo(() => {
        if (searchTerm) {
            const grouped = searchResults.reduce((acc, part) => {
                if (!acc[part.cylinderId]) {
                    acc[part.cylinderId] = {
                        id: part.cylinderId,
                        name: part.cylinderName,
                        imageUrl: part.imageUrl,
                        parts: []
                    };
                }
                acc[part.cylinderId].parts.push(part);
                return acc;
            }, {});
            return Object.values(grouped);
        }
        if (selectedCylinderType === 'all') {
            return glossaryData.cylinderTypes;
        }
        return glossaryData.cylinderTypes.filter(c => c.id === selectedCylinderType);
    }, [searchTerm, searchResults, selectedCylinderType]);

    const isInitialState = !searchTerm && selectedCylinderType === 'all';

    return (
        <div className="glossary-container">
            <h2 className="glossary-title">Parts Glossary</h2>
            <div className="glossary-controls">
                <div className="search-bar-wrapper">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search for parts by name or number (e.g., 'cam', '13-0664')..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="glossary-search-bar"
                    />
                    {searchTerm && (
                        <button onClick={() => setSearchTerm('')} className="clear-search-button">
                            <ClearIcon />
                        </button>
                    )}
                </div>
                {!searchTerm && (
                    <div className="glossary-filter-buttons">
                        <button
                            onClick={() => setSelectedCylinderType('all')}
                            className={selectedCylinderType === 'all' ? 'active' : ''}
                        >
                            All Types
                        </button>
                        {glossaryData.cylinderTypes.map(cylinder => (
                            <button
                                key={cylinder.id}
                                onClick={() => setSelectedCylinderType(cylinder.id)}
                                className={selectedCylinderType === cylinder.id ? 'active' : ''}
                            >
                                {cylinder.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {isInitialState ? (
                 <div className="glossary-initial-view">
                    <WrenchIcon />
                    <h3>Welcome to the Parts Glossary</h3>
                    <p>Use the search bar above to find a specific part, or select a cylinder type to browse its components.</p>
                </div>
            ) : displayedCylinders.length > 0 ? (
                displayedCylinders.map(cylinder => (
                    <div key={cylinder.id} className="cylinder-section">
                        <h3 className="cylinder-section-title">{cylinder.name}</h3>
                        <CylinderBreakdown
                            imageUrl={cylinder.imageUrl}
                            parts={cylinder.parts}
                            searchTerm={searchTerm}
                        />
                    </div>
                ))
            ) : (
                <p className="no-results-message">No parts found. Try adjusting your search or filters.</p>
            )}
        </div>
    );
}

export default CylinderGlossary;