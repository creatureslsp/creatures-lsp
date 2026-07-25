import {
    type Argument,
    caosCommandDefinitionFromCommandCall,
    type CommandCall
} from "@creatures-lsp/caos/parser";
import type {CaosParameter} from "@creatures-lsp/caos/libs";
import {type GameVariant, Is} from "@creatures-lsp/caos";
import type {FileNameData, WorkspaceChanges} from "@creatures-lsp/extension-util";
import {isFileParameterWithExtension} from "./rename-file.caos.util.js";
import type {DocumentUri} from "vscode-languageserver";
import {getRenameFileParameterEdit} from "./rename-file.caos.parameter.js";

export function collectFileRenameEditsForCommand(
    documentUri: DocumentUri,
    variant: GameVariant,
    oldFileNameData: FileNameData,
    newFileNameData: FileNameData,
    commandCall: CommandCall,
    edits: WorkspaceChanges,
){
    
    const args = commandCall.arguments;
    const parameters = caosCommandDefinitionFromCommandCall(variant, commandCall)?.parameters;
    if (parameters == null) {
        return;
    }
    const argsCount = Math.min(args.length, parameters.length);
    
    for (let i = 0; i < argsCount; i++) {
        const parameter = parameters[i];
        const argument = args[i];
        renameArg(
            documentUri,
            variant,
            oldFileNameData,
            newFileNameData,
            parameter,
            argument,
            edits
        )
    }
}

function renameArg(
    documentUri: DocumentUri,
    variant: GameVariant,
    oldFileNameData: FileNameData,
    newFileNameData: FileNameData,
    parameter: CaosParameter,
    argument: Argument,
    edits: WorkspaceChanges,
) {
    
    if (Is.commandCall(argument)) {
        collectFileRenameEditsForCommand(
            documentUri,
            variant,
            oldFileNameData,
            newFileNameData,
            argument,
            edits
        )
        return;
    }
    
    if (isFileParameterWithExtension(parameter, oldFileNameData.extension?.toUpperCase())) {
        
        const edit = getRenameFileParameterEdit(
            variant,
            parameter,
            argument,
            oldFileNameData,
            newFileNameData,
        );
        
        if (edit != null) {
            if (typeof edits[documentUri] === "undefined") {
                edits[documentUri] = [edit];
            } else {
                edits[documentUri].push(edit);
            }
        }
    }
}