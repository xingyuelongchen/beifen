<!--
Template Name: main
Create author: qinglong
Create Time  : 2020-06-04
-->
<template>
  <div class="app-main">
    <div class="app-head">
      <div class="top">
        <div class="container menu">
          <div class="userInfo" v-if="userShow">
            {{userName.name}}
            <span class="logout" @click="logout">退出</span>
          </div>
          <div class="user" v-else>
            <span @click="login(true)">登录</span>
            <!-- / -->
            <!-- <span @click="register">注册</span> -->
          </div>
          <!-- <div class="notice">
            <van-notice-bar left-icon="volume-o" background="transparent" color="#444">测试</van-notice-bar>
          </div>-->
          <template>联系我们</template>
        </div>
      </div>
      <div class="head">
        <div class="container nav">
          <div class="logo">
            <a href="http://www.guangyizhou.cn/">
              <img src="~@/assets/image/logo.png" alt />
            </a>
          </div>
          <div class="menu">
            <template v-for="(item,index) in $router.options.routes[0].children">
              <router-link
                :to="'/'+item.path"
                active-class="active"
                class="link"
                :key="index"
              >{{item.meta.title}}</router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <div class="app-foot">
      <div class="foot-wrap">
        <div class="foot-one container">
          <div class="foot-content">
            <div class="foot-title">关于我们</div>
            <div class="foot-text">
              公司拥有一支有多年电商服务资深经验的管理团队和专业的服务团队，凭借多
              年积累的电商行业实践经验，致力于解决电商中小卖家的需求，为电商中小卖
              家提供一站式，系统化的服务方案。
              <br />
              <br />地址：中国(四川)自由贸易试验区成都高新区天府大道北段1700号
              <br />版权所有 © 四川广艺舟科技有限公司 保留一切权利
              <br />网站备案：蜀ICP备20010706号
              <br />
            </div>
          </div>
          <div class="foot-content">
            <div class="foot-title">我们的服务</div>
            <div class="foot-text">
              <div>广艺舟开店技巧</div>
              <div>开店教学培训</div>
              <div>网店货源</div>
              <div>网店装修</div>
              <div>店铺美化</div>
            </div>
          </div>
          <div class="foot-content">
            <div class="foot-title">标签</div>
            <div class="foot-text">
              <span>培训</span>
              <span>网店</span>
              <span>视频</span>
              <span>一站式服务</span>
              <span>创业孵化</span>
              <span>电商</span>
              <span>装修</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="$store.state.login"
      width="500px"
      :close-on-click-modal="false"
    >
      <el-form :model="form">
        <el-form-item label="帐号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="login(false)">取 消</el-button>
        <el-button type="primary" @click="onLogin ">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "app-main",
  data() {
    return {
      form: {},
      dialogShow: false,
      dialogTitle: null,
      userShow: false,
      userName: null
    };
  },
  created() {
    let userInfo = window.localStorage.getItem("userInfo");

    if (userInfo) {
      console.log(0);
      this.userName = JSON.parse(window.localStorage.getItem("userInfo"));
      this.userShow = true;
    }
  },
  methods: {
    register() {
      this.dialogShow = true;
      this.dialogTitle = "用户注册";
    },
    async onLogin() {
      let { data } = await this.axios("/api/Login/Login", {
        method: "post",
        data: this.form
      });
      if (data.code) {
        this.userShow = true;
        this.$store.commit("setLogin", false);
        console.log(data.data);
        this.userName = data.data;
        window.localStorage.setItem("userInfo", JSON.stringify(data.data));
      } else {
        this.$message({
          type: "error",
          message: data.msg
        });
      }
    },
    login(bool) {
      // this.dialogShow = true;
      this.$store.commit("setLogin", bool);
      this.dialogTitle = "用户登录";
    },
    logout() {
      window.localStorage.removeItem("userInfo");
      this.userShow = false;
    }
  }
};
</script>
<style lang='less' scoped>
.app-head {
  .top {
    height: 30px;
    font-size: 14px;
    background: linear-gradient(180deg, #f1f1f1, #eee, #f1f1f1);
    .user {
      cursor: pointer;
    }
    .logout {
      margin-left: 20px;
      cursor: pointer;
    }
    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .notice {
        width: 50%;
      }
    }
  }
  .head {
    height: 60px;
    font-size: 16px;
    border-bottom: 1px solid #eee;

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .logo {
        width: 180px;
        height: 40px;
      }
      .menu {
        .link {
          text-decoration: none;
          color: inherit;
          font-size: 20px;
          margin-left: 30px;
        }
        .active {
          color: #f60;
        }
      }
    }
  }
}
.app-main {
  min-width: 1200px;
}
.app-foot {
  height: 360px;

  .foot-wrap {
    background: #050a14;
    height: 100%;

    .foot-one {
      background: #050a14;
      display: grid;
      grid-template-columns: 50% 15% 30%;
      grid-column-gap: 30px;
      color: #7b9297;

      .foot-content {
        // margin: 0 30px;
        .foot-title {
          margin: 20px 0;
          padding: 20px 0;
          border-bottom: 1px solid #7b9297;
          font-size: 18px;
        }

        .foot-text {
          line-height: 1.8;

          span {
            display: inline-block;
            padding: 5px 10px;
            background: #1b282d;
            margin-right: 10px;
            margin-bottom: 10px;
          }
        }
      }
    }

    .foot-two {
      display: flex;
      background: #050a14;
      justify-content: center;

      .icon {
        margin: 30px 10px;
        cursor: pointer;
      }
    }
  }
}
</style>