import {Nullable} from "@bedalton/extension-util";
import {Commands, GameVariant} from "../caos-util";
import {CompletionItem, Position} from "vscode-languageserver-types";
import {VARIABLE_TYPE_ID} from "../constants";
import {COMMAND_TYPE__LVALUE, CompletionSettings} from "../completions";
import {getIndexedVariableCompletions} from "./completions.indexedVariables";
import {getCommandCompletionsForCommandType} from "./completion.command";


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
    completionSettings: Nullable<CompletionSettings>,
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
