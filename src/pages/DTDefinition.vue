<template>
  <div class="dt-definition">
    <div class="product__properties">
      <p>Name des Produkts: {{ productDetails.name }}</p>
      <div v-for="(property, index) in productDetails.properties" :key="index" class="property__item" :class="{ added: addedProperties.includes(property.name) }" @click="togglePropertyInJson(property)">
        <p>{{ property.name }}: {{ property.value }}</p>
      </div>
    </div>
    <div class="dt_jsonView">
      <textarea v-model="jsonView" readonly></textarea>
    </div>
  </div>
  <button @click="nextStep" style="width: 120px; margin: 1rem">Weiter</button>
</template>

<script>
export default {
  name: 'DTDefinition',
  data() {
    return {
      productDetails: {
        name: '',
        properties: []
      },
      jsonView: '',
      addedProperties: []
    };
  },
  created() {
    if (this.$route.query.productDetails) {
      this.productDetails = JSON.parse(this.$route.query.productDetails);
      this.updateJsonView();
    }
  },
  methods: {
    updateJsonView() {
      const jsonData = { name: this.productDetails.name };
      this.jsonView = JSON.stringify(jsonData, null, 2);
    },
    togglePropertyInJson(property) {
      const jsonData = JSON.parse(this.jsonView);

      if (this.addedProperties.includes(property.name)) {
        delete jsonData[property.name];
        this.addedProperties = this.addedProperties.filter(item => item !== property.name);
      } else {
        jsonData[property.name] = property.value;
        this.addedProperties.push(property.name);
      }

      this.jsonView = JSON.stringify(jsonData, null, 2);
    }
  }
};
</script>

<style scoped>
.dt-definition {
  display: flex;
  gap: 1rem;
  flex-direction: row;
}

.product__properties {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #68A089;
  width: 33%;
}

.property__item {
  margin: 0.5rem;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;
}

.property__item.added {
  background-color: #d1ffd6;
}

.dt_jsonView {
  width: 66%;
  padding: 1rem;
}

textarea {
  display: flex;
  width: 100%;
  height: 100%;
  font-family: monospace;
  background-color: #ffffff;
}
</style>