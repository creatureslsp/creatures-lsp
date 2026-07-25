import {useFullCaosLibDefinitions} from "@creatures-lsp/caos/libsfile-full";

let didInit = false;

export const caosInitLib = () => {
    if (didInit) {
        return;
    }
    didInit = true;
    useFullCaosLibDefinitions()
}

