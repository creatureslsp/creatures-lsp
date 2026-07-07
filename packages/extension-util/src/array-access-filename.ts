import {parseIntSafe} from "./number-util.js";
import {getFileName} from "./files-util.js";
import type {Nullable} from "./types.js";

/**
 * Regex to parse out sprite file information, including sprite frame number
 * Format FileName.Ext[#]
 * Example: tool.spr[1]
 */
const ARRAY_ACCESS_REGEX = /^(.*?)\\.(spr|s16|c16)\\[(\\d+)]&/i;

/**
 * Regex to parse out sprite file information, including sprite frame number
 * Uses Array access syntax before file extension
 * Format FileName[#].ext
 * Example: tool[1].spr
 */
const ARRAY_ACCESS_BEFORE_EXTENSION_REGEX = /^(.*?)\\[(\\d+)]\\.(spr|s16|c16)$/i;

export function getArrayAccessFileNameIndex(path:string): Nullable<[string,number]> {
    
    const fileName = getFileName(path);
    
    if (!fileName) {
        return null;
    }
    
    if (fileName.indexOf("[") < 0) {
        return [path, 0];
    }
    
    let groupValues = ARRAY_ACCESS_REGEX.exec(path);
    
    if (groupValues != null) {
        const index = parseIntSafe(groupValues[3]) ?? 0;
        return [`${groupValues[1]}.${groupValues[2]}`, index];
    }
    
    // FileName[#].ext
    groupValues = ARRAY_ACCESS_BEFORE_EXTENSION_REGEX.exec(path)
    if (groupValues != null) {
        return [`${groupValues[1]}.${groupValues[3]}`, parseIntSafe(groupValues[2]) ?? 0]
    }
    console.error(`Failed to parse sprite file frame information from text: '${path}'`);
    return null;
}