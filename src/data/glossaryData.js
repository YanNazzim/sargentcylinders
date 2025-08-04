// src/data/glossaryData.js
import { images } from '../images/images';

export const glossaryData = {
  cylinderTypes: [
    {
      id: 'mortise',
      name: 'Mortise Cylinder',
      imageUrl: images.MortiseCyls,
      parts: [
        { id: '1', name: 'Plug', components: [{ partNumber: 'See Table Page 17', description: 'Varies by cylinder length' }] },
        { id: '2', name: 'Cylinder Shell, Cap & Slide Assy.', components: [{ partNumber: 'See Table Page 17', description: 'Varies by cylinder length' }] },
        { id: '3', name: 'Bottom Pin', components: [{ partNumber: 'See Table Page 25', description: 'Varies by key bitting' }] },
        { id: '4', name: 'Master Pin', components: [{ partNumber: '13-0062 (Size #13)', description: 'Additional sizes on page 25' }] },
        { id: '5', name: 'Top Pin', components: [{ partNumber: 'See Table Page 25', description: 'Varies by keying' }] },
        { id: '6', name: 'Compression Spring', components: [{ partNumber: '13-0265', description: '' }] },
        { id: '7', name: 'Cam', components: [{ partNumber: 'See Table Page 18', description: 'Multiple options available' }] },
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
          { id: '1', name: 'Plug', components: [{ partNumber: '13-0090 (6-Pin) or 13-0087 (7-Pin)', description: 'Varies by pin count' }] },
          { id: '2', name: 'Cylinder Shell, Cap & Slide Assy.', components: [{ partNumber: '13-2005 (6-Pin) or 13-2712 (7-Pin)', description: 'Varies by pin count' }] },
          { id: '3', name: 'Bottom Pin', components: [{ partNumber: 'See Table Page 25', description: 'Varies by key bitting' }] },
          { id: '4', name: 'Master Pin', components: [{ partNumber: '13-0062', description: 'See page 25 for all sizes' }] },
          { id: '5', name: 'Top Pin', components: [{ partNumber: 'See Table Page 25', description: 'Varies by keying' }] },
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
        { id: '1', name: 'Key Blank', components: [{ partNumber: 'See Page 28', description: 'Varies by keyway' }] },
        { id: '2', name: 'Plug', components: [
            { partNumber: '13-3142', description: 'For 6, 7 Lever, 8L, 10, 10X, 11, 6500, etc.' },
            { partNumber: '13-3425', description: 'For 7, 8, 9 Knobs' },
            { partNumber: '13-0920', description: 'For 5500*, 8X' },
        ]},
        { id: '3', name: 'Cylinder Shell & Slide Assembly', components: [
            { partNumber: '13-3257', description: 'For 7, 8, 9 Knobs and 6, 6500 lines' },
            { partNumber: '13-3493', description: 'For 460, 470, 480, 1655 lines' },
        ]},
        { id: '4', name: 'Bottom Pin', components: [{ partNumber: 'See Page 25', description: 'Varies by bitting' }]},
        { id: '5', name: 'Top Pin', components: [{ partNumber: '13-0059 (Size #10)', description: 'Additional sizes on page 25' }]},
        { id: '6', name: 'Master Pin', components: [{ partNumber: 'See Page 25', description: 'Varies by keying' }]},
        { id: '7', name: 'Compression Spring', components: [{ partNumber: '13-0265', description: '' }]},
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