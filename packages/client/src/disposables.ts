import {Disposable} from "vscode";


const disposables: Disposable[] = [];

export function pushDisposable(disposable: Disposable) {
    disposables.push(disposable)
}

export function getDisposables(): Disposable[] {
    return [...disposables];
}

function clearDisposables() {
    disposables.splice(0)
}


/**
 * Close all registered disposables
 */
export function closeDisposables() {
    for (const disposable of disposables) {
        disposable.dispose();
    }
    clearDisposables();
}