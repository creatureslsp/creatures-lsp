import {ExtensionContext, TextDocument, workspace} from "vscode";
import {LanguageClient, LanguageClientOptions, ServerOptions, TransportKind} from "vscode-languageclient/node";
import path from "path";
import {getOuterMostWorkspaceFolder} from "./workspace-folders";
import {hasClient, putClient, registerClientDisposable} from "./clients";
import {pushDisposable} from "./disposables";
import {initVfs} from "./vfs";


let _nextListenerId = 0;

export async function spinUpServer(context: ExtensionContext, document: TextDocument, defaultClient: LanguageClient, clientOptions: LanguageClientOptions) {

    
    // Do not start client for non-CAOS files
    if (document.languageId !== 'caos') {
        return;
    }
    
    console.log("Spinning Up NODE CAOS Server; Language: " + document.languageId + "; Document.URI.Scheme: "  + document.uri.scheme);
    // The server is implemented in node
    const serverModule = context.asAbsolutePath(
        path.join('packages', 'server', 'dist', 'server.js')
    );
    
    const uri = document.uri;
    
    
    // Untitled/unsaved  files go to a default client.
    if (uri.scheme === 'untitled') {
        if (defaultClient) {
            return;
        }
        const untitledFileClientOptions = {
            ...clientOptions,
            documentSelector: [
                { scheme: 'file', language: 'caos' }
            ]
        };
        // If the extension is launched in debug mode then the debug server options are used
        // Otherwise the run options are used
        // noinspection SpellCheckingInspection
        const debugOptions = { execArgv: ["--nolazy", "--inspect=6010"] };
        const serverOptions: ServerOptions = {
            run: { module: serverModule, transport: TransportKind.ipc },
            debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions}
        };
        defaultClient = new LanguageClient(
            'caos-language-server',
            'CAOS Language Server',
            serverOptions,
            untitledFileClientOptions
        );
        
        await defaultClient.start();
        pushDisposable(initVfs(defaultClient));
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
    
    if (!hasClient(folderURI)) {
        
        putClient(folderURI, <any>null);
        
        // Initialize options with a specific workspace folder
        const clientWithFolderOptions: LanguageClientOptions = {...clientOptions, workspaceFolder: folder};
        
        // If the extension is launched in debug mode then the debug server options are used
        // Otherwise the run options are used
        // noinspection SpellCheckingInspection
        const debugOptions = { execArgv: ["--nolazy", `--inspect=${6011 + _nextListenerId++}`] };
        
        const serverOptions: ServerOptions = {
            run: { module: serverModule, transport: TransportKind.ipc },
            debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions}
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
        pushDisposable(initVfs(client));
    }
}