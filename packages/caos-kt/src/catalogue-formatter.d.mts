import type {Nullable} from "./types.d.ts";

export declare class CatalogueFormatException extends /* Exception */ Error {
    constructor(message: string, throwable?: Nullable<Error>);
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CatalogueFormatException.$metadata$ {
    const constructor: abstract new () => CatalogueFormatException;
}
export declare function formatCatalogue(text: string, optionsRaw: any): any;

export declare type CatalogueFormatterOptions = {
    forceMinBlankLinesAfterComments: boolean;
    minBlankLinesBetweenEntries?: Nullable<number>;
    maxBlankLinesBetweenEntries?: Nullable<number>;
    minBlankLinesBetweenValues?: Nullable<number>;
    maxBlankLinesBetweenValues?: Nullable<number>;
    insertFinalNewline?: Nullable<boolean>;
    trimFinalNewlines?: Nullable<boolean>;
    newLineChar?: Nullable<string>;
    removeCustomLineSpacing?: Nullable<boolean>;
}