import {reactive} from "vue";

const product = reactive({name: undefined, properties: []})

export function useProduct() {
    return product;
}