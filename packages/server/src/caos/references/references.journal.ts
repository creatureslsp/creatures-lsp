import {CommandCall, GameVariant, IParserItem} from "@bedalton/caos-util";
import {DocumentUri, Location} from "vscode-languageserver";
import {Is} from "@bedalton/caos-util/is";
import {getJournalFileNameLocations} from "../../indices/index.caos.journal-files";
import {Nullable, rangesIntersect} from "@bedalton/extension-util";
import {collectCommandUsagesForFile, formatCommandToLocation} from "./references.util";

export async function getJournalFileNameReferences(
    workspaceUri: string,
    targetVariant: GameVariant,
    commandCall: CommandCall,
    closestItem: Nullable<IParserItem<any>>
): Promise<Location[]> {
    if (commandCall.commandArguments.length < 2) {
        return [];
    }
    console.log("CommandCall_Keys: ", Object.keys(commandCall));
    const commandStringUpper = commandCall.command.command.toUpperCase();
    const directoryTypeParserItem = commandCall.commandArguments[0].parserItem;
    if (directoryTypeParserItem == null || !Is.intVal(directoryTypeParserItem)) {
        return [];
    }
    const directoryType = directoryTypeParserItem!.value;
    let entries = getJournalFileNameLocations(workspaceUri, directoryType);
    if (closestItem != null && !rangesIntersect(directoryTypeParserItem.textRange, closestItem.textRange)) {
        return entries.map(link => {
            return {
                range: link.range,
                uri: link.documentUri
            } satisfies Location;
        });
    }
    
    const files: DocumentUri[] = entries
        .map(link => link.documentUri);
    const out: Location[] = [];
    const done: string[] = [];
    for (const file of files) {
        if (done.indexOf(file.toLowerCase()) >= 0) {
            continue;
        }
        
        done.push(file.toLowerCase());
        
        const journalCommandCallsForAnyType = await collectCommandUsagesForFile(
            file,
            targetVariant,
            commandStringUpper,
            true
        );
        
        const journalEntriesForType = journalCommandCallsForAnyType.filter(commandCall => {
            const type = commandCall.commandArguments.length > 0 ? commandCall.commandArguments[0].parserItem : null;
            return type != null && Is.intVal(type) && type.value === directoryType;
        });
        out.concat(formatCommandToLocation(file, journalEntriesForType, 0));
    }
    return out;
}