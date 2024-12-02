<script setup>
import {useSystem} from "@/composables/system";
import {useProduct} from "@/composables/product";
import {ref, watch} from "vue";

const system = useSystem()
const product = useProduct()
const highlightDigitalTwin = ref(false)


watch(
    () => system.submodelServer.length,
    (newVal, oldVal) => {
      if (newVal !== oldVal) {
        highlightDigitalTwin.value = true;
        setTimeout(() => {
          highlightDigitalTwin.value = false;
        }, 1000);
      }
    }
);
</script>
<template>
  <div v-if="product.name !== undefined" class="legend-section">
    <p style="font-weight: bold; margin-bottom: 20px">Legende:</p>
    <div class="legend-item">
      <div class="line"></div>
      <span>Tatsächlicher Datenaustausch</span>
    </div>
    <div class="legend-item">
      <div class="line dashed"></div>
      <span>Referenzen</span>
    </div>
  </div>
  <div v-if="product.name !== undefined" class="factory-section">
    <div class="factory-header">
      <p>Unser System</p>
    </div>
    <div class="factory-body">
        <div v-if="system.submodelServer.length > 0" class="icon-container" title="Im Digital Twin stehen die Verweise auf die einzelnen befüllten Submodels">
          <img :src="require('@/assets/digital_twin.png')" class="twin-icon"  :class="{ 'highlight': highlightDigitalTwin }" />
          <p>Digital Twin</p>
        </div>
      <div v-if="system.digitalTwinRegistry.length > 0" class="arrow">
        <div class="line dashed"></div>
        <div class="arrowhead"></div>
      </div>
        <div v-if="system.digitalTwinRegistry.length > 0"  class="icon-container" title="In der Digital Twin Registry sind alle Digital Twins mit ihren Referenzen auf ihre Submodel abgespeichert">
          <img :src="require('@/assets/server.png')" class="server-icon" />
          <p>Digital Twin Registry</p>
        </div>
      <div v-if="system.digitalTwinRegistry.length > 0" class="spacer"></div>
    </div>

    <div class="factory-body">
      <div v-if="system.submodelServer.length > 0" class="arrow_vertical" style="margin-right: 70px" >
        <div class="arrowhead_up"></div>
        <div class="line_vertical dashed"></div>
      </div>
      <div v-if="system.digitalTwinRegistry.length > 0" class="spacer"></div>
      <div  v-if="system.digitalTwinRegistry.length > 0" class="arrow_vertical" style="margin-right: 80px">
        <div class="line_vertical"></div>
        <div class="arrowhead_down"></div>
      </div>
      <div v-if="system.digitalTwinRegistry.length > 0" class="spacer"></div>
    </div>

    <div class="factory-body">
      <div class="submodel">
        <div v-if="product.name !== undefined" class="icon-container" title="Dein reales Produkt">
          <img :src="require('@/assets/box.png')" class="twin-icon"  />
          <p>{{product.name}}</p>
        </div>
      </div>
      <div v-if="system.submodelServer.length > 0" class="arrow">
        <div class="line dashed"></div>
        <div class="arrowhead"></div>
      </div>
      <div class="submodel">
        <div v-if="system.submodelServer.length > 0" class="icon-container" title="Dein angelegtes Submodel für dein reales Produkt">
          <img :src="require('@/assets/submodel.png')" class="twin-icon"  :class="{ 'highlight': highlightDigitalTwin }" />
          <p>Submodel</p>
        </div>
      </div>
      <div v-if="system.digitalTwinRegistry.length > 0" class="arrow">
        <div class="line dashed"></div>
        <div class="arrowhead"></div>
      </div>
      <div class="submodel">
        <div v-if="system.digitalTwinRegistry.length > 0" class="icon-container" title="Im Submodel Server sind alle befüllten Submodelle abgespeichert. Die Refrenz im Digital Twin verweist auf das Submodel in diesem Server">
          <img :src="require('@/assets/server.png')" class="server-icon"  />
          <p>Submodel Server</p>
        </div>
      </div>
      <div v-if="system.digitalTwinRegistry.length > 0" class="spacer"></div>
    </div>
  </div>

  <div v-if="system.digitalTwinRegistry.length > 0" class="asset-server-container">
    <div class="left-div">
      <div class="vertical-line">
        <div class="horizontal-line top">
          <div class="arrow-head left"></div>
        </div>
        <div class="center-line"></div>
        <div class="horizontal-line bottom">
          <div class="arrow-head left"></div>
        </div>
      </div>
    </div>

    <div class="right-div">
      <div v-if="system.submodelServer.length > 0" class="icon-container" style="margin: 0" title="Im Catalog sind alle Asset gespeichert der der EDC kennt, mit den Contract und Access Defintions">
        <img :src="require('@/assets/server.png')" class="twin-icon"  />
        <p>Catalog</p>
      </div>
      <div class="spacer" style="width: 0; height:10px"></div>
      <div v-if="system.submodelServer.length > 0" class="arrow_vertical" style="align-self: center; margin: 0">
        <div class="arrowhead_up"></div>
        <div class="line_vertical" style="height: 60px; margin: 0"></div>
      </div>
      <div class="arrow-line">
        <div class="horizontal-line-right"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.highlight {
  animation: grow-shrink 1s ease-in-out;
}

