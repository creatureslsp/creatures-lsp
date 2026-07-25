import type {Nullable} from "@creatures-lsp/extension-util";
import type {GameVariant} from "@creatures-lsp/caos-kt";
import type {Commands} from "@creatures-lsp/caos-kt/caos-libs";
import type {CompletionItem, Position} from "vscode-languageserver-types";
import {VARIABLE_TYPE_ID} from "../constants.js";
import {COMMAND_TYPE__LVALUE, type CaosCompletionSettings} from "../completions.js";
import {getIndexedVariableCompletions} from "./completions.indexedVariables.js";
import {getCommandCompletionsForCommandType} from "./completion.command.js";


/**
 * Gets lvalue completions for a given variant
 * @param variant
 * @param completionSettings
 * @param commands
 * @param position
 */
export function getLvalueCompletions(
    variant: GameVariant,
    commands: Commands,
    position: Position,
    completionSettings: Nullable<CaosCompletionSettings>,
): CompletionItem[] {
    let commandCompletions: CompletionItem[] = getCommandCompletionsForCommandType(
        variant,
        commands,
        COMMAND_TYPE__LVALUE,
        position,
        [],
        VARIABLE_TYPE_ID,
        completionSettings,
    )
    const variableCompletions = getIndexedVariableCompletions(variant, commands.rvalues);
    return [...commandCompletions, ...variableCompletions];
}
