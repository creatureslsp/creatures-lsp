import type {Nullable} from "./types";


export const UNSIGNED_NUMBER_REGEX = /^(\\d+)$/
export const SIGNED_NUMBER_REGEX = /^(-?\\d+)$/
export const PLUS_OR_MINUS_WITH_NUMBER_REGEX = /^([-+]?\\d+)$/

export function parseIntSafe(numberString: string, radix: number = 10): Nullable<number> {
    try {
        return PLUS_OR_MINUS_WITH_NUMBER_REGEX.test(numberString)
            ? parseInt(numberString, radix)
            : null
    } catch {
        return null;
    }
}