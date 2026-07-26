import { isVsCode } from "@creatureslsp/extension-util";
import { ANY_TYPE_ID, COMMAND_TYPE_ID, UNKNOWN_TYPE_ID, VARIABLE_TYPE_ID } from "../constants.js";
import { isSimilarType } from "../is-similar.js";
import { COMMAND_TYPE__COMMAND, COMMAND_TYPE__LVALUE, COMMAND_TYPE__RVALUE } from "../completions.js";
import { commandToCompletionItem } from "./command-to-completion-item.js";
import { getLvalueCompletions } from "./completions.lvalue.js";
import { getRvalueCompletions } from "./completions.rvalue.js";
import { tok } from "../token-utils.js";
const dumbModeCompletionItems = {};
export const VAR_TYPES_REGEX = /([Vv][Aa][Rr]|[Oo][Bb][Vv])[xX]|([Vv][Aa]|[OoMm][Vv])[Xx][Xx]/;
const singleTokenCommands = {};
const singleTokenRvalues = {};
const singleTokenLvalues = {};
const multiTokenCommands = {};
const multiTokenRvalues = {};
const multiTokenLvalues = {};
const prefixTokens = {};
/**
 * Gets completions for a parameter which allows prioritizing by type.
 * Falls back to command, if parameter is null
 * @param completionSettings
 * @param variant
 * @param commands
 * @param data
 */
export function getCommandCompletions(completionSettings, variant, commands, data) {
    if (data == null) {
        return [];
    }
    const position = {
        line: data.line,
        character: data.character
    };
    const firstParameter = data.closestParameter;
    // If parameter is null, then this is possibly a command, so complete with command and not r/l values
    if (firstParameter == null && !data.inEqualityStatement) {
        return getCommandCompletionsForCommandType(variant, commands, COMMAND_TYPE__COMMAND, position, data.previousTokens, COMMAND_TYPE_ID, completionSettings);
    }
    // If this parameter requests a variable, safe to assume lvalue
    if (firstParameter?.typeId == VARIABLE_TYPE_ID) {
        return getLvalueCompletions(variant, commands, position, completionSettings);
    }
    // If parameter is not null, and it is not a variable, then it's an rvalue
    return getRvalueCompletions(variant, commands, position, data, completionSettings);
}
/**
 * Gets command completions based on
 * @param variant
 * @param settings
 * @param commands
 * @param commandType
 * @param position
 * @param previousTokens
 * @param returnType
 */
export function getCommandCompletionsForCommandType(variant, commands, commandType, position, previousTokens, returnType, settings) {
    let out = getMultiTokenCommands(variant, commands, commandType, position, previousTokens);
    if (previousTokens.length === 0 || out.length === 0) {
        out = out.concat(getSingleTokenCommands(variant, commands, commandType));
    }
    out = (returnType == ANY_TYPE_ID || returnType == UNKNOWN_TYPE_ID) ? out : out.map(item => {
        const prefix = isSimilarType(item.data?.returnTypeId, returnType) ? 'a_' : 'b_';
        return {
            ...item,
            sortText: prefix + item.sortText
        };
    });
    return postProcessCommandCompletions(out, settings);
}
export function getDumbCompletionItems(variant, commands, completionSettings) {
    if (dumbModeCompletionItems.hasOwnProperty(variant)) {
        return dumbModeCompletionItems[variant];
    }
    const allCommands = [...commands.commands, ...commands.rvalues, ...commands.lvalues];
    const completions = allCommands.map(command => commandToCompletionItem(command));
    dumbModeCompletionItems[variant] = completions;
    return postProcessCommandCompletions(completions, completionSettings);
}
/**
 * Get all prefix tokens for multi-word completion items
 * @param variant
 * @param commands
 * @param commandType
 */
function getMultiTokenPrefixTokens(variant, commands, commandType) {
    if (prefixTokens.hasOwnProperty(variant)) {
        if (prefixTokens[variant].hasOwnProperty(commandType)) {
            return prefixTokens[variant][commandType];
        }
    }
    else {
        prefixTokens[variant] = {};
    }
    const out = [];
    const commandsOfType = getFromCommandType(commandType, commands.commands, commands.rvalues, commands.lvalues);
    const hasSpace = commandsOfType
        .filter(c => c.command.indexOf(' '));
    for (const { command } of hasSpace) {
        const split = command.replace(/\s\s+/, ' ')
            .split(' ');
        out.push(tok(split[0]));
        if (split.length > 0) {
            out.push(tok(split[0]));
        }
    }
    return prefixTokens[variant][commandType] = out;
}
/**
 * Get completions for multi-word commands
 * @param variant
 * @param commands
 * @param commandType
 * @param position
 * @param previousItems
 */
