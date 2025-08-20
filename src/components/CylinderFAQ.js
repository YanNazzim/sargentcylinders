import React, { useState } from 'react';
import './CylinderFAQ.css';
import { SearchIcon, ClearIcon } from './Icons'; // Importing icons for search functionality

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

const allFaqs = [
    {
        question: "How does a pin tumbler lock work?",
        answer: "A pin tumbler lock uses a series of pins of varying lengths to prevent the lock from opening without the correct key. The key lifts the pins to a specific height, creating a shear line that allows the plug to rotate. Watch this video for a detailed visual explanation."
    },
    {
        question: "What are the different levels of security SARGENT offers?",
        answer: "SARGENT categorizes its key systems into a security hierarchy: Open Conventional (legacy systems with expired patents), Patented Keyway (keys protected against unauthorized duplication, like Degree DG1 and Keso F1), Security (protection against picking attacks, like Degree DG2, Signature, Keso and Keso F1), and High Security (UL 437 certified protection against drilling and picking, including Degree DG3 and UL-Keso)."
    },
    {
        question: "What is the difference between LFIC and SFIC?",
        answer: "LFIC (Large Format Interchangeable Core) and SFIC (Small Format Interchangeable Core) both allow you to rekey a lock by swapping the core without removing the lock from the door. LFIC cores are typically larger and specific to the manufacturer. SFIC cores have a standardized figure-8 shape and are designed to be interchangeable across different manufacturers' hardware."
    },
    {
        question: "What is a construction core?",
        answer: "A construction core is a temporary cylinder core used during a building's construction phase. It allows workers to access doors with a single construction master key. Once construction is complete, these cores are removed and replaced with the permanent, final master keyed cores."
    },
    {
        question: "How do I determine the length of a mortise cylinder?",
        answer: "Mortise cylinder length is measured from the underside of the head to the end of the cylinder body. The cam is not included in this measurement. SARGENT mortise cylinders come in a variety of standard lengths."
    },
    {
        question: "What is a 'lost ball' construction key system?",
        answer: "The 'lost ball' or '21-' option is a construction keying method where small ball bearings are placed in one of the pin chambers. The construction master key operates the lock with the balls in place. When a permanent key is used for the first time, it rotates the plug and allows the ball bearings to fall into a pre-drilled hole, permanently voiding the construction key. This is the standard method for SARGENT conventional cylinders."
    },
    {
        question: "What does 'bump resistant' mean?",
        answer: "Bump resistance is a feature that uses specially engineered, patented components to resist a lock picking technique known as 'bumping'. SARGENT identifies these cylinders with a 'BR' mark on the cylinder slide."
    },
    {
        question: "Can I use an XC key in a non-XC cylinder?",
        answer: "Yes, partially. A key cut for an XC cylinder can operate a non-XC conventional cylinder within the same key system. However, a non-XC key cannot operate an XC cylinder."
    },
    {
        question: "What is a 'multiplex' keyway?",
        answer: "A multiplex keyway system allows a master key to operate cylinders with different keyways. For example, a key cut on an 'LD' master key blank can operate cylinders with LA, LB, or LC plug sections, which expands the keying capabilities of a system."
    },
    {
        question: "What is the MACS specification for SARGENT cylinders?",
        answer: "MACS stands for Maximum Adjacent Cut Specification. For standard SARGENT cylinders, the MACS is 7. This means the difference in cut depth between any two adjacent pins on a key should not exceed 7 steps."
    },
    {
        question: "Are Keso F1 keys compatible with older Keso systems?",
        answer: "Yes, partially. New Keso F1 keys will operate both new Keso F1 cylinders and older, existing Keso cylinders. However, old Keso keys will NOT operate new Keso F1 cylinders, providing a way to upgrade security and key control within an existing system."
    },
    {
        question: "What are Degree® Security Levels?",
        answer: "The Degree system offers three tiers of security: DG1 (utility-patented keyway and bump-resistant), DG2 (adds a patented side bar and angled pins for picking resistance and geographic exclusivity), and DG3 (includes all DG2 features plus UL 437 certification for high security against physical attacks)."
    },
    {
        question: "What keyways are available?",
        answer: "SARGENT offers a wide range of keyways for different systems, including Conventional & LFIC (275/6275/7275, 270/6270/7270, 273/6273/7273, 278/6278/7278 series) and SFIC (SARGENT 4A and 4B, and various competitor keyways)."
    },
    {
        question: "What is the warranty period for SARGENT finishes?",
        answer: "SARGENT finishes, including MicroShield®, are covered by a limited warranty of one year from the invoice date. The warranty becomes void if the product is modified in any way, such as with a third-party component."
    },
    {
        question: "Can I use SARGENT cylinders or cores with non-SARGENT locking devices?",
        answer: "You can, but the warranty for the SARGENT cylinder or core will be voided if used in a non-SARGENT locking device. Additionally, a Cylinder Service Fee of $100.00 (net) per cylinder will be assessed for SARGENT® cylinders or cores used in non-SARGENT manufactured locking devices for which SARGENT® has an equivalent."
    },
    {
        question: "What is the policy for returns on incorrectly ordered items?",
        answer: "SARGENT generally does not accept returns for material correctly furnished per the purchase order. For approved returns (called 'Goodwill' returns), the product must be in its original, undamaged packaging, valued over $250.00 net, and invoiced within the previous 120 days. These returns are subject to a minimum 45% reprocessing fee."
    },
    {
        question: "Are there special charges for shipping keys separately?",
        answer: "Keys such as Grand Master and Control Keys are shipped separately for security reasons. If the total order value is over $12,000, they are shipped prepaid by SARGENT. For orders under $12,000, shipping charges will be added to the customer's invoice."
    },
    {
        question: "What fees are associated with custom keying software files like Simple K or Keywizard?",
        answer: "While bitting lists requested for key sets ordered with factory keyed products are provided at no charge, an additional fee is applied if the list is requested in a specific software format like Simple K or Keywizard. The cost varies depending on the number of bittings, from $307.00 for 1-50 bittings to $1,459.00 for 6001-9000 bittings."
    },
    {
        question: "How is freight calculated for orders under $12,000?",
        answer: "For orders with a net product value greater than $400 and less than $12,000, freight charges are calculated as a percentage of the net invoice value and added to the customer's invoice. This percentage is based on the National U.S. Average On Highway Diesel Fuel Prices."
    },
    {
        question: "What is the policy on modifying a fire-rated door opening?",
        answer: "SARGENT advises that any field modification to a fire-rated opening can impact its fire rating. You should consult a code specialist or local code official to ensure compliance with all applicable codes and ratings when specifying or installing a new or retrofitted fire-rated opening."
    },
    {
        question: "Is SARGENT still establishing new Signature Key systems?",
        answer: "No. SARGENT is no longer establishing new Signature Key systems, but it will continue to maintain and support existing ones."
    },
    {
        question: "What is the lead time for a new special stamp for key marking?",
        answer: "A new special stamp, such as \"State of Alaska - Do Not Duplicate,\" requires extra lead time and costs an additional $840.00 per die, plus $4.00 per key for the first order."
    },
    {
        question: "What finishes are available for a 6500 Series lockset?",
        answer: "According to the price book, the 6500 Series lockset is available in a variety of finishes, including: 10BE/26D/BSP/WSP for $421.00, and 03/04/26 for $423.00."
    }
];

function CylinderFAQ() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredFaqs = allFaqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="faq-container">
            <h2 className="faq-title">Cylinders FAQ</h2>
            <p className="faq-intro">
                Have questions about how cylinders work or Sargent's specific systems? Find your answers here.
            </p>
            {/* NEW Search bar with icons */}
            <div className="search-bar-wrapper">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Search FAQ..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="faq-search-input"
                />
                {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="clear-search-button">
                        <ClearIcon />
                    </button>
                )}
            </div>
            {/* END NEW search bar */}
            <div className="faq-list">
                {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question}>
                            <p>{faq.answer}</p>
                        </FAQItem>
                    ))
                ) : (
                    <p>No results found for your search query.</p>
                )}
            </div>
        </div>
    );
}

export default CylinderFAQ;
