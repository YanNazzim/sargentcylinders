// src/data/sargent/series/mortiseLocks.js
import { series8200MortiseFunctions, series7800MortiseFunctions, series9200MortiseFunctions } from './mortiseFunctions';
import { images } from '../../../images/images';

export const series8200Locks = {
  "name": "8200 Series",
    "imageUrl": images.Mortise8200,
  
  "models": series8200MortiseFunctions.sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

export const series7800Locks = {
    "name": "7800 Series",
    "imageUrl": images.Mortise7800,

    "models": series7800MortiseFunctions.sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

export const series9200Locks = {
    "name": "9200 Series",
    "imageUrl": images.Mortise9200,

    "models": series9200MortiseFunctions.sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};
