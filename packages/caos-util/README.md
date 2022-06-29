# CAOS Utility

A javascript library for parsing CAOS files.

CAOS file parsing returns information about command calls, parser items and basic errors

## Usage

The following commands will parse CAOS text into a parser result

**Parse whole file:**  
To parse an entire file, one would use: `collectors.parseCaos(variant: string, text: string)`  
This will take the parse the entire contents of a CAOS file into a Parse Result object
-------
**Partial File Parse:**  
Parsing can be an expensive operation. `parseCaosNear` limits parsing of CAOS to its nearest containing scope.
This could be the enclosing control statement (i.e. `DOIF`, `REPS`, `ENUM`), subroutine,
or an enclosing script (i.e. `SCRP`, `ISCR`, `RSCR`)

```TypeScript
declare namespace collectors {
    function parseCaosNear(
        variant: GameVariant,
        text: string,
        line: number,
        character: number
    ): collectors.ParseResult;
}
```

```JavaScript
// collectors.parseCaosNear(variant: GameVariant, text: string, line: number, character: number)`:
const script = `
doif 10 eq va00
    outs "10 eq va00"
endi`;
const parseResult = collectors.parseCaosNear('DS', script, 2, 3);
// parseResult.commands.length == 1; 
// parseResult.commands[0].text == "outs "10 eq va00""
```

----------
**Parse within a given range**  
Parsing can be an expensive operation. `parseCaosWithin` limits parsing of a CAOS file to within the range passed in.
Range boundaries must contain only complete commands and control statements.
Range is not changed even if code parsed is invalid.

```TypeScript
declare namespace collectors {
    /**
     * Parse only CAOS code within a given range
     * @param variant
     * @param text
     * @param startLine
     * @param startCharacter
     * @param endLine
     * @param endCharacter
     * @param keepGoing
     */
    function parseCaosWithin(
        variant: GameVariant,
        text: string,
        startLine: number,
        startCharacter: number,
        endLine: number,
        endCharacter: number,
        keepGoing?: () => boolean
    ): collectors.ParseResult;
}
```

Example:

```JavaScript
const script = `
scrp 2 11 10 1
setv va00 0
reps 4
    outs "VA00 == " outv va00
    addv va00 1 
repe`;
const parseResult = collectors.parseCaosNear(
    'DS', script,
    2, 0,
    5, 5
);
// parseResult.commands.length == 3; 
// parseResult.commands[0].text: `outs "VA00 == "`
// parseResult.commands[1].text: `outv va00`
// parseResult.commands[2].text: `addv va00 1`
```

## Data Objects

All objects are immutable classes, and will not serialize properly as JSON.
A utility method exists called `repack(obj: any)` that tries to convert caos-util data objects
to JS objects. It is common for this method to fail.

Object definitions can be viewed in the [type's definition file](./lib/CaosUtil.d.ts)


### Parser Result

The ParseResult object is returned from the main CAOS parsing functions.  
Its typescript definition is as follows:

**collectors.ParseResult**

The object returned from a caos parsing call

```typescript
declare class ParseResult {
    /**
     * The variant used to parse the CAOS file
     */
    get variant(): GameVariant;
    
    /**
     * Array of all parser items.
     * This includes things like Int or string value objects
     * Command tokens are returned as individual tokens with no association between them
     */
    get items(): Array<collectors.ParserItem<any>>;
    
    /**
     * List of Error value objects found while parsing
     */
    get errors(): Array<collectors.ParserItem.ErrorVal>;
    
    /**
     * List of "script" objects which is just a text range and a parser item list
     */
    get scripts(): Array<Script>;
    
    /**
     * List of command calls. This includes both commands, r/l value commands.
     * Commands do not feature nesting or parent context objects
     */
    get commandCalls(): CommandCall[];
    
    /**
     * List of comments found inside the parsed CAOS file
     */
    get comments(): collectors.ParserItem<any>[];
    
    /**
     * List of CAOS2Pray comments found while parsing
     */
    get caos2Comments(): collectors.ParserItem<any>[];
    
    /**
     * Array of parser items that could not be associated with any commands
     */
    get looseTokens(): collectors.ParserItem<any>[];
    
    /**
     * List of equality statements found within the CAOS file.
     */
    get equalityStatements(): Array<collectors.EqualityStatement>;
}
```
------
**collectors.CommandCall**

Data object with information about a specific command call or use

```typescript
declare class CommandCall implements Argument {
    /**
     * The return type of this command
     */
    get type(): number
    
    /**
     * The command's command definition object
     */
    get command(): libs.ICaosCommand;
    
    /**
     * List of arguments for this command
     */
    get arguments(): Array<Argument>;
    
