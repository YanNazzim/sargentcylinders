// src/components/CylinderBreakdown.js
import React from 'react';
import './CylinderBreakdown.css';

const CylinderBreakdown = React.memo(({ imageUrl, parts }) => {
    if (!parts || parts.every(part => part.components.length === 0)) {
        return (
            <p className="no-parts-message">
                No parts available for the selected keying system.
            </p>
        );
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
                            <h4 className="part-name">{part.name}</h4>
                        </div>
                        <ul className="components-list">
                            {part.components.map((component, index) => {
                                if (component.isTable) {
                                    // Use responsive-table class for tables with 4 or more columns
                                    const tableClassName = component.headers.length >= 4 ? "glossary-table responsive-table" : "glossary-table";
                                    return (
                                        <li key={index} className="component-item-table">
                                            <p className="component-description">{component.description}</p>
                                            <div className="table-wrapper">
                                                <table className={tableClassName}>
                                                    <thead>
                                                        <tr>
                                                            {component.headers.map(header => <th key={header}>{header}</th>)}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {component.rows.map((row, rowIndex) => (
                                                            <tr key={rowIndex}>
                                                                {component.headers.map(header => (
                                                                    <td key={header} data-label={header}>
                                                                        {row[header]}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={index} className="component-item">
                                            <span className="component-part-number">{component.partNumber}</span>
                                            <span className="component-description">{component.description}</span>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default CylinderBreakdown;