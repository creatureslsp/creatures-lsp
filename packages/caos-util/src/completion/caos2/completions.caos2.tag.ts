import {CompletionItem, CompletionItemKind, Range} from "vscode-languageserver-types";
import {GameVariant, ParserItem} from "../../caos-util";
import {getC1TagCompletions, getC2TagCompletions} from "./completions.caos2cob.tags";
import {getC3DSTagCompletions} from "../../caos2/caos2pray-definitions";
import {createSimpleCompletionItem} from "../completions.create";
import Caos2Comment = ParserItem.Caos2Comment;


export function getCaos2TagCompletions(variant: GameVariant, allComments: Caos2Comment[], hasEQ: boolean, range: Range): CompletionItem[] {
    const tagsSoFar = allComments
        .map(c => c.tag?.trim())
        .filter(c => c != null) as string[];
    let out: string[];
    if (variant == "C1") {
        out = getC1TagCompletions(tagsSoFar);
    } else if (variant == "C2") {
        out = getC2TagCompletions(tagsSoFar);
    } else {
        out = getC3DSTagCompletions(tagsSoFar);
    }
    const suffix = hasEQ ? null : " = ";
    return out.map(c => createSimpleCompletionItem(c, range, CompletionItemKind.Field, suffix));
}
