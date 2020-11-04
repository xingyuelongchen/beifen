<!--
Template Name: 验证
Create author: qinglong
Create Time  : 2020-07-02
-->
<template>
  <div class="box">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="~@/assets/image/yz1.jpg" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="content">
      <div class="input">
        <input type="text" v-model="search" placeholder="请输入顾问姓名或手机号码" />
        <button @click="getInfo">查询</button>
      </div>
      <div class="list" v-if="ren">
        <div class="item">
          <div class="tou">
            <img :src="ren.pic" alt />
          </div>
          <div class="text">
            <div class="title">{{ren.nickname}}</div>
            <div class="co">四川广艺舟科技有限公司</div>
            <div class="zhi">互联网创业规划(IEP)顾问中心-金牌顾问</div>
            <div class="star">
              <van-rate v-model="ren.star" readonly />
              <span>
                服务:
                <i>5.0</i>
              </span>
              <span>
                好评:
                <i>5.0</i>
              </span>
            </div>
            <div class="target">
              <span
                v-for="(item,index) in ren.label"
                :style="{background:['#f39800','#ea5935','#5065a6'][index]}"
                :key="index"
              >{{item}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="send" v-if="ren">
        <div>
          <span @click="sendMessage">发送短信验证</span>
        </div>
      </div>
    </div>
    <div class="foot">
      <img src="~@/assets/image/yz2.jpg" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "yz",
  data() {
    return {
      search: "",
      ren: ""
    };
  },
  methods: {
    async getInfo() {
      let { data } = await this.axios("/studyapi/Authentication/info", {
        params: { search: this.search }
      });
      if (data.code) {
        this.ren = Object.assign(
          { server: "5.0", hao: "5.0", star: 5 },
          data.data
        );
      } else {
        this.$dialog.alert({
          message: data.msg
        });
      }
    },
    async sendMessage() {
      let { data } = await this.axios("/studyapi/Authentication/send", {
        params: { mobile: this.ren.mobile }
      });
      if (data.code) {
        this.$dialog.alert({
          message: data.msg
        });
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
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .my-swipe {
    height: 30vh;
  }
  .content {
    height: 45vh;
    .input {
      margin: 0.4rem auto;
      border: 1px solid #ccc;
      width: 60%;
      height: 0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        flex: 1;
        border: none;
        height: 0.6rem;
        text-indent: 1em;
        font-size: 0.24rem;
      }
      button {
        max-width: 1rem;
        background: #4795fd;
        font-size: 0.24rem;
        border: none;
        outline: none;
        width: 1rem;
        color: #fff;
        height: 100%;
      }
    }
    .list {
      .item {
        margin: 0.4rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 0.2rem #eee;
        padding: 0.2rem 0.4rem;
        .tou {
          width: 1.7rem;
          height: 2rem;
        }
        .text {
          flex: auto;
          text-align: left;
          padding-left: 0.4rem;
          font-size: 0.26rem;
          line-height: 1.8;
          .title {
            font-size: 0.36rem;
            font-weight: bold;
          }
          .star {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          i {
            color: coral;
            font-size: 0.3rem;
          }
        }
      }
    }
    .send {
      > div {
        border: 0.1rem solid rgba(58, 158, 255, 0.3);
        width: 60%;
        height: 1rem;
        margin: auto;
        border-radius: 0.3rem;
        > span {
          border-radius: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          background: #4496ff;
          color: #fff;
          font-size: 0.3rem;
        }
      }
    }
    .target {
      span {
        display: inline-block;
        padding: 0.02rem 0.15rem;
        margin-right: 0.1rem;
        border-radius: 0.1rem;
        color: #fff;
        background: #ea5935;
      }
    }
  }
}
</style>