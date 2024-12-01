import {reactive} from "vue";

const system = reactive({digitalTwin: undefined, digitalTwinRegistry: [], submodelServer: [], assetServer: undefined})

export function useSystem() {
    return system;
}