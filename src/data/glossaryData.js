// src/data/glossaryData.js
import { images } from '../images/images';

export const glossaryData = {
  cylinderTypes: [
    {
      id: 'mortise',
      name: 'Mortise Cylinder',
      imageUrl: images.MortiseCyls, // Placeholder image
      parts: [
        { id: '1', name: 'Plug', partNumber: 'See Table', coordinates: [180, 270, 150, 40] },
        { id: '2', name: 'Cylinder Shell, Cap & Slide Assy.', partNumber: 'See Table', coordinates: [140, 380, 150, 80] },
        { id: '3', name: 'Bottom Pin', partNumber: 'See Table Page 16', coordinates: [130, 150, 100, 20] },
        { id: '4', name: 'Master Pin', partNumber: '13-0062', coordinates: [100, 470, 80, 20] },
        { id: '5', name: 'Top Pin', partNumber: 'See Table Page 25', coordinates: [60, 490, 80, 20] },
        { id: '6', name: 'Compression Spring', partNumber: '13-0265', coordinates: [20, 580, 100, 20] },
        { id: '7', name: 'Cam', partNumber: 'See Table Page 9', coordinates: [60, 680, 80, 60] },
        { id: '8', name: 'Screw', partNumber: '01-1121', coordinates: [90, 780, 60, 40] },
        { id: '13', name: '6 Pin Slide', partNumber: '13-1341', coordinates: [10, 650, 100, 20] }
      ]
    },
    {
      id: 'rim',
      name: 'Rim Cylinder',
      imageUrl: 'https://i.imgur.com/sT9f5gG.png', // Placeholder image
      parts: [
        { id: '1', name: 'Plug', partNumber: 'See Table', coordinates: [430, 270, 150, 40] },
        { id: '2', name: 'Cylinder Shell, Cap & Slide Assy.', partNumber: 'See Table', coordinates: [330, 420, 150, 80] },
        { id: '3', name: 'Bottom Pin', partNumber: 'See Table Page 25', coordinates: [340, 140, 100, 20] },
        { id: '4', name: 'Master Pin', partNumber: '13-0062', coordinates: [290, 520, 80, 20] },
        { id: '5', name: 'Top Pin', partNumber: 'See Table Page 25', coordinates: [250, 540, 80, 20] },
        { id: '6', name: 'Compression Spring', partNumber: '13-0265', coordinates: [210, 620, 100, 20] },
        { id: '9', name: 'Plug Retainer', partNumber: '13-0080', coordinates: [460, 640, 40, 40] },
        { id: '10', name: 'Tail Piece', partNumber: '13-0085', coordinates: [480, 800, 250, 30] },
        { id: '11', name: 'Cylinder Back Plate', partNumber: '13-0086', coordinates: [270, 820, 120, 120] },
        { id: '12', name: 'Connecting Screws', partNumber: '13-0075', coordinates: [220, 850, 150, 30] },
        { id: '13', name: '6 Pin Slide', partNumber: '13-1341', coordinates: [200, 680, 100, 20] }
      ]
    },
    {
        id: 'key-in-lever',
        name: 'Key-in-Lever Cylinder',
        imageUrl: images.KILCyls, // Placeholder image from catalog page 16
        parts: [
            { id: '1', name: '6 Pin Key Blank', partNumber: 'See Table Page 27', coordinates: [320, 20, 150, 80] },
            { id: '2', name: 'Plug & Ring Assembly', partNumber: '13-3142', coordinates: [400, 180, 150, 60] },
            { id: '3', name: 'Cylinder Shell & Slide Assembly', partNumber: '13-3257-Effective 9/03', coordinates: [200, 400, 150, 80] },
            { id: '4', name: 'Bottom Pin', partNumber: 'See Table Page 25', coordinates: [280, 180, 100, 20] },
            { id: '5', name: 'Top Pin', partNumber: '13-0059', coordinates: [140, 240, 80, 20] },
            { id: '6', name: 'Master Pin', partNumber: 'See Table Page 25', coordinates: [110, 450, 80, 20] },
            { id: '7', name: 'Compression Spring', partNumber: '13-0265', coordinates: [70, 520, 100, 20] },
            { id: '8', name: 'Plug Retainer Ring', partNumber: '13-0205', coordinates: [110, 590, 40, 40] },
            { id: '9', name: 'Tail Piece', partNumber: '13-1385', coordinates: [180, 750, 200, 40] },
            { id: '10', name: 'Cylinder Cap Spring', partNumber: '13-1555-Effective 6/03', coordinates: [460, 680, 80, 20] },
            { id: '11', name: 'Cylinder Cap Pin', partNumber: '13-1554-Effective 6/03', coordinates: [440, 740, 80, 20] },
            { id: '12', name: 'Cylinder Tail Washer', partNumber: '13-0883', coordinates: [410, 840, 60, 60] },
            { id: '13', name: 'Cylinder Endcap', partNumber: '13-0875', coordinates: [350, 880, 80, 60] },
            { id: '14', name: 'Tail Piece', partNumber: '13-0878', coordinates: [380, 700, 150, 30] },
            { id: '15', name: 'Blocking Piece', partNumber: '13-0884', coordinates: [450, 580, 40, 40] },
            { id: '16', name: 'Slide', partNumber: '13-1341', coordinates: [80, 400, 80, 20] },
            { id: '17', name: 'Tail Piece Retainer', partNumber: '13-0680', coordinates: [360, 520, 40, 40] },
            { id: '18', name: 'Cam Connector', partNumber: '13-1813', coordinates: [330, 800, 60, 60] }
        ]
    }
  ]
};