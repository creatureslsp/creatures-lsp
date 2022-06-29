import {getGotoInformation} from "@bedalton/caos-util/goto";
import {getDocumentSettings} from "./settings";
import {getDocument} from "./documents";
import {DefinitionParams} from "vscode-languageserver";
import {Definition, LocationLink} from "vscode-languageserver-types";
import {connection} from "./server";

export function registerGotoDefinitionsProvider(init: boolean) {
    if (!init) {
        return;
    }
    connection.onDefinition(async (params: DefinitionParams): Promise<Definition | LocationLink[] | undefined | null> => {
        
        const uri = params.textDocument.uri;
        const document = getDocument(uri);
        const text = document?.getText();
        if (text == null || text.trim().length === 0) {
            console.log("No definition text");
            return null;
        }
        const variant = (await getDocumentSettings(uri))?.variant ?? 'DS';
        const {line, character} = params.position;
        return getGotoInformation(
            uri,
            variant,
            text,
            line,
            character
        );
    });
}