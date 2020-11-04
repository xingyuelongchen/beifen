<!--
    name：装修风格模板详情介绍页
    Author： 
    Create time：2020-02-25
    Update time：
-->
<template>
  <div>
    <div class="container">
      <el-row class="hidden-xs-only">
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <template v-for="(item,index) in navList">
              <el-breadcrumb-item :to="item" :key="index">{{item.title}}</el-breadcrumb-item>
            </template>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row class="shop-details">
        <el-col :xs="24" :sm="{span:9 }">
          <el-image class="template-image" :src="template.pic">
            <el-image slot="error" :src="template.pic"></el-image>
          </el-image>
        </el-col>
        <el-col :xs="24" :sm="{span:14,push:1}" class="template-details">
          <span class="template-title hidden-xs-only">{{template.title}}</span>
          <div class="template-attr hidden-xs-only">
            <i class="el-icon-view"></i>
            <span>浏览人数：{{template.count}}</span>
          </div>
          <el-button type="primary" @click="toCustomer">立即咨询</el-button>
        </el-col>
      </el-row>
      <el-row class="template-description">
        <!-- <el-col :xs="{span:22,offset:1}" :sm="{span:20,offset:2}"></el-col> -->
        <el-col :sm="{span:9}" class="hidden-xs-only template-recommend">
          <el-divider class="el-divider">装修推荐</el-divider>
          <!-- 推荐位 -->
          <template v-for="(item ,index) in tui">
            <div :key="index" class="box">
              <el-image :key="index" :src="item.pic" />
              <div class="title">{{item.title}}</div>
            </div>
          </template>
        </el-col>
        <el-col :xs="{span:22,offset:1}" :sm="{span:14,push:1}" class="template-preview">
          <el-divider class="el-divider" content-position="left">详情描述</el-divider>
          <!-- 描述 -->
          <div class="template-content" v-html="template.content"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      template: {},
      tui: []
    };
  },
  computed: {
    navList() {
      return this.$route.matched.map(k => {
        return { title: k.meta.title, path: k.path };
      });
    }
  },
  // async beforeCreate() {
  //   let id = this.$route.params.id;
  //   if (id) this.getData(id);
  //   let { data } = await this.axios("/homes/Shopes/detail?id=" + id);
  //   if (data.code) {
  //     this.$route.meta.title = data.data.title;
  //     this.$route.meta.keywords = data.key.keyword;
  //     this.$route.meta.description = data.key.content;
  //   }
  // },
  created() {
    let id = this.$route.params.id;
    console.log(id);

    if (id) this.getData(id);
    // this.getTui();
  },
  methods: {
    // async getTui() {
    //   let { data } = await this.axios("/homes/Shopes/relist");
    //   if (data.code) this.tui = data.data;
    // },
    async getData(id) {
      let { data } = await this.axios("/api/Decoration/detail?id=" + id);
      if (data.code) { 
        this.template = data.data.detail;
        this.tui = data.data.relist; 
        document.title = data.data.detail.title + "_电商装修模板_广艺舟电商";
      }
    },
    toCustomer() {
      window.open(
        "https://gytk5.kuaishang.cn/bs/im.htm?cas=79501___991308&fi=90598&sText=%E5%AE%98%E7%BD%91&ref=%E5%AE%98%E7%BD%91",
        "_blank"
      );
    }
  }
};
</script>
<style lang='less' scoped>
.el-breadcrumb {
  margin: 40px 0;
}
.template-content {
  overflow: hidden;
  /deep/ img {
    max-width: 100%;
  }
}
.template-image {
  width: 100%;
  max-height: 400px;
  border: 1px solid #eee;
  object-fit: contain;
}
.template-title {
  font-size: 16px;
}
.template-attr {
  font-size: 14px;
  color: #888;
  background: #f5f5f5;
  height: 120px;
  padding: 20px;
  margin: 20px 0;
  .el-icon-view {
    margin-right: 10px;
  }
}
.template-details {
  @media screen and (max-width: 992px) {
    text-align: center;
    margin: 10px 0;
  }
}
.template-description {
  margin-top: 50px;

  .template-recommend {
    border: 1px solid #eee;
    padding: 0 10px;
    .box {
      box-shadow: 0 0 10px #ccc;
      .el-image {
        max-height: 300px;
        // margin: 20px 5px;
      }
      .title {
        margin-bottom: 20px;
        line-height: 30px;
        padding: 0 5px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
  .template-preview {
    border: 1px solid #eee;
  }
}
</style>