// src/App.js
import React, { useState } from 'react';
import CylinderFinder from './components/CylinderFinder';
import Placeholder from './components/Placeholder';
import { LockIcon, KeyIcon, WrenchIcon } from './components/Icons'; // Import icons
import './App.css'; // Import global app styles
import { images } from './images/images';

// Component: NavButton (kept internal for simplicity, or could be moved)
const NavButton = ({ toolId, label, icon, activeTool, setActiveTool }) => (
    <button
        onClick={() => setActiveTool(toolId)}
        className={`nav-button ${activeTool === toolId ? 'active' : ''}`}
    >
        {icon}
        {label}
    </button>
);


// App Component (The Main Entry Point)
export default function App() {
  const [activeTool, setActiveTool] = useState('finder'); // 'finder', 'bitting', 'parts'

  const renderTool = () => {
    switch (activeTool) {
      case 'finder':
        return <CylinderFinder />;
      case 'bitting':
        return <Placeholder toolName="Interactive Bitting Simulator" />;
      case 'parts':
        return <Placeholder toolName="Cylinder Parts Glossary" />;
      default:
        return <CylinderFinder />;
    }
  };

  return (
    <div className="app-container"> {/* Replaced bg-gray-900 min-h-screen w-full text-white font-sans p-4 sm:p-8 flex flex-col items-center */}
      <header className="app-header"> {/* Replaced w-full max-w-4xl mx-auto mb-8 */}
        <img className="logo" src={images.sargentlogo} alt='logo'/>
        <h1 className="app-title">Sargent Cylinders</h1> {/* Replaced text-4xl font-extrabold text-center mb-2 text-white */}
        <p className="app-subtitle">Keys, Bits, and cores.. OH MY</p> {/* Replaced text-center text-gray-400 */}
      </header>

      <nav className="app-navigation"> {/* Replaced flex justify-center space-x-2 sm:space-x-4 mb-8 p-2 bg-gray-800 rounded-lg shadow-md border border-gray-700 */}
        <NavButton toolId="finder" label="Cylinder Finder" icon={<LockIcon />} activeTool={activeTool} setActiveTool={setActiveTool} />
        <NavButton toolId="bitting" label="Bitting Simulator" icon={<KeyIcon />} activeTool={activeTool} setActiveTool={setActiveTool} />
        <NavButton toolId="parts" label="Parts Glossary" icon={<WrenchIcon />} activeTool={activeTool} setActiveTool={setActiveTool} />
      </nav>

      <main className="app-main"> {/* Replaced w-full */}
        {renderTool()}
      </main>
    </div>
  );
}