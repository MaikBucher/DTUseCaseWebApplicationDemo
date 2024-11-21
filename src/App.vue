<template>
  <div id="app">
    <div class="header">
      <ProgressBar ref="progressBar"/>
    </div>
    <br>
    <router-view @next-step="nextProgressBarStep"></router-view>
    <br>
    <VisualizationOverview v-if="showVisualization" />
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import VisualizationOverview from "@/components/Visualization.vue";
import router from './router';

export default {
  name: 'App',
  components: { VisualizationOverview, ProgressBar },
  data() {
    return {
      showVisualization: true,
    };
  },
  created() {
    router.beforeEach((to, from, next) => {
      if (to.meta.showVisualization !== undefined) {
        this.showVisualization = to.meta.showVisualization;
      }
      next();
    });
  },
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
  height: 100vh;
  color: #2c3e50;
  background-color: #4EF4AF40;
}
.header {
  padding-bottom: 1rem;
  background-color: #68A089;
}

button {
  background-color: lightgray !important;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: auto;
}

input {
  margin: auto;
  padding: 0.5rem;
  background-color: snow !important;
}
</style>