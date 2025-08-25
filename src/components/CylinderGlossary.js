// src/components/CylinderGlossary.js
import React, { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { glossaryData } from '../data/glossaryData';
import CylinderBreakdown from './CylinderBreakdown';
import { SearchIcon, WrenchIcon, ClearIcon } from './Icons';
import './CylinderGlossary.css';

// Flatten the data for searching, ensuring each part knows its cylinder parent
const allParts = glossaryData.cylinderTypes.flatMap(cylinder =>
    cylinder.parts.map(part => ({
        ...part,
        cylinderName: cylinder.name,
        cylinderId: cylinder.id,
        cylinderImageUrl: cylinder.imageUrl // Pass image URL for the header
    }))
);

// Fuse.js options for search relevance
const fuseOptions = {
    keys: [
        { name: 'cylinderName', weight: 0.5 },
        { name: 'name', weight: 0.3 },
        { name: 'components.partNumber', weight: 0.2 }, // Boosted weight for direct part numbers
        { name: 'components.rows.Part Number', weight: 0.2 }, // Add support for tables with a single "Part Number" column
        { name: 'components.rows.Catalog Part #', weight: 0.2 }, // Add support for other table part number columns
        { name: 'components.rows.6 Pin Plug Part Number', weight: 0.2 }, // Add support for other table part number columns
        { name: 'components.rows.7 Pin Plug Part Number', weight: 0.2 }, // Add support for other table part number columns
        { name: 'components.rows.Part Number', weight: 0.2 }, // Add support for other table part number columns
        { name: 'components.rows.Cam Part # When Ordered Separately', weight: 0.2 }, // Add support for other table part number columns
        { name: 'components.description', weight: 0.05 }
    ],
    includeScore: true,
    threshold: 0.3,
    minMatchCharLength: 2,
};

const fuse = new Fuse(allParts, fuseOptions);

function CylinderGlossary() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCylinderType, setSelectedCylinderType] = useState('all');
    const [openCylinderId, setOpenCylinderId] = useState(null);

    const handleToggleCylinder = (cylinderId) => {
        setOpenCylinderId(prevId => (prevId === cylinderId ? null : cylinderId));
    };

    const searchResults = useMemo(() => {
        if (!searchTerm) return [];
        const results = fuse.search(searchTerm);

        // Custom sorting to prioritize specific cylinder types
        results.sort((a, b) => {
            const aName = a.item.cylinderName.toLowerCase();
            const bName = b.item.cylinderName.toLowerCase();
            const priorityKeywords = ['mortise cylinder', 'rim cylinder', 'bored locks cylinder'];

            let aPriority = priorityKeywords.findIndex(keyword => aName.includes(keyword));
            let bPriority = priorityKeywords.findIndex(keyword => bName.includes(keyword));

            if (aPriority === -1) aPriority = priorityKeywords.length;
            if (bPriority === -1) bPriority = priorityKeywords.length;

            if (aPriority !== bPriority) {
                return aPriority - bPriority;
            }

            return a.score - b.score;
        });

        return results.map(result => result.item);
    }, [searchTerm]);

    const displayedCylinders = useMemo(() => {
        if (searchTerm) {
            const grouped = searchResults.reduce((acc, part) => {
                if (!acc[part.cylinderId]) {
                    acc[part.cylinderId] = {
                        id: part.cylinderId,
                        name: part.cylinderName,
                        imageUrl: part.cylinderImageUrl,
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

    React.useEffect(() => {
        if (!searchTerm && selectedCylinderType !== 'all') {
            setOpenCylinderId(selectedCylinderType);
        } else if (!searchTerm) {
            setOpenCylinderId(null);
        }
    }, [selectedCylinderType, searchTerm]);

    const isInitialState = !searchTerm && selectedCylinderType === 'all';

    return (
        <div className="glossary-container">
            <h2 className="glossary-title">Parts Glossary</h2>
            <div className="glossary-controls">
                <div className="search-bar-wrapper">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search for parts by name or number (e.g., 'cam', 'rim')..."
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
                    <div key={cylinder.id} className={`cylinder-section ${openCylinderId === cylinder.id ? 'open' : ''}`}>
                        <button className="cylinder-section-header" onClick={() => handleToggleCylinder(cylinder.id)}>
                            <img src={cylinder.imageUrl} alt={`${cylinder.name} diagram`} className="header-image" />
                            <h3 className="cylinder-section-title">{cylinder.name}</h3>
                             <span className="toggle-icon">{openCylinderId === cylinder.id ? '▲' : '▼'}</span>
                        </button>
                        {openCylinderId === cylinder.id && (
                            <div className="cylinder-section-parts">
                                <CylinderBreakdown
                                    imageUrl={cylinder.imageUrl}
                                    parts={cylinder.parts}
                                    searchTerm={searchTerm}
                                />
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p className="no-results-message">No parts found. Try adjusting your search or filters.</p>
            )}
        </div>
    );
}

export default CylinderGlossary;