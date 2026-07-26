import {
    CancellationToken,
    DocumentSymbol,
    DocumentSymbolProvider,
    ProviderResult,
    SymbolInformation,
    TextDocument,
} from "vscode";
import {type GameVariant,} from "@creatureslsp/caos";
import { getCaosScriptDocumentSymbols } from "@creatureslsp/caos/document-symbols";
import {DocumentSymbol as IDocumentSymbol} from "vscode-languageserver-types";
import {getVariant} from "./settings.js";
import {toVsCodeRange} from "./helpers.js";
import {Log} from "./log.js";

type Symbols = SymbolInformation[] | DocumentSymbol[];


export class CaosSymbolProvider implements DocumentSymbolProvider {
    
    /**
     * Provide symbol information for the given document.
     *
     * @param document The document in which the command was invoked.
     * @param _token A cancellation token.
     * @return An array of document highlights or a thenable that resolves to such. The lack of a result can be
     * signaled by returning `undefined`, `null`, or an empty array.
     */
    provideDocumentSymbols(document: TextDocument, _token: CancellationToken): ProviderResult<Symbols> {
        return new Promise(async (resolve) => {
            const variant: GameVariant = getVariant() ?? "DS";
            const text = document.getText();
            let symbolsRaw: IDocumentSymbol[]
            try {
                symbolsRaw = getCaosScriptDocumentSymbols(variant, text);
            } catch (e) {
                const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
                Log.e(document.uri, "Failed to get document symbols; " + error);
                // console.error("Failed to get GOTO; ", error);
                symbolsRaw = [];
            }
            const symbols: DocumentSymbol[] = symbolsRaw
                .map(toVsCodeSymbol);
            resolve(symbols);
        });
    }
}

function toVsCodeSymbol(symbol: IDocumentSymbol): DocumentSymbol {
    const vsSymbol = new DocumentSymbol(
        symbol.name,
        "",
        symbol.kind - 1,
        toVsCodeRange(symbol.range),
        toVsCodeRange(symbol.selectionRange),
    );
    vsSymbol.children = symbol.children?.map(toVsCodeSymbol) ?? [];
    return vsSymbol;
}