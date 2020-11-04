<!--
Template Name: 爆款
Create author: qinglong
Create Time  : 2020-07-05
-->
<template>
  <div class="box">
    <div class="banner">
      <div class="img">
        <img src="~@/assets/image/hot-banner.jpg" alt />
      </div>
    </div>
    <div class="container">
      <van-notice-bar>温馨提示：因为市场随时变动，厂家会不定期下线更新链接，若有需求及时更新上架。</van-notice-bar>
    </div>
    <van-empty image="error" v-if="!list.length" :description="errorValut" />
    <div class="list container" v-if="list.length">
      <template v-for="(item,index) in list">
        <div class="item" :key="index">
          <div class="title">{{item.title}}</div>
          <div class="content">
            <div class="left">
              <img :src="item.pic" alt />
            </div>
            <div class="right">
              <div class="class">
                <span>
                  一级类目
                  <i>{{item.class_one}}</i>
                </span>
                <span>
                  竞争度
                  <i>{{item.competition}}</i>
                </span>
                <span>
                  展现指数
                  <i>{{item.count}}</i>
                </span>
              </div>
              <div class="name">
                产品名称：
                <span>{{item.product}}</span>
              </div>
              <div class="name">
                专属热门词汇：
                <span>{{item.words}}</span>
              </div>
              <div class="name">
                采购价(产品+运费)：
                <span>￥{{item.purchase}}</span>
              </div>
              <div class="name">
                建议定价(包邮价)：
                <span class="price">￥{{item.retail_price}}</span>
                <span class="btn">
                  <a :href="item.url" target="_blank">马上铺货</a>
                </span>
              </div>
            </div>
          </div>
          <div class="star">
            推荐理由
            <van-rate v-model="rate" readonly />
          </div>
          <div class="descript">{{item.content}}</div>
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
  created() {
    if (window.localStorage.getItem("userInfo")) this.getData();
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
    box-shadow: 0 0 0.2rem #ccc;
    margin: 0.3rem 0.2rem;
    overflow: hidden;
    .title {
      font-size: 0.24rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0.1rem 0;
      text-indent: 1em;
    }
    .content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 2rem;
      margin: 0.1rem;
      .left {
        width: 2rem;
        height: 2rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          overflow: hidden;
        }
      }
      .right {
        padding-left: 0.2rem;
        flex: auto;
        font-style: #555;
        text-align: left;
        .class {
          height: 0.4rem;
          line-height: 0.4rem;
          background: #f5f5f5;
          span {
            font-size: 0.16rem;
            margin: 0 0.1rem;
            i {
              font-style: normal;
              font-size: 0.26rem;
              color: #ea5935;
            }
          }
        }
        .name {
          line-height: 0.4rem;
          font-size: 0.16rem;
          span {
            font-size: 0.2rem;
            color: #2a2929;
          }
          .price {
            font-size: 0.26rem;
            color: #ea5935;
          }
        }
        .btn {
          margin: 0 0.2rem;
          display: inline-block;
          background: #f47f31;
          color: #fff !important;
          border-radius: 8px;
          padding: 0 0.1rem;
          border: 1px solid transparent;
          transition: all 0.2s;
          &:hover {
            border-color: #f47f31;
            color: #f47f31 !important;
            background: transparent;
            cursor: pointer;
            transition: all 0.2s;
          }
          a {
            color: inherit;
          }
        }
      }
    }

    .star {
      height: 0.4rem;
      line-height: 0.4rem;
      background: #f5f5f5;
      font-size: 0.24rem;
      text-indent: 1em;
      text-align: left;
    }
    .descript {
      font-size: 0.16rem;
      font-weight: bold;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-indent: 1.5em;
      line-height: 0.4rem;
      text-align: left;
    }
  }
}
</style>