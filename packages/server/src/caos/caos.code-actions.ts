import {connection} from "../connection.vscode.js";
import type {CodeAction, CodeActionParams, Command, Diagnostic, WorkspaceEdit} from "vscode-languageserver-protocol";
import type {ServerRequestHandler} from "vscode-languageserver/lib/common/server.js";
import {ErrorTypes} from "@creatures-lsp/caos/core";
import {getDocumentText} from "../documents.js";
import type {Nullable} from "@creatures-lsp/caos";
import {type CaosParseResult, parseCaosNear} from "@creatures-lsp/caos/parser";
import type {GameVariant} from "@creatures-lsp/caos";
import {getCaosDocumentSettings} from "./settings.js";
import type {Position} from "@creatures-lsp/caos/core";
import {CodeActionKind, type TextEdit} from "vscode-languageserver";
import {inRange, toVsRange} from "@creatures-lsp/extension-util";
import type {CommandCall} from "@creatures-lsp/caos/parser";
import {Log} from "../ConnLogger.js";

type Action = Command | CodeAction;

type ActionCreator = (params: CodeActionParams, getVariant: () => Promise<GameVariant>, getDocumentAsync: () => Promise<Nullable<string>>, getParseResultAsync: () => Promise<Nullable<CaosParseResult>>, diagnostic: Diagnostic, out: Action[]) => Promise<void>;

const errorTypes = ErrorTypes.getInstance();

export function registerCaosCodeActions(register: boolean) {
    if (register) {
        connection.onCodeAction(codeActionHandler);
    }
}

const codeActionHandler: ServerRequestHandler<CodeActionParams, Action[] | undefined | null, Action[], void> = async (params: CodeActionParams): Promise<Action[]> => {
    try {
        return await _codeActionHandler(params)
    } catch(e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        Log.e(`Failed to validate document; ${error}`);
        return [];
    }
};

const _codeActionHandler = async (params: CodeActionParams): Promise<Action[]> => {
    const actions: Action[] = [];
    const getDocumentAsync = createCacheablePromise(() => {
        return getDocumentText(params.textDocument.uri);
    });
    const getVariantAsync = createCacheablePromise(async () => {
        const settings = await getCaosDocumentSettings(params.textDocument.uri);
        return settings?.variant ?? "DS";
    });
    const awaits: Promise<void>[] = [];
    for (const diagnostic of params.context.diagnostics) {
        const getParseResultAsync = createParseResultAsyncGetter(
            getVariantAsync,
            getDocumentAsync,
            diagnostic.range.start
        );
        awaits.push(addActionsForDiagnostic(params, getVariantAsync, getDocumentAsync, getParseResultAsync, diagnostic, actions));
    }
    await Promise.all(awaits);
    return actions;
};


const addActionsForDiagnostic = async (params: CodeActionParams, variant: () => Promise<GameVariant>, document: () => Promise<Nullable<string>>, parseResult: () => Promise<Nullable<CaosParseResult>>, diagnostic: Diagnostic, out: Action[]) => {
    switch (diagnostic.code) {
        case "COMMUNITY_EDITION_ONLY":
        case errorTypes.COMMUNITY_EDITION_ONLY:
            return await addCommunityEditionAction(params, variant, document, parseResult, diagnostic, out);
        case "TYPE_ERROR":
        case errorTypes.TYPE_ERROR:
            return await addTypeErrorActions(params, variant, document, parseResult, diagnostic, out);
        default:
            return;
    }
};

/**
 * Adds an action for adding the Community Edition flag for CAOS development
 * @param params
 * @param variant
 * @param getDocumentAsync
 * @param getParseResultAsync
 * @param diagnostic
 * @param out
 */
