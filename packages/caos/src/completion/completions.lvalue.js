import { VARIABLE_TYPE_ID } from "../constants.js";
import { COMMAND_TYPE__LVALUE } from "../completions.js";
import { getIndexedVariableCompletions } from "./completions.indexedVariables.js";
import { getCommandCompletionsForCommandType } from "./completion.command.js";
/**
 * Gets lvalue completions for a given variant
 * @param variant
 * @param completionSettings
 * @param commands
 * @param position
 */
export function getLvalueCompletions(variant, commands, position, completionSettings) {
    let commandCompletions = getCommandCompletionsForCommandType(variant, commands, COMMAND_TYPE__LVALUE, position, [], VARIABLE_TYPE_ID, completionSettings);
    const variableCompletions = getIndexedVariableCompletions(variant, commands.rvalues);
    return [...commandCompletions, ...variableCompletions];
}
