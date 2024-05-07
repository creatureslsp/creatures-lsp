import {DocumentUri} from "vscode-languageserver";
import * as path from "path";
import {indexCaosFile} from "./index.caos";
import {indexCatalogue} from "./index.catalogue";
import {Nullable} from "@bedalton/extension-util";


export async function indexFile(workspaceUri: Nullable<DocumentUri>, documentUri: DocumentUri) {
    let extension = path.extname(documentUri)?.toLowerCase();
    if (extension && extension.length > 1 && extension[0] === ".") {
        extension = extension.substring(1);
    }
    switch (extension) {
        case "cos":
            await indexCaosFile(workspaceUri, documentUri);
            break;
        case "catalogue":
            await indexCatalogue(workspaceUri, documentUri);
            break;
        default:
            // NO_OP
    }
}