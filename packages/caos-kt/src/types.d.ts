export declare type GameVariant = "C1" | "C2" | "CV" | "C3" | "DS" | "DS:CE" | "SM";

export type MessageType = 'error' | 'warning' | 'info';

export declare type Nullable<T> = T | null | undefined;

export declare function KtSingleton<T>(): T & (abstract new() => any);