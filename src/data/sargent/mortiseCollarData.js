// src/data/sargent/mortiseCollarData.js (Conceptual)
import { images } from "../../images/images"; // Assuming you have image imports

export const mortiseCollars = {

    // A. Sectional Trim (CO, L, LN, O, SL, etc.) - Single Cylinder [cite: 7, 11]
    "SECTIONAL_SINGLE_CYLINDER": {
        trimDescription: "Sectional Trim (L, O, LN, etc.)",
        // Format: [Cylinder Size] : { [Door Thickness] : { partNumber: "X", description: "Y" } }
        lookup: {
            "42": { // Typically used for LFIC applications (60-, 63-, 64-)
                "1-3/8\"": { partNumber: "1KB-3", projection: "Variable" }, // 
                "1-3/4\"": { partNumber: "1KB-2", projection: "Variable" }, // 
                "2\"":     { partNumber: "1KB-2", projection: "Variable" }, // 
                "2-1/4\"": { partNumber: "1KB-1", projection: "Variable" }  // 
            },
            "43": { // Typically used for SFIC applications (70-, 72-, 73-)
                "1-3/8\"": { partNumber: "1KB-4", projection: "Variable" }, // 
                "1-3/4\"": { partNumber: "1KB-3", projection: "Variable" }, // 
                "2\"":     { partNumber: "1KB-3", projection: "Variable" }, // 
                "2-1/4\"": { partNumber: "1KB-3", projection: "Variable" }  // 
            }
        }
    },

    // B. Escutcheon Trim (CE, KE1, LE1, etc.) - Single Cylinder [cite: 56, 58]
    "ESCUTCHEON_SINGLE_CYLINDER": {
        trimDescription: "Escutcheon Trim (LE1, CE, etc.)",
        lookup: {
            "42": {
                "1-3/8\"": { partNumber: "1KB-2", projection: "Variable" }, // [cite: 58]
                "1-3/4\"": { partNumber: "1KB-1", projection: "Variable" }, // [cite: 58]
                "2\"":     { partNumber: "CYLINDER ONLY", projection: "N/A" }, // [cite: 58]
                "2-1/4\"": { partNumber: "CYLINDER ONLY", projection: "N/A" }  // [cite: 58]
            },
            "43": {
                "1-3/8\"": { partNumber: "1KB-3", projection: "Variable" }, // [cite: 58]
                "1-3/4\"": { partNumber: "1KB-1", projection: "Variable" }, // [cite: 58]
                "2\"":     { partNumber: "1KB-1", projection: "Variable" }, // [cite: 58]
                "2-1/4\"": { partNumber: "CYLINDER ONLY", projection: "N/A" }  // [cite: 58]
            }
        }
    },

    // C. Specialty Hardware (BHW, BHL, BHD, ALP) - Single Cylinder [cite: 63, 64]
    "SPECIALTY_BHW_ALP": {
        trimDescription: "Specialty Hardware (BHW, ALP, etc.)",
        lookup: {
            "42": {
                "1-3/8\"": { partNumber: "1SB-3", projection: "Variable" }, // [cite: 64]
                "1-3/4\"": { partNumber: "1SB-1", projection: "Variable" }, // [cite: 64]
                "2\"":     { partNumber: "1SB-2", projection: "Variable" }, // [cite: 64]
                "2-1/4\"": { partNumber: "1SB-2", projection: "Variable" }  // [cite: 64]
            },
            "43": {
                "1-3/8\"": { partNumber: "1SB-4", projection: "Variable" }, // [cite: 64]
                "1-3/4\"": { partNumber: "1SB-3", projection: "Variable" }, // [cite: 64]
                "2\"":     { partNumber: "1SB-3", projection: "Variable" }, // [cite: 64]
                "2-1/4\"": { partNumber: "1SB-3", projection: "Variable" }  // [cite: 64]
            }
        }
    }
    // ... add double cylinder and other trim data here
};