import {ExtensionContext, TextDocument, workspace, window} from "vscode";
import {
    LanguageClient,
    LanguageClientOptions,
    RevealOutputChannelOn,
    ServerOptions,
    TransportKind,
} from "vscode-languageclient/node.js";
import {
    Uri,
} from "vscode";
import path from "path";
import {getOuterMostWorkspaceFolder} from "./workspace-folders.js";
import {getClient, hasClient, putClient, registerClientDisposable} from "./clients.js";
import {pushDisposable} from "./disposables.js";
import {initVfs} from "./vfs.js";
import {setDefaultClient} from "./extension.js";
import {Log} from "./log.js";
import {caosOnInjectUpdate, caosUpdateCanInject} from "./commands/command.inject.js";
import type {Nullable} from "@creatureslsp/extension-util";


let _nextListenerId = 0;



export async function spinUpServer(context: ExtensionContext, document: TextDocument|string, defaultClient: LanguageClient, clientOptions: LanguageClientOptions): Promise<void> {
    
    const languageId = typeof document === "string" ? "workspace" : document.languageId;
    // Do not start the client for non-Creatures files
    if (
        languageId !== "workspace" &&
        languageId !== "caos" &&
        languageId !== "creatures-catalogue" &&
        languageId !== "creatures-pray" &&
        languageId !== "caosdef" &&
        languageId !== "creatures-att"
    ) {
        return;
    }
    
    // The server is implemented in node
    const serverModule = context.asAbsolutePath(
        path.join('packages', 'server', 'dist', 'node', 'server.cjs')
    );
    
    const uri = typeof document === "string" ? Uri.file(document)  : document.uri;
    
    
    clientOptions.initializationOptions = {...clientOptions, "runner": "vscode"};
    
    clientOptions.revealOutputChannelOn = RevealOutputChannelOn.Info;
    
    // Untitled/unsaved files go to a default client.
    if (typeof uri !== "string" && uri.scheme === 'untitled') {
        if (defaultClient) {
            pushDisposable(initVfs("", defaultClient));
            return;
        }
        const untitledFileClientOptions = {
            ...clientOptions,
            documentSelector: [
                {scheme: 'file', language: 'caos'},
                {scheme: 'file', language: 'catalogue'},
                {scheme: 'file', language: 'creatures-catalogue'},
                {scheme: 'file', language: 'pray'},
                {scheme: 'file', language: 'creatures-pray'},
            
            ]
        };
        
        // If the extension is launched in debug mode then the debug server options are used
        // Otherwise the run options are used
        // noinspection SpellCheckingInspection
        const debugOptions = {execArgv: ["--nolazy", "--inspect=6010", "--runner", "vscode"]};
        const serverOptions: ServerOptions = {
            run: {module: serverModule, transport: TransportKind.ipc},
            debug: {module: serverModule, transport: TransportKind.ipc, options: debugOptions}
        };
        
        defaultClient = new LanguageClient(
            'caos-language-server',
            'CAOS Language Server',
            serverOptions,
            untitledFileClientOptions
        );
        
        await defaultClient.start();
        pushDisposable(initVfs("", defaultClient));
        setDefaultClient(defaultClient);
        return;
    }
    
    let folder = workspace.getWorkspaceFolder(uri);
    
    // Files outside a folder can't be handled. This might depend on the language.
    // Single file languages like JSON might handle files outside the workspace folders.
    if (!folder) {
        return;
    }
    
    // If we have nested workspace folders we only start a server on the outermost workspace folder.
    folder = getOuterMostWorkspaceFolder(folder) ?? folder;
    
    const folderURI = folder!!.uri.toString()
    
    if (hasClient(folderURI)) {
        pushDisposable(initVfs(folderURI, getClient(folderURI)!));
        return;
    }
    
    putClient(folderURI, <any>null);
    
    // Initialize options with a specific workspace folder
    const clientWithFolderOptions: LanguageClientOptions = {...clientOptions, workspaceFolder: folder};
    
    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    // noinspection SpellCheckingInspection
    const debugOptions = {execArgv: ["--nolazy", `--inspect=${6011 + _nextListenerId++}`]};
    
    const serverOptions: ServerOptions = {
        run: {module: serverModule, transport: TransportKind.ipc},
        debug: {module: serverModule, transport: TransportKind.ipc, options: debugOptions}
    };
    
    // Create the language client and start the client.
    const client = new LanguageClient(
        'caos-language-server',
        'CAOS Language Server',
        serverOptions,
        clientWithFolderOptions
    );
    
    // Register notification listener to allow server to show message in VS Code
    registerClientDisposable(client);
    putClient(folderURI, client);
    await client.start();
    pushDisposable(initVfs(folderURI, client));
    pushDisposable(client.onNotification("caos/canInjectCaos", caosUpdateCanInject));
    pushDisposable(client.onNotification("caos/onInjection", caosOnInjectUpdate))
}