// src/App.js
import React, { useState } from 'react';
import CylinderFinder from './components/CylinderFinder';
import BittingSimulator from './components/BittingSimulator';
import CylinderGlossary from './components/CylinderGlossary'; // Import the new component
import { LockIcon, KeyIcon, WrenchIcon } from './components/Icons';
import './App.css';
import { images } from './images/images';

const NavButton = ({ toolId, label, icon, activeTool, setActiveTool }) => (
    <button
        onClick={() => setActiveTool(toolId)}
        className={`nav-button ${activeTool === toolId ? 'active' : ''}`}
    >
        {icon}
        {label}
    </button>
);

export default function App() {
  const [activeTool, setActiveTool] = useState('finder'); // 'finder', 'bitting', 'parts'

  const renderTool = () => {
    switch (activeTool) {
      case 'finder':
        return <CylinderFinder />;
      case 'bitting':
        return <BittingSimulator />;
      case 'parts':
        return <CylinderGlossary />; // Render the new glossary component
      default:
        return <CylinderFinder />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img className="logo" src={images.sargentlogo} alt='logo'/>
        <h1 className="app-title">Sargent Cylinders</h1>
        <p className="app-subtitle">Keys, Bits, and cores.. OH MY</p>
      </header>

      <nav className="app-navigation">
        <NavButton toolId="finder" label="Cylinder Finder" icon={<LockIcon />} activeTool={activeTool} setActiveTool={setActiveTool} />
        <NavButton toolId="bitting" label="Bitting Simulator" icon={<KeyIcon />} activeTool={activeTool} setActiveTool={setActiveTool} />
        <NavButton toolId="parts" label="Parts Glossary" icon={<WrenchIcon />} activeTool={activeTool} setActiveTool={setActiveTool} />
      </nav>

      <main className="app-main">
        {renderTool()}
      </main>
    </div>
  );
}