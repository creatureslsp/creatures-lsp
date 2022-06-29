/* eslint-disable eqeqeq */
/**
 * Repacks a kotlin data object to a plain JS object
 * Kotlin returns an object with accessors methods, which when converted to JSON
 * or passed through serialization cause unexpected property name.
 * Kotlin objects must be passed through here to convert accessors to plain javascript properties
 *
 * BadPropertyCallback is called when property cannot be processed.
 *
 * @param obj
 * @param previousObjects
 * @param badPropertyCallback (obj: any, propertyName: string, propertyType: string, propertyValue: string) => void;
 */
export function repack<T>(obj: any, previousObjects: any[] = [], badPropertyCallback?: BadRepackPropertyCallback): T {
    const out: any = {};
    
    // Make sure object can have own properties
    if (obj == null || obj.hasOwnProperty == null) {
        return obj;
    }
    
    // Loop through all properties to convert to plain JS object
    for (let prop in obj) {
        
        // Make sure property is a property (here to satisfy IDE
        if (!obj.hasOwnProperty(prop)) {
            continue;
        }
        
        // If property starts with dollar sign, it is not a property we should convert
        if (prop.indexOf('$') >= 0) {
            continue;
        }
        
        let newProp = prop;
        // Find last index of underscore as property names use a format like 'myProp_2`;
        // This function assumes Kotlin property names do not contain an underscore
        // TODO handle kotlin names with underscores
        while (true) {
            let stopIndex = newProp.lastIndexOf('_');
            if (stopIndex > 0) {
                newProp = newProp.substring(0, stopIndex);
            } else {
                break;
            }
        }
        
        // Get the descriptor for this property to find out if it is a getter function
        // If so, get the value and assign it to the parsed property name
        const descriptor = Object.getOwnPropertyDescriptor(obj, prop);
        let property: any;
    
        // If property is a getter, get it
        if (typeof descriptor?.get === 'function') {
            property = descriptor.get();
        } else {
            // Property is not a getter, so just grab it from object
             property = obj[prop];
        }
        
        // Check if property is an array,
        // if it is, map it through the kotlin repack method
        if (Array.isArray(property)) {
            out[newProp] = property.map(item => repack(item));
            continue;
        }
        
        // If property is a basic literal type,
        // assign it to new object and continue
        if (typeof property === 'string' || typeof property === 'number' || typeof property === 'undefined' || typeof property === 'boolean' || typeof property === 'bigint') {
            out[newProp] = property;
            continue;
        }
        
        // If property is null or undefined, map it to undefined
        if (property == null) {
            out[newProp] = undefined;
            continue;
        }
        
        // If property is an object, it needs to be repacked,
        if (typeof property === 'object') {
    
            // But there were problems with circular references,
            // so previous objects are tracked to prevent double repack
            if (previousObjects.indexOf(property) >= 0) {
                continue;
            }
            previousObjects.push(property);
            
            // Repack object
            out[newProp] = repack(property, previousObjects);
        } else {
            // Called if object was not array, literal or object
            if (typeof badPropertyCallback === 'function') {
                badPropertyCallback(obj, newProp, typeof property, property);
            }
            console.error("Failed to understand property: '" + newProp + "'(" + (typeof property) + ") for repack");
        }
    }
    // Add this object to previous object array to prevent re-packing by parent re-pack call if any
    previousObjects.push(obj);
    
    // Finally return this object -- typed if possible
    return <T>out;
}

/**
 * Callback for when a property cannot be handled by repack
 */
export type BadRepackPropertyCallback = (obj: any, propertyName: string, typeName: string, value: string) => void;