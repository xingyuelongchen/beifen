<!--
Template Name: 意见反馈
Create author: qinglong
Create Time  : 2020-06-23
-->
<template>
  <div class="box">
    <div class="title">
      意见反馈
      <span>
        开网店选广艺舟中国专业的电商服务平台
        <br />让天下没有难开的的店
      </span>
    </div>
    <div class="list">
      <div class="item">
        <div class="img">
          <img src="~@/assets/image/icon1.png" alt />
        </div>
        <div class="til">我们的位置</div>
        <div class="sub">中国四川省成都市高新区蜀锦路88号</div>
      </div>
      <div class="item">
        <div class="img">
          <img src="~@/assets/image/icon2.png" alt />
        </div>
        <div class="til">客服电话</div>
        <div class="sub">400-0901-779</div>
      </div>
      <div class="item">
        <div class="img">
          <img src="~@/assets/image/icon3.png" alt />
        </div>
        <div class="til">联系邮箱</div>
        <div class="sub">tousu@guangyizhou.cn</div>
      </div>
      <div class="item">
        <div class="img">
          <img src="~@/assets/image/icon4.png" alt />
        </div>
        <div class="til">工作时间</div>
        <div class="sub">09:00 - 24:00 (全天7*15小时)</div>
      </div>
    </div>
    <div class="form">
      <input type="text" placeholder="姓名" v-model="form.name" />
      <input type="text" placeholder="手机号码" v-model="form.mobile" />
      <textarea placeholder="您的留言在这里" v-model="form.content"></textarea>
      <span @click="submit">发送消息</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "feedback",
  data() {
    return {
      form: {}
    };
  },
  methods: {
    async submit() {
      let { data } = await this.axios("/studyapi/members/Leaving", {
        params: this.form
      });
      if (data.code) {
        this.$toast.success(data.msg);
        this.form = {};
      } else {
        this.$toast.fail(data.msg);
      }
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  background: #707071;
  overflow: hidden;
  .title {
    font-size: 0.5rem;
    color: #fff;
    line-height: 2;
    span {
      display: block;
      font-size: 0.3rem;
      padding: 0 0.4rem;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .list {
    display: grid;
    grid-template-columns: 50% 1fr;
    color: #fff;
    margin: 0 0.4rem;
    .item {
      overflow: hidden;
      height: 3rem;
      font-size: 0.16rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .img {
        width: 1rem;
        height: 1rem;
      }
      .til {
        font-size: 0.28rem;
        line-height: 3;
      }
      .sub {
        font-size: 0.21rem;
      }
    }
  }
  .form {
    margin: 0.8rem 0.4rem;
    padding: 0.2rem 0.3rem 0.4rem;
    overflow: hidden;
    font-size: 0.26rem;
    background: #fff;
    input[type="text"] {
      border: 1px solid #ccc;
      height: 0.5rem;
      width: 100%;
      text-indent: 1em;
      margin: 0.1rem 0;
    }
    textarea {
      margin: 0.1rem 0;
      width: 100%;
      height: 1.3rem;
      text-indent: 1em;
    }
    span {
      background: #dc3348;
      width: 1.5rem;
      width: 100%;
      height: 0.7rem;
      color: #fff;
      font-size: 0.33rem;
      line-height: 0.7rem;
      text-align: center;
      display: block;
      margin: 0.2rem 0;
    }
  }
}
</style>