// src/components/CylinderBreakdown.js
import React from 'react';
import './CylinderBreakdown.css';

// A simple component to highlight search matches
const Highlight = ({ text = '', highlight = '' }) => {
    if (!highlight.trim()) {
        return <span>{text}</span>;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
        <span>
            {parts.map((part, i) =>
                regex.test(part) ? <strong key={i} className="highlighted-text">{part}</strong> : <span key={i}>{part}</span>
            )}
        </span>
    );
};


const CylinderBreakdown = React.memo(({ imageUrl, parts, searchTerm }) => {
    if (!parts || parts.every(part => part.components.length === 0)) {
        return (
            <p className="no-parts-message">
                No parts available for this selection.
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
                            <h4 className="part-name">
                                {part.partNumberLabel && <span className="part-number-indicator">{part.partNumberLabel}</span>}
                                <Highlight text={part.name} highlight={searchTerm} />
                            </h4>
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
                                                                        <Highlight text={row[header]} highlight={searchTerm} />
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
                                            <span className="component-part-number">
                                                <Highlight text={component.partNumber} highlight={searchTerm} />
                                            </span>
                                            <span className="component-description">
                                                <Highlight text={component.description} highlight={searchTerm} />
                                            </span>
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