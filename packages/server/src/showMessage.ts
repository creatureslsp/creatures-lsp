import {connection} from "./connection.vscode.js";
import type {MessageType} from "@creatureslsp/caos";


export function showMessage(type: MessageType, message: string): void {
    // noinspection JSIgnoredPromiseFromCall
    connection.sendNotification('caos/show-message', [type, message]);
}