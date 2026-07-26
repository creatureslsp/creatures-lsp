import { Uri } from "vscode";
import { LanguageClient } from "vscode-languageclient/browser.js";
import { registerClientDisposable } from "./clients.js";
let defaultClient = null;
export async function spinUpServer(context, document, _defaultClient, clientOptions) {
    const languageId = typeof document === "string" ? "workspace" : document.languageId;
    // Do not start client for non-Creatures files
    if (languageId !== "caos" &&
        languageId !== "creatures-catalogue" &&
        languageId !== "creatures-pray" &&
        languageId !== "caosdef" &&
        languageId != "creatures-att") {
        return;
    }
    if (defaultClient) {
        return;
    }
    const uri = typeof document === "string" ? Uri.file(document) : document.uri;
    console.log("Spinning Up WEBWORKER CAOS Server; Language: " + languageId + "; Document.URI.Scheme: " + uri.scheme);
    const clientOptionsWithoutFolder = {
        ...clientOptions,
        documentSelector: [
            { scheme: 'file', language: 'caos' },
            { scheme: 'file', language: 'catalogue' }
        ]
    };
    defaultClient = createClient(context, clientOptionsWithoutFolder);
    return await defaultClient.start();
}
function createClient(context, clientOptions) {
    // Stash caos lib url
    self.caosLibUrl = Uri.joinPath(context.extensionUri, 'packages', 'caos', 'lib', 'caos.universal.lib.json')
        .toString(true);
    // Create a worker. The worker main file implements the language server.
    const serverMain = Uri.joinPath(context.extensionUri, 'packages', 'server', 'dist', 'web', 'server.cjs');
    const worker = new Worker(serverMain.toString(true));
    clientOptions.initializationOptions = { ...clientOptions, "runner": "vscode" };
    // create the language server client to communicate with the server running in the worker
    const client = new LanguageClient('caos-language-server', 'CAOS Language Server', clientOptions, worker);
    registerClientDisposable(client);
    return client;
}
