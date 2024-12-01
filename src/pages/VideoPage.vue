<template>
  <div class="page-container">
    <h1>{{ videoTitle }}</h1>
    <div v-if="videoUrl">
      <iframe
          width="840"
          height="472"
          :src="embedUrl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
    </div>
    <div v-else>
      <p>Kein Video-URL unter dem gegebenen Tag gefunden.</p>
    </div>
    <button v-if="nextPage" @click="goToNextPage(this.$router)">Weiter</button>
  </div>
</template>

<script>
import {useSettings} from "@/composables/settings";
import {reactive, ref} from "vue";

export default {
  computed: {
    embedUrl() {
      return this.videoUrl;
    }
  },
  setup() {
    const settings = useSettings();
    const videos = reactive({
      DigitalTwins: { url: 'https://www.youtube.com/embed/Rxokn_LLa4k?si=zrczsbRlcvvhR1Sv', nextPage: 'DTDescription', step: 1 },
      CatenaX: { url: 'https://www.youtube.com/embed/_OG15eOPBPo?si=LHJtAAgFd0g86Wvi', nextPage: 'DTSubmodel', step: 2 },
      Storage: { url: 'https://www.youtube.com/embed/zg6eqUZoVmg?si=OSC4Uj_tJcgIkTS7', nextPage: 'DTStorage', step: 3 },
      Publish: { url: 'https://www.youtube.com/embed/yj_D41BveKc?si=cF4OtENDq84RFS_0', nextPage: 'DTPublish', step: 4 },
      Access: { url: 'https://www.youtube.com/embed/ZDCy3u4pOtQ?si=BiOzebWeBQDmMlHj', nextPage: 'DTAccess', step: 5 }
    })
    const videoUrl = ref('')
    const nextPage = ref('')
    const videoTitle = ref('')
    const currentStep = ref(0)

    function goToNextPage(router) {
      settings.currentStep = currentStep.value;
      console.log('Current step:', currentStep.value);
      router.push({name: this.nextPage});
    }

    return { settings, goToNextPage, videos, videoUrl, nextPage, videoTitle, currentStep };
  },
  created() {
    if (this.videos[this.settings.currentVideo]) {
      console.log('Video tag:', [this.settings.currentVideo]);
      this.videoUrl = this.videos[this.settings.currentVideo].url;
      this.videoTitle = this.settings.currentVideo;
      this.nextPage = this.videos[this.settings.currentVideo].nextPage;
      this.currentStep = this.videos[this.settings.currentVideo].step;
    }
  }
};
</script>
<style>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
}
</style>