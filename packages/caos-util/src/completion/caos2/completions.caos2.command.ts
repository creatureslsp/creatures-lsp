import {GameVariant, ParserItem} from "../../caos-util";
import {CompletionItem, CompletionItemKind, Range} from "vscode-languageserver-types";
import {createSimpleCompletionItem} from "../completions.create";
// noinspection DuplicatedCode
import Caos2Comment = ParserItem.Caos2Comment;

export function getCaos2CommandCompletions(variant: GameVariant, allComments: Caos2Comment[], token: string, range: Range): CompletionItem[] {
    const commandsSoFar = allComments
        .filter(c => c.command != null)
        .map(c => c.command!);
    let out: string[];
    if (variant === "C1") {
        out = getC1CommandCompletions(commandsSoFar, token);
    } else if (variant == "C2") {
        out = getC2CommandCompletions(commandsSoFar, token);
    } else {
        out = getC3DSCommandCompletions(commandsSoFar, token);
    }
    return out.map(c => createSimpleCompletionItem(c, range, CompletionItemKind.Method));
}

function getC1CommandCompletions(commandsSoFar: string[], token: string): string[] {
    
    const commandsSoFarLower = commandsSoFar.map(c => c.toLowerCase());
    const out: string[] = [];
    if (commandsSoFarLower.indexOf("cob-file") < 0) {
        out.push("Cob-File");
    }
    if (commandsSoFarLower.indexOf("c1-name") < 0) {
        out.push("C1-Name");
    }
    const lowercase = token ? token[0] >= 'a' && token[0] <= 'z' : false;
    if (lowercase) {
        out.push("link");
    } else {
        out.push("Link");
    }
    return out;
}

function getC2CommandCompletions(commandsSoFar: string[], token: string): string[] {
    const commandsSoFarLower = commandsSoFar.map(c => c.toLowerCase());
    const out = [];
    if (commandsSoFarLower.indexOf("cob-file") < 0) {
        out.push("Cob-File");
    }
    if (commandsSoFarLower.indexOf("c2-name") < 0) {
        out.push("C2-Name");
    }
    const lowercase = token ? token[0] >= 'a' && token[0] <= 'z' : false;
    let fileCommands = [
        "Attach",
        "Depends",
        "Inline",
        "Link",
    ];
    if (lowercase) {
        fileCommands = fileCommands.map(c => c.toLowerCase());
    }
    return [...out, ...fileCommands];
}

function getC3DSCommandCompletions(commandsSoFar: string[], token: string): string[] {
    const commandsSoFarLower = commandsSoFar.map(c => c.toLowerCase());
    const lowercase = token && token.trim() ? token.trim()[0] >= 'a' && token.trim()[0] <= 'z' : false;
    const out: string[] = [];
    if (commandsSoFarLower.indexOf("pray-file") < 0) {
        out.push("Pray-File");
    }
    if (commandsSoFarLower.indexOf("c3-name") < 0 && commandsSoFarLower.indexOf("agnt-name") < 0) {
        out.push("C3-Name", "AGNT-Name");
    }
    if (commandsSoFarLower.indexOf("dsag-name") < 0 && commandsSoFarLower.indexOf("dsag-name") < 0) {
        out.push("DS-Name", "DSAG-Name")
    }
    let fileCommands = [
        "Attach",
        "Depends",
        "Inline",
        "Link",
        "Join"
    ];
    if (lowercase) {
        fileCommands = fileCommands.map(c => c.toLowerCase());
    }
    return [...out, ...fileCommands];
}