import { parseCatalogue } from "@creatureslsp/catalogue/core";
import { getCatalogueRange } from "@creatureslsp/catalogue";
import { SymbolKind } from "vscode-languageserver";
import { toVsRange } from "@creatureslsp/extension-util";
export function getCatalogueDocumentSymbolsInDocument(document) {
    const text = document.text;
    try {
        return parseCatalogue(text)
            .catalogueEntries
            .map(toVsCodeSymbol);
    }
    catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        console.error("Failed to get catalogue symbols; " + error);
        // console.error("Failed to get GOTO; ", error);
        return [];
    }
}
function toVsCodeSymbol(entry) {
    const headerRange = (entry.catalogueNameParserItem ?? entry.keywordParserItem).textRange;
    const keyword = entry.keywordParserItem.text;
    const range = getCatalogueRange(entry);
    const vsSymbol = {
        name: keyword + " " + (entry.catalogueNameParserItem?.value ?? ""),
        detail: "",
        kind: SymbolKind.Enum,
        range: toVsRange(range),
        selectionRange: toVsRange(headerRange),
    };
    vsSymbol.children = []; //entry.valueParserItems.map(mapChild);
    return vsSymbol;
}
