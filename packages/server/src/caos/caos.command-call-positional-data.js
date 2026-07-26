import { getCommandCallPositionalDataFromParseResult } from "@creatureslsp/caos";
import { parseCaosNear, } from "@creatureslsp/caos/parser";
export function getCommandCallPositionalDataFromDocument(document, position) {
    const { text, variant } = document;
    const { line, character } = position;
    const parseResult = parseCaosNear(variant, text, line, character, false);
    return getCommandCallPositionalDataFromParseResult(parseResult, position);
}
