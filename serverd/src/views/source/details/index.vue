<!--
Template Name: details
Create author: qinglong
Create Time  : 2020-06-07
-->
<!--
    name：装修风格模板详情介绍页
    Author： 
    Create time：2020-02-25
    Update time：
-->
<template>
  <div class="shop">
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
        <el-col :xs="24" :sm="{span:9}">
          <img class="template-image" :src="goodes.pic" />
        </el-col>
        <el-col :xs="24" :sm="{span:14,push:1}" class="template-details">
          <span class="template-title hidden-xs-only">{{goodes.title}}</span>
          <div class="template-attr hidden-xs-only">
            <p>
              <span>参考价：</span>
              <span style="text-decoration: line-through;">￥?</span>
            </p>
            <p>
              <span>市场价：</span>
              <span class="price">
                ￥
                <span>{{goodes.retail_price | price}}</span>
              </span>
            </p>
          </div>
          <el-button type="primary" @click.native="onStart">立刻开店</el-button>
          <el-button type="primary" @click.native="onStart">立即上传</el-button>
        </el-col>
      </el-row>
      <el-row class="template-description">
        <!-- <el-col :xs="{span:22,offset:1}" :sm="{span:20,offset:2}"></el-col> -->
        <el-col :sm="{span:9 }" class="hidden-xs-only template-recommend">
          <el-divider class="el-divider">热销推荐</el-divider>
          <!-- 推荐位 -->
          <template v-if="retui.length">
            <div v-for="(item,index) in  retui" :key="index" class="tui">
              <el-image :src="item.pic" @click.native="onDetails(item.id)" />
              <div class="between">
                <span>{{item.title}}</span>
                <span>￥{{item.retail_price | price}}</span>
              </div>
            </div>
          </template>
        </el-col>
        <el-col :xs="{span:22,offset:1}" :sm="{span:14,push:1}" class="template-preview">
          <el-divider class="el-divider" content-position="left">详情描述</el-divider>
          <!-- 描述 -->
          <div class="template-content" v-html="goodes.content"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",

  data() {
    return {
      goodes: {},
      retui: [],
      type: null
    };
  },
  computed: {
    navList() {
      return this.$route.matched.map(k => {
        return { title: k.meta.title, path: k.path || "/" };
      });
    }
  },

  created() {
    // let id = this.$route.params.id;
    if (this.$route.query.type) {
      this.type = this.$route.query.type;
      if (this.type) this.getData(this.type);
    } else {
      console.log("商品ID错误");
    }
  },
  methods: {
    async getData(id) {
      let { data } = await this.axios("/homes/Goodes/goodsdetails?id=" + id);
      if (data.code) {
        this.goodes = data.data;
        this.retui = data.retui;
      }
    },
    onStart() {
      this.fnStorage.setStore("url", this.goodes.url);
      this.$router.push(`/goods/wrap`);
      // window.open(this.goodes.url, "_blank");
    },
    onDetails(id) {
      this.getData(id);
    }
  },
  filters: {
    price(val) {
      try {
        val *= 1;
        return val.toFixed(2);
      } catch (error) {
        return val;
      }
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
.shop {
  margin-bottom: 40px;
}
.template-image {
  width: 100%;
  max-height: 400px;
  border: 1px solid #eee;
}
.template-title {
  font-size: 18px;
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
  .price {
    color: #e00;
    font-weight: bold;
    span {
      font-size: 30px;
    }
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
  .tui {
    margin-bottom: 20px;
  }
  .template-recommend {
    border: 1px solid #eee;
    box-shadow: 0 0 10px #eee;
    padding: 5px;
    .between {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5px;
      span:first-child {
        flex: 1;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      span:last-child {
        color: #e33;
        font-weight: bold;
      }
    }
    .el-image {
      max-height: 300px;
      // margin: 20px 5px;
      // border-radius: 5px;
      overflow: hidden;
    }
  }
  .template-preview {
    border: 1px solid #eee;
  }
}
</style> 