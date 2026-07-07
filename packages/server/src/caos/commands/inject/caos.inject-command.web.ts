import {connection} from "../../../connection.vscode.js";
import type {JectResult} from "@creatures-lsp/caos-util";
import {type GameVariant} from "@creatures-lsp/caos-util";
import {ExecuteCommandParams} from "vscode-languageserver-protocol";

export function isCaosInjectSupportedForVariant(variant: GameVariant): boolean {
    return false;
}

export async function caosInjectCommand(params: ExecuteCommandParams): Promise<JectResult | false> {
    connection.window.showErrorMessage("Cannot inject CAOS on web target");
    return false;
}