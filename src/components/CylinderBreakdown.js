// src/components/CylinderBreakdown.js
import React, { useState } from 'react';
import './CylinderBreakdown.css';

function CylinderBreakdown({ imageUrl, parts }) {
    const [activePart, setActivePart] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseOver = (part, event) => {
        setActivePart(part);
        setTooltipPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOut = () => {
        setActivePart(null);
    };

    return (
        <div className="breakdown-container">
            <img src={imageUrl} alt="Cylinder Breakdown" className="breakdown-image" />
            {parts.map(part => (
                <div
                    key={part.id}
                    className="hotspot"
                    style={{
                        top: `${part.coordinates[0]}px`,
                        left: `${part.coordinates[1]}px`,
                        width: `${part.coordinates[2]}px`,
                        height: `${part.coordinates[3]}px`,
                    }}
                    onMouseOver={(e) => handleMouseOver(part, e)}
                    onMouseOut={handleMouseOut}
                />
            ))}
            {activePart && (
                <div
                    className="tooltip"
                    style={{
                        top: `${tooltipPosition.y + 15}px`,
                        left: `${tooltipPosition.x + 15}px`,
                    }}
                >
                    <strong>{activePart.name}</strong><br />
                    Part #: {activePart.partNumber}
                </div>
            )}
        </div>
    );
}

export default CylinderBreakdown;