// src/data/sargent/series/mortiseLocks.js
import { series8200MortiseFunctions, series7800MortiseFunctions, series9200MortiseFunctions, seriesM9200MortiseFunctions } from './mortiseFunctions';
import { images } from '../../../images/images';

export const series8200Locks = {
  "name": "8200 Series",
    "imageUrl": images.Mortise8200,
  
  "models": series8200MortiseFunctions.sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

export const series7800Locks = {
    "name": "7800 Series",
    "models": series7800MortiseFunctions.sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

export const series9200Locks = {
    "name": "9200 Series",
    "models": series9200MortiseFunctions.sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};

export const seriesM9200Locks = {
    "name": "M-9200 Series Mogul",
    "models": seriesM9200MortiseFunctions.sort((a, b) => a.modelNumber.localeCompare(b.modelNumber))
};