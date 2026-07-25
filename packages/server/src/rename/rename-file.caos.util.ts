import {CaosParameter} from "@creatures-lsp/caos/libs";
import {Nullable} from "@creatures-lsp/caos";

export function isFileParameterWithExtension(parameter: CaosParameter, extension: Nullable<string>): boolean {
    
    if (extension == null) {
        return false;
    }
    
    const valuesList = parameter.valuesListName?.toUpperCase();
    if (valuesList == null) {
        return false;
    }
    
    if (valuesList.indexOf("FILE.") !== 0) {
        return false;
    }
    
    const extensions = valuesList.substring(5).split("/");
    
    return extensions[0] !== "JOURNAL" && extensions.indexOf(extension.toUpperCase()) >= 0;
}
