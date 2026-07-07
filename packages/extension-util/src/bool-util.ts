import type {Nullable} from "./types";


export function getBool(value: string | number | boolean, defaultValue?: Nullable<boolean>): Nullable<boolean> {
    const type = typeof value;
    
    if (type === "boolean") {
        return value as boolean;
    }
    
    if (type === "undefined") {
        return defaultValue;
    }
    
    if (type == "string") {
        switch((value as string).toLowerCase()) {
            case "true":
            case "t":
            case "yes":
            case "y":
                return true;
            case "false":
            case "f":
            case "no":
            case "n":
                return false;
            default:
                return defaultValue;
        }
    }
    
    if (type === "number") {
        return value !== 0;
    }
    
    return defaultValue;
}