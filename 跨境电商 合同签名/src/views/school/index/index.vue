<!--
Template Name: source
Create author: qinglong
Create Time  : 2020-06-18
-->
<template>
  <div class="box">
    <div class="my-swipe">
      <van-swipe :autoplay="3000" indicator-color="white">
        <template v-for="(item,index) in rotation">
          <van-swipe-item :key="index">
            <!-- <van-image fit="cover" :src="item.pic" /> -->
            <img :src="item.pic" alt srcset />
            <img />
          </van-swipe-item>
        </template>
      </van-swipe>
    </div>
    <div class="atitle">试看课程</div>
    <div class="swipe">
      <template v-for="(item,index) in list">
        <div class="item" @click="toSee(item)" :key="index">
          <div class="top">
            <div>{{item.title}}</div>
          </div>
          <div class="bottom">
            <div class="title">{{item.content}}</div>
            <div class="content">
              <div>
                <div class="touxiang">
                  <van-image width="100%" height="100%" round :src="item.wap_pic" />
                </div>
                <div class="name">{{item.teacher}}</div>
              </div>
              <div class="info">
                <div class="b">免费试看</div>
                <div class="a">一节课</div>
                <div class="c">{{item.number}}人已看</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="atitle">课程目录</div>
    <div class="list">
      <template v-for="(item,index) in list">
        <div class="item" :key="index" @click="toDetails(item)">
          <div class="img">
            <img :src="item.wap_pic1" alt />
          </div>
          <div class="content">
            <div class="title">{{item.title}}</div>
            <div class="text">{{item.content}}</div>
            <div class="info">
              <span>共{{item.number }}章节</span>
              <span>{{item.count}}次播放</span>
              <span>{{item.teacher}}老师</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "asource",
  data() {
    return { rotation: [], list: [] };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let { data } = await this.axios("/studyapi/video/list");
      if (data.code) {
        this.list = data.data.data;
        this.rotation = data.data.rotation;
      }
    },
    toSee(item) {
      this.$router.push({ path: "see", query: { url: item.see } });
    },
    toDetails(item) {
      this.$router.push({ path: "details", query: { type: item.id } });
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  background: #fff;
  min-height: 100vh;
  .my-swipe {
    height: 2.75rem;
    overflow: hidden;
    padding: 0.2rem;
    background: #eee;
    /deep/ .van-swipe__track {
      height: 100%;
    }
    .van-swipe-item,
    .van-swipe {
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: inline-block;
    }
  }
  .swipe {
    padding: 0.2rem;
    text-align: left;
    white-space: nowrap;
    overflow-x: auto;
    .item {
      width: 45%;
      display: inline-block;
      margin: 0 2.5% 0.3rem;
      box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
      border-radius: 0.2rem;
      overflow: hidden;
      .top {
        height: 1.65rem;
        background: #5065a6;
        text-align: center;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        white-space: pre-wrap;
        font-size: 0.3rem;
        line-height: 1.8;
        overflow: hidden;
      }
      .bottom {
        height: 2.7rem;
        .title {
          text-align: center;
          font-size: 0.22rem;
          padding: 0.2rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .content {
          display: flex;
          justify-content: space-between;
          text-align: center;
          padding: 0.2rem;
          font-size: 0.22rem;
          .touxiang {
            width: 1rem;
            height: 1rem;
            background: #eee;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 0.2rem;
          }
          .info {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: inline-block;
    }
  }
  .atitle {
    margin-top: 0.5rem;
    height: 0.5rem;
    font-size: 0.3rem;
    color: #000000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 0.25rem;
    &::before {
      display: inline-block;
      width: 0.06rem;
      height: 80%;
      content: "";
      background: #6e8cfa;
      border-radius: 0.02rem;
      margin-right: 0.2rem;
    }
  }
  .list {
    padding: 0.2rem;
    .item {
      background: #fff;
      box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.1);
      margin-bottom: 0.4rem;
      border-radius: 0.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem;
      .img {
        width: 35%;
        height: 2rem;
        img {
          display: inline-block;
          object-fit: contain;
          height: 100%;
        }
      }
      text-align: left;
      .content {
        padding: 0 0.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 2rem;
        .title {
          font-size: 0.35rem;
          height: 0.5rem;
        }
        .text {
          font-size: 0.22rem;
          line-height: 1.8;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .info {
          color: #7e839b;
          font-size: 0.24rem;
          span {
            margin-right: 0.1rem;
          }
        }
      }
    }
  }
}
</style>