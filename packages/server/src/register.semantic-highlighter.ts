import {connection} from './connection.vscode';
import {HandlerResult, SemanticTokens} from "vscode-languageserver";
import {getDocumentSemanticTokens} from "@bedalton/caos-util/semantic-highlighter";
import {unpack} from "./server.utils";

/**
 * Initialize semantic token highlighter if needed
 * @param use
 */
export function registerSemanticTokenHighlighter(use: boolean) {
    if (!use) {
        return;
    }
// ADD semantic highlighting
    connection.languages.semanticTokens.on((params, token: any): HandlerResult<SemanticTokens, void> => {
        return new Promise<SemanticTokens>(async (resolve) => {
            const document = await unpack(params);
            if (document == null) {
                resolve(<SemanticTokens>{
                    data: []
                });
                return;
            }
            const {variant, text} = document;
            return resolve(getDocumentSemanticTokens(variant, text, token));
        });
    });
}
