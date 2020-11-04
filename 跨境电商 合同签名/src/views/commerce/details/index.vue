<!--
Template Name: 详情内容
Create author: qinglong
Create Time  : 2020-06-19
-->
<template>
  <div class="box">
    <div class="title">
      <span>{{content.title}}</span>
    </div>
    <div class="date">{{content.create_time}}</div>
    <div class="content" v-html="content.content"></div>
    <div class="ohter">
      <div @click="toDetails(list.pre_info)">上一篇： {{list.pre_info && list.pre_info.title || '暂无'}}</div>
      <div @click="toDetails(list.next_info)">下一篇：{{list.next_info && list.next_info.title || '暂无'}}</div>
    </div>
    <div class="ohter">
      <div>最新推荐：</div>
      <template v-for="(item,index) in list.topping">
        <div :key="index" @click="toDetails(item)">{{item.title}}</div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return { type: {}, content: "", list: [] };
  },
  created() {
    this.type.type = this.$route.query.type;
    this.type.id = this.$route.query.id;
    if (this.type.type && this.type.id) {
      this.getData();
    }
  },
  methods: {
    toDetails(item) {
      if (!item) return;
      this.$router.push({
        path: "/commerce/details",
        query: { type: item.type || 1, id: item.id }
      });
      this.type = { type: item.type || 1, id: item.id };
      this.getData();
    },
    async getData() {
      let { data } = await this.axios("/studyapi/Article/detail", {
        params: this.type
      });
      if (data.code) {
        this.content = data.data.data;
        this.$route.meta.title = data.data.data.title;
        this.list = data.data;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  min-height: 100vh;
  padding: 0 0.4rem;
  background: #fff;
  .title {
    font-family: MicrosoftYaHei;
    font-size: 0.3rem;
    font-weight: bold;
    font-stretch: normal;
    color: #000000;
    text-align: center;
    padding: 0.3rem 0;
    span {
      display: inline-block;
      text-align: left;
    }
  }
  .date {
    height: 0.25rem;
    font-family: MicrosoftYaHei;
    font-size: 0.22rem;
    font-weight: bold;
    font-stretch: normal;
    letter-spacing: 1px;
    color: #666666;
  }
  .content {
    font-size: 0.14rem;
    font-stretch: normal;
    letter-spacing: 1px;
    margin: 0.4rem auto;
    text-indent: 0.5em;
    overflow: hidden;
    text-align: left;
    line-height: 2;

    img {
      max-width: 95%;
    }
  }
  .ohter {
    text-align: left;
    padding: 0.4rem 0;
    > div {
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.3rem;
      overflow: hidden;
    }
  }
}
</style>