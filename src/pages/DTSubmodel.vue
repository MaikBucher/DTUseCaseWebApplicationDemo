<template>
  <div class="infoText">
    <p>Nun haben wir ein Digital Twin unseres Produkts. In Catena-X werden Submodels verwendet, um einen Use Case des Digital Twins darzustellen. Dabei kann auch festgelegt werden auf welche Eigenschaften zugegriffen werden kann.
      Nun kannst du einen Submodel für deinen Digital Twin anlegen und Eigenschaften auswählen die dafür bereitgestellt werden sollen. Klicke hierfür links auf die Eigenschaft die du hinzufügen möchtest</p>
  </div>
  <br>
  <div class="dt-definition">
    <div class="product__properties">
      <p>Name des Produkts: {{ productDetails.name }}</p>
      <div v-for="(value, key) in filteredProperties" :key="key" class="property__item" :class="{ added: addedProperties.includes(key) }" @click="togglePropertyInJson(key, value)">
        <p>{{ key }}: {{ value }}</p>
      </div>
    </div>
    <div class="dt_submodel">
      <input
          type="text"
          v-model="submodel.name"
          placeholder="Name des Submodels"
      />
      <div v-for="key in addedProperties" :key="key" class="property__item" @click="togglePropertyInJson(key, productDetails[key])">
        <p>{{ key }}: {{ productDetails[key] }}</p>
      </div>
    </div>
  </div>
  <button @click="nextStep" style="width: 120px; margin: 1rem">Weiter</button>
</template>

<script>
export default {
  name: 'DTDefinition',
  data() {
    return {
      productDetails: null,
      jsonView: '',
      addedProperties: [],
      submodel: {
        name: '',
        properties: []
      }
    };
  },
  created() {
    const storedProduct = localStorage.getItem('productDetails');
    if (storedProduct) {
      this.productDetails = JSON.parse(storedProduct);
      console.log('Product Details:', this.productDetails);
    }
    if (this.$route.query.productDetails) {
      try {
        this.productDetails = JSON.parse(this.$route.query.productDetails);
      } catch (error) {
        console.error('Error parsing productDetails:', error);
      }
    }
  },
  computed: {
    filteredProperties() {
      const result = {};
      Object.entries(this.productDetails).forEach(([key, value]) => {
        if (key !== 'name') result[key] = value;
      });
      return result;
    }
  },
  methods: {
    togglePropertyInJson(key) {
      if (this.addedProperties.includes(key)) {
        this.addedProperties = this.addedProperties.filter(item => item !== key);
      } else {
        this.addedProperties.push(key);
      }
      this.updateJsonView();
    },
    updateJsonView() {
      const jsonData = { name: this.productDetails.name };
      this.addedProperties.forEach((key) => {
        jsonData[key] = this.productDetails[key];
      });
      this.jsonView = JSON.stringify(jsonData, null, 2);
    },
    nextStep() {
      localStorage.setItem('submodel', JSON.stringify(this.submodel));
      this.$router.push({ name: 'VideoPage',  params: { tag: "Saving" } });    }
  },
  watch: {
    addedProperties: {
      handler() {
        this.updateJsonView();
      },
      deep: true,
    },
  },
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
  width: 50%;
}

.property__item {
  margin: 0.5rem;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  cursor: pointer;
  padding: 0.5rem;
  width: calc(100% - 1rem);
}

.property__item.added {
  background-color: #d1ffd6;
  border-left: 4px solid green;
}

.dt_submodel {
  background-color: #68A089;

  width: 50%;
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