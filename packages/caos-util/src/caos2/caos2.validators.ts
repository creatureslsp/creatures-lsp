import {
    getArrayAccessFileNameIndex,
    Nullable,
    PLUS_OR_MINUS_WITH_NUMBER_REGEX,
    getExtension,
    hasExtension,
    stripSurroundingQuotes
} from "@bedalton/extension-util";
import _path from "path";

export const Caos2Validators = {
    isNumber: isNumber,
    isString: isString,
    isSingleImage: isSingleImage,
    isDate: isDate,
    isEmail: isEmail,
    isUrl: isURL,
    isFile: isFile,
    isBasicSprite: isBasicSprite,
    isSpriteOrBlk: isBasicSpriteOrBlk,
    hasExtension: hasExtension,
};


const fileOrSpriteExtensions = [
    "gif", "jpeg", "jpg", "png", "spr", "s16", "c16", "bmp"
]

function getFilenameWithoutArrayAccess(path: string): Nullable<string> {
    if (path.indexOf('[') < 0) {
        return path
    }
    const [fileName] = getArrayAccessFileNameIndex(path) ?? [null];
    return fileName;
}

function isBasicSpriteOrBlk(value: string): boolean {
    return isSprite(value, true);
}

function isBasicSprite(value: string): boolean {
    return isSprite(value, false);
}

function isSprite(value: string, canBeBlk: boolean): boolean {
    const extension = getExtension(value, false);
    if (!extension) {
        return false;
    }
    return extension === "spr" || extension === "s16" || extension === "c16" || (canBeBlk && extension === "blk");
}

function isNumber(value: string | number): boolean {
    return typeof value === "number" || PLUS_OR_MINUS_WITH_NUMBER_REGEX.test(value);
}

function isString(value: string): boolean {
    return !PLUS_OR_MINUS_WITH_NUMBER_REGEX.test(value);
}

function isSingleImage(value: string): boolean {
    const fileName = getFilenameWithoutArrayAccess(stripSurroundingQuotes(value));
    
    if (!fileName) {
        return false;
    }
    
    const extension = _path.extname(fileName);
    
    // Check is sprite extension is valid
    return fileOrSpriteExtensions.indexOf(extension) >= 0;
}

const SIMPLE_DATE_REGEX = /^\d{4}-([0][1-9]|1[0-2])-([0][1-9]|[1-2]\d|3[01])(\s+\d{1,2}:\d{2}(?:[:]\d+))$/
const ISO_DATE_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[0-2][1-9]|[1-3]0|3[01])T(?:[0-1][0-9]|2[0-3])(?::[0-6]\d)(?::[0-6]\d)?(?:\.\d{3})?(?:[+-][0-2]\d:[0-5]\d|Z)?$/

function isDate(value: string): boolean {
    value = stripSurroundingQuotes(value)
        .trim();
    
    if (!SIMPLE_DATE_REGEX.test(value) && !ISO_DATE_REGEX.test(value)) {
        return false;
    }
    
    try {
        const date = Date.parse(value);
        return !isNaN(date);
    } catch {
        return false;
    }
    
}

const EMAIL_REGEX = /[^@]+@([^.]+?)+\..+/i;

function isEmail(value: string): boolean {
    return EMAIL_REGEX.test(stripSurroundingQuotes(value));
}

const URL_REGEX = /(https?:\/\/)?([^.]+)+(\.[^.]+)+/i;

function isURL(value: string) {
    return URL_REGEX.test(value);
}


export function isFile(value: string) {
    const fileName = getFilenameWithoutArrayAccess(value)
    return !!fileName && !!_path.extname(fileName);
}