// src/data/glossary/lficData.js
import { images } from "../../images/images";

export const lficData = {
    id: "lfic",
    name: "LFIC",
    imageUrl: images.MortiseCyls,
    parts: [
        {
            id: "lfic-keyed-core",
            name: "Keyed Core ",
            components: [{ partNumber: "6300", description: "LFIC Core" }],
        },
        {
            id: "lfic-uncombinated-core",
            name: "Uncombinated Core ",
            components: [
                { partNumber: "65-6300", description: "Unassembled core for field rekeying. Includes Control Sleeve and two key blanks" },
            ],
        },
        {
            id: "lfic-disposable-core",
            name: "Disposable Plastic Core ",
            components: [
                { partNumber: "13-5177", description: "Disposable plastic core for use during construction phase" },
            ],
        },
        {
            id: "lfic-construction-core",
            name: "Construction Keyed Core ",
            components: [
                { partNumber: "6400", description: "Brass construction core for use during construction phase" },
            ],
        },
    ],
};