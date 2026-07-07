/* eslint-disable eqeqeq */
// noinspection JSUnusedLocalSymbols,GrazieInspection

import {formatCaos} from "@creatures-lsp/caos-kt/caos-formatter";
import type {GameVariant, MessageType} from "@creatures-lsp/caos-kt";
import type {CaosFormatterOptions} from "@creatures-lsp/caos-kt/caos-formatter";
import {TextEdit} from "vscode-languageserver-types";


export function format(
    variant: GameVariant,
    text: string,
    settings: CaosFormatterOptions,
    showMessage?: (type: MessageType, message: string) => void
): TextEdit[] {
    try {
        const result = formatCaos(variant, text, settings);
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