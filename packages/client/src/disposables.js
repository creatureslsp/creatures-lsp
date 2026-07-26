const _disposables = [];
export function pushDisposable(disposable) {
    if (!disposable) {
        return;
    }
    _disposables.push(disposable);
}
function clearDisposables() {
    _disposables.splice(0);
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
