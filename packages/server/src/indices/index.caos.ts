import type {DocumentUri, Range} from "vscode-languageserver";
import type {CaosParseResult} from "@creatures-lsp/caos-kt/caos-parser";
import {clearNamedVariables, indexNamedVariablesInDocument} from "./index.caos.named-variables.js";
import {type Nullable, rangesIntersect} from "@creatures-lsp/extension-util";
import {getWorkspaceUriForFile} from "../workspace-folders.js";
import {clearJournalFileNames, indexJournalNamesInDocument} from "./index.caos.journal-files.js";
import {clearCaosCatalogueUsages, indexCaosCatalogueUsagesInDocument} from "./index.caos.catalogue-usages.js";
import {type CreaturesDocument, isCaosDocument, unpackDocument} from "../document.js";
import {isIndexingPaused} from "./index.file.js";
import {Log} from "../ConnLogger.js";
import {parseCaos} from "../caos/caos.parse.js";
import {caosInitLib} from "./../caos/caos-init-lib.js";


export async function indexCaosFile(workspaceUri: Nullable<DocumentUri>, documentOrURI: CreaturesDocument<unknown> | DocumentUri, range?: Nullable<Range>): Promise<boolean> {
    
    if (isIndexingPaused()) {
        return false;
    }
    
    const document = await unpackDocument(documentOrURI);
    
    if (document == null) {
        Log.e(`Failed to index null CAOS document for: ${documentOrURI}`);
        return false;
    }
    
    if (!isCaosDocument(document)) {
        Log.e(`Document is not a CAOS document in indexCaosFile; LanguageId: ${document?.languageId}, Document: ${document.documentUri}`);
        return false;
    }
    caosInitLib();
    let {variant, text} = document;
    
    if (text == null) {
        Log.e("Failed to read text for CAOS file: " + document.documentUri + "; Text returned NULL");
        return false;
    }
    
    const parseResult = parseCaos(variant, text, range);
    
    try {
        index(workspaceUri, document.documentUri, parseResult, range);
    } catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        Log.e("Failed to index CAOS document: " + document.documentUri + "; " + error);
    }
    return true;
}

function index(workspaceUri: Nullable<DocumentUri>, documentUri: DocumentUri, parseResult: CaosParseResult, range: Nullable<Range>) {
    
    if (isIndexingPaused()) {
        return;
    }
    
    const variant = parseResult.variant;
    
    const isC2e = variant !== "C1" && variant !== "C2";
    
    let commandCalls = parseResult.commandCalls;
    
    const workspaceUriString: DocumentUri = workspaceUri ?? getWorkspaceUriForFile(documentUri);
    
    if (commandCalls.length === 0) {
        clearCaosDocumentIndices(workspaceUriString, documentUri);
        return;
    }
    
    commandCalls = range == null
        ? commandCalls
        : commandCalls
            .filter(c => rangesIntersect(range, c.textRange));
    
    clearCaosDocumentIndices(workspaceUriString, documentUri, range);
    
    if (isC2e) {
        indexNamedVariablesInDocument(workspaceUriString, documentUri, commandCalls, true);
        indexJournalNamesInDocument(workspaceUriString, documentUri, commandCalls);
        indexCaosCatalogueUsagesInDocument(workspaceUriString, documentUri, commandCalls, true);
    }
}

export function clearCaosDocumentIndices(workspaceUri: DocumentUri, documentUri: DocumentUri, range?: Nullable<Range>) {
    if (isIndexingPaused()) {
        return;
    }
    clearNamedVariables(workspaceUri, documentUri, range);
    clearJournalFileNames(workspaceUri, documentUri, range);
    clearCaosCatalogueUsages(workspaceUri, documentUri, range);
}
