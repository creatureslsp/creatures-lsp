import { getCaosDocumentSettings, getGlobalCaosSettings } from "./settings.js";
import { getCompletionItems as getCaosCompletionItems, } from "@creatureslsp/caos";
import { createEmptyCompletionList, getCatalogueNameCompletions, getJournalNameCompletions, getNamedVariableCompletionItems } from "@creatureslsp/caos";
import * as path from "path";
import { getFiles } from "../files.js";
import { initWorkspaceIndices } from "../indices/index.workspace.js";
import { getWorkspaceUriForFile } from "../workspace-folders.js";
import { INFLECT_SPLITTER, isSublime, trimLeadingSlashOnFileScheme } from "@creatureslsp/extension-util";
import { getNamedVariableKeysForType } from "../indices/index.caos.named-variables.js";
import { getJournalFileNames } from "../indices/index.caos.journal-files.js";
import { getCatalogueKeys } from "../indices/index.catalogue.entries.js";
import { clientCapabilities } from "../client-capabilities.js";
import { Log } from "../ConnLogger.js";
// The current attempt id for completion item requests
const completionAttempts = {};
export async function getCaosCompletionItemsForDocument(documentUri, text, position) {
    const thisFileName = documentUri.split(/[/\\]+/)
        .pop();
    const currentAttempt = completionAttempts.hasOwnProperty(documentUri) ? completionAttempts[documentUri] + 1 : 1;
    completionAttempts[documentUri] = currentAttempt;
    const keepGoing = () => {
        return completionAttempts[documentUri] <= currentAttempt;
    };
    // Ensure there is enough text
    if (text == null) {
        Log.e("Cannot get caos completion with null text for: " + documentUri);
        return createEmptyCompletionList();
    }
    let settings = await (getCaosDocumentSettings(documentUri)
        .catch(e => {
        Log.e(`Failed to get document settings in caos.completions; ${e}`);
        return getGlobalCaosSettings();
    }));
    const variant = settings.variant ?? 'DS';
    const completionSettings = {
        parameterInlayHints: settings.disabledInlayHints.indexOf('inlayHints.parameterHints.showParameterHints') < 0,
        usePlaceholders: settings.usePlaceholders ?? true,
        dumbMode: settings.dumbMode ?? false,
        minimumParameterCount: settings.minimumParameterCount ?? 2,
        useInsertReplace: clientCapabilities.useInsertReplace,
    };
    const workspaceUri = trimLeadingSlashOnFileScheme(getWorkspaceUriForFile(documentUri));
    await initWorkspaceIndices(workspaceUri);
    const getStringCompletionsInWorkspace = (cursorData, commandCall) => {
        const commandStringUpper = cursorData.command?.command?.toUpperCase();
        if (commandStringUpper == null) {
            return [];
        }
        const parameterIndex = cursorData.closestParameter?.index ?? 0;
        return _getStringCompletions(workspaceUri, variant, commandCall, parameterIndex, false);
    };
    const options = {
        parseNear: true,
        keepGoing: keepGoing,
        incomplete: true,
        getStringCompletions: getStringCompletionsInWorkspace,
        directory: path.dirname(trimLeadingSlashOnFileScheme(documentUri)),
        getFiles: (extensions) => getFiles(workspaceUri, extensions),
    };
    const cursorPointer = {
        cursor: null
    };
    const result = await getCaosCompletionItems(thisFileName, variant, text, position, options, completionSettings, cursorPointer);
    const currentText = cursorPointer?.cursor?.closestItem?.value != null ? ("" + cursorPointer?.cursor?.closestItem?.value) : "";
    const items = isSublime() ? formatForSublime(currentText, result.items) : stripInflectionSplitter(result.items);
    return {
        isIncomplete: result.isIncomplete,
        items: isSublime() ? formatForSublime(currentText, items) : stripInflectionSplitter(items)
    };
}
function stripInflectionSplitter(items) {
    return items.map(item => {
        return {
            ...item,
            filterText: item.filterText?.replace(INFLECT_SPLITTER, " ")
        };
    });
}
function formatForSublime(text, items) {
    return items
        .map(item => {
        return {
            ...item,
            filterText: item
                .filterText
                ?.split(INFLECT_SPLITTER)
                ?.shift() ?? item.label
        };
    });
}
function _getStringCompletions(workspaceUri, variant, commandCall, parameterIndex, definedOnly = false) {
    let items = getNamedVariableCompletionItems(variant, commandCall, parameterIndex, (prefix) => getNamedVariableKeysForType(workspaceUri, prefix, definedOnly));
    if (items) {
        return items;
    }
    items = getJournalNameCompletions(variant, commandCall, parameterIndex, (directoryType) => getJournalFileNames(workspaceUri, directoryType));
    if (items) {
        return items;
    }
    items = getCatalogueNameCompletions(variant, commandCall, parameterIndex, () => getCatalogueKeys(workspaceUri));
    if (items) {
        return items;
    }
    return [];
}
