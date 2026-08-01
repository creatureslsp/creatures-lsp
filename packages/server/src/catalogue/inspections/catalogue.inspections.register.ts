import {registerCatalogueAgentHelpInspection} from "./catalogue.inspections.agent-help.js";


export const initializeCatalogueInspections = (() => {
    let didInit = false;
    return () => {
        if (didInit) {
            return;
        }
        didInit = true;
        registerCatalogueAgentHelpInspection();
    }
})()