// src/data/sargent/series/seriesPE80.js
import { devicePrefixesPE80Series, auxControl106Prefix, auxControl306Prefix } from '../devicePrefixes';
import {images} from '../../../images/images';


export const seriesPE8300 = {
  "name": "PE8300 Series Narrow Mortise",
  imageUrl: images.SeriesPE8300,
  "models": [
    { "modelNumber": "PE8304", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8310", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8313", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8315", "description": "Passage only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8316", "description": "Key Outside Retracts Latch, Key Inside Unlocks/Locks O/S Trim", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for PE8316 Function", "addsCylinder": { "partNumber": "#44", "type": "Mortise Cylinder" }, "isDeviceSpecific": true, "keywords": [] }, ...devicePrefixesPE80Series] },
    { "modelNumber": "PE8328", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8340", "description": "No outside operation", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8343", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8344", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8346", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed. Freewheeling trim.", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8363", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8373", "description": "Electrified trim - fail safe power off, unlocks lever", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8374", "description": "Electrified trim - fail secure power off, locks lever", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8375", "description": "Electrified trim-fail safe power off, unlocks lever, key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8376", "description": "Electrified trim - fail secure power off, locks lever, key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

export const seriesPE8400 = {
  "name": "PE8400 Series Narrow CVR",
  imageUrl: images.SeriesPE8400,
  "models": [
    { "modelNumber": "PE8406", "description": "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8410", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8413", "description": "Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8415", "description": "Passage Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8440", "description": "Freewheeling Trim - No outside operation Dummy Trim", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8443", "description": "Freewheeling Trim - Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8446", "description": "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8473", "description": "Electrified lever Trim - Fail Safe Power Off, Unlocks Lever", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8474", "description": "Electrified lever Trim - Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

export const seriesPE8500 = {
  "name": "PE8500 Series Narrow Rim",
  imageUrl: images.SeriesPE8500,
  "models": [
    { "modelNumber": "PE8504", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8506", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8510", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8513", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8515", "description": "Passage only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8528", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8540", "description": "No outside operation", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8543", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8544", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8546", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8563", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8573", "description": "Electrified lever trim - fail safe power off, unlocks lever", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8574", "description": "Electrified lever trim - fail secure power off, locks lever", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

export const seriesPE8600 = {
  "name": "PE8600 Series Wide CVR",
  imageUrl: images.SeriesPE8600,
  "models": [
    { "modelNumber": "PE8606", "description": "Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series, auxControl106Prefix] },
    { "modelNumber": "PE8610", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series, auxControl106Prefix] },
    { "modelNumber": "PE8613", "description": "Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series, auxControl106Prefix] },
    { "modelNumber": "PE8615", "description": "Passage Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series, auxControl106Prefix] },
    { "modelNumber": "PE8628", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series, auxControl106Prefix] },
    { "modelNumber": "PE8640", "description": "Freewheeling Trim - No outside operation Dummy Trim", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series, auxControl106Prefix] },
    { "modelNumber": "PE8643", "description": "Freewheeling Trim - Key Outside Unlocks/locks Trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series, auxControl106Prefix] },
    { "modelNumber": "PE8646", "description": "Freewheeling Trim - Key unlocks Trim, Trim retracts latch/Trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series, auxControl106Prefix] },
    { "modelNumber": "PE8673", "description": "Electrified Lever Trim - Fail Safe Power Off, Unlacks Lever", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series, auxControl106Prefix] },
    { "modelNumber": "PE8674", "description": "Electrified Lever Trim - Fail Secure Power Off, Locks Lever", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series, auxControl106Prefix] }
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

export const seriesPE8700 = {
  "name": "PE8700 Series Wide SVR",
  imageUrl: images.SeriesPE8700,
  "models": [
    { "modelNumber": "PE8706", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series, auxControl306Prefix] },
    { "modelNumber": "PE8710", "description": "No outside operation; Trim is used as pull only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series, auxControl306Prefix] },
    { "modelNumber": "PE8713", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series, auxControl306Prefix] },
    { "modelNumber": "PE8715", "description": "Passage only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series, auxControl306Prefix] },
    { "modelNumber": "PE8728", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series, auxControl306Prefix] },
    { "modelNumber": "PE8740", "description": "Freewheeling trim no outside operation dummy trim", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series, auxControl306Prefix] },
    { "modelNumber": "PE8743", "description": "Freewheeling trim-key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series, auxControl306Prefix] },
    { "modelNumber": "PE8746", "description": "Freewheeling trim - key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series, auxControl306Prefix] },
    { "modelNumber": "PE8762", "description": "Thumbpiece - Key Unlocks/Locks, Retracts Latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [...devicePrefixesPE80Series, auxControl306Prefix] },
    { "modelNumber": "PE8763", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [...devicePrefixesPE80Series, auxControl306Prefix] },
    { "modelNumber": "PE8773", "description": "Electrified lever trin- fail safe power off, unlocks lever.", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series, auxControl306Prefix] },
    { "modelNumber": "PE8774", "description": "Electrified lever trim - fail secure power off, locks lever", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series, auxControl306Prefix] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

export const seriesPE8800 = {
  "name": "PE8800 Series Wide Rim",
  imageUrl: images.SeriesPE8800,
  "models": [
    { "modelNumber": "PE8804", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8806", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8810", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8813", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8815", "description": "Passage only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8816", "description": "Key Outside Retracts Latch; Key Inside Unlocks/Locks O/S Trim", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for 8816 Function", "addsCylinder": { "partNumber": "#44", "type": "Mortise Cylinder" }, "isDeviceSpecific": true, "keywords": [] }, ...devicePrefixesPE80Series.filter(p => p.id !== "127 - Mortise Cylinder Thumbturn"), { "id": "127 - Mortise Cylinder Thumbturn", "description": "Turns your inside Keyed Cylinder into a detachable mortise thumbturn", "addsCylinder": { "partNumber": "#44", "type": "Mortise Cylinder", "notes": "For alarm kit control." }, "isDeviceSpecific": true, "keywords": ["127", "thumbturn"] }] },
    { "modelNumber": "PE8828", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8840", "description": "No outside operation; Freewheeling trim.", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8843", "description": "Key outside unlocks/locks trim. Freewheeling trim.", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8844", "description": "Key retracts latch. Freewheeling trim.", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8846", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8863", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8866", "description": "Thumbpiece - Key Outside Retracts, Inside Unlocks/Locks Trim", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for 8866 Function", "addsCylinder": { "partNumber": "#44", "type": "Mortise Cylinder" }, "isDeviceSpecific": true, "keywords": [] }, ...devicePrefixesPE80Series] },
    { "modelNumber": "PE8867", "description": "Push Button locks latchbolt/key releases button and latchbolt", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8873", "description": "Electrified trim - fail safe power off, unlocks lever", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8874", "description": "Electrified lever trim - fail secure power off, locks lever", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8875", "description": "Electrified lever trim - fail safe power off, unlocks lever, key retracts latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8876", "description": "Electrified lever trim - fail secure power off, locks lever, key retracts latch", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

export const seriesPE8900 = {
  "name": "PE8900 Series Wide Mortise",
  imageUrl: images.SeriesPE8900,
  "models": [
    { "modelNumber": "PE8904", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8906", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8910", "description": "No outside operation Trim is used as Pull Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8913", "description": "Key outside unlocks/locks trim", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8915", "description": "Passage only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8916", "description": "Key outside retracts latch; key inside unlocks/locks o/s trim", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for PE8916 Function", "addsCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "isDeviceSpecific": true, "keywords": [] }, ...devicePrefixesPE80Series] },
    { "modelNumber": "PE8928", "description": "Thumbpiece - Passage Only", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8940", "description": "No outside operation", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8943", "description": "Key outside unlocks/locks trim. Freewheeling trim.", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8944", "description": "Key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8946", "description": "Key unlocks trim, trim retracts latch/trim relocks when key is removed", "baseCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8963", "description": "Thumbpiece - Key Unlocks/Locks", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8966", "description": "Thumbpiece - Key Outside Retracts, Inside Unlocks/Locks Trim", "baseCylinder": { "partNumber": "#34", "type": "Rim Cylinder" }, "prefixes": [{ "id": "Inside Cyl", "description": "Inside Cylinder for 8966 Function", "addsCylinder": { "partNumber": "#41", "type": "Mortise Cylinder" }, "isDeviceSpecific": true, "keywords": [] }, ...devicePrefixesPE80Series] },
    { "modelNumber": "PE8973", "description": "Electrified trim fail safe power off, unlocks lever.", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8974", "description": "Electrified trim fail secure power off, locks lever", "baseCylinder": null, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8975", "description": "Electrified trim-fail safe power off, unlocks lever, key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
    { "modelNumber": "PE8976", "description": "Electrified trim - fail secure power off, locks lever, key retracts latch", "baseCylinder": { "partNumber": "#46", "type": "Mortise Cylinder" }, "prefixes": [...devicePrefixesPE80Series] },
  ].sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};