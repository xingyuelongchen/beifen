<!--
    Name：  行业动态详情
    Author： 
    Create time：2020-02-26
    Update time：
-->
<template>
  <div class="details container" v-if="article">
    <div class="title">
      <div class="main">
        <!-- 标题 -->
        {{article.data.title}}
      </div>
      <div class="subtitle">
        <span>
          阅读：
          <!-- 阅读数 -->
          {{article.data.count}}
        </span>
        <span>
          作者：
          <!-- 作者 -->
          {{article.data.author}}
        </span>
        <span>
          日期：
          <!-- 时间 -->
          {{article.data.create_time}}
        </span>
      </div>
    </div>
    <div class="content">
      <div v-html="article.data.content">
        <!-- 文章内容 -->
      </div>
      <p>版权声明：部分文章源于网络，如有侵权，请联系删除，谢谢。</p>
    </div>
    <div class="info">
      <span v-if="article.pre_info">
        上一篇：
        <!-- 上一篇 -->
        <router-link :to="`/commerce/details?type=${type.type}&id=${article.pre_info.id}`" target="_blank">{{article.pre_info.title}}</router-link>
      </span>
      <span v-if="article.next_info">
        下一篇：
        <!-- 下一篇 -->
        <router-link :to="`/commerce/details?type=${type.type}&id=${article.next_info.id}`" target="_blank">{{article.next_info.title}}</router-link>
      </span>
    </div>
    <div class="tui">
      <span>推荐文章：</span>
      <div>
        <!-- 推荐列表 -->
        <template v-for="(item,index) in article.topping">
          <router-link :key="index" target="_blank" :to="`/commerce/details?type=${type.type}&id=${item.id}`">{{item.title}}</router-link>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      article: null,
      type: {}
    };
  },

  async created() {
    if (this.$route.query.type) {
      this.type.type = this.$route.query.type;
    }
    if (this.$route.query.id) {
      this.type.id = this.$route.query.id;
    }
    this.getData();
  },
  methods: {
    toDetails(item) {
      this.$router.push({
        path: "details",
        query: { type: this.type.type, id: item.id }
      });
    },
    async getData() {
      let { data } = await this.axios("/api/Article/detail", {
        params: this.type
      });
      if (data.code) {
        this.article = data.data;
        document.title = data.data.data.title + "_电商服务中心_广艺舟电商";
      }
    }
  }
};
</script>
<style lang='less' scoped>
.details {
  .crumbs {
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a {
      margin-right: 10px;
      text-decoration: none;
      color: initial;

      &::after {
        content: ">";
        display: inline-block;
        padding-left: 10px;
      }

      &:last-child {
        &::after {
          content: "";
        }
      }
    }
  }

  .title {
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .main {
      font-size: 26px;
      color: #444;
      text-align: center;
    }

    .subtitle {
      font-size: 14px;
      color: #999;
      text-align: center;
      margin: 40px auto;

      span {
        margin: 0 10px;
      }
    }
  }

  .content {
    padding: 2em;
    min-height: 80vh;
    text-indent: 2em;
    background: #fff;
    border-radius: 10px;

    img {
      max-width: 90%;
      width: initial;
      height: initial;
    }
  }

  .info {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-top: 1px solid #ccc;
    border-bottom: 1px dashed #ccc;
    margin: 20px auto;
  }

  .tui {
    margin: 40px auto;
    padding: 20px;
    border: 1px dashed #ccc;

    a {
      display: block;
      padding: 10px;
    }
  }
}
</style>