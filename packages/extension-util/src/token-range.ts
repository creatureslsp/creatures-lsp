// noinspection JSUnusedGlobalSymbols

import {ParseTreeItem, Nullable, RangeWithIndex} from "./types";

/**
 * Gets the extents of text ranges from parser items. Returns null if no parser items
 * @param items
 */
export function getTokenRange(items: ParseTreeItem<any>[]): Nullable<RangeWithIndex> {
    if (items.length === 0) {
        return undefined;
    }
    if (items.length === 1) {
        return items[0].textRange;
    }
    
    // Sort sorts in place, so make a copy of the array
    const itemsTemp = items.slice(0);
    
    // Get minimum text range
    itemsTemp.sort((a, b) => a.textRange.startIndex - b.textRange.startIndex);
    const firstItem = items[0].textRange;
    
    // Get maximum text range
    // NOTE: Cannot just use sort by start, as text ranges can be contained by each other
    // meaning a text range can start before and end after another element
    itemsTemp.sort((a, b) => b.textRange.endIndex - a.textRange.endIndex);
    const lastItem = items[0].textRange;
    
    return <RangeWithIndex>{
        startIndex: firstItem.startIndex,
        endIndex: lastItem.endIndex,
        start: firstItem.start,
        end: lastItem.end
    };
}