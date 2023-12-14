import {connection} from "./connection.vscode";
import {MessageType} from "@bedalton/caos-util";


export function showMessage(type: MessageType, message: string): void {
    // noinspection JSIgnoredPromiseFromCall
    connection.sendNotification('caos/show-message', [type, message]);
}