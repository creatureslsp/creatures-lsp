import {CaosDocument} from "./caos.document.js";
import {Position} from "vscode-languageserver";
import {Nullable} from "@creatures-lsp/extension-util";
import {
    getCommandCallPositionalDataFromParseResult
} from "@creatures-lsp/caos-util";
import {
    parseCaosNear,
} from "@creatures-lsp/caos-kt/caos-parser";
import type {
    CommandCallPositionalData,
} from "@creatures-lsp/caos-util";

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