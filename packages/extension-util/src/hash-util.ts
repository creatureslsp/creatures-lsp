import type {Nullable} from "./types";


function tempGet(temp: any, key: string): Nullable<any> {
    if (typeof temp === 'object' && temp.hasOwnProperty) {
        if (temp.hasOwnProperty(key)) {
            return temp[key];
        }
    }
    return null;
}

export class HashUtil {
    static get<T>(object: any, path: string): Nullable<T> {
        const keys = path.split('.')
            .map(key => key.trim())
            .filter(key => key.length > 0);
        if (keys.length == 0) {
            return null;
        }
        if (keys.length == 1) {
            return tempGet(object, keys[0]);
        }
        let temp = object;
        const lastIndex = keys.length - 1;
        for(let i=0; i < lastIndex; i++) {
            temp = tempGet(temp, keys[i]);
            if (temp == null) {
                return null;
            }
        }
        return tempGet(temp, keys[lastIndex]);
    }
}