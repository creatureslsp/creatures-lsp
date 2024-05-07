import {GameVariant, IParserItem, ParserItem} from "../../caos-util";
import {CompletionOptions} from "../../completions";
import {CompletionItem, CompletionItemKind} from "vscode-languageserver-types";
import {inRange} from "@bedalton/extension-util";
import {getC1TagValueCompletions, getC2TagValueCompletions} from "./completions.caos2cob";
import {getC3DSTagValueCompletions} from "./completions.caos2pray.values";
import {createQuotedCompletionItem} from "../completions.create";
import Caos2Comment = ParserItem.Caos2Comment;

export async function getCaos2TagValueCompletions(
    thisFileName: string,
    variant: GameVariant,
    comment: Caos2Comment,
    allComments: Caos2Comment[],
    line: number,
    character: number,
    options: CompletionOptions
): Promise<CompletionItem[]> {
    const range = comment
            .values
            .find((v: IParserItem<any>) => inRange(v.textRange, line, character, false, true))
            ?.textRange
        ?? {
            start: {line, character},
            end: {line, character}
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