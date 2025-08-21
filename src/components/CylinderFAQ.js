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
        question: "How does a pin tumbler lock (Cylinder) work?",
        answer: "A pin tumbler lock uses a series of pins of varying lengths to prevent the lock from opening without the correct key. The key lifts the pins to a specific height, creating a shear line that allows the plug to rotate. Watch this video for a detailed visual explanation.",
        videoUrl: "https://www.youtube.com/embed/smIdInCQ-kU?si=0PAGhApuKeX8O2CB&start=8"
    },
    {
        question: "What are the different levels of security SARGENT offers?",
        answer: "SARGENT categorizes its key systems into a security hierarchy: Open Conventional (legacy systems with expired patents), Patented Keyway (keys protected against unauthorized duplication, like Degree DG1 and XC), Security (protection against picking attacks, like Degree DG2, Signature, and Keso), and High Security (UL 437 certified protection against drilling and picking, including Degree DG3 and UL-Keso)."
    },
    {
        question: "What is the difference between LFIC and SFIC?",
        answer: "LFIC (Large Format Interchangeable Core) and SFIC (Small Format Interchangeable Core) both allow you to rekey a lock by swapping the core without removing the lock from the door. LFIC cores are typically larger and specific to the manufacturer. SFIC cores have a standardized figure-8 shape and are designed to be interchangeable across different manufacturers' hardware."
    },
    {
        question: "What is a construction core?",
        answer: "A construction core is a temporary cylinder core used during a building's construction phase. It allows workers to access doors with a single construction master key. Once construction is complete, these cores are removed and replaced with the permanent, final master keyed cores. For LFIC applications, a 64-DG construction keyed core should be specified."
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
    {
        question: "Which mortise lock functions do not require a cylinder?",
        answer: "",
        children: (
            <>
                <p>Functions that do not require a cylinder typically involve passage, privacy, or dummy operations. Based on the 7800, 8200, and 9200 series catalogs, the following functions do not require a cylinder to operate:</p>
                <ul>
                    <li>**Passage/Exit Latch:** 8213, 7813</li>
                    <li>**Passage/Closet:** 8215, 7815, 9215</li>
                    <li>**Privacy:** 8265, 7865, 8266, 7866, 8268, 7868, 9265, 9266</li>
                    <li>**Dummy:** 8293, 7893, 8294, 7894, 8295, 7895, 8296, 7896, 8297, 7897</li>
                </ul>
            </>
        )
    },
    {
        question: "What are the cylinder requirements for Freewheeling (FE) trim?",
        answer: "For locks with Freewheeling (FE) trim, the outside cylinder must be size #46 (1-3/4\") and the inside cylinder must be size #41 (1-1/8\") on a standard 1-3/4\" door. The FE trim is designed for high-vandalism areas like schools, allowing the outside lever to swing freely when locked to prevent damage."
    },
    {
        question: "What is the difference between SARGENT's standard cylinder cams?",
        answer: "",
        children: (
            <>
                <p>SARGENT mortise cylinders use different cams depending on the lock function.</p>
                <ul>
                    <li>**Standard Cam (13-0664):** Used for all functions except the 50 hotel function and the inside cam for 16 and 92 function locks.</li>
                    <li>**Short Cam (-105 Cam, 13-0665):** Used for the inside cylinder of the 16 and 92 functions.</li>
                    <li>**Hotel Cam (-115 Cam, 13-2045):** This cam is supplied with all 50 hotel function cylinders and is specifically for use with those functions.</li>
                </ul>
            </>
        )
    },
    {
        question: "What are the cylinder and trim compatibility notes for concealed cylinder escutcheons?",
        answer: "Concealed cylinder escutcheon designs like the LE3, LE4, KE3, and KE4 are not available with Mogul cylinders or on double cylinder functions. These trims are designed for exposed barrels only and are limited to #41 size cylinders with specific keyway and key system offerings. They are also not available with DG2 and DG3 cylinders."
    },
    {
        question: "Which mortise lock functions are not recommended for use on doors for Life Safety Egress?",
        answer: "According to the catalogs, several functions are not recommended for use on doors designated for life safety egress due to their locking mechanisms. These include: 8217, 7817, 8231, 7831, 8236, 7836, 8224, 7824, 8227, 7827, 8247, 7847, 8249, 7849, 8252, 7852, and all deadbolt-only functions."
    },
    {
        question: "Are there any special considerations for using a Mogul cylinder?",
        answer: "Yes, when using a Mogul cylinder (M- option) with a 9200 series lock, it is important to note that electrical functions are not available. The M-9200 series is designed specifically for detention, holding, and psychiatric facilities, and is for use on metal doors only. The 9250 Hotel Guest function is also not available with the Mogul option."
    },
    {
        question: "Can I use a standard 6300 LFIC core in a DG1, DG2, or DG3 housing?",
        answer: "Yes, it is possible to use a standard 6300 LFIC core in a DG1, DG2, or DG3 housing, as long as both the core and the housing are less than 5 years old. This compatibility is a design feature for newer components."
    },
    // --- START: NEW FAQ ITEMS ---
    {
        question: "What is the correct way to lubricate a cylinder?",
        answer: "To ensure longevity and prevent malfunctions, it is recommended to use only a **dry film lubricant** in your lock cylinders. Avoid using oil, grease, or other similar substances. For cylinders with high usage or those exposed to harsh weather, lubricate every 60 days. Otherwise, lubricating once a year is sufficient."
    },
    {
        question: "What is the purpose of a control key?",
        answer: "A **control key** (CTL) is specifically used to install or remove interchangeable or removable cores. It allows you to rekey a lock without having to disassemble the entire lock from the door. A control key should be safeguarded like a master key because it provides access to the cylinder's core."
    },
    {
        question: "What is the difference between a master key and a change key?",
        answer: "A **change key** (CK) is an individual lock's key that operates only a single lock or a group of locks that are keyed alike. A **master key** (MK), on the other hand, is a key that can operate a group of cylinders with different change keys. In a well-structured system, a grand master key can operate all locks within a system that are already operated by master keys."
    },
    {
        question: "How do security key systems protect against key duplication?",
        answer: "Security key systems like **KESO F1** and **XC** are proprietary and patented. This gives the building owner full control over key duplication because F1 keys cannot be legally duplicated. These keys often have unique features, like dimpled or side-milled slots, that require specialized equipment to cut."
    },
    {
        question: "What is the keying status for my SARGENT Degree system?",
        answer: "The **SARGENT Degree** system is a factory-based key system that is independent and cannot be keyed into existing or conventional SARGENT master key systems. All DG keys are stamped with 'DO NOT DUPLICATE'."
    },
    {
        question: "How is the security of Keso F1 cylinders maintained?",
        answer: "Keso F1 cylinders have 12 pins in three rows on three intersecting axes, which makes them highly pick-resistant. The keying configuration cannot be determined by examining the pinning, providing an extra layer of security. Additionally, Keso F1 keys are symmetrical and made of a unique 6-sided dimpled design, which is much stronger than conventional keys and can only be cut with sophisticated equipment."
    },
    {
        question: "How is the XC Key System different from a conventional key system?",
        answer: "The **XC Key System** adds a unique, independent locking side pin to standard cylinder pins. This feature is activated by a side-milled slot on the XC key. While XC keys can operate non-XC cylinders, non-XC keys cannot operate XC cylinders, which provides a simple way to increase security where needed without issuing all new keys."
    },
    {
        question: "What does it mean for a cylinder to be UL 437 listed?",
        answer: "UL 437 is a standard that certifies a cylinder's resistance to physical attack, including drilling and picking. **SARGENT's DG3** cylinders meet this standard by incorporating hardened drill-resistant inserts in the plug and body. These cylinders are recommended for high-security applications where doors are most vulnerable to physical assault."
    },
    {
        question: "What are the keying notes for SARGENT 8200/7800 Series locks?",
        answer: "For locks with two cylinders that are keyed alike, only two change keys will be provided. If you need more keys, they must be ordered separately. For electrical functions, key override is available to retract the latch and/or deadbolt when the trim is locked electronically."
    },
    {
        question: "How does Construction Master Keying with the '21-' option work?",
        answer: "The **'21-' option** is a 'lost ball' feature for fixed core cylinders that simplifies the process of turning over a building. A temporary construction key can be used until the permanent change key is used for the first time. When the change key is turned, it allows a ball bearing to fall into a hole in the plug, permanently voiding the construction key and preventing it from being used again. This option is not available for LFIC cores; instead, you must specify the `64-` option."
    },
    {
        question: "What are hollow driver pins and when are they used?",
        answer: "Hollow drivers and a different spring are specifically used in the 6300 series LFIC removable cores for chambers 3 and 4. They are used to allow the control key to achieve a shear line in the control sleeve at those specific pin locations."
    },
    {
        question: "What is the function of the `436-1` Top Loading Tool Kit?",
        answer: "The `436-1` Top Loading Tool Kit is used to install new slides in top-loaded cylinders. This kit can be used on 6300 cores manufactured after March 2006 and other bored, mortise, and rim cylinders made after May 2008 that have two conical shapes marked on the back of the cylinder."
    },
    {
        question: "What is the purpose of the `431-6` Removable Core Shear Tool?",
        answer: "The `431-6` Removable Core Shear Tool is used to prepare older SARGENT 60-/63- mortise housings to accept XC cores. It works by shearing off a brass pin in the housing to allow the new XC core to be inserted. This tool should not be used with steel pins."
    },
    {
        question: "What is the recommended maintenance for Keso F1 cylinders?",
        answer: "SARGENT recommends performing preventative maintenance on Keso F1 cylinders on a regular basis. At a minimum, cylinders should be lubricated once a year, but those with high usage or exposure to dirt and extreme weather should be lubricated every sixty days. Only a dry film lubricant should be used; avoid oil, grease, or similar substances."
    },
    {
        question: "Are there any special installation instructions for LFIC cores?",
        answer: "When installing an LFIC core, you should insert the correct tailpiece into the back of the core and secure it with the tailpiece retainer. For removable cores, the control key is inserted and rotated counter-clockwise to install the core into the housing."
    },
    {
        question: "What is the keying status for SARGENT Degree DG2 and DG3 systems?",
        answer: "The **SARGENT Degree** DG2 and DG3 key systems provide geographical exclusivity and require specific randomized security codes for each order. All keys are stamped with a key set symbol and the key system register number. Keys are protected from unauthorized duplication, and the systems cannot be keyed into existing or conventional SARGENT master key systems."
    },
    {
        question: "How can I upgrade an existing 6300 core to a Degree or XC Series?",
        answer: "Only existing 6300 cores with removable tailpieces can be upgraded to the Degree and XC Series without modifying the lock. For other older `6300` series cylinders, a `431-6` shear tool kit is required to alter the housings to accept the new cores."
    },
    {
        question: "What keying limitations exist for the 6300 series LFIC cores?",
        answer: "The control key for the 6300 series LFIC core has bittings that match the top master key in positions 1, 2, 5, and 6. In chambers 3 and 4, the stack value is 20, which is different from the standard stack value of 15 used for other positions. This affects the number of available bittings in the master key system."
    },
    {
        question: "How is an `M-9200` Institutional Mortise Lock different from a standard `9200` series lock?",
        answer: "The M-9200 Institutional Mortise Lock is specifically designed for detention, holding areas, and psychiatric facilities, and is intended for use on metal doors only. It uses a Mogul cylinder, which must be purchased separately, and is not available with electrical functions."
    },
    {
        question: "Can I use an XC key blank on a standard key duplicating machine?",
        answer: "Yes, XC key blanks are designed so that the standard cuts can be made on a standard key duplicating machine. However, the XC key has a unique side-milled slot which is what activates the special locking side pin mechanism in an XC cylinder."
    }
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