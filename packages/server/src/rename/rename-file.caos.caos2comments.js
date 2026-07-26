import { requiresFilesWithExtensionRegex, requiresFileWithoutExtensionRegex } from "@creatureslsp/caos";
import { getArrayAccessFileNameIndex, getFileName, toVsRange } from "@creatureslsp/extension-util";
import Path from "path";
export function collectFileRenameEditsForCaos2Comments(documentUri, variant, oldFileNameData, newFileNameData, comments, edits) {
    for (const comment of comments) {
        collectRenamesInCaos2Comment(documentUri, variant, oldFileNameData, newFileNameData, comment, edits);
    }
}
function collectRenamesInCaos2Comment(documentUri, variant, oldFileNameData, newFileNameData, comment, edits) {
    const command = comment.command?.toUpperCase();
    if (command == null && comment.tag != null) {
        collectRenamesInTag(documentUri, variant, oldFileNameData, newFileNameData, comment, edits);
    }
    else if (command != null) {
        collectRenamesInCommand(documentUri, oldFileNameData, newFileNameData, comment, edits);
    }
}
function collectRenamesInTag(documentUri, variant, oldFileNameData, newFileNameData, comment, edits) {
    const tag = comment.tag;
    if (tag == null || tag.trim().length === 0) {
        return;
    }
    let newName = null;
    if (comment.values.length === 0) {
        return;
    }
    const parserItem = comment.values[0];
    let currentValue = parserItem.value;
    if (typeof currentValue !== "string") {
        return;
    }
    currentValue = currentValue.toLowerCase();
    if (variant === "C1" || variant === "C2") {
        // DEAL with CAOS2Cob thumbnail values in the format of "pars[3].spr" or "pars.spr[3]"
        const [filePath, index] = getArrayAccessFileNameIndex(comment.values[0].value) ?? [comment.values[0].value, null];
        if (index != null) {
            currentValue = (getFileName(filePath) ?? filePath).toLowerCase();
            if (currentValue.endsWith("]")) {
                newName = filePath + "[" + index + "]";
            }
            else {
                const path = filePath.split(".");
                const extension = path.pop();
                newName = path.join(".") + "[" + index + "]" + "." + extension;
            }
        }
    }
    if (currentValue !== oldFileNameData.fileName && currentValue !== oldFileNameData.fileNameWithoutExtension) {
        return;
    }
    if (newName == null && requiresFileWithoutExtensionRegex.test(tag)) {
        newName = newFileNameData.fileNameWithoutExtension;
    }
    else if (newName == null && requiresFilesWithExtensionRegex.test(tag)) {
        newName = newFileNameData.fileName;
    }
    if (newName == null || newName.trim().length === 0) {
        return;
    }
    const edit = {
        newText: "\"" + newName.replace(/\\"|"/, "\\\"") + "\"",
        range: toVsRange(parserItem.textRange)
    };
    if (typeof edits[documentUri] === "undefined") {
        edits[documentUri] = [edit];
    }
    else {
        edits[documentUri].push(edit);
    }
}
function collectRenamesInCommand(documentUri, oldFileNameData, newFileNameData, comment, edits) {
    const command = comment.command?.trim()?.toUpperCase();
    const oldFileLower = oldFileNameData.documentUri.toLowerCase();
    if (command == null || command.length === 0) {
        return;
    }
    let values = comment.values;
    if (values.length === 0) {
        return;
    }
    if (command === "INLINE") {
        values = [values.length > 1 ? values[1] : values[0]];
    }
    let parentPathComponents = documentUri.split(/[\\/]/);
    parentPathComponents.pop();
    let newPath = newFileNameData.documentUri;
    if (!Path.isAbsolute(newPath)) {
        throw new Error("New path must be absolute");
    }
    newPath = Path.relative(Path.join(...parentPathComponents), newPath)
        .replace(/\\?"/, "\\\"");
    newPath = "\"" + newPath + "\"";
    for (const value of values) {
        let file = value.value;
        if (typeof file !== "string") {
            continue;
        }
        file = (Path.isAbsolute(file) ? file : Path.join(...parentPathComponents, file)).toLowerCase();
        if (file.toLowerCase() !== oldFileLower) {
            continue;
        }
        const edit = {
            newText: newPath,
            range: toVsRange(value.textRange)
        };
        if (typeof edits[documentUri] === "undefined") {
            edits[documentUri] = [edit];
        }
        else {
            edits[documentUri].push(edit);
        }
    }
}
