<template>
  <div class="start-page">
    <h1>Digital Twin Use Case im Catena-X System</h1>
    <p style="width: 50%; margin: auto">Herzlich Willkommen bei diesem Workshop Ihr werdet durch ein Reihe von Aufgaben durchgeleitet. Bei vielen musst du selber zum Ziel kommen. Daher gut aufpassen und die Informationen abspeichern</p>
    <button @click="login">Start</button>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  data() {
    return {
      userId: '',
    };
  },
  methods: {
    login() {
      this.$router.push({ name: 'VideoPage',  params: { tag: "DigitalTwins" } });
    },
  },
};
</script>

<style>
.start-page {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>