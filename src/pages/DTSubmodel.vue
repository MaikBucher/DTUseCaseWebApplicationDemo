<template>
  <div class="infoText">
    <p>Nun haben wir ein Digital Twin unseres Produkts. In Catena-X werden Submodels verwendet, um einen Use Case des
      Digital Twins darzustellen. Dabei kann auch festgelegt werden auf welche Eigenschaften zugegriffen werden kann.
      Nun kannst du einen Submodel für deinen Digital Twin anlegen und Eigenschaften auswählen die dafür bereitgestellt
      werden sollen. Klicke hierfür links auf die Eigenschaft die du hinzufügen möchtest</p>
  </div>
  <br>
  <div class="dt-definition">
    <div class="product__properties">
      <p class="headline">Reales Produkt:<br> {{ product.name }}</p>
      <div v-for="(value, key) in product.properties" :key="key" class="property__item"
           :class="{ added: product.properties.find(item => item === value.name)}" @click="togglePropertyInProduct(key, value)">
        <p>{{ value.name }}:<br>{{ value.value }}</p>
      </div>
    </div>
    <div class="dt_submodel">
      <p class="headline">Submodel</p>
      <input
          type="text"
          v-model="submodel.name"
          placeholder="Name des Submodels"
      />
      <div v-for="(value, key) in submodel.properties" :key="key" class="property__item">
        <p>{{ value.name }}:<br>{{ value.value }}</p>
      </div>
      <button @click="generateSubmodel">Generieren</button>
    </div>
    <div class="dt_submodel">
      <p class="headline">Digital Twin</p>
      <div v-if="submodel.properties.length > 0 && system.digitalTwin !== undefined" class="generated-div">
        <p style="font-weight: bold">Digital Twin:</p>
        <p>Submodel-Name: {{ submodel.name }}</p>
        <div v-for="(value, index) in submodel.properties" :key="index">
          <p>{{ value.name }}: {{ value.value }}</p>
        </div>
      </div>
    </div>
  </div>
  <button @click="nextStep(this.$router)" style="width: 120px; margin: 1rem">Weiter</button>
</template>

<script>
import {useSystem} from "@/composables/system";
import {reactive} from "vue";
import {useProduct} from "@/composables/product";
import {useSettings} from "@/composables/settings";

export default {
  name: 'DTDefinition',
  data() {
    return {
      jsonView: '',
    };
  },
  created() {
    console.log('Product:', this.product);
  },
  setup() {
    const system = useSystem();
    const product = useProduct();
    const settings = useSettings();
    const submodel = reactive({
      name: '',
      properties: []
    });

    function generateSubmodel() {
      system.submodelServer = [];
      system.submodelServer.push(submodel);
      system.digitalTwin = {
        name: 'Digital Twin',
        submodels: system.submodelServer
      };
      console.log('Submodel:', submodel);
    }

    function nextStep(router) {
      system.digitalTwinRegistry.push(system.digitalTwin);
      settings.currentVideo = 'Storage';
      router.push({name: 'VideoPage'});
    }

    function togglePropertyInProduct(key) {
      const index = submodel.properties.findIndex(item => item === product.properties[key]);
      if (index === -1) {
        submodel.properties.push(product.properties[key]);
      } else {
        submodel.properties.splice(index, 1);
      }
    }

    return {system, generateSubmodel, nextStep, submodel, togglePropertyInProduct, product};
  },
};
</script>

<style scoped>
.dt-definition {
  display: flex;
  gap: 1rem;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
}
.infoText {
  padding: 0.5rem;
  width: 50%;
  background-color: #68A089;
  color: #ffffff;
  font-size: 18px;
  margin: auto;
}

.product__properties {
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 1rem;
  gap: 1rem;
  background-color: #68A089;
  width: 30%;
  min-height: 200px;
}

.headline {
  font-size: 18px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  margin: 0;
}

.property__item {
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  justify-content: center;
}

.property__item.added {
  background-color: #d1ffd6;
  border-left: 4px solid green;
}

.dt_submodel {
  background-color: #68A089;
  width: 30%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 200px;
  justify-content: flex-start; /* Neu: Inhalte am oberen Rand ausrichten */
}

textarea {
  display: flex;
  width: 100%;
  height: 100%;
  font-family: monospace;
  background-color: #ffffff;
}

.generated-div {
  background-color: #ffffff;
  padding: 1rem;
  border: 1px solid #ccc;
}
</style>
