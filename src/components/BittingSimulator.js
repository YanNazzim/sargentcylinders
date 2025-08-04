// src/components/BittingSimulator.js
import React, { useState, useEffect } from 'react';
import './BittingSimulator.css'; // New CSS file for this component

// For simplicity, we'll hardcode a 5-pin cylinder and a key for now.
// In a more advanced version, you could allow users to define bitting.
const defaultKeyBitting = [3, 4, 2, 5, 1]; // Example bitting (deeper cut = lower number, shallower cut = higher number for conventional)
const numPins = 5;
const pinSpacing = 40; // Pixels between pins
const cylinderHeight = 200;
const pinWidth = 20;
const keywayTop = 150;
const pinBaseHeight = 10; // Base height of all key pins without cuts

// Visual constants for key drawing
const keyBowWidth = 60;
const keyBowHeight = 30;
const keyBladeStart = keyBowWidth - 5; // Where the blade starts relative to the bow. This is the X-coordinate for the start of the key's cuts.
const keyBladeHeight = 20;
const keyBladeTipLength = 15; // The angled part at the end of the key
const keyShoulderLength = 10; // Flat part before first cut on the blade

const keyCutDepthUnit = 8; // Visual unit for how deep a cut is. Deeper cut, higher value.

// Function to calculate the visual Y position of a key cut relative to the top of the key blade
const calculateKeyCutYPosition = (bittingCut) => {
    // Assuming bitting cuts are typically 1-9 (or 0-9).
    // A smaller bittingCut number generally means a deeper cut on the key (lifts pin higher).
    // Let's invert for visual: higher cut number (shallower key cut) results in key material being lower.
    // So, cut '1' (deepest) will have a higher Y value (closer to top of blade)
    // Cut '5' (shallower) will have a lower Y value (closer to bottom of blade)
    // This is purely for visual effect; real bitting calculations are more complex.
    // Max cut depth visual = 5 (for bitting '1'), min cut depth visual = 1 (for bitting '5')
    return (bittingCut - 6) * keyCutDepthUnit;
};


