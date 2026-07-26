import { connection } from "../connection.vscode.js";
import { ErrorTypes } from "@creatureslsp/caos/core";
import { getDocumentText } from "../documents.js";
import { parseCaosNear } from "@creatureslsp/caos/parser";
import { getCaosDocumentSettings } from "./settings.js";
import { CodeActionKind } from "vscode-languageserver";
import { inRange, toVsRange } from "@creatureslsp/extension-util";
import { Log } from "../ConnLogger.js";
const errorTypes = ErrorTypes.getInstance();
export function registerCaosCodeActions(register) {
    if (register) {
        connection.onCodeAction(codeActionHandler);
    }
}
const codeActionHandler = async (params) => {
    try {
        return await _codeActionHandler(params);
    }
    catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        Log.e(`Failed to validate document; ${error}`);
        return [];
    }
};
const _codeActionHandler = async (params) => {
    const actions = [];
    const getDocumentAsync = createCacheablePromise(() => {
        return getDocumentText(params.textDocument.uri);
    });
    const getVariantAsync = createCacheablePromise(async () => {
        const settings = await getCaosDocumentSettings(params.textDocument.uri);
        return settings?.variant ?? "DS";
    });
    const awaits = [];
    for (const diagnostic of params.context.diagnostics) {
        const getParseResultAsync = createParseResultAsyncGetter(getVariantAsync, getDocumentAsync, diagnostic.range.start);
        awaits.push(addActionsForDiagnostic(params, getVariantAsync, getDocumentAsync, getParseResultAsync, diagnostic, actions));
    }
    await Promise.all(awaits);
    return actions;
};
const addActionsForDiagnostic = async (params, variant, document, parseResult, diagnostic, out) => {
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
const addCommunityEditionAction = async (params, variant, getDocumentAsync, getParseResultAsync, diagnostic, out) => {
    if (await variant() !== "DS") {
        return;
    }
    const action = {
        title: "Enable Community Edition Commands",
        command: "caos.enableCommunityEditionCommands",
    };
    out.push(action);
};
const addSetvAction = async (params, variant, getDocumentAsync, getParseResultAsync, diagnostic, out) => {
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
    let newCommand;
    switch (matches[1].toLowerCase()) {
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
    const { line, character } = diagnostic.range.start;
    const commandRegex = (new RegExp(oldCommand, 'i'));
    const commands = parseResult.commandCalls.filter((call) => inRange(call.textRange, line, character) && commandRegex.test(call.commandString));
    if (commands.length === 0) {
        return;
    }
    const edit = {
        range: toVsRange(commands[0].tokenTextRange, true),
        newText: newCommand,
    };
    const edits = {
        changes: {
            [params.textDocument.uri]: [edit]
        }
    };
    const action = {
        title: `Replace \`${oldCommand.toUpperCase()}\` with \`${newCommand.toUpperCase()}\``,
        kind: CodeActionKind.QuickFix,
        diagnostics: [diagnostic],
        isPreferred: true,
        edit: edits
    };
    out.push(action);
};
let _typeErrorActionCreators = null;
const typeErrorActionCreators = () => {
    if (_typeErrorActionCreators) {
        return _typeErrorActionCreators;
    }
    _typeErrorActionCreators = [
        addSetvAction
    ];
    return _typeErrorActionCreators;
};
const addTypeErrorActions = async (params, variant, getDocumentAsync, getParseResultAsync, diagnostic, out) => {
    const promises = typeErrorActionCreators().map(async (s) => await s(params, variant, getDocumentAsync, getParseResultAsync, diagnostic, out));
    await Promise.all(promises);
};
const createParseResultAsyncGetter = (getVariantAsync, getDocumentAsync, position) => {
    return createCacheablePromise(async () => {
        const variant = await getVariantAsync();
        const text = await getDocumentAsync();
        if (text == null) {
            return null;
        }
        return parseCaosNear(variant, text, position.line, position.character);
    });
};
const createCacheablePromise = (create) => {
    let promise = null;
    return () => {
        if (promise) {
            return promise;
        }
        promise = new Promise(async (resolve, reject) => {
            try {
                const value = await create();
                resolve(value);
            }
            catch (e) {
                reject(e);
            }
        });
        return promise;
    };
};
