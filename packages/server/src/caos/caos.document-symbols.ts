import {getCaosScriptDocumentSymbols} from "@creatureslsp/caos";
import {DocumentSymbol} from "vscode-languageserver-types";
import {CaosDocument} from "./caos.document.js";
import {toVsRange} from "@creatureslsp/extension-util";


export async function getCaosDocumentSymbolsInDocument(document: CaosDocument) {
    const {variant, text} = document;
    
    let symbolsRaw: DocumentSymbol[]
    try {
        symbolsRaw = getCaosScriptDocumentSymbols(variant, text);
    } catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        console.error("Failed to get document symbols; " + error);
        // console.error("Failed to get GOTO; ", error);
        symbolsRaw = [];
    }
    return symbolsRaw
        .map(toVsCodeSymbol);
}

function toVsCodeSymbol(symbol: DocumentSymbol): DocumentSymbol {
    const vsSymbol: DocumentSymbol = {
        name: symbol.name,
        detail: "",
        kind: symbol.kind,
        range: toVsRange(symbol.range),
        selectionRange: toVsRange(symbol.selectionRange),
    } satisfies DocumentSymbol;
        
    vsSymbol.children = symbol.children?.map(toVsCodeSymbol) ?? [];
    return vsSymbol;
}