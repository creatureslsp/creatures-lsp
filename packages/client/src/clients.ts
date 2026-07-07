import {LanguageClient} from "vscode-languageclient/node.js";
import {pushDisposable} from "./disposables.js";
import * as vscode from "vscode";
import {Uri} from "vscode";
import {Nullable, trimLeadingSlashOnFileScheme} from "@creatures-lsp/extension-util";
import {getWorkspaceFolderForFile} from "./workspace-folders.js";

export const clients: Map<string, LanguageClient> = new Map();
let lastClient: Nullable<LanguageClient> = null;

export function putClient(uri: string, client: LanguageClient) {
    const oldClient = clients
        .get(uri.toLowerCase())
    oldClient?.stop();
    clients.set(uri.toLowerCase(), client);
    lastClient = client;
}

export function getClient(uri: string | Uri): Nullable<LanguageClient> {
    const file = trimLeadingSlashOnFileScheme(typeof uri === "string" ? uri : uri.path).toLowerCase();
    let client = clients.get(file);
    if (client) {
        return client;
    }
    const workspace = getWorkspaceFolderForFile(file);
    if (workspace == null) {
        return null;
    }
    return clients.get(file) ?? clients.get(workspace);
}

export function getFallbackClient(): Nullable<LanguageClient> {
    return getSingleClientOrNull() ?? getLastPushedClient();
}

export function getLastPushedClient(): Nullable<LanguageClient> {
    return lastClient;
}

export function getSingleClientOrNull(): Nullable<LanguageClient> {
    const values = [...clients.values()];
    if (values.length === 1) {
        return values[0];
    }
    return null;
}

export function deleteClient(uri: string) {
    const client = clients.get(uri.toLowerCase());
    if (client === lastClient) {
        lastClient = null;
    }
    clients.delete(uri.toLowerCase());
}

export function getClients(): Iterable<LanguageClient> {
    return clients.values()
}

export function hasClient(uri: string): boolean {
    return clients.has(uri.toLowerCase())
}

export function registerClientDisposable(client: LanguageClient) {
    // Register notification listener to allow server to show message in VS Code
    client.start().then(() => {
        pushDisposable(client.onNotification('caos/show-message', (params: string[]) => {
            let [type, message] = params;
            type = type.toLowerCase();
            if (type == 'error') {
                vscode.window.showErrorMessage(message)
                    .then();
            } else if (type == 'warn' || type === 'warning') {
                vscode.window.showWarningMessage(message)
                    .then();
            } else {
                vscode.window.showInformationMessage(message)
                    .then();
            }
        }));
    });
}
