<template>
  <div>
    <div class="infoText">
      <p>Nun können wir unseren Digital Twin bereitstellen. Dafür müssen wir mit unserem EDC kommunizieren. Auf der linken Seite siehst du die API Calls die wir haben um mit dem EDC zu kommunzieren. Finde nun heraus in welcher Reihenfolge die Calls gemacht werden müssen, um dein Digital Twin bereitzustellen. Tipp: Hovere übere die Calls um zu sehen, was diese tun.</p>
    </div>
    <br>
    <div class="dt-publish">
      <div class="calls">
        <div
            v-for="(call, index) in calls"
            :key="index"
            class="call-item"
            :class="{ added: addedCalls.includes(call.name) }"
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
      <button :disabled="!isRunButtonEnabled" @click="runSequence">Run</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DTPublish',
  data() {
    return {
      calls: [
        {
          name: "Add Asset",
          tooltip: "Adds a new asset to the project."
        },
        {
          name: "Create Contract Definition",
          tooltip: "Defines a new contract for the project. Links Access Policies and Contract Policies."
        },
        {
          name: "Create Access Policy",
          tooltip: "Creates access rules for the assets."
        },
        {
          name: "Create Contract Policy",
          tooltip: "Creates policies associated with the contract."
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
        this.currentStep = 0; //
      } else {
        this.currentStep++;
      }
    },
    runSequence() {
      if (this.isRunButtonEnabled) {
        const addedCallNames = this.addedCalls.map(call => call.name);
        if (JSON.stringify(addedCallNames) === JSON.stringify(this.correctOrder)) {
          alert("Calls are in the correct order!");
        } else {
          alert("Calls are not in the correct order.");
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

.call-item.added {
  background-color: #d1ffd6;
  border-left: 4px solid green;
}

.calls,
.selected-calls {
  padding-right: 1rem;
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