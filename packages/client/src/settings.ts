// noinspection JSUnusedGlobalSymbols

import {workspace, WorkspaceConfiguration} from "vscode";


export function getSettings(): WorkspaceConfiguration {
    return workspace.getConfiguration('caosScript');
}

export function getVariant() {
    return getSettings()?.get('variant') ?? 'DS';
}