import { pushDisposable } from "./disposables.js";
import * as vscode from "vscode";
import { trimLeadingSlashOnFileScheme } from "@creatureslsp/extension-util";
import { getWorkspaceFolderForFile } from "./workspace-folders.js";
export const clients = new Map();
let lastClient = null;
export function putClient(uri, client) {
    const oldClient = clients
        .get(uri.toLowerCase());
    oldClient?.stop();
    clients.set(uri.toLowerCase(), client);
    lastClient = client;
}
export function getClient(uri) {
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
export function getFallbackClient() {
    return getSingleClientOrNull() ?? getLastPushedClient();
}
export function getLastPushedClient() {
    return lastClient;
}
export function getSingleClientOrNull() {
    const values = [...clients.values()];
    if (values.length === 1) {
        return values[0];
    }
    return null;
}
export function deleteClient(uri) {
    const client = clients.get(uri.toLowerCase());
    if (client === lastClient) {
        lastClient = null;
    }
    clients.delete(uri.toLowerCase());
}
export function getClients() {
    return clients.values();
}
export function hasClient(uri) {
    return clients.has(uri.toLowerCase());
}
export function registerClientDisposable(client) {
    // Register notification listener to allow server to show message in VS Code
    client.start().then(() => {
        pushDisposable(client.onNotification('caos/show-message', (params) => {
            let [type, message] = params;
            type = type.toLowerCase();
            if (type == 'error') {
                vscode.window.showErrorMessage(message)
                    .then();
            }
            else if (type == 'warn' || type === 'warning') {
                vscode.window.showWarningMessage(message)
                    .then();
            }
            else {
                vscode.window.showInformationMessage(message)
                    .then();
            }
        }));
    });
}
