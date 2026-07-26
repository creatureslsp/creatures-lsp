import { Is } from "@creatureslsp/caos";
import { getJournalFileNameLocations } from "../../indices/index.caos.journal-files.js";
import { rangesIntersect } from "@creatureslsp/extension-util";
import { collectCommandUsagesForFile, formatCommandToLocation } from "./references.util.js";
export async function getJournalFileNameReferences(workspaceUri, targetVariant, commandCall, closestItem) {
    if (commandCall.arguments.length < 2) {
        return [];
    }
    const commandStringUpper = commandCall.commandString.toUpperCase();
    const directoryTypeCaosParserItem = commandCall.arguments[0].parserItem;
    if (directoryTypeCaosParserItem == null || !Is.intVal(directoryTypeCaosParserItem)) {
        return [];
    }
    const directoryType = directoryTypeCaosParserItem.value;
    let entries = getJournalFileNameLocations(workspaceUri, directoryType);
    if (closestItem != null && !rangesIntersect(directoryTypeCaosParserItem.textRange, closestItem.textRange)) {
        return entries.map(link => {
            return {
                range: link.range,
                uri: link.documentUri
            };
        });
    }
    const files = entries
        .map(link => link.documentUri);
    const out = [];
    const done = [];
    for (const file of files) {
        if (done.indexOf(file.toLowerCase()) >= 0) {
            continue;
        }
        done.push(file.toLowerCase());
        const journalCommandCallsForAnyType = await collectCommandUsagesForFile(file, targetVariant, commandStringUpper, true);
        const journalEntriesForType = journalCommandCallsForAnyType.filter(commandCall => {
            const type = commandCall.arguments.length > 0 ? commandCall.arguments[0].parserItem : null;
            return type != null && Is.intVal(type) && type.value === directoryType;
        });
        out.concat(formatCommandToLocation(file, journalEntriesForType, 0));
    }
    return out;
}
