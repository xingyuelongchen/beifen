<!--
Template Name: source
Create author: qinglong
Create Time  : 2020-06-18
-->
<template>
  <div class="box">
    <div class="my-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <template v-for="(item,index) in list.rotation">
          <van-swipe-item :key="index">
            <img :src="item.pic" />
          </van-swipe-item>
        </template>
      </van-swipe>
    </div>
    <div class="list">
      <template v-for="(item,index) in list.data">
        <div class="item" :key="index" @click="toDetails(item)">
          <div class="img">
            <img :src="item.pic" alt />
          </div>
          <div class="text">
            <div class="title">{{item.title}}</div>
            <div class="content">{{item.content | htmlToText}}</div>
            <div class="info">
              <span>
                <van-icon name="eye-o" />
                {{item.count}}
              </span>
              <span>
                <van-icon name="user-o" />
                作者 {{item.author}}
              </span>
              <span>立即查看</span>
            </div>
          </div>
        </div>
      </template>
      <van-pagination
        v-if="page.total>10"
        v-model="page.page"
        mode="simple"
        :total-items="page.total"
        :items-per-page="page.limit"
        @change="changePage"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "asource",
  data() {
    return {
      list: [],
      page: { limit: 10, page: null, total: null, pid: null }
    };
  },
  async created() {
    if (this.$route.query.page) {
      let page = this.$route.query.page;
      this.page.page = page * 1;
    }
    this.getData();
  },
  methods: {
    changePage(val) {
      this.page.page = val;
      this.$router.push({ path: "/commerce", query: this.page });
      this.getData();
    },
    toDetails(item) {
      this.$router.push({
        path: "details",
        query: { type: item.type_one, id: item.id }
      });
    },
    async getData() {
      let { data } = await this.axios("/studyapi/Article/list", {
        params: this.page
      });
      if (data.code) {
        this.list = data.data;
        this.page.total = data.count;
      }
    }
  },
  filters: {
    htmlToText(val) {
      let dom = document.createElement("div");
      dom.innerHTML = val;
      let text = dom.innerText;
      return text;
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  min-height: 100vh;
  padding-bottom: 0.4rem;
  .my-swipe {
    height: 2.75rem;
    overflow: hidden;
    padding: 0.2rem;
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
  .notice-swipe {
    height: 40px;
    line-height: 40px;
    font-size: 0.2rem;
  }
  .scroll-title {
    font-size: 0.3rem;
    color: #5795ff;
    margin-right: 0.2rem;
  }
  .list {
    padding: 0.1rem 0.3rem;
    .item {
      display: flex;
      height: 2.59rem;
      align-items: center;
      margin: 0.4rem auto;
      background: #fff;
      border-radius: 0.1rem;
      justify-content: space-between;
      box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2);
      .img {
        flex: 1;
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .text {
        flex: 1;
        height: 2.5rem;
        max-width: 45%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        margin-left: 0.2rem;
        .title {
          max-width: 100%;
          font-size: 0.3rem;
          line-height: 0.6rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .content {
          height: 1.4rem;
          text-align: left;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          line-height: 1.75;
          font-size: 0.2rem;
          text-indent: 1em;
        }
        .info {
          width: 100%;
          height: 0.4rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 0.16rem;
          span {
            color: #8b8a8a;
            &:last-child {
              color: #5795ff;
            }
            .van-icon {
              margin-right: 0.05rem;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
}
</style>