import {clientCapabilities} from "./client-capabilities.js";
import {registerReferencesProvider} from "./register.references.js";
import {registerCompletionProvider} from "./completions.js";
import {registerHoverDocumentationProvider} from "./register.hover-documentation.js";
import {registerGotoDefinitionsProvider} from "./register.goto.js";
import {registerFormattingProvider} from "./register.format.js";
import {registerInlayHints} from "./register.inlay-hints.js";
import {registerSemanticTokenHighlighter} from "./register.semantic-highlighter.js";
import {registerDocumentSymbolsProvider} from "./register.document-symbols.js";
import {registerRenameProvider} from "./register.rename.js";
import {registerSettingsChangeListener} from "./SettingsChangeHandler.js";
import {registerCodeActions} from "./register.code-actions.js";


export async function registerProviders() {
    
    // Settings Changed
    registerSettingsChangeListener(clientCapabilities.hasConfigurationCapability);
    
    // References
    registerReferencesProvider(clientCapabilities.hasReferencesCapability);
    
    // Completion
    registerCompletionProvider(clientCapabilities.hasCompletionCapabilities);
    
    // GOTO
    registerGotoDefinitionsProvider(clientCapabilities.hasGotoDefinitionCapabilities);
    
    // Hover Documentation
    registerHoverDocumentationProvider(clientCapabilities.hasHoverCapabilities);
    
    // Formatting
    registerFormattingProvider(clientCapabilities.hasFormattingCapabilities);
    
    // Inlay Hints
    registerInlayHints(clientCapabilities.hasInlayHintsCapabilities);
    
    // Semantic Tokens
    registerSemanticTokenHighlighter(clientCapabilities.hasSemanticTokensCapabilities);
    
    // Document Symbols
    registerDocumentSymbolsProvider(clientCapabilities.hasSymbolsCapabilities);
    
    // Symbol Rename
    registerRenameProvider(clientCapabilities.hasSymbolRenameCapabilities);
    
    
    // Fix/Actions
    registerCodeActions(clientCapabilities.hasCodeActionCapabilities);

    // // File Rename
    // registerFileRenameProvider(clientCapabilities.hasFileRenameCapabilities);
}