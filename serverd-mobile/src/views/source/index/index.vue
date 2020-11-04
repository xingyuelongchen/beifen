<!--
Template Name: source
Create author: qinglong
Create Time  : 2020-06-18
-->
<template>
  <div class="box">
    <div class="my-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <template v-for="(item,index) in rotation">
          <van-swipe-item :key="index">
            <!-- <van-image width="100" height="100" fit="contain" src=" /assets/image/banner-source.png" /> -->
            <img :src="item.pic" />
          </van-swipe-item>
        </template>
      </van-swipe>
    </div>
    <div class="list">
      <div class="item" @click="toList(1)">
        <div class="img">
          <img src="~@/assets/image/n1.png" alt />
        </div>
        <div>女装</div>
      </div>
      <div class="item" @click="toList(2)">
        <div class="img">
          <img src="~@/assets/image/n2.png" alt />
        </div>
        <div>男装</div>
      </div>
      <div class="item" @click="toList(7)">
        <div class="img">
          <img src="~@/assets/image/n3.png" alt />
        </div>
        <div>童装</div>
      </div>
      <div class="item" @click="toList(3)">
        <div class="img">
          <img src="~@/assets/image/n8.png" alt />
        </div>
        <div>内衣</div>
      </div>

      <div class="item" @click="toList(5)">
        <div class="img">
          <img src="~@/assets/image/n6.png" alt />
        </div>
        <div>女鞋</div>
      </div>
      <div class="item" @click="toList(6)">
        <div class="img">
          <img src="~@/assets/image/n7.png" alt />
        </div>
        <div>男鞋</div>
      </div>
      <div class="item" @click="toList(4)">
        <div class="img">
          <img src="~@/assets/image/n4.png" alt />
        </div>
        <div>孕妇装</div>
      </div>
      <div class="item" @click="toList(8)">
        <div class="img">
          <img src="~@/assets/image/n9.png" alt />
        </div>
        <div>箱包</div>
      </div>
    </div>
    <div class="image">
      <router-link to="/center/hot">
        <img src="~@/assets/image/hot.jpg" alt />
      </router-link>
    </div>
    <div class="atitle">今日推荐</div>
    <div class="shop-list">
      <template v-for="(item,index) in list">
        <a target="_blank" :href="item.url" :key="index">
          <div class="item">
            <div class="img">
              <img :src="item.pic" alt />
            </div>
            <div class="title">
              <span class="text">
                <span>{{item.title}}</span>
              </span>
            </div>
            <div class="price">￥{{item.retail_price}}</div>
          </div>
        </a>
      </template>
    </div>
    <van-pagination
      v-if="page.total>page.limit"
      v-model="page.page"
      mode="simple"
      :total-items="page.total"
      :items-per-page="page.limit"
      @change="changePage"
    />
  </div>
</template>
<script>
export default {
  name: "asource",
  data() {
    return {
      list: [],
      rotation: [],
      page: {
        limit: 10,
        page: 1,
        total: 0
      }
    };
  },
  async created() {
    this.getData();
  },
  methods: {
    toList(item) {
      this.$router.push({ path: "list", query: { type: item } });
    },
    changePage(val) {
      this.page.page = val;
      this.getData();
    },
    async getData() {
      let { data } = await this.axios("/studyapi/Goods/recommend", {
        params: this.page
      });
      if (data.code) {
        this.list = data.data.data;
        this.rotation = data.data.rotation;
        this.page.total = data.count;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  .my-swipe {
    height: 2.75rem;
    overflow: hidden;
    padding: 0.2rem;
    background: #ccc;
    /deep/ .van-swipe__track {
      height: 100%;
    }
    .van-swipe-item,
    .van-swipe {
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: inline-block;
    }
  }
  .list {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: 1.5rem 1.5rem;
    font-size: 0.24rem;
    background: #fff;
    margin-bottom: 0.5rem;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
  .atitle {
    margin-top: 0.5rem;
    height: 0.5rem;
    font-size: 0.3rem;
    color: #000000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0.25rem;
    &::before {
      display: inline-block;
      width: 0.06rem;
      height: 80%;
      content: "";
      background: #6e8cfa;
      border-radius: 0.02rem;
      margin-right: 0.2rem;
    }
  }
  .shop-list {
    margin-bottom: 0.5rem;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 0.2rem;
    grid-row-gap: 0.2rem;
    margin: 0.2rem;
    a {
      color: inherit;
    }
    .item {
      background: #fff;
      box-shadow: 0 0 0.1rem #ccc;
      border-radius: 0.05rem;
      .img {
        width: 100%;
        height: 3rem;
        overflow: hidden;
        img {
          display: inline-block;
          width: 100%;
          object-fit: contain;
        }
      }

      .title {
        font-size: 0.2rem;
        text-align: center;
        padding: 0.05rem;
        .text {
          display: inline-block;
          text-align: left;
          padding: 0.05rem;
          span {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
      .price {
        color: #e33;
        font-size: 0.22rem;
      }
    }
  }
  .image {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>