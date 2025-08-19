// src/components/BittingSimulator.js
import React, { useState } from 'react';
import './BittingSimulator.css';

// --- CONFIGURATION ---
// Bitting: 0-9 scale. Correct bitting should lift every key pin to a height of 30.
const PINS_CONFIG = [
  { keyPinHeight: 12, driverPinHeight: 48, correctCut: 6 }, // Correct height is 30
  { keyPinHeight: 24, driverPinHeight: 36, correctCut: 2 },
  { keyPinHeight: 9, driverPinHeight: 51, correctCut: 7 },
  { keyPinHeight: 18, driverPinHeight: 42, correctCut: 4 },
  { keyPinHeight: 21, driverPinHeight: 39, correctCut: 3 },
];

const WRONG_KEY_BITTING = [8, 2, 4, 6, 1]; // An incorrect key bitting
const SHEAR_LINE_Y = 80;

// --- SIMULATOR COMPONENT ---
function BittingSimulator() {
  const [keyState, setKeyState] = useState('none'); // 'none', 'wrong', 'correct'
  const [isTurned, setIsTurned] = useState(false);

  const isUnlocked = keyState === 'correct';

  const getPinLift = (pinIndex) => {
    if (keyState === 'none') {
      return 0;
    }
    const bitting = keyState === 'correct' ? PINS_CONFIG[pinIndex].correctCut : WRONG_KEY_BITTING[pinIndex];
    // Each bitting number (0-9) corresponds to a 3px lift
    return (9 - bitting) * 3;
  };

  return (
    <div className="bitting-simulator-container">
      <h2 className="simulator-title">Pin Tumbler Lock Simulator</h2>
      <p className="simulator-description">
        Select a key to see how the pins interact with the <span className="shear-line-text">shear line</span>.
      </p>

      <div className="simulator-controls">
        <button onClick={() => setKeyState('none')} className={`simulator-button ${keyState === 'none' && 'active'}`}>No Key</button>
        <button onClick={() => setKeyState('wrong')} className={`simulator-button ${keyState === 'wrong' && 'active'}`}>Wrong Key</button>
        <button onClick={() => setKeyState('correct')} className={`simulator-button ${keyState === 'correct' && 'active'}`}>Correct Key</button>
        <button onClick={() => setIsTurned(!isTurned)} disabled={!isUnlocked} className={`simulator-button turn-button ${isUnlocked ? 'unlocked' : ''}`}>
          Turn Key
        </button>
      </div>

      <div className="svg-wrapper">
        <svg width="300" height="200" viewBox="0 0 300 200" className="bitting-svg">
          {/* Cylinder Housing */}
          <rect x="0" y="0" width="300" height={SHEAR_LINE_Y} className="cylinder-case" />
          
          {/* Keyway Slot in Housing */}
          <rect x="0" y={SHEAR_LINE_Y - 1} width="300" height="22" className="keyway-bg" />

          {/* Shear Line */}
          <line x1="0" y1={SHEAR_LINE_Y} x2="300" y2={SHEAR_LINE_Y} className="shear-line" />

          {/* Plug */}
          <g className={`plug ${isTurned && isUnlocked ? 'turned' : ''}`}>
            <rect x="0" y={SHEAR_LINE_Y} width="300" height="60" className="cylinder-plug" />
            
            {PINS_CONFIG.map((pin, i) => {
              const pinLift = getPinLift(i);
              const keyPinY = SHEAR_LINE_Y - pinLift;
              const driverPinY = keyPinY - pin.driverPinHeight;
              const springBottom = driverPinY;

              return (
                <g key={i} className="pin-stack" style={{ transform: `translateY(${pinLift}px)` }}>
                  {/* Springs are in the housing, so they don't rotate with the plug */}
                  <line x1={50 + i * 40 + 10} y1="20" x2={50 + i * 40 + 10} y2={springBottom} className="spring" />
                  <rect x={50 + i * 40} y={driverPinY} width="20" height={pin.driverPinHeight} rx="3" className="driver-pin" />
                  <rect x={50 + i * 40} y={keyPinY} width="20" height={pin.keyPin} rx="3" className="key-pin" />
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}

export default BittingSimulator;