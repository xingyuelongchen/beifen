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
          <van-button type="info" @click="version(1)" block>精英版</van-button>
          <van-button type="warning" @click="version(2)" block>豪华版</van-button>
          <van-button type="primary" @click="version(3)" block>尊贵版</van-button>
          <!-- <van-button type="danger" @click="version(4)" block>升级会员</van-button> -->
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img">
          <img v-if="ver == 1" src="~@/assets/contract/jy/jy1.jpg" />
          <img v-if="ver == 2" src="~@/assets/contract/hh/hh1.jpg" />
          <img v-if="ver == 3" src="~@/assets/contract/zg/zg1.jpg" />
          <img v-if="ver == 4" src="~@/assets/contract/sj/sj1.jpg" />
        </div>
        <div style="margin-top: 100px;display:flex;justify-content: space-evenly;">
          <van-button style="flex:1" type="info" @click="swipePrev">上一步</van-button>
          <van-button style="flex:1" type="primary" @click.native.stop="onNext">下一步</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img">
          <img v-if="ver == 1" src="~@/assets/contract/jy/jy2.jpg" />
          <img v-if="ver == 2" src="~@/assets/contract/hh/hh2.jpg" />
          <img v-if="ver == 3" src="~@/assets/contract/zg/zg2.jpg" />
          <img v-if="ver == 4" src="~@/assets/contract/sj/sj2.jpg" />
        </div>
        <div class="content" v-show="index==2">
          <van-form>
            <van-field v-model="form.name" name="name" label="真实姓名" placeholder="真实姓名" :rules="[{ required: true, message: '请填写真实姓名' }]" />
            <van-field v-model="form.mobile" name="mobile" type="tel" label="手机号码" placeholder="手机号码" :rules="[{ required: true, message: '请填写手机号码' }]" />
            <van-field v-model="form.taobao" name="taobao" label="淘宝账号" placeholder="淘宝账号" :rules="[{ required: true, message: '请填写淘宝账号' }]" />
            <div class="sign">
              <div>手写签名</div>
              <sign v-model="form.sign" ref="sign" />
            </div>
          </van-form>
        </div>
        <div style="margin-top: 100px;display:flex;justify-content: space-evenly;">
          <van-button style="flex:1" type="info" @click="swipePrev">上一步</van-button>
          <van-button style="flex:1" type="danger" @click.native.stop="onReset" v-if="index==2||index==9">重写</van-button>
          <van-button style="flex:1" type="primary" @click.native.stop="onNext">下一步</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img">
          <img v-if="ver == 1" src="~@/assets/contract/jy/jy3.jpg" />
          <img v-if="ver == 2" src="~@/assets/contract/hh/hh3.jpg" />
          <img v-if="ver == 3" src="~@/assets/contract/zg/zg3.jpg" />
          <img v-if="ver == 4" src="~@/assets/contract/sj/sj3.jpg" />
        </div>
        <van-form>
          <van-field v-model="form.checkMobile" name="mobile" label="手机号码" placeholder="手机号码" :rules="[{ required: true, message: '请填写手机号码' }]" />
          <van-field v-model="form.email" name="email" type="email" label="邮箱地址" placeholder="邮箱地址" :rules="[{ required: true, message: '请填写邮箱地址' }]" />
        </van-form>
        <div style="margin-top: 100px;display:flex;justify-content: space-evenly;">
          <van-button style="flex:1" type="info" @click="swipePrev">上一步</van-button>
          <van-button style="flex:1" type="primary" @click.native.stop="onNext">下一步</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img">
          <img v-if="ver == 1" src="~@/assets/contract/jy/jy4.jpg" />
          <img v-if="ver == 2" src="~@/assets/contract/hh/hh4.jpg" />
          <img v-if="ver == 3" src="~@/assets/contract/zg/zg4.jpg" />
          <img v-if="ver == 4" src="~@/assets/contract/sj/sj4.jpg" />
        </div>
        <div style="margin-top: 100px;display:flex;justify-content: space-evenly;">
          <van-button style="flex:1" type="info" @click="swipePrev">上一步</van-button>
          <van-button style="flex:1" type="primary" @click.native.stop="onNext">下一步</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img">
          <img v-if="ver == 1" src="~@/assets/contract/jy/jy5.jpg" />
          <img v-if="ver == 2" src="~@/assets/contract/hh/hh5.jpg" />
          <img v-if="ver == 3" src="~@/assets/contract/zg/zg5.jpg" />
          <img v-if="ver == 4" src="~@/assets/contract/sj/sj5.jpg" />
        </div>
        <div style="margin-top: 100px;display:flex;justify-content: space-evenly;">
          <van-button style="flex:1" type="info" @click="swipePrev">上一步</van-button>
          <van-button style="flex:1" type="primary" @click.native.stop="onNext">下一步</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img">
          <img v-if="ver == 1" src="~@/assets/contract/jy/jy6.jpg" />
          <img v-if="ver == 2" src="~@/assets/contract/hh/hh6.jpg" />
          <img v-if="ver == 3" src="~@/assets/contract/zg/zg6.jpg" />
          <img v-if="ver == 4" src="~@/assets/contract/sj/sj6.jpg" />
        </div>
        <div style="margin-top: 100px;display:flex;justify-content: space-evenly;">
          <van-button style="flex:1" type="info" @click="swipePrev">上一步</van-button>
          <van-button style="flex:1" type="primary" @click.native.stop="onNext">下一步</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img">
          <img v-if="ver == 1" src="~@/assets/contract/jy/jy7.jpg" />
          <img v-if="ver == 2" src="~@/assets/contract/hh/hh7.jpg" />
          <img v-if="ver == 3" src="~@/assets/contract/zg/zg7.jpg" />
          <img v-if="ver == 4" src="~@/assets/contract/sj/sj7.jpg" />
        </div>
        <div style="margin-top: 100px;display:flex;justify-content: space-evenly;">
          <van-button style="flex:1" type="info" @click="swipePrev">上一步</van-button>
          <van-button style="flex:1" type="primary" @click.native.stop="onNext">下一步</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img">
          <img v-if="ver == 1" src="~@/assets/contract/jy/jy8.jpg" />
          <img v-if="ver == 2" src="~@/assets/contract/hh/hh8.jpg" />
          <img v-if="ver == 3" src="~@/assets/contract/zg/zg8.jpg" />
          <img v-if="ver == 4" src="~@/assets/contract/sj/sj8.jpg" />
        </div>
        <div style="margin-top: 100px;display:flex;justify-content: space-evenly;">
          <van-button style="flex:1" type="info" @click="swipePrev">上一步</van-button>
          <van-button style="flex:1" type="primary" @click.native.stop="onNext">下一步</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img">
          <img v-if="ver == 1" src="~@/assets/contract/jy/jy9.jpg" />
          <img v-if="ver == 2" src="~@/assets/contract/hh/hh9.jpg" />
          <img v-if="ver == 3" src="~@/assets/contract/zg/zg9.jpg" />
          <img v-if="ver == 4" src="~@/assets/contract/sj/sj9.jpg" />
        </div>
        <van-form>
          <van-field v-model="form.idcard" label="身份证" placeholder="身份证" :rules="[{ required: true, message: '请填写身份证' }]" />
        </van-form>
        <div class="sign" v-show="index==9">
          <div>手写签名</div>
          <sign v-model="form.sign1" ref="sign1" />
        </div>
        <div style="margin-top: 20px;display:flex;justify-content: space-evenly;">
          <van-button style="flex:1" type="info" @click="swipePrev">上一步</van-button>
          <van-button style="flex:1" type="danger" @click.native.stop="onReset">重写</van-button>
          <van-button style="flex:1" type="primary" @click.native.stop="onNext">下一步</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img">
          <img v-if="ver == 1" src="~@/assets/contract/jy/jy10.jpg" />
          <img v-if="ver == 2" src="~@/assets/contract/hh/hh10.jpg" />
          <img v-if="ver == 3" src="~@/assets/contract/zg/zg10.jpg" />
          <img v-if="ver == 4" src="~@/assets/contract/sj/sj10.jpg" />
        </div>
        <div style="margin-top: 100px;display:flex;justify-content: space-evenly;">
          <van-button style="flex:1" type="info" @click="swipePrev">上一步</van-button>
          <van-button style="flex:1" type="primary" @click.native.stop="onNext">下一步</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="img">
          <!-- <img v-if="ver == 1" src="~@/assets/contract/jy/jy11.jpg" />
          <img v-if="ver == 2" src="~@/assets/contract/hh/hh11.jpg" />
          <img v-if="ver == 3" src="~@/assets/contract/zg/zg11.jpg" />
          <img v-if="ver == 4" src="~@/assets/contract/sj/sj11.jpg" /> -->
        </div>
        <div style="margin-top: 100px;display:flex;justify-content: space-evenly;">
          <van-button style="flex:1" type="info" @click="swipePrev">上一步</van-button>
          <van-button style="flex:1" type="danger" @click.native.stop="onSubmit" v-if=" ver==1 || ver==2 ">提交</van-button>
          <van-button style="flex:1" type="primary" @click.native.stop="onNext" v-else>下一步</van-button>
        </div>
      </van-swipe-item>
      <van-swipe-item v-if="ver == 3 || ver == 4">
        <div class="img">
          <!-- <img v-if="ver == 3" src="~@/assets/contract/zg/zg12.jpg" /> -->
          <img v-if="ver == 4" src="~@/assets/contract/sj/sj12.jpg" />
        </div>
        <div style="margin-top: 100px;display:flex;justify-content: space-evenly;">
          <van-button style="flex:1" type="info" @click="swipePrev">上一步</van-button>
          <van-button style="flex:1" type="danger" @click.native.stop="onSubmit">提交</van-button>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
/* eslint-disable */
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
          uid: this.getcookie('userInfo').id,
          region: { 1: "jy", 2: "hh", 3: "zg", 4: "sj" }[this.ver]
        })
      });
      if (data.code) {
        this.$toast.success(data.msg);
      } else {
        this.$toast.fail(data.msg);
      }
    },
    onNext() {
      if (this.index === 2) {
        if (this.form.sign) this.swipeNext();
      } else if (this.index === 9) {
        if (this.form.sign1) this.swipeNext();
      } else {
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