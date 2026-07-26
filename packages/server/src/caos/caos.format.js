import { format } from "@creatureslsp/caos";
import { showMessage } from "../showMessage.js";
/**
 * Formats code for the Language server
 * @param params
 * @param document
 */
export function formatCaosDocument(params, document) {
    const { variant, text, settings } = document;
    const formattingSettings = {
        ...(settings.formatting ?? {}),
        ...params.options
    };
    try {
        return format(variant, text, formattingSettings, showMessage);
    }
    catch (e) {
        if (e instanceof Error) {
            console.error("FormatFailed: " + e.message + "\n" + e.stack);
        }
        else {
            console.error(e);
        }
        return [];
    }
}
