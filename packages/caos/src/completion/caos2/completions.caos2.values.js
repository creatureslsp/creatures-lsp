import { CompletionItemKind } from "vscode-languageserver-types";
import { inRange } from "@creatureslsp/extension-util";
import { getC1TagValueCompletions, getC2TagValueCompletions } from "./completions.caos2cob.js";
import { getC3DSTagValueCompletions } from "./completions.caos2pray.values.js";
import { createQuotedCompletionItem } from "../completions.create.js";
export async function getCaos2TagValueCompletions(thisFileName, variant, comment, allComments, line, character, options) {
    let range = comment
        .values
        .find((v) => inRange(v.textRange, line, character, false, true))
        ?.textRange
        ?? {
            start: { line, character: character },
            end: { line, character }
        };
    range = {
        start: {
            line: range.start.line,
            character: range.start.character + 1
        },
        end: {
            line: range.end.line,
            character: range.end.character
        },
    };
    let completions;
    const tag = comment.eq == null || comment.values.length == 0 ? (comment.tag ?? comment.command) : comment.tag;
    const command = comment.eq == null || comment.values.length == 0 ? (comment.command ?? comment.tag) : comment.command;
    if (variant === "C1") {
        completions = await getC1TagValueCompletions(thisFileName, tag, command, options.directory, options.getFiles);
    }
    else if (variant === "C2") {
        completions = await getC2TagValueCompletions(thisFileName, tag, command, options.directory, options.getFiles);
    }
    else {
        completions = await getC3DSTagValueCompletions(thisFileName, tag, command, options.directory, allComments.filter(c => c.command), options.getFiles);
    }
    return completions
        .map(item => createQuotedCompletionItem(item, range, CompletionItemKind.Value));
}
