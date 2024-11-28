<template>
  <div class="dt-description">
    <div class="innerBody">
      <div class="infoText">
        <p>Als erstes kannst du dein bisheriges Produkt hier definieren. Denk daran das ein Produkt Eigenschaften hat wie Farbe, Material, Höhe, usw. Auch kannst du Bauteile anlegen, da diese auch mit aufgeführt werden sollen.</p>
      </div>
      <div class="product">
        <div class ="product__name">
          <input
              type="text"
              v-model="productName"
              placeholder="Name des Produkts"
              style="margin: auto; padding: 0.5rem;"
          />
        </div>
        <br>
        <PropertyList :properties="properties" @update-properties="updateProperties"/>
      </div>
      <button @click="nextStep" style="width: 120px; margin: auto">Weiter</button>
    </div>
  </div>
</template>
<script scoped>
import PropertyList from "@/components/PropertyList.vue";

export default {
  name: 'DTDescription',
  components: { PropertyList },
  data() {
    return {
      productName: '',
      properties: [
        { name: '', value: '' }
      ]
    };
  },
  methods: {
    updateProperties(updatedProperties) {
      this.properties = updatedProperties;
    },
    nextStep() {
      const productDetails = {
        name: this.productName
      };
      this.properties.forEach(prop => {
        productDetails[prop.name] = prop.value;
      });
      localStorage.setItem('productDetails', JSON.stringify(productDetails));
      this.$router.push({ name: 'VideoPage',  params: { tag: "CatenaX" } });    }
  }
};
</script>
<style lang="scss">
.dt-description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: normal;
}


.innerBody {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.infoText {
  padding: 0.5rem;
  width: 60%;
  background-color: #68A089;
  color: #ffffff;
  font-size: 18px;
  margin: auto;
}

.product {
  padding: 0.5rem;
  margin: auto;
  width: 60%;
  background-color: #68A089;
}

.product__name {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
}
</style>
