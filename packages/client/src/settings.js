// noinspection JSUnusedGlobalSymbols
import { workspace } from "vscode";
export function getSettings() {
    return workspace.getConfiguration('caosScript');
}
export function getVariant() {
    return getSettings()?.get('variant') ?? 'DS';
}
