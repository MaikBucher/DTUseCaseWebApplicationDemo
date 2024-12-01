<script setup>
import {useSettings} from "@/composables/settings";

const settings = useSettings()
</script>
<template>
  <div  v-if="settings.wholeSystem" class="dataspace-section">
    <div class="dataspace-header">
      <h3>Catena-X Dataspace</h3>
    </div>
    <div class="dataspace-body">
      <div class="icon-container">
        <img :src="require('@/assets/server.png')" class="server-icon" />
        <p>Dataspace Services</p>
      </div>
    </div>
  </div>
</template>
<style scoped>

.dataspace-section {
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  background-color: white;
  border: 2px solid black;
  border-radius: 50%;
  padding: 20px;
  width: 300px;
  height: 300px;
  position: relative;
}

.dataspace-header {
  top: 40px;
  padding: 0 5px;
  font-weight: bold;
  font-size: 18px;
}

.dataspace-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
}

.server-icon {
  width: 50px;
  height: auto;
  padding-left: 3px;
  padding-right: 3px;
  margin: 10px 0;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
}
</style>