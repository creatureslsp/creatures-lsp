import {getFilenameCompletionPaths} from "../completions.file.js";
import {
    arrayUnique,
    filterNotNull,
    getExtension,
    getFileName,
    getFileNameWithoutExtensions,
    Nullable,
    stripSurroundingQuotes
} from "@creatureslsp/extension-util";
import type {Caos2Comment} from "@creatureslsp/caos-kt/caos-core";

export const requiresFileWithoutExtensionRegex = RegExp("^" + [
    "Egg\\s+Gallery\\s+male",
    "Egg\\s+Gallery\\s+female",
    "Agent\\s+Animation\\s+Gallery",
    "Web\\s+Icon",
].join("|") + "$", "i");

export const requiresFilesWithExtensionRegex = RegExp("^" + [
    "Dependency\\s+\\d+",
    "Agent\\s+Animation\\s+File",
    "Egg\\s+Glyph\\s+File",
    "Egg\\s+Glyph\\s+File\\s2",
].join("|") + "$", "i");


export const requiresSpriteRegex = RegExp("^" + [
    "Egg\\s+Glyph\\s+File",
    "Egg\\s+Glyph\\s+File\\s+2",
    "Agent\\s+Animation\\s+File",
    "Web\\s+Icon",
    "Agent\\s+Animation\\s+Gallery",
    "Egg\\s+Gallery\\s+male",
    "Egg\\s+Gallery\\s+female"
].join("|") + "$", "i");


export const requiresGenetics = RegExp("^" + [
    "Genetics\\s+File",
    "Mother\\s+Genetic\\s+File",
    "Father\\s+Genetic\\s+File",
].join("|") + "$", "i");


export async function getC3DSTagValueCompletions(
    thisFileName: string,
    tag: Nullable<string>,
    command: Nullable<string>,
    directory: string,
    commands: Caos2Comment[],
    getFiles: (extensions?: string[]) => Promise<string[]>
): Promise<string[]> {
    if (command) {
        return getCommandValueCompletions(
            thisFileName,
            command.toUpperCase(),
            directory,
            commands,
            getFiles
        );
    }
    if (tag) {
        return getTagValueCompletions(tag, commands, getFiles)
    }
    return [];
}


const nonCaosFiles = ["s16", "c16", "blk", "wav", "catalogue", "att", "mng"];


/**
 * Gets completions for CAOS2Pray commands like Link and Attach
 * @param thisFileName
 * @param command CAOS2Pray command string
 * @param directory the parent directory of this file. (needed for relative paths)
 * @param previousCommands
 * @param getFiles
 */
async function getCommandValueCompletions(
    thisFileName: string,
    command: string,
    directory: string,
    previousCommands: Caos2Comment[],
    getFiles: (extension: string[]) => Promise<string[]>
): Promise<string[]> {
    
    command = command.toUpperCase();
    
    
    if (command === "RSCR") {
        return getFilenameCompletionPaths(directory, await getFiles(["cos", "caos"]));
    }
    
    if (command === "LINK" || command === "JOIN") {
        const caosFiles = (getCommandValues(previousCommands, "LINK"))
            .map((s) => s.toLowerCase());
        caosFiles.push(thisFileName.toLowerCase());
        
        const completionPaths = getFilenameCompletionPaths(directory, await getFiles(["cos", "caos"]));
        
        const out = [];
        
        for (const path of completionPaths) {
            if (caosFiles.indexOf(path.toLowerCase()) < 0) {
                out.push(path);
            }
        }
        return out;
    }
    
    if (command !== "DEPEND" && command !== "ATTACH" && command !== "INLINE") {
        return [];
    }
    
    let files = (await getFiles(nonCaosFiles));
    
    if (command === "DEPEND") {
        files = files
            .map(file => getFileName(file)?.toLowerCase())
            .filter(file => file) as string[];
    } else {
        files = getFilenameCompletionPaths(directory, files);
    }
    
    let previous: string[] = getCommandValues(previousCommands, command)
        .map((s) => s.toLowerCase());
    
    const out: string[] = [];
    for (let file of files) {
        if (!file) {
            continue;
        }
        if (previous.indexOf(file.toLowerCase()) < 0) {
            out.push(file);
        }
    }
    
    return filterNotNull(out);
}


