import { findCobTag } from "../../caos2/caos2cob.js";
import { Caos2ValueType } from "../../caos2/caos2-util.js";
import { getFilenameCompletionPaths } from "../completions.file.js";
export async function getC1TagValueCompletions(thisFileName, tag, command, directory, getFiles) {
    const tagData = tag ? findCobTag(tag) : null;
    if (tagData == null) {
        return [];
    }
    const type = tagData.type;
    if (type === Caos2ValueType.CAOS || command?.toUpperCase() === "LINK") {
        thisFileName = thisFileName.toLowerCase();
        return getFilenameCompletionPaths(directory, await getFiles(["cos", "caos"]))
            .filter(file => file.toLowerCase() !== thisFileName);
    }
    if (type === Caos2ValueType.SPRITE) {
        return getFilenameCompletionPaths(directory, await getFiles(["spr"]));
    }
    return [];
}
export async function getC2TagValueCompletions(thisFileName, tag, command, directory, getFiles) {
    const tagData = tag ? findCobTag(tag) : null;
    if (tagData == null && command == null) {
        return [];
    }
    const type = tagData?.type;
    command = command ? command.toUpperCase() : null;
    if (type === Caos2ValueType.CAOS || command === "LINK") {
        thisFileName = thisFileName.toLowerCase();
        return getFilenameCompletionPaths(directory, await getFiles(["cos", "caos"]))
            .filter(file => file.toLowerCase() !== thisFileName);
    }
    if (type === Caos2ValueType.SPRITE) {
        return getFilenameCompletionPaths(directory, await getFiles(["s16"]));
    }
    if (command === "DEPEND" || command === "ATTACH" || command === "INLINE") {
        return getFilenameCompletionPaths(directory, await getFiles(["s16", "wav"]));
    }
    return [];
}
