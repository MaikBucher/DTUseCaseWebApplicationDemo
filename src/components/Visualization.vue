
<template>
  <br>
  <div style="width: 98%; background-color: black; height: 1px; margin: auto"></div>
  <div class="diagram-container">
    <div class="factory-section" :class="{ highlight: highlight === 'leftFactory' }">
      <div class="factory-header">
        <p>Unser System</p>
      </div>
      <div class="factory-body">
        <div class="digital-twins">
          <div class="icon-container">
            <img :src="require('@/assets/digital_twin.png')" class="twin-icon" />
            <p>Digital Twin</p>
          </div>
        </div>
        <div class="servers">
          <div class="icon-container">
            <img :src="require('@/assets/server.png')" class="server-icon"  alt="Digital Twin Registry" />
            <p>Digital Twin Registry</p>
          </div>
          <div class="icon-container">
            <img :src="require('@/assets/server.png')" class="server-icon" />
            <p>Submodel Server</p>
          </div>
        </div>
      </div>
    </div>

    <div class="arrow">
      <div class="arrowhead">
        <span class="arrow-text">EDC</span>
      </div>
      <div class="line"></div>
    </div>

    <div class="dataspace-section" :class="{ highlight: highlight === 'dataspace' }">
      <div class="dataspace-header">
        <h3>Catena-X Dataspace</h3>
      </div>
      <div class="dataspace-body">
        <div class="icon-container">
          <img :src="require('@/assets/server.png')" class="server-icon" />
          <p>Identity Service</p>
        </div>

        <div class="icon-container">
          <img :src="require('@/assets/server.png')" class="server-icon" />
          <p>Discovery Service</p>
        </div>
      </div>
    </div>

    <div class="arrow">
      <div class="line"></div>
      <div class="arrowhead_right">
        <span class="arrow-text">EDC</span>
      </div>
    </div>

    <div class="factory-section" :class="{ highlight: highlight === 'rightFactory' }">
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

.factory-section, .dataspace-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid black;
  padding: 20px;
  min-width: 300px;
  position: relative;
}

.factory-header, .dataspace-header {
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

.dataspace-body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
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
  padding: 20px;
  align-items: center;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
}

.arrow {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.line {
  width: 200px;
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