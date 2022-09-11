# CAOS Language Extension

This extension adds CAOS language support to Visual Studio Code for the Creatures series of games.

Allows editing of CAOS in any variant (i.e. C1, C2, CV, C3, DS). Variant can be set in settings.   
To quickly navigate to CAOS variant settings, use `cmd+shift+p` or `ctrl+shift+p` to
launch actions, then select "Set CAOS Variant"  
**Variant is set per workspace*

## Features
- CAOS syntax error highlighting
    - Invalid command
    - Unclosed control blocks (i.e. `DOIF`, `ENUM`)
    - Out of variant commands and variables
    - Missing parameters
    - Very basic type checking
- Code completion
    - Commands scoped to type (i.e. Command, R/L value)
    - Subroutine Name
    - Simple game/name variable name completions (does not scope or restrict `NAME` variables to agent class)
    - Named value completion (i.e. type `hung`, select 'Hunger for Protein' and completion inserts corresponding numeric value)
- Hover documentation
- Inlay Hints (can be disabled)
    - Known value names (i.e. Show drive name for corresponding numeric value)
    - Bitflag breakdown (i.e. Append inlay hint `(activatable, mousable)` after `attr 3`)
    - Parameter names (minimum number of parameters before showing hint is configurable)
    - Command return values
- Basic code formatting
- Semantic tokens for use in custom highlighting

## Extension Settings

This extension contributes the following settings:
### General
* `caosScript.maxNumberOfProblems`: Set maximum number of errors to report
* `caosScript.variant`: Workspace CAOS variant. Can be **[C1,C2,CV,C3,DS]**. Default **DS**
* `caosScript.formatting.indentComments`: Indent comments inline with commands except when comment is at start of line
* ### Inlay Hints
* `caosScript.inlayHints.bitFlagValues`: Show inlay hints for bitflag value
* `caosScript.inlayHints.parameterHints.showParameterHints`: Show parameter names before arguments
* `caosScript.inlayHints.parameterHints.minimumParameterCount`: Hide inlay hints for commands with less than this number of parameters
* `caosScript.inlayHints.setvParameterHints`: Show parameter names before SETV like command arguments
* `caosScript.inlayHints.genusName`: Show genus name for known family/genus combinations
* `caosScript.inlayHints.valueName`: Show value name for known integer and string values
* `caosScript.inlayHints.eventScriptName`: Show event script name for known event numbers
* `caosScript.inlayHints.ddePictDimensions`: Show `DDE: PICT` command dimensions from dimension characters
* `caosScript.inlayHints.c1ClasValue`: Show parsed family, genus, and specie from C1 CLAS value
* `caosScript.inlayHints.rvalueReturnValue`: Show return type for rvalue commands
* `caosScript.inlayHints.equality.bitFlagValues`: Show Bitflag value on opposing side of equality operator
* `caosScript.inlayHints.equalityValueName`: Show value name for know integer and string values on opposing side of EQ

## Semantic Tokens
Some CAOS file elements have additional semantic token selectors on them which allows
for more specific styling
### Main Tokens
* `command`: root level command name tokens
* `rvalue`: rvalue command name tokens
* `lvalue`: command tokens when command is used as lvalue
### Token Modifiers
* `command-prefix`: First token in a multi-word command
* `command-suffix`: Last token in a three word command
* `c1-string`: A C1 style bracket string
* `quote-string`: A C2e style quoted string
* `byte-string`: A byte string for things like ANIM
* `not-found`: For a command that cannot be found in context
* `vaxx`: for VAxx and VARx variables
* `ovxx`: for OVxx and OBVx variables
* `mvxx`: For MVxx variables
* `returns-number`: Decorates command words for commands that return a number
* `returns-string`: Decorates command words for commands returning a string
* `returns-variable`: Decorates command word for commands returning a variable
* `returns-agent`: Decorates command word for commands returning an agent
* `agent-constructor`: Decorates agent constructor commands like those starting with `new:`

### How to theme semantic tokens
You can these tokens in settings by using
```JSON
{
  "editor.semanticTokenColorCustomizations": {
    "[Default Dark+]": {
      "*.returns-string:caos": "#ff0011"
    }
  }
}
```

## Known Issues
- Occasionally completion becomes confused.
    - Suggests commands instead of R/L values unexpectedly
    - Suggests known values for values already completed previously
    - Fails to show suggestions for named values
- Navigation fails from `SUBR` names to their usages

## Release Notes

### 0.1.0

Initial release

## Upcoming

* **Rename support:**
    * subroutine (`SUBR`) names
    * `GAME`/`EAME`/`NAME` variable names