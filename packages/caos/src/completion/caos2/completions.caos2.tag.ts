import {CompletionItem, CompletionItemKind, Range} from "vscode-languageserver-types";
import type {GameVariant} from "@creatures-lsp/caos-kt";
import type {Caos2Comment} from "@creatures-lsp/caos-kt/caos-core";
import {getC1TagCompletions, getC2TagCompletions} from "./completions.caos2cob.tags.js";
import {getC3DSTagCompletions} from "../../caos2/caos2pray-definitions.js";
import {createSimpleCompletionItem} from "../completions.create.js";


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
