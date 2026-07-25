import {getHoverItem} from "@creatures-lsp/caos/hover-documentation";
import {Nullable} from "@creatures-lsp/extension-util";
import {Hover, Position} from "vscode-languageserver";
import {CaosSettings} from "./settings.js";


// Empty placeholder hover value
const EMPTY_HOVER: Hover = {
    contents: "",
    range: undefined
};


/**
 * Gets a hover item from a client->server request
 * @param text
 * @param settings
 * @param position
 */
export async function getCaosHoverDocumentation(text: string, settings: CaosSettings, position: Position): Promise<Nullable<Hover>> {
    // if (parseCaosNear == null) {
    //     console.error("parseCaosNear is null for onHoverCallback");
    //     return EMPTY_HOVER;
    // }
    // const commandCalls = parseCaosNear(settings.variant, text, position.line, position.character).commandCalls;
    // if (commandCalls.length < 1) {
    //     return EMPTY_HOVER;
    // }
    try {
        // return getHoverItem(settings.variant, position, commandCalls)
        return getHoverItem(settings.variant, text, position)
    } catch (e) {
        const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
        console.error("Failed to get hoverDocumentation; ", error);
        return null;
    }
}