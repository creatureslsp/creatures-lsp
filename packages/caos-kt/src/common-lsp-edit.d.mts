
import type { Range } from "./common-ast-structs.d.ts";


export interface TextEdit extends ITextEdit {
    /**
     * The range of the text document to be manipulated. To insert
     * text into a document create a range where start === end.
     */
    readonly range: Range;

    /**
     * The string to be inserted. For delete operations use an
     * empty string.
     */
    readonly newText: string
}

export declare type ITextEdit = {
}

export declare interface InsertReplaceEdit extends  ITextEdit {
    readonly newText: string;
    readonly insert: Range;
    readonly replace: Range;
}
