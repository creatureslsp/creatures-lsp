import type {TextEdit} from "./common-ast-structs.d.ts";

export declare type FormatResult<EditReason> = {
    readonly formattedText: string,
    readonly oldText: string,
    readonly edits: TextEdit[],
    readonly editReasons: EditReason[]
}