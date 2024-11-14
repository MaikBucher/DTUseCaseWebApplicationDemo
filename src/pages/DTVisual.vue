<template>
  <div class="process_div">
    <div class="real_product_div">
      <h1>Dein Produkt: {{ productDetails.name }}</h1>
      <img :src="require('@/assets/parcel.png')" alt="Parcel Image" class="fade-in first">
    </div>
    <img :src="require('@/assets/right-arrow.png')" alt="Arrow Image" style="width: 160px" class="fade-in second">
    <div class="dt_div">
      <h1>Dein Digital Twin: {{ productDetails.name }}</h1>
      <img :src="require('@/assets/digitalTwin.png')" alt="Digital Twin Image" class="fade-in third">
    </div>
  </div>
  <div class="dt_jsonView fade-in fourth">
    <p>Digital Twin als JSON:</p>
    <textarea v-model="jsonView" readonly></textarea>
  </div>
  <button @click="nextStep" style="width: 120px; margin: auto">Weiter</button>
</template>
<script>
export default {
  name: 'DTVisual',
  data() {
    return {
      productDetails: {},
      jsonView: ''
    };
  },
  created() {
    if (this.$route.query.productDetails) {
      try {
        this.productDetails = JSON.parse(this.$route.query.productDetails);
      } catch (error) {
        console.error('Error parsing productDetails:', error);
      }
      this.showJson();
    }
  },
  methods: {
    nextStep() {
      const productDetails = this.productDetails;
      console.log('Product Details: ', productDetails);
      this.$router.push({
        name: 'DTSubmodel',
        query: { productDetails: JSON.stringify(productDetails) }
      });
    },
    showJson() {
      this.jsonView = JSON.stringify(this.productDetails, null, 2);
    }
  }
};
</script>
<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.process_div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.real_product_div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.real_product_div img {
  max-width: 100%;
  height: auto;
  width: 300px;
}

.dt_div img {
  max-width: 100%;
  height: auto;
  width: 250px;
}

.dt_jsonView {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

textarea {
  display: flex;
  width: 40%;
  height: 200px;
  font-family: monospace;
  background-color: #ffffff;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.first {
  animation-delay: 0s;
}

.second {
  animation-delay: 1s;
}

.third {
  animation-delay: 2s;
}

.fourth {
  animation-delay: 3s;
}
</style>