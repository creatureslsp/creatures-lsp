import {Disposable} from "vscode";


const _disposables: Disposable[] = [];

export function pushDisposable(disposable: Disposable) {
    _disposables.push(disposable)
}

export function getDisposables(): Disposable[] {
    return [..._disposables];
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