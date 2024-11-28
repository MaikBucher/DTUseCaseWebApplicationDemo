<template>
  <div class="infoText">
    <p>Nun musst du die einzelnen Komponenten dem richtigen Ort zuweisen.<br>Tipp: Denke an das Diagramm vom Video.</p>
  </div>
  <div class="drag-drop-page">
    <div class="container">
      <div class="source">
        <h2>Verfügbare Komponenten</h2>
        <div class="items">
          <div
              v-for="item in sourceItems"
              :key="item.id"
              class="draggable"
              draggable="true"
              @dragstart="handleDragStart(item)"
          >
            <p>{{ item.label }}</p>
          </div>
        </div>
      </div>

      <!-- Drop Zones -->
      <div class="zones">
        <div
            v-for="(zone, index) in dropZones"
            :key="zone.id"
            class="dropzone-wrapper"
        >
          <h2>{{ zone.title }}</h2>
          <div
              class="dropzone"
              @dragover="allowDrop"
              @drop="(event) => handleDrop(event, index)"
          >
            <div
                v-for="item in zone.items"
                :key="item.id"
                class="dropped-item"
                draggable="true"
                @dragstart="handleDragStart(item, index)"
            >
              <p>{{ item.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <button @click="checkAssignment">Überprüfen</button>
  </div>
</template>

<script>
export default {
  name: "DTStorage",
  data() {
    return {
      sourceItems: [
        { id: 1, label: "Digital Twin" },
        { id: 2, label: "Daten des DTs" },
        { id: 3, label: "Submodel" },
      ],
      dropZones: [
        { id: 1, title: "Digital Twin Registry", items: [] },
        { id: 2, title: "Submodel-Server", items: [] },
      ],
      draggedItem: null,
      draggedFromZone: null,
      correctMapping: {
        1: ["Digital Twin"], // Digital Twin Registry
        2: ["Daten des DTs", "Submodel"], // Submodel-Server
      },
    };
  },
  methods: {
    handleDragStart(item, zoneIndex = null) {
      this.draggedItem = item;
      this.draggedFromZone = zoneIndex;
    },
    allowDrop(event) {
      event.preventDefault();
    },
    handleDrop(event, targetZoneIndex) {
      event.preventDefault();

      if (!this.draggedItem) {
        console.warn("No item being dragged");
        return;
      }

      if (this.draggedFromZone === null) {
        this.sourceItems = this.sourceItems.filter(
            (item) => item.id !== this.draggedItem.id
        );
      } else {
        this.dropZones[this.draggedFromZone].items = this.dropZones[
            this.draggedFromZone
            ].items.filter((item) => item.id !== this.draggedItem.id);
      }

      this.dropZones[targetZoneIndex].items.push(this.draggedItem);

      this.draggedItem = null;
      this.draggedFromZone = null;
    },
    checkAssignment() {
      let allCorrect = true;

      this.dropZones.forEach((zone) => {
        const correctItems = this.correctMapping[zone.id];
        const zoneItems = zone.items.map((item) => item.label);

        // Prüfe, ob alle erwarteten Items in der Zone sind
        const missingItems = correctItems.filter(
            (item) => !zoneItems.includes(item)
        );

        // Prüfe, ob unerwartete Items in der Zone sind
        const extraItems = zoneItems.filter(
            (item) => !correctItems.includes(item)
        );

        if (missingItems.length > 0 || extraItems.length > 0) {
          allCorrect = false;
        }
      });

      if (allCorrect) {
        if (window.confirm("Alle Items wurden korrekt zugewiesen! Weiter zur nächsten Seite?")) {
          this.$router.push({ name: 'VideoPage',  params: { tag: "Publish" } });
        }
      } else {
        alert("Leider sind die Komponenten nicht richtig angeordnet. Versuche es nochmal");
      }
    },
  },
};
</script>
<style scoped>

.infoText {
  padding: 0.5rem;
  width: 60%;
  background-color: #68A089;
  color: #ffffff;
  font-size: 18px;
}

.drag-drop-page {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: center; /* Horizontal zentrieren */
  gap: 20px;
}

.source {
  background: #f9f9f9;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
margin: auto}

.zones {
  display: flex;
  flex-direction: row;
  width: 500px;
  gap: 20px;
}

.dropzone-wrapper {
  background: #ffffff;
  padding: 10px;
  border: 1px solid #c5e1a5;
  border-radius: 8px;
}

.dropzone {
  min-height: 150px;
  background: #e8f5e9;
  padding: 10px;
  border: 2px dashed #4caf50;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.draggable,
.dropped-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  cursor: grab;
  margin: auto;
}

.draggable img,
.dropped-item img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 5px;
}

.draggable p,
.dropped-item p {
  margin: 0;
  font-size: 14px;
}
</style>
