import {Range} from "vscode-languageserver";
import type {CatalogueEntry} from "@creatureslsp/caos-kt/catalogue-core";
import {HasRange} from "@creatureslsp/extension-util";

export function getCatalogueRange(entry: CatalogueEntry): Range {
    const start = entry.keywordParserItem.textRange.start
    const entries = (entry.valueParserItems ?? [])
        .concat(...(entry.looseItems ?? []))
        .concat(...(entry.errorHeaderItems ?? []))
        .concat(entry.arrayCountParserItem ?? entry.catalogueNameParserItem ?? entry.overrideKeyword ?? entry.keywordParserItem!!)
    ;
    entries.sort(sortParserItemsByStart)
    let end = entries.pop()?.textRange?.end;
    if (end == null) {
        return entry.keywordParserItem.textRange;
    } else {
        return {
            start: start,
            end: end
        } satisfies Range
    }
}

function sortParserItemsByStart(a: HasRange, b: HasRange): number {
    const first = sortValue(a.textRange);
    const second = sortValue(b.textRange);
    const difference = first - second;
    
    if (difference === 0) {
        return 0
    }
    return difference > 0 ? 1 : -1;
}

function sortValue(range: Range): number {
    return (range.start.line << 16) | range.start.character;
}
