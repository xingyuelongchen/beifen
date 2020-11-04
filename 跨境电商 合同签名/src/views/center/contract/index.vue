<!--
Template Name: 查看合同
Create author: qinglong
Create Time  : 2020-06-23
-->
<template>
  <van-swipe :autoplay="3000" indicator-color="black">
    <template v-for="(item,index) in list">
      <van-swipe-item :key="index">
        <van-image width="90%" height="90%" fit="contain" :src="item" />
      </van-swipe-item>
    </template>
  </van-swipe>
</template>
<script>
export default {
  name: "contract",
  data() {
    return {
      list: []
    };
  },
  async created() {
    let { data } = await this.axios("/studyapi/members/contract");
    if (data.code) {
      this.list = data.data;
    }
  }
};
</script>
<style lang='less' scoped>
.van-swipe {
  margin: 0.6rem auto;
}
</style>