import type {DocumentUri, Range} from "vscode-languageserver";
import type {TextEdit} from "vscode-languageserver-types";

export type Nullable<T> = T | undefined | null;

export * from "./ast";

export * from "./SemanticToken"

export interface IndexedItemLocation {
    readonly documentUri: DocumentUri;
    readonly range: Range;
    readonly text?: string;
}

export type WorkspaceChanges = {[uri: DocumentUri]: TextEdit[]}


export interface FileNameData {
    readonly documentUri: DocumentUri;
    readonly fileName: Nullable<string>;
    readonly parent: string;
    readonly fileNameWithoutExtension: Nullable<string>;
    readonly extension: Nullable<string>;
}


export type VersionedData<T> = {
    version: number;
    data: T;
}
export type DocumentIndexedData<T> = {[documentURI: string]: T};
export type LanguageDocumentIndexedData<T> = {[language: string]: DocumentIndexedData<T>};