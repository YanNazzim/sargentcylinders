// src/components/CylinderFAQ.js
import React, { useState, useMemo, useCallback } from 'react';
import './CylinderFAQ.css';
import { SearchIcon, ClearIcon } from './Icons'; 

// --- FAQ Data Structure ---
// FAQs are now categorized for improved user experience.
const allFaqs = {
    'security': {
        name: "Security & Key Systems",
        icon: '🔒',
        description: "Understand SARGENT's key systems (LFIC, SFIC, Degree®, XC) and security levels.",
        faqs: [
            {
                question: "What are the different levels of security SARGENT offers?",
                answer: "SARGENT categorizes its key systems into a security hierarchy: **Open Conventional** (legacy systems with expired patents), **Patented Keyway** (keys protected against unauthorized duplication, like Degree DG1 and XC), **Security** (protection against picking attacks, like Degree DG2, Signature, and Keso), and **High Security** (UL 437 certified protection against drilling and picking, including Degree DG3 and UL-Keso).",
            },
            {
                question: "What is the difference between LFIC and SFIC?",
                answer: "LFIC (**Large Format Interchangeable Core**) and SFIC (**Small Format Interchangeable Core**) both allow you to rekey a lock by swapping the core without removing the lock from the door. LFIC cores are typically larger and specific to the manufacturer. SFIC cores have a standardized figure-8 shape and are designed to be interchangeable across different manufacturers' hardware.",
            },
            {
                question: "What are Degree® Security Levels?",
                answer: "The **Degree** system offers three tiers of security: **DG1** (utility-patented keyway and bump-resistant), **DG2** (adds a patented side bar and angled pins for picking resistance and geographic exclusivity), and **DG3** (includes all DG2 features plus UL 437 certified protection against drilling and picking, including Degree DG3 and UL-Keso).",
            },
            {
                question: "How is the XC Key System different from a conventional key system?",
                answer: "The **XC Key System** adds a unique, independent locking side pin to standard cylinder pins. This feature is activated by a side-milled slot on the XC key. While XC keys can operate non-XC cylinders, non-XC keys cannot operate XC cylinders, which provides a simple way to increase security where needed without issuing all new keys.",
            },
            {
                question: "What does it mean for a cylinder to be UL 437 listed?",
                answer: "UL 437 is a standard that certifies a cylinder's resistance to physical attack, including drilling and picking. **SARGENT's DG3** cylinders meet this standard by incorporating hardened drill-resistant inserts in the plug and body. These cylinders are recommended for high-security applications where doors are most vulnerable to physical assault.",
            },
            {
                question: "What does 'bump resistant' mean?",
                answer: "Bump resistance is a feature that uses specially engineered, patented components to resist a lock picking technique known as 'bumping'. SARGENT identifies these cylinders with a 'BR' mark on the cylinder slide.",
            },
            {
                question: "Can I use an XC key in a non-XC cylinder?",
                answer: "Yes, partially. A key cut for an XC cylinder can operate a non-XC conventional cylinder within the same key system. However, a non-XC key cannot operate an XC cylinder.",
            },
            {
                question: "Are Keso F1 keys compatible with older Keso systems?",
                answer: "Yes, partially. New **Keso F1** keys will operate both new Keso F1 cylinders and older, existing Keso cylinders. However, old Keso keys will NOT operate new Keso F1 cylinders, providing a way to upgrade security and key control within an existing system.",
            },
            {
                question: "How do security key systems protect against key duplication?",
                answer: "Security key systems like **KESO F1** and **XC** are proprietary and patented. This gives the building owner full control over key duplication because F1 keys cannot be legally duplicated. These keys often have unique features, like dimpled or side-milled slots, that require specialized equipment to cut.",
            },
            {
                question: "What is the keying status for SARGENT Degree DG2 and DG3 systems?",
                answer: "The **SARGENT Degree** DG2 and DG3 key systems provide **geographical exclusivity** and require specific randomized security codes for each order. All keys are stamped with a key set symbol and the key system register number. Keys are protected from unauthorized duplication, and the systems cannot be keyed into existing or conventional SARGENT master key systems.",
            },
        ],
    },
    'keying': {
        name: "Keying & Operations",
        icon: '🔑',
        description: "Learn key terminology, construction keying, and bitting specifications.",
        faqs: [
            {
                question: "What is a construction core?",
                answer: "A construction core is a temporary cylinder core used during a building's construction phase. It allows workers to access doors with a single construction master key. Once construction is complete, these cores are removed and replaced with the permanent, final master keyed cores. For LFIC applications, a **64-DG construction keyed core** should be specified.",
            },
            {
                question: "How does Construction Master Keying with the '21-' option work?",
                answer: "The **'21-' option** is a 'lost ball' feature for fixed core cylinders that simplifies the process of turning over a building. A temporary construction key can be used until the permanent change key is used for the first time. When the change key is turned, it allows a ball bearing to fall into a hole in the plug, permanently voiding the construction key and preventing it from being used again. This option is not available for LFIC cores; instead, you must specify the `64-` option.",
            },
            {
                question: "What is the purpose of a control key?",
                answer: "A **control key (CTL)** is specifically used to install or remove interchangeable or removable cores. It allows you to rekey a lock without having to disassemble the entire lock from the door. A control key should be safeguarded like a master key because it provides access to the cylinder's core.",
            },
            {
                question: "What is the difference between a master key and a change key?",
                answer: "A **change key (CK)** is an individual lock's key that operates only a single lock or a group of locks that are keyed alike. A **master key (MK)**, on the other hand, is a key that can operate a group of cylinders with different change keys. In a well-structured system, a grand master key can operate all locks within a system that are already operated by master keys.",
            },
            {
                question: "What are Single Section Keyways?",
                answer: "Single section keyways are **independent, stand-alone keyways** and cannot be tied to any other keyway to expand a keying system. Keys cut on a single section key blank, such as an R keyway, will only operate cylinders with the corresponding R plug section.",
            },
            {
                question: "What is a 'multiplex' keyway?",
                answer: "A multiplex keyway system allows a master key to operate cylinders with different keyways. For example, a key cut on an 'LD' master key blank can operate cylinders with LA, LB, or LC plug sections, which expands the keying capabilities of a system.",
            },
            {
                question: "What is the MACS specification for SARGENT cylinders?",
                answer: "MACS stands for **Maximum Adjacent Cut Specification**. For standard SARGENT cylinders, the MACS is **7**. This means the difference in cut depth between any two adjacent pins on a key should not exceed 7 steps.",
            },
            {
                question: "What is the keying status for my SARGENT Degree system?",
                answer: "The **SARGENT Degree** system is a factory-based key system that is independent and cannot be keyed into existing or conventional SARGENT master key systems. All DG keys are stamped with 'DO NOT DUPLICATE'."
            },
            {
                question: "What keyways are available?",
                answer: "",
                children: (
                    <>
                        <p>SARGENT offers a wide range of keyways for different systems.</p>
                        <p><strong>L Family</strong> keyways are the standard stock keyways. <strong>C Family</strong> keyways are for hotel functions. <strong>R Family</strong> keyways are used for contract master key systems.</p>
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
                                        <td data-label="Family">Conventional & LFIC (60-, 63-, 64-)</td>
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
                question: "What are the bitting specifications for LFIC Cores?",
                answer: "",
                children: (
                    <>
                        <p>The standard bitting specifications for LFIC cores are:</p>
                        <ul>
                            <li>**SC B 6300 R/C 1 Bitted Cores:** Day Keys: 111111, Control Keys: 113511</li>
                        </ul>
                        <p>For construction cores:</p>
                        <ul>
                            <li>**Prefix `64-` (Construction Core):** Construction Key: HF 387436, Construction Control Key: HF 743658</li>
                        </ul>
                    </>
                )
            },
            {
                question: "What are the bitting specifications for SFIC Cores?",
                answer: "",
                children: (
                    <>
                        <p>The standard bitting specifications for SFIC and XC SFIC cores are:</p>
                        <ul>
                            <li>**`72-` 6 Pin SFIC Blue or Purple Cores:** E keyway cut to A2 spec tip to bow, Control: 743652, Master: 654341</li>
                            <li>**`(11-) 72-` 7 Pin SFIC (and XC) Temp Cores:** E keyway cut to A2 spec tip to bow, Control: 0743652, Master: 0654341</li>
                        </ul>
                    </>
                )
            },
            {
                question: "How is the security of Keso F1 cylinders maintained?",
                answer: "Keso F1 cylinders have **12 pins in three rows on three intersecting axes**, which makes them highly pick-resistant. The keying configuration cannot be determined by examining the pinning, providing an extra layer of security. Additionally, Keso F1 keys are symmetrical and made of a unique 6-sided dimpled design, which is much stronger than conventional keys and can only be cut with sophisticated equipment.",
            },
        ],
    },
    'hardware': {
        name: "Hardware & Dimensions",
        icon: '📐',
        description: "Find cylinder sizes, cam options, and compatibility for specific lock functions.",
        faqs: [
            {
                question: "How does a pin tumbler lock (Cylinder) work?",
                answer: "A pin tumbler lock uses a series of pins of varying lengths to prevent the lock from opening without the correct key. The key lifts the pins to a specific height, creating a shear line that allows the plug to rotate. Watch this video for a detailed visual explanation. [Image of a pin tumbler lock working]",
                videoUrl: "https://www.youtube.com/embed/eOi5HGpzY70?si=1LhQhcSgoulcuzmA"
            },
            {
                question: "What Mortise Cylinder sizes are available?",
                answer: "",
                children: (
                    <>
                        <p>SARGENT mortise cylinders come in a variety of standard lengths and sizes. [Image of a mortise cylinder with size dimensions]</p>
                        <div className="keyway-table-container">
                            <table className="keyway-table">
                                <thead>
                                    <tr>
                                        <th>Size #</th>
                                        <th>Cylinder Length</th>
                                        <th>Order As:</th>
                                        <th>Available Key Systems</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td data-label="Size #">41</td><td data-label="Cylinder Length">1-1/8" (29mm)</td><td data-label="Order As:">41 x Finish x Keying Details</td><td data-label="Available Key Systems">Conventional</td></tr>
                                    <tr><td data-label="Size #">42</td><td data-label="Cylinder Length">1-1/4" (32mm)</td><td data-label="Order As:">42 x Finish x Keying Details</td><td data-label="Available Key Systems">Conventional, LFIC (60-, 63-, 64-)</td></tr>
                                    <tr><td data-label="Size #">43</td><td data-label="Cylinder Length">1-3/8" (35mm)</td><td data-label="Order As:">43 x Finish x Keying Details</td><td data-label="Available Key Systems">Conventional, SFIC (70-, 72-, 73-), LFIC (60-, 63-, 64-)</td></tr>
                                    <tr><td data-label="Size #">44</td><td data-label="Cylinder Length">1-1/2" (38mm)</td><td data-label="Order As:">44 x Finish x Keying Details</td><td data-label="Available Key Systems">Conventional, LFIC (60-, 63-, 64-)</td></tr>
                                    <tr><td data-label="Size #">46</td><td data-label="Cylinder Length">1-3/4" (44mm)</td><td data-label="Order As:">46 x Finish x Keying Details</td><td data-label="Available Key Systems">Conventional, SFIC (70-, 72-, 73-), LFIC (60-, 63-, 64-)</td></tr>
                                    <tr><td data-label="Size #">48</td><td data-label="Cylinder Length">2" (51mm)</td><td data-label="Order As:">48 x Finish x Keying Details</td><td data-label="Available Key Systems">Conventional</td></tr>
                                    <tr><td data-label="Size #">50</td><td data-label="Cylinder Length">2-1/4" (57mm)</td><td data-label="Order As:">50 x Finish x Keying Details</td><td data-label="Available Key Systems">Conventional</td></tr>
                                    <tr><td data-label="Size #">52</td><td data-label="Cylinder Length">2-1/2" (64mm)</td><td data-label="Order As:">52 x Finish x Keying Details</td><td data-label="Available Key Systems">Conventional</td></tr>
                                    <tr><td data-label="Size #">54</td><td data-label="Cylinder Length">2-3/4" (70mm)</td><td data-label="Order As:">54 x Finish x Keying Details</td><td data-label="Available Key Systems">Conventional</td></tr>
                                    <tr><td data-label="Size #">56</td><td data-label="Cylinder Length">3" (76mm)</td><td data-label="Order As:">56 x Finish x Keying Details</td><td data-label="Available Key Systems">Conventional</td></tr>
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
                                        <th>Available Key Systems</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Size #">34</td>
                                        <td data-label="Cylinder Length">1-1/8" (29mm)</td>
                                        <td data-label="Order As:">34 x Finish x Keying Details</td>
                                        <td data-label="Available Key Systems">Conventional, SFIC (70-, 72-, 73-), LFIC (60-, 63-, 64-)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            },
            {
                question: "How do I determine the length of a mortise cylinder?",
                answer: "Mortise cylinder length is measured from the **underside of the head to the end of the cylinder body**. The cam is not included in this measurement.",
            },
            {
                question: "What is the difference between SARGENT's standard cylinder cams?",
                answer: "SARGENT mortise cylinders use different cams depending on the lock function. [Image of three standard SARGENT mortise cylinder cams]",
                children: (
                    <ul>
                        <li>**Standard Cam (13-0664):** Used for all functions except the 50 hotel function and the inside cam for 16 and 92 function locks.</li>
                        <li>**Short Cam (-105 Cam, 13-0665):** Used for the **inside cylinder** of the 16 and 92 functions.</li>
                        <li>**Hotel Cam (-115 Cam, 13-2045):** This cam is supplied with all 50 hotel function cylinders and is specifically for use with those functions.</li>
                    </ul>
                )
            },
            {
                question: "What are the cylinder requirements for Freewheeling (FE) trim?",
                answer: "For locks with **Freewheeling (FE) trim**, the **outside cylinder** must be size **#46 (1-3/4\")** and the **inside cylinder** must be size **#41 (1-1/8\")** on a standard 1-3/4\" door. The FE trim is designed for high-vandalism areas like schools, allowing the outside lever to swing freely when locked to prevent damage.",
            },
            {
                question: "What are the keying notes for SARGENT 8200/7800 Series locks?",
                answer: "For locks with two cylinders that are keyed alike, **only two change keys will be provided**. If you need more keys, they must be ordered separately. For electrical functions, key override is available to retract the latch and/or deadbolt when the trim is locked electronically.",
            },
            {
                question: "What is the purpose of the `436-1` Top Loading Tool Kit?",
                answer: "The **`436-1` Top Loading Tool Kit** is used to install new slides in top-loaded cylinders. This kit can be used on **6300 cores** manufactured after March 2006 and other bored, mortise, and rim cylinders made after May 2008 that have two conical shapes marked on the back of the cylinder.",
            },
        ],
    },
    'maintenance': {
        name: "Maintenance & Policy",
        icon: '⚙️',
        description: "Official policies on keying services, shipping, and maintenance.",
        faqs: [
            {
                question: "What is the correct way to lubricate a cylinder?",
                answer: "To ensure longevity and prevent malfunctions, it is recommended to use only a **dry film lubricant** in your lock cylinders. Avoid using oil, grease, or other similar substances. For cylinders with high usage or those exposed to harsh weather, lubricate every 60 days. Otherwise, lubricating once a year is sufficient.",
            },
            {
                question: "Is SARGENT still establishing new Signature Key systems?",
                answer: "No. SARGENT is **no longer establishing new Signature Key systems**, but it will continue to maintain and support existing ones.",
            },
            {
                question: "Can I use SARGENT cylinders or cores with non-SARGENT locking devices?",
                answer: "You can, but the **warranty** for the SARGENT cylinder or core will be **voided** if used in a non-SARGENT locking device. Additionally, a Cylinder Service Fee of **$100.00 (net) per cylinder** will be assessed for SARGENT® cylinders or cores used in non-SARGENT manufactured locking devices for which SARGENT® has an equivalent.",
            },
            {
                question: "What are the special charges for shipping keys separately?",
                answer: "Keys such as Grand Master and Control Keys are shipped separately for security reasons. If the total order value is **over $12,000**, they are shipped prepaid by SARGENT. For orders under $12,000, shipping charges will be added to the customer's invoice.",
            },
            {
                question: "What is the lead time for a new special stamp for key marking?",
                answer: "A new special stamp, such as \"State of Alaska - Do Not Duplicate,\" requires extra lead time and costs an additional **$840.00 per die**, plus **$4.00 per key** for the first order.",
            },
        ],
    },
};

// --- FAQ Item Component (Remains largely the same) ---
const FAQItem = ({ question, answer, children, videoUrl, imageUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div className="faq-answer">
                    {answer ? <p dangerouslySetInnerHTML={{ __html: answer }}/> : null}
                    {children}
                    {videoUrl && (
                        <div className="video-container">
                             <iframe
                                width="560"
                                height="315"
                                src={videoUrl}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
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

function CylinderFAQ() {
    const [searchQuery, setSearchQuery] = useState('');
    const [openCategory, setOpenCategory] = useState(null);

    const handleCategoryToggle = useCallback((categoryId) => {
        setOpenCategory(prevId => (prevId === categoryId ? null : categoryId));
    }, []);

    const filteredFaqs = useMemo(() => {
        if (!searchQuery) {
            return allFaqs;
        }

        const query = searchQuery.toLowerCase();
        const filtered = {};

        Object.keys(allFaqs).forEach(categoryId => {
            const category = allFaqs[categoryId];
            const matchingFaqs = category.faqs.filter(faq =>
                faq.question.toLowerCase().includes(query) ||
                (faq.answer && faq.answer.toLowerCase().includes(query)) ||
                (faq.children && JSON.stringify(faq.children).toLowerCase().includes(query))
            );

            if (matchingFaqs.length > 0) {
                filtered[categoryId] = {
                    ...category,
                    faqs: matchingFaqs
                };
            }
        });
        
        // If searching, auto-open all resulting categories
        if (Object.keys(filtered).length > 0) {
            setOpenCategory(null);
        }

        return filtered;
    }, [searchQuery]);

    return (
        <div className="faq-container">
            <h2 className="faq-title">Cylinders FAQ</h2>
            <p className="faq-intro">
                Have questions about how cylinders work or Sargent's specific systems? Find your answers here.
            </p>
            <div className="search-bar-wrapper">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Search all FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="faq-search-input"
                />
                {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="clear-search-button">
                        <ClearIcon />
                    </button>
                )}
            </div>
            
            <div className="faq-list-categorized">
                {Object.keys(filteredFaqs).length > 0 ? (
                    Object.keys(filteredFaqs).map(categoryId => {
                        const category = filteredFaqs[categoryId];
                        const isOpen = searchQuery || openCategory === categoryId;

                        return (
                            <div key={categoryId} className={`faq-category-group ${isOpen ? 'open' : ''}`}>
                                <button 
                                    className="faq-category-header" 
                                    onClick={() => handleCategoryToggle(categoryId)}
                                    disabled={!!searchQuery}
                                >
                                    <span className="category-icon">{category.icon}</span>
                                    <div className="category-text">
                                        <h3 className="category-title">{category.name}</h3>
                                        <p className="category-description">{category.description}</p>
                                    </div>
                                    <span className="category-toggle">{isOpen ? '▲' : '▼'}</span>
                                </button>
                                
                                <div className="faq-items-wrapper">
                                    {isOpen && category.faqs.map((faq, index) => (
                                        <FAQItem
                                            key={index}
                                            question={faq.question}
                                            answer={faq.answer}
                                            videoUrl={faq.videoUrl}
                                            imageUrl={faq.imageUrl}
                                        >
                                            {faq.children}
                                        </FAQItem>
                                    ))}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="no-results-message">No results found for your search query.</p>
                )}
            </div>
        </div>
    );
}

export default CylinderFAQ;