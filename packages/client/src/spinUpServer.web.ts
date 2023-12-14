import {ExtensionContext, TextDocument, Uri} from "vscode";
import {LanguageClient, LanguageClientOptions} from "vscode-languageclient/browser";
import {registerClientDisposable} from "./clients";
import {Nullable} from "@bedalton/caos-util";

let defaultClient: Nullable<LanguageClient> = null;

export function spinUpServer(context: ExtensionContext, document: TextDocument, clientOptions: LanguageClientOptions) {
    
    // Do not start client for non-CAOS files
    
    
    // Do not start client for non-CAOS files
    if (document.languageId !== 'caos') {
        // console.log("File is not CAOS; Language: " + document.languageId + "; Document.URI.Scheme: "  + document.uri.scheme);
        return;
    }
    console.log("Spinning Up WEBWORKER CAOS Server; Language: " + document.languageId + "; Document.URI.Scheme: "  + document.uri.scheme);
    
    if (defaultClient) {
        return;
    }
    const clientOptionsWithoutFolder = {
        ...clientOptions,
        documentSelector: [
            {scheme: 'file', language: 'caos'}
        ]
    };
    defaultClient = createClient(context, clientOptionsWithoutFolder);
    defaultClient.start();
}

// export function spinUpServer(context: ExtensionContext, document: TextDocument, clientOptions: LanguageClientOptions) {
//
//     // Do not start client for non-CAOS files
//     if (document.languageId !== 'caos' || (document.uri.scheme !== 'file' && document.uri.scheme !== 'untitled')) {
//         return;
//     }
//
//     const uri = document.uri;
//
//     let clientOptionsWithFile: LanguageClientOptions
//
//     // Untitled/unsaved  files go to a default client.
//     if (uri.scheme === 'untitled') {
//         if (defaultClient) {
//             return;
//         }
//         const clientOptionsWithoutFolder = {
//             ...clientOptions,
//             documentSelector: [
//                 { scheme: 'untitled', language: 'caos' }
//             ]
//         };
//         defaultClient = createClient(context, clientOptionsWithoutFolder);
//         return;
//     }
//
//     let folder = workspace.getWorkspaceFolder(uri);
//
//     // Files outside a folder can't be handled. This might depend on the language.
//     // Single file languages like JSON might handle files outside the workspace folders.
//     if (!folder) {
//         return;
//     }
//
//     // If we have nested workspace folders we only start a server on the outermost workspace folder.
//     folder = getOuterMostWorkspaceFolder(folder) ?? folder;
//
//     const folderURI = folder!!.uri.toString()
//
//     if (!hasClient(folderURI)) {
//         putClient(folderURI, <any>null);
//
//         // Initialize options with a specific workspace folder
//         const clientWithFolderOptions: LanguageClientOptions = {...clientOptions, workspaceFolder: folder};
//
//         // Create the language client and start the client.
//         const client = createClient(context, clientWithFolderOptions);
//
//         registerClientDisposable(client as any);
//         putClient(folderURI, client as any);
//         client.start();
//     }
// }

function createClient(context: ExtensionContext, clientOptions: LanguageClientOptions): LanguageClient {
    
    // Stash caos lib url
    (<any>self).caosLibUrl = Uri.joinPath(context.extensionUri, 'packages', 'caos-util', 'lib', 'caos.universal.lib.json')
        .toString(true);
    
    // Create a worker. The worker main file implements the language server.
    const serverMain: Uri = Uri.joinPath(context.extensionUri, 'packages', 'server', 'dist', 'web', 'server.js');
    
    const worker = new Worker(serverMain.toString(true));
    
    // create the language server client to communicate with the server running in the worker
    const client = new LanguageClient(
        'caos-language-server',
        'CAOS Language Server',
        clientOptions,
        worker
    );
    registerClientDisposable(client as any);
    return client
}