<script setup>
import SystemVisualization from "@/components/SystemVisualization.vue";
import DataspaceVisualization from "@/components/DataspaceVisualization.vue";
import ClientVisualization from "@/components/ClientVisualization.vue";
import {useSettings} from "@/composables/settings";
import {useCustomer} from "@/composables/customer";
import {useSystem} from "@/composables/system";

const customer = useCustomer()
const settings = useSettings()
const system = useSystem()
</script>
<template>
  <br>
  <div style="width: 98%; background-color: black; height: 1px; margin: auto"></div>
  <div class="diagram-container">
    <SystemVisualization/>

    <div  class="arrow">
      <div v-if="system.digitalTwinRegistry.length > 0" class="arrowhead">
        <span class="arrow-text">EDC</span>
      </div>
      <div v-if="settings.wholeSystem" class="line"></div>
    </div>
    <DataspaceVisualization/>
    <div  v-if="settings.wholeSystem && customer.isVisible" class="arrow">
      <div class="line"></div>
      <div class="arrowhead_right">
        <span class="arrow-text">EDC</span>
      </div>
    </div>
    <ClientVisualization/>
  </div>
</template>



<style scoped>
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

.diagram-container {
  margin: auto;
  display: flex;
  width: 100%;
  padding: 30px;
  justify-content: center;
}

.arrow {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.line {
  width: 100px;
  height: 2px;
  background-color: black;
}

.arrowhead {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0;
  height: 0;
  margin-left: 10px;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-left: 40px solid black;
}

.arrowhead_right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0;
  height: 0;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  border-right: 40px solid black;
}

.arrow-text {
  position: absolute;
  color: black;
  font-size: 16px;
  text-align: center;
  transform: translate(10%, -100%);
}
</style>