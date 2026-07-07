import {CatalogueParserItem} from "@creatures-lsp/caos-kt/catalogue-core";
import {CatalogueCursorData} from "@creatures-lsp/caos-kt/catalogue-cursor";
import {CompletionItem} from "vscode-languageserver-types";
import {IsCatalogue} from "../is.js";
import {Nullable, rangesEqual, toVsRange} from "@creatures-lsp/extension-util";
import {createCompletionItem} from "../completions.js";

const arrayOrTag = ["ARRAY", "TAG"];

export function appendKeywordCompletions(
    cursorData: CatalogueCursorData,
    parserItems: CatalogueParserItem[],
    out: CompletionItem[]
){
    const keywords = getKeywordsForCompletions(cursorData, parserItems);
    if (!keywords.length) {
        return;
    }
    
    const range = toVsRange(cursorData.item.textRange);
    
    for (const keyword of keywords) {
        const item = createCompletionItem(
            keyword,
            range
        );
        out.push(item);
    }
    
}
export function getKeywordsForCompletions(
    cursorData: CatalogueCursorData,
    parserItems: CatalogueParserItem[],
): string[] {
    const item = cursorData.item;
    const position = cursorData.position;
    const isInside = position === "INSIDE";
    const isAfter = position === "END" || position === "AFTER";
    const isInsideOrAfter = isInside || isAfter;
    
    if (IsCatalogue.arrayKeyword(item) && isInsideOrAfter) {
        return ["OVERRIDE"];
    }
    
    // Handle string cursor position
    // TODO: Should this just return empty list
    if (IsCatalogue.string(item)) {
        if (isInside) {
            return [];
        }
        
        if (position === "START" || position === "END") {
            // Cursor is touching string, so bail out
            return []
        }
        
        if (position === "BEFORE") {
            const before = getItemBefore(parserItems, item);
            if (before == null) {
                return arrayOrTag;
            }
        } else if (position === "AFTER") {
            const next = getItemAfter(parserItems, item);
            if (next == null || !IsCatalogue.string(next)) {
                return arrayOrTag;
            }
        }
    }
    
    if (!IsCatalogue.overrideKeyword(item)) {
        return arrayOrTag;
    }
    
    return [];
}


function getItemBefore(items: CatalogueParserItem[], target: CatalogueParserItem): Nullable<CatalogueParserItem> {
    let before = null;
    const targetRange = target.textRange;
    for (const item of items) {
        if (rangesEqual(item.textRange, targetRange)) {
            if (item.text !== target.text) {
                console.warn("Ranges match, but text does not");
                return null;
            }
            return before;
        }
        before = item;
    }
}

function getItemAfter(items: CatalogueParserItem[], target: CatalogueParserItem): Nullable<CatalogueParserItem> {
    const targetRange = target.textRange;
    const itemCount = items.length;
    for (let i = 0; i < itemCount; i++) {
        const item = items[i];
        if (!rangesEqual(item.textRange, targetRange)) {
            continue;
        }
        if (item.text !== target.text) {
            console.warn("Ranges match, but text does not");
            return null;
        }
        if (itemCount > i + 1) {
            return items[i + 1];
        } else {
            return null;
        }
    }
}