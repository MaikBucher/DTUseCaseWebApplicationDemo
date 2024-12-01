import {reactive} from "vue";

const customer = reactive({isVisible:false})

export function useCustomer() {
    return customer;
}