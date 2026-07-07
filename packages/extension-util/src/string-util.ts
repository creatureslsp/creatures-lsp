export function stripSurroundingQuotes(string: string): string {
    if (!string) {
        return string;
    }
    return stripIfFrontAndBackOrNull(string, "\"")
        ?? stripIfFrontAndBackOrNull(string, "'")
        ?? string;
}


function stripIfFrontAndBackOrNull(string: string, character: string): string | null {
    if (character.length !== 1) {
        throw new Error("Cannot strip front and back with empty character string or character string length greater than 1");
    }
    if (!string) {
        return null;
    }
    if (string[0] !== character || string[string.length - 1] !== character) {
        return null;
    }
    return string.substring(1, string.length - 2);
}


export function hasSurroundingQuotes(string: string, quote: string = "\"", closeQuote: string = quote): boolean {
    if (!string) {
        return false;
    }
    if (quote.length !== 1) {
        console.error("called hasSurroundingQuotes with non-single-char quote: " + quote);
        return false;
    }
    return string[0] === quote && string[string.length - 1] === closeQuote;
}

export function quoteString(string: string, quote: string = "\"", closeQuote: string = quote): string {
    if (!string) {
        return quote + closeQuote;
    }
    
    if (string === quote) {
        return string + closeQuote;
    }
    
    if (string === quote + closeQuote) {
        return string;
    }
    
    if (quote.length === 1) {
        
        if (string[0] === quote) {
            string = string.substring(1);
        }
        
        if (string.length > 0 && string[string.length - 1] !== closeQuote) {
            closeQuote = "";
        }
        
        return quote + string + closeQuote;
    }
    
    const openQuoteLength = quote.length
    const closeQuoteLength = quote.length;
    
    if (string.indexOf(quote) === 0) {
        string = string.substring(0, quote.length);
    }
    
    if (string.lastIndexOf(closeQuote) === string.length - closeQuote.length) {
        return quote + string + closeQuote;
    }
    
    return quote + string + closeQuote;
}


