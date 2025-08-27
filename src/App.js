// src/App.js
import React, { useState, Suspense, lazy } from 'react';
import FeedbackModal from './components/FeedbackModal';
import { LockIcon, WrenchIcon, QuestionMarkIcon, ChatIcon } from './components/Icons';
import './App.css';
import { images } from './images/images';
const CylinderFinder = lazy(() => import('./components/CylinderFinder'));
const CylinderGlossary = lazy(() => import('./components/CylinderGlossary'));
const CylinderFAQ = lazy(() => import('./components/CylinderFAQ'));

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
  const [activeTool, setActiveTool] = useState('finder');
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const renderTool = () => {
    switch (activeTool) {
      case 'finder':
        return <CylinderFinder />;
      case 'parts':
        return <CylinderGlossary />;
      case 'faq':
        return <CylinderFAQ />;
      default:
        return <CylinderFinder />;
    }
  };

  return (
    <>
      <div className="app-container">
        <header className="app-header">
          <img className="logo" src={images.sargentlogo} alt='logo'/>
          <h1 className="app-title">Sargent Cylinders</h1>
        </header>

        <nav className="app-navigation">
          <NavButton toolId="finder" label="Cylinder Finder" icon={<LockIcon />} activeTool={activeTool} setActiveTool={setActiveTool} />
          <NavButton toolId="parts" label="Parts Glossary" icon={<WrenchIcon />} activeTool={activeTool} setActiveTool={setActiveTool} />
          <NavButton toolId="faq" label="Cylinders FAQ" icon={<QuestionMarkIcon />} activeTool={activeTool} setActiveTool={setActiveTool} />
        </nav>

        <main className="app-main">
          <Suspense fallback={<div>Loading...</div>}>
            {renderTool()}
          </Suspense>
        </main>
      </div>

      <footer className="app-footer">
        <button 
          className="footer-feedback-button" 
          onClick={() => setIsFeedbackModalOpen(true)}
          title="Feedback/Suggestions"
        >
          <ChatIcon />
        </button>
      </footer>

      <FeedbackModal 
        isOpen={isFeedbackModalOpen} 
        onClose={() => setIsFeedbackModalOpen(false)} 
      />
    </>
  );
}