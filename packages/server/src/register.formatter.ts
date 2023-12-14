import {DocumentFormattingParams, TextEdit} from "vscode-languageserver";
import {format} from "@bedalton/caos-util/formatter"
import {connection, showMessage} from "./server";
import {unpack} from "./server.utils";
import {CaosFormatterOptions} from "@bedalton/caos-util";
import {showMessage} from "./showMessage";


/**
 * Formats code for the Language server
 * @param params
 */
async function onFormatCallback(params: DocumentFormattingParams): Promise<TextEdit[]> {
    const document = await unpack(params)
    if (document == null) {
        return [];
    }
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

/**
 * Registers an LSP formatting function if needed
 * @param init
 */
export function registerFormattingProvider(init: boolean) {
    if (!init) {
        return
    }
    connection.onDocumentFormatting(onFormatCallback);
}