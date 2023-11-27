/* eslint-disable eqeqeq */
// noinspection JSUnusedLocalSymbols,GrazieInspection

import {GameVariant, com, MessageType, CaosFormatterOptions} from "./caos-util";
import formatter = com.bedalton.creatures.caos.formatter;
import {TextEdit} from "vscode-languageserver-types";


export function format(
    variant: GameVariant,
    text: string,
    settings: CaosFormatterOptions,
    showMessage?: (type: MessageType, message: string) => void
): TextEdit[] {
    try {
        const result = formatter.format(variant, text, settings);
        const lines = text.split('\n').length + 1;
        return [
            <TextEdit>{
                range: {
                    start: {
                        line: 0,
                        character: 0
                    },
                    end: {
                        line: lines,
                        character: Number.MAX_VALUE
                    }
                },
                newText: result.formattedText
            }
        ]
    } catch (e) {
        let message: string = "Formatting failed";
        if (e instanceof Error) {
            message = e.message;
        } else if (typeof e === 'string') {
            message = e;
        }
        if (showMessage) {
            showMessage('error', message);
        }
    }
    return []
}
//
// const blockCommands: { [tok: number]: number[] } = {};
// blockCommands[<number>tok('doif')] = ['elif', 'else', 'endi'].map(c => <number>tok(c));
// blockCommands[<number>tok('elif')] = ['elif', 'else', 'endi'].map(c => <number>tok(c));
// blockCommands[<number>tok('else')] = [<number>tok('endi')];
// blockCommands[<number>tok('enum')] = [<number>tok('next')];
// blockCommands[<number>tok('etch')] = [<number>tok('next')];
// blockCommands[<number>tok('esee')] = [<number>tok('next')];
// blockCommands[<number>tok('epas')] = [<number>tok('next')];
// blockCommands[<number>tok('econ')] = [<number>tok('next')];
// blockCommands[<number>tok('escn')] = [<number>tok('nscn')];
// blockCommands[<number>tok('reps')] = [<number>tok('repe')];
// blockCommands[<number>tok('loop')] = [<number>tok('ever'), <number>tok('untl')];
// blockCommands[<number>tok('subr')] = [<number>tok('retn')];
// const ENDM = tok('endm');
//
// type State = { waiting: number[][] };
//
//
// function constructCommandString(commandCall: CommandCall) {
//     let out = commandCall.command.command.toLowerCase();
//     if (out.startsWith('{')) {
//         out = '';
//     }
//     for (const arg of commandCall.arguments) {
//         if (arg instanceof CommandCall) {
//             out += ' ' + constructCommandString(arg);
//         } else {
//             out += ' ' + arg.text;
//         }
//     }
//     return out.trim();
// }
//
// function formatCommand(changes: TextEdit[], commandCall: CommandCall, tabChar: string, state: State, lineText: string): string {
//     const {command} = (commandCall?.command ?? {command: null});
//     if (commandCall.command != null && !commandCall.command.isCommand) {
//         return '';
//     }
//     if (state.waiting == null) {
//         throw new Error("Formatting state is malformed");
//     }
//     if (command == null) {
//         return '';
//     }
//     const singleToken = command.length === 4 ?
//         <number>tok(command.toLowerCase()) :
//         null;
//     if (state.waiting[0]?.indexOf(singleToken ?? 0) >= 0) {
//         state.waiting.shift();
//     }
//     const matches = lineText.match(/^(\s+)(.*)/) ?? [];
//     const beforeIndent = matches[1];
//     const tab = singleToken !== tok('scrp') && singleToken !== tok('iscr') && singleToken !== tok('rscr') && singleToken !== tok('iscr') ?
//         tabChar.repeat(state.waiting?.length ?? 0)
//         : '';
//
//     if (beforeIndent !== tab) {
//         changes.push(<TextEdit>{
//             range: {
//                 start: {
//                     line: commandCall.textRange.start.line,
//                     character: 0
//                 },
//                 end: {
//                     line: commandCall.textRange.start.line,
//                     character: (beforeIndent ?? '').length
//                 }
//             },
//             newText: tab
//         });
//     }
//
//     const out = constructCommandString(commandCall)
//         .trim();
//     console.log(out);
//     if (singleToken && blockCommands.hasOwnProperty(singleToken)) {
//         state.waiting.unshift(blockCommands[singleToken]);
//     }
//
//     if (commandCall.textRange.start.line != commandCall.textRange.end.line ||
//         out !== lineText.substring(commandCall.textRange.start.character, commandCall.textRange.end.character)
//     ) {
//         const args = commandCall.arguments;
//         let end = commandCall.textRange;
//         if (args.length > 0) {
//             end = args[args.length - 1].textRange;
//         }
//         // console.log(commandCall.text + " " + JSON.stringify(repack(commandCall.textRange)) + ";" + JSON.stringify(repack(end)));
//         changes.push(<TextEdit>{
//             range: {
//                 start: {
//                     line: commandCall.textRange.start.line,
//                     character: commandCall.textRange.start.character
//                 },
//                 end: {
//                     line: end.end.line,
//                     character: end.end.character + 1
//                 }
//             },
//             newText: out
//         });
//     }
//     return tab + out;
// }
//
// function formatComment(
//     changes: TextEdit[],
//     item: ParserItem<any>,
//     tabChar: string,
//     state: State,
//     indentComments: boolean,
//     lineText: string
// ): string {
//     const matches = lineText.match(/^(\s+)(.*)$/) ?? [];
//     const beforeIndent = matches[1];
//     const tab = item.text.trim()
//         ?.startsWith('*#') || item.textRange.start.character == 0 || !indentComments ?
//         '' :
//         tabChar.repeat(state.waiting.length);
//     if (beforeIndent !== tab) {
//         changes.push(<TextEdit>{
//             range: {
//                 start: {
//                     line: item.textRange.start.line,
//                     character: 0
//                 },
//                 end: {
//                     line: item.textRange.start.line,
//                     character: beforeIndent?.length ?? 0
//                 }
//             },
//             newText: tab
//         });
//     }
//     return tab + item.text;
// }
//
// function formatEnd(changes: TextEdit[], settings: FormattingOptions, text: string, lastLine: number, lastColumn: number) {
//     const endingMatchResult = text.match(/(\s+)$/);
//     const endingMatch = endingMatchResult != null ? endingMatchResult[1] : null;
//     if (settings.insertFinalNewline && !settings.trimFinalNewlines) {
//         if (endingMatch == null || endingMatch.indexOf('\n') < 0) {
//             const position = {
//                 line: lastLine,
//                 character: lastColumn + 1
//             };
//             changes.push(<TextEdit>{
//                 range: {
//                     start: position,
//                     end: position
//                 },
//                 newText: '\r\n'
//             });
//         }
//     } else if (settings.trimFinalNewlines && !settings.insertFinalNewline) {
//         if (endingMatch != null && endingMatch.indexOf('\n') >= 0) {
//             let count = 0;
//             let start = 0;
//             let left = endingMatch;
//             while (start >= 0) {
//                 left = endingMatch.substring(start);
//                 count++;
//                 start = endingMatch.indexOf('\n', start);
//             }
//             changes.push(<TextEdit>{
//                 range: {
//                     start: {
//                         line: lastLine,
//                         character: lastColumn + 1
//                     },
//                     end: {
//                         line: lastLine + count,
//                         character: left?.length ?? 0
//                     }
//                 },
//                 newText: ''
//             });
//         }
//     }
// }
//
// export function format(
//     variant: GameVariant,
//     text: string,
//     settings: FormattingOptions,
//     indentComments: boolean,
//     showMessage?: (type: MessageType, message: string) => void): TextEdit[] {
//     if (text.length == 0) {
//         return [];
//     }
//     const result = parseCaos(variant, text);
//     if (result == null) {
//         return [];
//     }
//     if (result.errors.length > 0) {
//         // noinspection JSIgnoredPromiseFromCall
//         if (showMessage) {
//             showMessage('error', 'Cannot format CAOS code with syntax errors');
//         }
//         return [];
//     }
//     const lines = text.split(/\r?\n/);
//     const scripts = result.scripts.sort((a,b) => sortTextRanges(a.textRange, b.textRange));
//     const commandCalls = result.commandCalls.filter(c => c.command.isCommand);
//     let allComments = [...result.comments, ...result.caos2Comments];
//     const allBodyItems = [...allComments, ...commandCalls, ...result.looseTokens]
//         .sort((a: { textRange: RangeWithIndex }, b: { textRange: RangeWithIndex }): number => {
//             return sortTextRanges(a.textRange, b.textRange);
//         });
//     const outOfScriptComments = allComments
//         .filter(c => scripts.find(s => inRange(s.textRange, c.textRange.start.line, c.textRange.start.character)) == null)
//         .sort((a: { textRange: RangeWithIndex }, b: { textRange: RangeWithIndex }): number => {
//             return sortTextRanges(a.textRange, b.textRange);
//         });
//     let changes: TextEdit[] = [];
//     const tabChar = settings.insertSpaces ? ' '.repeat(settings.tabSize) : '\t'.repeat(settings.tabSize);
//     let out = '';
//     let lastLine = -1;
//     if (scripts.length < 1 && outOfScriptComments.length > 0) {
//         out = outOfScriptComments.join("\n");
//     }
//     for (const script of scripts) {
//         const state: State = {waiting: []};
//         const range = toVsRange(script.textRange);
//         const firstLine = range.start.line
//         while (outOfScriptComments.length > 0 && outOfScriptComments[0].textRange.start.line <= firstLine) {
//             out += formatComment(changes, outOfScriptComments.shift()!!, tabChar, state, indentComments, '');
//         }
//         const bodyItems = allBodyItems.filter(({textRange}) => {
//             return inRange(range, textRange.start.line, textRange.start.character);
//         });
//         if (bodyItems.length < 1) {
//             continue;
//         }
//
//         const lastItem = bodyItems[bodyItems.length - 1];
//         if (lastItem instanceof ParserItem.CommandToken && lastItem.token === ENDM) {
//             state.waiting.unshift([ENDM]);
//         }
//         for (const item of bodyItems) {
//             if (lastLine === item.textRange.start.line) {
//                 out += '\r\n';
//             }
//             while (lastLine < item.textRange.start.line) {
//                 out += '\r\n';
//                 lastLine++;
//             }
//             lastLine = item.textRange.start.line;
//             if (item instanceof CommandCall) {
//                 out += formatCommand(changes, item, tabChar, state, '');
//             } else if (item instanceof ParserItem.Comment || item instanceof ParserItem.Caos2Comment) {
//                 out += formatComment(changes, item, tabChar, state, indentComments, '');
//             } else {
//                 out += item.text;
//             }
//         }
//         out += '\r\n';
//     }
//
//     while (outOfScriptComments.length > 0) {
//         out += formatComment(changes, outOfScriptComments.shift()!!, tabChar, {waiting: []}, indentComments, '');
//     }
//
//     out = out.substring(2)
//         .trimEnd();
//     if (settings.insertFinalNewline) {
//         out += '\n';
//     }
//     return [<TextEdit>{
//         range: {
//             start: {
//                 line: 0,
//                 character: 0
//             },
//             end: {
//                 line: lines.length,
//                 character: lines[lines.length - 1].length
//             }
//         },
//         newText: out
//     }];
// }
//
// // static format(variant: GameVariant, text: string, settings: FormattingOptions, indentComments: boolean): TextEdit[] {
// //     const result = parseCaos(variant, text);
// //     if (result == null) {
// //         return [];
// //     }
// //     const lines = text.split(/\r?\n/);
// //     const scripts = result.scripts.sort();
// //     const commandCalls = result.commandCalls.filter (c => c.command.isCommand);
// //     const allBodyItems = [...result.comments, ...result.caos2Comments, ...commandCalls, ...result.looseTokens]
// //         .sort((a: { textRange: TextRange }, b: { textRange: TextRange }): number => {
// //             return sortTextRanges(a.textRange, b.textRange)
// //         });
// //     let changes: TextEdit[] = [];
// //     const tabChar = settings.insertSpaces ? ' '.repeat(settings.tabSize) : '\t'.repeat(settings.tabSize);
// //     let lastLine = -1;
// //     let lastColumn = 0;
// //
// //     for(let i=0; i < lines.length; i++) {
// //         let last = 0
// //         const line = lines[i];
// //         while (true) {
// //             const index = line.indexOf(',', last+1);
// //             if (index < 0) {
// //                 break
// //             }
// //             last = index;
// //             changes.push({
// //                 range: {
// //                     start: {
// //                         line: i,
// //                         character: index
// //                     },
// //                     end: {
// //                         line: i,
// //                         character: index+1
// //                     }
// //                 },
// //                 newText: ''
// //             });
// //         }
// //     }
// //     for (const script of scripts) {
// //         const state: State = {waiting: []};
// //         const range = script.textRange;
// //
// //         const bodyItems = allBodyItems.filter(({textRange}) => {
// //             return inRange(range, textRange.start.line, textRange.start.character);
// //         });
// //         if (bodyItems.length < 1) {
// //             continue;
// //         }
// //
// //         const lastItem = bodyItems[bodyItems.length - 1];
// //         if (lastItem instanceof ParserItem.CommandToken && lastItem.token === ENDM) {
// //             state.waiting.unshift([ENDM]);
// //         }
// //         for (const item of bodyItems) {
// //             let substring = lines.slice(item.textRange.start.line, item.textRange.end.line + 1).join('\r\n');
// //             if (lastLine == item.textRange.start.line) {
// //                 changes.push({
// //                     range: {
// //                         start: {
// //                             line: lastLine,
// //                             character: lastColumn
// //                         },
// //                         end: {
// //                             line: lastLine,
// //                             character: item.textRange.start.character
// //                         }
// //                     },
// //                     newText: '\r\n'
// //                 })
// //                 substring = substring.substring(lastColumn);
// //             }
// //             if (item instanceof CommandCall) {
// //                 formatCommand(changes, item, tabChar, state, substring);
// //             } else if (item instanceof ParserItem.Comment || item instanceof ParserItem.Caos2Comment ) {
// //                 formatComment(changes, item, tabChar, state, indentComments, substring);
// //             } else {
// //                 console.log("Skipping loose token: " + item.value);
// //             }
// //             lastLine = item.textRange.end.line
// //             lastColumn = item.textRange.end.character;
// //         }
// //     }
// //     formatEnd(changes, settings, text, lastLine, lastColumn);
// //
// //     return changes;
// // }