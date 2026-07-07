import type {Nullable} from "./types.js";


export function arrayDifference<T>(array1: T[], ...array2: T[][]) {
    if (!array2) {
        return array1;
    }
    const others = array2.length === 1
        ? array2[0]
        : array2[0].concat(...array2.slice(1));
    return array1.filter((item) => others.indexOf(item) < 0);
}

export function stringArrayDifferenceCaseInsensitive(array1: string[], ...array2: string[][]) {
    if (!array2) {
        return array1;
    }
    let others = array2.length === 1
        ? array2[0]
        : array2[0].concat(...array2.slice(1));
    others.map(item => item.toLowerCase())
    return array1.filter((item) => others.indexOf(item.toLowerCase()) < 0);
}


export function stringArrayDifferenceCaseSensitive(array1: string[], ...array2: string[][]) {
    return arrayDifference(array1, ...array2);
}

export function arrayContains<T>(array1: T[], value: T): boolean {
    return array1.indexOf(value) >= 0;
}


export function filterNotNull<T>(array: Nullable<T>[]): T[] {
    return array.filter(item => item != null) as T[];
}

export function arrayUnique<T>(array: T[]): T[] {
    const out: T[] = [];
    for (const item of array) {
        if (out.indexOf(item) < 0) {
            out.push(item);
        }
    }
    return out;
}


/**
 * Push item into an object[key][] array
 * @param data object with array values
 * @param key key into object for array
 * @param item item to insert
 * @param matchesExisting Do not insert item if a match is found
 */
export function pushInto<K extends number|string ,V>(data: {[key: number|string]: V[]}, key: K, item: V, matchesExisting: Nullable<(value: V)=>boolean> = null) {
    if (typeof data[key] === "undefined") {
        data[key] = [item];
        return;
    }
    
    if (typeof matchesExisting === "function") {
        if (data[key].findIndex(matchesExisting) < 0) {
            data[key].push(item);
        }
    } else {
        data[key].push(item);
    }
}