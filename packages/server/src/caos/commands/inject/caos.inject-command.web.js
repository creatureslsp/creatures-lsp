import { connection } from "../../../connection.vscode.js";
export function isCaosInjectSupportedForVariant(variant) {
    return false;
}
export async function caosInjectCommand(params) {
    connection.window.showErrorMessage("Cannot inject CAOS on web target");
    return false;
}
