import {CaosValuesList} from "@bedalton/caos-util";
import * as vscode from "vscode";
import {Range} from "vscode-languageserver";

export function registerGenerateBitflagsCompletionCommand() {
    vscode.commands.registerCommand("caos.generateBitflagValue", generate);
}


async function generate(valuesList: CaosValuesList, range: Range) {
    let maxKeyLength = 0;
    
    for (const item of valuesList.values) {
        const length = (""+item.value).length
        if (length > maxKeyLength) {
            maxKeyLength = length;
        }
    }
    
    const items = valuesList.values.map(item => {
        return item.value.padStart(maxKeyLength, " ") + " = " + item.name;
    });
    
    const values = await vscode.window.showQuickPick(
        items,
        {
            title: valuesList.name + " Bitflag Select",
            canPickMany: true,
        }
    )
    
    if (values == undefined) {
        return;
    }
    let value = 0;
    for (const item of values) {
        const stringValue = item.split("=", 2)[0].trim();
        try {
            const numericValue = parseInt(stringValue, 10);
            value |= numericValue;
        } catch {
            vscode.window.showErrorMessage("Malformed bitflag numeric value");
            return
        }
    }
    
    const activeEditor = vscode.window.activeTextEditor;
    if (!activeEditor) {
        return;
    }
    
    const vsRange = new vscode.Range(
        range.start.line,
        range.start.character,
        range.end.line,
        range.end.character
    );
    
    activeEditor.edit(builder => {
        builder.replace(vsRange, ""+value);
    });
}