// src/data/glossary/rimData.js
import { images } from "../../images/images";

export const rimData = {
    id: "rim",
    name: "Rim Cylinder",
    imageUrl: images.RimCyls,
    parts: [
        {
            id: "rim-plug",
            name: "Plug",
            components: [
                { partNumber: "13-0090 (6-Pin) or 13-0087 (7-Pin)", description: "Varies by pin count" },
            ],
        },
        {
            id: "rim-shell",
            name: "Cylinder Shell, Cap & Slide Assy.",
            components: [
                { partNumber: "13-2005 (6-Pin) or 13-2712 (7-Pin)", description: "Varies by pin count" },
            ],
        },
        {
            id: "rim-bottom-pin",
            name: "Bottom Pin",
            components: [
                {
                    description: "Varies by key bitting.",
                    isTable: true,
                    headers: ["Pin #", "Part Number", "Length"],
                    rows: [
                        { "Pin #": "1", "Part Number": "13-0064", Length: ".170" },
                        { "Pin #": "2", "Part Number": "13-0065", Length: ".190" },
                        { "Pin #": "3", "Part Number": "13-0066", Length: ".210" },
                        { "Pin #": "4", "Part Number": "13-0067", Length: ".230" },
                        { "Pin #": "5", "Part Number": "13-0068", Length: ".250" },
                        { "Pin #": "6", "Part Number": "13-0069", Length: ".270" },
                        { "Pin #": "7", "Part Number": "13-0070", Length: ".290" },
                        { "Pin #": "8", "Part Number": "13-0071", Length: ".310" },
                        { "Pin #": "9", "Part Number": "13-0072", Length: ".330" },
                        { "Pin #": "10", "Part Number": "13-0073", Length: ".350" },
                    ],
                },
            ],
        },
        {
            id: "rim-master-pin",
            name: "Master Pin",
            components: [
                {
                    description: "Varies by keying.",
                    isTable: true,
                    headers: ["Pin #", "Part Number", "Length"],
                    rows: [
                        { "Pin #": "2", "Part Number": "13-0051", Length: ".040" },
                        { "Pin #": "3", "Part Number": "13-0052", Length: ".060" },
                        { "Pin #": "4", "Part Number": "13-0053", Length: ".080" },
                        { "Pin #": "5", "Part Number": "13-0054", Length: ".100" },
                        { "Pin #": "6", "Part Number": "13-0055", Length: ".120" },
                        { "Pin #": "7", "Part Number": "13-0056", Length: ".140" },
                        { "Pin #": "8", "Part Number": "13-0057", Length: ".160" },
                        { "Pin #": "9", "Part Number": "13-0058", Length: ".180" },
                        { "Pin #": "10", "Part Number": "13-0059", Length: ".200" },
                        { "Pin #": "11", "Part Number": "13-0060", Length: ".220" },
                        { "Pin #": "12", "Part Number": "13-0061", Length: ".240" },
                        { "Pin #": "13", "Part Number": "13-0062", Length: ".260" },
                        { "Pin #": "14", "Part Number": "13-0063", Length: ".280" },
                    ],
                },
            ],
        },
        {
            id: "rim-top-pin",
            name: "Top Pin",
            components: [
                {
                    description: "Varies by keying.",
                    isTable: true,
                    headers: ["Pin #", "Part Number", "Length"],
                    rows: [
                        { "Pin #": "2", "Part Number": "13-0051", Length: ".040" },
                        { "Pin #": "3", "Part Number": "13-0052", Length: ".060" },
                        { "Pin #": "4", "Part Number": "13-0053", Length: ".080" },
                        { "Pin #": "5", "Part Number": "13-0054", Length: ".100" },
                        { "Pin #": "6", "Part Number": "13-0055", Length: ".120" },
                        { "Pin #": "7", "Part Number": "13-0056", Length: ".140" },
                        { "Pin #": "8", "Part Number": "13-0057", Length: ".160" },
                        { "Pin #": "9", "Part Number": "13-0058", Length: ".180" },
                        { "Pin #": "10", "Part Number": "13-0059", Length: ".200" },
                        { "Pin #": "11", "Part Number": "13-0060", Length: ".220" },
                        { "Pin #": "12", "Part Number": "13-0061", Length: ".240" },
                        { "Pin #": "13", "Part Number": "13-0062", Length: ".260" },
                        { "Pin #": "14", "Part Number": "13-0063", Length: ".280" },
                    ],
                },
            ],
        },
        {
            id: "rim-compression-spring",
            name: "Compression Spring",
            components: [{ partNumber: "13-0265", description: "" }],
        },
        {
            id: "rim-plug-retainer",
            name: "Plug Retainer",
            components: [{ partNumber: "13-0080", description: "" }],
        },
        {
            id: "rim-tail-piece",
            name: "Tail Piece",
            components: [{ partNumber: "13-0085", description: "" }],
        },
        {
            id: "rim-cylinder-back-plate",
            name: "Cylinder Back Plate",
            components: [{ partNumber: "13-0086", description: "" }],
        },
        {
            id: "rim-connecting-screws",
            name: "Connecting Screws",
            components: [
                { partNumber: "13-0075", description: 'Standard Connecting Screws #12-24 x 2-5/8"' },
                { partNumber: "13-0074", description: 'Standard Connecting Screws #12-24 x 2-1/8"' },
            ],
        },
        {
            id: "rim-slide",
            name: "Slide",
            components: [
                { partNumber: "13-1341", description: "6 Pin Slide (Mfg after 06-2008)" },
                { partNumber: "13-1797", description: "7 Pin Slide (Mfg after 06-2008)" },
                { partNumber: "13-0779", description: "6 Pin Slide (Mfg prior to 06-2008)" },
                { partNumber: "13-0780", description: "7 Pin Slide (Mfg prior to 06-2008)" },
            ],
        },
        {
            id: "rim-key-blank",
            name: "Key Blank",
            components: [
                {
                    description: "5-Pin Key Blanks",
                    isTable: true,
                    headers: ["Catalog Part #", "Key Section"],
                    rows: [
                        { "Catalog Part #": "265", "Key Section": "U, R" },
                        { "Catalog Part #": "270", "Key Section": "LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN" },
                        { "Catalog Part #": "273", "Key Section": "CD, CH, CM, CDH, CHM, CN" },
                        { "Catalog Part #": "275", "Key Section": "LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL" },
                        { "Catalog Part #": "278", "Key Section": "CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR" },
                    ],
                },
                {
                    description: "6-Pin Key Blanks",
                    isTable: true,
                    headers: ["Catalog Part #", "Key Section"],
                    rows: [
                        { "Catalog Part #": "6265", "Key Section": "U, R" },
                        { "Catalog Part #": "6270", "Key Section": "LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN" },
                        { "Catalog Part #": "6273", "Key Section": "CD, CH, CM, CDH, CHM, CN" },
                        { "Catalog Part #": "6275", "Key Section": "LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL" },
                        { "Catalog Part #": "6278", "Key Section": "CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR" },
                    ],
                },
                {
                    description: "7-Pin Key Blanks",
                    isTable: true,
                    headers: ["Catalog Part #", "Key Section"],
                    rows: [
                        { "Catalog Part #": "7270", "Key Section": "LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN" },
                        { "Catalog Part #": "7273", "Key Section": "CD, CDM, CH, CM, CDH, CHM, CN" },
                        { "Catalog Part #": "7275", "Key Section": "LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL" },
                        { "Catalog Part #": "7278", "Key Section": "CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR" },
                    ],
                },
            ],
        },
    ],
};