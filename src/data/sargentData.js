// src/data/sargentData.js

// --- START: Series Definitions ---

// -- 20/30 Series (Placeholders) --
const series20 = {
  "name": "20 Series",
  "models": [
    // Add models for 20 series here
  ]
};

const series30 = {
  "name": "30 Series",
  "models": [
    // Add models for 30 series here
  ]
};

// -- 80 Series --
const series8300 = {
  "name": "8300 Series Narrow Mortise",
  "models": [
    { "modelNumber": "8304", "description": "Key Retracts Latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8310", "description": "No Outside Operation", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8313", "description": "Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8315", "description": "Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8328", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8340", "description": "Freewheeling Trim - No outside operation Dummy Trim", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8343", "description": "Freewheeling Trim - Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8344", "description": "Freewheeling Trim - Key Retracts Latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8363", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8375", "description": "Electrified ET Trim Fail Safe Power Off, Unlocks Lever, Key Retracts Latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8376", "description": "Electrified ET Trim Fail Secure Power Off, Locks Lever, Key Retracts Latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

const series8400 = {
  "name": "8400 Series Narrow CVR",
  "models": [
    { "modelNumber": "8406", "description": "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8410", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8413", "description": "Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8415", "description": "Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8440", "description": "Freewheeling Trim - No outside operation Dummy Trim", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8443", "description": "Freewheeling Trim - Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8446", "description": "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8473", "description": "Electrified lever Trim - Fail Safe Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8474", "description": "Electrified lever Trim - Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [] }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

const series8500 = {
  "name": "8500 Series Narrow Rim",
  "models": [
    { "modelNumber": "8504", "description": "Key Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "8506", "description": "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8510", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8513", "description": "Key Outside Unlocks/Locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8515", "description": "Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8528", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8540", "description": "Freewheeling Trim- No outside operation Dummy Trim", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8543", "description": "Freewheeling Trim - Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8544", "description": "Freewheeling Trim - Key Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "8546", "description": "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8563", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "8573", "description": "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8574", "description": "Electrified ET Trim - Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [] }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

const series8600 = {
  "name": "8600 Series CVR",
  "models": [
    { "modelNumber": "8606", "description": "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8610", "description": "No outside operation Dummy Trim", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8613", "description": "Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8615", "description": "Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8628", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8640", "description": "Freewheeling Trim - No outside Operation Dummy Trim", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8643", "description": "Freewheeling Trim - Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8646", "description": "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8673", "description": "Electrified Lever Trim - Fail Safe Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8674", "description": "Electrified Lever Trim - Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [] }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

const series8700 = {
  "name": "8700 Series SVR",
  "models": [
    { "modelNumber": "8706", "description": "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8710", "description": "No Outside Operation (Dummy)", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8713", "description": "Key Outside Unlocks/Locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8715", "description": "Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8728", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8740", "description": "Freewheeling Trim - No outside operation Dummy Trim", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8743", "description": "Freewheeling Trim - Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8746", "description": "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8762", "description": "Thumbpiece - Key Unlocks/Locks, Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "8763", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "8773", "description": "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8774", "description": "Electrified ET Trim - Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

const series8800 = {
  "name": "8800 Series Rim",
  "models": [
    { "modelNumber": "8804", "description": "Key Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "8806", "description": "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8810", "description": "No outside operation ET Control is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8813", "description": "Key Outside Unlocks/Locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8815", "description": "Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8816", "description": "Key Outside Retracts Latch; Key Inside Unlocks/Locks O/S Trim", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for 8816 Function", "addsCylinder": { "partNumber": "#44", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }] },
    { "modelNumber": "8828", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8840", "description": "Freewheeling Trim- No outside operation Dummy Trim", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8843", "description": "Freewheeling Trim- Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8844", "description": "Freewheeling Trim - Key Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "8846", "description": "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8863", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "8866", "description": "Thumbpiece - Key Outside Retracts, Inside Unlocks/Locks O/S Trim", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for 8866 Function", "addsCylinder": { "partNumber": "#44", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }] },
    { "modelNumber": "8873", "description": "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8874", "description": "Electrified ET Trim-Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8875", "description": "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever, Key Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "8876", "description": "Electrified ET Trim - Fail Secure Power Off, Locks Lever, Key Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

const series8900 = {
  "name": "8900 Series Mortise",
  "models": [
    { "modelNumber": "8904", "description": "Key Retracts Latch", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8906", "description": "Key unlocks Trim, Trim retracts Latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8910", "description": "No outside operation ET Control is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8913", "description": "Key Outside Unlocks/Locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8915", "description": "Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8916", "description": "Key Outside Retracts Latch, Key Inside Unlocks/Locks O/S Trim", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for 8916 Function", "addsCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "isDeviceSpecific": true }] },
    { "modelNumber": "8928", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8940", "description": "Freewheeling Trim- No outside Operation Dummy Trim", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8943", "description": "Freewheeling Trim- Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8944", "description": "Freewheeling Trim- Key Retracts Latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8963", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8966", "description": "Thumbpiece - Key Outside Retracts, Inside Unlocks/Locks Trim", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for 8966 Function", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }] },
    { "modelNumber": "8975", "description": "Electrified ET Trim-Fail Safe Power Off, Unlocks Lever, Key Retracts Latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "8976", "description": "Electrified ET Trim Fail Secure Power Off, Locks Lever, Key Retracts Latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

// -- PE80 Series --
const seriesPE8300 = {
  "name": "PE8300 Series Narrow Mortise",
  "models": [
    { "modelNumber": "PE8304", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8310", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8313", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8315", "description": "Passage only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8316", "description": "Key Outside Retracts Latch, Key Inside Unlocks/Locks O/S Trim", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for PE8316 Function", "addsCylinder": { "partNumber": "#44", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }] },
    { "modelNumber": "PE8328", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8340", "description": "No outside operation", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8343", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8344", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8346", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed. Freewheeling trim.", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8363", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8373", "description": "Electrified trim - fail safe power off, unlocks lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8374", "description": "Electrified trim - fail secure power off, locks lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8375", "description": "Electrified trim - fail safe power off, unlocks lever, key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8376", "description": "Electrified trim - fail secure power off, locks lever, key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

const seriesPE8400 = {
  "name": "PE8400 Series Narrow CVR",
  "models": [
    { "modelNumber": "PE8406", "description": "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8410", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8413", "description": "Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8415", "description": "Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8440", "description": "Freewheeling Trim - No outside operation Dummy Trim", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8443", "description": "Freewheeling Trim - Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8446", "description": "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8473", "description": "Electrified lever Trim - Fail Safe Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8474", "description": "Electrified lever Trim - Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [] }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

const seriesPE8500 = {
  "name": "PE8500 Series Narrow Rim",
  "models": [
    { "modelNumber": "PE8504", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8506", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8510", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8513", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8515", "description": "Passage only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8528", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8540", "description": "No outside operation", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8543", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8544", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8546", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8563", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8573", "description": "Electrified lever trim - fail safe power off, unlocks lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8574", "description": "Electrified lever trim - fail secure power off, locks lever", "baseCylinder": null, "prefixes": [] }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

const seriesPE8600 = {
  "name": "PE8600 Series CVR",
  "models": [
    { "modelNumber": "PE8606", "description": "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8610", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8613", "description": "Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8615", "description": "Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8628", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8640", "description": "Freewheeling Trim - No outside operation Dummy Trim", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8643", "description": "Freewheeling Trim - Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8646", "description": "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8673", "description": "Electrified Lever Trim - Fail Safe Power Off, Unlacks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8674", "description": "Electrified Lever Trim - Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [] }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

const seriesPE8700 = {
  "name": "PE8700 Series SVR",
  "models": [
    { "modelNumber": "PE8706", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8710", "description": "No outside operation; Trim is used as pull only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8713", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8715", "description": "Passage only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8728", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8740", "description": "Freewheeling trim no outside operation dummy trim", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8743", "description": "Freewheeling trim-key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8746", "description": "Freewheeling trim - key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8762", "description": "Thumbpiece - Key Unlocks/Locks, Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8763", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8773", "description": "Electrified lever trin- fail safe power off, unlocks lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8774", "description": "Electrified lever trim - fail secure power off, locks lever", "baseCylinder": null, "prefixes": [] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

const seriesPE8800 = {
  "name": "PE8800 Series Rim",
  "models": [
    { "modelNumber": "PE8804", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8806", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8810", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8813", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8815", "description": "Passage only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8816", "description": "Key Outside Retracts Latch; Key Inside Unlocks/Locks O/S Trim", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for 8816 Function", "addsCylinder": { "partNumber": "#44", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }] },
    { "modelNumber": "PE8828", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8840", "description": "No outside operation; Freewheeling trim.", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8843", "description": "Key outside unlocks/locks trim. Freewheeling trim.", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8844", "description": "Key retracts latch. Freewheeling trim.", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8846", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed. Freewheeling trim.", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8863", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8866", "description": "Thumbpiece - Key Outside Retracts, Inside Unlocks/Locks Trim", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for 8866 Function", "addsCylinder": { "partNumber": "#44", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }] },
    { "modelNumber": "PE8867", "description": "Push Button locks latchbolt/key releases button and latchbolt", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8873", "description": "Electrified trim - fail safe power off, unlocks lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8874", "description": "Electrified lever trim - fail secure power off, locks lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8875", "description": "Electrified lever trim - fail safe power off, unlocks lever, key retracts latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8876", "description": "Electrified lever trim - fail secure power off, locks lever, key retracts latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

const seriesPE8900 = {
  "name": "PE8900 Series Mortise",
  "models": [
    { "modelNumber": "PE8904", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8906", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8910", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8913", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8915", "description": "Passage only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8916", "description": "Key outside retracts latch; key inside unlocks/locks o/s trim", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for 8916 Function", "addsCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "isDeviceSpecific": true }] },
    { "modelNumber": "PE8928", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8940", "description": "No outside operation", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8943", "description": "Key outside unlocks/locks trim. Freewheeling trim.", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8944", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8946", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8963", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8966", "description": "Thumbpiece - Key Outside Retracts, Inside Unlocks/Locks Trim", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for 8966 Function", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true }] },
    { "modelNumber": "PE8973", "description": "Electrified trim fail safe power off, unlocks lever.", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8974", "description": "Electrified trim fail secure power off, locks lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "PE8975", "description": "Electrified trim-fail safe power off, unlocks lever, key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "PE8976", "description": "Electrified trim - fail secure power off, locks lever, key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

// -- 90 Series --
const series9400 = {
  "name": "9400 Series",
  "models": [
    { "modelNumber": "9404", "description": "Key Retracts Latch", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "9410", "description": "No outside operation", "baseCylinder": null, "prefixes": [] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};
const series9700 = {
  "name": "9700 Series",
  "models": [
    { "modelNumber": "9706", "description": "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "9710", "description": "No outside Operation ET Control is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9713", "description": "Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "9715", "description": "Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9728", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9762", "description": "Thumbpiece - Key Unlocks/Locks, Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "9763", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "9773", "description": "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9774", "description": "Electrified ET Trim Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};
const series9800 = {
  "name": "9800 Series",
  "models": [
    { "modelNumber": "9804", "description": "Key Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "9810", "description": "No outside Operation ET Control is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9813", "description": "Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "9815", "description": "Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9828", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9863", "description": "Key Outside Unlocks/Locks Trim", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "9873", "description": "Electrified ET Trim Fail Safe Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9874", "description": "Electrified ET Trim - Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9875", "description": "Electrified ET Trim - Fail Safe Power Off, Unlocks Lever, Key Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] },
    { "modelNumber": "9876", "description": "Electrified ET Trim-Fail Secure Power Off, Locks Lever, Key Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [] }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};
const series9900 = {
  "name": "9900 Series",
  "models": [
    { "modelNumber": "9904", "description": "Key Retracts Latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "9910", "description": "No outside Operation ET Control is used as Pull Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9913", "description": "Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "9915", "description": "Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9928", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9963", "description": "Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "9973", "description": "Electrified ET Trim - Fail Safe, Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9974", "description": "Electrified ET Trim - Fail Secure, Power Off, Locks Lever", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "9975", "description": "Electrified ET Trim-Fail Safe, Power Off, Unlocks Lever, Key Retracts Latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] },
    { "modelNumber": "9976", "description": "Electrified ET Trim - Fail Secure, Power Off, Locks Lever, Key Retracts Latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [] }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};


// -- Mortise Locks --
const series8200Locks = {
  "name": "8200 Series",
  "models": [
    { "modelNumber": "8204", "description": "Passage Function", "baseCylinder": null, "prefixes": [] },
    { "modelNumber": "8237", "description": "Storeroom Lock", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [] }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};


// --- END: Series Definitions ---


// --- START: Category Assembly ---

const exitDevices = {
  "category": "Exit Devices",
  "series": [
    series20,
    series30,
    series8300,
    series8400,
    series8500,
    series8600,
    series8700,
    series8800,
    series8900,
    seriesPE8300,
    seriesPE8400,
    seriesPE8500,
    seriesPE8600,
    seriesPE8700,
    seriesPE8800,
    seriesPE8900,
    series9400,
    series9700,
    series9800,
    series9900,
  ]
};

const mortiseLocks = {
  "category": "Mortise Locks",
  "series": [
    series8200Locks
  ]
};

// --- END: Category Assembly ---


// --- START: Main Data Export ---

const sargentData = {
  "hardware": [
    exitDevices,
    mortiseLocks
    // Add other hardware categories here
  ]
};

// --- END: Main Data Export ---


// --- START: Cylinder Prefixes (No change here) ---
const cylinderPrefixCategories = [
  {
    name: "Degree Key System Level 1",
    prefixes: [
      { id: "DG1-", description: "SARGENT Degree Key System Level 1 (bump resistant with patented keys)" },
      { id: "DG1-21-", description: "Degree Level 1 Construction Master Keying" },
      { id: "DG1-60-", description: "Degree Level 1 Removable Disposable Construction Core" },
      { id: "DG1-63-", description: "Degree Level 1 Removable Core" },
      { id: "DG1-64-", description: "Degree Level 1 Removable Construction Keyed LFIC" },
      { id: "DG1-65-", description: "Degree Level 1 Unassembled/uncombinated Core" },
    ]
  },
  {
    name: "Degree Key System Level 2",
    prefixes: [
      { id: "DG2-", description: "SARGENT Degree Key System Level 2 (geographically exclusive; bump and pick resistant)" },
      { id: "DG2-21-", description: "Degree Level 2 Construction Master Keying" },
      { id: "DG2-60-", description: "Degree Level 2 Removable Disposable Construction Core" },
      { id: "DG2-63-", description: "Degree Level 2 Removable Core" },
      { id: "DG2-64-", description: "Degree Level 2 Removable Construction Keyed LFIC" },
      { id: "DG2-65-", description: "Degree Level 2 Unassembled/uncombinated Core" },
    ]
  },
  {
    name: "Degree Key System Level 3",
    prefixes: [
      { id: "DG3-", description: "SARGENT Degree Key System Level 3 (geographically exclusive; UL437 certified; bump and pick resistant)" },
      { id: "DG3-21-", description: "Degree Level 3 Construction Master Keying" },
      { id: "DG3-60-", description: "Degree Level 3 Removable Disposable Construction Core" },
      { id: "DG3-63-", description: "Degree Level 3 Removable Core" },
      { id: "DG3-64-", description: "Degree Level 3 Removable Construction Keyed LFIC" },
      { id: "DG3-65", description: "Degree Level 3 Unassembled/uncombinated Core" },
    ]
  },
  {
    name: "Signature Key System",
    prefixes: [
      { id: "10-", description: "SARGENT Signature Key System (Not Available with other Key Systems)" },
      { id: "10-21-", description: "SARGENT Signature Construction Key System (Lost Ball)" },
      { id: "10-63-", description: "SARGENT Signature Large Format Interchangeable Core Cylinder (Removable)" },
    ]
  },
  {
    name: "XC-Key System",
    prefixes: [
      { id: "11-", description: "XC Key System (Not available with other Key systems unless specified)" },
      { id: "11-21-", description: "XC-Construction Key System (Lost Ball)" },
      { id: "11-60-", description: "Device to accept XC- Permanent Large Format Interchangeable Core, Disposable plastic Core- provided" },
      { id: "11-63-", description: "Device provided with XC-Large Format Interchangeable Core Cylinder - (Includes masterkeying, grand masterkeying)" },
      { id: "11-64-", description: "Device provided with Keyed construction core to accept XC- Permanent Large Format Interchangeable Core (ordered separately)" },
    ]
  },
  {
    name: "XC-Small Format Interchangeable Core (SFIC)",
    prefixes: [
      { id: "11-70-7P-", description: "Device to accept XC-SFIC (7-Pin) XC-Permanent Cores, plastic disposable core provided" },
      { id: "11-72-7P-", description: "Device to accept XC-SFIC (7-Pin Keyed Construction Core provided) cylinder Permanent core ordered separately" },
      { id: "11-73-7P-", description: "Device provided with XC- Small Format 7-Pin interchangeable core (Includes masterkeying, grand masterkeying)" },
      { id: "11-65-73-7P-", description: "Device provided to accept XC-Uncombinated 7-Pin SFIC (Permanent) Core - (Packed Loose)" },
    ]
  },
  {
    name: "Construction Key Systems (Lost Ball)",
    prefixes: [
      { id: "21-", description: "SARGENT Lost Ball Construction Keying for Conventional, XC and Signature Series (N/A with 63- or 73-)" },
    ]
  },
  {
    name: "Old Style Removable Core",
    prefixes: [
      { id: "51-", description: "Removable Core Cylinder (Old Style) provided (existing systems only)" },
      { id: "52-", description: "Removable Construction Core (Old Style) Permanent core ordered separately (existing systems only)" },
    ]
  },
  {
    name: "Large Format Interchangeable Core (LFIC)",
    prefixes: [
      { id: "60-", description: "Device to accept SARGENT Permanent Large Format Interchangeable Core, Disposable plastic Core provided (Permanent Cores ordered separately)" },
      { id: "63-", description: "Device provided with Large Format Interchangeable Core Cylinder- (Includes masterkeying, grand masterkeying)" },
      { id: "64-", description: "Device provided with Keyed construction core to accept Permanent Large Format Interchangeable Core (ordered separately)" },
    ]
  },
  {
    name: "Small Format Interchangeable Core (SFIC)",
    prefixes: [
      { id: "70-", description: "Device to accept 6 or 7-Pin SFIC Permanent Cores, plastic disposable core provided" },
      { id: "72-", description: "Device to accept 6- or 7-Pin SFIC (6-Pin Keyed Construction Core provided) Cylinder (Permanent Core ordered separately)" },
      { id: "73-", description: "Device provided with 6-Pin SFIC (Includes masterkeying, grand masterkeying)" },
      { id: "65-73-", description: "Device provided to accept Uncombinated 6-Pin SFIC (Permanent) Core - (Packed Loose for field keying)" },
      { id: "65-73-7P-", description: "Device provided to accept Uncombinated 7-Pin SFIC (Permanent) Core - (Packed Loose for field keying)" },
      { id: "73-7P-", description: "Device provided with Small Format 7-Pin Interchangeable Core (Includes masterkeying, grand masterkeying)" },
    ]
  },
  {
    name: "Keso & Kesa F1 Systems",
    prefixes: [
      { id: "81-", description: "Device provided with housings to accept Keso (83) & Keso F1 (F1-83-) removable cores. (Permanent Cores ordered separately)" },
      { id: "82-", description: "Device provided with SARGENT Keso Security Cylinder" },
      { id: "F1-82-", description: "Device provided with SARGENT Keso F1 Security Cylinder (Patented)" },
      { id: "83-", description: "Device provided with SARGENT Keso Security Removable Core cylinder" },
      { id: "F1-83-", description: "Device provided with SARGENT Keso F1 Security Removable Core cylinder (Patented)" },
      { id: "84-", description: "Device provided with SARGENT Keso Construction Cores (Permanent Cores ordered separately)" },
    ]
  },
  {
    name: "Added Security & Keyway Options",
    prefixes: [
      { id: "BR-", description: "Bump Resistant Cylinder (Available with Conventional & Conventional XC Cylinders Only)" },
      { id: "SC-", description: "Schlage C keyway cylinder, 0 bitted" },
      { id: "SE-", description: "Schlage E keyway cylinder, 0 bitted" },
    ]
  }
];
// --- END: Cylinder Prefixes ---


// --- START: Universal Prefixes & Final Processing ---
const universalDevicePrefixes = [
  { "id": "16", "description": "Cylinder Dogging", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true },
  { "id": "59", "description": "Delayed Egress", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "For alarm control." }, "isDeviceSpecific": true },
  { "id": "AL", "description": "Alarmed Exit", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder", "notes": "For alarm kit control." }, "isDeviceSpecific": true }
];

// Loop through all hardware, series, and models to add the prefixes
sargentData.hardware.forEach(category => {
  category.series.forEach(series => {
    series.models.forEach(model => {
      model.prefixes = [...model.prefixes, ...universalDevicePrefixes];
      const existingPrefixIds = new Set(model.prefixes.map(p => p.id));
      let allNewCylinderPrefixes = [];
      cylinderPrefixCategories.forEach(cat => {
        cat.prefixes.forEach(cylPrefix => {
          if (!existingPrefixIds.has(cylPrefix.id)) {
            allNewCylinderPrefixes.push({
              ...cylPrefix,
              isDeviceSpecific: false,
              addsCylinder: null
            });
          }
        });
      });
      model.prefixes = [...model.prefixes, ...allNewCylinderPrefixes];
    });
  });
});

export { sargentData, cylinderPrefixCategories };