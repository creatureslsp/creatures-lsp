import {Caos2CobFormat, Caos2CobFormats} from "./caos2cob.formats.js";
import {Caos2ValueType} from "./caos2-util.js";
import {Nullable} from "@creatureslsp/extension-util"

export type Caos2CobTag = {
    tags: string[];
    required?: boolean,
    variant?: "C1" | "C2",
    format?: Caos2CobFormat
    type: Caos2ValueType
}

export const CAOS2COB_TAGS: Caos2CobTag[] = [
    {
        tags: ["Agent Name", "Agent", "C1Name", "C1 Name", "C2Name", "C2 Name"],
        required: true,
        type: Caos2ValueType.STRING,
    },
    {
        tags: ["COB File", "Cob File Name", "COB Name", "COB"],
        required: true,
        type: Caos2ValueType.OUTPUT_COB_FILE,
    },
    {
        tags: ["Quantity Available", "Quantity", "Qty", "Qty Available"],
        format: Caos2CobFormats.NUMBER,
        type: Caos2ValueType.NUMBER,
    },
    {
        tags: ["Thumbnail", "Image", "Picture", "Preview"],
        required: true,
        format: Caos2CobFormats.SINGLE_IMAGE,
        type: Caos2ValueType.SPRITE,
    },
    {
        tags: ["Expiry Date", "Expiry", "Expires", "Expires Date", "Expires On"],
        format: Caos2CobFormats.DATE,
        type: Caos2ValueType.DATE,
    },
    
    //C1
    {
        tags: ["Remover Name", "Remover"],
        variant: "C1",
        type: Caos2ValueType.OUTPUT_COB_FILE,
    },
    {
        tags: ["Quantity Used", "Qty Used", "Used"],
        variant: "C1",
        format: Caos2CobFormats.NUMBER,
        type: Caos2ValueType.NUMBER,
    },
    
    // "C2"
    {
        tags: ["Agent Description", "Description", "Desc", "Agent Desc"],
        variant: "C2",
        type: Caos2ValueType.STRING,
    },
    {
        tags: ["Last Usage Date", "Last Usage"],
        variant: "C2",
        format: Caos2CobFormats.DATE,
        type: Caos2ValueType.DATE,
    },
    {
        tags: ["Reuse Interval", "Interval"],
        variant: "C2",
        format: Caos2CobFormats.NUMBER,
        type: Caos2ValueType.NUMBER,
    },
    
    // "C2" Author
    {
        tags: ["Creation Date", "Created", "Created Date"],
        variant: "C2",
        format: Caos2CobFormats.DATE,
        type: Caos2ValueType.DATE,
    },
    {
        tags: ["Author Name", "Author", "Creator", "Creator Name"],
        variant: "C2",
        type: Caos2ValueType.STRING,
    },
    {
        tags: ["Author Email", "Email", "Creator Email"],
        variant: "C2",
        format: Caos2CobFormats.EMAIL,
        type: Caos2ValueType.EMAIL,
    },
    {
        tags: ["Author URL", "URL", "Website", "Site", "Author Site", "Author Website"],
        variant: "C2",
        format: Caos2CobFormats.URL,
        type: Caos2ValueType.URL,
    },
    {
        tags: ["Version", "V", "Ver"],
        variant: "C2",
        format: Caos2CobFormats.NUMBER,
        type: Caos2ValueType.NUMBER,
    },
    {
        tags: ["Revision", "Rev"],
        variant: "C2",
        format: Caos2CobFormats.NUMBER,
        type: Caos2ValueType.NUMBER,
    },
    {
        tags: ["Comments", "Comment", "Author Comments", "Author Comment"],
        variant: "C2",
        type: Caos2ValueType.STRING,
    }
];


const tagFinder = CAOS2COB_TAGS.map(tag => {
    const joined = tag
        .tags
        .map(t => t.toLowerCase().replace(/\s+/, '\\s+'))
        .join('|');
    return [RegExp("^(" + joined + ")$", "i"), tag];
})

export function findCobTag(tag: string): Nullable<Caos2CobTag> {
    tag = tag.toLowerCase()
    const found = tagFinder.find(([regexp]) => (regexp as RegExp).test(tag));
    return found ? found[1] as Caos2CobTag : null;
}
