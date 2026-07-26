// This entry point is intentionally side-effect-free: importing it never
// loads the command-library data. Call caosInitLib() (from
// "@creatureslsp/caos-kt/caos-init-lib") once, then one of
// useFullCaosLibDefinitions() ("@creatureslsp/caos-kt/caos-libsfile-full"),
// useSlimCaosLibDefinitions() ("@creatureslsp/caos-kt/caos-libsfile-slim"),
// or load your own libjson payload, before calling any other caos-kt
// function.

export declare type GameVariant = "C1" | "C2" | "CV" | "C3" | "DS" | "DS:CE" | "SM";

export type MessageType = 'error' | 'warning' | 'info';

export declare type Nullable<T> = T | null | undefined;

export declare function KtSingleton<T>(): T & (abstract new() => any);