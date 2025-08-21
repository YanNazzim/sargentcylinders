// src/data/glossary/xcData.js
import { images } from "../../images/images";

export const xcData = {
    id: "xc",
    name: "XC Cylinders",
    imageUrl: images.XCcyls,
    parts: [
        {
            id: "xc-bored",
            name: "Bored & Auxiliary Locks",
            components: [
                {
                    description: "XC Cylinders for various SARGENT lock lines.",
                    isTable: true,
                    headers: ["Lock Line", "Complete 6-pin Assembly", "Plug Assembly", "Shell & Slide Assembly"],
                    rows: [
                        { "Lock Line": "11 Line (T-Zone)", "Complete 6-pin Assembly": "11-C11-1", "Plug Assembly": "13-4332", "Shell & Slide Assembly": "13-4334" },
                        { "Lock Line": "10X Line", "Complete 6-pin Assembly": "11-C10X-1", "Plug Assembly": "13-4332", "Shell & Slide Assembly": "13-4334" },
                        { "Lock Line": "10, 7, 6500 Line", "Complete 6-pin Assembly": "11-C10-1", "Plug Assembly": "13-4332", "Shell & Slide Assembly": "13-4334" },
                        { "Lock Line": "460, 470, 480 Deadbolts", "Complete 6-pin Assembly": "Varies (e.g., 11-C460-1)", "Plug Assembly": "Varies (e.g., 13-4329)", "Shell & Slide Assembly": "13-4337" },
                        { "Lock Line": "758/858 Padlocks", "Complete 6-pin Assembly": "11-C750-1 X US4", "Plug Assembly": "13-4332", "Shell & Slide Assembly": "13-4334" },
                    ],
                },
            ],
        },
        {
            id: "xc-mortise",
            name: "Mortise Cylinders",
            components: [
                {
                    description: "11-40 Series Mortise Cylinders",
                    isTable: true,
                    headers: ["Length", "Complete 6-pin Assembly", "Plug Assembly", "Shell & Slide Assembly"],
                    rows: [
                        { Length: '1-1/8"', "Complete 6-pin Assembly": "11-41", "Plug Assembly": "13-4314", "Shell & Slide Assembly": "13-4301" },
                        { Length: '1-1/4"', "Complete 6-pin Assembly": "11-42", "Plug Assembly": "13-4315", "Shell & Slide Assembly": "13-4302" },
                        { Length: '1-3/8"', "Complete 6-pin Assembly": "11-43", "Plug Assembly": "13-4316", "Shell & Slide Assembly": "13-4303" },
                        { Length: '1-1/2"', "Complete 6-pin Assembly": "11-44", "Plug Assembly": "13-4317", "Shell & Slide Assembly": "13-4304" },
                        { Length: '1-3/4"', "Complete 6-pin Assembly": "11-46", "Plug Assembly": "13-4318", "Shell & Slide Assembly": "13-4305" },
                    ],
                },
            ],
        },
        {
            id: "xc-rim",
            name: "Rim Cylinders",
            components: [
                {
                    description: "11-34 Rim Type Cylinders",
                    isTable: true,
                    headers: ["Description", "Part Number"],
                    rows: [
                        { Description: "Complete Assembly (6 pin)", "Part Number": "11-34" },
                        { Description: "Plug Assembly", "Part Number": "13-4312" },
                        { Description: "Shell & Slide Assembly", "Part Number": "13-4299" },
                    ],
                },
            ],
        },
        {
            id: "xc-cores",
            name: "Cores",
            components: [
                {
                    description: "Large Format Interchangeable Cores (LFIC) for XC systems.",
                    isTable: true,
                    headers: ["Description", "Part Number"],
                    rows: [
                        { Description: "Complete Core", "Part Number": "11-6300" },
                        { Description: "Plug", "Part Number": "13-4326" },
                        { Description: "Inner Shell & Slide Assy.", "Part Number": "13-5175" },
                    ],
                },
                {
                    description: "Small Format Interchangeable Cores (SFIC) for XC systems (7-Pin).",
                    isTable: true,
                    headers: ["Core Type", "Part Number"],
                    rows: [
                        { "Core Type": "Keyed Core", "Part Number": "11-7P-7300B" },
                        { "Core Type": "Uncombinated Core", "Part Number": "11-65-7300B" },
                        { "Core Type": "Disposable Plastic Core", "Part Number": "13-5174" },
                        { "Core Type": "Brass Construction Core", "Part Number": "11-72-7P Option" },
                    ],
                },
            ],
        },
        {
            id: "xc-cams",
            name: "Cams for 11-40 Series Mortise Cylinders",
            components: [
                {
                    description: "Optional Cams for 11-40 Series Mortise Cylinders",
                    isTable: true,
                    headers: ["Cam", "Part Number", "Description"],
                    rows: [
                        { Cam: "Standard Cam", "Part Number": "13-0664", Description: "Standard Cam 11-41 thru 11-56" },
                        { Cam: "#105", "Part Number": "13-0665", Description: "Short cam for 8292 and 8216 functions inside only" },
                        { Cam: "#101", "Part Number": "13-0512", Description: "Adams Rite 1850, 4700" },
                        { Cam: "#113", "Part Number": "13-0921", Description: "SARGENT 4370 Series key switches" },
                        { Cam: "#106", "Part Number": "13-0938", Description: '"Open" Schlage "L"' },
                        { Cam: "#112", "Part Number": "13-0097", Description: '"Open" Misc.' },
                    ],
                },
            ],
        },
    ],
};