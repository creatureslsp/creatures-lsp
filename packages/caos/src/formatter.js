/* eslint-disable eqeqeq */
// noinspection JSUnusedLocalSymbols,GrazieInspection
import { formatCaos } from "@creatureslsp/caos-kt/caos-formatter";
export function format(variant, text, settings, showMessage) {
    try {
        const result = formatCaos(variant, text, settings);
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
