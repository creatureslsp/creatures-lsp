// noinspection JSUnusedGlobalSymbols

import {
    AGENT_TYPE_ID,
    ANIMATION_TYPE_ID,
    ANY_TYPE_ID,
    BYTE_STRING_TYPE_ID,
    C1_STRING_TYPE_ID,
    DECIMAL_TYPE_ID,
    FLOAT_TYPE_ID,
    HEXADECIMAL_TYPE_ID,
    INT_TYPE_ID,
    NULL_TYPE_ID,
    STRING_TYPE_ID,
    UNKNOWN_TYPE_ID,
    VARIABLE_TYPE_ID
} from "./constants.js";

const anyTypes = [
    ANY_TYPE_ID,
    UNKNOWN_TYPE_ID,
    VARIABLE_TYPE_ID
];
const numberTypes = [
    INT_TYPE_ID,
    FLOAT_TYPE_ID,
    DECIMAL_TYPE_ID
];
const stringTypes = [
    STRING_TYPE_ID,
    C1_STRING_TYPE_ID,
    HEXADECIMAL_TYPE_ID
];
const byteStringTypes = [
    C1_STRING_TYPE_ID,
    BYTE_STRING_TYPE_ID,
    ANIMATION_TYPE_ID
];
const agentTypes = [
    AGENT_TYPE_ID,
    NULL_TYPE_ID
];

function isNumberType(type: number): boolean {
    return numberTypes.indexOf(type) >= 0;
}

function isNumberTypeAlike(aType: number, other: number): boolean {
    if (aType === DECIMAL_TYPE_ID || aType === FLOAT_TYPE_ID) {
        return isNumberType(other);
    }
    if (other === DECIMAL_TYPE_ID || other === FLOAT_TYPE_ID) {
        return isNumberType(aType);
    }
    return (aType === INT_TYPE_ID) && other === INT_TYPE_ID;
}

function isAgentType(type: number): boolean {
    return agentTypes.indexOf(type) >= 0;
}

function isStringType(type: number): boolean {
    return stringTypes.indexOf(type) >= 0;
}

function isByteStringLike(type: number): boolean {
    return byteStringTypes.indexOf(type) >= 0;
}

function isAnyType(type: number): boolean {
    return anyTypes.indexOf(type) >= 0;
}

/**
 * Helper function to check similarities between different value types
 * ie. Float and Int are decimals
 * @param aType
 * @param other
 */
export function isSimilarType(aType: number, other: number): boolean {
    if (aType == null || other == null) {
        return true;
    }
    if (aType === other) {
        return true;
    }
    if (isAnyType(aType) || isAnyType(other)) {
        return true;
    }
    if (isNumberTypeAlike(aType, other)) {
        return true;
    }
    if (isStringType(aType) && isStringType(other)) {
        return true;
    }
    if (isByteStringLike(aType) && isByteStringLike(other)) {
        return true;
    }
    return isAgentType(aType) && isAgentType(other);
}