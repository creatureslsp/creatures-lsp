import {CaosDocument} from "./caos.document.js";
import {DocumentUri, WorkspaceEdit} from "vscode-languageserver";
import {GameVariant} from "@creatures-lsp/caos";
import {type CommandCall, parseCaos} from "@creatures-lsp/caos/parser";
import {FileNameData, WorkspaceChanges} from "@creatures-lsp/extension-util";
import {collectFileRenameEditsForCommand} from "../rename/rename-file.caos.command.js";
import {collectFileRenameEditsForCaos2Comments} from "../rename/rename-file.caos.caos2comments.js";

export function renameFileReferencesInCaosDocument(
    document: CaosDocument,
    oldFileNameData: FileNameData,
    newFileNameData: FileNameData,
    edits: WorkspaceChanges,
): WorkspaceEdit | null {
    
    if (!isSimilarFileType(oldFileNameData, newFileNameData)) {
        return null;
    }
    
    const {variant, documentUri, text} = document;
    const parseResult = parseCaos(document.variant, document.text)
    
    collectFileArgumentRenamesInCommandCalls(
        documentUri,
        variant,
        oldFileNameData,
        newFileNameData,
        parseResult.commandCalls,
        edits,
    )
    
    collectFileRenameEditsForCaos2Comments(
        documentUri,
        variant,
        oldFileNameData,
        newFileNameData,
        parseResult.caos2Comments,
        edits
    )
    
    return {
        changes: edits,
    } satisfies WorkspaceEdit;
}

function collectFileArgumentRenamesInCommandCalls(
    documentUri: DocumentUri,
    variant: GameVariant,
    oldFileNameData: FileNameData,
    newFileNameData: FileNameData,
    commandCalls: CommandCall[],
    edits: WorkspaceChanges
) {
    for (const call of commandCalls) {
        collectFileRenameEditsForCommand(
            documentUri,
            variant,
            oldFileNameData,
            newFileNameData,
            call,
            edits
        );
    }
}


function isSimilarFileType(
    oldFileNameData: FileNameData,
    newFileNameData: FileNameData,
) {
    const oldExtensionUppercase = oldFileNameData.extension?.toUpperCase() ?? "";
    
    const newExtensionUppercase = newFileNameData.extension?.toUpperCase() ?? "";
    
    if (oldExtensionUppercase === newExtensionUppercase) {
        return true;
    }
    if (oldExtensionUppercase === "C16" && newExtensionUppercase === "S16") {
        return true
    }
    
    return oldExtensionUppercase === "S16" && newExtensionUppercase === "C16";
    
}

