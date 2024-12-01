<script setup>
import {useSettings} from "@/composables/settings";
import {useCustomer} from "@/composables/customer";

const settings = useSettings()
const customer = useCustomer()
</script>
<template>
  <div  v-if="settings.wholeSystem  && customer.isVisible" class="factory-section" >
    <div class="factory-header">
      <p>Kunde</p>
    </div>
    <div class="factory-body">
      <div class="servers">
        <div class="icon-container">
          <img :src="require('@/assets/server.png')" class="server-icon" />
          <p>Externes System</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

.factory-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  padding: 20px;
  min-width: 300px;
  position: relative;
}

.factory-header {
  position: absolute;
  top: 10px;
  padding: 0 5px;
  font-weight: bold;
  font-size: 18px;
}

.factory-body {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 60px;
}

.server-icon {
  width: 50px;
  height: auto;
  padding-left: 3px;
  padding-right: 3px;
  margin: 10px 0;
}

.servers {
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
}
</style>