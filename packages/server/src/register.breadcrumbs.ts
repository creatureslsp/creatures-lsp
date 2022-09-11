import {Disposable} from "vscode-languageserver";
import {connection} from "./server";
import {DocumentSymbol, DocumentSymbolParams, SymbolInformation} from "vscode-languageserver-protocol";
import {hints, Nullable, server} from "@bedalton/caos-util";
import {CaosDocument, unpack} from "./server.utils";
import getDocumentSymbolsFromText = hints.getDocumentSymbolsFromText;


type Symbols = SymbolInformation[] | DocumentSymbol[];

async function getDocumentSymbolsFromParams(handler: DocumentSymbolParams): Promise<Nullable<Symbols>> {
    const result: Nullable<CaosDocument> = await unpack(handler.textDocument.uri);
    if (!result) {
        return undefined;
    }
    
    const {text, variant} = result;
    const symbols = getDocumentSymbolsFromText(variant, text, false);
    console.log("Symbols in Server: " + symbols.map((s: server.DocumentSymbol) => s.name).join())
}

export function registerDocumentSymbolProvider(use: boolean): Disposable {
    if (!use) {
        return {
            dispose: () => {}
        }
    }
    return connection.onDocumentSymbol(getDocumentSymbolsFromParams)
}