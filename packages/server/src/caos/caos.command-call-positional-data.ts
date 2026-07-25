import {CaosDocument} from "./caos.document.js";
import {Position} from "vscode-languageserver";
import {Nullable} from "@creatures-lsp/extension-util";
import {
    getCommandCallPositionalDataFromParseResult
} from "@creatures-lsp/caos";
import {
    parseCaosNear,
} from "@creatures-lsp/caos/parser";
import type {
    CommandCallPositionalData,
} from "@creatures-lsp/caos";

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