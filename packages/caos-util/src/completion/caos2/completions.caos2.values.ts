import type {GameVariant} from "@creatures-lsp/caos-kt";
import {CaosParserItem, Caos2Comment} from "@creatures-lsp/caos-kt/caos-core";
import {CaosCompletionOptions} from "../../completions.js";
import {CompletionItem, CompletionItemKind} from "vscode-languageserver-types";
import {inRange} from "@creatures-lsp/extension-util";
import {getC1TagValueCompletions, getC2TagValueCompletions} from "./completions.caos2cob.js";
import {getC3DSTagValueCompletions} from "./completions.caos2pray.values.js";
import {createQuotedCompletionItem} from "../completions.create.js";

export async function getCaos2TagValueCompletions(
    thisFileName: string,
    variant: GameVariant,
    comment: Caos2Comment,
    allComments: Caos2Comment[],
    line: number,
    character: number,
    options: CaosCompletionOptions
): Promise<CompletionItem[]> {
    let range = comment
            .values
            .find((v: CaosParserItem) => inRange(v.textRange, line, character, false, true))
            ?.textRange
        ?? {
            start: {line, character: character},
            end: {line, character}
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
    let completions: string[];
    const tag = comment.eq == null || comment.values.length == 0 ? (comment.tag ?? comment.command) : comment.tag;
    const command = comment.eq == null || comment.values.length == 0 ? (comment.command ?? comment.tag) : comment.command;
    if (variant === "C1") {
        completions = await getC1TagValueCompletions(thisFileName, tag, command, options.directory, options.getFiles);
    } else if (variant === "C2") {
        completions = await getC2TagValueCompletions(thisFileName, tag, command, options.directory, options.getFiles);
    } else {
        completions = await getC3DSTagValueCompletions(
            thisFileName,
            tag,
            command,
            options.directory,
            allComments.filter(c => c.command),
            options.getFiles
        );
    }
    
    return completions
        .map(item => createQuotedCompletionItem(item, range, CompletionItemKind.Value));
}