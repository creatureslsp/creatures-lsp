import {CAOS2COB_TAGS} from "../../caos2/caos2cob.js";
import {arrayDifference} from "@creatureslsp/extension-util";

const C1_TAGS = CAOS2COB_TAGS.filter((t) => t.variant == null || t.variant === "C1")
    .map(tag => tag.tags[0]);

export function getC1TagCompletions(tagsSoFar: string[]): string[] {
    return arrayDifference(C1_TAGS, tagsSoFar);
}


const C2_TAGS = CAOS2COB_TAGS.filter((t) => t.variant == null || t.variant === "C2")
    .map(tag => tag.tags[0]);

export function getC2TagCompletions(tagsSoFar: string[]): string[] {
    return arrayDifference(C2_TAGS, tagsSoFar);
}