
<template>
  <div>
    <div class="infoText">
      <p>Was ist ein Digital Twin und woher kommt dieser? Schauen wir uns die Historie des Digital Twins an</p>
    </div>
    <br>
    <div class="timeline_div">
      <v-timeline direction="horizontal">
        <v-timeline-item>
          <template v-slot:opposite>
            2002
          </template>
          <div>
            <div class="text-h6">1. Definition des Digital Twins</div>
            <p>
              "Digital twins (DTs) are virtual representations of real-world entities like production assets, processes, or product."<br>- Marc van Dyck, Dirk Lüttgens, Frank T. Pille, Sebastian Brenk
            </p>
          </div>
        </v-timeline-item>
        <v-timeline-item>
          <template v-slot:opposite>
            2010
          </template>
          <div>
            <div class="text-h6">Erster Einsatz</div>
            <p>
              Der erste erfolgreiche Einsatz eines Digital Twins in der Produktion fand 2010 in der Zusammenarbeit wischen der NASA und Michael Grieves statt.
            </p>
          </div>
        </v-timeline-item>
        <v-timeline-item>
          <template v-slot:opposite>
            2023
          </template>
          <div>
            <div class="text-h6">Catena-X</div>
            <p>
              Seit 2023 werden Digital Twins im Catena-X System (die erste datengesteuerte Wertschöpfungskette) eingesetzt um Daten abzubilden.
            </p>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
    <br>
    <button @click="nextStep" class="button_next">Weiter</button>
  </div>
</template>
<script>
export default {
  name: 'DTHistory',
  data(){
    return{

    }
  },
  methods: {
    nextStep() {
      this.$emit('next-step');
      this.$router.push({ name: 'DTDescription' });
    }
  }
}
</script>
<style scoped>
.timeline_div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
.infoText {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}
.button_next {
  background-color: lightgray;
  width: 120px;
}
</style>