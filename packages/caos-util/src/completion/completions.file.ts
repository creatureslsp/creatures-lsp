import {CompletionItem, CompletionItemKind, Range} from "vscode-languageserver-types";
import * as path from "path";
import {filterByExtension, Nullable} from "@bedalton/extension-util";
import {createQuotedCompletionItem} from "./completions.create";

/**
 * Get CAOS2Pray filename completions
 * @param directory directory of CAOS2Pray file
 * @param filesInProject all files in project
 * @param extensions extensions filter
 * @param range replacement range for completion
 */
export function getFilenameCompletions(
    directory: string,
    filesInProject: string[],
    extensions: Nullable<string[]>,
    range: Range,
): CompletionItem[] {
    const completionPaths = getFilenameCompletionPaths(directory, filesInProject, extensions);
    return completionPaths
        .map(p => createQuotedCompletionItem(p, range, CompletionItemKind.Value));
}

export function getFilenameCompletionPaths(
    directory: string,
    filesInProject: string[],
    extensions?: Nullable<string[]>
): string[] {
    const filesFilteredByExtension = filterByExtension(filesInProject, extensions);
    // Compute relative paths
    return filesFilteredByExtension
        .map(p => path.relative(directory, p))
        .filter(p => p && p.length > 0);
}