// src/data/glossary/degreeData.js
import { images } from "../../images/images";

export const degreeData = {
    id: "degree",
    name: "Degree Cylinders",
    imageUrl: images.DegreeCyls,
    parts: [
        {
            id: "degree-dg1-mortise-rim",
            name: "DG1 Mortise/Rim Parts",
            components: [
                {
                    description: "Plugs for DG1 Mortise Cylinders",
                    isTable: true,
                    headers: ["Cylinder Length", "Part Number"],
                    rows: [
                        { "Cylinder Length": '1-1/8" (29mm)', "Part Number": "DG-2911" },
                        { "Cylinder Length": '1-1/4" (32mm)', "Part Number": "DG-2912" },
                        { "Cylinder Length": '1-3/8" (35mm)', "Part Number": "DG-2913" },
                        { "Cylinder Length": '1-1/2" (38mm)', "Part Number": "DG-2914" },
                        { "Cylinder Length": '1-3/4" (44mm)', "Part Number": "DG-2915" },
                    ],
                },
                { partNumber: "DG-2894", description: "Plug for DG1-34 Rim Cylinder" },
                { partNumber: "DG-0017", description: "Compression Spring" },
                { partNumber: "DG-0040", description: "Spring Cover" },
            ],
        },
        {
            id: "degree-dg2-mortise-rim",
            name: "DG2 Mortise/Rim Parts",
            components: [
                { partNumber: "DG-0191", description: "Plug for DG2-34 Rim Cylinder" },
                { partNumber: "DG-0087", description: "Slider C6M6 (For keys with a #6 slider cut)" },
                { partNumber: "DG-0060", description: "Slider Spring" },
                { partNumber: "DG-0059", description: "Sidebar Spring" },
                { partNumber: "DG-2818", description: "Sidebar" },
            ],
        },
        {
            id: "degree-dg3-mortise-rim",
            name: "DG3 Mortise/Rim Parts",
            components: [
                {
                    description: "Plugs for DG3 Mortise Cylinders",
                    isTable: true,
                    headers: ["Cylinder Length", "Part Number"],
                    rows: [
                        { "Cylinder Length": '1-1/8" (29mm)', "Part Number": "DG-2881" },
                        { "Cylinder Length": '1-1/4" (32mm)', "Part Number": "DG-2882" },
                        { "Cylinder Length": '1-3/8" (35mm)', "Part Number": "DG-2883" },
                        { "Cylinder Length": '1-1/2" (38mm)', "Part Number": "DG-2884" },
                        { "Cylinder Length": '1-3/4" (44mm)', "Part Number": "DG-2885" },
                    ],
                },
                { partNumber: "DG-2895", description: "Plug for DG3-34 Rim Cylinder" },
                { partNumber: "DG-0057", description: "Security Plate (Required for UL437)" },
            ],
        },
        {
            id: "degree-dg1-lfic",
            name: "DG1 LFIC Core Parts",
            components: [
                { partNumber: "DG-0200", description: "Plug" },
                { partNumber: "DG-0290", description: "Cylinder Shell" },
                { partNumber: "DG-0215", description: "Control Sleeve" },
                { partNumber: "DG-0097", description: "Compression Spring, LFIC (Control Sleeve Pin Chambers Only)" },
                { partNumber: "DG-0090", description: "Plug Retainer" },
                { partNumber: "DG-0059", description: "Sidebar Spring" },
                { partNumber: "DG-0056", description: "Sidebar" },
            ],
        },
        {
            id: "degree-dg2-lfic",
            name: "DG2 LFIC Core Parts",
            components: [
                { partNumber: "DG-0201", description: "Plug" },
                { partNumber: "DG-0291", description: "Cylinder Shell" },
                { partNumber: "DG-0216", description: "Control Sleeve" },
            ],
        },
        {
            id: "degree-dg3-lfic",
            name: "DG3 LFIC Core Parts",
            components: [
                { partNumber: "DG-2901", description: "Plug" },
                { partNumber: "DG-0292", description: "Cylinder Shell" },
            ],
        },
        {
            id: "degree-dg1-bored",
            name: "DG1 Bored/Auxiliary Parts",
            components: [
                { partNumber: "DG-3061", description: "Plug with tailpiece retainer (Lever Locks)" },
                { partNumber: "DG-3071", description: "Plug with roll pin (Knob Locks)" },
                { partNumber: "DG-0171", description: "Cylinder Shell (Lever Locks)" },
                { partNumber: "DG-0261", description: "Cylinder Shell (Knob Locks)" },
            ],
        },
        {
            id: "degree-dg2-bored",
            name: "DG2 Bored/Auxiliary Parts",
            components: [
                { partNumber: "DG-3062", description: "Plug with tailpiece retainer (Lever Locks)" },
                { partNumber: "DG-3072", description: "Plug with roll pin (Knob Locks)" },
                { partNumber: "DG-0172", description: "Cylinder Shell (Lever Locks)" },
                { partNumber: "DG-0262", description: "Cylinder Shell (Knob Locks)" },
            ],
        },
        {
            id: "degree-dg3-bored",
            name: "DG3 Bored/Auxiliary Parts",
            components: [
                { partNumber: "DG-3063", description: "Plug with tailpiece retainer (Lever Locks)" },
                { partNumber: "DG-3073", description: "Plug with roll pin (Knob Locks)" },
            ],
        },
        {
            id: "degree-key-blanks",
            name: "Key Blanks",
            components: [
                {
                    description: "DG1 Master Key Blanks*",
                    isTable: true,
                    headers: ["Key System", "Master Key Blanks*"],
                    rows: [
                        { "Key System": "DG1", "Master Key Blanks*": "DG 6270 TN" },
                        { "Key System": "DG1", "Master Key Blanks*": "DG 6270 TDH" },
                        { "Key System": "DG1", "Master Key Blanks*": "DG 6270 THM" },
                        { "Key System": "DG1", "Master Key Blanks*": "DG 6270 TD" },
                        { "Key System": "DG1", "Master Key Blanks*": "DG 6270 TH" },
                        { "Key System": "DG1", "Master Key Blanks*": "DG 6270 TM" },
                    ],
                },
                {
                    description: "DG2/DG3 Master Key Blanks*",
                    isTable: true,
                    headers: ["Key System", "Master Key Blanks*"],
                    rows: [
                        { "Key System": "DG2- or DG3-", "Master Key Blanks*": "DS 6270 TN" },
                        { "Key System": "DG2- or DG3-", "Master Key Blanks*": "DS 6270 TDH" },
                        { "Key System": "DG2- or DG3-", "Master Key Blanks*": "DS 6270 THM" },
                        { "Key System": "DG2- or DG3-", "Master Key Blanks*": "DS 6270 TD" },
                        { "Key System": "DG2- or DG3-", "Master Key Blanks*": "DS 6270 TH" },
                        { "Key System": "DG2- or DG3-", "Master Key Blanks*": "DS 6270 TM" },
                    ],
                },
                {
                    description: "DG1 Change Key Blanks*",
                    isTable: true,
                    headers: ["Key System", "Change Key Blanks*"],
                    rows: [
                        { "Key System": "DG1", "Change Key Blanks*": "DG 6275 TA" },
                        { "Key System": "DG1", "Change Key Blanks*": "DG 6275 TB" },
                        { "Key System": "DG1", "Change Key Blanks*": "DG 6275 TC" },
                        { "Key System": "DG1", "Change Key Blanks*": "DG 6275 TE" },
                        { "Key System": "DG1", "Change Key Blanks*": "DG 6275 TF" },
                        { "Key System": "DG1", "Change Key Blanks*": "DG 6275 TG" },
                        { "Key System": "DG1", "Change Key Blanks*": "DG 6275 TJ" },
                        { "Key System": "DG1", "Change Key Blanks*": "DG 6275 TK" },
                        { "Key System": "DG1", "Change Key Blanks*": "DG 6275 TL" },
                    ],
                },
                {
                    description: "DG2/DG3 Change Key Blanks*",
                    isTable: true,
                    headers: ["Key System", "Change Key Blanks*"],
                    rows: [
                        { "Key System": "DG2- or DG3-", "Change Key Blanks*": "DS 6275 TA" },
                        { "Key System": "DG2- or DG3-", "Change Key Blanks*": "DS 6275 TB" },
                        { "Key System": "DG2- or DG3-", "Change Key Blanks*": "DS 6275 TC" },
                        { "Key System": "DG2- or DG3-", "Change Key Blanks*": "DS 6275 TE" },
                        { "Key System": "DG2- or DG3-", "Change Key Blanks*": "DS 6275 TF" },
                        { "Key System": "DG2- or DG3-", "Change Key Blanks*": "DS 6275 TG" },
                        { "Key System": "DG2- or DG3-", "Change Key Blanks*": "DS 6275 TJ" },
                        { "Key System": "DG2- or DG3-", "Change Key Blanks*": "DS 6275 TK" },
                        { "Key System": "DG2- or DG3-", "Change Key Blanks*": "DS 6275 TL" },
                    ],
                },
            ],
        },
    ],
};