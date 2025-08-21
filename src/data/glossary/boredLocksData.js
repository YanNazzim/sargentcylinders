// src/data/glossary/boredLocksData.js
import { images } from "../../images/images";

export const boredLocksData = {
    id: "bored-locks",
    name: "Bored Locks Cylinder",
    imageUrl: images.KILCyls,
    parts: [
        {
            id: "bored-locks-key-blank",
            name: "Key Blank",
            components: [
                {
                    description: "Varies by keyway.",
                    isTable: true,
                    headers: ["# of Pins", "Catalog Part #", "Key Section"],
                    rows: [
                        { "# of Pins": "5", "Catalog Part #": "265", "Key Section": "U, R" },
                        { "# of Pins": "5", "Catalog Part #": "270", "Key Section": "LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN" },
                        { "# of Pins": "5", "Catalog Part #": "273", "Key Section": "CD, CH, CM, CDH, CHM, CN" },
                        { "# of Pins": "5", "Catalog Part #": "275", "Key Section": "LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL" },
                        { "# of Pins": "5", "Catalog Part #": "278", "Key Section": "CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR" },
                        { "# of Pins": "6", "Catalog Part #": "6265", "Key Section": "U, R" },
                        { "# of Pins": "6", "Catalog Part #": "6270", "Key Section": "HD, HH, HM, HHM, HDH, HDM, HN, LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN" },
                        { "# of Pins": "6", "Catalog Part #": "6273", "Key Section": "CD, CH, CM, CDH, CHM, CN" },
                        { "# of Pins": "6", "Catalog Part #": "6275", "Key Section": "HA, HB, HC, HE, HF, HG, HJ, HK, HL, LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL" },
                        { "# of Pins": "6", "Catalog Part #": "6278", "Key Section": "CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR" },
                        { "# of Pins": "7", "Catalog Part #": "7270", "Key Section": "LD, LH, LM, LDH, LDM, LHM, LN, RD, RH, RM, RDH, RDM, RHM, RN" },
                        { "# of Pins": "7", "Catalog Part #": "7273", "Key Section": "CD, CDM, CH, CM, CDH, CHM, CN" },
                        { "# of Pins": "7", "Catalog Part #": "7275", "Key Section": "LA, LB, LC, LE, LF, LG, LJ, LK, LL, RA, RB, RC, RE, RF, RG, RJ, RK RL" },
                        { "# of Pins": "7", "Catalog Part #": "7278", "Key Section": "CA, CB, CC, CE, CF, CG, CJ, CK, CL, CR" },
                    ],
                },
            ],
        },
        {
            id: "bored-locks-plug",
            name: "Plug",
            components: [
                { partNumber: "13-3142", description: "For 6, 7 Lever, 8L, 10, 10X, 11, 6500, etc." },
                { partNumber: "13-3425", description: "For 7, 8, 9 Knobs" },
                { partNumber: "13-0920", description: "For 5500*, 8X" },
            ],
        },
        {
            id: "bored-locks-shell",
            name: "Cylinder Shell & Slide Assembly",
            components: [
                { partNumber: "13-3257", description: "For 7, 8, 9 Knobs and 6, 6500 lines" },
                { partNumber: "13-3493", description: "For 460, 470, 480, 1655 lines" },
            ],
        },
        {
            id: "bored-locks-bottom-pin",
            name: "Bottom Pin",
            components: [
                {
                    description: "Varies by bitting.",
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
            id: "bored-locks-top-pin",
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
            id: "bored-locks-compression-spring",
            name: "Compression Spring",
            components: [{ partNumber: "13-0265", description: "" }],
        },
        {
            id: "bored-locks-plug-retainer-ring",
            name: "Plug Retainer Ring",
            components: [
                { partNumber: "13-0205", description: "For most levers and 8 line knob mfg after 4/05" },
                { partNumber: "06-0166", description: "For 7, 8, 9 Knob plug mfg prior to 3/05" },
                { partNumber: "01-0870", description: "For 5500*, 8X" },
            ],
        },
        {
            id: "bored-locks-slide",
            name: "Slide",
            components: [
                { partNumber: "13-1341", description: "For most current models (Mfg after June 2008)" },
                { partNumber: "13-0779", description: "For older models (Mfg prior to June 2008)" },
            ],
        },
        {
            id: "bored-locks-tail-piece",
            name: "Tailpiece",
            components: [
                {
                    description: "Tailpiece packs for various key systems and door thicknesses.",
                    isTable: true,
                    headers: ["Key System", "Door Thickness", "Mechanical Functions", "Electrified Functions"],
                    rows: [
                        { "Key System": "Conventional, Signature, XC, Degree®, Competitor", "Door Thickness": '1-3/8" - 2"', "Mechanical Functions": "10-3629", "Electrified Functions": "10-3791" },
                        { "Key System": "Conventional, Signature, XC, Degree®, Competitor", "Door Thickness": '2-1/4"', "Mechanical Functions": "10-3630", "Electrified Functions": "10-3792" },
                        { "Key System": "Keso", "Door Thickness": '1-3/8" - 2"', "Mechanical Functions": "10-3637", "Electrified Functions": "10-3793" },
                        { "Key System": "Keso", "Door Thickness": '2-1/4"', "Mechanical Functions": "10-3638", "Electrified Functions": "10-3794" },
                        { "Key System": "LFIC (Conv., Sig., Degree)", "Door Thickness": '1-3/8" - 2"', "Mechanical Functions": "10-3631", "Electrified Functions": "10-3773" },
                        { "Key System": "LFIC (Conv., Sig., Degree)", "Door Thickness": '2-1/4"', "Mechanical Functions": "10-3632", "Electrified Functions": "10-3774" },
                        { "Key System": "LFIC (XC)", "Door Thickness": '1-3/8" - 2"', "Mechanical Functions": "10-3635", "Electrified Functions": "10-3777" },
                        { "Key System": "LFIC (XC)", "Door Thickness": '2-1/4"', "Mechanical Functions": "10-3636", "Electrified Functions": "10-3778" },
                        { "Key System": "SFIC (6 & 7 Pin)", "Door Thickness": '1-3/8" - 2"', "Mechanical Functions": "10-3633", "Electrified Functions": "10-3775" },
                        { "Key System": "SFIC (6 & 7 Pin)", "Door Thickness": '2-1/4"', "Mechanical Functions": "10-3634", "Electrified Functions": "10-3776" },
                        { "Key System": "SFIC (XC)", "Door Thickness": '1-3/8" - 2"', "Mechanical Functions": "10-3641", "Electrified Functions": "10-3779" },
                        { "Key System": "SFIC (XC)", "Door Thickness": '2-1/4"', "Mechanical Functions": "10-3642", "Electrified Functions": "10-3780" },
                    ],
                },
            ],
        },
        {
            id: "bored-locks-master-pin",
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