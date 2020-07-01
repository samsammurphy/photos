import _ from "lodash";


import enums from "../../types/enums";

import TitleTextField from "../../components/PhotoPage/TitleTextField";
import MultiFields from "../../components/PhotoPage/MultiFields";

import { data } from "./categories";

export const PHOTO_FIELDS = {
  description: {
    component: TitleTextField,
    name: "description",
    title: "Description",
    type: enums.TYPES.string,
    placeholder: "this is a placeholder",
    regexValidation: "^([ ]*\\w+[ ]*)+$",
  },
  number: {
    component: TitleTextField,
    inputProps: { min: 0, step: 1, max: 10 },
    name: "number",
    title: "example number field ?",
    type: enums.TYPES.number,
    placeholder: "eg. 1",
    regexValidation: "^[0-9]+",
  },
  multicategories: {
    component: MultiFields.MultiFieldsWithStyles,
    nakedComponent: MultiFields.MultiFieldsOriginal,
    name: "multicategories",
    placeholder: "Add photo categories",
    data: data,
    noOptionsMessage: "No more categories",
    sanitize: (value) => {
      _.forEach(value, (category) => {
        category.brand =
          category.brand.replace &&
          category.brand.replace(/\s+/g, " ").trim();
      });
      return value;
    },

    subfields: {
      pieces: {
        component: TitleTextField,
        inputProps: { min: 0, step: 1 },
        name: "number",
        title: "Number",
        type: enums.TYPES.number,
        placeholder: "eg. 1",
        regexValidation: "^[0-9]+",
      },
      brand: {
        component: TitleTextField,
        name: "brand",
        title: "Brand",
        type: enums.TYPES.string,
        placeholder: "eg. whatever",
        regexValidation: ".+",
      },
    },
  },
}