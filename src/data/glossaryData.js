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
                { id: 'mortise-plug', name: 'Plug',  components: [
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
                { id: 'mortise-shell', name: 'Cylinder Shell, Cap & Slide Assy.',  components: [
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
                { id: 'mortise-bottom-pin', name: 'Bottom Pin',  components: [
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
                { id: 'mortise-top-pin', name: 'Top Pin',  components: [
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
                { id: 'mortise-compression-spring', name: 'Compression Spring',  components: [{ partNumber: '13-0265', description: '' }] },
                { id: 'mortise-slide', name: 'Slide',  components: [
                        { partNumber: '13-1341', description: '6 Pin Slide (Mfg after 06-2008)' },
                        { partNumber: '13-1797', description: '7 Pin Slide (Mfg after 06-2008)' },
                        { partNumber: '13-0779', description: '6 Pin Slide (Mfg prior to 06-2008)' },
                        { partNumber: '13-0780', description: '7 Pin Slide (Mfg prior to 06-2008)' },
                    ] },
                { id: 'mortise-cam', name: 'Cam',  components: [
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
                    ]}
            ]
        },
        {
            id: 'rim',
            name: 'Rim Cylinder',
            imageUrl: images.RimCyls,
            parts: [
                { id: 'rim-plug', name: 'Plug',  components: [{ partNumber: '13-0090 (6-Pin) or 13-0087 (7-Pin)', description: 'Varies by pin count' }] },
                { id: 'rim-shell', name: 'Cylinder Shell, Cap & Slide Assy.',  components: [{ partNumber: '13-2005 (6-Pin) or 13-2712 (7-Pin)', description: 'Varies by pin count' }] },
                { id: 'rim-bottom-pin', name: 'Bottom Pin',  components: [
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
                { id: 'rim-master-pin', name: 'Master Pin',  components: [
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
                { id: 'rim-top-pin', name: 'Top Pin',  components: [
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
                { id: 'rim-compression-spring', name: 'Compression Spring',  components: [{ partNumber: '13-0265', description: '' }] },
                { id: 'rim-plug-retainer', name: 'Plug Retainer',  components: [{ partNumber: '13-0080', description: '' }] },
                { id: 'rim-tail-piece', name: 'Tail Piece',  components: [{ partNumber: '13-0085', description: '' }] },
                { id: 'rim-cylinder-back-plate', name: 'Cylinder Back Plate',  components: [{ partNumber: '13-0086', description: '' }] },
                { id: 'rim-connecting-screws', name: 'Connecting Screws',  components: [
                        { partNumber: '13-0075', description: 'Standard Connecting Screws #12-24 x 2-5/8"' },
                        { partNumber: '13-0074', description: 'Standard Connecting Screws #12-24 x 2-1/8"' },
                    ]},
                { id: 'rim-slide', name: 'Slide',  components: [
                        { partNumber: '13-1341', description: '6 Pin Slide (Mfg after 06-2008)' },
                        { partNumber: '13-1797', description: '7 Pin Slide (Mfg after 06-2008)' },
                        { partNumber: '13-0779', description: '6 Pin Slide (Mfg prior to 06-2008)' },
                        { partNumber: '13-0780', description: '7 Pin Slide (Mfg prior to 06-2008)' },
                    ]},
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
                    ]}
            ]
        },
        {
            id: 'bored-locks',
            name: 'Bored Locks Cylinder',
            imageUrl: images.KILCyls,
            parts: [
                { id: 'bored-locks-key-blank', name: 'Key Blank',  components: [
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
                { id: 'bored-locks-plug', name: 'Plug',  components: [
                        { partNumber: '13-3142', description: 'For 6, 7 Lever, 8L, 10, 10X, 11, 6500, etc.' },
                        { partNumber: '13-3425', description: 'For 7, 8, 9 Knobs' },
                        { partNumber: '13-0920', description: 'For 5500*, 8X' },
                    ]},
                { id: 'bored-locks-shell', name: 'Cylinder Shell & Slide Assembly',  components: [
                        { partNumber: '13-3257', description: 'For 7, 8, 9 Knobs and 6, 6500 lines' },
                        { partNumber: '13-3493', description: 'For 460, 470, 480, 1655 lines' },
                    ]},
                { id: 'bored-locks-bottom-pin', name: 'Bottom Pin',  components: [
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
                { id: 'bored-locks-top-pin', name: 'Top Pin',  components: [
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
                { id: 'bored-locks-compression-spring', name: 'Compression Spring',  components: [{ partNumber: '13-0265', description: '' }] },
                { id: 'bored-locks-plug-retainer-ring', name: 'Plug Retainer Ring',  components: [
                        { partNumber: '13-0205', description: 'For most levers and 8 line knob mfg after 4/05' },
                        { partNumber: '06-0166', description: 'For 7, 8, 9 Knob plug mfg prior to 3/05' },
                        { partNumber: '01-0870', description: 'For 5500*, 8X' },
                    ]},
                { id: 'bored-locks-slide', name: 'Slide',  components: [
                        { partNumber: '13-1341', description: 'For most current models (Mfg after June 2008)' },
                        { partNumber: '13-0779', description: 'For older models (Mfg prior to June 2008)' },
                    ]},
                { id: 'bored-locks-tail-piece', name: 'Tailpiece',  components: [
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
                    ]}
            ]
        },
        {
            id: 'lfic',
            name: 'LFIC',
            imageUrl: images.MortiseCyls,
            parts: [
                { id: 'lfic-keyed-core', name: 'Keyed Core (6300)', components: [
                    { partNumber: '6300', description: 'LFIC Core' }
                ]},
                { id: 'lfic-uncombinated-core', name: 'Uncombinated Core (65-6300)', components: [
                    { partNumber: '65-6300', description: 'Unassembled core for field rekeying. Includes Control Sleeve and two key blanks' }
                ]},
                { id: 'lfic-disposable-core', name: 'Disposable Plastic Core (13-5177)', components: [
                    { partNumber: '13-5177', description: 'Disposable plastic core for use during construction phase' }
                ]},
                { id: 'lfic-construction-core', name: 'Construction Keyed Core (6400)', components: [
                    { partNumber: '6400', description: 'Brass construction core for use during construction phase' }
                ]},
            ]
        },
        {
            id: 'sfic',
            name: 'SFIC',
            imageUrl: images.MortiseCyls,
            parts: [
                { id: 'sfic-mortise-housings', name: 'Mortise Housings', components: [
                    {
                        description: 'Small Format Interchangeable Core Housings for Mortise Locks',
                        isTable: true,
                        headers: ['Length', '6-Pin Part #', '7-Pin Part #', 'Housing Less Core'],
                        rows: [
                            { 'Length': '1-3/8" (35mm)', '6-Pin Part #': '73-43', '7-Pin Part #': '73-7P-43', 'Housing Less Core': '70-43' },
                            { 'Length': '1-3/4" (44mm)', '6-Pin Part #': '73-46', '7-Pin Part #': '73-7P-46', 'Housing Less Core': '70-46' },
                        ]
                    }
                ]},
                { id: 'sfic-keyed-cores', name: 'Keyed Cores', components: [
                    { partNumber: '7300B', description: '6-Pin Keyed Core' },
                    { partNumber: '7P-7300B', description: '7-Pin Keyed Core' },
                ]},
                { id: 'sfic-uncombinated-cores', name: 'Uncombinated Cores', components: [
                    { partNumber: '65-7300B', description: '6-Pin Uncombinated Core' },
                    { partNumber: '65-7P-7300B', description: '7-Pin Uncombinated Core' },
                ]},
                { id: 'sfic-construction-cores', name: 'Construction Cores', components: [
                    { partNumber: '13-5176', description: 'Disposable Plastic Core' },
                    { partNumber: '7200', description: '6-Pin Brass Construction Core' },
                ]},
                { id: 'sfic-keys', name: 'Keys & Key Blanks', components: [
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
                        ]
                    }
                ]}
            ]
        },
        {
            id: 'degree',
            name: 'Degree Cylinders',
            imageUrl: images.DegreeCyls,
            parts: [
                { id: 'degree-cams', name: 'Cams', components: [
                    {
                        description: 'Cams for Degree Mortise Cylinders',
                        isTable: true,
                        headers: ['Cam', 'Part Number', 'Description'],
                        rows: [
                            { 'Cam': 'Standard Cam', 'Part Number': 'DG-0001', 'Description': 'Standard open slotted cam provided on all 40 Series-standard. Except: 16 & 92 function Mortise Locks' },
                            { 'Cam': 'Short Cam (-105)', 'Part Number': 'DG-0002', 'Description': 'Cam used with SARGENT mortise functions 16 & 92 on the inside cylinder' },
                            { 'Cam': 'Hotel Cam (-115)', 'Part Number': 'DG-2808', 'Description': 'Cam only offered on limited rotation hotel function cylinder for use in 78/8250 lock sets' },
                            { 'Cam': 'Adams Rite (-101)', 'Part Number': 'DG-0004', 'Description': 'For Adams Rite 1850, 4700 series locks' },
                            { 'Cam': 'SARGENT 4370 Series Key Switches (-113)', 'Part Number': 'DG-0006', 'Description': 'For SARGENT 4370 Series Key Switches' },
                            { 'Cam': 'Schlage "L" (-106)', 'Part Number': 'DG-0007', 'Description': 'For Schlage "L" series mortise locks' },
                            { 'Cam': 'Misc. Cam (-112)', 'Part Number': 'DG-0008', 'Description': 'Miscellaneous applications' },
                        ]
                    }
                ]},
                { id: 'degree-conversion-parts', name: '6300 Series DG- Conversion Parts', components: [
                    { partNumber: '13-5178', description: 'Kit to convert rim cylinders with long pins to accept 63-DG Series cores and 11-63-series cores' },
                    { partNumber: '17-2632', description: 'Kit for 758/858 Padlock' },
                    { partNumber: '11-5003', description: 'Kit for 11-Line' },
                    { partNumber: '10-3631', description: 'Kit for 10X Line 1-3/8" - 2" Doors' },
                    { partNumber: '08-5265', description: 'Kit for DG-63-Series and 11-63-8-Line knobs' },
                    { partNumber: '16-2519', description: 'Cam Assembly for 11-63-Deadbolts' },
                    { partNumber: '10-3429', description: 'Kit for 10 Line and 7 Line' },
                    { partNumber: '05-3125', description: 'For 6500 Series' },
                    { partNumber: '10-3632', description: 'Kit for 10X Line 2-1/4" Doors' },
                ]},
                { id: 'slide-block-kit', name: '436-1 Slide Block Kit', components: [
                    { partNumber: '436-1', description: 'Includes fixture and staking tool for use with all DG-6300 cores, and 11- and 10-6300 series cores manufactured after March 2006 and standard cylinders manufactured after May 2008' },
                    { partNumber: '13-1797', description: '7 pin slides' },
                    { partNumber: '13-1341', description: '6 pin slides' },
                ]},
                { id: 'shear-tool', name: '431-6 Shear Tool', components: [
                    { partNumber: '431-6', description: 'Shear Tool is used to alter older SARGENT 60-/63-mortise housings to accept 6300 Series DG cores and 11-6300 series cores.' },
                ]},
                { id: 'pin-kits', name: 'Degree Pin Kits', components: [
                    { partNumber: '437 DG1', description: 'Standard Pinning Kit' },
                    { partNumber: '437 DGM', description: 'Master Pinning Kit' },
                ]},
                { id: 'rosettes-collars', name: 'Rosettes & Collars', components: [
                    { partNumber: '1KB-1', description: '5/16" (8mm) projection' },
                    { partNumber: '1KB-2', description: '7/16" (11mm) projection' },
                    { partNumber: '1KB-3', description: '9/16" (14mm) projection' },
                    { partNumber: '1KB-4', description: '11/16" (16mm) projection' },
                    { partNumber: '97 Rosette', description: 'Cast brass, bronze or stainless steel 1-1/2" (38mm) diameter' },
                    { partNumber: '90 Blocking Ring', description: 'Brass, bronze or stainless steel 1-3/8" (35mm) diameter; available in thickness of 1/16", 1/8", 3/16", 1/4" and 3/8" projection in 1/16" (1.6mm) increments.' },
                ]},
                { id: 'degree-cores', name: 'Cores', components: [
                    {
                        description: 'Large Format Interchangeable Cores (LFIC) for Degree systems.',
                        isTable: true,
                        headers: ['Keying System', 'Part Number', 'Notes'],
                        rows: [
                            { 'Keying System': 'Degree-1', 'Part Number': 'DG1-6300', 'Notes': 'Solid brass, 6 pin cylinder. Factory keyed or unassembled for field keying (65-)' },
                            { 'Keying System': 'Degree-2', 'Part Number': 'DG2-6300', 'Notes': 'Solid brass, 6 pin cylinder. Factory keyed or unassembled for field keying (65-)' },
                            { 'Keying System': 'Degree-3', 'Part Number': 'DG3-6300', 'Notes': 'Solid brass, 6 pin cylinder. Must be used with DG3 housings to maintain UL437 listing.' },
                        ]
                    }
                ]}
            ]
        },
        {
            id: 'keso-f1',
            name: 'Keso F1 Cylinders',
            imageUrl: images.KESOcyls,
            parts: [
                {
                    id: 'keso-f1-mortise-cores',
                    name: 'Mortise Cores',
                    components: [
                        {
                            description: 'Keso F1 Removable Cores for Mortise Cylinders.',
                            isTable: true,
                            headers: ["Cylinder Length", "Standard Cam Core", "105 Cam Core"],
                            rows: [
                                { "Cylinder Length": "1-1/4\"", "Standard Cam Core": "F1-5172", "105 Cam Core": "F1-5172-105" },
                                { "Cylinder Length": "1-3/8\"", "Standard Cam Core": "F1-5173", "105 Cam Core": "F1-5173-105" },
                                { "Cylinder Length": "1-1/2\"", "Standard Cam Core": "F1-5174", "105 Cam Core": "F1-5174-105" },
                                { "Cylinder Length": "1-3/4\"", "Standard Cam Core": "F1-5176", "105 Cam Core": "F1-5176-105" }
                            ]
                        }
                    ]
                },
                {
                    id: 'keso-f1-rim-cores',
                    name: 'Rim Cores',
                    components: [
                        { partNumber: 'F1-5164', description: 'Keso F1 Rim Type Removable Core' }
                    ]
                },
                { id: 'keso-cams', name: 'Cams', components: [
                    {
                        description: 'Available cams for Keso F1 and Keso Security System cylinders.',
                        isTable: true,
                        headers: ['Cam Description', 'Application', 'Cam Part # When Ordered Separately'],
                        rows: [
                            { 'Cam Description': 'Regular Cam (Std)', 'Application': 'F1-82-71 thru F1-82-76, F1-83-172 thru F1-83-176, 71 thru 76 and 172 thru 176', 'Cam Part # When Ordered Separately': 'Std (No Suffix) (13-2563)' },
                            { 'Cam Description': 'Vertical Hotel Cam (Cam Suffix-115)', 'Application': 'F1-82-(72-115, 73-115). Note: these cylinders have limited key rotation and are only for use in Sargent 78/8250 locks.', 'Cam Part # When Ordered Separately': '13-2283 (115 Cam*)' },
                            { 'Cam Description': 'Short Offset Cam (Cam Suffix-105)', 'Application': 'Inside cylinder cam for Mortise Functions 16 and 92', 'Cam Part # When Ordered Separately': '13-2522 (105 Cam)' },
                            { 'Cam Description': '70-101 and 170-101 Offset Cams', 'Application': 'Adams Rite MS1850 series locks only. Packed standard with #90-1/8" blocking ring.', 'Cam Part # When Ordered Separately': '13-2521 (101 Cam)' },
                            { 'Cam Description': '70-113 Vertical Cam (Cam Suffix-113)', 'Application': 'Cam used with 4370 Series Key switches', 'Cam Part # When Ordered Separately': '13-2519 (113 Cam)' },
                            { 'Cam Description': '70-106 Cam (Cam Suffix-106)', 'Application': '70 Series mortise cylinders for Schlage "L" mortise lock', 'Cam Part # When Ordered Separately': '13-0939 (106 Cam)' },
                        ]
                    }
                ]},
                {
                    id: 'keso-f1-keys',
                    name: 'Keys & Key Blanks',
                    components: [
                        { partNumber: 'F1 K372 MK', description: 'F1 Master Key' },
                        { partNumber: 'F1 K372 CHK', description: 'F1 Day Key' },
                        { partNumber: 'F1 K372 CTL', description: 'F1 Control Key' },
                        { partNumber: 'F1 K373 EMK', description: 'F1 Mortise Emergency Key' },
                        { partNumber: 'F1 K374 EMK', description: 'F1 8G50 Emergency Key' },
                        { partNumber: 'F1-K376', description: 'F1 Master and Change Key Blanks' },
                        { partNumber: 'F1-K-375', description: 'F1 Control Key Blanks' }
                    ]
                }
            ]
        },
        {
            id: 'xc',
            name: 'XC Cylinders',
            imageUrl: images.XCcyls,
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
                { id: 'xc-cores', name: 'Cores', components: [
                    {
                        description: 'Large Format Interchangeable Cores (LFIC) for XC systems.',
                        isTable: true,
                        headers: ['Description', 'Part Number'],
                        rows: [
                            { 'Description': 'Complete Core', 'Part Number': '11-6300' },
                            { 'Description': 'Plug', 'Part Number': '13-4326' },
                            { 'Description': 'Inner Shell & Slide Assy.', 'Part Number': '13-5175' },
                        ]
                    },
                    {
                        description: 'Small Format Interchangeable Cores (SFIC) for XC systems (7-Pin).',
                        isTable: true,
                        headers: ['Core Type', 'Part Number'],
                        rows: [
                            { 'Core Type': 'Keyed Core', 'Part Number': '11-7P-7300B' },
                            { 'Core Type': 'Uncombinated Core', 'Part Number': '11-65-7300B' },
                            { 'Core Type': 'Disposable Plastic Core', 'Part Number': '13-5174' },
                            { 'Core Type': 'Brass Construction Core', 'Part Number': '11-72-7P Option' },
                        ]
                    }
                ]},
                { id: 'xc-cams', name: 'Cams for 11-40 Series Mortise Cylinders', components: [
                    {
                        description: 'Optional Cams for 11-40 Series Mortise Cylinders',
                        isTable: true,
                        headers: ['Cam', 'Part Number', 'Description'],
                        rows: [
                            { 'Cam': 'Standard Cam', 'Part Number': '13-0664', 'Description': 'Standard Cam 11-41 thru 11-56' },
                            { 'Cam': '#105', 'Part Number': '13-0665', 'Description': 'Short cam for 8292 and 8216 functions inside only' },
                            { 'Cam': '#101', 'Part Number': '13-0512', 'Description': 'Adams Rite 1850, 4700' },
                            { 'Cam': '#113', 'Part Number': '13-0921', 'Description': 'SARGENT 4370 Series key switches' },
                            { 'Cam': '#106', 'Part Number': '13-0938', 'Description': '"Open" Schlage "L"' },
                            { 'Cam': '#112', 'Part Number': '13-0097', 'Description': '"Open" Misc.' },
                        ]
                    }
                ]}
            ]
        }
    ]
};