@keyframes grow-shrink {
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.5);
    filter: brightness(1.5);
  }
  100% {
    transform: scale(1);
    filter: brightness(1);
  }
}

.legend-section {
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  background-color: white;
  height: fit-content;
  border: 2px solid black;
  padding: 10px;
  position: relative;
  margin-right: 20px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.factory-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: white;
  border: 2px solid black;
  padding: 10px;
  min-width: 300px;
  position: relative;
}

.factory-header {
  position: relative;
  margin-bottom: 30px;
  align-self: center;
  padding: 0 5px;
  font-weight: bold;
  font-size: 18px;
}

.factory-body {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
}


.factory-icon, .server-icon, .product-icon, .twin-icon {
  width: 50px;
  height: auto;
  padding-left: 3px;
  padding-right: 3px;
  margin: 10px 0;
}

.digital-twins, .servers {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
}

.icon-container {
  min-width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
}

.spacer {
  width: 140px;
}

.arrow {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.arrow_vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.line {
  width: 50px;
  height: 2px;
  background-color: black;
}

.line.dashed {
  background-color: transparent;
  border: 1px dashed black;
}

.line_vertical {
  width: 2px;
  height: 25px;
  background-color: black;
}

.line_vertical.dashed {
  background-color: transparent;
  border-left: 2px dashed black;
}


.arrowhead {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 10px solid black;
}

.arrowhead_up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid black;
}
.arrowhead_down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid black;
}

.arrow-text {
  position: absolute;
  color: black;
  font-size: 16px;
  text-align: center;
  transform: translate(10%, -100%);
}


/* Asset Server Container */

.asset-server-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: -160px;
}

.left-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  position: relative;
  margin-top: 60px;
}

.vertical-line {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 200px;
  width: 50px;
}

.center-line {
  width: 2px;
  background-color: black;
  flex-grow: 1;
}

.horizontal-line {
  display: flex;
  align-items: center;
  position: relative;
  width: 40px;
  height: 2px;
  background-color: black;
}

.horizontal-line.top {
  position: absolute;
  top: 0;
}

.horizontal-line.bottom {
  position: absolute;
  bottom: 0;
}

.arrow-head {
  position: absolute;
  width: 0;
  height: 0;
  border: 6px solid transparent;
}

.arrow-head.left {
  border-right: 10px solid black;
  left: -12px;
}

.arrow-head.right {
  border-left: 10px solid black;
  right: -12px;
}

.right-div {
  display: flex;
  flex-direction: column;
  align-self: start;
  position: relative;
}

.arrow-line {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120%;
}

.horizontal-line-right {
  width: 100%;
  height: 2px;
  background-color: black;
  position: relative;
}

.arrow-head.right {
  margin-top: -2px;
}

</style>