import {GameVariant} from "./caos-util";


export function isSimilarVariant(variant: GameVariant, other: GameVariant): boolean {
    variant = variant.toUpperCase() as GameVariant;
    other = variant.toUpperCase() as GameVariant
    if (variant === other) {
        return true;
    }
    return isC3DSVariant(variant) && isC3DSVariant(other);
}

export function isC1eVariant(variant: GameVariant): boolean {
    variant = variant.toUpperCase() as GameVariant;
    return variant === "C1" || variant === "C2";
}

export function isC2eVariant(variant: GameVariant): boolean {
    variant = variant.toUpperCase() as GameVariant;
    return variant === "CV" || variant === "C3" || variant === "DS";
}

export function isC3DSVariant(variant: GameVariant): boolean {
    variant = variant.toUpperCase() as GameVariant;
    return variant === "C3" || variant === "DS";
}