export const CAOS2PRAY_TAGS_REQUIRES_STRING = {
    "Agent Type": false,
    "Agent Animation File": true,
    "Agent Sprite First Image": false,
    "Agent Animation Gallery": true,
    "Agent Animation String": true,
    "Agent Bioenergy Value": false,
    "Web Label": true,
    "Web URL": true,
    "Web Icon": true,
    "Web Icon Base": true,
    "Web Icon Animation String": true,
    "Camera X": false,
    "Camera Y": false,
    "Agent Description": true,
    "Agent Description-es": true,
    "Agent Description-fr": true,
    "Agent Description-it": true,
    "Agent Description-de": true,
    "Agent Description-nl": true,
    "Dependency Count": false,
    "Remove script": true,
    "Script Count": false
}

export const CAOS2PRAY_OFFICIAL_AGENT_TAGS = [
    "Agent Type",
    "Agent Animation File",
    "Agent Sprite First Image",
    "Agent Animation Gallery",
    "Agent Animation String",
    "Agent Bioenergy Value",
    "Web Label",
    "Web URL",
    "Web Icon",
    "Web Icon Base",
    "Web Icon Animation String",
    "Camera X",
    "Camera Y",
    "Agent Description",
    "Agent Description-es",
    "Agent Description-fr",
    "Agent Description-it",
    "Agent Description-de",
    "Agent Description-nl",
    "Dependency Count",
    "Remove script",
    "Script Count"
];


export const CAOS2PRAY_OFFICIAL_AGENT_TAGS_LOWER = CAOS2PRAY_OFFICIAL_AGENT_TAGS
    .map((s) => s.toLowerCase());


export const CAOS2PRAY_SHORT_TAGS_TO_LONG_TAGS = {
    "anim": "Agent Animation String",
    "anim file": "Agent Animation File",
    "desc": "Agent Description",
    "anim start": "Agent Sprite First Image",
    "anim img": "Agent Sprite First Image",
    "anim image": "Agent Sprite First Image",
    "first image": "Agent Sprite First Image",
    "bioenergy": "Agent Bioenergy Value",
}

export const CAOS2PRAY_SHORT_TAGS = Object.keys(CAOS2PRAY_SHORT_TAGS_TO_LONG_TAGS);

export const CAOS2PRAY_LONG_TAGS_TO_SHORT_TAGS = {
    "Agent Animation String": ["anim"],
    "Agent Animation File": ["anim file"],
    "Agent Description": ["desc"],
    "Agent Sprite First Image": ["anim start", "anim img", "anim image", "first image", "firstimage"],
    "Agent Bioenergy Value": ["bioenergy"],
}

const CAOS2PRAY_LONG_TAGS_AND_SHORT_TAG_GROUPS = [
    ["anim", "Agent Animation String"],
    ["anim file", "Agent Animation File"],
    ["Agent Description", "desc"],
    ["anim start", "anim img", "anim image", "first image", "Agent Sprite First Image", "firstimage"],
    ["bioenergy", "Agent Bioenergy Value"],
]

const LONG_AND_SHORT_TAGS = [...CAOS2PRAY_OFFICIAL_AGENT_TAGS, ...CAOS2PRAY_SHORT_TAGS];

const EGG_COMPLETIONS = [
    "Genetics File",
    "Mother Genetic File",
    "Father Genetic File",
    "Egg Glyph File",
    "Egg Glyph File 2",
    "Egg Gallery male",
    "Egg Gallery female"
];

export function getC3DSTagCompletions(minus: string[]): string[] {
    const completions = [...LONG_AND_SHORT_TAGS];
    for (const item of minus) {
        const group = CAOS2PRAY_LONG_TAGS_AND_SHORT_TAG_GROUPS
            .find((list) => list.indexOf(item) >= 0);
        if (group != null) {
            minus = minus.concat(group);
        }
    }
    return completions.filter( item => minus.indexOf(item) < 0);
}

export function isOfficialTag(tag: string): boolean {
    return CAOS2PRAY_OFFICIAL_AGENT_TAGS.indexOf(tag) >= 0 || CAOS2PRAY_SHORT_TAGS.indexOf(tag) >= 0;
}