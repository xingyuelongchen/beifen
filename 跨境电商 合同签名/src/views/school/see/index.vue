<!--
Template Name: try and see
Create author: qinglong
Create Time  : 2020-07-08
-->
<template>
  <div>
    <video :src="$route.query.url">当前浏览器不支持播放本视频</video>
  </div>
</template>
<script>
export default {
  name: "see",
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
video {
  width: 100%;
  margin: 2rem auto;
}
</style>