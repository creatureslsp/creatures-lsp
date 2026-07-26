import { Caos2Validators } from "./caos2.validators.js";
import { extname } from "@creatureslsp/extension-util";
export var Caos2ValueType;
(function (Caos2ValueType) {
    Caos2ValueType[Caos2ValueType["NUMBER"] = 0] = "NUMBER";
    Caos2ValueType[Caos2ValueType["STRING"] = 1] = "STRING";
    Caos2ValueType[Caos2ValueType["CAOS"] = 2] = "CAOS";
    Caos2ValueType[Caos2ValueType["SPRITE"] = 3] = "SPRITE";
    Caos2ValueType[Caos2ValueType["NON_CAOS_FILE"] = 4] = "NON_CAOS_FILE";
    Caos2ValueType[Caos2ValueType["OUTPUT_COB_FILE"] = 5] = "OUTPUT_COB_FILE";
    Caos2ValueType[Caos2ValueType["OUTPUT_PRAY_FILE"] = 6] = "OUTPUT_PRAY_FILE";
    Caos2ValueType[Caos2ValueType["DATE"] = 7] = "DATE";
    Caos2ValueType[Caos2ValueType["EMAIL"] = 8] = "EMAIL";
    Caos2ValueType[Caos2ValueType["URL"] = 9] = "URL";
})(Caos2ValueType || (Caos2ValueType = {}));
export function validateCaos2Value(type, value) {
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
            return !value || value === ".cob";
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
