import { parseCaos } from "@creatureslsp/caos/parser";
import { collectFileRenameEditsForCommand } from "../rename/rename-file.caos.command.js";
import { collectFileRenameEditsForCaos2Comments } from "../rename/rename-file.caos.caos2comments.js";
export function renameFileReferencesInCaosDocument(document, oldFileNameData, newFileNameData, edits) {
    if (!isSimilarFileType(oldFileNameData, newFileNameData)) {
        return null;
    }
    const { variant, documentUri, text } = document;
    const parseResult = parseCaos(document.variant, document.text);
    collectFileArgumentRenamesInCommandCalls(documentUri, variant, oldFileNameData, newFileNameData, parseResult.commandCalls, edits);
    collectFileRenameEditsForCaos2Comments(documentUri, variant, oldFileNameData, newFileNameData, parseResult.caos2Comments, edits);
    return {
        changes: edits,
    };
}
function collectFileArgumentRenamesInCommandCalls(documentUri, variant, oldFileNameData, newFileNameData, commandCalls, edits) {
    for (const call of commandCalls) {
        collectFileRenameEditsForCommand(documentUri, variant, oldFileNameData, newFileNameData, call, edits);
    }
}
function isSimilarFileType(oldFileNameData, newFileNameData) {
    const oldExtensionUppercase = oldFileNameData.extension?.toUpperCase() ?? "";
    const newExtensionUppercase = newFileNameData.extension?.toUpperCase() ?? "";
    if (oldExtensionUppercase === newExtensionUppercase) {
        return true;
    }
    if (oldExtensionUppercase === "C16" && newExtensionUppercase === "S16") {
        return true;
    }
    return oldExtensionUppercase === "S16" && newExtensionUppercase === "C16";
}
