// noinspection JSUnusedGlobalSymbols

import type {KtSingleton, Nullable} from "./types.d.ts";
export declare abstract class LoggerColor {
    protected constructor();
}
export declare namespace LoggerColor {
    abstract class BLACK extends KtSingleton<BLACK.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace BLACK.$metadata$ {
        abstract class constructor extends LoggerColor.$metadata$.constructor {
            private constructor();
        }
    }
    abstract class RED extends KtSingleton<RED.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace RED.$metadata$ {
        abstract class constructor extends LoggerColor.$metadata$.constructor {
            private constructor();
        }
    }
    abstract class GREEN extends KtSingleton<GREEN.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace GREEN.$metadata$ {
        abstract class constructor extends LoggerColor.$metadata$.constructor {
            private constructor();
        }
    }
    abstract class YELLOW extends KtSingleton<YELLOW.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace YELLOW.$metadata$ {
        abstract class constructor extends LoggerColor.$metadata$.constructor {
            private constructor();
        }
    }
    abstract class BLUE extends KtSingleton<BLUE.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace BLUE.$metadata$ {
        abstract class constructor extends LoggerColor.$metadata$.constructor {
            private constructor();
        }
    }
    abstract class MAGENTA extends KtSingleton<MAGENTA.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace MAGENTA.$metadata$ {
        abstract class constructor extends LoggerColor.$metadata$.constructor {
            private constructor();
        }
    }
    abstract class CYAN extends KtSingleton<CYAN.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace CYAN.$metadata$ {
        abstract class constructor extends LoggerColor.$metadata$.constructor {
            private constructor();
        }
    }
    abstract class WHITE extends KtSingleton<WHITE.$metadata$.constructor>() {
        private constructor();
    }
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace WHITE.$metadata$ {
        abstract class constructor extends LoggerColor.$metadata$.constructor {
            private constructor();
        }
    }
}

/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace LoggerColor.$metadata$ {
    const constructor: abstract new () => LoggerColor;
}

export declare class LoggerBuilder {
    constructor();
    withLog(log: (p0: boolean, p1: string, p2: Nullable<LoggerColor>) => void): void;
    info(log: (p0: boolean, p1: string, p2: Nullable<LoggerColor>) => void): LoggerBuilder;
    warning(log: (p0: string, p1: Nullable<LoggerColor>) => void): LoggerBuilder;
    error(log: (p0: string, p1: Nullable<LoggerColor>) => void): LoggerBuilder;
    logMemory(log: () => void): LoggerBuilder;
    getColor(callback: Nullable<(p0: Nullable<LoggerColor>) => Nullable<string>>): LoggerBuilder;
    build(): ILoggerObject;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace LoggerBuilder.$metadata$ {
    const constructor: abstract new () => LoggerBuilder;
}
export declare interface ILoggerObject {
    log(replace: boolean, message: string, color: Nullable<LoggerColor>): void;
    info(replace: boolean, message: string, color: Nullable<LoggerColor>): void;
    warning(message: string, color: Nullable<LoggerColor>): void;
    error(message: string, color: Nullable<LoggerColor>): void;
    getColorPrefix(color: Nullable<LoggerColor>): Nullable<string>;
    logMemory(): void;
    readonly prependLogType?: Nullable<boolean>;
}
export declare function setLogger(logger: ILoggerObject): void;
export declare function setSingleFunctionLogger(logger: (p0: string, p1: string) => void): void;