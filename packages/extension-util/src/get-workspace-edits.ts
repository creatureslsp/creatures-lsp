import type {DocumentUri, Range, TextEdit, WorkspaceEdit} from "vscode-languageserver";
import type {IndexedItemLocation} from "./types.js";
import {isVsCode} from "./lsp-runner.js";
import {rangesIntersect, toVsRange} from "./position-utils.js";
import {pushInto} from "./array-util.js";

export function getWorkspaceEdits(locations: IndexedItemLocation[], newText: string): WorkspaceEdit {
    const changes: { [document: DocumentUri]: TextEdit[] } = {};
    
    for (const location of locations) {
        const range = offsetRenameRange(location.range);
        const edit = {
            newText: newText,
            range: range,
        } satisfies TextEdit;
        
        pushInto(
            changes,
            location.documentUri,
            edit,
            otherEdit => rangesIntersect(range, otherEdit.range)
        );
    }
    
    return {
        changes: changes
    } satisfies WorkspaceEdit
}


export function offsetRenameRange(range: Range): Range {
    return isVsCode()
        ? toVsRange(range, true, 0)
        : toVsRange(range, true);
}