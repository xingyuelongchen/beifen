<!--
Template Name: 修改资料
Create author: qinglong
Create Time  : 2020-07-15
-->
<template>
  <div>
    <van-form @submit="onSubmit">
      <!-- <van-field
        v-model="form.password"
        type="password"
        name="旧密码"
        label="旧密码"
        placeholder="请输入旧密码"
        :rules="[{ required: false, message: '请填写旧密码' }]"
      />
      <van-field
        v-model="form.oldpassword"
        type="password"
        name="新密码"
        label="新密码"
        placeholder="请输入新密码"
        :rules="[{ required: false, message: '请填写新密码' }]"
      />-->
      <van-field
        :value="form.date"
        label="出生日期"
        placeholder="请选择生日"
        @focus="show =true"
        @blur="show =false"
      />
      <van-field
        :value="form.address"
        label="居住地"
        placeholder="请选择居住地"
        @focus="show1=true"
        @blur="show1=false"
      />
      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="form.sex" direction="horizontal">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <van-popup v-model="show" position="bottom" round safe-area-inset-bottom>
      <van-datetime-picker
        v-model="time"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        item-height="0.6rem"
        @confirm="changDate"
      />
    </van-popup>
    <van-popup v-model="show1" position="bottom" round safe-area-inset-bottom>
      <van-area
        title="选择地址"
        :area-list="areaList"
        item-height="0.6rem"
        :value="form.addresscode"
        @confirm="changAddress"
      />
    </van-popup>
  </div>
</template>
<script>
import areaList from "@/assets/address.js";
export default {
  name: "changinfo",
  data() {
    return {
      form: { date: "", sex: "", address: "", addresscode: "" },
      time: new Date(),
      show: false,
      show1: false,
      areaList,
      minDate: new Date(1970, 1, 1),
      maxDate: new Date()
    };
  },
  async created() {
    let { data } = await this.axios("/studyapi/members/birthday", {
      method: "get"
    });
    if (data.code) {
      this.form = data.data;
      this.form.addresscode = data.data.addresscode.split(",")[
        data.data.addresscode.split(",").length - 1
      ];
    }
  },
  methods: {
    async onSubmit() {
      let { data } = await this.axios("/studyapi/members/birthday", {
        method: "post",
        data: this.form
      });
      if (data.code) {
        this.$toast.success(data.msg);
      } else {
        this.$toast.fail(data.msg);
      }
    },
    changDate() {
      this.form.date = this.formatDate(this.time, "YYYY-MM-DD");
    },
    changAddress(val) {
      this.form.address = val.map(e => e.name).join(" - ");
      this.form.addresscode = val[val.length - 1].code;
      console.log(val[val.length - 1].code);
    },
    formatDate(time = new Date(), format = "YYYY-MM-DD hh:mm:ss", utc = null) {
      try {
        time = new Date(time);
      } catch (error) {
        console.error("Wrong time type：", error);
        time = new Date();
      }
      if (utc === true)
        time = new Date(
          time.getTime() - new Date().getTimezoneOffset() * 60 * 1000
        );
      if (utc === false)
        time = new Date(
          time.getTime() + new Date().getTimezoneOffset() * 60 * 1000
        );
      [
        { test: /YYYY/g, text: time.getFullYear() },
        { test: /MM/g, text: time.getMonth() + 1 },
        { test: /DD/g, text: time.getDate() },
        { test: /hh/g, text: time.getHours() },
        { test: /mm/g, text: time.getMinutes() },
        { test: /ss/g, text: time.getSeconds() },
        { test: /ms/g, text: time.getMilliseconds() },
        {
          test: /week/g,
          text:
            "星期" + ["日", "一", "二", "三", "四", "五", "六"][time.getDay()]
        }
      ].forEach(e => {
        format = format.replace(e["test"], e.text < 10 ? "0" + e.text : e.text);
      });
      return format;
    }
  }
};
</script>
<style lang='less' scoped>
</style>