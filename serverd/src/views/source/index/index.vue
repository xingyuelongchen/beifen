<!--
Template Name: source
Create author: qinglong
Create Time  : 2020-06-04
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
      <!-- <swiper :options="{loop:true,autoplay:true}">
          <swiper-slide :key="index" class="image">
           
          </swiper-slide>
      </swiper>-->
    </div>
    <div class="container">
      <div class="nav">
        <div class="item" @click.stop="toList({id:4})">
          <img src="~@/assets/image/shop/ico0.png" />
        </div>
        <div class="item" @click.stop="toList({id:6})">
          <img src="~@/assets/image/shop/ico1.png" />
        </div>
        <div class="item" @click.stop="toList({id:2})">
          <img src="~@/assets/image/shop/ico2.png" />
        </div>
        <div class="item" @click.stop="toList({id:5})">
          <img src="~@/assets/image/shop/ico3.png" />
        </div>
        <div class="item" @click.stop="toList({id:1})">
          <img src="~@/assets/image/shop/ico4.png" />
        </div>
        <div class="item" @click.stop="toList({id:7})">
          <img src="~@/assets/image/shop/ico5.png" />
        </div>
        <div class="item" @click.stop="toList({id:8})">
          <img src="~@/assets/image/shop/ico6.png" />
        </div>
      </div>
      <div class="hot" @click="$router.push('hot')">
        <img src="~@/assets/image/hot-banner.jpg" alt />
      </div>
    </div>
    <template v-for="(item,index) in list.one">
      <div class="container" :key="index">
        <div class="image ad">
          <img :src="item.t_pic" @click.stop="toList(item)" />
        </div>
        <div class="goodes">
          <div class="top">
            <span class="title">{{item.title}}</span>
            <span class="title_sub">{{item.f_title}}</span>
          </div>
          <div class="item">
            <div class="body">
              <div class="left image">
                <img :src="item.pic" />
              </div>
              <div class="right">
                <template v-for="(k,i) in item.chlid">
                  <div class="image img" :key="i" @click.stop="toDetails(k)">
                    <img :src="k.pic" />
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div class="container like">
      <div class="title">
        <span></span>
        为您推荐
      </div>
      <div class="goodes-list">
        <template v-for="(item,index) in list.two">
          <a :href="item.url" :key="index" rel="nofollow" target="_blank">
            <div class="item" :key="index" @click.stop="toDetails(item)">
              <div class="img">
                <img :src="item.pic" alt />
              </div>
              <div class="text">
                <span>{{item.title}}</span>
              </div>
              <div class="price">￥{{item.retail_price}}</div>
            </div>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-source",
  data() {
    return {
      list: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    toList(item) {
      console.log(item);
      this.$router.push({ path: "/source/list", query: { type: item.id } });
    },
    toDetails(item) {
      // let url = this.$router.push(item.url);
      window.open(item.url, "_blank");
    },
    async getData() {
      let { data } = await this.axios("/api/Goods/list");
      if (data.code) {
        this.list = data.data;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.container {
  // max-width: 1500px;
}
.swipe-img {
  height: 400px;
  img {
    object-fit: contain;
  }
}
.img {
  padding-bottom: 24%;
}
.image {
  height: 0;
  overflow: hidden;
  background: #ccc;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    object-fit: cover;
  }
}
.nav {
  margin: 40px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 13%);
  grid-column-gap: 1.5%;
  height: 262px;
  // background: #ccc;
  overflow: hidden;
}
.ad {
  overflow: hidden;
  padding-bottom: 5%;
  margin: 80px auto 40px;
}
.goodes {
  box-shadow: 0 0 15px 0 #ccc;
  overflow: hidden;
  margin: 40px auto;
  .top {
    margin: 20px 40px;
    height: 50px;
    font-size: 36px;
    color: #ca27f4;
    .title_sub {
      font-size: 16px;
      padding: 4px 10px;
      background: #ca27f4;
      color: #fff;
    }
  }
  .item {
    height: 0;
    position: relative;
    padding-bottom: 75%;
    .body {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      display: flex;
      justify-content: space-between;
      padding: 5px 15px 5px 5px;
      .left {
        width: 28%;
        height: 100%;
        margin-right: 2%;
        background: #ccc;
      }
      .right {
        width: 70%;
        display: grid;
        grid-template-areas: "1 2 3" "4 5 6" "7 8 9";
        grid-gap: 1% 1%;
        > div {
          background: #ccc;
          height: 0;
          position: relative;
          padding-bottom: 100%;
          transition: all 0.2s;
          &:hover {
            transform: scale(1.01);
            transition: all 0.2s;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
            z-index: 1000;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.like {
  margin: 80px auto 40px;
  .title {
    margin: 40px auto;
    text-align: center;
    overflow: hidden;
    font-size: 48px;
  }
  .goodes-list {
    display: grid;
    grid-template-columns: 24% 1fr 1fr 1fr;
    grid-gap: 20px 1.3%;
    .item {
      width: 100%;
      height: 0;
      padding-bottom: 140%;
      position: relative;
      background: #f1f1f1;
      transition: all 0.2s;
      &:hover {
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
        transition: all 0.2s;
        cursor: pointer;
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
}
</style>