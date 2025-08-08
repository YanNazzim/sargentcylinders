// src/data/glossaryData.js
import { images } from '../images/images';
// eslint-disable-next-line import/prefer-default-export
export const glossaryData = {
    cylinderTypes: [
        {
            id: 'mortise',
            name: 'Mortise Cylinder',
            imageUrl: images.MortiseCyls,
            parts: [
                { id: 'mortise-key-blank', name: 'Key Blank', components: [
                        {
                            description: 'Varies by keyway.',
                            isTable: true,
                            headers: ['# of Pins', 'Catalog Part #', 'Key Section'],
                            rows: [
                                { '# of Pins': '5', 'Catalog Part #': '265', 'Key Section': 'U, R' },
                                { '# of Pins': '5', 'Catalog Part #': '270', 'Key Section': 'LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN' },
                                { '# of Pins': '5', 'Catalog Part #': '273', 'Key Section': 'CD, CH, CM, CDH, CHM, CN' },
                                { '# of Pins': '5', 'Catalog Part #': '275', 'Key Section': 'LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL' },
                                { '# of Pins': '5', 'Catalog Part #': '278', 'Key Section': 'CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR' },
                                { '# of Pins': '6', 'Catalog Part #': '6265', 'Key Section': 'U, R' },
                                { '# of Pins': '6', 'Catalog Part #': '6270', 'Key Section': 'HD, HH, HM, HHM, HDH, HDM, HN, LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN' },
                                { '# of Pins': '6', 'Catalog Part #': '6273', 'Key Section': 'CD, CH, CM, CDH, CHM, CN' },
                                { '# of Pins': '6', 'Catalog Part #': '6275', 'Key Section': 'HA, HB, HC, HE, HF, HG, HJ, HK, HL, LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL' },
                                { '# of Pins': '6', 'Catalog Part #': '6278', 'Key Section': 'CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR' },
                                { '# of Pins': '7', 'Catalog Part #': '7270', 'Key Section': 'LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN' },
                                { '# of Pins': '7', 'Catalog Part #': '7273', 'Key Section': 'CD, CDM, CH, CM, CDH, CHM, CN' },
                                { '# of Pins': '7', 'Catalog Part #': '7275', 'Key Section': 'LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL' },
                                { '# of Pins': '7', 'Catalog Part #': '7278', 'Key Section': 'CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR' },
                            ]
                        }
                    ]},
                    { id: 'mortise-plug', name: 'Plug', components: [
                        {
                            description: 'Varies by cylinder length.',
                            isTable: true,
                            headers: ['Size #', 'Cylinder Length', '6 Pin Plug Part Number', '7 Pin Plug Part Number'],
                            rows: [
                                { 'Size #': '41', 'Cylinder Length': '1-1/8" (29mm)', '6 Pin Plug Part Number': '13-0401', '7 Pin Plug Part Number': 'N/A' },
                                { 'Size #': '42', 'Cylinder Length': '1-1/4" (32mm)', '6 Pin Plug Part Number': '13-0402', '7 Pin Plug Part Number': '13-0402' },
                                { 'Size #': '43', 'Cylinder Length': '1-3/8" (35mm)', '6 Pin Plug Part Number': '13-0403', '7 Pin Plug Part Number': '13-0403' },
                                { 'Size #': '44', 'Cylinder Length': '1-1/2" (38mm)', '6 Pin Plug Part Number': '13-0404', '7 Pin Plug Part Number': '13-0404' },
                                { 'Size #': '46', 'Cylinder Length': '1-3/4" (44mm)', '6 Pin Plug Part Number': '13-0405', '7 Pin Plug Part Number': '13-0405' },
                                { 'Size #': '48', 'Cylinder Length': '2" (51mm)', '6 Pin Plug Part Number': '13-0406', '7 Pin Plug Part Number': '13-0406' },
                                { 'Size #': '50', 'Cylinder Length': '2-1/4" (57mm)', '6 Pin Plug Part Number': '13-0407', '7 Pin Plug Part Number': '13-0407' },
                                { 'Size #': '52', 'Cylinder Length': '2-1/2" (64mm)', '6 Pin Plug Part Number': '13-0408', '7 Pin Plug Part Number': '13-0408' },
                                { 'Size #': '54', 'Cylinder Length': '2-3/4" (70mm)', '6 Pin Plug Part Number': '13-0409', '7 Pin Plug Part Number': '13-0409' },
                                { 'Size #': '56', 'Cylinder Length': '3" (76mm)', '6 Pin Plug Part Number': '13-0474', '7 Pin Plug Part Number': '13-0474' },
                            ]
                        }
                    ]},
                    { id: 'mortise-shell', name: 'Cylinder Shell, Cap & Slide Assy.', components: [
                        {
                            description: 'Varies by cylinder length.',
                            isTable: true,
                            headers: ['Size #', 'Cylinder Length', '6 Pin Shell & Slide Assy. Part Number', '7 Pin Shell & Slide Assy. Part Number'],
                            rows: [
                                { 'Size #': '41', 'Cylinder Length': '1-1/8" (29mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2005', '7 Pin Shell & Slide Assy. Part Number': 'N/A' },
                                { 'Size #': '42', 'Cylinder Length': '1-1/4" (32mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2006', '7 Pin Shell & Slide Assy. Part Number': '13-2765' },
                                { 'Size #': '43', 'Cylinder Length': '1-3/8" (35mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2766', '7 Pin Shell & Slide Assy. Part Number': '13-2766' },
                                { 'Size #': '44', 'Cylinder Length': '1-1/2" (38mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2767', '7 Pin Shell & Slide Assy. Part Number': '13-2767' },
                                { 'Size #': '46', 'Cylinder Length': '1-3/4" (44mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2768', '7 Pin Shell & Slide Assy. Part Number': '13-2768' },
                                { 'Size #': '48', 'Cylinder Length': '2" (51mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2769', '7 Pin Shell & Slide Assy. Part Number': '13-2769' },
                                { 'Size #': '50', 'Cylinder Length': '2-1/4" (57mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2770', '7 Pin Shell & Slide Assy. Part Number': '13-2770' },
                                { 'Size #': '52', 'Cylinder Length': '2-1/2" (64mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2771', '7 Pin Shell & Slide Assy. Part Number': '13-2771' },
                                { 'Size #': '54', 'Cylinder Length': '2-3/4" (70mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2772', '7 Pin Shell & Slide Assy. Part Number': '13-2772' },
                                { 'Size #': '56', 'Cylinder Length': '3" (76mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2773', '7 Pin Shell & Slide Assy. Part Number': '13-2773' },
                            ]
                        }
                    ]},
                    { id: 'mortise-bottom-pin', name: 'Bottom Pin', components: [
                        {
                            description: 'Varies by key bitting.',
                            isTable: true,
                            headers: ['Pin #', 'Part Number', 'Length'],
                            rows: [
                                { 'Pin #': '1', 'Part Number': '13-0064', 'Length': '.170' },
                                { 'Pin #': '2', 'Part Number': '13-0065', 'Length': '.190' },
                                { 'Pin #': '3', 'Part Number': '13-0066', 'Length': '.210' },
                                { 'Pin #': '4', 'Part Number': '13-0067', 'Length': '.230' },
                                { 'Pin #': '5', 'Part Number': '13-0068', 'Length': '.250' },
                                { 'Pin #': '6', 'Part Number': '13-0069', 'Length': '.270' },
                                { 'Pin #': '7', 'Part Number': '13-0070', 'Length': '.290' },
                                { 'Pin #': '8', 'Part Number': '13-0071', 'Length': '.310' },
                                { 'Pin #': '9', 'Part Number': '13-0072', 'Length': '.330' },
                                { 'Pin #': '10', 'Part Number': '13-0073', 'Length': '.350' },
                            ]
                        }
                    ]},
                    { id: 'mortise-master-pin', name: 'Master Pin', components: [
                        {
                            description: 'Varies by keying.',
                            isTable: true,
                            headers: ['Pin #', 'Part Number', 'Length'],
                            rows: [
                                { 'Pin #': '2', 'Part Number': '13-0051', 'Length': '.040' },
                                { 'Pin #': '3', 'Part Number': '13-0052', 'Length': '.060' },
                                { 'Pin #': '4', 'Part Number': '13-0053', 'Length': '.080' },
                                { 'Pin #': '5', 'Part Number': '13-0054', 'Length': '.100' },
                                { 'Pin #': '6', 'Part Number': '13-0055', 'Length': '.120' },
                                { 'Pin #': '7', 'Part Number': '13-0056', 'Length': '.140' },
                                { 'Pin #': '8', 'Part Number': '13-0057', 'Length': '.160' },
                                { 'Pin #': '9', 'Part Number': '13-0058', 'Length': '.180' },
                                { 'Pin #': '10', 'Part Number': '13-0059', 'Length': '.200' },
                                { 'Pin #': '11', 'Part Number': '13-0060', 'Length': '.220' },
                                { 'Pin #': '12', 'Part Number': '13-0061', 'Length': '.240' },
                                { 'Pin #': '13', 'Part Number': '13-0062', 'Length': '.260' },
                                { 'Pin #': '14', 'Part Number': '13-0063', 'Length': '.280' },
                            ]
                        }
                    ]},
                    { id: 'mortise-top-pin', name: 'Top Pin', components: [
                        {
                            description: 'Varies by keying.',
                            isTable: true,
                            headers: ['Pin #', 'Part Number', 'Length'],
                            rows: [
                                { 'Pin #': '2', 'Part Number': '13-0051', 'Length': '.040' },
                                { 'Pin #': '3', 'Part Number': '13-0052', 'Length': '.060' },
                                { 'Pin #': '4', 'Part Number': '13-0053', 'Length': '.080' },
                                { 'Pin #': '5', 'Part Number': '13-0054', 'Length': '.100' },
                                { 'Pin #': '6', 'Part Number': '13-0055', 'Length': '.120' },
                                { 'Pin #': '7', 'Part Number': '13-0056', 'Length': '.140' },
                                { 'Pin #': '8', 'Part Number': '13-0057', 'Length': '.160' },
                                { 'Pin #': '9', 'Part Number': '13-0058', 'Length': '.180' },
                                { 'Pin #': '10', 'Part Number': '13-0059', 'Length': '.200' },
                                { 'Pin #': '11', 'Part Number': '13-0060', 'Length': '.220' },
                                { 'Pin #': '12', 'Part Number': '13-0061', 'Length': '.240' },
                                { 'Pin #': '13', 'Part Number': '13-0062', 'Length': '.260' },
                                { 'Pin #': '14', 'Part Number': '13-0063', 'Length': '.280' },
                            ]
                        }
                    ]},
                    { id: 'mortise-compression-spring', name: 'Compression Spring', components: [{ partNumber: '13-0265', description: '' }] },
                    { id: 'mortise-cam', name: 'Cam', components: [
                        {
                            description: 'Multiple options available.',
                            isTable: true,
                            headers: ['Cam', 'Part Number', 'Description'],
                            rows: [
                                { 'Cam': 'Standard Cam', 'Part Number': '13-0664', 'Description': 'Standard open slotted cam provided on all 40 Series-standard. Except: 16, 50 & 92 function Mortise Locks.' },
                                { 'Cam': '#105', 'Part Number': '13-0665', 'Description': 'Short cam used for 78/8200 (16 & 92) function locks (Inside Cylinder).' },
                                { 'Cam': '22-Standard', 'Part Number': '13-0662', 'Description': 'Cam used for Construction Key Systems (22-), except for 16 & 92 function inside cylinder & 50 function mortise locks.' },
                                { 'Cam': '22-105', 'Part Number': '13-0663', 'Description': 'Cam used for Construction Key Systems (22-), 16 & 92 function mortise locks. (Inside Cylinders).' },
                                { 'Cam': '#115', 'Part Number': '13-2045', 'Description': 'Cam used for Hotel (7850/8250) function cylinders only.' },
                                { 'Cam': '#101', 'Part Number': '13-0512', 'Description': 'Adams Rite 1850, 4700.' },
                                { 'Cam': '#113', 'Part Number': '13-0921', 'Description': 'SARGENT 4370 Series key switches.' },
                                { 'Cam': '#106', 'Part Number': '13-0938', 'Description': '"Open" Schlage "L".' },
                                { 'Cam': '#112', 'Part Number': '13-0097', 'Description': '"Open" Misc.' },
                            ]
                        }
                    ]},
                    { id: 'mortise-screw', name: 'Screw', components: [{ partNumber: '01-1121', description: '#3-48 x 5/16" PH. FL' }] },
                    { id: 'mortise-slide', name: 'Slide', components: [
                        { partNumber: '13-1341', description: '6 Pin Slide (Mfg after 06-2008)' },
                        { partNumber: '13-1797', description: '7 Pin Slide (Mfg after 06-2008)' },
                        { partNumber: '13-0779', description: '6 Pin Slide (Mfg prior to 06-2008)' },
                        { partNumber: '13-0780', description: '7 Pin Slide (Mfg prior to 06-2008)' },
                    ]}
                ]
        },
        {
            id: 'rim',
            name: 'Rim Cylinder',
            imageUrl: images.RimCyls,
            parts: [
                { id: 'rim-key-blank', name: 'Key Blank', components: [
                        {
                            description: 'Varies by keyway.',
                            isTable: true,
                            headers: ['# of Pins', 'Catalog Part #', 'Key Section'],
                            rows: [
                                { '# of Pins': '5', 'Catalog Part #': '265', 'Key Section': 'U, R' },
                                { '# of Pins': '5', 'Catalog Part #': '270', 'Key Section': 'LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN' },
                                { '# of Pins': '5', 'Catalog Part #': '273', 'Key Section': 'CD, CH, CM, CDH, CHM, CN' },
                                { '# of Pins': '5', 'Catalog Part #': '275', 'Key Section': 'LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL' },
                                { '# of Pins': '5', 'Catalog Part #': '278', 'Key Section': 'CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR' },
                                { '# of Pins': '6', 'Catalog Part #': '6265', 'Key Section': 'U, R' },
                                { '# of Pins': '6', 'Catalog Part #': '6270', 'Key Section': 'HD, HH, HM, HHM, HDH, HDM, HN, LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN' },
                                { '# of Pins': '6', 'Catalog Part #': '6273', 'Key Section': 'CD, CH, CM, CDH, CHM, CN' },
                                { '# of Pins': '6', 'Catalog Part #': '6275', 'Key Section': 'HA, HB, HC, HE, HF, HG, HJ, HK, HL, LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL' },
                                { '# of Pins': '6', 'Catalog Part #': '6278', 'Key Section': 'CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR' },
                                { '# of Pins': '7', 'Catalog Part #': '7270', 'Key Section': 'LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN' },
                                { '# of Pins': '7', 'Catalog Part #': '7273', 'Key Section': 'CD, CDM, CH, CM, CDH, CHM, CN' },
                                { '# of Pins': '7', 'Catalog Part #': '7275', 'Key Section': 'LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL' },
                                { '# of Pins': '7', 'Catalog Part #': '7278', 'Key Section': 'CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR' },
                            ]
                        }
                    ]},
                    { id: 'rim-plug', name: 'Plug', components: [{ partNumber: '13-0090 (6-Pin) or 13-0087 (7-Pin)', description: 'Varies by pin count' }] },
                    { id: 'rim-shell', name: 'Cylinder Shell, Cap & Slide Assy.', components: [{ partNumber: '13-2005 (6-Pin) or 13-2712 (7-Pin)', description: 'Varies by pin count' }] },
                    { id: 'rim-bottom-pin', name: 'Bottom Pin', components: [
                        {
                            description: 'Varies by key bitting.',
                            isTable: true,
                            headers: ['Pin #', 'Part Number', 'Length'],
                            rows: [
                                { 'Pin #': '1', 'Part Number': '13-0064', 'Length': '.170' },
                                { 'Pin #': '2', 'Part Number': '13-0065', 'Length': '.190' },
                                { 'Pin #': '3', 'Part Number': '13-0066', 'Length': '.210' },
                                { 'Pin #': '4', 'Part Number': '13-0067', 'Length': '.230' },
                                { 'Pin #': '5', 'Part Number': '13-0068', 'Length': '.250' },
                                { 'Pin #': '6', 'Part Number': '13-0069', 'Length': '.270' },
                                { 'Pin #': '7', 'Part Number': '13-0070', 'Length': '.290' },
                                { 'Pin #': '8', 'Part Number': '13-0071', 'Length': '.310' },
                                { 'Pin #': '9', 'Part Number': '13-0072', 'Length': '.330' },
                                { 'Pin #': '10', 'Part Number': '13-0073', 'Length': '.350' },
                            ]
                        }
                    ]},
                    { id: '4', name: 'Master Pin', components: [
                        {
                            description: 'Varies by keying.',
                            isTable: true,
                            headers: ['Pin #', 'Part Number', 'Length'],
                            rows: [
                                { 'Pin #': '2', 'Part Number': '13-0051', 'Length': '.040' },
                                { 'Pin #': '3', 'Part Number': '13-0052', 'Length': '.060' },
                                { 'Pin #': '4', 'Part Number': '13-0053', 'Length': '.080' },
                                { 'Pin #': '5', 'Part Number': '13-0054', 'Length': '.100' },
                                { 'Pin #': '6', 'Part Number': '13-0055', 'Length': '.120' },
                                { 'Pin #': '7', 'Part Number': '13-0056', 'Length': '.140' },
                                { 'Pin #': '8', 'Part Number': '13-0057', 'Length': '.160' },
                                { 'Pin #': '9', 'Part Number': '13-0058', 'Length': '.180' },
                                { 'Pin #': '10', 'Part Number': '13-0059', 'Length': '.200' },
                                { 'Pin #': '11', 'Part Number': '13-0060', 'Length': '.220' },
                                { 'Pin #': '12', 'Part Number': '13-0061', 'Length': '.240' },
                                { 'Pin #': '13', 'Part Number': '13-0062', 'Length': '.260' },
                                { 'Pin #': '14', 'Part Number': '13-0063', 'Length': '.280' },
                            ]
                        }
                    ]},
                    { id: '5', name: 'Top Pin', components: [
                        {
                            description: 'Varies by keying.',
                            isTable: true,
                            headers: ['Pin #', 'Part Number', 'Length'],
                            rows: [
                                { 'Pin #': '2', 'Part Number': '13-0051', 'Length': '.040' },
                                { 'Pin #': '3', 'Part Number': '13-0052', 'Length': '.060' },
                                { 'Pin #': '4', 'Part Number': '13-0053', 'Length': '.080' },
                                { 'Pin #': '5', 'Part Number': '13-0054', 'Length': '.100' },
                                { 'Pin #': '6', 'Part Number': '13-0055', 'Length': '.120' },
                                { 'Pin #': '7', 'Part Number': '13-0056', 'Length': '.140' },
                                { 'Pin #': '8', 'Part Number': '13-0057', 'Length': '.160' },
                                { 'Pin #': '9', 'Part Number': '13-0058', 'Length': '.180' },
                                { 'Pin #': '10', 'Part Number': '13-0059', 'Length': '.200' },
                                { 'Pin #': '11', 'Part Number': '13-0060', 'Length': '.220' },
                                { 'Pin #': '12', 'Part Number': '13-0061', 'Length': '.240' },
                                { 'Pin #': '13', 'Part Number': '13-0062', 'Length': '.260' },
                                { 'Pin #': '14', 'Part Number': '13-0063', 'Length': '.280' },
                            ]
                        }
                    ]},
                    { id: 'rim-compression-spring', name: 'Compression Spring', components: [{ partNumber: '13-0265', description: '' }] },
                    { id: 'rim-plug-retainer', name: 'Plug Retainer', components: [{ partNumber: '13-0080', description: '' }] },
                    { id: 'rim-tail-piece', name: 'Tail Piece', components: [{ partNumber: '13-0085', description: '' }] },
                    { id: 'rim-cylinder-back-plate', name: 'Cylinder Back Plate', components: [{ partNumber: '13-0086', description: '' }] },
                    { id: 'rim-connecting-screws', name: 'Connecting Screws', components: [
                        { partNumber: '13-0075', description: 'Standard Connecting Screws #12-24 x 2-5/8"' },
                        { partNumber: '13-0074', description: 'Standard Connecting Screws #12-24 x 2-1/8"' },
                    ]},
                    { id: 'rim-slide', name: 'Slide', components: [
                        { partNumber: '13-1341', description: '6 Pin Slide (Mfg after 06-2008)' },
                        { partNumber: '13-1797', description: '7 Pin Slide (Mfg after 06-2008)' },
                        { partNumber: '13-0779', description: '6 Pin Slide (Mfg prior to 06-2008)' },
                        { partNumber: '13-0780', description: '7 Pin Slide (Mfg prior to 06-2008)' },
                    ]}
                ]
        },
        {
            id: 'bored-locks',
            name: 'Bored Locks Cylinder',
            imageUrl: images.KILCyls,
            parts: [
                { id: 'bored-locks-key-blank', name: 'Key Blank', components: [
                        {
                            description: 'Varies by keyway.',
                            isTable: true,
                            headers: ['# of Pins', 'Catalog Part #', 'Key Section'],
                            rows: [
                                { '# of Pins': '5', 'Catalog Part #': '265', 'Key Section': 'U, R' },
                                { '# of Pins': '5', 'Catalog Part #': '270', 'Key Section': 'LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN' },
                                { '# of Pins': '5', 'Catalog Part #': '273', 'Key Section': 'CD, CH, CM, CDH, CHM, CN' },
                                { '# of Pins': '5', 'Catalog Part #': '275', 'Key Section': 'LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL' },
                                { '# of Pins': '5', 'Catalog Part #': '278', 'Key Section': 'CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR' },
                                { '# of Pins': '6', 'Catalog Part #': '6265', 'Key Section': 'U, R' },
                                { '# of Pins': '6', 'Catalog Part #': '6270', 'Key Section': 'HD, HH, HM, HHM, HDH, HDM, HN, LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN' },
                                { '# of Pins': '6', 'Catalog Part #': '6273', 'Key Section': 'CD, CH, CM, CDH, CHM, CN' },
                                { '# of Pins': '6', 'Catalog Part #': '6275', 'Key Section': 'HA, HB, HC, HE, HF, HG, HJ, HK, HL, LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL' },
                                { '# of Pins': '6', 'Catalog Part #': '6278', 'Key Section': 'CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR' },
                                { '# of Pins': '7', 'Catalog Part #': '7270', 'Key Section': 'LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN' },
                                { '# of Pins': '7', 'Catalog Part #': '7273', 'Key Section': 'CD, CDM, CH, CM, CDH, CHM, CN' },
                                { '# of Pins': '7', 'Catalog Part #': '7275', 'Key Section': 'LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL' },
                                { '# of Pins': '7', 'Catalog Part #': '7278', 'Key Section': 'CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR' },
                            ]
                        }
                    ]},
                    { id: 'bored-locks-plug', name: 'Plug', components: [
                        { partNumber: '13-3142', description: 'For 6, 7 Lever, 8L, 10, 10X, 11, 6500, etc.' },
                        { partNumber: '13-3425', description: 'For 7, 8, 9 Knobs' },
                        { partNumber: '13-0920', description: 'For 5500*, 8X' },
                    ]},
                    { id: 'bored-locks-shell', name: 'Cylinder Shell & Slide Assembly', components: [
                        { partNumber: '13-3257', description: 'For 7, 8, 9 Knobs and 6, 6500 lines' },
                        { partNumber: '13-3493', description: 'For 460, 470, 480, 1655 lines' },
                    ]},
                    { id: 'bored-locks-bottom-pin', name: 'Bottom Pin', components: [
                        {
                            description: 'Varies by bitting.',
                            isTable: true,
                            headers: ['Pin #', 'Part Number', 'Length'],
                            rows: [
                                { 'Pin #': '1', 'Part Number': '13-0064', 'Length': '.170' },
                                { 'Pin #': '2', 'Part Number': '13-0065', 'Length': '.190' },
                                { 'Pin #': '3', 'Part Number': '13-0066', 'Length': '.210' },
                                { 'Pin #': '4', 'Part Number': '13-0067', 'Length': '.230' },
                                { 'Pin #': '5', 'Part Number': '13-0068', 'Length': '.250' },
                                { 'Pin #': '6', 'Part Number': '13-0069', 'Length': '.270' },
                                { 'Pin #': '7', 'Part Number': '13-0070', 'Length': '.290' },
                                { 'Pin #': '8', 'Part Number': '13-0071', 'Length': '.310' },
                                { 'Pin #': '9', 'Part Number': '13-0072', 'Length': '.330' },
                                { 'Pin #': '10', 'Part Number': '13-0073', 'Length': '.350' },
                            ]
                        }
                    ]},
                    { id: '5', name: 'Top Pin', components: [
                        {
                            description: 'Varies by keying.',
                            isTable: true,
                            headers: ['Pin #', 'Part Number', 'Length'],
                            rows: [
                                { 'Pin #': '2', 'Part Number': '13-0051', 'Length': '.040' },
                                { 'Pin #': '3', 'Part Number': '13-0052', 'Length': '.060' },
                                { 'Pin #': '4', 'Part Number': '13-0053', 'Length': '.080' },
                                { 'Pin #': '5', 'Part Number': '13-0054', 'Length': '.100' },
                                { 'Pin #': '6', 'Part Number': '13-0055', 'Length': '.120' },
                                { 'Pin #': '7', 'Part Number': '13-0056', 'Length': '.140' },
                                { 'Pin #': '8', 'Part Number': '13-0057', 'Length': '.160' },
                                { 'Pin #': '9', 'Part Number': '13-0058', 'Length': '.180' },
                                { 'Pin #': '10', 'Part Number': '13-0059', 'Length': '.200' },
                                { 'Pin #': '11', 'Part Number': '13-0060', 'Length': '.220' },
                                { 'Pin #': '12', 'Part Number': '13-0061', 'Length': '.240' },
                                { 'Pin #': '13', 'Part Number': '13-0062', 'Length': '.260' },
                                { 'Pin #': '14', 'Part Number': '13-0063', 'Length': '.280' },
                            ]
                        }
                    ]},
                    { id: 'bored-locks-master-pin', name: 'Master Pin', components: [
                        {
                            description: 'Varies by keying.',
                            isTable: true,
                            headers: ['Pin #', 'Part Number', 'Length'],
                            rows: [
                                { 'Pin #': '2', 'Part Number': '13-0051', 'Length': '.040' },
                                { 'Pin #': '3', 'Part Number': '13-0052', 'Length': '.060' },
                                { 'Pin #': '4', 'Part Number': '13-0053', 'Length': '.080' },
                                { 'Pin #': '5', 'Part Number': '13-0054', 'Length': '.100' },
                                { 'Pin #': '6', 'Part Number': '13-0055', 'Length': '.120' },
                                { 'Pin #': '7', 'Part Number': '13-0056', 'Length': '.140' },
                                { 'Pin #': '8', 'Part Number': '13-0057', 'Length': '.160' },
                                { 'Pin #': '9', 'Part Number': '13-0058', 'Length': '.180' },
                                { 'Pin #': '10', 'Part Number': '13-0059', 'Length': '.200' },
                                { 'Pin #': '11', 'Part Number': '13-0060', 'Length': '.220' },
                                { 'Pin #': '12', 'Part Number': '13-0061', 'Length': '.240' },
                                { 'Pin #': '13', 'Part Number': '13-0062', 'Length': '.260' },
                                { 'Pin #': '14', 'Part Number': '13-0063', 'Length': '.280' },
                            ]
                        }
                    ]},
                    { id: 'bored-locks-compression-spring', name: 'Compression Spring', components: [{ partNumber: '13-0265', description: '' }] },
                    { id: 'bored-locks-plug-retainer-ring', name: 'Plug Retainer Ring', components: [
                        { partNumber: '13-0205', description: 'For most levers and 8 line knob mfg after 4/05' },
                        { partNumber: '06-0166', description: 'For 7, 8, 9 Knob plug mfg prior to 3/05' },
                        { partNumber: '01-0870', description: 'For 5500*, 8X' },
                    ]},
                    { id: 'bored-locks-tail-piece', name: 'Tailpiece Packs for 10X Line', components: [
                        {
                            description: 'Tailpiece packs for various key systems and door thicknesses.',
                            isTable: true,
                            headers: ['Key System', 'Door Thickness', 'Mechanical Functions', 'Electrified Functions'],
                            rows: [
                                { 'Key System': 'Conventional, Signature, XC, Degree®, Competitor', 'Door Thickness': '1-3/8" - 2"', 'Mechanical Functions': '10-3629', 'Electrified Functions': '10-3791' },
                                { 'Key System': 'Conventional, Signature, XC, Degree®, Competitor', 'Door Thickness': '2-1/4"', 'Mechanical Functions': '10-3630', 'Electrified Functions': '10-3792' },
                                { 'Key System': 'Keso', 'Door Thickness': '1-3/8" - 2"', 'Mechanical Functions': '10-3637', 'Electrified Functions': '10-3793' },
                                { 'Key System': 'Keso', 'Door Thickness': '2-1/4"', 'Mechanical Functions': '10-3638', 'Electrified Functions': '10-3794' },
                                { 'Key System': 'LFIC (Conv., Sig., Degree)', 'Door Thickness': '1-3/8" - 2"', 'Mechanical Functions': '10-3631', 'Electrified Functions': '10-3773' },
                                { 'Key System': 'LFIC (Conv., Sig., Degree)', 'Door Thickness': '2-1/4"', 'Mechanical Functions': '10-3632', 'Electrified Functions': '10-3774' },
                                { 'Key System': 'LFIC (XC)', 'Door Thickness': '1-3/8" - 2"', 'Mechanical Functions': '10-3635', 'Electrified Functions': '10-3777' },
                                { 'Key System': 'LFIC (XC)', 'Door Thickness': '2-1/4"', 'Mechanical Functions': '10-3636', 'Electrified Functions': '10-3778' },
                                { 'Key System': 'SFIC (6 & 7 Pin)', 'Door Thickness': '1-3/8" - 2"', 'Mechanical Functions': '10-3633', 'Electrified Functions': '10-3775' },
                                { 'Key System': 'SFIC (6 & 7 Pin)', 'Door Thickness': '2-1/4"', 'Mechanical Functions': '10-3634', 'Electrified Functions': '10-3776' },
                                { 'Key System': 'SFIC (XC)', 'Door Thickness': '1-3/8" - 2"', 'Mechanical Functions': '10-3641', 'Electrified Functions': '10-3779' },
                                { 'Key System': 'SFIC (XC)', 'Door Thickness': '2-1/4"', 'Mechanical Functions': '10-3642', 'Electrified Functions': '10-3780' },
                            ]
                        }
                    ]},
                    { id: 'bored-locks-slide', name: 'Slide', components: [
                        { partNumber: '13-1341', description: 'For most current models (Mfg after June 2008)' },
                        { partNumber: '13-0779', description: 'For older models (Mfg prior to June 2008)' },
                    ]},
                    {
                        id: 'deadbolt-padlock',
                        name: 'Deadbolts & Padlocks',
                        components: [
                            {
                                description: 'Bored Auxiliary Deadlocks and Padlocks.',
                                isTable: true,
                                conditional: true,
                                headers: ['Keying System', 'SARGENT Lockset', 'Catalog No', 'Finish', 'Function'],
                                rows: [
                                    { 'Keying System': 'degree-1', 'SARGENT Lockset': '460* Series Deadbolt', 'Catalog No': 'C460-1', 'Finish': 'US04, US15, BSP', 'Function': '464' },
                                    { 'Keying System': 'degree-1', 'SARGENT Lockset': '460* Series Deadbolt', 'Catalog No': 'C460-2', 'Finish': 'US04, US15, BSP', 'Function': '465' },
                                    { 'Keying System': 'degree-1', 'SARGENT Lockset': '450*, 470, 480 Series Deadbolts', 'Catalog No': 'C480-1', 'Finish': 'US04, US15, BSP', 'Function': '454, 474, 484' },
                                    { 'Keying System': 'degree-1', 'SARGENT Lockset': '450*, 470, 480 Series Deadbolts', 'Catalog No': 'C480-2', 'Finish': 'US04, US15, BSP', 'Function': '455, 475, 485, 487' },
                                    { 'Keying System': 'degree-1', 'SARGENT Lockset': '450*, 470, 480 Series Deadbolts', 'Catalog No': 'C480-3', 'Finish': 'US04, US15, BSP', 'Function': '456, 486' },
                                    { 'Keying System': 'degree-1', 'SARGENT Lockset': '758 & 858 Padlocks', 'Catalog No': 'C750-1', 'Finish': 'US04, US15, BSP', 'Function': '758 and 858 padlocks' },
                                    { 'Keying System': 'degree-2', 'SARGENT Lockset': '460* Series Deadbolt', 'Catalog No': 'C460-1', 'Finish': 'US04, US15, BSP', 'Function': '464' },
                                    { 'Keying System': 'degree-2', 'SARGENT Lockset': '460* Series Deadbolt', 'Catalog No': 'C460-2', 'Finish': 'US04, US15, BSP', 'Function': '465' },
                                    { 'Keying System': 'degree-2', 'SARGENT Lockset': '450*, 470, 480 Series Deadbolts', 'Catalog No': 'C480-1', 'Finish': 'US04, US15, BSP', 'Function': '454, 474, 484' },
                                    { 'Keying System': 'degree-2', 'SARGENT Lockset': '450*, 470, 480 Series Deadbolts', 'Catalog No': 'C480-2', 'Finish': 'US04, US15, BSP', 'Function': '455, 475, 485, 487' },
                                    { 'Keying System': 'degree-2', 'SARGENT Lockset': '450*, 470, 480 Series Deadbolts', 'Catalog No': 'C480-3', 'Finish': 'US04, US15, BSP', 'Function': '456, 486' },
                                    { 'Keying System': 'degree-2', 'SARGENT Lockset': '758 & 858 Padlocks', 'Catalog No': 'C750-1', 'Finish': 'US04, US15, BSP', 'Function': '758 and 858 padlocks' },
                                    { 'Keying System': 'degree-3', 'SARGENT Lockset': '460* Series Deadbolt', 'Catalog No': 'C460-1', 'Finish': 'US04, US15, BSP', 'Function': '464' },
                                    { 'Keying System': 'degree-3', 'SARGENT Lockset': '460* Series Deadbolt', 'Catalog No': 'C460-2', 'Finish': 'US04, US15, BSP', 'Function': '465' },
                                    { 'Keying System': 'degree-3', 'SARGENT Lockset': '450*, 470, 480 Series Deadbolts', 'Catalog No': 'C480-1', 'Finish': 'US04, US15, BSP', 'Function': '454, 474, 484' },
                                    { 'Keying System': 'degree-3', 'SARGENT Lockset': '450*, 470, 480 Series Deadbolts', 'Catalog No': 'C480-2', 'Finish': 'US04, US15, BSP', 'Function': '455, 475, 485, 487' },
                                    { 'Keying System': 'degree-3', 'SARGENT Lockset': '450*, 470, 480 Series Deadbolts', 'Catalog No': 'C480-3', 'Finish': 'US04, US15, BSP', 'Function': '456, 486' },
                                    { 'Keying System': 'degree-3', 'SARGENT Lockset': '758 & 858 Padlocks', 'Catalog No': 'C750-1', 'Finish': 'US04, US15, BSP', 'Function': '758 and 858 padlocks' },
                                ]
                            }
                        ]
                    }
                ]
        },
        {
            id: 'lfic',
            name: 'LFIC Cylinders',
            imageUrl: images.MortiseCyls, // You can change this to a specific LFIC image if you have one
            parts: [
                { id: 'lfic-core', name: 'LFIC Core', components: [
                    {
                        description: 'LFIC Core options for Mortise, Rim, and Bored Locks.',
                        isTable: true,
                        headers: ['Keying System', 'Part Number', 'Notes'],
                        rows: [
                            { 'Keying System': 'Standard', 'Part Number': '6300', 'Notes': 'Factory keyed or 1-bitted for field keying (65-)' },
                            { 'Keying System': 'Degree-1', 'Part Number': 'DG1-6300', 'Notes': 'Solid brass, 6 pin cylinder. Factory keyed or unassembled for field keying (65-)' },
                            { 'Keying System': 'Degree-2', 'Part Number': 'DG2-6300', 'Notes': 'Solid brass, 6 pin cylinder. Factory keyed or unassembled for field keying (65-)' },
                            { 'Keying System': 'Degree-3', 'Part Number': 'DG3-6300', 'Notes': 'Solid brass, 6 pin cylinder. Must be used with DG3 housings to maintain UL437 listing.' },
                            { 'Keying System': 'Keso', 'Part Number': 'KESO-6300', 'Notes': 'Specific Keso part number.' },
                            { 'Keying System': 'XC', 'Part Number': 'XC-6300', 'Notes': 'Specific XC part number.' },
                        ]
                    }
                ]},
                { id: 'lfic-housing', name: 'LFIC Housings', components: [
                    {
                        description: 'LFIC Housing options for Mortise, Rim, and Bored Locks.',
                        isTable: true,
                        headers: ['Cylinder Type', 'Keying System', 'Housing Type', 'Part Number', 'Notes'],
                        rows: [
                            { 'Cylinder Type': 'Mortise/Rim', 'Keying System': 'Standard', 'Housing Type': 'Removable Disposable Construction Core', 'Part Number': '60-', 'Notes': 'Accepts LFIC core. Disposable plastic core provided.' },
                            { 'Cylinder Type': 'Mortise/Rim', 'Keying System': 'Standard', 'Housing Type': 'Removable Core', 'Part Number': '63-', 'Notes': 'Housing with LFIC core.' },
                            { 'Cylinder Type': 'Mortise/Rim', 'Keying System': 'Standard', 'Housing Type': 'Removable Construction Keyed LFIC', 'Part Number': '64-', 'Notes': 'Housing with construction core.' },
                            { 'Cylinder Type': 'Bored Lock', 'Keying System': 'Degree-1', 'Housing Type': 'Removable Disposable Construction Core', 'Part Number': 'DG1-60-', 'Notes': 'Housing with disposable plastic core. Accepts DG1-6300.' },
                            { 'Cylinder Type': 'Bored Lock', 'Keying System': 'Degree-1', 'Housing Type': 'Removable Core', 'Part Number': 'DG1-63-', 'Notes': 'Housing with DG1 LFIC core.' },
                            { 'Cylinder Type': 'Bored Lock', 'Keying System': 'Degree-1', 'Housing Type': 'Removable Construction Keyed LFIC', 'Part Number': 'DG1-64-', 'Notes': 'Housing with construction core. Accepts DG1-6300.' },
                        ]
                    }
                ]}
            ]
        },
        {
            id: 'sfic',
            name: 'SFIC Cylinders',
            imageUrl: images.MortiseCyls, // Placeholder, you can change this if you have a specific SFIC image
            parts: [
                { id: 'sfic-housings', name: 'SFIC Housings', components: [
                    {
                        description: 'Small Format Interchangeable Core Housings',
                        isTable: true,
                        headers: ['Type', 'Length', 'Part Number (with core)', 'Part Number (less core)'],
                        rows: [
                            { 'Type': 'Mortise', 'Length': '1-3/8" (35mm)', 'Part Number (with core)': '73-43 (6-pin), 73-7P-43 (7-pin)', 'Part Number (less core)': '70-43' },
                            { 'Type': 'Mortise', 'Length': '1-3/4" (44mm)', 'Part Number (with core)': '73-46 (6-pin), 73-7P-46 (7-pin)', 'Part Number (less core)': '70-46' },
                            { 'Type': 'Rim', 'Length': 'N/A', 'Part Number (with core)': '73-34', 'Part Number (less core)': 'Not specified' },
                        ]
                    }
                ]},
                { id: 'sfic-cores', name: 'SFIC Cores', components: [
                    {
                        description: 'Keyed, Uncombinated, and Construction Cores',
                        isTable: true,
                        headers: ['Core Type', '# of Pins', 'Part Number'],
                        rows: [
                            { 'Core Type': 'Keyed Core', '# of Pins': '6', 'Part Number': '7300B' },
                            { 'Core Type': 'Keyed Core', '# of Pins': '7', 'Part Number': '7P-7300B' },
                            { 'Core Type': 'Uncombinated Core', '# of Pins': '6', 'Part Number': '65-7300B' },
                            { 'Core Type': 'Uncombinated Core', '# of Pins': '7', 'Part Number': '65-7P-7300B' },
                            { 'Core Type': 'Disposable Plastic Core', '# of Pins': 'N/A', 'Part Number': '13-5176 (Order separately)' },
                            { 'Core Type': 'Brass Construction Core', '# of Pins': '6', 'Part Number': '7200 (Order separately)' },
                        ]
                    }
                ]},
                { id: 'sfic-keys', name: 'SFIC Keys & Key Blanks', components: [
                    {
                        description: 'Keys and Blanks for 6 and 7 Pin SFIC systems',
                        isTable: true,
                        headers: ['Description', '# of Pins', 'Part Number'],
                        rows: [
                            { 'Description': 'Key Blank', '# of Pins': '6', 'Part Number': '6285B x keyway' },
                            { 'Description': 'Key Blank', '# of Pins': '7', 'Part Number': '7285B x keyway' },
                            { 'Description': 'Cut Master Key', '# of Pins': '6', 'Part Number': '6282BMK' },
                            { 'Description': 'Cut Master Key', '# of Pins': '7', 'Part Number': '7282BMK' },
                            { 'Description': 'Cut Control Key', '# of Pins': '6', 'Part Number': '6282BCTL' },
                            { 'Description': 'Cut Control Key', '# of Pins': '7', 'Part Number': '7282BCTL' },
                            { 'Description': 'Cut Change/Day Key', '# of Pins': '6', 'Part Number': '6282BCHK' },
                            { 'Description': 'Cut Change/Day Key', '# of Pins': '7', 'Part Number': '7282BCHK' },
                            { 'Description': 'Construction Master Key (72-)', '# of Pins': '6', 'Part Number': '6282BCMK' },
                            { 'Description': 'Construction Control Key (72-)', '# of Pins': '6', 'Part Number': '6254BCTL' },
                        ]
                    }
                ]}
            ]
        },
        {
            id: 'degree',
            name: 'Degree Cylinders',
            imageUrl: images.MortiseCyls,
            parts: [
                { id: 'degree-mortise', name: 'Mortise Cylinders', components: [
                    {
                        description: 'DG1-, DG2- & DG3- Series Mortise Cylinders',
                        isTable: true,
                        headers: ['Cylinder No.', 'DIM "X"'],
                        rows: [
                            { 'Cylinder No.': '41', 'DIM "X"': '1-1/8" (29mm)' },
                            { 'Cylinder No.': '42', 'DIM "X"': '1-1/4" (32mm)' },
                            { 'Cylinder No.': '43', 'DIM "X"': '1-3/8" (35mm)' },
                            { 'Cylinder No.': '44', 'DIM "X"': '1-1/2" (38mm)' },
                            { 'Cylinder No.': '46', 'DIM "X"': '1-3/4" (44mm)' },
                        ]
                    }
                ]},
                { id: 'degree-rim', name: 'Rim Cylinders', components: [
                    {
                        description: 'DG1-, DG2- & DG3- Series Rim Cylinders',
                        isTable: true,
                        headers: ['Type', 'Degree Level', 'Cylinder Type'],
                        rows: [
                            { 'Type': 'Degree Rim Cylinders', 'Degree Level': 'DG1-, DG2- or DG3-', 'Cylinder Type': '34 Rim Cylinder' }
                        ]
                    }
                ]},
                { id: 'degree-bored', name: 'Bored Lock Cylinders', components: [
                    {
                        description: 'Designations & Options for Degree Series Components',
                        isTable: true,
                        headers: ['SARGENT Lockset', 'Degree Level', 'Catalog No', 'Finish', 'Function'],
                        rows: [
                            { 'SARGENT Lockset': '11 Line Locks', 'Degree Level': 'DG1, DG2 or DG3', 'Catalog No': 'C11-1', 'Finish': 'US04, US15, BSP', 'Function': 'All functions except 50 function' },
                            { 'SARGENT Lockset': '10X Line Locks', 'Degree Level': 'DG1, DG2, or DG3', 'Catalog No': 'C10X-1', 'Finish': 'US04, US15, BSP', 'Function': 'All functions except 50 function' },
                            { 'SARGENT Lockset': '10, 7, 7500* Line (Levers) & 6500 Locks & 88KL, 88CL, 28KL, 28NL & 28CL Exit Trims', 'Degree Level': 'DG1, DG2 or DG3', 'Catalog No': 'C10-1', 'Finish': 'US04, US15, BSP', 'Function': 'All functions except 50 function' },
                            { 'SARGENT Lockset': '7*, 8 & 9* Line Knob Locks', 'Degree Level': 'DG1, DG2 or DG3', 'Catalog No': 'C8-1', 'Finish': 'US04, US15, BSP', 'Function': 'All functions except 50 function' },
                            { 'SARGENT Lockset': '8X Line Cylindrical Knob Locks', 'Degree Level': 'DG1, DG2 or DG3', 'Catalog No': 'C8X-1', 'Finish': 'US04, US15, BSP', 'Function': '' },
                            { 'SARGENT Lockset': '6 Line Cylindrical Locks', 'Degree Level': 'DG1, DG2 or DG3', 'Catalog No': 'C6-1: S&M Knob C6-1B: B Knob', 'Finish': 'US04, US15, BSP', 'Function': '' },
                            { 'SARGENT Lockset': '7600 Integralock*', 'Degree Level': 'DG1, DG2 or DG3', 'Catalog No': 'C7600-1 for functions 04, 05, 37', 'Finish': 'US04, US15, BSP', 'Function': '' },
                        ]
                    }
                ]},
                { id: 'degree-deadbolts-padlocks', name: 'Deadbolts & Padlocks', components: [
                    {
                        description: 'Bored Auxiliary Deadlocks and Padlocks',
                        isTable: true,
                        headers: ['SARGENT Lockset', 'Degree Level', 'Catalog No', 'Finish', 'Function'],
                        rows: [
                            { 'SARGENT Lockset': '460* Series Deadbolt', 'Degree Level': 'DG1, DG2 or DG3', 'Catalog No': 'C460-1', 'Finish': 'US04, US15, BSP', 'Function': '464' },
                            { 'SARGENT Lockset': '460* Series Deadbolt', 'Degree Level': 'DG1, DG2 or DG3', 'Catalog No': 'C460-2', 'Finish': 'US04, US15, BSP', 'Function': '465' },
                            { 'SARGENT Lockset': '450*, 470, 480 Series Deadbolts', 'Degree Level': 'DG1, DG2 or DG3', 'Catalog No': 'C480-1', 'Finish': 'US04, US15, BSP', 'Function': '454, 474, 484' },
                            { 'SARGENT Lockset': '450*, 470, 480 Series Deadbolts', 'Degree Level': 'DG1, DG2 or DG3', 'Catalog No': 'C480-2', 'Finish': 'US04, US15, BSP', 'Function': '455, 475, 485, 487' },
                            { 'SARGENT Lockset': '450*, 470, 480 Series Deadbolts', 'Degree Level': 'DG1, DG2 or DG3', 'Catalog No': 'C480-3', 'Finish': 'US04, US15, BSP', 'Function': '456, 486' },
                            { 'SARGENT Lockset': '758 & 858 Padlocks', 'Degree Level': 'DG1, DG2 or DG3', 'Catalog No': 'C750-1', 'Finish': 'US04, US15, BSP', 'Function': '758 and 858 padlocks' },
                        ]
                    }
                ]}
            ]
        },
        {
            id: 'keso-f1',
            name: 'Keso F1 Cylinders',
            imageUrl: images.MortiseCyls,
            parts: [
                { id: 'keso-mortise', name: 'Mortise Cylinders', components: [
                    {
                        description: 'F1-70 Series Mortise Type Cylinders',
                        isTable: true,
                        headers: ['Mortise Cylinder Lengths', 'Keso F1 Mortise Cylinder with a Standard Cam', '50 Function Keso F1 Cylinders with a Hotel Cam (70-115 Cam)', 'Keso F1 I/S Cylinder for 78/8216 & 92 Functions with a 105 Cam'],
                        rows: [
                            { 'Mortise Cylinder Lengths': '1-1/8"', 'Keso F1 Mortise Cylinder with a Standard Cam': 'F1-71', '50 Function Keso F1 Cylinders with a Hotel Cam (70-115 Cam)': 'N/A', 'Keso F1 I/S Cylinder for 78/8216 & 92 Functions with a 105 Cam': 'F1-71-105' },
                            { 'Mortise Cylinder Lengths': '1-1/4"', 'Keso F1 Mortise Cylinder with a Standard Cam': 'F1-72', '50 Function Keso F1 Cylinders with a Hotel Cam (70-115 Cam)': 'F1-72-115', 'Keso F1 I/S Cylinder for 78/8216 & 92 Functions with a 105 Cam': 'F1-72-105' },
                            { 'Mortise Cylinder Lengths': '1-3/8"', 'Keso F1 Mortise Cylinder with a Standard Cam': 'F1-73', '50 Function Keso F1 Cylinders with a Hotel Cam (70-115 Cam)': 'F1-73-115', 'Keso F1 I/S Cylinder for 78/8216 & 92 Functions with a 105 Cam': 'F1-73-105' },
                            { 'Mortise Cylinder Lengths': '1-1/2"', 'Keso F1 Mortise Cylinder with a Standard Cam': 'F1-74', '50 Function Keso F1 Cylinders with a Hotel Cam (70-115 Cam)': 'N/A', 'Keso F1 I/S Cylinder for 78/8216 & 92 Functions with a 105 Cam': 'F1-74-105' },
                            { 'Mortise Cylinder Lengths': '1-3/4"', 'Keso F1 Mortise Cylinder with a Standard Cam': 'F1-76', '50 Function Keso F1 Cylinders with a Hotel Cam (70-115 Cam)': 'N/A', 'Keso F1 I/S Cylinder for 78/8216 & 92 Functions with a 105 Cam': 'F1-76-105' },
                        ]
                    }
                ]},
                { id: 'keso-rim', name: 'Rim Cylinders', components: [
                    {
                        description: 'F1-64 Series Rim Type Cylinders',
                        isTable: true,
                        headers: ['Door Thickness without Trim', 'Keso F1 Rim Type Cylinder', 'Keso F1 Rim Type Removable Core Cylinders', 'Keso F1 Rim Type Removable Cores Only'],
                        rows: [
                            { 'Door Thickness without Trim': '1-3/4" to 3-1/8"', 'Keso F1 Rim Type Cylinder': 'F1-64', 'Keso F1 Rim Type Removable Core Cylinders': 'F1-164', 'Keso F1 Rim Type Removable Cores Only': 'F1-5164' }
                        ]
                    }
                ]},
                { id: 'keso-bored', name: 'Key-In-Knob/Lever Cylinders', components: [
                    {
                        description: 'How to Order Keso F1 Cylinders for 7, 10X & 11 Line Locks',
                        isTable: true,
                        headers: ['All 7 & 10X Line Functions', 'All 11 Line Functions Except for the 50 Function', 'All 10X Line Functions Except for the 50 Function'],
                        rows: [
                            { 'All 7 & 10X Line Functions': 'Cylinder Only: F1-82-C10-1 With Lock: F1-82-10G37xGLx26DxLH', 'All 11 Line Functions Except for the 50 Function': 'Cylinder Only: F1-82-C11-1 With Lock: F1-82-11G05xLLx26DxRH', 'All 10X Line Functions Except for the 50 Function': 'Cylinder Only: F1-82-C10X-1 With Lock: F1-82-10XG05L1x26DxRH' }
                        ]
                    }
                ]},
                { id: 'keso-padlocks-cabinet-locks', name: 'Padlocks and Cabinet Locks', components: [
                    {
                        description: 'Padlock No. F1-82-856 and F1-82-857',
                        isTable: true,
                        headers: ['Padlock Number', 'Description'],
                        rows: [
                            { 'Padlock Number': 'F1-82-856', 'Description': 'Stainless steel shackle' },
                            { 'Padlock Number': 'F1-82-856C', 'Description': 'Stainless steel shackle and 9" chain' },
                            { 'Padlock Number': 'F1-82-856HS', 'Description': 'Nickel plated hardened steel shackle' },
                            { 'Padlock Number': 'F1-82-856HSC', 'Description': 'Nickel plated hardened steel shackle and 9" chain' },
                            { 'Padlock Number': 'F1-82-857', 'Description': 'Key removable in locked position only' },
                        ]
                    },
                    { partNumber: 'F1-4252', description: 'Cabinet Lock' }
                ]}
            ]
        },
        {
            id: 'xc',
            name: 'XC Cylinders',
            imageUrl: images.MortiseCyls, // Placeholder, you can change this if you have a specific XC image
            parts: [
                { id: 'xc-bored', name: 'Bored & Auxiliary Locks', components: [
                    {
                        description: 'XC Cylinders for various SARGENT lock lines.',
                        isTable: true,
                        headers: ['Lock Line', 'Complete 6-pin Assembly', 'Plug Assembly', 'Shell & Slide Assembly'],
                        rows: [
                            { 'Lock Line': '11 Line (T-Zone)', 'Complete 6-pin Assembly': '11-C11-1', 'Plug Assembly': '13-4332', 'Shell & Slide Assembly': '13-4334' },
                            { 'Lock Line': '10X Line', 'Complete 6-pin Assembly': '11-C10X-1', 'Plug Assembly': '13-4332', 'Shell & Slide Assembly': '13-4334' },
                            { 'Lock Line': '10, 7, 6500 Line', 'Complete 6-pin Assembly': '11-C10-1', 'Plug Assembly': '13-4332', 'Shell & Slide Assembly': '13-4334' },
                            { 'Lock Line': '460, 470, 480 Deadbolts', 'Complete 6-pin Assembly': 'Varies (e.g., 11-C460-1)', 'Plug Assembly': 'Varies (e.g., 13-4329)', 'Shell & Slide Assembly': '13-4337' },
                            { 'Lock Line': '758/858 Padlocks', 'Complete 6-pin Assembly': '11-C750-1 X US4', 'Plug Assembly': '13-4332', 'Shell & Slide Assembly': '13-4334' },
                        ]
                    }
                ]},
                { id: 'xc-mortise', name: 'Mortise Cylinders', components: [
                    {
                        description: '11-40 Series Mortise Cylinders',
                        isTable: true,
                        headers: ['Length', 'Complete 6-pin Assembly', 'Plug Assembly', 'Shell & Slide Assembly'],
                        rows: [
                            { 'Length': '1-1/8"', 'Complete 6-pin Assembly': '11-41', 'Plug Assembly': '13-4314', 'Shell & Slide Assembly': '13-4301' },
                            { 'Length': '1-1/4"', 'Complete 6-pin Assembly': '11-42', 'Plug Assembly': '13-4315', 'Shell & Slide Assembly': '13-4302' },
                            { 'Length': '1-3/8"', 'Complete 6-pin Assembly': '11-43', 'Plug Assembly': '13-4316', 'Shell & Slide Assembly': '13-4303' },
                            { 'Length': '1-1/2"', 'Complete 6-pin Assembly': '11-44', 'Plug Assembly': '13-4317', 'Shell & Slide Assembly': '13-4304' },
                            { 'Length': '1-3/4"', 'Complete 6-pin Assembly': '11-46', 'Plug Assembly': '13-4318', 'Shell & Slide Assembly': '13-4305' },
                        ]
                    }
                ]},
                { id: 'xc-rim', name: 'Rim Cylinders', components: [
                    {
                        description: '11-34 Rim Type Cylinders',
                        isTable: true,
                        headers: ['Description', 'Part Number'],
                        rows: [
                            { 'Description': 'Complete Assembly (6 pin)', 'Part Number': '11-34' },
                            { 'Description': 'Plug Assembly', 'Part Number': '13-4312' },
                            { 'Description': 'Shell & Slide Assembly', 'Part Number': '13-4299' },
                        ]
                    }
                ]},
                { id: 'xc-lfic', name: 'LFIC Cores', components: [
                    {
                        description: '11-6300 Series Large Format Interchangeable Cores',
                        isTable: true,
                        headers: ['Description', 'Part Number'],
                        rows: [
                            { 'Description': 'Complete Core', 'Part Number': '11-6300' },
                            { 'Description': 'Plug', 'Part Number': '13-4326' },
                            { 'Description': 'Inner Shell & Slide Assy.', 'Part Number': '13-5175' },
                        ]
                    }
                ]},
                { id: 'xc-sfic', name: 'SFIC Cores', components: [
                    {
                        description: '11-7P-7300B Series Small Format Interchangeable Cores (7-Pin)',
                        isTable: true,
                        headers: ['Core Type', 'Part Number'],
                        rows: [
                            { 'Core Type': 'Keyed Core', 'Part Number': '11-7P-7300B' },
                            { 'Core Type': 'Uncombinated Core', 'Part Number': '11-65-7300B' },
                            { 'Core Type': 'Disposable Plastic Core', 'Part Number': '13-5174' },
                            { 'Core Type': 'Brass Construction Core', 'Part Number': '11-72-7P Option' },
                        ]
                    }
                ]}
            ]
        }
    ]
};