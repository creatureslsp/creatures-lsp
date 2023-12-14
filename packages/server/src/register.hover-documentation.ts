import {com, Nullable} from "@bedalton/caos-util";
import collectors = com.bedalton.creatures.caos.collectors;
import {getHoverItem} from "@bedalton/caos-util/hover-documentation";
import {Hover, HoverParams} from "vscode-languageserver";
import {getDocument} from "./documents";
import {CAOS_LANGUAGE_ID, getDocumentSettings} from "./settings";
import {connection} from "./connection.vscode";
import parseCaosNear = collectors.parseCaosNear;


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
    if (textDocument == null || textDocument.languageId !== CAOS_LANGUAGE_ID) {
        return null;
    }
    const text = textDocument.getText();
    if (text == null || text.length < 4) {
        return EMPTY_HOVER;
    }
    const settings = await getDocumentSettings(uri);
    const commandCalls = parseCaosNear(settings.variant, text, e.position.line, e.position.character).commandCalls;
    if (commandCalls.length < 1) {
        return EMPTY_HOVER;
    }
    return getHoverItem(settings.variant, e.position, commandCalls);
}

/**
 * Register hover doc creator/getter
 */
export function registerHoverDocumentationProvider(use: boolean) {
    if (!use) {
        return;
    }
    connection.onHover(onHoverCallback);
}
