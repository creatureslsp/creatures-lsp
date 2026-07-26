import type {CaosDocument} from "../caos/caos.document.js";
import type {DocumentUri, Position, TextEdit, WorkspaceEdit} from "vscode-languageserver";
import {getCommandCallPositionalDataFromDocument} from "../caos/caos.command-call-positional-data.js";
import {type CommandCallPositionalData, Is, type NamedVarPrefix} from "@creatureslsp/caos";
import type {Nullable} from "@creatureslsp/caos";
import {getNamedVariableLocationsForType} from "../indices/index.caos.named-variables.js";
import {getWorkspaceUriForFile} from "../workspace-folders.js";
import {isVsCode, getWorkspaceEdits, rangesIntersect} from "@creatureslsp/extension-util";
import {renameCatalogueInCatalogueAndCaosFiles} from "./rename.catalogue.js";
import {offsetRenameRange} from "@creatureslsp/extension-util/get-workspace-edits";
import {pushInto} from "@creatureslsp/extension-util/array-util";

export function renameInCaosDocument(
    document: CaosDocument,
    position: Position,
    newText: string
): Nullable<WorkspaceEdit> {
    
    const workspaceUri: DocumentUri = getWorkspaceUriForFile(document.documentUri);
    
    const positionData = getCommandCallPositionalDataFromDocument(document, position)
    
    if (positionData == null) {
        return null;
    }
    
    const {commandCall} = positionData;
    
    const command = commandCall.commandString.toUpperCase()
        ?.trim();
    
    if (command == null || command.length === 0) {
        return null;
    }
    
    switch (command) {
        case "GAME":
        case "EAME":
        case "NAME":
        case "MAME":
            return renameCaosNamedVariable(
                workspaceUri,
                document.documentUri,
                positionData,
                command.toLowerCase() as NamedVarPrefix,
                newText
            );
        case "READ":
        case "REAQ":
        case "REAN":
            return renameCatalogueTagInCaos(
                workspaceUri,
                document.documentUri,
                positionData,
                newText
            );
        default:
            return null;
    }
}

export function renameCatalogueTagInCaos(
    workspaceUri: DocumentUri,
    documentUri: DocumentUri,
    positionData: CommandCallPositionalData,
    newTag: string
): Nullable<WorkspaceEdit> {
    
    if (positionData.argumentIndex !== 0) {
        return null;
    }
    
    const closestItem = positionData.closestItem;
    if (closestItem == null) {
        return null;
    }
    
    if (!Is.c2eStringVal(closestItem)) {
        return null;
    }
    
    const oldTag = closestItem.value;
    
    let out = renameCatalogueInCatalogueAndCaosFiles(
        workspaceUri,
        oldTag,
        newTag
    ) ?? {changes: {}};
    
    
    if (out.changes == null) {
        out.changes = {};
    }
    
    
    if (isVsCode()) {
        if (typeof out.changes[documentUri] !== "undefined") {
            const thisItemRenameRange = offsetRenameRange(closestItem.textRange)
            out.changes[documentUri] = out.changes[documentUri].filter(it => !rangesIntersect(thisItemRenameRange, it.range));
        }
    } else if (typeof out.changes[documentUri] === "undefined") {
        // If not VSCode, add this entry to the list for changes
        const thisEdit = {
            range: offsetRenameRange(closestItem.textRange),
            newText: "\"" + newTag + "\"",
        } satisfies TextEdit
        
        pushInto(
            out.changes,
            documentUri,
            thisEdit,
            (loc: TextEdit) => loc != null
        );
    }
    
    return out;
}


export function renameCaosNamedVariable(
    workspaceUri: DocumentUri,
    documentUri: DocumentUri,
    positionData: CommandCallPositionalData,
    prefix: NamedVarPrefix,
    newText: string
): Nullable<WorkspaceEdit> {
    
    if (positionData.argumentIndex !== 0) {
        return null;
    }
    
    const closestItem = positionData.closestItem;
    if (closestItem == null) {
        return null;
    }
    
    if (!Is.c2eStringVal(closestItem)) {
        return null;
    }
    
    const oldText = closestItem.value;
    
    const locations = getNamedVariableLocationsForType(
        workspaceUri,
        prefix,
        oldText
    );
    
    const out = getWorkspaceEdits(locations, "\"" + newText + "\"") ?? { changes: {}};
    
    
    if (out.changes == null) {
        out.changes = {};
    }
    
    const thisItemRenameRange = offsetRenameRange(closestItem.textRange)
    
    if (isVsCode()) {
        if (typeof out.changes[documentUri] !== "undefined") {
            out.changes[documentUri] = out.changes[documentUri].filter(it => !rangesIntersect(thisItemRenameRange, it.range));
        }
    } else if (typeof out.changes[documentUri] === "undefined") {
        const thisEdit = {
            range: thisItemRenameRange,
            newText: "\"" + newText + "\"",
        } satisfies TextEdit
        
        pushInto(
            out.changes,
            documentUri,
            thisEdit,
            (loc: TextEdit) => loc != null
        );
    }
    
    return out;
}

