<!--
Template Name: details
Create author: qinglong
Create Time  : 2020-07-12
-->
<template>
  <div>
    <div class="top">
      <div class="img">
        <img :src="content.pic" alt />
      </div>
      <div class="title">
        <span>{{content.title}}</span>
      </div>
      <div class="views">
        <van-icon name="eye-o" />
        浏览量：
        {{content.count}}次
      </div>
    </div>
    <div class="doc">详情介绍</div>
    <div class="body" v-html="content.content"></div>
  </div>
</template>
<script>
export default {
  name: "shopDetails",
  data() {
    return {
      content: {},
      id: null
    };
  },
  async created() {
    if (this.$route.query.id) {
      this.id = this.$route.query.id;
      this.getData();
    } else {
      this.$router.back();
    }
  },
  methods: {
    async getData() {
      let { data } = await this.axios("/studyapi/Renovation/detail", {
        params: { id: this.id }
      });
      if (data.code) {
        this.content = data.data;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.top {
  margin-bottom: 0.2rem;
  background: #fff;
  .img {
    width: 100%;
    height: 3.5rem;
    overflow: hidden;
    overflow-y: auto;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .title {
    padding: 0.4rem;
    text-align: center;
    font-size: 0.3rem;
    span {
      display: inline-block;
      text-align: left;
      color: #000;
    }
  }
  .views {
    font-size: 0.22rem;
    color: #989898;
    text-align: left;
    padding: 0.2rem 0.4rem;
  }
}
.doc {
  font-size: 0.3rem;
  text-align: left;
  padding: 0.2rem;
  color: #000;
  border-bottom: 1px dashed #ccc;
  background: #fff;
}
.body {
  background: #fff;
  min-height: 50vh;
  overflow: hidden;
}
</style>