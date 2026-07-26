import type {DocumentFormattingParams, TextEdit} from "vscode-languageserver";
import type {CaosDocument} from "./caos.document.js";
import {format} from "@creatureslsp/caos";
import type {CaosFormatterOptions} from "@creatureslsp/caos/formatter";
import {showMessage} from "../showMessage.js";


/**
 * Formats code for the Language server
 * @param params
 * @param document
 */
export function formatCaosDocument(
    params: DocumentFormattingParams,
    document: CaosDocument,
): TextEdit[] {
    const {variant, text, settings} = document;
    const formattingSettings: CaosFormatterOptions = {
        ...(settings.formatting ?? {}),
        ...<any>params.options
    };
    
    try {
        return format(
            variant,
            text,
            formattingSettings,
            showMessage
        );
    } catch (e) {
        if (e instanceof Error) {
            console.error("FormatFailed: " + e.message + "\n" + e.stack);
        } else {
            console.error(e);
        }
        return [];
    }
}
