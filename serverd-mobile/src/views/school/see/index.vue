<!--
Template Name: try and see
Create author: qinglong
Create Time  : 2020-07-08
-->
<template>
  <div>
    <video
      ref="video"
      :src="play.url"
      preload="load"
      controls="controls"
      playsinline="true"
      webkit-playsinline="true"
    >
      <source :src="play.url" />
    </video>
  </div>
</template>
<script>
export default {
  name: "see",
  data() {
    return { play: { url: null } };
  },
  async created() {
    if (this.$route.query.url) {
      this.play.url = this.$route.query.url;
    }
  }
};
</script>
<style lang='less' scoped>
video {
  width: 100%;
  margin: 2rem auto;
}
</style>