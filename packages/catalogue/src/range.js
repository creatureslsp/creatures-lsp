export function getCatalogueRange(entry) {
    const start = entry.keywordParserItem.textRange.start;
    const entries = (entry.valueParserItems ?? [])
        .concat(...(entry.looseItems ?? []))
        .concat(...(entry.errorHeaderItems ?? []))
        .concat(entry.arrayCountParserItem ?? entry.catalogueNameParserItem ?? entry.overrideKeyword ?? entry.keywordParserItem);
    entries.sort(sortParserItemsByStart);
    let end = entries.pop()?.textRange?.end;
    if (end == null) {
        return entry.keywordParserItem.textRange;
    }
    else {
        return {
            start: start,
            end: end
        };
    }
}
function sortParserItemsByStart(a, b) {
    const first = sortValue(a.textRange);
    const second = sortValue(b.textRange);
    const difference = first - second;
    if (difference === 0) {
        return 0;
    }
    return difference > 0 ? 1 : -1;
}
function sortValue(range) {
    return (range.start.line << 16) | range.start.character;
}
