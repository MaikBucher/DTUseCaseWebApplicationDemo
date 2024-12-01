<template>
  <div>
    <ol class="ProgressBar">
      <!-- Progress bar steps -->
      <li class="ProgressBar-step" :class="{ 'is-current': settings.currentStep === 0, 'is-complete': settings.currentStep > 0 }">
        <div class="ProgressBar-icon"></div>
        <span class="ProgressBar-stepLabel">Einführung</span>
      </li>
      <li class="ProgressBar-step" :class="{ 'is-current': settings.currentStep === 1, 'is-complete': settings.currentStep > 1 }">
        <div class="ProgressBar-icon"></div>
        <span class="ProgressBar-stepLabel">Produkt erstellen</span>
      </li>
      <li class="ProgressBar-step" :class="{ 'is-current': settings.currentStep === 2, 'is-complete': settings.currentStep > 2 }">
        <div class="ProgressBar-icon"></div>
        <span class="ProgressBar-stepLabel">DT & Submodel</span>
      </li>
      <li class="ProgressBar-step" :class="{ 'is-current': settings.currentStep === 3, 'is-complete': settings.currentStep > 3 }">
        <div class="ProgressBar-icon"></div>
        <span class="ProgressBar-stepLabel">Speicherung</span>
      </li>
      <li class="ProgressBar-step" :class="{ 'is-current': settings.currentStep === 4, 'is-complete': settings.currentStep > 4 }">
        <div class="ProgressBar-icon"></div>
        <span class="ProgressBar-stepLabel">Bereitstellen</span>
      </li>
      <li class="ProgressBar-step" :class="{ 'is-current': settings.currentStep === 5, 'is-complete': settings.currentStep > 5 }">
        <div class="ProgressBar-icon"></div>
        <span class="ProgressBar-stepLabel">Abrufen</span>
      </li>
      <li class="ProgressBar-step" :class="{ 'is-current': settings.currentStep === 6, 'is-complete': settings.currentStep > 6 }">
        <div class="ProgressBar-icon"></div>
        <span class="ProgressBar-stepLabel">Fragebogen</span>
      </li>
    </ol>
  </div>
</template>

<script>
import {useSettings} from "@/composables/settings";

export default {
  data() {
    return {
    };
  },
  setup() {
    const settings = useSettings();
    return { settings };
  },
};
</script>


<style lang="scss">
$gray: #FFFFFF;
$blue: #2D2D2D;
$white: #DBF1FF;

.ProgressBar {
  margin: 0 auto;
  padding: 1rem;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
}

.ProgressBar-step {
  text-align: center;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:before,
  &:after {
    content: "";
    height: 0.3em;
    background-color: $gray;
    position: absolute;

    width: 100%;
    left: -50%;
    top: 50%;
    transform: translateY(-50%);
    transition: all .25s ease-out;
  }

  &:first-child:before,
  &:first-child:after {
    display: none;
  }

  &:after {
    background-color: $blue;
    width: 0%;
  }

  &.is-complete + &.is-current:after,
  &.is-complete + &.is-complete:after {
    width: 100%;
  }
}

.ProgressBar-icon {
  width: 1em;
  height: 1em;
  background-color: $gray;
  border-radius: 50%;
  max-width: 100%;
  z-index: 10;
  position: relative;
  transition: all .25s ease-out;

  .is-current & {
    background-color: $blue;
  }

  .is-complete & {
    background-color: $blue;
  }
}

.ProgressBar-stepLabel {
  display: block;
  text-transform: uppercase;
  color: $gray;
  position: absolute;
  padding-top: 1.5em;
  width: 100%;
  transition: all .25s ease-out;

  .is-current > &,
  .is-complete > & {
    color: $blue;
  }
}
</style>