    /**
     * The range of the command tokens. This includes all command tokens in the call such as `new: simp`
     */
    get tokenTextRange(): RangeWithIndex;
    
    /**
     * Whether this command is valid in the variant context it was parsed with
     */
    get inVariant(): boolean;
    
    /**
     * The text range for this command call
     */
    get textRange(): RangeWithIndex;
    
    /**
     * The parser items for the command tokens used
     */
    get tokens(): ParserItem.CommandToken[]
    
    /**
     * Reference to the containing command if any
     */
    get containingCommand(): Nullable<CommandReference>;
    
    /**
     * Whether this command is used within an equality expression such as DOIF or DBG: ASRT
     */
    get inEqualityExpression(): boolean;
    
    /**
     * Its corresponding parameter definition if used within another command
     */
    get parameter(): Nullable<libs.ICaosParameter>;
    
    /**
     * Its root parser item
     */
    get parserItem(): Nullable<collectors.ParserItem<any>>;
    
    /**
     * Its actual text in the file
     */
    get text(): string;
}
```

**Argument**

Information about an argument within a command call
Includes information about its parameter definition, text range and containing command

```typescript
interface Argument extends TextWithRange {
    /**
     * The text range for this command call
     */
    get textRange(): RangeWithIndex;
    
    /**
     * Reference to the containing command if any
     */
    get containingCommand(): Nullable<collectors.CommandReference>;
    
    /**
     * Whether this command is used within an equality expression such as DOIF or DBG: ASRT
     */
    get inEqualityExpression(): boolean;
    
    /**
     * Its corresponding parameter definition if used within another command
     */
    get parameter(): Nullable<libs.ICaosParameter>;
    
    /**
     * Its root parser item
     */
    get parserItem(): Nullable<collectors.ParserItem<any>>;
    
    /**
     * Its actual text in the file
     */
    get text(): string;
    
    /**
     * The return type of this command
     */
    get type(): number
}
```

### Definition Objects

Documentation object for commands, parameters and variables

**libs.ICaosCommand**

Documentation object for a CAOS command
Documentation is specific to a CAOS variant (i.e. C1, C2, etc)

```typescript
declare class ICaosCommand {
    /**
     * The command as an uppercase string
     */
    readonly command: string;
    
    /**
     * List of parameters with their associated documentation
     */
    readonly parameters: Array<libs.ICaosParameter>;
    
    /**
     * Whether this command functions as an LValue
     */
    readonly isLvalue: boolean;
    
    /**
     * Whether this command functions as an RValue
     */
    readonly isRvalue: boolean;
    
    /**
     * Whether this command is simply a block level command (i.e. Not an r/lvalue)
     */
    readonly isCommand: boolean;
    
    /**
     * The return type as a number if any
     */
    get returnTypeId(): number;
    
    /**
     * Value list of known values for the returned value
     */
    get returnValuesListIds(): Nullable<{
        C1: Nullable<number>;
        C2: Nullable<number>;
        CV: Nullable<number>;
        C3: Nullable<number>;
        DS: Nullable<number>;
    }>
    
    /**
     * The name for the return type (i.e. integer, [string], "string", float)
     */
    get returnTypeName(): string;
    
    /**
     * What variants this particular version of the command is valid for
     */
    get variants(): Array<string>;
    
    /**
     * A description of this command and what it does
     */
    get description(): Nullable<string>;
}
```
------------------
**libs.ICaosParameter**

Documentation object for a CAOS command parameter
```typescript

    declare class ICaosParameter {
    
        /**
         * This parameter's index in its parent command call
         */
        get index(): number;
    
        /**
         * The name of this parameter as found in the documentation
         */
        get name(): string;
    
        /**
         * Internal value type id
         */
        get typeId(): number;
    
        /**
         * The parameter type as a "string", float, integer, etc.
         * To differentiate between C1e and C2e strings, the return type will be [string] or "string" respectively
         */
        get type(): string;
    
        /**
         * Internal id for a value list
         */
        get valuesListId(): Nullable<number>;
    
        /**
         * The human-readable name for this parameters known values list
         */
        get valuesListName(): Nullable<string>;
    }
```

---------

**libs.CaosValuesList & libs.CaosValuesListValue**

A representation of a list of known values for a given property  
*i.e. Chemicals for `CHEM` calls*
```typescript
declare class CaosValuesList {
    /**
     * The unofficial name of this value list
     */
    get name(): string;

    /**
     * All known values as libs.ValuesListValue(s)
     */
    get values(): Array<libs.ValuesListValue>;

    /**
     * A short description of what this values list represents.
     * Mostly empty
     */
    get description(): Nullable<string>;