function getMultiTokenCommands(variant, commands, commandType, position, previousItems) {
    // Get the correct command container for this command type
    const commandsContainer = getFromCommandType(commandType, multiTokenCommands, multiTokenRvalues, multiTokenLvalues);
    // Build base completion without range
    if (!commandsContainer.hasOwnProperty(variant)) {
        const commandsOfType = getFromCommandType(commandType, commands.commands, commands.rvalues, commands.lvalues);
        commandsContainer[variant] = commandsOfType
            .filter(({ command }) => command.indexOf(' ') > 0)
            .map(command => commandToCompletionItem(command))
            .filter(c => c != null);
    }
    // Check if there are previous tokens.
    // If not, we do not need to calculate replacement range
    if (previousItems.length < 1) {
        return commandsContainer[variant];
    }
    // Get previous items as tokens
    const previousTokens = previousItems.map(c => tok(c.value.toLowerCase()));
    // Get all tokens prefix tokens from multi-word commands
    const prefixTokens = getMultiTokenPrefixTokens(variant, commands, commandType);
    // Get last index and last token of previous tokens
    const lastIndex = previousTokens.length - 1;
    const lastToken = previousTokens[lastIndex];
    if (prefixTokens.indexOf(lastToken) < 0) {
        return [];
    }
    // Get base text range for replacement
    let startTokenRange = previousItems[lastIndex].textRange;
    // Alter start token for three word commands
    if (variant === 'C1' || variant === 'C2') {
        const ddeIndex = previousTokens.indexOf(tok('dde:'));
        if (ddeIndex >= 0) {
            if (ddeIndex != lastIndex || ddeIndex + 1 == lastIndex) {
                startTokenRange = previousItems[ddeIndex].textRange;
            }
        }
    }
    const startOffset = isVsCode() ? 1 : 0;
    const endOffset = isVsCode() ? 0 : 1;
    // Create the range that will actually be used
    const range = {
        start: {
            line: startTokenRange.start.line,
            character: startTokenRange.start.character + startOffset
        },
        end: {
            line: position.line,
            character: position.character + endOffset
        }
    };
    const token = tok(lastToken).toUpperCase();
    // Map all commands with the replace text TextEdit object
    // This is necessary as VSCode will not replace the previous tokens without this
    return commandsContainer[variant]
        .filter((c) => c.label.indexOf(token) >= 0)
        .map(c => {
        const filterText = c.label.toLowerCase();
        let textEdit = {
            range: range,
            newText: c.insertText ?? c.label
        };
        return {
            ...c,
            insertText: undefined,
            filterText: filterText,
            textEdit
        };
    });
}
/**
 * Get all completion items for single token completions.
 * Items are returned without explicit range
 * @param variant
 * @param commands
 * @param commandType
 */
function getSingleTokenCommands(variant, commands, commandType) {
    // Get commands container (command, rvalue or lvalue)
    const commandsContainer = getFromCommandType(commandType, singleTokenCommands, singleTokenRvalues, singleTokenLvalues);
    // If container already has variant options, return it
    // These only need to be calculated once
    if (commandsContainer.hasOwnProperty(variant)) {
        return commandsContainer[variant];
    }
    // Get commands based on type (command, rvalue or lvalue)
    const commandsOfType = getFromCommandType(commandType, commands.commands, commands.rvalues, commands.lvalues);
    // Generate completion items without range
    const items = commandsOfType
        .filter(({ command }) => {
        // Ensure is not multiword, and is not variable command
        // Variable commands are placeholders and not valid commands
        return command.indexOf(' ') < 0 && !VAR_TYPES_REGEX.test(command);
    })
        .map(command => {
        return commandToCompletionItem(command);
    })
        .filter(c => c != null);
    // Assign and return results
    return commandsContainer[variant] = items;
}
/**
 * Get option based on its command type
 * Can accommodate any kind of item
 * @param commandType
 * @param command
 * @param rvalue
 * @param lvalue
 */
function getFromCommandType(commandType, command, rvalue, lvalue) {
    switch (commandType) {
        case COMMAND_TYPE__COMMAND:
            return command;
        case COMMAND_TYPE__RVALUE:
            return rvalue;
        case COMMAND_TYPE__LVALUE:
            return lvalue;
        default:
            throw new Error("Failed to understand command type: <" + commandType + "> for command type filter action");
    }
}
function postProcessCommandCompletions(raw, settings) {
    const edit = (item, replacement) => {
        return item.textEdit != null ? {
            range: item.textEdit.range,
            newText: replacement,
        } : undefined;
    };
    if (settings?.usePlaceholders !== true) {
        return postProcessPlaceholderCompletions(raw, edit);
    }
    else if (settings.parameterInlayHints === true) {
        return postProcessParameterHintCompletions(raw, edit, settings);
    }
    else {
        return raw.map(item => {
            const out = {
                ...item,
                textEdit: edit(item, item.insertText ?? item?.data?.command?.toLowerCase()) ?? undefined
            };
            delete out['data'];
            return out;
        });
    }
}
function postProcessParameterHintCompletions(raw, edit, settings) {
    const replaceRegex = /\$\{(\d+)\s*:[^:]+?:([{\[]?[^}]+[\])]?)}/;
    const minimumParameterCount = (settings?.minimumParameterCount ?? 2);
    return raw.map(item => {
        let replacement = item.insertText;
        if (replacement != null && replacement.split('$').length > minimumParameterCount) {
            const tokens = replacement.split(' ');
            replacement = '';
            for (const token of tokens) {
                replacement += ' ' + token.replace(replaceRegex, '\${$1:$2}');
            }
            replacement = replacement.trim();
        }
        if (replacement == null) {
            return item;
        }
        const out = {
            ...item,
            insertText: replacement,
            textEdit: edit(item, replacement)
        };
        delete out['data'];
        return out;
    });
}
function postProcessPlaceholderCompletions(raw, edit) {
    return raw.map(item => {
        const replacement = item.data?.command?.toLowerCase() ?? item.insertText;
        const out = {
            ...item,
            insertText: replacement,
            textEdit: edit(item, replacement)
        };
        delete out['data'];
        return out;
    });
}
