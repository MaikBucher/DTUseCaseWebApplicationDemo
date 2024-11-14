<template>
  <div>
    <div v-for="(property, index) in localProperties" :key="index" class="product__properties">
      <input
          type="text"
          v-model="property.name"
          placeholder="Name der Eigenschaft"
          class="inputProperties"
      />
      <p style="font-weight: bold; font-size: 20px">:</p>
      <input
          type="text"
          v-model="property.value"
          placeholder="Wert der Eigenschaft"
          class="inputProperties"
      />
      <button @click="removeProperty(index)" style="width: 40px">-</button>
    </div>
    <button @click="addProperty" style="width: 40px; margin-left: 0px">+</button>
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
  methods: {
    addProperty() {
      this.localProperties.push({ name: '', value: '' });
      this.$emit('update-properties', this.localProperties);
    },
    removeProperty(index) {
      this.localProperties.splice(index, 1);
      this.$emit('update-properties', this.localProperties);
    }
  }
};
</script>

<style scoped>
.product__properties {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  padding-bottom: 1rem;
}

.inputProperties {
  margin: auto;
  width: 200px;
}
</style>