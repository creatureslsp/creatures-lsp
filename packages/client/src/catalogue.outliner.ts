import {
    CancellationToken,
    DocumentSymbol,
    DocumentSymbolProvider,
    SymbolInformation,
    SymbolKind,
    TextDocument,
} from "vscode";
import {parseCatalogue} from "@creatures-lsp/caos-kt/catalogue-core";
import type {CatalogueEntry, CatalogueParserItem} from "@creatures-lsp/caos-kt/catalogue-core";
import {toVsCodeRange} from "./helpers.js";
import {getCatalogueRange} from "@creatures-lsp/catalogue";
import {Log} from "./log.js";

type Symbols = SymbolInformation[] | DocumentSymbol[];


export class CatalogueSymbolProvider implements DocumentSymbolProvider {
    
    /**
     * Provide symbol information for the given document.
     *
     * @param document The document in which the command was invoked.
     * @param _token A cancellation token.
     * @return An array of document highlights or a thenable that resolves to such. The lack of a result can be
     * signaled by returning `undefined`, `null`, or an empty array.
     */
    async provideDocumentSymbols(document: TextDocument, _token: CancellationToken): Promise<Symbols> {
        const text = document.getText();
        try {
            return parseCatalogue(text)
                .catalogueEntries
                .map(toVsCodeSymbol);
        } catch (e) {
            const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
            Log.e(document.uri, "Failed to get catalogue symbols; " + error);
            // console.error("Failed to get GOTO; ", error);
            return [];
        }
    }
}

function toVsCodeSymbol(entry: CatalogueEntry): DocumentSymbol {
    const headerRange = (entry.catalogueNameParserItem ?? entry.keywordParserItem).textRange;
    const keyword = entry.keywordParserItem.text;
    const range = getCatalogueRange(entry);
    const vsSymbol = new DocumentSymbol(
        keyword + " " + (entry.catalogueNameParserItem?.value ?? ""),
        "",
        SymbolKind.Enum,
        toVsCodeRange(range),
        toVsCodeRange(headerRange),
    );
    vsSymbol.children = []; //entry.valueParserItems.map(mapChild);
    return vsSymbol;
}

function mapChild(parserItem: CatalogueParserItem, i: number): DocumentSymbol {
    return new DocumentSymbol(
        i + ": " + parserItem.value + "",
        "",
        SymbolKind.String,
        toVsCodeRange(parserItem.textRange),
        toVsCodeRange(parserItem.textRange),
    );
}