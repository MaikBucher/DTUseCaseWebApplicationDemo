<template>
  <div id="app">
    <div class="header">
      <ProgressBar ref="progressBar"/>
    </div>
    <br>
    <router-view @next-step="nextProgressBarStep"></router-view>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";

export default {
  name: 'App',
  components: { ProgressBar },
  methods: {
    nextProgressBarStep() {
      this.$refs.progressBar.nextStep();
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #4EF4AF40;
}
.header {
  padding-bottom: 1rem;
  background-color: #68A089;
}
</style>