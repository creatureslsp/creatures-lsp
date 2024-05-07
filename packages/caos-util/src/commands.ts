import {Commands, GameVariant, libs} from "./caos-util";
import {Nullable} from "@bedalton/extension-util"

const _commands: { [variant: string]: Commands } = {};

/**
 * Gets a commands' definition object for a given variant.
 * Object has command
 * @param variant
 */
export function getCommands(variant: GameVariant): Commands {
    let commands: Nullable<Commands>;
    if (_commands.hasOwnProperty(variant)) {
        commands = _commands[variant]
    }
    if (commands == null) {
        commands = libs.getCommandsForLib(variant)
        if (commands == null) {
            throw Error("No commands found for variant '" + variant + "'");
        }
        _commands[variant] = commands;
    }
    return commands;
}