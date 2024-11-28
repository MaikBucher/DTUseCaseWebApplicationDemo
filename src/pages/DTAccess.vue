<template>
  <div>
    <div class="infoText">
      <p>"Nun "</p>
    </div>
    <br>
    <div class="dt-publish">
      <div class="calls">
        <div
            v-for="(call, index) in calls"
            :key="index"
            class="call-item"
            :class="{ added: addedCalls.map(c => c.name).includes(call.name) }"
            @click="toggleCall(call)"
            :title="call.tooltip"
        >
          <p>{{ call.name }}</p>
        </div>
      </div>
      <div class="selected-calls">
        <div v-for="(call, index) in addedCalls" :key="call.name" class="numbered-call">
          <span class="call-number">{{ index + 1 }}.</span>
          <div class="call-item">
            <p>{{ call.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="run-button">
      <button :disabled="!isRunButtonEnabled" @click="runSequence">Überprüfen</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DTAccess',
  data() {
    return {
      calls: [
        {
          name: "Request Catalog",
          tooltip: "Fordert den Katalog an, um zu sehen welche Assets verfügbar sind, die man anfragen kann."
        },
        {
          name: "Start Data Transfer",
          tooltip: "Startet den Datentransfer, um die Daten zu übertragen. Wie die Daten übertragen werden, wird  von dem Inhaber-EDC bestimmt."
        },
        {
          name: "Get Data",
          tooltip: "Holt die Daten vom Inhaber-EDC ab. Die Daten werden in einem Format übertragen, das der Inhaber-EDC bestimmt."
        },
        {
          name: "Contract Negotiation",
          tooltip: "Inhaber-EDC und Nutzer-EDC verhandeln über die Vertragsbedingungen. Dort wird festgelegt, wer welche Daten verarbeiten darf."
        },
        {
          name: "See Contract Status",
          tooltip: "Dadurch kann der Nutzer-EDC sehen, ob der Vertrag bereits verhandelt wurde oder noch verhandelt wird."
        }
      ],
      addedCalls: [],
      correctOrder: [
        "Request Catalog",
        "Contract Negotiation",
        "See Contract Status",
        "Start Data Transfer",
        "Get Data"
      ],
      currentStep: 0
    };
  },
  computed: {
    isRunButtonEnabled() {
      return this.addedCalls.length === this.correctOrder.length;
    }
  },
  methods: {
    toggleCall(call) {
      const callIndex = this.addedCalls.map(c => c.name).indexOf(call.name);
      if (callIndex !== -1) {
        this.addedCalls.splice(callIndex, 1);
      } else {
        this.addedCalls.push(call);
      }
    },
    nextStep() {
      if (this.currentStep >= 3) {
        this.currentStep = 0;
      } else {
        this.currentStep++;
      }
    },
    runSequence() {
      if (this.isRunButtonEnabled) {
        const addedCallNames = this.addedCalls.map(call => call.name);
        if (JSON.stringify(addedCallNames) === JSON.stringify(this.correctOrder)) {
          if (window.confirm("Die Calls wurden in der korrekten Reihenfolge gemacht. Möchtest du zum nächsten Thema?")) {
            this.$router.push({ name: 'SurveyPage'});
          }
        } else {
          alert("Die Calls sind nicht in der korrekten Reihenfolge. Versuche es nochmal.");
        }
      }
    }
  }
};
</script>

<style scoped>
.dt-publish {
  display: flex;
  gap: 1rem;
}

.calls,
.selected-calls {
  width: 50%;
  padding: 1rem;
  background-color: #68a089;
}

.call-item {
  margin: 0.5rem 0;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 0.5rem;
  width: calc(100% - 1rem);
}

.call-item.added {
  background-color: #d1ffd6;
  border-left: 4px solid green;
}

.numbered-call {
  margin: 0rem 0;
  display: flex;
  align-items: center;
  width: 100%;
}

.call-number {
  flex-shrink: 0;
  margin-right: 0.5rem;
  font-weight: bold;
}

.call-item:hover {
  background-color: #e0e0e0;
}

.run-button {
  text-align: center;
  margin-top: 1rem;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