/**
 * Gets completions for Agent PRAY tags
 * @param tag the PRAY tag
 * @param commands
 * @param getFiles get files in workspace by extension
 */
async function getTagValueCompletions(
    tag: string,
    commands: Caos2Comment[],
    getFiles: (extension?: string[]) => Promise<string[]>
): Promise<string[]> {
    
    // Get all inlined depend
    let additionalFiles = getCommandValues(commands, "ATTACH", "INLINE", "DEPEND");
    
    if (requiresGenetics.test(tag)) {
        return getGeneticsFile(filterNotNull(additionalFiles), getFiles);
    }
    
    if (requiresSpriteRegex.test(tag)) {
        return getSpriteTagValueCompletions(tag, filterNotNull(additionalFiles), getFiles)
    }
    
    return [];
}


export async function getGeneticsFile(
    additionalFiles: string[],
    getFiles: (extension: string[]) => Promise<string[]>
): Promise<string[]> {
    const genetics = getFiles(["gen"]);
    const out = [];
    for (const file of (await genetics)) {
        const fileName = getFileName(file);
        if (!fileName) {
            continue;
        }
        const components = fileName.split(".");
        let path = "";
        components.pop();
        const lastComponent = components.pop();
        for (const component of components.slice(0, components.length - 2)) {
            path += "." + component;
            const wildcardPath = path.substring(1) + ".*";
            if (out.indexOf(wildcardPath) < 0) {
                out.push(wildcardPath);
            }
        }
        path += "." + lastComponent;
        
        if (out.indexOf(path) < 0) {
            out.push(path);
        }
    }
    return out;
}


/**
 * Gets Tag values that require a sprite file.
 * Removes extensions for methods where an extension is invalid
 * @param tag the PRAY tag
 * @param inlinedOrDepended any files that have been inlined or depended on (mostly needed for depends on outside files)
 * @param getFiles get files in workspace
 */
async function getSpriteTagValueCompletions(
    tag: string,
    inlinedOrDepended: string[],
    getFiles: (extension: string[]) => Promise<string[]>
): Promise<string[]> {
    
    const requiresExtension = !requiresFileWithoutExtensionRegex.test(tag);
    
    const getFileNameFunc = requiresExtension ? getFileName : getFileNameWithoutExtensions;
    
    let fileNames: string[] = await getAllFileNames(["s16", "c16"], inlinedOrDepended, getFiles);
    
    let out: Nullable<string>[] = inlinedOrDepended
        .filter(fileName => {
            const ext = getExtension(fileName)?.toLowerCase();
            return ext && (ext == "c16" || ext == "s16");
        })
        .map(getFileNameFunc);
    
    if (!requiresExtension) {
        out = out.concat(fileNames.map(getFileNameFunc));
    } else {
        out.concat(fileNames);
    }
    
    return arrayUnique(filterNotNull(out));
}

async function getAllFileNames(extensions: string[], inlinedOrDepended: string[], getFiles: (extensions: string[]) => Promise<string[]>): Promise<string[]> {
    const allFileNames = inlinedOrDepended.map(file => getFileName(file));
    for (let file of (await getFiles(extensions))) {
        file = getFileName(file) ?? file;
        if (allFileNames.indexOf(file) < 0) {
            allFileNames.push(file);
        }
    }
    return filterNotNull(allFileNames);
}


function getCommandValues(commands: Caos2Comment[], ...commandKinds: string[]): string[] {
    commandKinds = commandKinds.map((s) => s.toUpperCase());
    commands = commands
        .filter(c => commandKinds.indexOf(c.command?.toUpperCase() ?? "") >= 0);
    let out: string[] = [];
    for (const command of commands) {
        if (command.command?.toUpperCase() == "INLINE") {
            if (!command.values || command.values.length === 0) {
                continue;
            }
            const CaosParserItem = command.values.length > 1 ? command.values[1] : command.values[0];
            out.push(stripSurroundingQuotes(CaosParserItem.text));
        } else {
            out = out.concat(command.valueAsStrings);
        }
    }
    return out;
}