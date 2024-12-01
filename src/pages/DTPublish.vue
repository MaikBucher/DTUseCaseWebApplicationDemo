<template>
  <div>
    <div class="infoText">
      <p>Nun können wir unseren Digital Twin bereitstellen. Dafür müssen wir mit unserem EDC kommunizieren. Auf der linken Seite siehst du die API Calls die wir haben um mit dem EDC zu kommunizieren. Finde nun heraus in welcher Reihenfolge die Calls gemacht werden müssen, um dein Digital Twin bereitzustellen. Tipp: Hovere übere die Calls um zu sehen, was diese tun.</p>
    </div>
    <br>
    <div class="dt-publish">
      <div class="calls">
        <p class="headline">Verfügbare Calls</p>
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
        <p class="headline">Ausgewählte Calls</p>
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
import {useCustomer} from "@/composables/customer";

export default {
  name: 'DTPublish',
  data() {
    return {
      calls: [
        {
          name: "Add Asset",
          tooltip: "Fügt ein neues Asset zum Projekt hinzu. Wie zum Beispiel ein Digital Twin."
        },
        {
          name: "Create Contract Definition",
          tooltip: "Definiert einen neuen Vertrag für das Projekt. Verknüpft Access Policy und Contract Policy miteinander."
        },
        {
          name: "Create Access Policy",
          tooltip: "Erstellt Zugriffsregeln für die Assets. Dort wird festgelegt, wer auf welche Daten zugreifen darf."
        },
        {
          name: "Create Contract Policy",
          tooltip: "Erstellt Richtlinien, die mit dem Vertrag verknüpft sind. Dort wird festgelegt, wer welche Daten verarbeiten darf."
        }
      ],
      addedCalls: [],
      correctOrder: [
        "Add Asset",
        "Create Access Policy",
        "Create Contract Policy",
        "Create Contract Definition"
      ],
      currentStep: 0
    };
  },
  computed: {
    isRunButtonEnabled() {
      return this.addedCalls.length === this.correctOrder.length;
    }
  },
  setup() {
    const customer = useCustomer();
    function nextStep(router) {
      customer.isVisible = true;
      router.push({name: 'VideoPage', params: {tag: "Access"}});
    }
    return {customer, nextStep}
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
    runSequence() {
      if (this.isRunButtonEnabled) {
        const addedCallNames = this.addedCalls.map(call => call.name);
        if (JSON.stringify(addedCallNames) === JSON.stringify(this.correctOrder)) {
          if (window.confirm("Die Calls wurden in der korrekten Reihenfolge gemacht. Möchtest du zum nächsten Thema?")) {
            this.nextStep(this.$router);
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
  justify-content: center;
}

.infoText {
  padding: 0.5rem;
  width: 50%;
  background-color: #68A089;
  color: #ffffff;
  font-size: 18px;
  margin: auto;
}

.headline {
  font-weight: bold;
  font-size: 18px;
  color: white;
}

.calls,
.selected-calls {
  width: 40%;
  padding: 1rem;
  background-color: #68a089;
  min-height: 300px;
}

.call-item {
  margin: 0.5rem 0;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding: 0.5rem;
  width: calc(100%);
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
  color: white;
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
