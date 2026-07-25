import type {DocumentUri, Range} from "vscode-languageserver";
import type {Nullable} from "@creatures-lsp/extension-util"
import type {CommandCall} from "@creatures-lsp/caos";


export type IndexedItemLocation = {
    documentUri: DocumentUri;
    range: Range;
    text?: string;
}


export interface CommandIndex {
    getUsages(key?: Nullable<string>): IndexedItemLocation[];
    index(documentUri: DocumentUri, call: CommandCall, recursive: boolean);
    clearInDocument(documentUri: DocumentUri, range?: Nullable<Range>);
}