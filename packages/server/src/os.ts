// Method 1: Using the process global variable (Fastest)
export const platform = process.platform;

export const isWin = platform === "win32";
export const isMacOS = platform === "darwin";
export const isLinux = platform === "linux";
export const isUnix = isMacOS || isLinux;