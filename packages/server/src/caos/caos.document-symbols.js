import { getCaosScriptDocumentSymbols } from "@creatureslsp/caos";
import { toVsRange } from "@creatureslsp/extension-util";
export async function getCaosDocumentSymbolsInDocument(document) {
    const { variant, text } = document;
    let symbolsRaw;
    try {
        symbolsRaw = getCaosScriptDocumentSymbols(variant, text);
    }
    catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        console.error("Failed to get document symbols; " + error);
        // console.error("Failed to get GOTO; ", error);
        symbolsRaw = [];
    }
    return symbolsRaw
        .map(toVsCodeSymbol);
}
function toVsCodeSymbol(symbol) {
    const vsSymbol = {
        name: symbol.name,
        detail: "",
        kind: symbol.kind,
        range: toVsRange(symbol.range),
        selectionRange: toVsRange(symbol.selectionRange),
    };
    vsSymbol.children = symbol.children?.map(toVsCodeSymbol) ?? [];
    return vsSymbol;
}
