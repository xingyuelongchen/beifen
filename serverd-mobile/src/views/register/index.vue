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
    <!-- <van-form class="login"> -->
    <van-field v-model="form.name" name="name" left-icon="manager" placeholder="请输入用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
    <van-field v-model="form.password" type="password" name="password" left-icon="lock" placeholder="请填写密码" :rules="[{ required: true, message: '请填写密码' }]" />
    <van-field v-model="form.checkpassword" type="password" name="checkpassword" left-icon="lock" placeholder="请再次填写密码" :rules="[{ required: true, message: '请再次填写密码' }]" />
    <van-field v-model="form.mobile" name="mobile" left-icon="graphic" placeholder="请填写手机号码" minlength="11" maxlength="11" :rules="[{ required: true, message: '请填写手机号码' }]" />

    <van-field v-model="form.yzm" center clearable left-icon="comment-circle" placeholder="请输入短信验证码">
      <template #button>
        <van-button size="small" type="warning" @click.stop.self="getYzm">发送验证码</van-button>
      </template>
    </van-field>

    <div style="margin: 100px;">
      <van-button round block type="info" native-type="submit" style="background:#f60;outline:none;border:none" @click.native.stop="onSubmit">提交</van-button>
    </div>
    <!-- </van-form> -->
    <router-link to="/user/login">已有帐号？</router-link>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        password: '',
        checkpassword: '',
        username: '',
        yzm: '',
        name: ''
      }
    }
  },
  methods: {
    async getYzm() {
      if (!this.form.mobile || this.form.mobile.replace(/\s/g, '').length !== 11) {
        this.$toast.fail('请输入正确的手机号码')
        return
      }
      this.$toast.loading('正在发送……')
      let { data } = await this.axios('studyapi/login/mobile?mobile=' + this.form.mobile)
      this.$toast.success(data.msg)
    },
    async onSubmit() {
      if (this.form.password !== this.form.checkpassword) {
        this.$toast.fail('两次密码输入不一致')
        return
      }
      let { data } = await this.axios('/studyapi/Login/register', {
        method: 'post',
        data: this.form
      })
      this.$toast.fail(data.msg)
      if (data.code) {
        this.setcookie('userInfo', data.data)
        this.$router.replace('/center')
      }
    }
  }
}
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