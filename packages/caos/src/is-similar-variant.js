export function isSimilarVariant(variant, other) {
    variant = variant.toUpperCase();
    other = variant.toUpperCase();
    if (variant === other) {
        return true;
    }
    return isC3DSVariant(variant) && isC3DSVariant(other);
}
export function isC1eVariant(variant) {
    variant = variant.toUpperCase();
    return variant === "C1" || variant === "C2";
}
export function isC2eVariant(variant) {
    variant = variant.toUpperCase();
    return variant === "CV" || variant === "C3" || variant === "DS" || variant === "DS:CE";
}
export function isC3DSVariant(variant) {
    variant = variant.toUpperCase();
    return variant === "C3" || variant === "DS" || variant === "DS:CE";
}
