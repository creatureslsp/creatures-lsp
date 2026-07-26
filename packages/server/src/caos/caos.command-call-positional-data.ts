import {CaosDocument} from "./caos.document.js";
import {Position} from "vscode-languageserver";
import {Nullable} from "@creatureslsp/extension-util";
import {
    getCommandCallPositionalDataFromParseResult
} from "@creatureslsp/caos";
import {
    parseCaosNear,
} from "@creatureslsp/caos/parser";
import type {
    CommandCallPositionalData,
} from "@creatureslsp/caos";

export function getCommandCallPositionalDataFromDocument(
    document: CaosDocument,
    position: Position
): Nullable<CommandCallPositionalData> {
    const {text, variant} = document;
    
    const {line, character} = position;
    
    const parseResult = parseCaosNear(variant, text, line, character, false);
    
    return getCommandCallPositionalDataFromParseResult(
        parseResult,
        position
    )
}