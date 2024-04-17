import {registerSetVariantCommand} from "./command.set-variant";
import {registerGenerateBitflagsCompletionCommand} from "./bitflags-action";


export function registerCommands() {
    registerSetVariantCommand();
    registerGenerateBitflagsCompletionCommand();
}