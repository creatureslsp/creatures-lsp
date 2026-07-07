import type {DocumentFormattingParams, TextEdit} from "vscode-languageserver";
import {showMessage} from "../showMessage.js";
import type {MessageType} from "@creatures-lsp/caos-util";
import {type CatalogueFormatterOptions, formatCatalogue} from "@creatures-lsp/caos-kt/catalogue-formatter";
import type {CatalogueDocument} from "./catalogue.document.js";
import type {CatalogueServerFormatSettings} from "./settings.js";

/**
 * Formats code for the Language server
 * @param params
 * @param document
 */
export function formatCatalogueDocument(params: DocumentFormattingParams, document: CatalogueDocument): TextEdit[] {
    const {text, settings} = document;
    const serverFormatterSettings: CatalogueServerFormatSettings = {
        ...(settings.formatting ?? {}),
        ...<any>params.options
    };
    
    try {
        return format(
            text,
            serverFormatterSettings,
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



export function format(
    text: string,
    serverFormatterSettings: CatalogueServerFormatSettings,
    showMessage?: (type: MessageType, message: string) => void
): TextEdit[] {
    
    const formattingSettings: CatalogueFormatterOptions = {
        forceMinBlankLinesAfterComments: false,
        minBlankLinesBetweenEntries: serverFormatterSettings?.blankLinesBetweenEntries,
        maxBlankLinesBetweenEntries: serverFormatterSettings?.blankLinesBetweenEntries,
        minBlankLinesBetweenValues: serverFormatterSettings?.blankLinesBetweenValues,
        maxBlankLinesBetweenValues: serverFormatterSettings?.blankLinesBetweenValues,
        insertFinalNewline: serverFormatterSettings?.insertFinalNewline,
        trimFinalNewlines: serverFormatterSettings?.trimFinalNewlines,
        newLineChar: serverFormatterSettings?.newLineChar,
        removeCustomLineSpacing: null,
    } satisfies CatalogueFormatterOptions;
    
    try {
        const result = formatCatalogue(text, formattingSettings);
        const lines = text.split('\n').length + 1;
        return [
            <TextEdit>{
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
        ]
    } catch (e) {
        let message: string = "Formatting failed";
        if (e instanceof Error) {
            message = e.message;
        } else if (typeof e === 'string') {
            message = e;
        }
        if (showMessage) {
            showMessage('error', message);
        }
        console.error(e instanceof Error ? e.stack : '');
    }
    return []
}