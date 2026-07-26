import { CompletionItemKind } from "vscode-languageserver-types";
import { filterByExtension, relative, trimFileSchemePrefix } from "@creatureslsp/extension-util";
import { createQuotedCompletionItem } from "./completions.create.js";
/**
 * Get CAOS2Pray filename completions
 * @param directory directory of CAOS2Pray file
 * @param filesInProject all files in project
 * @param extensions extensions filter
 * @param range replacement range for completion
 */
export function getFilenameCompletions(directory, filesInProject, extensions, range) {
    directory = trimFileSchemePrefix(directory);
    const completionPaths = getFilenameCompletionPaths(directory, filesInProject, extensions);
    return completionPaths
        .map(file => createQuotedCompletionItem(file, range, CompletionItemKind.Value));
}
export function getFilenameCompletionPaths(directory, filesInProject, extensions) {
    directory = trimFileSchemePrefix(directory);
    const filesFilteredByExtension = filterByExtension(filesInProject, extensions);
    // Compute relative paths
    return filesFilteredByExtension
        .map(file => {
        try {
            return relative(directory, file);
        }
        catch {
            return null;
        }
    })
        .filter(p => p != null && p.length > 0);
}
