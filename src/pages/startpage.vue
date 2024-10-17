<template>
  <div class="start-page">
    <h1>Digital Twin Use Case im Catena-X System</h1>
    <p>Herzlich Willkommen bei diesem Workshop Ihr werdet durch ein Reihe von Aufgaben durchgeleitet. Bei vielen musst du selber zum Ziel kommen. Daher gut aufpassen und die Informatione abspeichern</p>
    <input
        type="text"
        v-model="userId"
        placeholder="User ID"
    />
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
      console.log('Login with user ID: ' + this.userId);
      this.$router.push({ name: 'DTDescription' });
    },
  },
};
</script>

<style>
.start-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>