<template>
  <div class="page-container">
    <h1>{{ videoTitle }}</h1>
    <div v-if="videoUrl">
      <iframe
          width="560"
          height="315"
          :src="embedUrl"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
      ></iframe>
    </div>
    <div v-else>
      <p>Kein Video-URL unter dem gegebenen Tag gefunden.</p>
    </div>
    <button v-if="nextPage" @click="goToNextPage">Weiter</button>
  </div>
</template>

<script>
export default {
  props: ['tag'],
  data() {
    return {
      videos: {
        DigitalTwins: { url: 'https://www.youtube.com/embed/Rxokn_LLa4k?si=zrczsbRlcvvhR1Sv', nextPage: 'DTDescription' },
        CatenaX: { url: 'https://www.youtube.com/embed/_OG15eOPBPo?si=LHJtAAgFd0g86Wvi', nextPage: 'DTSubmodel' },
        Saving: { url: 'https://www.youtube.com/embed/zg6eqUZoVmg?si=OSC4Uj_tJcgIkTS7', nextPage: 'DTPublish' }
      },
      videoUrl: '',
      nextPage: '',
      videoTitle: ''
    };
  },
  computed: {
    embedUrl() {
      return this.videoUrl;
    }
  },
  methods: {
    goToNextPage() {
      this.$emit('next-step');
      this.$router.push({name: this.nextPage});
    }
  },
  created() {
    console.log('Tag:', this.tag);
    if (this.videos[this.tag]) {
      this.videoUrl = this.videos[this.tag].url;
      this.videoTitle = this.tag;
      this.nextPage = this.videos[this.tag].nextPage;
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