import {CAOS_LANGUAGE_ID, CaosSettings, getDocumentSettings} from "./settings";
import {getDocument} from "./documents";
import {GameVariant} from "@bedalton/caos-util";
import {Nullable} from "@bedalton/extension-util";

export type CaosDocument = {
    readonly documentUri: string;
    readonly text: string;
    readonly settings: CaosSettings;
    readonly variant: GameVariant;
}

export type UriLike = string | { textDocument: { uri: string }; } | { uri: string; }

export async function unpack(reference: UriLike): Promise<Nullable<CaosDocument>> {
    let documentUri: string;
    if (typeof reference === 'string') {
        documentUri = reference;
    } else if (reference.hasOwnProperty != null) {
        if ((<Object>reference).hasOwnProperty('uri')) {
            documentUri = (<any>reference).uri;
        } else if ((<Object>reference).hasOwnProperty('textDocument')) {
            documentUri = (<any>reference).textDocument.uri;
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
    const document = getDocument(documentUri);
    
    // Ensure that this document is a CAOS document
    if (document?.languageId != CAOS_LANGUAGE_ID) {
        return undefined;
    }
    let text = document?.getText();
    if (text == null || text.length < 1) {
        return undefined;
    }
    const settings = await getDocumentSettings(documentUri);
    return {
        documentUri,
        text,
        settings,
        variant: settings?.variant ?? 'DS'
    };
}