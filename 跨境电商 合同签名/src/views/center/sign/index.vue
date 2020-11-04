<!--
Template Name:  服务合同
Create author: qinglong
Create Time  : 2020-07-01
-->
<template>
  <div class="box">
    <van-swipe ref="swipe" class="my-swipe" :show-indicators="false" :loop="false" @change="swipe" :touchable="false">
      <van-swipe-item>
        <div class="btn">
          <van-button type="info" @click="version(1)" block>创业版</van-button>
          <van-button type="primary" @click="version(3)" block>豪华版</van-button>
          <van-button type="warning" @click="version(2)" block>尊贵版</van-button>
          <van-button type="warning" @click="version(4)" block>升级</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img" v-if="ver == 1">
          <img src="~@/assets/contract/jy/jy1.jpg" />
        </div>
        <div class="img" v-if="ver == 3">
          <img src="~@/assets/contract/hh/hh1.jpg" />
        </div>
        <div class="img" v-if="ver == 2">
          <img src="~@/assets/contract/zg/zg1.jpg" />
        </div>
        <div class="img" v-if="ver == 4">
          <img src="~@/assets/contract/sj/sj1.jpg" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img" v-if="ver == 1">
          <img src="~@/assets/contract/jy/jy2.jpg" />
        </div>
        <div class="img" v-if="ver == 3">
          <img src="~@/assets/contract/hh/hh2.jpg" />
        </div>
        <div class="img" v-if="ver == 2">
          <img src="~@/assets/contract/zg/zg2.jpg" />
        </div>
        <div class="img" v-if="ver == 4">
          <img src="~@/assets/contract/sj/sj2.jpg" />
        </div>
        <div class="content" v-show="index==2">
          <van-form>
            <van-field v-model="form.name" name="name" label="真实姓名" placeholder="真实姓名" :rules="[{ required: true, message: '请填写真实姓名' }]" />
            <van-field v-model="form.mobile" name="mobile" type="tel" label="手机号码" placeholder="手机号码" :rules="[{ required: true, message: '请填写手机号码' }]" />

            <div class="sign">
              <div>手写签名</div>
              <sign v-model="form.sign" ref="sign" />
            </div>
          </van-form>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img" v-if="ver == 1">
          <img src="~@/assets/contract/jy/jy3.jpg" />
        </div>
        <div class="img" v-if="ver == 3">
          <img src="~@/assets/contract/hh/hh3.jpg" />
        </div>
        <div class="img" v-if="ver == 2">
          <img src="~@/assets/contract/zg/zg3.jpg" />
        </div>
        <div class="img" v-if="ver == 4">
          <img src="~@/assets/contract/sj/sj3.jpg" />
        </div>
        <van-form>
          <van-field v-model="form.checkMobile" name="mobile" label="手机号码" placeholder="手机号码" :rules="[{ required: true, message: '请填写手机号码' }]" />
          <van-field v-model="form.email" name="email" type="email" label="邮箱地址" placeholder="邮箱地址" :rules="[{ required: true, message: '请填写邮箱地址' }]" />
        </van-form>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img" v-if="ver == 1">
          <img src="~@/assets/contract/jy/jy4.jpg" />
        </div>
        <div class="img" v-if="ver == 3">
          <img src="~@/assets/contract/hh/hh4.jpg" />
        </div>
        <div class="img" v-if="ver == 2">
          <img src="~@/assets/contract/zg/zg4.jpg" />
        </div>
        <div class="img" v-if="ver == 4">
          <img src="~@/assets/contract/sj/sj4.jpg" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img" v-if="ver == 1">
          <img src="~@/assets/contract/jy/jy5.jpg" />
        </div>
        <div class="img" v-if="ver == 3">
          <img src="~@/assets/contract/hh/hh5.jpg" />
        </div>
        <div class="img" v-if="ver == 2">
          <img src="~@/assets/contract/zg/zg5.jpg" />
        </div>
        <div class="img" v-if="ver == 4">
          <img src="~@/assets/contract/sj/sj5.jpg" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img" v-if="ver == 1">
          <img src="~@/assets/contract/jy/jy6.jpg" />
        </div>
        <div class="img" v-if="ver == 3">
          <img src="~@/assets/contract/hh/hh6.jpg" />
        </div>
        <div class="img" v-if="ver == 2">
          <img src="~@/assets/contract/zg/zg6.jpg" />
        </div>
        <div class="img" v-if="ver == 4">
          <img src="~@/assets/contract/sj/sj6.jpg" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img" v-if="ver == 1">
          <img src="~@/assets/contract/jy/jy7.jpg" />
        </div>
        <div class="img" v-if="ver == 3">
          <img src="~@/assets/contract/hh/hh7.jpg" />
        </div>
        <div class="img" v-if="ver == 2">
          <img src="~@/assets/contract/zg/zg7.jpg" />
        </div>
        <div class="img" v-if="ver == 4">
          <img src="~@/assets/contract/sj/sj7.jpg" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img" v-if="ver == 1">
          <img src="~@/assets/contract/jy/jy8.jpg" />
        </div>
        <div class="img" v-if="ver == 3">
          <img src="~@/assets/contract/hh/hh8.jpg" />
        </div>
        <div class="img" v-if="ver == 2">
          <img src="~@/assets/contract/zg/zg8.jpg" />
        </div>
        <div class="img" v-if="ver == 4">
          <img src="~@/assets/contract/sj/sj8.jpg" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img" v-if="ver == 1">
          <img src="~@/assets/contract/jy/jy9.jpg" />
        </div>
        <div class="img" v-if="ver == 3">
          <img src="~@/assets/contract/hh/hh9.jpg" />
        </div>
        <div class="img" v-if="ver == 2">
          <img src="~@/assets/contract/zg/zg9.jpg" />
        </div>
        <div class="img" v-if="ver == 4">
          <img src="~@/assets/contract/sj/sj9.jpg" />
        </div>
        <van-form>
          <van-field v-model="form.idcard" label="身份证" placeholder="身份证" :rules="[{ required: true, message: '请填写身份证' }]" />
        </van-form>
        <div class="sign" v-show="index==9">
          <div>手写签名</div>
          <sign v-model="form.sign1" ref="sign1" />
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img" v-if="ver == 1">
          <img src="~@/assets/contract/jy/jy10.jpg" />
        </div>
        <div class="img" v-if="ver == 3">
          <img src="~@/assets/contract/hh/hh10.jpg" />
        </div>
        <div class="img" v-if="ver == 2">
          <img src="~@/assets/contract/zg/zg10.jpg" />
        </div>
        <div class="img" v-if="ver == 4">
          <img src="~@/assets/contract/sj/sj10.jpg" />
        </div>
      </van-swipe-item>
    </van-swipe>
    <div style="margin: 16px;display:flex;justify-content: space-evenly;">
      <van-button style="flex:1" type="info" @click="swipePrev" v-if="index>0">上一步</van-button>
      <van-button style="flex:1" type="danger" @click.native="onReset" v-if="index==2||index==9">重写</van-button>
      <van-button style="flex:1" type="primary" @click.native="onNext" v-if="index>0&&index<10">下一步</van-button>
      <van-button style="flex:1" type="danger" @click.native="onSubmit" v-if="index==10">提交</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "signs",
  components: {
    sign: () => import("@/components/comSignCanvas")
  },
  data() {
    return {
      ver: 1,
      index: 0,
      form: {}
    };
  },
  methods: {
    onSave(a) {
      this.form.sign = a;
    },
    swipe(index) {
      this.index = index;
    },
  
    async onSubmit() {
      let { data } = await this.axios("/studyapi/Signature/sign", {
        method: "post",
        data: Object.assign({}, this.form, {
          uid: JSON.parse(window.localStorage.getItem("userInfo")).id,
          region: { 1: "jy", 2: "zg", 3: "hh",4:'sj' }[this.ver]
        })
      });
      if (data.code) {
        this.$toast.success(data.msg);
        // setTimeout(() => {
        //   this.$router.replace("/center");
        // }, 1500);
      } else {
        this.$toast.fail(data.msg);
      }
    },
    onNext() {
      if (this.form.sign && this.index === 2) {
        this.swipeNext();
      }
      if (this.form.sign1 && this.index === 9) {
        this.swipeNext();
      }
      if ([1, 3, 4, 5, 6, 7, 8].includes(this.index)) {
        this.swipeNext();
      }
    },
    onReset() {
      if (this.index == 2) this.$refs.sign.toClear();
      if (this.index == 9) this.$refs.sign1.toClear();
    },
    version(a) {
      this.ver = a;
      this.swipeNext();
    },
    swipeTo(index) {
      this.$refs.swipe.swipeTo(index);
    },
    swipeNext() {
      this.$refs.swipe.next();
    },
    swipePrev() {
      this.$refs.swipe.prev();
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  background: #fff;
  padding: 0.2rem 0;
  min-height: 100vh;
}
.my-swipe {
  background: #fff;
  height: 100%;
  .img {
    width: 90%;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      box-shadow: 0 0 0.2rem #eee;
      object-fit: contain;
    }
  }
}
.sign {
  display: flex;
  justify-content: space-between;
  font-size: 0.23333rem;
  color: #323233;
  margin: 0.1rem 0.25rem;
}
.btn {
  margin: 0 0.2rem;

  button {
    margin: 0.2rem auto;
  }
}
</style>