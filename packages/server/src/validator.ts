/* eslint-disable eqeqeq */
import {ERROR_TYPE_TYPE_ERROR} from "@bedalton/caos-util/constants";
import {collectors, GameVariant, IParserItem, ParseResult} from "@bedalton/caos-util";
import {hasSubroutine} from "@bedalton/caos-util/subroutines";
import {Diagnostic} from "vscode-languageserver/node";
import {Nullable, offsetRange, sortTextRanges} from "@bedalton/extension-util";
import {DiagnosticSeverity} from "vscode-languageserver-types";
import {TextDocument} from "vscode-languageserver-textdocument";
import {CAOS_LANGUAGE_ID, CaosSettings, getDocumentSettings} from "./settings";
import {connection} from "./connection.vscode";
import {getDocument, getDocuments} from "./documents";
import {Range} from "vscode-languageserver";
import {fileExists} from "./workspace-folders";

const typeHintText = /Unexpected value '([a-zA-Z\d_$]+:[a-zA-Z\d_$]+)'/;

/**
 * Revalidate all known or edited documents
 */
export function revalidateAll() {
    // Revalidate all open text documents
    getDocuments()
        .all()
        .forEach(validateTextDocument);
}


/**
 * Validate document.
 * Run after every document change
 * @param textDocument
 */
export async function validateTextDocument(textDocument: TextDocument): Promise<void> {
    // In this simple example we get the settings for every validate run.
    let settings = await getDocumentSettings(textDocument.uri);
    // The validator creates diagnostics for all uppercase words length 2 and more
    let text = textDocument.getText();
    await runDiagnostic(settings, textDocument.uri, text);
}


/**
 * Validates a CAOS script
 * @param variant
 * @param code
 * @param strictSpaces
 * @param maxNumberOfProblems
 */
async function validateWithConstraints(
    variant: GameVariant,
    code: string,
    strictSpaces?: boolean,
    maxNumberOfProblems: number = Number.MAX_VALUE
): Promise<Diagnostic[]> {
    const parse = (code: string) => {
        return new Promise<ParseResult>((resolve, reject) => {
            if (collectors == null) {
                reject("collectors is null");
                return;
            } else if (collectors?.parseCaos == null) {
                reject("collectors.parseCaos == null");
                return;
            }
            try {
                const result = collectors.parseCaos(variant, code);
                return resolve(result);
            } catch (e) {
                console.error("Failed to parse caos in validateWithConstraints().. " + JSON.stringify(e));
                return reject(e)
            }
        });
    };
    
    let errors: Diagnostic[] = [];
    try {
        errors = await validateParserResult(parse, code, strictSpaces ?? variant === 'C1');
    } catch (e) {
        console.error("Failed to validate parser result; " + JSON.stringify(e));
    }
    if (errors.length <= maxNumberOfProblems) {
        return errors;
    }
    return errors.slice(0, maxNumberOfProblems);
}

/**
 * Check for error in document
 * @param settings
 * @param uri
 * @param text
 */
async function runDiagnostic(settings: CaosSettings, uri: string, text: string) {
    
    const document = getDocument(uri);
    if (document != null && document.languageId != CAOS_LANGUAGE_ID) {
        return [];
    }
    if (!(await fileExists(uri))) {
        return [];
    }
    let diagnostics: Diagnostic[] = await validateWithConstraints(
        settings.variant,
        text,
        settings.strictSpaces ?? false,
        settings.maxNumberOfProblems
    );
    // Send the computed diagnostics to VS Code.
    await connection.sendDiagnostics({uri: uri, diagnostics});
}

async function validateParserResult(
    parse: (code: string) => Promise<ParseResult>,
    text: string,
    strictSpaces: boolean
): Promise<Diagnostic[]> {
    if (text == null) {
        return [];
    }
    if (text.length < 1) {
        return [];
    }
    const parseResult = await parse(text);
    let errorMarkers: Diagnostic[] = parseResult
        .errors
        .filter(e => {
            const message = e.message.toString();
            return !typeHintText.test(message);
        })
        .map(error => {
            const textRange = offsetRange(error.textRange, 0, 0, 1);
            const out: Diagnostic = {
                range: textRange,
                message: error.message,
                severity: error.type == ERROR_TYPE_TYPE_ERROR ? DiagnosticSeverity.Warning : DiagnosticSeverity.Error
            };
            return out;
        });
    const gsubs = parseResult.commandCalls.filter((c) => {
        return c.command.command === 'GSUB' || c.command.command === 'GOTO';
    });
    for (let gsub of gsubs) {
        if (gsub.arguments.length == 1) {
            const arg = gsub.arguments[0];
            const textRange = arg.textRange;
            if (!hasSubroutine(parseResult, arg.text.trim(), textRange.start.line, textRange.start.character)) {
                errorMarkers.push({
                    range: offsetRange(arg.textRange, 0, 1),
                    message: "Subroutine '" + arg.text.trim() + "' was not found in containing script",
                    severity: DiagnosticSeverity.Error
                });
            }
        }
    }
    if (strictSpaces) {
        let last: Nullable<IParserItem<any>> = null;
        for (const item of parseResult.items.sort((a, b) => sortTextRanges(a.textRange, b.textRange))) {
            if (last != null) {
                const error = getSpacingError(last, item);
                if (error != null) {
                    errorMarkers.push(error);
                }
            }
            last = item;
        }
    }
    return errorMarkers;
}


function getSpacingError(last: IParserItem<any>, item: IParserItem<any>): Nullable<Diagnostic> {
    if (last.textRange.end.line !== item.textRange.start.line) {
        return null;
    }
    const distance = item.textRange.start.character - last.textRange.end.character;
    if (distance == 1) {
        return null;
    }
    const line = item.textRange.start.line;
    if (distance == 0) {
        return <Diagnostic>{
            range: <Range>{
                start: {
                    line: line,
                    character: last.textRange.end.character - 1
                },
                end: {
                    line: line,
                    character: item.textRange.start.character
                }
            },
            message: "Missing space",
            severity: DiagnosticSeverity.Error
        };
    }
    return {
        range: <Range>{
            start: {
                line: line,
                character: last.textRange.end.character
            },
            end: {
                line: line,
                character: item.textRange.start.character
            }
        },
        message: "Too many spaces...",
        severity: DiagnosticSeverity.Error
    };
}

