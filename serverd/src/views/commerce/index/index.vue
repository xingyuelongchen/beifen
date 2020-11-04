<!--
Template Name: commerce
Create author: qinglong
Create Time  : 2020-06-04
-->
<template>
  <div>
    <div class="banner">
      <van-swipe :autoplay="2000" indicator-color="white">
        <van-swipe-item>
          <img src="~@/assets/image/commerce/banner.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="list container">
      <template v-for="(item,index) in list">
        <div class="box" :key="index">
          <div class="img">
            <img :src="item.pic" alt />
          </div>
          <div class="title">{{item.title}}</div>
          <div class="content">{{item.content | htmlToText}}</div>
          <div class="info">
            <router-link :to="'details?type='+item.type_one+'&id='+item.id" >立即查看</router-link>
          </div>
          <div class="date">
            <div>{{item.month}}</div>
            <div>{{item.day}}</div>
          </div>
        </div>
      </template>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      class="page"
      :page-size="page.limit"
      :total="page.total"
      @current-change="currentChange"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "commerce",
  data() {
    return {
      list: [],
      page: {
        limit: 16,
        page: 1,
        total: 0
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let { data } = await this.axios("/api/Article/list", {
        params: Object.assign({}, this.type, this.page)
      });
      if (data.code) {
        this.page.total = data.count;
        this.list = data.data;
      }
    },
    currentChange(index) {
      this.page.page = index;
      this.getData();
    }
  },
  filters: {
    htmlToText(val) {
      let div = document.createElement("div");
      div.innerHTML = val;
      val = div.innerText;
      return val;
    }
  }
};
</script>
<style lang='less' scoped>
.line-hidden(@num) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: @num;
  -webkit-box-orient: vertical;
}
.list {
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-gap: 20px 1.3%;
  // overflow: hidden;
  height: 100%;
  margin: 40px auto;
  .box {
    border: 1px solid #eee;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      border: 1px solid #eee;
      border-radius: 5px;
      box-shadow: 0 0 10px 5px #eee;
    }
    .img {
      position: relative;
      height: 0;
      padding-bottom: 70%;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }
    .title {
      height: 40px;
      font-size: 24px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 40px;
      color: #000;
      text-indent: 1em;
    }
    .content {
      .line-hidden(4);
      line-height: 1.7;
      height: 95px;
      margin: 5px 10px;
      color: #8c8c8c;
      text-indent: 1em;
    }
    .info {
      height: 30px;
      padding: 5px 10px;
      overflow: hidden;
      color: #dc3449;
      a {
        color: inherit;
      }
    }
    .date {
      position: absolute;
      top: 50%;
      margin: -60px auto;
      left: 0;
      width: 50px;
      height: 60px;
      background: brown;
      color: #fff;
      text-align: center;
      line-height: 1.5;
      font-size: 20px;
    }
  }
}
.page {
  margin: 40px auto;
  text-align: center;
}
</style>