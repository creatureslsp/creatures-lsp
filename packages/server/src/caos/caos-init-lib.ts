import {useFullCaosLibDefinitions} from "@creatures-lsp/caos-kt/caos-libsfile-full";

let didInit = false;

export const caosInitLib = () => {
    if (didInit) {
        return;
    }
    didInit = true;
    useFullCaosLibDefinitions()
}

