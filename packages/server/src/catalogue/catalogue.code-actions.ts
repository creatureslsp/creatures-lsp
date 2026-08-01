import {connection} from "../connection.vscode.js";
import type {CodeAction, CodeActionParams, Command, Diagnostic} from "vscode-languageserver-protocol";
import type {ServerRequestHandler} from "vscode-languageserver/lib/common/server.js";
import {getDocumentText} from "../documents.js";
import type {Nullable} from "@creatureslsp/caos";
import {inRange, toVsRange} from "@creatureslsp/extension-util";
import {Log} from "../ConnLogger.js";
import {MALFORMED_AGENT_HELP_TAG_ERROR_CODE} from "./inspections/catalogue.inspections.agent-help.js";
import {type CatalogueParseResult, type CatalogueParserItem, parseCatalogue} from "@creatureslsp/catalogue/core";
import {createCatalogueParseResultGetter} from "./inspections/catalogue.parse-result-async.js";
import {CodeActionKind} from "vscode-languageserver";

type Action = Command | CodeAction;

type ActionCreator = (
    params: CodeActionParams,
    getDocumentAsync: () => Promise<Nullable<string>>,
    getParseResultAsync: () => Promise<Nullable<CatalogueParseResult>>,
    diagnostic: Diagnostic,
    out: Action[]
) => Promise<void>;

export const catalogueCodeActionHandler  = async (params: CodeActionParams): Promise<Action[]> => {
    try {
        return await _catalogueActionHandler(params)
    } catch(e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        Log.e(`Failed to validate document; ${error}`);
        return [];
    }
};

const _catalogueActionHandler = async (params: CodeActionParams): Promise<Action[]> => {
    if (!params.context.diagnostics) {
        return [];
    }
    if (!params.textDocument.uri.toLowerCase().endsWith(".catalogue")) {
        return [];
    }
    const actions: Action[] = [];
    const getDocumentAsync = createCacheablePromise(() => {
        return getDocumentText(params.textDocument.uri);
    });
    const getParseResultAsync = createCatalogueParseResultGetter(getDocumentAsync)
    const awaits: Promise<void>[] = [];
    for (const diagnostic of params.context.diagnostics) {
        awaits.push(addActionsForDiagnostic(params, getDocumentAsync, getParseResultAsync, diagnostic, actions));
    }
    await Promise.all(awaits);
    return actions;
};


const addActionsForDiagnostic = async (
    params: CodeActionParams,
    getDocumentAsync: () => Promise<Nullable<string>>,
    getParseResultAsync: () => Promise<Nullable<CatalogueParseResult>>,
    diagnostic: Diagnostic,
    out: Action[]
) => {
    switch (diagnostic.code) {
        case MALFORMED_AGENT_HELP_TAG_ERROR_CODE:
            return addMalformedAgentHelpActions(params, getDocumentAsync, getParseResultAsync, diagnostic, out);
        default:
            return;
    }
};

/**
 * Adds an action for adding the Community Edition flag for CAOS development
 * @param _params
 * @param _getDocumentAsync
 * @param getParseResultAsync
 * @param diagnostic
 * @param out
 */
const addMalformedAgentHelpActions: ActionCreator = async (
    _params: CodeActionParams,
    _getDocumentAsync: () => Promise<Nullable<string>>,
    getParseResultAsync: () => Promise<Nullable<CatalogueParseResult>>,
    diagnostic: Diagnostic,
    out: Action[]
): Promise<void>  => {
    const data = diagnostic.data;
    if (data == null) {
        return;
    }
    const { documentURI, expected, name: catalogueName } = data;
    if (documentURI == null || expected == null || catalogueName == null) {
        return;
    }
    const entries = await getParseResultAsync();
    if (entries == null) {
        return;
    }
    const {line, character} = diagnostic.range.start;
    const name = entries.catalogueEntries
        .filter(c => c.catalogueName == catalogueName)
        .map(c => c.catalogueNameParserItem)
        .filter((item): item is NonNullable<typeof item> => item != null)
        .find((c: CatalogueParserItem) => inRange(c.textRange, line, character, false, true));
    if (name == null) {
        return;
    }
    const action: CodeAction = {
        title: `Set to "${expected}"`,
        diagnostics: [diagnostic],
        isPreferred: true,
        kind: CodeActionKind.QuickFix,
        edit: {
            changes: {
                [documentURI]: [
                    {
                        range: toVsRange(name.textRange, true),
                        newText: `"${expected}"`,
                    }
                ],
            }
        }
    } satisfies CodeAction;
    out.push(action);
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