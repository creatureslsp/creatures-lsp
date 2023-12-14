import {
    CancellationToken,
    DocumentSymbol,
    DocumentSymbolProvider,
    ProviderResult,
    SymbolInformation,
    TextDocument
} from "vscode";
import {GameVariant, com, DocumentSymbol as IDocumentSymbol} from "@bedalton/caos-util";
import hints = com.bedalton.creatures.caos.hints;
import {getVariant} from "./settings";
import {toVsCodeRange} from "./helpers";
import getDocumentSymbolsFromText = hints.getDocumentSymbolsFromText;


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
            const symbolsRaw: IDocumentSymbol[] = getDocumentSymbolsFromText(variant, text, false);
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
    vsSymbol.children = symbol.children.map(toVsCodeSymbol);
    return vsSymbol;
}