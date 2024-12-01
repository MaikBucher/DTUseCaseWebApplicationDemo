import {reactive} from "vue";

const dataspace = reactive({isVisible:false})

export function useDataspace() {
    return dataspace;
}