<template>
  <div class="diagram-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 400" preserveAspectRatio="xMidYMid meet">

      <g :class="{ highlight: highlight === 'leftFactory' }">
        <rect x="50" y="100" width="250" height="200" fill="none" stroke="black" stroke-width="2" />
        <image :href="require('@/assets/factory.png')" x="50" y="70" width="50" height="25" />

        <image :href="require('@/assets/server.png')" x="80" y="130" width="40" height="40" />
        <image :href="require('@/assets/server.png')" x="80" y="190" width="40" height="40" />

        <image :href="require('@/assets/box.png')" x="140" y="120" width="50" height="50" />
        <image :href="require('@/assets/digital_twin.png')" x="210" y="120" width="50" height="50" />
      </g>

      <line x1="300" y1="200" x2="700" y2="200" stroke="black" stroke-width="2" />
      <polygon points="700,190 720,200 700,210" fill="black" />


      <g :class="{ highlight: highlight === 'dataspace' }">
        <rect x="730" y="100" width="300" height="200" fill="none" stroke="black" stroke-width="2" />
        <text x="770" y="90" font-size="16" fill="black">Catena-X Dataspace</text>

        <image :href="require('@/assets/server.png')" x="760" y="130" width="40" height="40" />
        <image :href="require('@/assets/server.png')" x="830" y="130" width="40" height="40" />
        <image :href="require('@/assets/server.png')" x="760" y="190" width="40" height="40" />
        <image :href="require('@/assets/server.png')" x="830" y="190" width="40" height="40" />
      </g>

      <line x1="1030" y1="200" x2="1300" y2="200" stroke="black" stroke-width="2" />
      <polygon points="1300,190 1320,200 1300,210" fill="black" />

      <g :class="{ highlight: highlight === 'rightFactory' }">
        <rect x="1320" y="100" width="250" height="200" fill="none" stroke="black" stroke-width="2" />
        <image :href="require('@/assets/factory.png')" x="1320" y="70" width="50" height="25" />

        <image :href="require('@/assets/server.png')" x="1350" y="130" width="40" height="40" />
        <image :href="require('@/assets/server.png')" x="1350" y="190" width="40" height="40" />

        <image :href="require('@/assets/digital_twin.png')" x="1410" y="120" width="50" height="50" />
        <image :href="require('@/assets/box.png')" x="1480" y="120" width="50" height="50" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'VisualizationOverview',
  props: {
    highlight: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.diagram-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #b3f3da;
  padding: 20px;
}

svg {
  width: 100%;
  max-width: 1400px;
  height: auto;
}

.highlight {
  stroke: red !important;
  outline: 3px solid yellow;
}
</style>
