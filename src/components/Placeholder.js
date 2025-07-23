// src/components/Placeholder.js
import React from 'react';
import './Placeholder.css'; // You'll create this CSS file

function Placeholder({ toolName }) {
    return (
        <div className="placeholder-card"> {/* Replaced bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-4xl mx-auto border border-gray-700 text-center */}
            <h2 className="placeholder-title">{toolName}</h2> {/* Replaced text-2xl font-bold text-white mb-4 */}
            <p className="placeholder-message">This feature is under construction. Come back soon!</p> {/* Replaced text-gray-400 */}
        </div>
    );
}

export default Placeholder;