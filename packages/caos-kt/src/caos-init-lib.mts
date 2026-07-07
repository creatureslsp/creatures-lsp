import {useFullCaosLibDefinitions} from "./caos-libsfile-full.mjs";

let didInit = false;

export const caosInitLib = () => {
    if (didInit) {
        return;
    }
    didInit = true;
    useFullCaosLibDefinitions();
}

