<template>
  <div class="completion-page">
    <h1>Schulung abgeschlossen!</h1>
    <p>
      Herzlichen Glückwunsch! 🎉<br>
      Du hast die Schulung erfolgreich abgeschlossen. Jetzt geht es weiter mit einem Fragebogen, für meine Auswertung.
    </p>
    <button @click="redirectToSurvey">Zum Fragebogen</button>
  </div>
</template>

<script>
export default {
  name: 'SurveyRedirectPage',
  methods: {
    redirectToSurvey() {
      window.open("https://survey.hdm-stuttgart.de/285889?lang=de", "_blank");
    }
  }
};
</script>

<style>
.completion-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 {
  font-size: 24px;
}

p {
  font-size: 16px;
  color: #333;
  max-width: 600px;
  line-height: 1.5;
}

button {
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>
