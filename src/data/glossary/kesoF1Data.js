// src/data/glossary/kesoF1Data.js
import { images } from "../../images/images";

export const kesoF1Data = {
    id: "keso-f1",
    name: "Keso F1 Cylinders",
    imageUrl: images.KESOcyls,
    parts: [
        {
            id: "keso-f1-mortise-cylinders",
            name: "Mortise Cylinders",
            components: [
                {
                    description: "F1-70 Series Mortise Type Cylinders",
                    isTable: true,
                    headers: ["Cylinder Length", "Part Number"],
                    rows: [
                        { "Cylinder Length": '1-1/8"', "Part Number": "F1-71" },
                        { "Cylinder Length": '1-1/4"', "Part Number": "F1-72" },
                        { "Cylinder Length": '1-3/8"', "Part Number": "F1-73" },
                        { "Cylinder Length": '1-1/2"', "Part Number": "F1-74" },
                        { "Cylinder Length": '1-3/4"', "Part Number": "F1-76" },
                    ],
                },
            ],
        },
        {
            id: "keso-f1-rim-cylinders",
            name: "Rim Cylinders",
            components: [
                {
                    description: "F1-64 Series Rim Type Cylinders",
                    isTable: true,
                    headers: ["Cylinder Length", "Part Number"],
                    rows: [
                        { "Cylinder Length": '1-3/4" to 3-1/8"', "Part Number": "F1-64" },
                    ],
                },
            ],
        },
        {
            id: "keso-f1-mortise-cores",
            name: "Mortise Removable Cores",
            components: [
                {
                    description: "F1-170 Series Removable Core Mortise Type Cylinders",
                    isTable: true,
                    headers: ["Cylinder Length", "Standard Cam Core", "105 Cam Core"],
                    rows: [
                        { "Cylinder Length": '1-1/4"', "Standard Cam Core": "F1-5172", "105 Cam Core": "F1-5172-105" },
                        { "Cylinder Length": '1-3/8"', "Standard Cam Core": "F1-5173", "105 Cam Core": "F1-5173-105" },
                        { "Cylinder Length": '1-1/2"', "Standard Cam Core": "F1-5174", "105 Cam Core": "F1-5174-105" },
                        { "Cylinder Length": '1-3/4"', "Standard Cam Core": "F1-5176", "105 Cam Core": "F1-5176-105" },
                    ],
                },
            ],
        },
        {
            id: "keso-f1-rim-cores",
            name: "Rim Removable Cores",
            components: [
                { partNumber: "F1-5164", description: "Keso F1 Rim Type Removable Core" },
            ],
        },
        {
            id: "keso-cams",
            name: "Cams",
            components: [
                {
                    description: "Available cams for Keso F1 and Keso Security System cylinders.",
                    isTable: true,
                    headers: ["Cam Description", "Application", "Cam Part # When Ordered Separately"],
                    rows: [
                        { "Cam Description": "Regular Cam (Std)", Application: "F1-82-71 thru F1-82-76, F1-83-172 thru F1-83-176, 71 thru 76 and 172 thru 176", "Cam Part # When Ordered Separately": "Std (No Suffix) (13-2563)" },
                        { "Cam Description": "Vertical Hotel Cam (Cam Suffix-115)", Application: "F1-82-(72-115, 73-115). Note: these cylinders have limited key rotation and are only for use in Sargent 78/8250 locks.", "Cam Part # When Ordered Separately": "13-2283 (115 Cam*)" },
                        { "Cam Description": "Short Offset Cam (Cam Suffix-105)", Application: "Inside cylinder cam for Mortise Functions 16 and 92", "Cam Part # When Ordered Separatedly": "13-2522 (105 Cam)" },
                        { "Cam Description": "70-101 and 170-101 Offset Cams", Application: 'Adams Rite MS1850 series locks only. Packed standard with #90-1/8" blocking ring.', "Cam Part # When Ordered Separatedly": "13-2521 (101 Cam)" },
                        { "Cam Description": "70-113 Vertical Cam (Cam Suffix-113)", Application: "Cam used with 4370 Series Key switches", "Cam Part # When Ordered Separatedly": "13-2519 (113 Cam)" },
                        { "Cam Description": "70-106 Cam (Cam Suffix-106)", Application: '70 Series mortise cylinders for Schlage "L" mortise lock', "Cam Part # When Ordered Separatedly": "13-0939 (106 Cam)" },
                    ],
                },
            ],
        },
        {
            id: "keso-f1-keys",
            name: "Keys & Key Blanks",
            components: [
                { partNumber: "F1 K372 MK", description: "F1 Master Key" },
                { partNumber: "F1 K372 CHK", description: "F1 Day Key" },
                { partNumber: "F1 K372 CTL", description: "F1 Control Key" },
                { partNumber: "F1 K373 EMK", description: "F1 Mortise Emergency Key" },
                { partNumber: "F1 K374 EMK", description: "F1 8G50 Emergency Key" },
                { partNumber: "F1-K376", description: "F1 Master and Change Key Blanks" },
                { partNumber: "F1-K-375", description: "F1 Control Key Blanks" },
            ],
        },
    ],
};