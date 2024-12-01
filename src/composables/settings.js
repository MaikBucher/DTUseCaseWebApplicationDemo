import {reactive} from "vue";

const settings = reactive({wholeSystem: false})

export function useSettings() {
    return settings;
}