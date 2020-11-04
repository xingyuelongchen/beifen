<!--
Template Name: 爆款
Create author: qinglong
Create Time  : 2020-07-05
-->
<template>
  <div>
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
    <el-pagination
      background
      layout="prev, pager, next"
      class="page"
      :page-size="page.limit"
      :total="page.total"
      @current-change="currentChange"
      hide-on-single-page
    ></el-pagination>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      rate: 5,
      list: [],
      loginStatus: null,
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
  watch: {
    login() {
      console.log(window.localStorage.getItem("userInfo"));
      if (window.localStorage.getItem("userInfo")) {
        this.getData();
      }
    }
  },
  computed: {
    ...mapState(["login"])
  },
  methods: {
    async getData() {
      let { data } = await this.axios("/api/Goods/hot", {
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
.banner {
}
.list {
  .item {
    box-shadow: 0 0 20px #ccc;
    margin: 30px auto;
    overflow: hidden;
    .title {
      font-size: 24px;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 10px 0;
      text-indent: 1em;
    }
    .content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 200px;
      margin: 10px;
      .left {
        width: 200px;
        height: 200px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          overflow: hidden;
        }
      }
      .right {
        padding-left: 20px;
        flex: auto;
        font-style: #555;
        .class {
          height: 40px;
          line-height: 40px;
          background: #f5f5f5;
          span {
            font-size: 16px;
            margin: 0 10px;
            i {
              font-style: normal;
              font-size: 26px;
              color: #ea5935;
            }
          }
        }
        .name {
          line-height: 40px;
          font-size: 16px;
          span {
            font-size: 20px;
            color: #2a2929;
          }
          .price {
            font-size: 26px;
            color: #ea5935;
          }
        }
        .btn {
          margin: 0 20px;
          display: inline-block;
          background: #f47f31;
          color: #fff !important;
          border-radius: 8px;
          padding: 0 10px;
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
      height: 40px;
      line-height: 40px;
      background: #f5f5f5;
      font-size: 24px;
      text-indent: 1em;
    }
    .descript {
      font-size: 16px;
      font-weight: bold;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-indent: 1.5em;
      line-height: 40px;
    }
  }
}
</style>