import {connection} from '../connection.vscode';
import {HandlerResult, SemanticTokens} from "vscode-languageserver";
import {getDocumentSemanticTokens} from "@bedalton/caos-util/semantic-highlighter";
import {unpack} from "../server.utils";


/**
 * Initialize semantic token highlighter if needed
 * @param use
 */
export function registerCaosSemanticTokenHighlighter(use: boolean) {
    if (!use) {
        return;
    }
// ADD semantic highlighting
    return connection.languages.semanticTokens.on((params, token: any): HandlerResult<SemanticTokens, void> => {
        return new Promise<SemanticTokens>(async (resolve) => {
            const document = await unpack(params);
            if (document == null) {
                resolve(<SemanticTokens>{
                    data: []
                });
                return;
            }
            const {variant, text} = document;
            const semanticTokens = getDocumentSemanticTokens(variant, text, token);
            return resolve(semanticTokens);
        });
    });
}

