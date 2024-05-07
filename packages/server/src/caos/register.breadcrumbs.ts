import {Disposable} from "vscode-languageserver";
import {DocumentSymbol as IDocSymbol} from "vscode-languageserver-types";
import {connection} from "../connection.vscode";
import {DocumentSymbol, DocumentSymbolParams, SymbolInformation} from "vscode-languageserver-protocol";
import {hints} from "@bedalton/caos-util";
import {Nullable} from "@bedalton/extension-util";
import {CaosDocument, unpack} from "../server.utils";
const getDocumentSymbolsFromText = hints.getDocumentSymbolsFromText;


type Symbols = SymbolInformation[] | DocumentSymbol[];

async function getCaosDocumentSymbolsFromParams(handler: DocumentSymbolParams): Promise<Nullable<Symbols>> {
    const result: Nullable<CaosDocument> = await unpack(handler.textDocument.uri);
    if (!result) {
        return undefined;
    }
    
    const {text, variant} = result;
    const symbols = getDocumentSymbolsFromText(variant, text, false);
    console.log("Symbols in Server: " + symbols.map((s: IDocSymbol) => s.name).join())
}

export function registerCaosDocumentSymbolProvider(use: boolean): Disposable {
    if (!use) {
        return {
            dispose: () => {}
        }
    }

    return connection.onDocumentSymbol(getCaosDocumentSymbolsFromParams)
}

