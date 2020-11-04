<!--
Template Name: 爆款
Create author: qinglong
Create Time  : 2020-07-05
-->
<template>
  <div class="box">
    <!-- <div class="banner">
      <div class="img">
        <img src="~@/assets/image/hot-banner.jpg" alt />
      </div>
    </div>-->
    <div class="container">
      <van-notice-bar>温馨提示: 因为市场随时变动，厂家会不定期下线更新链接，若有需求及时更新上架。</van-notice-bar>
    </div>
    <van-empty image="error" v-if="!list.length" :description="errorValut" />
    <div class="list container" v-if="list.length">
      <template v-for="(item,index) in list">
        <div class="item" :key="index">
          <div class="content">
            <div class="left">
              <div class="img">
                <img :src="item.pic" alt />
              </div>
            </div>
            <div class="right">
              <div class="title">{{item.title}}</div>
              <div class="a">
                <span>
                  一级类目:
                  {{item.type_one}}
                </span>
                <span>
                  关键词: {{
                  item.type_one}}
                </span>
              </div>
              <div class="a">专属热门词汇: {{item.one}}</div>
              <div class="a">
                <span>
                  展现指数:
                  {{item.type_one}}
                </span>
                <span>
                  竞争度:
                  {{item.type_one}}
                </span>
              </div>
              <div class="a">采购价（产品+运费）: ￥{{58 }}</div>
              <div class="a">
                建议定价（包邮价）:
                <i>￥128.00</i>
              </div>
              <div class="btn">
                <a :href="item.url">
                  <span>马上铺货</span>
                </a>
              </div>
            </div>
          </div>
          <div class="info">
            <div class="star">
              推荐理由
              <van-rate
                v-model="rate"
                :size="30"
                count="5"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
                readonly
              />
            </div>
            <div class="doc">{{item.content}}</div>
          </div>
        </div>
      </template>
    </div>
    <van-pagination
      v-model="page.page"
      mode="simple"
      :total-items="page.total"
      :items-per-page="page.limit"
    />
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      rate: 5,
      list: [],
      errorValut: "数据还没更新哦~",
      page: {
        limit: 16,
        page: 1,
        total: 0
      }
    };
  },
  async created() {
    if (this.getcookie('userInfo')) this.getData();
    else {
      this.errorValut = "请登录后再来哦~";
      this.$store.commit("setLogin", true);
    }
  },

  methods: {
    async getData() {
      let { data } = await this.axios("/studyapi/Goods/hot", {
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
.box {
  padding-bottom: 0.4rem;
  background: #fff;
}
.banner {
  .img {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.list {
  .item {
    margin: 0.2rem;
    overflow: hidden;
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      .img {
        width: 3rem;
        height: 3rem;
        border-radius: 0.1rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: inline-block;
        }
      }
      .right {
        padding-left: 0.1rem;
        height: 3.2rem;
        .title {
          font-size: 0.28rem;
          color: #000;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .a {
          font-size: 0.18rem;
          color: #7f7f7f;
          padding: 0.03rem 0;
          line-height: 1.6;
          span {
            margin-right: 0.16rem;
          }
          i {
            color: #e33;
            font-size: 0.26rem;
            vertical-align: middle;
          }
        }
        .btn {
          border-radius: 0.1rem;
          padding: 0.05rem;
          overflow: hidden;
          display: inline-block;
          width: 1.2rem;
          text-align: center;
          height: 0.4rem;
          line-height: 0.4rem;
          background: #ffb583;
          color: #fff;
          a {
            color: inherit;
          }
          span {
            border-radius: 0.1rem;
            background: #f47f31;
            display: inline-block;
            width: 100%;
            height: 100%;
            font-size: 0.2rem;
          }
        }
      }
    }
    .info {
      text-align: left;
      background: rgba(0, 0, 0, 0.02);
      padding: 0.1rem;
      .star {
        font-size: 0.22rem;
        height: 0.5rem;
        line-height: 0.5rem;
        border-bottom: 1px solid #ccc;
      }
      .doc {
        font-size: 0.2rem;
        padding: 0.2rem 0 0.1rem;
        line-height: 1.5;
      }
    }
  }
}
</style>