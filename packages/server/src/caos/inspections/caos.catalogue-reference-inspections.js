import { Is, tok } from "@creatureslsp/caos";
import { registerInspection } from "./inspections.core.js";
export const registerCaosCatalogueReferenceInspections = () => {
    registerInspection([tok("read")], caosCatalogueReadInspection);
};
const caosCatalogueReadInspection = (context, commandCall, errors) => {
    if (commandCall.arguments.length < 2) {
        console.log("Not enough arguments for read command; Found: " + commandCall.arguments.length);
        return;
    }
    /**
     * @var {CaosParserItem} tag
     * @var {CaosParserItem} index
     */
    const [tag, index] = commandCall.arguments
        .map((it) => it.parserItem);
    if (!Is.c2eStringVal(tag) || !Is.intVal(index)) {
        let errors = [];
        if (!Is.c2eStringVal(tag)) {
            errors.push("Tag is not a string: <" + tag?.text + ">; Type: " + tag?.typeToken);
        }
        if (!Is.intVal(index)) {
            errors.push("Index is not an int: <" + index?.text + ">; Type: " + index?.typeToken);
        }
        console.log("Cannot check catalogue read command. Errors: " + errors.join(", "));
        return true;
    }
    const entries = context.getCatalogueEntriesForTag(tag.value);
    if (!entries) {
        return true;
    }
    const counts = entries.map(entry => (entry.valuesCount));
    const max = Math.max(...counts);
    if (max >= index.value || !isFinite(max) || isNaN(max)) {
        return true;
    }
    const error = {
        range: index.textRange,
        message: `Index out of range. Max index for tag ${tag.text} is ${max}`
    };
    errors.push(error);
};
