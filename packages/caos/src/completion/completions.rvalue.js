import { ANY_TYPE_ID } from "../constants.js";
import { getValuesListCompletions } from "./completions.values-list-values.js";
import { COMMAND_TYPE__RVALUE } from "../completions.js";
import { getIndexedVariableCompletions } from "./completions.indexedVariables.js";
import { getCommandCompletionsForCommandType } from "./completion.command.js";
export function getRvalueCompletions(variant, commands, position, data, settings) {
    if (data == null) {
        return [];
    }
    const parameter = data.closestParameter;
    const parameterType = parameter?.typeId ?? ANY_TYPE_ID;
    const valuesListValuesCompletions = getValuesListCompletions(data, position, false);
    let commandCompletions = getCommandCompletionsForCommandType(variant, commands, COMMAND_TYPE__RVALUE, position, data.previousTokens, parameterType, settings);
    const variableCompletions = data.previousTokens.length == 0 && data.beforeText != null && data.beforeText.length > 0
        ? getIndexedVariableCompletions(variant, commands.rvalues)
        : [];
    return [...valuesListValuesCompletions, ...commandCompletions, ...variableCompletions];
}
