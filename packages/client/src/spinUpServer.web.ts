import {ExtensionContext, TextDocument, Uri} from "vscode";
import {LanguageClient, LanguageClientOptions} from "vscode-languageclient/browser.js";
import {registerClientDisposable} from "./clients.js";
import type {Nullable} from "@creatures-lsp/extension-util";

let defaultClient: Nullable<LanguageClient> = null;

export async function spinUpServer(context: ExtensionContext, document: TextDocument|string, _defaultClient: unknown, clientOptions: LanguageClientOptions): Promise<void> {
    
    const languageId = typeof document === "string" ? "workspace" : document.languageId;
    // Do not start client for non-Creatures files
    if (
        languageId !== "caos" &&
        languageId !== "creatures-catalogue" &&
        languageId !== "creatures-pray" &&
        languageId !== "caosdef" &&
        languageId != "creatures-att"
    ) {
        return;
    }
    
    if (defaultClient) {
        return;
    }
    
    const uri = typeof document === "string" ? Uri.file(document) : document.uri;
    
    console.log("Spinning Up WEBWORKER CAOS Server; Language: " + languageId + "; Document.URI.Scheme: "  + uri.scheme);
    
    const clientOptionsWithoutFolder = {
        ...clientOptions,
        documentSelector: [
            {scheme: 'file', language: 'caos'},
            {scheme: 'file', language: 'catalogue'}
        ]
    };
    defaultClient = createClient(context, clientOptionsWithoutFolder);
    return await defaultClient.start();
}

function createClient(context: ExtensionContext, clientOptions: LanguageClientOptions): LanguageClient {
    
    // Stash caos lib url
    (<any>self).caosLibUrl = Uri.joinPath(context.extensionUri, 'packages', 'caos-util', 'lib', 'caos.universal.lib.json')
        .toString(true);
    
    // Create a worker. The worker main file implements the language server.
    const serverMain: Uri = Uri.joinPath(context.extensionUri, 'packages', 'server', 'dist', 'web', 'server.cjs');
    
    const worker = new Worker(serverMain.toString(true));
    
    clientOptions.initializationOptions = {...clientOptions, "runner": "vscode"};
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