import {DocumentUri, Range} from "vscode-languageserver";
import {getDocuments} from "../documents";
import {collectors, ParseResult} from "@bedalton/caos-util";
import {getDocumentSettings} from "../settings";
import {clearNamedVariables, deleteWorkspaceNamedVariableIndex, indexNamedVariables} from "./index.caos.named-variables";
import {getFileName, Nullable, rangesIntersect} from "@bedalton/extension-util";
import {getWorkspaceUriForFile} from "../workspace-folders";
import {getFiles, readTextFile} from "../files";


export async function indexCaosFile(workspaceUri: Nullable<DocumentUri>, documentURI: DocumentUri, range?: Nullable<Range>): Promise<boolean> {
    let text: Nullable<string> = null;
    try {
        text = await readTextFile(documentURI);
    } catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to read text for CAOS file: " + documentURI + ";", error);
        return false;
    }
    
    if (text == null) {
        console.error("Failed to read text for CAOS file: " + documentURI + "; Text returned NULL");
        return false;
    }
    
    const settings = await getDocumentSettings(documentURI);
    
    const variant = settings.variant ?? "DS";
    
    const parseResult = range == null
        ? collectors.parseCaos(variant, text)
        : collectors.parseCaosWithin(
            variant,
            text,
            range.start.line,
            range.start.character,
            range.end.line,
            range.end.character,
            false,
            null
        );
  
    try {
        index(workspaceUri, documentURI, parseResult, range);
    } catch (e) {
        const error = e instanceof Error ? e.message + "\n" + e.stack : e;
        console.error("Failed to index CAOS document: " + documentURI + ";", error);
    }
    
    return true;
}

function index(workspaceUri: Nullable<DocumentUri>, documentUri: DocumentUri, parseResult: ParseResult, range: Nullable<Range>) {
    
    const variant = parseResult.variant;
    
    const isC2e = !(variant === "C1" || variant === "C2");
    
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
    
    for (const commandCall of commandCalls) {
        if (isC2e) {
            indexNamedVariables(workspaceUriString, documentUri, commandCall, true);
        }
    }
}

export function clearCaosDocumentIndices(workspaceUri: DocumentUri, documentUri: DocumentUri, range?: Nullable<Range>) {
    clearNamedVariables(workspaceUri, documentUri, range);
}


export function clearWorkspaceCaosFileIndex(workspaceUri: DocumentUri) {
    deleteWorkspaceNamedVariableIndex(workspaceUri);
}