    /**
     * The base values list value this list extends
     * NOTE: usually null or "bool"
     */
    get extensionType(): Nullable<string>;

    /**
     * Tries to find the ValueListValue for a given string
     * @param key
     */
    getValueWithString(key: string): Nullable<libs.ValuesListValue>;

    /**
     * Tries to find the ValueListValue for a given int
     * @param key
     */
    getValueWithInt(key: number): Nullable<libs.ValuesListValue>;

    /**
     * Gets a list of value list value objects matching the bitflag
     * @param bitFlag
     */
    getWithBitFlags(bitFlag: number): Nullable<Array<libs.ValuesListValue>>;

    /**
     * Whether this values list values represent bitflags
     */
    get bitflag(): boolean;
}

```
--------------
**libs.ValuesListValue**

A known value within a value list such as **ATP** in the DS **Chemicals** values list
```typescript

declare class ValuesListValue {
    /**
     * The literal value for this list item
     * Usually a numeral though represented as a string
     * "140" for ATP in the DS Chemical values list
     */
    get value(): string;

    /**
     * The human-readable name of what the value represents
     * I.e. ATP, Protein, Oxygen, Arsenic in the Chemicals values list
     */
    get name(): string;

    /**
     * A description (if any) for this named value
     */
    get description(): Nullable<string>;

    /**
     * The literal value as an int if possible
     */
    get intValue(): Nullable<number>;

    /**
     * Whether value checks should match any value except for this.value
     */
    get negatedValue(): boolean;

    /**
     * Whether checks for value should match anything greater than this.calue
     */
    get greaterThanValue(): boolean;
}
```

---------
**collectors.ParserItem<any>**
The smallest unit in a parsed CAOS file is the ParserItem. 
These units would represent things like the number `110` or the string `"hello"` of a CAOS file

```typescript
/**
 * The smallest unit in a Parsed CAOS file
 * These items **do not** serialize to JSON
 */
declare abstract class ParserItem<T>{
    protected constructor();
    
    /**
     * The actual text of this item
     */
    abstract readonly text: string;
    /**
     * This item's position and range within a CAOS file
     */
    abstract readonly textRange: RangeWithIndex;
    /**
     * Its value as defined by its implementation
     */
    abstract readonly value: T;
    /**
     * The actual type of this value
     * As some values have a meaning in CAOS different then how it is types
     * Example is a char's actual type is an Int (as that is how the game sees it),
     * but its token type is an CHAR
     */
    abstract readonly actualType: number;
    
    /**
     * The token as seen from the parse
     * Not to be confused with actual type
     * @see actualType
     */
    abstract readonly typeToken: number;
    
    abstract equals(other: any): boolean;
}
declare namespace ParserItem {
        class FloatVal extends collectors.ParserItem<number> {}
        class IntVal extends collectors.ParserItem<number> {}
        class CharVal extends collectors.ParserItem<number> {}
        class BinaryVal extends collectors.ParserItem<number> {}
        
        class ByteString extends collectors.ParserItem<string> {}
        
        class C2eStringVal extends collectors.ParserItem<string> {}
        
        class C1eStringVal extends collectors.ParserItem<string> {}
        
        class TokenVal extends collectors.ParserItem<string> {}        
        class EqJoin extends collectors.ParserItem<string> {}        
    
    
        class EqOp extends collectors.ParserItem<string> {}
        
        class DdePictVal extends collectors.ParserItem<Pair<number, number>>{}
            
        class ErrorVal extends collectors.ParserItem<string> {
            /**
             * The error message for this error
             */
            readonly message: string;
            /**
             * The error type code
             */
            readonly type: number
        }
        
        class IndexedVar extends collectors.ParserItem<string> {
            /**
             * The type of this var VAxx, OBVx, MVxx, etc
             */
            readonly type: string;
            /**
             * This vars index `2` for `va02`
             */
            readonly index: number;
        }
        
        class CommandToken extends collectors.ParserItem<string> {
            /**
             * This command word as an integer token
             */
            readonly token: number;
        }
        
        class Comment extends collectors.ParserItem<string> {}
        
        class Caos2Comment extends collectors.ParserItem<string> {
    
            /**
             * Whether this CAOS2Pray comment is a tag
             */
            get isTag(): boolean;
    
            /**
             * The tag name if this is a CAOS2Pray tag
             */
            get tag(): Nullable<string>;
    
    
            /**
             * The command name if this is a CAOS2Pray command
             */
            get command(): Nullable<string>;
    
            /**
             * The list of values for this command or tag
             */
            get values(): string[];
    
            /**
             * Gets the value as an int if possible
             */
            get intValue(): Nullable<number>;
        }
    }

```
