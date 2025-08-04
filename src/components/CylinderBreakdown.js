// src/components/CylinderBreakdown.js
import React from 'react';
import './CylinderBreakdown.css';

const CylinderBreakdown = React.memo(({ imageUrl, parts }) => {
    if (!parts) {
        return null;
    }

    return (
        <div className="breakdown-container">
            <div className="breakdown-image-wrapper">
                 <img src={imageUrl} alt="Cylinder Breakdown" className="breakdown-image" />
            </div>

            <div className="parts-list">
                {parts.map(part => (
                    <div key={part.id} className="part-card">
                        <div className="part-card-header">
                            <span className="part-item-number">{part.id}</span>
                            <h4 className="part-name">{part.name}</h4>
                        </div>
                        <ul className="components-list">
                            {part.components.map((component, index) => (
                                <li key={index} className="component-item">
                                    <span className="component-part-number">{component.partNumber}</span>
                                    <span className="component-description">{component.description}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default CylinderBreakdown;