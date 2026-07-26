import { rangesIntersect } from "@creatureslsp/extension-util";
export function indexFilterDoNotDelete(documentUri, range) {
    return (location) => {
        const should = shouldDelete(documentUri, range, location);
        if (should) {
            if (location.documentUri.toLowerCase() != documentUri.toLowerCase()) {
                throw new Error("Should not delete location in another file");
            }
        }
        return !should;
    };
}
export function indexFilterShouldDelete(documentUri, range) {
    return (location) => {
        return shouldDelete(documentUri, range, location);
    };
}
export function shouldDelete(documentUri, range, location) {
    if (documentUri.toLowerCase() !== location.documentUri.toLowerCase()) {
        // Do not delete locations for documents other than this one
        return false;
    }
    if (range == null) {
        return true;
    }
    return rangesIntersect(range, location.range);
}
