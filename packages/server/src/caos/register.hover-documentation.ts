import {collectors} from "@bedalton/caos-util";
import {Nullable} from "@bedalton/extension-util";
import {getHoverItem} from "@bedalton/caos-util/hover-documentation";
import {Hover, HoverParams} from "vscode-languageserver";
import {getDocument, getDocumentText} from "../documents";
import {CAOS_LANGUAGE_ID, getDocumentSettings} from "../settings";
import {connection} from "../connection.vscode";
const parseCaosNear = collectors?.parseCaosNear;


// Empty placeholder hover value
const EMPTY_HOVER: Hover = {
    contents: "",
    range: undefined
};


/**
 * Gets a hover item from a client->server request
 * @param e
 */
async function onHoverCallback(e: HoverParams): Promise<Nullable<Hover>> {
    const uri = e.textDocument.uri;
    const textDocument = getDocument(uri);
    if (textDocument != null && textDocument.languageId !== CAOS_LANGUAGE_ID) {
        return null;
    }
    const text = textDocument?.getText() ?? (await getDocumentText(uri));
    if (text == null || text.length < 4) {
        return EMPTY_HOVER;
    }
    const settings = await getDocumentSettings(uri);
    if (parseCaosNear == null) {
        console.error("parseCaosNear is null for onHoverCallback");
        return EMPTY_HOVER;
    }
    const commandCalls = parseCaosNear(settings.variant, text, e.position.line, e.position.character).commandCalls;
    if (commandCalls.length < 1) {
        return EMPTY_HOVER;
    }
    try {
        return getHoverItem(settings.variant, e.position, commandCalls)
    } catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        console.error("Failed to get hoverDocumentation; ", error);
        return null;
    }
}

/**
 * Register hover doc creator/getter
 */
export function registerCaosHoverDocumentationProvider(use: boolean) {
    if (!use) {
        return;
    }
    return connection.onHover(onHoverCallback)
}

