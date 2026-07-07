import {Caos2Validators} from "./caos2.validators.js";


export type Caos2CobFormat = {
    formatDescriptor: string;
    validate: (value: string) => boolean;
};


export const Caos2CobFormats= {
    STRING: {formatDescriptor: "string", validate: Caos2Validators.isString},
    NUMBER: {formatDescriptor: "number", validate: Caos2Validators.isNumber},
    SINGLE_IMAGE: {
        formatDescriptor: "image | or a sprite file with array access like sprite[0].spr",
        validate: Caos2Validators.isSingleImage
    },
    DATE: {formatDescriptor: "date in the format of 2011-12-03 or 2011-12-03T10:15:30", validate: Caos2Validators.isDate},
    EMAIL: {formatDescriptor: "email", validate: Caos2Validators.isEmail},
    URL: {formatDescriptor: "URL", validate: Caos2Validators.isUrl},
    FILE: {formatDescriptor: "file reference", validate: Caos2Validators.isFile}
}
