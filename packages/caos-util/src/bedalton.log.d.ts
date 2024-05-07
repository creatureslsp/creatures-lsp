import {Nullable} from "@bedalton/extension-util"

export namespace com.bedalton.log {
    export abstract class LoggerColor {
        protected constructor();
        
        static BLACK: {} & com.bedalton.log.LoggerColor;
        
        static RED: {} & com.bedalton.log.LoggerColor;
        
        static GREEN: {} & com.bedalton.log.LoggerColor;
        
        static YELLOW: {} & com.bedalton.log.LoggerColor;
        
        static BLUE: {} & com.bedalton.log.LoggerColor;
        
        static MAGENTA: {} & com.bedalton.log.LoggerColor;
        
        static CYAN: {} & com.bedalton.log.LoggerColor;
        
        static WHITE: {} & com.bedalton.log.LoggerColor;
    }
}
export namespace com.bedalton.log {
    export class LoggerBuilder {
        constructor();
        
        withLog(log: (p0: boolean, p1: string, p2: Nullable<com.bedalton.log.LoggerColor>) => void): void;
        
        info(log: (p0: boolean, p1: string, p2: Nullable<com.bedalton.log.LoggerColor>) => void): com.bedalton.log.LoggerBuilder;
        
        warning(log: (p0: string, p1: Nullable<com.bedalton.log.LoggerColor>) => void): com.bedalton.log.LoggerBuilder;
        
        error(log: (p0: string, p1: Nullable<com.bedalton.log.LoggerColor>) => void): com.bedalton.log.LoggerBuilder;
        
        logMemory(log: () => void): com.bedalton.log.LoggerBuilder;
        
        getColor(callback: Nullable<(p0: Nullable<com.bedalton.log.LoggerColor>) => Nullable<string>>): com.bedalton.log.LoggerBuilder;
        
        build(): ILoggerObject;
    }
}

export function setSingleFunctionLogger(logger: (p0: string, p1: string) => void): void;

export function setLogger(logger: ILoggerObject): void;

export interface ILoggerObject {
    log(replace: boolean, message: string, color: Nullable<com.bedalton.log.LoggerColor>): void;
    
    info(replace: boolean, message: string, color: Nullable<com.bedalton.log.LoggerColor>): void;
    
    warning(message: string, color: Nullable<com.bedalton.log.LoggerColor>): void;
    
    error(message: string, color: Nullable<com.bedalton.log.LoggerColor>): void;
    
    getColorPrefix(color: Nullable<com.bedalton.log.LoggerColor>): Nullable<string>;
    
    logMemory(): void;
    
    readonly prependLogType: Nullable<boolean>;
}
