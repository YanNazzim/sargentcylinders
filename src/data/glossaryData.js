// src/data/glossaryData.js
import { images } from '../images/images';

export const glossaryData = {
  cylinderTypes: [
    {
      id: 'mortise',
      name: 'Mortise Cylinder',
      imageUrl: images.MortiseCyls,
      parts: [
                { id: '', name: 'Key Blank', components: [
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
        { id: '1', name: 'Plug', components: [
            {
              description: 'Varies by cylinder length.',
              isTable: true,
              headers: ['No.', 'Cylinder Length', '6 Pin Plug Part Number', '7 Pin Plug Part Number'],
              rows: [
                { 'No.': '41', 'Cylinder Length': '1-1/8" (29mm)', '6 Pin Plug Part Number': '13-0401', '7 Pin Plug Part Number': 'N/A' },
                { 'No.': '42', 'Cylinder Length': '1-1/4" (32mm)', '6 Pin Plug Part Number': '13-0402', '7 Pin Plug Part Number': '13-0402' },
                { 'No.': '43', 'Cylinder Length': '1-3/8" (35mm)', '6 Pin Plug Part Number': '13-0403', '7 Pin Plug Part Number': '13-0403' },
                { 'No.': '44', 'Cylinder Length': '1-1/2" (38mm)', '6 Pin Plug Part Number': '13-0404', '7 Pin Plug Part Number': '13-0404' },
                { 'No.': '46', 'Cylinder Length': '1-3/4" (44mm)', '6 Pin Plug Part Number': '13-0405', '7 Pin Plug Part Number': '13-0405' },
                { 'No.': '48', 'Cylinder Length': '2" (51mm)', '6 Pin Plug Part Number': '13-0406', '7 Pin Plug Part Number': '13-0406' },
                { 'No.': '50', 'Cylinder Length': '2-1/4" (57mm)', '6 Pin Plug Part Number': '13-0407', '7 Pin Plug Part Number': '13-0407' },
                { 'No.': '52', 'Cylinder Length': '2-1/2" (64mm)', '6 Pin Plug Part Number': '13-0408', '7 Pin Plug Part Number': '13-0408' },
                { 'No.': '54', 'Cylinder Length': '2-3/4" (70mm)', '6 Pin Plug Part Number': '13-0409', '7 Pin Plug Part Number': '13-0409' },
                { 'No.': '56', 'Cylinder Length': '3" (76mm)', '6 Pin Plug Part Number': '13-0474', '7 Pin Plug Part Number': '13-0474' },
              ]
            }
        ]},
        { id: '2', name: 'Cylinder Shell, Cap & Slide Assy.', components: [
            {
              description: 'Varies by cylinder length.',
              isTable: true,
              headers: ['No.', 'Cylinder Length', '6 Pin Shell & Slide Assy. Part Number', '7 Pin Shell & Slide Assy. Part Number'],
              rows: [
                { 'No.': '41', 'Cylinder Length': '1-1/8" (29mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2005', '7 Pin Shell & Slide Assy. Part Number': 'N/A' },
                { 'No.': '42', 'Cylinder Length': '1-1/4" (32mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2006', '7 Pin Shell & Slide Assy. Part Number': '13-2765' },
                { 'No.': '43', 'Cylinder Length': '1-3/8" (35mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2766', '7 Pin Shell & Slide Assy. Part Number': '13-2766' },
                { 'No.': '44', 'Cylinder Length': '1-1/2" (38mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2767', '7 Pin Shell & Slide Assy. Part Number': '13-2767' },
                { 'No.': '46', 'Cylinder Length': '1-3/4" (44mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2768', '7 Pin Shell & Slide Assy. Part Number': '13-2768' },
                { 'No.': '48', 'Cylinder Length': '2" (51mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2769', '7 Pin Shell & Slide Assy. Part Number': '13-2769' },
                { 'No.': '50', 'Cylinder Length': '2-1/4" (57mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2770', '7 Pin Shell & Slide Assy. Part Number': '13-2770' },
                { 'No.': '52', 'Cylinder Length': '2-1/2" (64mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2771', '7 Pin Shell & Slide Assy. Part Number': '13-2771' },
                { 'No.': '54', 'Cylinder Length': '2-3/4" (70mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2772', '7 Pin Shell & Slide Assy. Part Number': '13-2772' },
                { 'No.': '56', 'Cylinder Length': '3" (76mm)', '6 Pin Shell & Slide Assy. Part Number': '13-2773', '7 Pin Shell & Slide Assy. Part Number': '13-2773' },
              ]
            }
        ]},
        { id: '3', name: 'Bottom Pin', components: [
            {
                description: 'Varies by key bitting.',
                isTable: true,
                headers: ['Size #', 'Part Number', 'Length'],
                rows: [
                    { 'Size #': '1', 'Part Number': '13-0064', 'Length': '.170' },
                    { 'Size #': '2', 'Part Number': '13-0065', 'Length': '.190' },
                    { 'Size #': '3', 'Part Number': '13-0066', 'Length': '.210' },
                    { 'Size #': '4', 'Part Number': '13-0067', 'Length': '.230' },
                    { 'Size #': '5', 'Part Number': '13-0068', 'Length': '.250' },
                    { 'Size #': '6', 'Part Number': '13-0069', 'Length': '.270' },
                    { 'Size #': '7', 'Part Number': '13-0070', 'Length': '.290' },
                    { 'Size #': '8', 'Part Number': '13-0071', 'Length': '.310' },
                    { 'Size #': '9', 'Part Number': '13-0072', 'Length': '.330' },
                    { 'Size #': '10', 'Part Number': '13-0073', 'Length': '.350' },
                ]
            }
        ]},
        { id: '4', name: 'Master Pin', components: [
            {
                description: 'Varies by keying.',
                isTable: true,
                headers: ['Size #', 'Part Number', 'Length'],
                rows: [
                    { 'Size #': '2', 'Part Number': '13-0051', 'Length': '.040' },
                    { 'Size #': '3', 'Part Number': '13-0052', 'Length': '.060' },
                    { 'Size #': '4', 'Part Number': '13-0053', 'Length': '.080' },
                    { 'Size #': '5', 'Part Number': '13-0054', 'Length': '.100' },
                    { 'Size #': '6', 'Part Number': '13-0055', 'Length': '.120' },
                    { 'Size #': '7', 'Part Number': '13-0056', 'Length': '.140' },
                    { 'Size #': '8', 'Part Number': '13-0057', 'Length': '.160' },
                    { 'Size #': '9', 'Part Number': '13-0058', 'Length': '.180' },
                    { 'Size #': '10', 'Part Number': '13-0059', 'Length': '.200' },
                    { 'Size #': '11', 'Part Number': '13-0060', 'Length': '.220' },
                    { 'Size #': '12', 'Part Number': '13-0061', 'Length': '.240' },
                    { 'Size #': '13', 'Part Number': '13-0062', 'Length': '.260' },
                    { 'Size #': '14', 'Part Number': '13-0063', 'Length': '.280' },
                ]
            }
        ]},
        { id: '5', name: 'Top Pin', components: [
             {
                description: 'Varies by keying.',
                isTable: true,
                headers: ['Size #', 'Part Number', 'Length'],
                rows: [
                    { 'Size #': '2', 'Part Number': '13-0051', 'Length': '.040' },
                    { 'Size #': '3', 'Part Number': '13-0052', 'Length': '.060' },
                    { 'Size #': '4', 'Part Number': '13-0053', 'Length': '.080' },
                    { 'Size #': '5', 'Part Number': '13-0054', 'Length': '.100' },
                    { 'Size #': '6', 'Part Number': '13-0055', 'Length': '.120' },
                    { 'Size #': '7', 'Part Number': '13-0056', 'Length': '.140' },
                    { 'Size #': '8', 'Part Number': '13-0057', 'Length': '.160' },
                    { 'Size #': '9', 'Part Number': '13-0058', 'Length': '.180' },
                    { 'Size #': '10', 'Part Number': '13-0059', 'Length': '.200' },
                    { 'Size #': '11', 'Part Number': '13-0060', 'Length': '.220' },
                    { 'Size #': '12', 'Part Number': '13-0061', 'Length': '.240' },
                    { 'Size #': '13', 'Part Number': '13-0062', 'Length': '.260' },
                    { 'Size #': '14', 'Part Number': '13-0063', 'Length': '.280' },
                ]
            }
        ]},
        { id: '6', name: 'Compression Spring', components: [{ partNumber: '13-0265', description: '' }] },
        { id: '7', name: 'Cam', components: [
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
        { id: '8', name: 'Screw', components: [{ partNumber: '01-1121', description: '#3-48 x 5/16" PH. FL' }] },
        { id: '13', name: 'Slide', components: [
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
                  { id: '', name: 'Key Blank', components: [
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
          { id: '1', name: 'Plug', components: [{ partNumber: '13-0090 (6-Pin) or 13-0087 (7-Pin)', description: 'Varies by pin count' }] },
          { id: '2', name: 'Cylinder Shell, Cap & Slide Assy.', components: [{ partNumber: '13-2005 (6-Pin) or 13-2712 (7-Pin)', description: 'Varies by pin count' }] },
          { id: '3', name: 'Bottom Pin', components: [
            {
                description: 'Varies by key bitting.',
                isTable: true,
                headers: ['Size #', 'Part Number', 'Length'],
                rows: [
                    { 'Size #': '1', 'Part Number': '13-0064', 'Length': '.170' },
                    { 'Size #': '2', 'Part Number': '13-0065', 'Length': '.190' },
                    { 'Size #': '3', 'Part Number': '13-0066', 'Length': '.210' },
                    { 'Size #': '4', 'Part Number': '13-0067', 'Length': '.230' },
                    { 'Size #': '5', 'Part Number': '13-0068', 'Length': '.250' },
                    { 'Size #': '6', 'Part Number': '13-0069', 'Length': '.270' },
                    { 'Size #': '7', 'Part Number': '13-0070', 'Length': '.290' },
                    { 'Size #': '8', 'Part Number': '13-0071', 'Length': '.310' },
                    { 'Size #': '9', 'Part Number': '13-0072', 'Length': '.330' },
                    { 'Size #': '10', 'Part Number': '13-0073', 'Length': '.350' },
                ]
            }
          ]},
          { id: '4', name: 'Master Pin', components: [
            {
                description: 'Varies by keying.',
                isTable: true,
                headers: ['Size #', 'Part Number', 'Length'],
                rows: [
                    { 'Size #': '2', 'Part Number': '13-0051', 'Length': '.040' },
                    { 'Size #': '3', 'Part Number': '13-0052', 'Length': '.060' },
                    { 'Size #': '4', 'Part Number': '13-0053', 'Length': '.080' },
                    { 'Size #': '5', 'Part Number': '13-0054', 'Length': '.100' },
                    { 'Size #': '6', 'Part Number': '13-0055', 'Length': '.120' },
                    { 'Size #': '7', 'Part Number': '13-0056', 'Length': '.140' },
                    { 'Size #': '8', 'Part Number': '13-0057', 'Length': '.160' },
                    { 'Size #': '9', 'Part Number': '13-0058', 'Length': '.180' },
                    { 'Size #': '10', 'Part Number': '13-0059', 'Length': '.200' },
                    { 'Size #': '11', 'Part Number': '13-0060', 'Length': '.220' },
                    { 'Size #': '12', 'Part Number': '13-0061', 'Length': '.240' },
                    { 'Size #': '13', 'Part Number': '13-0062', 'Length': '.260' },
                    { 'Size #': '14', 'Part Number': '13-0063', 'Length': '.280' },
                ]
            }
          ]},
          { id: '5', name: 'Top Pin', components: [
            {
                description: 'Varies by keying.',
                isTable: true,
                headers: ['Size #', 'Part Number', 'Length'],
                rows: [
                    { 'Size #': '2', 'Part Number': '13-0051', 'Length': '.040' },
                    { 'Size #': '3', 'Part Number': '13-0052', 'Length': '.060' },
                    { 'Size #': '4', 'Part Number': '13-0053', 'Length': '.080' },
                    { 'Size #': '5', 'Part Number': '13-0054', 'Length': '.100' },
                    { 'Size #': '6', 'Part Number': '13-0055', 'Length': '.120' },
                    { 'Size #': '7', 'Part Number': '13-0056', 'Length': '.140' },
                    { 'Size #': '8', 'Part Number': '13-0057', 'Length': '.160' },
                    { 'Size #': '9', 'Part Number': '13-0058', 'Length': '.180' },
                    { 'Size #': '10', 'Part Number': '13-0059', 'Length': '.200' },
                    { 'Size #': '11', 'Part Number': '13-0060', 'Length': '.220' },
                    { 'Size #': '12', 'Part Number': '13-0061', 'Length': '.240' },
                    { 'Size #': '13', 'Part Number': '13-0062', 'Length': '.260' },
                    { 'Size #': '14', 'Part Number': '13-0063', 'Length': '.280' },
                ]
            }
          ]},
          { id: '6', name: 'Compression Spring', components: [{ partNumber: '13-0265', description: '' }] },
          { id: '9', name: 'Plug Retainer', components: [{ partNumber: '13-0080', description: '' }] },
          { id: '10', name: 'Tail Piece', components: [{ partNumber: '13-0085', description: '' }] },
          { id: '11', name: 'Cylinder Back Plate', components: [{ partNumber: '13-0086', description: '' }] },
          { id: '12', name: 'Connecting Screws', components: [
              { partNumber: '13-0075', description: 'Standard Connecting Screws #12-24 x 2-5/8"' },
              { partNumber: '13-0074', description: 'Standard Connecting Screws #12-24 x 2-1/8"' },
          ]},
          { id: '13', name: 'Slide', components: [
              { partNumber: '13-1341', description: '6 Pin Slide (Mfg after 06-2008)' },
              { partNumber: '13-1797', description: '7 Pin Slide (Mfg after 06-2008)' },
              { partNumber: '13-0779', description: '6 Pin Slide (Mfg prior to 06-2008)' },
              { partNumber: '13-0780', description: '7 Pin Slide (Mfg prior to 06-2008)' },
          ]}
        ]
      },
    {
      id: 'key-in-lever',
      name: 'Key-in-Lever Cylinder',
      imageUrl: images.KILCyls,
      parts: [
        { id: '', name: 'Key Blank', components: [
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
        { id: '2', name: 'Plug', components: [
            { partNumber: '13-3142', description: 'For 6, 7 Lever, 8L, 10, 10X, 11, 6500, etc.' },
            { partNumber: '13-3425', description: 'For 7, 8, 9 Knobs' },
            { partNumber: '13-0920', description: 'For 5500*, 8X' },
        ]},
        { id: '3', name: 'Cylinder Shell & Slide Assembly', components: [
            { partNumber: '13-3257', description: 'For 7, 8, 9 Knobs and 6, 6500 lines' },
            { partNumber: '13-3493', description: 'For 460, 470, 480, 1655 lines' },
        ]},
        { id: '4', name: 'Bottom Pin', components: [
            {
                description: 'Varies by bitting.',
                isTable: true,
                headers: ['Size #', 'Part Number', 'Length'],
                rows: [
                    { 'Size #': '1', 'Part Number': '13-0064', 'Length': '.170' },
                    { 'Size #': '2', 'Part Number': '13-0065', 'Length': '.190' },
                    { 'Size #': '3', 'Part Number': '13-0066', 'Length': '.210' },
                    { 'Size #': '4', 'Part Number': '13-0067', 'Length': '.230' },
                    { 'Size #': '5', 'Part Number': '13-0068', 'Length': '.250' },
                    { 'Size #': '6', 'Part Number': '13-0069', 'Length': '.270' },
                    { 'Size #': '7', 'Part Number': '13-0070', 'Length': '.290' },
                    { 'Size #': '8', 'Part Number': '13-0071', 'Length': '.310' },
                    { 'Size #': '9', 'Part Number': '13-0072', 'Length': '.330' },
                    { 'Size #': '10', 'Part Number': '13-0073', 'Length': '.350' },
                ]
            }
        ]},
        { id: '5', name: 'Top Pin', components: [
            {
                description: 'Varies by keying.',
                isTable: true,
                headers: ['Size #', 'Part Number', 'Length'],
                rows: [
                    { 'Size #': '2', 'Part Number': '13-0051', 'Length': '.040' },
                    { 'Size #': '3', 'Part Number': '13-0052', 'Length': '.060' },
                    { 'Size #': '4', 'Part Number': '13-0053', 'Length': '.080' },
                    { 'Size #': '5', 'Part Number': '13-0054', 'Length': '.100' },
                    { 'Size #': '6', 'Part Number': '13-0055', 'Length': '.120' },
                    { 'Size #': '7', 'Part Number': '13-0056', 'Length': '.140' },
                    { 'Size #': '8', 'Part Number': '13-0057', 'Length': '.160' },
                    { 'Size #': '9', 'Part Number': '13-0058', 'Length': '.180' },
                    { 'Size #': '10', 'Part Number': '13-0059', 'Length': '.200' },
                    { 'Size #': '11', 'Part Number': '13-0060', 'Length': '.220' },
                    { 'Size #': '12', 'Part Number': '13-0061', 'Length': '.240' },
                    { 'Size #': '13', 'Part Number': '13-0062', 'Length': '.260' },
                    { 'Size #': '14', 'Part Number': '13-0063', 'Length': '.280' },
                ]
            }
        ]},
        { id: '6', name: 'Master Pin', components: [
            {
                description: 'Varies by keying.',
                isTable: true,
                headers: ['Size #', 'Part Number', 'Length'],
                rows: [
                    { 'Size #': '2', 'Part Number': '13-0051', 'Length': '.040' },
                    { 'Size #': '3', 'Part Number': '13-0052', 'Length': '.060' },
                    { 'Size #': '4', 'Part Number': '13-0053', 'Length': '.080' },
                    { 'Size #': '5', 'Part Number': '13-0054', 'Length': '.100' },
                    { 'Size #': '6', 'Part Number': '13-0055', 'Length': '.120' },
                    { 'Size #': '7', 'Part Number': '13-0056', 'Length': '.140' },
                    { 'Size #': '8', 'Part Number': '13-0057', 'Length': '.160' },
                    { 'Size #': '9', 'Part Number': '13-0058', 'Length': '.180' },
                    { 'Size #': '10', 'Part Number': '13-0059', 'Length': '.200' },
                    { 'Size #': '11', 'Part Number': '13-0060', 'Length': '.220' },
                    { 'Size #': '12', 'Part Number': '13-0061', 'Length': '.240' },
                    { 'Size #': '13', 'Part Number': '13-0062', 'Length': '.260' },
                    { 'Size #': '14', 'Part Number': '13-0063', 'Length': '.280' },
                ]
            }
        ]},
        { id: '7', name: 'Compression Spring', components: [{ partNumber: '13-0265', description: '' }] },
        { id: '8', name: 'Plug Retainer Ring', components: [
            { partNumber: '13-0205', description: 'For most levers and 8 line knob mfg after 4/05' },
            { partNumber: '06-0166', description: 'For 7, 8, 9 Knob plug mfg prior to 3/05' },
            { partNumber: '01-0870', description: 'For 5500*, 8X' },
        ]},
        { id: '9', name: 'Tail Piece', components: [
            { partNumber: '10-3629', description: 'For 10X (1-3/8"-2" door)' },
            { partNumber: '13-1385', description: 'For 11 Line (except 50 func)' },
            { partNumber: '13-0895', description: 'For 7, 8L, 10, 6500' },
            { partNumber: '13-1849', description: 'For 8X Line' },
        ]},
        { id: '16', name: 'Slide', components: [
            { partNumber: '13-1341', description: 'For most current models (Mfg after June 2008)' },
            { partNumber: '13-0779', description: 'For older models (Mfg prior to June 2008)' },
        ]},
      ]
    }
  ]
};