const addCommunityEditionAction: ActionCreator = async (params: CodeActionParams, variant: () => Promise<GameVariant>, getDocumentAsync: () => Promise<Nullable<string>>, getParseResultAsync: () => Promise<Nullable<CaosParseResult>>, diagnostic: Diagnostic, out: Action[]): Promise<void>  => {
    if (await variant() !== "DS") {
        return;
    }
    const action = {
        title: "Enable Community Edition Commands",
        command: "caos.enableCommunityEditionCommands",
    } satisfies Command;
    
    out.push(action);
};


const addSetvAction: ActionCreator = async (
    params: CodeActionParams,
    variant: () => Promise<GameVariant>,
    getDocumentAsync: () => Promise<Nullable<string>>,
    getParseResultAsync: () => Promise<Nullable<CaosParseResult>>,
    diagnostic: Diagnostic,
    out: Action[]
): Promise<void> => {
    let message = diagnostic.message;
    if (!message.startsWith("Parameter(2)")) {
        return;
    }
    const setvRegex = /.+?Found (string|integer|agent|number|decimal) \(in (setv|sets|seta)\)/i;
    const matches = setvRegex.exec(message);
    if (!matches) {
        return;
    }
    const oldCommand = matches[2];
    let newCommand: string;
    switch(matches[1].toLowerCase()) {
        case "integer":
        case "float":
        case "decimal":
            newCommand = "setv";
            break;
        case "agent":
            newCommand = "seta";
            break;
        case "string":
            newCommand = "sets";
            break;
        default:
            return;
    }
    
    const parseResult = await getParseResultAsync();
    if (!parseResult) {
        return;
    }
    const {line, character} = diagnostic.range.start;
    const commandRegex = (new RegExp(oldCommand, 'i'));
    const commands = parseResult.commandCalls.filter((call: CommandCall) => inRange(call.textRange, line, character) && commandRegex.test(call.commandString));
    if (commands.length === 0) {
        return;
    }
    const edit = {
        range: toVsRange(commands[0].tokenTextRange, true),
        newText: newCommand,
    } satisfies TextEdit;
    const edits = {
        changes: {
            [params.textDocument.uri]: [edit]
        }
    } satisfies WorkspaceEdit;
    const action = {
        title: `Replace \`${oldCommand.toUpperCase()}\` with \`${newCommand.toUpperCase()}\``,
        kind: CodeActionKind.QuickFix,
        diagnostics: [diagnostic],
        isPreferred: true,
        edit: edits
    } satisfies CodeAction;
    out.push(action);
};


let _typeErrorActionCreators: Nullable<ActionCreator[]> = null;
const typeErrorActionCreators = () => {
    if (_typeErrorActionCreators) {
        return _typeErrorActionCreators;
    }
    _typeErrorActionCreators = [
        addSetvAction
    ];
    return _typeErrorActionCreators;
};


const addTypeErrorActions: ActionCreator = async (params: CodeActionParams, variant: () => Promise<GameVariant>, getDocumentAsync: () => Promise<Nullable<string>>, getParseResultAsync: () => Promise<Nullable<CaosParseResult>>, diagnostic: Diagnostic, out: Action[]): Promise<void>  => {
    const promises =typeErrorActionCreators().map(async (s) => await s(params, variant, getDocumentAsync, getParseResultAsync, diagnostic, out));
    await Promise.all(promises);
};

const createParseResultAsyncGetter = (
    getVariantAsync: () => Promise<GameVariant>,
    getDocumentAsync: () => Promise<Nullable<string>>,
    position: Position
) => {
    return createCacheablePromise(async () => {
        const variant = await getVariantAsync();
        const text = await getDocumentAsync();
        if (text == null) {
            return null;
        }
        return parseCaosNear(variant, text, position.line, position.character);
    })
};



const createCacheablePromise = <T>(create: () => Promise<T>|T): () => Promise<T> => {
    let promise: Nullable<Promise<T>> = null;
    
    return () => {
        if (promise) {
            return promise;
        }
        promise = new Promise(async (resolve, reject) => {
            try {
                const value = await create();
                resolve(value);
            } catch (e) {
                reject(e);
            }
        });
        return promise;
    }
};