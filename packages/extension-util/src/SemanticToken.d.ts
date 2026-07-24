import type {RangeWithIndex} from "./ast.js";
import type {Nullable} from "./types.js";

/**
 * Information object for a semantic token
 */
export interface SemanticToken {
    /**
     * The range for this semantic token
     */
    range: RangeWithIndex;
    
    /**
     * The semantic token type
     */
    tokenType: string;
    
    /**
     * List of semantic token modifiers
     */
    modifiers: string[];
    
    /**
     * A description ( only used my Monaco )
     */
    description?: Nullable<string>;
}