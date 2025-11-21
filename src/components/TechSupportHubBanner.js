// src/components/TechSupportHubBanner.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// --- Animations ---
const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// --- Styled Components ---

const WidgetContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 9999; /* High z-index to float over everything */
  width: 320px;
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  padding: 20px;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  animation: ${slideIn} 0.5s ease-out forwards;
  display: flex;
  flex-direction: column;
  gap: 12px;

  /* Gradient border visual trick */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
    border-radius: 12px 12px 0 0;
  }

  /* Mobile Optimization: Full width card at bottom */
  @media (max-width: 480px) {
    bottom: 10px;
    left: 10px;
    right: 10px;
    width: auto; /* Auto width to fill available space minus margins */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  color: #777;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.2s;

  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Title = styled.h3`
  color: #fff;
  margin: 8px 0 0 0; /* Top margin for spacing from border */
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.3;
`;

const Subtitle = styled.p`
  color: #bdbdbd;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const HubLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white !important;
  text-decoration: none !important;
  padding: 10px 0;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
  box-shadow: 0 4px 12px rgba(37, 117, 252, 0.3);
  cursor: pointer;
  width: 100%;
  margin-top: 4px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(37, 117, 252, 0.5);
    filter: brightness(1.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

const TechSupportHubBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <WidgetContainer>
      <CloseButton 
        onClick={() => setIsVisible(false)} 
        aria-label="Close helper"
      >
        &times;
      </CloseButton>
      
      <Title>Need Sargent Tools?</Title>
      <Subtitle>
        Access the full suite of utilities at the Tech Support Gateway.
      </Subtitle>
      
      <HubLink 
        href="https://sargent-techsupport-hub.netlify.app/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Open Hub ↗
      </HubLink>
    </WidgetContainer>
  );
};

export default TechSupportHubBanner;