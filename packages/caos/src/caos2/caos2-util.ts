import {Caos2Validators} from "./caos2.validators.js";
import {extname} from "@creatures-lsp/extension-util";

export enum Caos2ValueType {
    NUMBER,
    STRING,
    CAOS,
    SPRITE,
    NON_CAOS_FILE,
    OUTPUT_COB_FILE,
    OUTPUT_PRAY_FILE,
    DATE,
    EMAIL,
    URL,
}


export function validateCaos2Value(type: Caos2ValueType, value: string) {
    switch (type) {
        case Caos2ValueType.NUMBER:
            return Caos2Validators.isNumber(value);
        case Caos2ValueType.STRING:
            return Caos2Validators.isString(value);
        case Caos2ValueType.CAOS:
            return Caos2Validators.hasExtension(value, "cos", "caos");
        case Caos2ValueType.SPRITE:
            return Caos2Validators.isBasicSprite(value);
        case Caos2ValueType.NON_CAOS_FILE:
            return !Caos2Validators.hasExtension(value, "cos", "caos");
        case Caos2ValueType.OUTPUT_COB_FILE:
            value = extname(value)
                ?.toLowerCase()
                ?.trim() ?? "";
            return !value || value === ".cob"
        case Caos2ValueType.OUTPUT_PRAY_FILE:
            value = extname(value)
                ?.toLowerCase()
                ?.trim() ?? "";
            return !value || value === ".agent" || value === ".agents";
        case Caos2ValueType.DATE:
            return Caos2Validators.isDate(value);
        case Caos2ValueType.EMAIL:
            return Caos2Validators.isEmail(value);
        case Caos2ValueType.URL:
            return Caos2Validators.isUrl(value);
    }
}