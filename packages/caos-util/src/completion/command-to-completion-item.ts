import {ICaosCommand, ICaosParameter, libs} from "../caos-util";
import {CompletionItem, CompletionItemKind, InsertTextFormat, InsertTextMode} from "vscode-languageserver-types";
import {Nullable, repack} from "@bedalton/extension-util";
import {tok} from "../constants";
const getValueTypeName = libs.getValueTypeName;

/**
 * Takes a command, and creates a completion item for it
 * This completion item has no range or position information, so client will decide what to replace
 * @param command
 * @param sortPrefix
 */
export function commandToCompletionItem(command: ICaosCommand, sortPrefix: Nullable<string> = null): CompletionItem {
    const commandLower = command.command.toLowerCase();
    let args = "";
    const parameters = command.parameters.sort((a, b) => a.index - b.index);
    const parametersLength = parameters.length
    for (let i = 0; i < parametersLength; i++) {
        args += ' \${' + (i + 1) + ':' + formatParameterSnippet(parameters[i]) + '}'
    }
    let replacementText = commandLower;
    let preselect = false;
    if (sortPrefix == null || sortPrefix.length < 2) {
        sortPrefix = (1000 << 16) + '_';
    }
    let type = command.returnTypeName;
    if (!type.startsWith('[')) {
        type = '(' + type + ')';
    }
    return <CompletionItem>{
        label: command.command,
        kind: CompletionItemKind.Function,
        insertText: replacementText + args,
        insertTextFormat: args.length > 0 ? InsertTextFormat.Snippet : InsertTextFormat.PlainText,
        insertTextMode: InsertTextMode.asIs,
        documentation: command.description ?? undefined,
        filterText: command.command.toLowerCase(),
        detail: type,
        preselect: preselect,
        sortText: 'x_' + sortPrefix + replacementText,
        data: {...repack(command), firstToken: <number>tok(command.command.substring(0, 4))}
    }
}


// noinspection JSUnusedLocalSymbols
/**
 * Formats a parameter to be a completion placeholder
 * Placeholders have a name and a text to go with them
 * TODO: Parameter name is duplicated when parameter name inline hints are visible
 * @param parameter
 */
function formatParameterSnippet(parameter: ICaosParameter): string {
    const name = parameter.name.toLowerCase();
    const type = getValueTypeName(parameter.typeId);
    if (type == null || type.length < 1) {
        return name;
    }
    if (name == type || name == "value") {
        return type;
    }
    return name + ":" + type
}