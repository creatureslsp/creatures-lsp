import {registerCaosCatalogueReferenceInspections} from "./caos.catalogue-reference-inspections.js";


export const initializeCaosInspections = (() => {
    let didInit = false;
    return () => {
        if (didInit) {
            return;
        }
        didInit = true;
        registerCaosCatalogueReferenceInspections();
    }
})()