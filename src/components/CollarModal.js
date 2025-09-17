// src/components/CollarModal.js
import React from 'react';
import './CollarModal.css';

function CollarModal({ isOpen, onClose, collars }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>×</button>
        <h2 className="modal-title">Collar Recommendations</h2>
        {collars.length === 1 ? (
          <div className="single-collar-result">
            <img src={collars[0].imageUrl} alt={collars[0].partNumber} className="collar-image" />
            <div className="collar-info">
              <p className="collar-part-number">{collars[0].partNumber}</p>
              <p className="collar-description">{collars[0].description}</p>
            </div>
          </div>
        ) : (
          <div className="collar-table-container">
            <table className="collar-table">
              <thead>
                <tr>
                  <th>Part Number</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {collars.map((collar, index) => (
                  <tr key={index}>
                    <td data-label="Part Number">{collar.partNumber}</td>
                    <td data-label="Description">{collar.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default CollarModal;