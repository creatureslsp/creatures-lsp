import { CompletionItemKind } from "vscode-languageserver-types";
import { repack } from "@creatureslsp/extension-util";
const variables = {};
/**
 * Default completion sort priority for variables
 */
const DEFAULT_VAR_PRIORITY = 1001 << 16;
/**
 * Get indexed vars (i.e. va00, obv0, etc.) based on variant
 * @param variant the game variant to add completions for
 * @param commands a list of all commands in the variant lib
 */
export function getIndexedVariableCompletions(variant, commands) {
    if (variables.hasOwnProperty(variant)) {
        return variables[variant];
    }
    const varX = commands.find(c => c.command.toLowerCase() === 'varx');
    const vaXX = commands.find(c => c.command.toLowerCase() === 'vaxx');
    const obvX = commands.find(c => c.command.toLowerCase() === 'obvx');
    const ovXX = commands.find(c => c.command.toLowerCase() === 'ovxx');
    const mvXX = commands.find(c => c.command.toLowerCase() === 'mvxx');
    let vars = [];
    switch (variant) {
        case "C1":
            vars.push(["var", 9, "Event variable", DEFAULT_VAR_PRIORITY, varX]);
            vars.push(['obv', 2, "[TARG] variable", DEFAULT_VAR_PRIORITY, obvX]);
            break;
        case "C2":
            vars.push(['var', 9, "Event variable", DEFAULT_VAR_PRIORITY, varX]);
            vars.push(['obv', 9, "[TARG] variable", DEFAULT_VAR_PRIORITY, obvX]);
            vars.push(['va', 99, "Event variable", DEFAULT_VAR_PRIORITY - 1, vaXX]);
            vars.push(['ov', 99, "[TARG] variable", DEFAULT_VAR_PRIORITY - 1, ovXX]);
            break;
        default:
            vars.push(['va', 99, "Event variable", DEFAULT_VAR_PRIORITY, vaXX]);
            vars.push(['ov', 99, "[TARG] variable", DEFAULT_VAR_PRIORITY, ovXX]);
            vars.push(['mv', 99, "[OWNR] variable", DEFAULT_VAR_PRIORITY, mvXX]);
            break;
    }
    const out = [];
    for (let i = 0; i < vars.length; i++) {
        const [prefix, max, description, priority, command] = vars[i];
        if (command != null) {
            addVariablesOfType(out, command, prefix, max, description, priority);
        }
    }
    return variables[variant] = out;
}
function addVariablesOfType(completions, command, prefix, max, description = undefined, priority) {
    const pad = prefix.length < 3;
    const repackedCommand = repack(command);
    for (let i = 0; i <= max; i++) {
        let number = pad ? (i + "").padStart(2, '0') : i + "";
        const text = prefix + number;
        completions.push({
            label: text,
            kind: CompletionItemKind.Variable,
            insertText: text,
            documentation: description,
            sortText: "x_" + priority + "_" + i + text,
            filterText: text,
            data: {
                ...repackedCommand,
                prefix,
                index: i
            }
        });
    }
}
