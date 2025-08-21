// src/data/glossary/sficData.js
import { images } from "../../images/images";

export const sficData = {
    id: "sfic",
    name: "SFIC",
    imageUrl: images.MortiseCyls,
    parts: [
        {
            id: "sfic-mortise-housings",
            name: "Mortise Housings",
            components: [
                {
                    description: "Small Format Interchangeable Core Housings for Mortise Locks",
                    isTable: true,
                    headers: ["Length", "6-Pin Part #", "7-Pin Part #", "Housing Less Core"],
                    rows: [
                        { Length: '1-3/8" (35mm)', "6-Pin Part #": "73-43", "7-Pin Part #": "73-7P-43", "Housing Less Core": "70-43" },
                        { Length: '1-3/4" (44mm)', "6-Pin Part #": "73-46", "7-Pin Part #": "73-7P-46", "Housing Less Core": "70-46" },
                    ],
                },
            ],
        },
        {
            id: "sfic-keyed-cores",
            name: "Keyed Cores",
            components: [
                { partNumber: "7300B", description: "6-Pin Keyed Core" },
                { partNumber: "7P-7300B", description: "7-Pin Keyed Core" },
            ],
        },
        {
            id: "sfic-uncombinated-cores",
            name: "Uncombinated Cores",
            components: [
                { partNumber: "65-7300B", description: "6-Pin Uncombinated Core" },
                { partNumber: "65-7P-7300B", description: "7-Pin Uncombinated Core" },
            ],
        },
        {
            id: "sfic-construction-cores",
            name: "Construction Cores",
            components: [
                { partNumber: "13-5176", description: "Disposable Plastic Core" },
                { partNumber: "7200", description: "6-Pin Brass Construction Core" },
            ],
        },
        {
            id: "sfic-keys",
            name: "Keys & Key Blanks",
            components: [
                {
                    description: "Keys and Blanks for 6 and 7 Pin SFIC systems",
                    isTable: true,
                    headers: ["Description", "# of Pins", "Part Number"],
                    rows: [
                        { Description: "Key Blank", "# of Pins": "6", "Part Number": "6285B x keyway" },
                        { Description: "Key Blank", "# of Pins": "7", "Part Number": "7285B x keyway" },
                        { Description: "Cut Master Key", "# of Pins": "6", "Part Number": "6282BMK" },
                        { Description: "Cut Master Key", "# of Pins": "7", "Part Number": "7282BMK" },
                        { Description: "Cut Control Key", "# of Pins": "6", "Part Number": "6282BCTL" },
                        { Description: "Cut Control Key", "# of Pins": "7", "Part Number": "7282BCTL" },
                        { Description: "Cut Change/Day Key", "# of Pins": "6", "Part Number": "6282BCHK" },
                        { Description: "Cut Change/Day Key", "# of Pins": "7", "Part Number": "7282BCHK" },
                    ],
                },
            ],
        },
    ],
};