import {Disposable} from "vscode";
import type {Nullable} from "@creatures-lsp/extension-util";


const _disposables: Disposable[] = [];

export function pushDisposable(disposable: Nullable<Disposable>) {
    if (!disposable) {
        return;
    }
    _disposables.push(disposable)
}

function clearDisposables() {
    _disposables.splice(0)
}


/**
 * Close all registered disposables
 */
export function closeDisposables() {
    for (const disposable of _disposables) {
        disposable.dispose();
    }
    clearDisposables();
}