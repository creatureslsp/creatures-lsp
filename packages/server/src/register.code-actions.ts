import {registerCaosCodeActions} from "./caos/caos.code-actions.js";

export function registerCodeActions(register: boolean) {
    if (register) {
        registerCaosCodeActions(register);
    }
}