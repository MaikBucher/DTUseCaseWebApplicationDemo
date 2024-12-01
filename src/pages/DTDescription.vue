<template>
  <div class="dt-description">
    <div class="innerBody">
      <div class="infoText">
        <p>Als erstes kannst du dein bisheriges Produkt hier definieren. Denk daran das ein Produkt Eigenschaften hat wie Farbe, Material, Höhe, usw. Auch kannst du Bauteile anlegen, da diese auch mit aufgeführt werden sollen.</p>
      </div>
      <div class="product">
        <p class="headline">Reales Produkt</p>
        <div class ="product__name">
          <input
              type="text"
              v-model="localProduct.name"
              placeholder="Name des Produkts"
              style="margin: auto; padding: 0.5rem;"
          />
        </div>
        <br>
        <PropertyList :properties="localProduct.properties" @update-properties="updateProperties"/>
      </div>
      <button @click="nextStep(this.$router)" style="width: 120px; margin: auto">Weiter</button>
    </div>
  </div>
</template>
<script scoped>
import PropertyList from "@/components/PropertyList.vue";
import {useProduct} from "@/composables/product";
import {reactive} from "vue";

export default {
  name: 'DTDescription',
  components: { PropertyList },
  setup() {
    const product = useProduct()
    const localProduct = reactive({
      name: '',
      properties: []
    })

    function nextStep(router) {
      product.properties = localProduct.properties;
      product.name = localProduct.name;
      router.push({ name: 'VideoPage',  params: { tag: "CatenaX" } });
    }

    function updateProperties(updatedProperties) {
      console.log('Updated Properties: ', updatedProperties);
      localProduct.properties = updatedProperties;
    }

    return { localProduct, nextStep, product, updateProperties }
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

.headline {
  font-size: 18px;
  font-weight: bold;
  margin: auto;
  padding: 0.5rem;
  color: white;
}

.innerBody {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.infoText {
  padding: 0.5rem;
  width: 50%;
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