function BittingSimulator() {
  const [keyInserted, setKeyInserted] = useState(false);
  const [keyVisualXPosition, setKeyVisualXPosition] = useState(0); // 0 = out, 1 = fully in

  useEffect(() => {
    // Reset key position when component mounts or unmounts, or for re-triggering
    setKeyVisualXPosition(0);
    setKeyInserted(false);
  }, []);

  const handleInsertKey = () => {
    setKeyInserted(true);
    // Animate key insertion
    let start = null;
    const duration = 800; // ms

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / duration;
      if (progress < 1) {
        setKeyVisualXPosition(progress);
        requestAnimationFrame(animate);
      } else {
        setKeyVisualXPosition(1); // Ensure it ends at fully inserted
      }
    };
    requestAnimationFrame(animate);
  };

  const handleRemoveKey = () => {
    setKeyInserted(false);
    // Animate key removal
    let start = null;
    const duration = 500; // ms

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = (timestamp - start) / duration;
      if (progress < 1) {
        setKeyVisualXPosition(1 - progress); // Go from 1 to 0
        requestAnimationFrame(animate);
      } else {
        setKeyVisualXPosition(0); // Ensure it ends at fully out
      }
    };
    requestAnimationFrame(animate);
  };

  const getPinYPosition = (pinIndex) => {
    const bittingCut = defaultKeyBitting[pinIndex];
    const liftAmount = (6 - bittingCut) * 5; // Adjust this multiplier for visual effect. 6 because max bitting is 5, lift 1 is deepest.

    if (keyInserted) {
      return keywayTop + pinBaseHeight - liftAmount;
    }
    return keywayTop + pinBaseHeight;
  };

  // Dynamically generate the key blade path data
  const generateKeyBladePath = () => {
    // Start from the key bow's right edge, then go to the start of the blade
    let pathData = `M ${keyBowWidth} ${keywayTop + (keyBladeHeight / 2)}`; 
    
    // Now, the critical change: the first point of the blade itself
    // is at `keyBladeStart` relative to the bow's `x=0`.
    pathData += `L ${keyBladeStart} ${keywayTop + (keyBladeHeight / 2)}`; // Go to the beginning of the flat shoulder
    pathData += `L ${keyBladeStart + keyShoulderLength} ${keywayTop + (keyBladeHeight / 2)}`; // Horizontal shoulder

    // Add bitting cuts
    defaultKeyBitting.forEach((cut, i) => {
      const currentX = keyBladeStart + keyShoulderLength + i * keyBladeTipLength; // Correct X calculation
      const nextX = keyBladeStart + keyShoulderLength + (i + 1) * keyBladeTipLength; // Correct X calculation
      const cutY = keywayTop + (keyBladeHeight / 2) + calculateKeyCutYPosition(cut); // Y position for the bottom of the cut

      // Horizontal line at the bottom of the cut
      pathData += `L ${currentX} ${cutY}`;
      pathData += `L ${nextX} ${cutY}`;
    });

    // End of the key blade (tip)
    const lastCutX = keyBladeStart + keyShoulderLength + numPins * keyBladeTipLength; // Correct X calculation for the last cut
    
    // Path for the key tip
    pathData += `L ${lastCutX} ${keywayTop + (keyBladeHeight / 2)}`; // Bring back up to the top of the blade level
    pathData += `L ${lastCutX + keyBladeTipLength} ${keywayTop + (keyBladeHeight / 2) - (keyBladeHeight / 4)}`; // Angle up to tip top
    pathData += `L ${lastCutX + keyBladeTipLength} ${keywayTop + (keyBladeHeight / 2) + (keyBladeHeight / 4)}`; // Angle down to tip bottom
    pathData += `L ${lastCutX} ${keywayTop + (keyBladeHeight / 2) + keyBladeHeight}`; // Back to the bottom of the last cut segment
    
    pathData += `L ${keyBladeStart} ${keywayTop + (keyBladeHeight / 2) + keyBladeHeight}`; // Run back along the bottom edge of the blade
    pathData += `Z`; // Close the path

    return pathData;
  };


  return (
    <div className="bitting-simulator-container">
      <h2 className="simulator-title">Interactive Bitting Simulator</h2>
      <h2 className="simulator-title">🛑 NOT READY FOR USE YET 🛑</h2>
      <p className="simulator-description">Watch how the key's cuts lift the pins to create the shear line.</p>

      <div className="simulator-controls">
        <button onClick={handleInsertKey} disabled={keyInserted} className="simulator-button">Insert Key</button>
        <button onClick={handleRemoveKey} disabled={!keyInserted && keyVisualXPosition === 0} className="simulator-button">Remove Key</button>
      </div>

      <svg width={numPins * pinSpacing + keyBowWidth + 100} height={cylinderHeight + 50} className="bitting-svg">
        {/* Background for cylinder body cutout for pins */}
        <rect x="0" y="0" width="100%" height={cylinderHeight} fill="#333" rx="10" ry="10" />

        {/* Keyway (simplified, a dark slot) */}
        <path d={`M 30 ${keywayTop} L ${numPins * pinSpacing + 70} ${keywayTop} L ${numPins * pinSpacing + 70} ${keywayTop + keyBladeHeight + 10} L 50 ${keywayTop + keyBladeHeight + 10} L 50 ${keywayTop + keyBladeHeight + 20} L 30 ${keywayTop + keyBladeHeight + 20} Z`} fill="#222" stroke="#444" strokeWidth="1"/>


        {/* Shear Line */}
        <line x1="0" y1={keywayTop} x2="100%" y2={keywayTop} stroke="red" strokeWidth="2" strokeDasharray="5,5" />
        <text x="10" y={keywayTop - 5} fill="red" fontSize="12" fontWeight="bold">Shear Line</text>


        {/* Pins */}
        {Array.from({ length: numPins }).map((_, i) => {
          const pinX = 50 + i * pinSpacing;
          const keyPinY = getPinYPosition(i);
          const driverPinHeight = keywayTop - keyPinY; // Driver pin fills gap from key pin top to shear line

          return (
            <g key={i}>
              {/* Spring */}
              <line x1={pinX + pinWidth / 2} y1="10" x2={pinX + pinWidth / 2} y2={keyPinY - 10} stroke="#999" strokeWidth="2" />
              {/* Driver Pin (upper part) */}
              <rect x={pinX} y={keyPinY - driverPinHeight} width={pinWidth} height={driverPinHeight} fill="#888" stroke="#555" strokeWidth="1" />
              {/* Key Pin (lower part) */}
              <rect x={pinX} y={keyPinY} width={pinWidth} height={cylinderHeight - keyPinY} fill="#bbb" stroke="#555" strokeWidth="1" />
            </g>
          );
        })}

        {/* Key (animates horizontally) */}
        {/* Adjusted transform range: key will slide into the keyway starting from the right. */}
        {/* Calculate total key length for proper translation: bow + shoulder + (numPins * segment_length) + tip_length */}
        <g transform={`translate(${keyVisualXPosition * (50 - (keyBowWidth + keyShoulderLength + numPins * keyBladeTipLength + keyBladeTipLength)) + (keyBowWidth + keyShoulderLength + numPins * keyBladeTipLength + keyBladeTipLength)}, 0)`}>
          {/* Key Bow */}
          <rect x="0" y={keywayTop + keyBladeHeight / 2 - keyBowHeight / 2} width={keyBowWidth} height={keyBowHeight} fill="#cc9900" rx="5" ry="5" stroke="#886600" strokeWidth="1" />
          
          {/* Key Blade Path */}
          <path d={generateKeyBladePath()} fill="#cc9900" stroke="#886600" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

export default BittingSimulator;