
import type { GameVariant } from "./types.d.ts";
import type { ErrorVal } from "./caos-core.mjs";
import type { CaosParseResult } from "./caos-parser.mjs";


/**
 * Validates a CAOS string for errors
 * @param variant game variant [C1, C2, CV, C3, DS]
 * @param caos raw CAOS text
 * @param checkCancelled throw an exception when validation should be cancelled
 */
export function validateCaos(variant: GameVariant, caos: string, checkCancelled?: () => void): ErrorVal[]

/**
 * Validates a CAOS parse result for errors
 * @param variant game variant
 * @param parseResult result of earlier CAOS parse
 * @param checkCancelled throw an exception when validation should be cancelled
 */
export function validateCaos(variant: GameVariant, parseResult: CaosParseResult, checkCancelled?: () => void): ErrorVal[]
