import {Nullable} from "@bedalton/extension-util";
import {Commands, CursorData, GameVariant} from "../caos-util";
import {CompletionItem, Position} from "vscode-languageserver-types";
import {ANY_TYPE_ID} from "../constants";
import {getValuesListCompletions} from "./completions.values-list-values";
import {COMMAND_TYPE__RVALUE, CompletionSettings} from "../completions";
import {getIndexedVariableCompletions} from "./completions.indexedVariables";
import {getCommandCompletionsForCommandType} from "./completion.command";

export function getRvalueCompletions(
    variant: GameVariant,
    commands: Commands,
    position: Position,
    data: CursorData,
    settings: Nullable<CompletionSettings>,
): CompletionItem[] {
    if (data == null) {
        return [];
    }
    const parameter = data.closestParameter
    const parameterType = parameter?.typeId ?? ANY_TYPE_ID;
    
    const valuesListValuesCompletions = getValuesListCompletions(data, position, false);
    
    let commandCompletions: CompletionItem[] = getCommandCompletionsForCommandType(
        variant,
        commands,
        COMMAND_TYPE__RVALUE,
        position,
        data.previousTokens,
        parameterType,
        settings,
    );
    const variableCompletions = data.previousTokens.length == 0 && data.beforeText != null && data.beforeText.length > 0
        ? getIndexedVariableCompletions(variant, commands.rvalues)
        : [];
    return [...valuesListValuesCompletions, ...commandCompletions, ...variableCompletions];
}
