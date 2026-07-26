import { getCommandsForVariant } from "@creatureslsp/caos-kt/caos-libs";
const _commands = {};
/**
 * Gets a commands' definition object for a given variant.
 * Object has command
 * @param variant
 */
export function getCommands(variant) {
    let commands;
    if (_commands.hasOwnProperty(variant)) {
        commands = _commands[variant];
    }
    if (commands == null) {
        commands = getCommandsForVariant(variant);
        if (commands == null) {
            throw Error("No commands found for variant '" + variant + "'");
        }
        _commands[variant] = commands;
    }
    return commands;
}
