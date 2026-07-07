// noinspection JSUnusedGlobalSymbols

import type {CatalogueParserItem} from "./catalogue-core.mjs";
import type {Nullable} from "./types.d.ts";

export interface CatalogueCursorData {
    readonly item: CatalogueParserItem;
    readonly position: string;
}

export declare function getCatalogueCursor(text: any, line: number, character: number, includeAfter?: boolean): Nullable<CatalogueCursorData>;
