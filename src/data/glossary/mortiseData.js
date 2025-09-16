// src/data/glossary/mortiseData.js
import { images } from "../../images/images";

export const mortiseData = {
    id: "mortise",
    name: "Mortise Cylinder",
    imageUrl: images.MortiseCyls,
    parts: [
        {
            id: "mortise-plug",
            name: "Plug",
            components: [
                {
                    description: "Varies by cylinder length.",
                    isTable: true,
                    headers: [
                        "Size #",
                        "Cylinder Length",
                        "6 Pin Plug Part Number",
                        "7 Pin Plug Part Number",
                    ],
                    rows: [
                        { "Size #": "41", "Cylinder Length": '1-1/8" (29mm)', "6 Pin Plug Part Number": "13-0401", "7 Pin Plug Part Number": "N/A" },
                        { "Size #": "42", "Cylinder Length": '1-1/4" (32mm)', "6 Pin Plug Part Number": "13-0402", "7 Pin Plug Part Number": "13-0402" },
                        { "Size #": "43", "Cylinder Length": '1-3/8" (35mm)', "6 Pin Plug Part Number": "13-0403", "7 Pin Plug Part Number": "13-0403" },
                        { "Size #": "44", "Cylinder Length": '1-1/2" (38mm)', "6 Pin Plug Part Number": "13-0404", "7 Pin Plug Part Number": "13-0404" },
                        { "Size #": "46", "Cylinder Length": '1-3/4" (44mm)', "6 Pin Plug Part Number": "13-0405", "7 Pin Plug Part Number": "13-0405" },
                        { "Size #": "48", "Cylinder Length": '2" (51mm)', "6 Pin Plug Part Number": "13-0406", "7 Pin Plug Part Number": "13-0406" },
                        { "Size #": "50", "Cylinder Length": '2-1/4" (57mm)', "6 Pin Plug Part Number": "13-0407", "7 Pin Plug Part Number": "13-0407" },
                        { "Size #": "52", "Cylinder Length": '2-1/2" (64mm)', "6 Pin Plug Part Number": "13-0408", "7 Pin Plug Part Number": "13-0408" },
                        { "Size #": "54", "Cylinder Length": '2-3/4" (70mm)', "6 Pin Plug Part Number": "13-0409", "7 Pin Plug Part Number": "13-0409" },
                        { "Size #": "56", "Cylinder Length": '3" (76mm)', "6 Pin Plug Part Number": "13-0474", "7 Pin Plug Part Number": "13-0474" },
                    ],
                },
            ],
        },
        {
            id: "mortise-shell",
            name: "Cylinder Shell, Cap & Slide Assy.",
            components: [
                {
                    description: "Varies by cylinder length.",
                    isTable: true,
                    headers: [
                        "Size #",
                        "Cylinder Length",
                        "6 Pin Shell & Slide Assy. Part Number",
                        "7 Pin Shell & Slide Assy. Part Number",
                    ],
                    rows: [
                        { "Size #": "41", "Cylinder Length": '1-1/8" (29mm)', "6 Pin Shell & Slide Assy. Part Number": "13-2005", "7 Pin Shell & Slide Assy. Part Number": "N/A" },
                        { "Size #": "42", "Cylinder Length": '1-1/4" (32mm)', "6 Pin Shell & Slide Assy. Part Number": "13-2006", "7 Pin Shell & Slide Assy. Part Number": "13-2765" },
                        { "Size #": "43", "Cylinder Length": '1-3/8" (35mm)', "6 Pin Shell & Slide Assy. Part Number": "13-2766", "7 Pin Shell & Slide Assy. Part Number": "13-2766" },
                        { "Size #": "44", "Cylinder Length": '1-1/2" (38mm)', "6 Pin Shell & Slide Assy. Part Number": "13-2767", "7 Pin Shell & Slide Assy. Part Number": "13-2767" },
                        { "Size #": "46", "Cylinder Length": '1-3/4" (44mm)', "6 Pin Shell & Slide Assy. Part Number": "13-2768", "7 Pin Shell & Slide Assy. Part Number": "13-2768" },
                        { "Size #": "48", "Cylinder Length": '2" (51mm)', "6 Pin Shell & Slide Assy. Part Number": "13-2769", "7 Pin Shell & Slide Assy. Part Number": "13-2769" },
                        { "Size #": "50", "Cylinder Length": '2-1/4" (57mm)', "6 Pin Shell & Slide Assy. Part Number": "13-2770", "7 Pin Shell & Slide Assy. Part Number": "13-2770" },
                        { "Size #": "52", "Cylinder Length": '2-1/2" (64mm)', "6 Pin Shell & Slide Assy. Part Number": "13-2771", "7 Pin Shell & Slide Assy. Part Number": "13-2771" },
                        { "Size #": "54", "Cylinder Length": '2-3/4" (70mm)', "6 Pin Shell & Slide Assy. Part Number": "13-2772", "7 Pin Shell & Slide Assy. Part Number": "13-2772" },
                        { "Size #": "56", "Cylinder Length": '3" (76mm)', "6 Pin Shell & Slide Assy. Part Number": "13-2773", "7 Pin Shell & Slide Assy. Part Number": "13-2773" },
                    ],
                },
            ],
        },
        {
            id: "mortise-bottom-pin",
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
            id: "mortise-top-pin",
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
            id: "mortise-compression-spring",
            name: "Compression Spring",
            components: [{ partNumber: "13-0265", description: "" }],
        },
        {
            id: "mortise-slide",
            name: "Slide",
            components: [
                { partNumber: "13-1341", description: "6 Pin Slide (Mfg after 06-2008)" },
                { partNumber: "13-1797", description: "7 Pin Slide (Mfg after 06-2008)" },
                { partNumber: "13-0779", description: "6 Pin Slide (Mfg prior to 06-2008)" },
                { partNumber: "13-0780", description: "7 Pin Slide (Mfg prior to 06-2008)" },
            ],
        },
        {
            id: "mortise-cam",
            name: "Cam",
            components: [
                {
                    description: "Multiple options available.",
                    isTable: true,
                    headers: ["Cam", "Cam only - ordered as spare part", "Description"],
                    rows: [
                        { Cam: "Standard Cam", "Cam only - ordered as spare part": "13-0664", Description: "Standard open slotted cam provided on all 40 Series-standard. Except: 8216, 8250, 8292 function Mortise Locks." },
                        { Cam: "#105", "Cam only - ordered as spare part": "13-0665", Description: "Short cam used for 78/8200 (8216 & 8292) function locks (Inside Cylinder)." },
                        { Cam: "#115", "Cam only - ordered as spare part": "13-2045", Description: "Cam used for Hotel (7850/8250) function cylinders only." },
                        { Cam: "#101", "Cam only - ordered as spare part": "13-0512", Description: "Adams Rite 1850, 4700." },
                        { Cam: "#113", "Cam only - ordered as spare part": "13-0921", Description: "SARGENT 4370 Series key switches." },
                        { Cam: "#106", "Cam only - ordered as spare part": "13-0938", Description: '"Open" Schlage "L".' },
                        { Cam: "#112", "Cam only - ordered as spare part": "13-0097", Description: '"Open" Misc.' },
                    ],
                },
                {
                  partNumber: "Note:", 
                  description: "Conventional/LFIC cylinders should be ordered using the suffix (eg. 41-101 or 60-42-101) <br/> Otherwise just order as spare part (Conventional only) <br/> Removable core has cams riveted on"
                }
            ],
        },
        {
            id: "mortise-screw",
            name: "Screw",
            components: [
                { partNumber: "01-1121", description: '#3-48 x 5/16" PH. FL' },
            ],
        },
        {
            id: "mortise-key-blank",
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
                        { "Catalog Part #": "6270", "Key Section": "HD, HH, HM, HHM, HDH, HDM, HN, LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN" },
                        { "Catalog Part #": "6273", "Key Section": "CD, CH, CM, CDH, CHM, CN" },
                        { "Catalog Part #": "6275", "Key Section": "HA, HB, HC, HE, HF, HG, HJ, HK, HL, LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL" },
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
        {
            id: "mortise-master-pin",
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
    ],
};