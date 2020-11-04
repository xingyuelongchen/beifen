<!--
Template Name: main
Create author: qinglong
Create Time  : 2020-06-18
-->
<template>
  <div class="wrap">
    <van-nav-bar
      :title="$route.meta.title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
      :placeholder="true"
    />
    <router-view />
    <van-tabbar route v-if="!$route.path.includes('user')">
      <template v-for="(item,index) in routes[0].children">
        <van-tabbar-item
          replace
          :to="item"
          :icon="item.icon"
          :key="index"
          :class="{'van-tabbar-item--active':$route.path.includes(item.path)}"
        >{{item.meta.title}}</van-tabbar-item>
      </template>
    </van-tabbar>
    <van-number-keyboard safe-area-inset-bottom />
  
  </div>
</template>
<script>
import { routes } from "@/router";

export default {
  name: "app-main",
  data() {
    return {
      routes,
      isLoading: false,
      loading: false,
      finished: false,
      refreshing: false,
      show: false,
    };
  },

  methods: {
    onClickLeft() {
      if (window.history.length > 0) {
        this.$router.back();
      }
    },
    onClickRight() {
      this.show = true;
    },
    
    onLoad() {
      setTimeout(() => {
        this.finished = true;
      }, 2000);
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    }
  }
};
</script>
<style lang='less' scoped>
.wrap {
  margin-bottom: 0.8rem;
  min-height: 100%;
  overflow: auto;
}
/deep/ .van-pull-refresh__head {
  margin-top: 0.3rem;
}
</style>