import {registerSetVariantCommand} from "./command.set-variant.js";
import {registerGenerateBitflagsCompletionCommand} from "./bitflags-action.js";
import {registerSetVariantCECommand} from "./command.set-variant-ce.js";
import {registerSetVariantToCommand} from "./command.set-variant-to.js";
import {registerInjectCaosCommand} from "./command.inject.js";


export function registerCommands() {
    registerSetVariantCommand();
    registerSetVariantCECommand();
    registerGenerateBitflagsCompletionCommand();
    registerSetVariantToCommand();
    registerInjectCaosCommand();
}