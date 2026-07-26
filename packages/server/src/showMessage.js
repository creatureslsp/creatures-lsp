import { connection } from "./connection.vscode.js";
export function showMessage(type, message) {
    // noinspection JSIgnoredPromiseFromCall
    connection.sendNotification('caos/show-message', [type, message]);
}
