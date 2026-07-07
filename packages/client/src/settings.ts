// noinspection JSUnusedGlobalSymbols

import {workspace, WorkspaceConfiguration} from "vscode";
import {GameVariant} from "@creatures-lsp/caos-util";


export function getSettings(): WorkspaceConfiguration {
    return workspace.getConfiguration('caosScript');
}

export function getVariant(): GameVariant {
    return getSettings()?.get('variant') ?? 'DS';
}