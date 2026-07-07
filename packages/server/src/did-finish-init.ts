import {initPendingWorkspaces} from "./workspace-folders.js";


let _didFinishInit = false;

export function setDidFinishInit() {
    _didFinishInit = true;
    initPendingWorkspaces()
        .then();
}

export function didFinishInit() {
    return _didFinishInit;
}