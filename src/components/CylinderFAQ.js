// src/components/CylinderFAQ.js
import React, { useState } from 'react';
import './CylinderFAQ.css';
import { SearchIcon, ClearIcon } from './Icons'; // Importing icons for search functionality

const FAQItem = ({ question, children, videoUrl, imageUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="faq-answer">
                    {children}
                    {videoUrl && (
                        <div className="video-container">
                             <iframe
                                width="560"
                                height="315"
                                src={videoUrl}
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    )}
                    {imageUrl && (
                        <div className="image-container">
                            <img src={imageUrl} alt="" className="faq-image"/>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const allFaqs = [
    {
        question: "How does a pin tumbler lock work?",
        answer: "A pin tumbler lock uses a series of pins of varying lengths to prevent the lock from opening without the correct key. The key lifts the pins to a specific height, creating a shear line that allows the plug to rotate. Watch this video for a detailed visual explanation.",
        videoUrl: "https://www.youtube.com/embed/smIdInCQ-kU?si=0PAGhApuKeX8O2CB&start=8"
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
        question: "What Mortise Cylinder sizes are available?",
        answer: "",
        children: (
            <>
                <p>SARGENT mortise cylinders come in a variety of standard lengths and sizes.</p>
                <div className="keyway-table-container">
                    <table className="keyway-table">
                        <thead>
                            <tr>
                                <th>Size #</th>
                                <th>Cylinder Length</th>
                                <th>Order As:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Size #">41</td>
                                <td data-label="Cylinder Length">1-1/8" (29mm)</td>
                                <td data-label="Order As:">41 x Finish x Keying Details</td>
                            </tr>
                            <tr>
                                <td data-label="Size #">42</td>
                                <td data-label="Cylinder Length">1-1/4" (32mm)</td>
                                <td data-label="Order As:">42 x Finish x Keying Details</td>
                            </tr>
                            <tr>
                                <td data-label="Size #">43</td>
                                <td data-label="Cylinder Length">1-3/8" (35mm)</td>
                                <td data-label="Order As:">43 x Finish x Keying Details</td>
                            </tr>
                            <tr>
                                <td data-label="Size #">44</td>
                                <td data-label="Cylinder Length">1-1/2" (38mm)</td>
                                <td data-label="Order As:">44 x Finish x Keying Details</td>
                            </tr>
                            <tr>
                                <td data-label="Size #">46</td>
                                <td data-label="Cylinder Length">1-3/4" (44mm)</td>
                                <td data-label="Order As:">46 x Finish x Keying Details</td>
                            </tr>
                            <tr>
                                <td data-label="Size #">48</td>
                                <td data-label="Cylinder Length">2" (51mm)</td>
                                <td data-label="Order As:">48 x Finish x Keying Details</td>
                            </tr>
                            <tr>
                                <td data-label="Size #">50</td>
                                <td data-label="Cylinder Length">2-1/4" (57mm)</td>
                                <td data-label="Order As:">50 x Finish x Keying Details</td>
                            </tr>
                            <tr>
                                <td data-label="Size #">52</td>
                                <td data-label="Cylinder Length">2-1/2" (64mm)</td>
                                <td data-label="Order As:">52 x Finish x Keying Details</td>
                            </tr>
                            <tr>
                                <td data-label="Size #">54</td>
                                <td data-label="Cylinder Length">2-3/4" (70mm)</td>
                                <td data-label="Order As:">54 x Finish x Keying Details</td>
                            </tr>
                            <tr>
                                <td data-label="Size #">56</td>
                                <td data-label="Cylinder Length">3" (76mm)</td>
                                <td data-label="Order As:">56 x Finish x Keying Details</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    },
    {
        question: "What Rim Cylinder sizes are available?",
        answer: "",
        children: (
            <>
                <p>SARGENT rim cylinders come in one standard size.</p>
                <div className="keyway-table-container">
                    <table className="keyway-table">
                        <thead>
                            <tr>
                                <th>Size #</th>
                                <th>Cylinder Length</th>
                                <th>Order As:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Size #">34</td>
                                <td data-label="Cylinder Length">1-1/8" (29mm)</td>
                                <td data-label="Order As:">34 x Finish x Keying Details</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
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
        question: "What are Single Section Keyways?",
        answer: "Single section keyways are independent, stand-alone keyways and cannot be tied to any other keyway to expand a keying system. Keys cut on a single section key blank, such as an R keyway, will only operate cylinders with the corresponding R plug section."
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
        answer: "",
        children: (
            <>
                <p>SARGENT offers a wide range of keyways for different systems.</p>
                <p><strong>L Family</strong> keyways are the standard stock keyways. <strong>C Family</strong> keyways are for hotel functions. <strong>H Family</strong> and <strong>R Family</strong> keyways are used for contract master key systems.</p>
                <div className="keyway-table-container">
                    <table className="keyway-table">
                        <thead>
                            <tr>
                                <th>Family</th>
                                <th>Keyways</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Family">Conventional & LFIC</td>
                                <td data-label="Keyways">
                                    <p><strong>L Family:</strong> LA, LB, LC, LE, LF, LG, LJ, LK, LL, LD, LH, LM, LN, LDH, LDM, LHM</p>
                                    <p><strong>R Family:</strong> RA, RB, RC, RE, RF, RG, RJ, RK, RL, RD, RH, RM, RN, RDH, RDM, RHM</p>
                                    <p><strong>H Family:</strong> HA, HB, HC, HE, HF, HG, HJ, HK, HL, HD, HH, HM, HN, HHM, HDH, HDM</p>
                                    <p><strong>C Family:</strong> CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR, CD, CH, CM, CN, CDH, CHM, CDM</p>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Family">Single Section Keyways</td>
                                <td data-label="Keyways">
                                    <p>S, U, R, CR</p>
                                </td>
                            </tr>
                            <tr>
                                <td data-label="Family">SFIC</td>
                                <td data-label="Keyways">
                                    <p><strong>SARGENT:</strong> 4A, 4B</p>
                                    <p><strong>Other:</strong> Various competitor keyways are also available.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    },
    {
        question: "Can I use SARGENT cylinders or cores with non-SARGENT locking devices?",
        answer: "You can, but the warranty for the SARGENT cylinder or core will be voided if used in a non-SARGENT locking device. Additionally, a Cylinder Service Fee of $100.00 (net) per cylinder will be assessed for SARGENT® cylinders or cores used in non-SARGENT manufactured locking devices for which SARGENT® has an equivalent."
    },
    {
        question: "Are there special charges for shipping keys separately?",
        answer: "Keys such as Grand Master and Control Keys are shipped separately for security reasons. If the total order value is over $12,000, they are shipped prepaid by SARGENT. For orders under $12,000, shipping charges will be added to the customer's invoice."
    },
    {
        question: "Is SARGENT still establishing new Signature Key systems?",
        answer: "No. SARGENT is no longer establishing new Signature Key systems, but it will continue to maintain and support existing ones."
    },
    {
        question: "What is the lead time for a new special stamp for key marking?",
        answer: "A new special stamp, such as \"State of Alaska - Do Not Duplicate,\" requires extra lead time and costs an additional $840.00 per die, plus $4.00 per key for the first order."
    },
];

function CylinderFAQ() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredFaqs = allFaqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (faq.answer && faq.answer.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (faq.children && JSON.stringify(faq.children).toLowerCase().includes(searchQuery.toLowerCase()))
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
                        <FAQItem
                            key={index}
                            question={faq.question}
                            videoUrl={faq.videoUrl}
                            imageUrl={faq.imageUrl}
                        >
                            {faq.answer ? <p>{faq.answer}</p> : null}
                            {faq.children}
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