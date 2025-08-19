// src/components/CylinderFAQ.js
import React, { useState } from 'react';
import './CylinderFAQ.css';

const FAQItem = ({ question, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="faq-answer">{children}</div>}
        </div>
    );
};

function CylinderFAQ() {
    return (
        <div className="faq-container">
            <h2 className="faq-title">Cylinders FAQ</h2>
            <p className="faq-intro">
                Have questions about how cylinders work or Sargent's specific systems? Find your answers here.
            </p>

            <FAQItem question="How does a pin tumbler lock work? (Sargent Cylinders)">
                <p>
                    A pin tumbler lock uses a series of pins of varying lengths to prevent the lock from opening without the correct key. Watch this video for a detailed visual explanation of the core mechanics.
                </p>
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/smIdInCQ-kU?si=N51Dux7UiTlSK6OK&amp;start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </FAQItem>

            {/* You can add more FAQ items here */}
            {/* <FAQItem question="What is a master key?">
                <p>Answer and video go here...</p>
            </FAQItem>
            */}

        </div>
    );
}

export default CylinderFAQ;