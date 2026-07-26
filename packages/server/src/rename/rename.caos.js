import { getCommandCallPositionalDataFromDocument } from "../caos/caos.command-call-positional-data.js";
import { Is } from "@creatureslsp/caos";
import { getNamedVariableLocationsForType } from "../indices/index.caos.named-variables.js";
import { getWorkspaceUriForFile } from "../workspace-folders.js";
import { isVsCode, getWorkspaceEdits, rangesIntersect } from "@creatureslsp/extension-util";
import { renameCatalogueInCatalogueAndCaosFiles } from "./rename.catalogue.js";
import { offsetRenameRange } from "@creatureslsp/extension-util/get-workspace-edits";
import { pushInto } from "@creatureslsp/extension-util/array-util";
export function renameInCaosDocument(document, position, newText) {
    const workspaceUri = getWorkspaceUriForFile(document.documentUri);
    const positionData = getCommandCallPositionalDataFromDocument(document, position);
    if (positionData == null) {
        return null;
    }
    const { commandCall } = positionData;
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
            return renameCaosNamedVariable(workspaceUri, document.documentUri, positionData, command.toLowerCase(), newText);
        case "READ":
        case "REAQ":
        case "REAN":
            return renameCatalogueTagInCaos(workspaceUri, document.documentUri, positionData, newText);
        default:
            return null;
    }
}
export function renameCatalogueTagInCaos(workspaceUri, documentUri, positionData, newTag) {
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
    let out = renameCatalogueInCatalogueAndCaosFiles(workspaceUri, oldTag, newTag) ?? { changes: {} };
    if (out.changes == null) {
        out.changes = {};
    }
    if (isVsCode()) {
        if (typeof out.changes[documentUri] !== "undefined") {
            const thisItemRenameRange = offsetRenameRange(closestItem.textRange);
            out.changes[documentUri] = out.changes[documentUri].filter(it => !rangesIntersect(thisItemRenameRange, it.range));
        }
    }
    else if (typeof out.changes[documentUri] === "undefined") {
        // If not VSCode, add this entry to the list for changes
        const thisEdit = {
            range: offsetRenameRange(closestItem.textRange),
            newText: "\"" + newTag + "\"",
        };
        pushInto(out.changes, documentUri, thisEdit, (loc) => loc != null);
    }
    return out;
}
export function renameCaosNamedVariable(workspaceUri, documentUri, positionData, prefix, newText) {
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
    const locations = getNamedVariableLocationsForType(workspaceUri, prefix, oldText);
    const out = getWorkspaceEdits(locations, "\"" + newText + "\"") ?? { changes: {} };
    if (out.changes == null) {
        out.changes = {};
    }
    const thisItemRenameRange = offsetRenameRange(closestItem.textRange);
    if (isVsCode()) {
        if (typeof out.changes[documentUri] !== "undefined") {
            out.changes[documentUri] = out.changes[documentUri].filter(it => !rangesIntersect(thisItemRenameRange, it.range));
        }
    }
    else if (typeof out.changes[documentUri] === "undefined") {
        const thisEdit = {
            range: thisItemRenameRange,
            newText: "\"" + newText + "\"",
        };
        pushInto(out.changes, documentUri, thisEdit, (loc) => loc != null);
    }
    return out;
}
