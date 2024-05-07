import {getGotoInformation} from "@bedalton/caos-util/goto";
import {getDocumentSettings} from "../settings";
import {getDocument, getDocumentText} from "../documents";
import {DefinitionParams} from "vscode-languageserver";
import {Definition, LocationLink} from "vscode-languageserver-types";
import {connection} from "../connection.vscode";


export function registerCaosGotoDefinitionsProvider(init: boolean) {
    if (!init) {
        return;
    }
    return connection.onDefinition(async (params: DefinitionParams): Promise<Definition | LocationLink[] | undefined | null> => {
        const uri = params.textDocument.uri;
        const document = getDocument(uri);
        const text = document?.getText() ?? (await getDocumentText(uri));
        if (text == null || text.trim().length === 0) {
            console.log("No definition text");
            return null;
        }
        const variant = (await getDocumentSettings(uri))?.variant ?? 'DS';
        const {line, character} = params.position;
        try {
            return getGotoInformation(
                uri,
                variant,
                text,
                line,
                character
            );
        } catch (e) {
            const error = e instanceof Error ? (e.message + "\n" + e.stack) : e;
            console.error("Failed to get GOTO; ", error);
            return null;
        }
    })
}

