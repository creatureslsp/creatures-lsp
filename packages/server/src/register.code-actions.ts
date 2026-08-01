import {caosCodeActionHandler} from "./caos/caos.code-actions.js";
import {catalogueCodeActionHandler} from "./catalogue/catalogue.code-actions.js";
import type {ServerRequestHandler} from "vscode-languageserver/lib/common/server.js";
import type {CodeAction, CodeActionParams, Command} from "vscode-languageserver-protocol";
import {connection} from "./connection.vscode.js";
import {Log} from "./ConnLogger.js";
type Action = Command | CodeAction;

type Handler = (params: CodeActionParams) => Promise<Action[]>;
let handlers: Handler[] = [];


export function registerCodeActions(register: boolean) {
    if (register) {
        handlers.push(caosCodeActionHandler, catalogueCodeActionHandler)
        if (register) {
            connection.onCodeAction(codeActionHandler);
        }
    }
}

const codeActionHandler: ServerRequestHandler<CodeActionParams, Action[] | undefined | null, Action[], void> = async (params: CodeActionParams) => {
    const out: Action[] = []
    for (const handler of handlers) {
        try {
            const actions = await handler(params);
            out.push(...actions);
        } catch (e) {
            const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
            Log.e(`Failed to get code actions; ${error}`);
        }
    }
    return out;
}