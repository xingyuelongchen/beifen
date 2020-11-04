<!--
Template Name: 关于我们
Create author: qinglong
Create Time  : 2020-06-23
-->
<template>
  <div class="box">
    <div class="banner">
      <img src="~@/assets/image/about_banner.png" alt />
    </div>
    <div class="title">
      关于广艺舟
      <span>
        开网店选广艺舟中国专业的电商服务平台
        <br />让天下没有难开的的店
      </span>
    </div>
    <div class="band">
      <img src="~@/assets/image/about_band.png" alt />
    </div>
    <div class="text">
      我们不断倾听和满足用户需求，引导并超越用户需求，用
      技术+服务的方式让企业与用户更加紧密的联系在一起，让互
      联网+更简单；用一切以满足用户需求为导向的服务理念来打
      造电商创业更简单；关注不同领域，不同地域，不同群体，并
      针对不同对象提供多元化，差异化的产品和服务。
      <br />口号：广艺舟，您身边的电商专家；
      <br />使命：让电商创业更简单；
      <br />愿景：成为电商培训、就业、创业、孵化领域的领导者，让电商产业发展惠及更多人；
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <div class="img">
          <img src="~@/assets/image/14.png" alt />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {};
  }
};
</script>
<style lang='less' scoped>
.box {
  background: #fff;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    display: inline-block;
    object-fit: cover;
  }
  .banner {
    height: 2rem;
  }
  .title {
    font-size: 0.5rem;
    padding: 0.4rem 0.2rem;
    span {
      font-size: 0.26rem;
      display: block;
      color: #949494;
      padding: 0.2rem 0;
    }
  }
  .text {
    padding: 0.4rem;
    font-size: #4e4d4d;
    text-indent: 4em;
    line-height: 2;
    text-align: left;
  }
  .my-swipe {
    margin: 0.8rem 0.2rem;
  }
}
</style>