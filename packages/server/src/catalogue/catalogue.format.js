import { showMessage } from "../showMessage.js";
import { formatCatalogue } from "@creatureslsp/catalogue/formatter";
/**
 * Formats code for the Language server
 * @param params
 * @param document
 */
export function formatCatalogueDocument(params, document) {
    const { text, settings } = document;
    const serverFormatterSettings = {
        ...(settings.formatting ?? {}),
        ...params.options
    };
    try {
        return format(text, serverFormatterSettings, showMessage);
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
export function format(text, serverFormatterSettings, showMessage) {
    const formattingSettings = {
        forceMinBlankLinesAfterComments: false,
        minBlankLinesBetweenEntries: serverFormatterSettings?.blankLinesBetweenEntries,
        maxBlankLinesBetweenEntries: serverFormatterSettings?.blankLinesBetweenEntries,
        minBlankLinesBetweenValues: serverFormatterSettings?.blankLinesBetweenValues,
        maxBlankLinesBetweenValues: serverFormatterSettings?.blankLinesBetweenValues,
        insertFinalNewline: serverFormatterSettings?.insertFinalNewline,
        trimFinalNewlines: serverFormatterSettings?.trimFinalNewlines,
        newLineChar: serverFormatterSettings?.newLineChar,
        removeCustomLineSpacing: null,
    };
    try {
        const result = formatCatalogue(text, formattingSettings);
        const lines = text.split('\n').length + 1;
        return [
            {
                range: {
                    start: {
                        line: 0,
                        character: 0
                    },
                    end: {
                        line: lines,
                        character: Number.MAX_VALUE
                    }
                },
                newText: result.formattedText
            }
        ];
    }
    catch (e) {
        let message = "Formatting failed";
        if (e instanceof Error) {
            message = e.message;
        }
        else if (typeof e === 'string') {
            message = e;
        }
        if (showMessage) {
            showMessage('error', message);
        }
        console.error(e instanceof Error ? e.stack : '');
    }
    return [];
}
