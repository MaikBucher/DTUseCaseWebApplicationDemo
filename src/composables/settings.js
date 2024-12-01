import {reactive} from "vue";

const settings = reactive({wholeSystem: false, currentStep: 0, currentVideo: ''})

export function useSettings() {
    return settings;
}