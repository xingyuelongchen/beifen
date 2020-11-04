<!--
Template Name: login
Create author: qinglong
Create Time  : 2020-07-01
-->
<template>
  <div class="box">
    <div class="image">
      <img src="~@/assets/logo.png" alt />
    </div>
    <van-form @submit="onSubmit" class="login">
      <van-field
        v-model="form.username"
        name="name"
        left-icon="manager"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="password"
        left-icon="lock"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 100px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          style="background:#f60;outline:none;border:none"
        >提交</van-button>
      </div>
    </van-form>
    <!-- <router-link to="/user/register">忘记密码？</router-link> -->
    <router-link to="/user/register">还没账号，立即注册</router-link>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        password: "",
        checkpassword: "",
        username: "",
        yzm: ""
      }
    };
  },
  methods: {
    async onSubmit(values) {
      let { data } = await this.axios("/studyapi/Login/Login", {
        method: "post",
        data: values
      });
      if (data.code) {
        // this.$router.replace("/center");
        this.$router.back();
        window.localStorage.setItem("userInfo", JSON.stringify(data.data));
      } else {
        this.$toast.fail(data.msg);
      }
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  background: #fff;
  min-height: 100vh;
  overflow: hidden;
  .image {
    width: 2rem;
    height: 1.5rem;
    margin: auto;
    margin-top: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .login {
    background: #fff;
    margin: 1rem 0.2rem;
    // box-shadow: 0 0 0.2rem #eee;
    padding: 0.2rem;
    border-radius: 0.05rem;
  }
}
</style>