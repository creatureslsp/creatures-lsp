let didInit = false;

/**
 * Idempotent initialization hook, safe to call more than once. Must run
 * once before any other caos-kt call.
 *
 * This does NOT load any command/parameter library data by itself — call
 * one of useFullCaosLibDefinitions(), useSlimCaosLibDefinitions(), or your
 * own libjson loader afterward, depending on which command-library payload
 * you want. (Previously this function called useFullCaosLibDefinitions()
 * internally, which made it impossible to opt into a smaller/custom
 * payload; that coupling has been removed.)
 */
export const caosInitLib = () => {
    if (didInit) {
        return;
    }
    didInit = true;
}

