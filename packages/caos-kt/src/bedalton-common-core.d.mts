// noinspection JSUnusedGlobalSymbols

import type {Nullable} from "./types.d.ts";

export declare class DateComponents {
    constructor(year: number, monthZeroIndexed: number, day: number, hour?: Nullable<number>, minute?: Nullable<number>, seconds?: Nullable<number>, unix?: Nullable<number>);
    get year(): number;
    get monthZeroIndexed(): number;
    get day(): number;
    get hour(): Nullable<number>;
    get minute(): Nullable<number>;
    get seconds(): Nullable<number>;
    get unix(): Nullable<number>;
    toISO(offsetHours?: Nullable<number>, offsetMinutes?: Nullable<number>): string;
    copy(year?: number, monthZeroIndexed?: number, day?: number, hour?: Nullable<number>, minute?: Nullable<number>, seconds?: Nullable<number>, unix?: Nullable<number>): DateComponents;
    toString(): string;
    hashCode(): number;
    equals(other: Nullable<any>): boolean;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace DateComponents.$metadata$ {
    const constructor: abstract new () => DateComponents;
}
export declare function setLogger(logger: (p0: string, p1: string) => void): void;
export declare interface HasRange {
    readonly lineNumber: number;
    readonly startIndex: number;
    readonly endIndex: number;
}

export declare interface HasSize {
    readonly width: number;
    readonly height: number;
}

export declare function unixToDateComponents(unix: number): DateComponents;

export declare function toUnixTime(dateComponents: DateComponents, offsetHours?: Nullable<number>, offsetMinutes?: Nullable<number>): number;