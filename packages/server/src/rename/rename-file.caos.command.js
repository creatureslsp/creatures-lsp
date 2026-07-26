import { caosCommandDefinitionFromCommandCall } from "@creatureslsp/caos/parser";
import { Is } from "@creatureslsp/caos";
import { isFileParameterWithExtension } from "./rename-file.caos.util.js";
import { getRenameFileParameterEdit } from "./rename-file.caos.parameter.js";
export function collectFileRenameEditsForCommand(documentUri, variant, oldFileNameData, newFileNameData, commandCall, edits) {
    const args = commandCall.arguments;
    const parameters = caosCommandDefinitionFromCommandCall(variant, commandCall)?.parameters;
    if (parameters == null) {
        return;
    }
    const argsCount = Math.min(args.length, parameters.length);
    for (let i = 0; i < argsCount; i++) {
        const parameter = parameters[i];
        const argument = args[i];
        renameArg(documentUri, variant, oldFileNameData, newFileNameData, parameter, argument, edits);
    }
}
function renameArg(documentUri, variant, oldFileNameData, newFileNameData, parameter, argument, edits) {
    if (Is.commandCall(argument)) {
        collectFileRenameEditsForCommand(documentUri, variant, oldFileNameData, newFileNameData, argument, edits);
        return;
    }
    if (isFileParameterWithExtension(parameter, oldFileNameData.extension?.toUpperCase())) {
        const edit = getRenameFileParameterEdit(variant, parameter, argument, oldFileNameData, newFileNameData);
        if (edit != null) {
            if (typeof edits[documentUri] === "undefined") {
                edits[documentUri] = [edit];
            }
            else {
                edits[documentUri].push(edit);
            }
        }
    }
}
