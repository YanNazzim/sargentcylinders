// src/App.js
import React, { useState, Suspense, lazy } from 'react';
import FeedbackModal from './components/FeedbackModal';
import { LockIcon, WrenchIcon, QuestionMarkIcon, ChatIcon } from './components/Icons';
import './App.css';
import TechSupportHubBanner from './components/TechSupportHubBanner'; // IMPORT NEW COMPONENT
import { images } from './images/images';
const CylinderFinder = lazy(() => import('./components/CylinderFinder'));
const CylinderGlossary = lazy(() => import('./components/CylinderGlossary'));
const CylinderFAQ = lazy(() => import('./components/CylinderFAQ'));

const NavButton = ({ toolId, label, icon, activeTool, setActiveTool }) => (
    <button
        onClick={() => setActiveTool(toolId)}
        className={`nav-button ${activeTool === toolId ? 'active' : ''}`}
        // ADDED ARIA ATTRIBUTES for ADA Compliance
        role="tab"
        aria-selected={activeTool === toolId}
        aria-controls={`panel-${toolId}`}
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
      {/* NEW FIXED HEADER / NAVBAR */}
      <header className="app-header-fixed">
        <div className="header-content-wrapper">
            <div className="app-branding">
                <img className="logo" src={images.sargentlogo} alt='Sargent Logo'/>
                <div className="title-group">
                    <h1 className="app-title">Sargent Cylinders</h1>
                    <h2 className="app-subtitle">Cylinder Selection & Information Tool</h2>
                </div>
            </div>
            
            {/* NAVIGATION IS MOVED HERE */}
            <nav className="app-navigation" role="tablist">
                <NavButton toolId="finder" label="Cylinder Finder" icon={<LockIcon />} activeTool={activeTool} setActiveTool={setActiveTool} />
                <NavButton toolId="parts" label="Parts Glossary" icon={<WrenchIcon />} activeTool={activeTool} setActiveTool={setActiveTool} />
                <NavButton toolId="faq" label="Cylinders FAQ" icon={<QuestionMarkIcon />} activeTool={activeTool} setActiveTool={setActiveTool} />
            </nav>
        </div>
      </header>

      <div className="app-container">
        {/* REMOVED: Old `app-header` content is now in the fixed bar */}
        
        <main className="app-main">
            <div role="tabpanel" id={`panel-${activeTool}`}>
              <Suspense fallback={<div>Loading...</div>}>
                {renderTool()}
              </Suspense>
            </div>
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
        <TechSupportHubBanner />

      <FeedbackModal 
        isOpen={isFeedbackModalOpen} 
        onClose={() => setIsFeedbackModalOpen(false)} 
      />
    </>
  );
}