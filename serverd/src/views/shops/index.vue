<template>
  <el-row class="shop-template">
    <el-col :span="24" class="scale-box">
      <!-- 轮播图 -->
      <div class="scale-item">
        <el-carousel :interval="5000" arrow="never" height="100%">
          <el-carousel-item v-for="item in carousel" :key="item.pic">
            <el-image :src="item.pic" fit="contain"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
    <el-col :span="24" class="title hidden-xs-only">网店装修</el-col>
    <el-col :span="20" :offset="2" :xs="{span:22,offset:1}">
      <ul class="nav">
        <li class="item" :class="{'active':navIndex==null}" @click="toggle(null)">全部</li>
        <template v-for="(item,index) in navList">
          <li
            class="item"
            :class="{'active':navIndex==item.value}"
            :key="index"
            @click="toggle(item.value)"
          >{{item.key}}</li>
        </template>
      </ul>
    </el-col>
    <el-col :span="20" :offset="2" :xs="{span:22,offset:1}">
      <el-row class="template-list" :gutter="20">
        <template v-for="(item,index) in templateList">
          <el-col :key="index" :xs="12" :sm="12" :md="6" :lg="4" class="template-item">
            <div class="template-box" @click="toDetails(item.id)">
              <el-image :src="item.pic" fit="fill">
                <div slot="placeholder" class="image-slot">
                  加载中
                  <i class="el-icon-loading"></i>
                </div>
              </el-image>
              <div class="template-item-description">
                <span>{{item.title}}</span>
              </div>
            </div>
          </el-col>
        </template>
      </el-row>
    </el-col>
    <el-col style="text-align:center">
      <el-pagination
        class="hidden-xs-only"
        :current-page="page.currentIndex"
        layout="prev, pager, next"
        :page-size="page.size"
        :total="page.total"
        hide-on-single-page
        @current-change="onPage"
      ></el-pagination>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      page: {
        total: 0,
        size: 18,
        currentIndex: 1
      },
      carousel: [{ pic: "/public/home/static/img/shopes.jpg" }],
      navIndex: null,
      navList: [],
      templateList: []
    };
  },
  // async beforeCreate() {
  //   let path = "limit=1&page=1";
  //   if (this.navIndex) path += "&pid=" + this.navIndex;
  //   let { data } = await this.axios("/api/Decoration/list?" + path);
  //   if (data.code) {
  //     this.$route.meta.title = data.key.y_title;
  //     this.$route.meta.keywords = data.key.keyword;
  //     this.$route.meta.description = data.key.content;
  //   }
  // },
  created() {
    this.getData();
    this.getClass();
  },
  methods: {
    toggle(id) {
      this.navIndex = id;
      this.onPage();
    },
    async getClass() {
      let { data } = await this.axios("/api/Decoration/shoptype");
      if (data.code) {
        this.navList = data.data;
      }
    },
    async getData(page = 1, type = false) {
      let path = "limit=" + this.page.size + "&page=" + page;
      if (this.navIndex) path += "&pid=" + this.navIndex;
      let { data } = await this.axios("/api/Decoration/list?" + path);
      if (data.code) {
        this.page.total = data.count;
        if (!type) this.templateList = data.data;
        else this.templateList = this.templateList.concat(data.data);
      }
    },
    tapPage() {
      // 小屏加载
      this.page.currentIndex += 1;
      this.getData(this.page.currentIndex, true);
    },
    onPage(i = 1) {
      // 大屏加载
      this.page.currentIndex = i;
      this.getData(i);
    },
    toDetails(id = 0) {
      this.$router.push("details/" + id);
    }
  }
};
</script>

<style lang="less" scoped>
.shop-template {
  .el-image {
    width: 100%;
  }
  .title {
    text-align: center;
    font-size: 36px;
    margin-top: 70px;
    margin-bottom: 40px;
  }
  .nav {
    min-height: 60px;
    background: #f2f2f2;
    margin-bottom: 40px;
    .item {
      min-width: 75px;
      margin: 10px 5px;
      padding: 0 5px;
      display: inline-block;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      &.active {
        background: #fff;
      }
      @media screen and (max-width: 976px) {
        line-height: 20px;
        margin: 10px 5px;
        padding: 0 3px;
      }
    }
  }
  .template-list {
    .template-item {
      .template-box {
        cursor: pointer;
        position: relative;
        margin-bottom: 20px;
        box-shadow: 0 0 10px #ccc;
        border-radius: 5px;
        overflow: hidden;
        .template-item-description {
          position: absolute;
          bottom: 2px;
          left: 0;
          right: 0;
          text-align: center;
          overflow: hidden;
          height: 35px;
          padding: 10px 5px;
          font-size: 16px;
          background-color: rgba(0, 0, 0, 0.5);
          > span {
            display: inline-block;
            text-align: left;
            color: #fff;
          }
        }
      }
    }
  }
  .el-pagination {
    text-align: center;
    margin: 50px 0;
  }
  .el-link {
    padding: 20px 0;
  }
}
</style>