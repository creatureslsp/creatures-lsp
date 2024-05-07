import {Nullable} from "./types";


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