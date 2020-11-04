<!--
Template Name: list
Create author: qinglong
Create Time  : 2020-06-07
-->
<template>
  <div>
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :touchable="true">
        <template v-for="(item,index) in list.rotation">
          <van-swipe-item :key="index">
            <div class="swipe-img">
              <img :src="item.pic" alt />
            </div>
          </van-swipe-item>
        </template>
      </van-swipe>
    </div>
    <div class="crumb container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/source' }">货源中心</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="list container">
      <div class="item">
        <div class="title" v-if="list.types">{{list.types.z_title}}:</div>
        <div :class="['box',down?'':'active']">
          <template v-if="list.types">
            <span
              v-for="(item,index) in list.types"
              @click.stop="toClass(item)"
              :key="index"
              :class="{actives:type.id==item.id}"
            >{{item.label}}</span>
          </template>
        </div>
        <div class="title down" @click.stop="down=!down">{{down?'展开':'收起'}}</div>
      </div>
    </div>
    <div class="goodes-list container">
      <template v-for="(item,index) in list.list">
        <div class="item" :key="index" @click.stop="toDetails(item)">
          <div class="img">
            <img :src="item.pic" alt />
          </div>
          <div class="text">
            <span>{{item.title}}</span>
          </div>
          <div class="price">￥{{item.retail_price}}</div>
        </div>
      </template>
    </div>
    <el-pagination
      class="page"
      background
      layout="prev, pager, next"
      :page-size="page.limit"
      :total="page.total"
      @current-change="currentChange"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "list",

  data() {
    return {
      down: true,
      type: { type: 1, id: null },
      list: {},
      page: {
        limit: 16,
        page: 1,
        total: 0
      }
    };
  },
  created() {
    if (this.$route.query.type) {
      this.type.type = this.$route.query.type;
    }
    if (this.$route.query.id) {
      this.type.id = this.$route.query.id;
    }
    this.getData();
  },
  methods: {
    toClass(item) {
      if (this.type.id == item.id) return;
      this.type.id = item.id;
      this.$router.push({ path: "/source/list", query: this.type });
      this.getData();
    },
    toDetails(item) {
      // let url = this.$router.push(item.url);
      window.open(item.url, "_blank");
    },
    async getData() {
      let { data } = await this.axios("/api/Goods/screen", {
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
  }
};
</script>
<style lang='less' scoped>
.crumb {
  margin: 40px auto;
  overflow: hidden;
}
.swipe-img {
  height: 400px;
  img {
    object-fit: contain;
  }
}
.list {
  overflow: hidden;
  .item {
    display: flex;
    justify-content: space-between;
    // border: 1px solid #ccc;
    background: #f4f4f4;
    padding: 15px;
    margin: 20px auto;
    .title {
      min-width: 80px;
      font-size: 14px;
      color: #8d8d8d;
      text-align: center;
    }
    .down {
      cursor: pointer;
    }
    .box {
      height: 100px;
      flex: auto;
      overflow: hidden;
      &.active {
        height: auto;
      }
      span {
        margin: 10px;
        padding: 10px;
        padding-top: 0;
        margin-top: 0;
        white-space: nowrap;
        overflow: hidden;
        display: inline-block;
        &:hover,
        &.actives {
          color: #f60;
          cursor: pointer;
          transition: all 0.2s;
        }
      }
    }
  }
}
.goodes-list {
  display: flex;
  flex-wrap: wrap;
  margin: 40px auto;
  .item {
    width: 24%;
    height: 420px;
    position: relative;
    background: #f1f1f1;
    transition: all 0.2s;
    margin: 10px 0.5%;
    overflow: hidden;
    &:hover {
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
      transition: all 0.2s;
      cursor: pointer;
      border-radius: 5px;
    }
    .img {
      height: 0;
      padding-bottom: 100%;
      background: #ccc;
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        object-fit: cover;
      }
    }
    .text {
      text-align: center;
      padding: 10px 20px;
      font-size: 18px;
      color: #5d5d5d;
      span {
        display: inline-block;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .price {
      color: #e33;
      font-size: 22px;
      font-weight: bold;
      text-align: center;
    }
  }
}
</style>