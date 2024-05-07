import {Range as CaosRange} from "vscode-languageserver-types";
import {Position, Range} from "vscode";

export function toVsCodeRange(range: CaosRange): Range {
    const start = range.start;
    if (start.character < 0) {
        throw new Error("Start character cannot be negative. Found: " + start.character);
    }
    const end = range.end;
    
    if (end.character < 0) {
        throw new Error("End character cannot be negative. Found: " + end.character);
    }
    return new Range(
        new Position(
            start.line,
            start.character
        ),
        new Position(
            end.line,
            end.character
        )
    );
}