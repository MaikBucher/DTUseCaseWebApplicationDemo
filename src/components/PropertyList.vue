<template>
  <div>
    <div v-for="(property, index) in localProperties" :key="index" class="product__properties">
      <input
          type="text"
          v-model="property.name"
          placeholder="Name der Eigenschaft"
          class="inputProperties"
          @focusout="updateProperties"
      />
      <p style="font-weight: bold; font-size: 24px; color: white">:</p>
      <input
          type="text"
          v-model="property.value"
          placeholder="Wert der Eigenschaft"
          class="inputProperties"
          @focusout="updateProperties"
      />
      <button @click="removeProperty(index)">Entfernen</button>
    </div>
    <button @click="addProperty" style="margin-left: 0px; margin-top: 10px">Eigenschaft hinzufügen</button>
  </div>
</template>

<script>
export default {
  name: 'PropertyList',
  props: {
    properties: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localProperties: [...this.properties]
    };
  },
  watch: {
    properties: {
      handler(newVal) {
        this.localProperties = [...newVal];
      },
      deep: true
    }
  },
  created() {
    this.localProperties.push({ name: '', value: '' });
  },
  methods: {
    addProperty() {
      this.localProperties.push({ name: '', value: '' });
      this.updateProperties();
    },
    removeProperty(index) {
      this.localProperties.splice(index, 1);
      this.updateProperties();
    },
    updateProperties() {
      this.$emit('update-properties', [...this.localProperties]);
    }
  }
};
</script>
<style scoped>
.product__properties {
  display: flex;
  flex-direction: row;
  margin: auto;
  padding-bottom: 1rem;
  justify-content: center;
}

.inputProperties {
  margin: auto;
  width: 200px;
}
</style>