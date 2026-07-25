import {parseCatalogue, type CatalogueEntry} from "@creatures-lsp/catalogue/core";
import {getCatalogueRange} from "@creatures-lsp/catalogue";
import type {CatalogueDocument} from "./catalogue.document.js";
import type {DocumentSymbol} from "vscode-languageserver-types";
import {SymbolKind} from "vscode-languageserver";
import {toVsRange} from "@creatures-lsp/extension-util";

export function getCatalogueDocumentSymbolsInDocument(document: CatalogueDocument) {
    const text = document.text;
    try {
        return parseCatalogue(text)
            .catalogueEntries
            .map(toVsCodeSymbol);
    } catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        console.error("Failed to get catalogue symbols; " + error);
        // console.error("Failed to get GOTO; ", error);
        return [];
    }
}

function toVsCodeSymbol(entry: CatalogueEntry): DocumentSymbol {
    const headerRange = (entry.catalogueNameParserItem ?? entry.keywordParserItem).textRange;
    const keyword = entry.keywordParserItem.text;
    const range = getCatalogueRange(entry);
    const vsSymbol: DocumentSymbol = {
        name: keyword + " " + (entry.catalogueNameParserItem?.value ?? ""),
        detail: "",
        kind: SymbolKind.Enum,
        range: toVsRange(range),
        selectionRange: toVsRange(headerRange),
    } satisfies DocumentSymbol
    vsSymbol.children = []; //entry.valueParserItems.map(mapChild);
    return vsSymbol;
}