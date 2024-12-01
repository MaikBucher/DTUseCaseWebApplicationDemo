import {reactive} from "vue";

const system = reactive({digitalTwin: undefined, digitalTwinRegistry: [], submodelServer: []})

export function useSystem() {
    return system;
}