<!--
Template Name: 视频播放页
Create author: qinglong
Create Time  : 2020-06-24
-->
<template>
  <div class="box">
    <div class="video">
      <video ref="video" :src="play.url"></video>
    </div>
    <template v-if="list.length>0">
      <div class="info">
        <div class="title">{{play.title}}</div>
        <div class="subtitle">
          <span>共{{play.count}}次播放</span>
        </div>
      </div>
      <!-- <div class="list">
        <template v-for="(item,index) in 5">
          <div class="item" :key="index">
            <div class="left">left</div>
            <div class="right">如何高效进行学习-你是如何理解学习这件事?</div>
          </div>
        </template>
      </div>-->
      <div class="list">
        <van-collapse v-model="activeNames">
          <template v-for="(item,index) in list">
            <van-collapse-item :title="item.title" :name="''+index" :key="index">
              <van-list>
                <van-cell v-for="(k,i) in item.video" :key="i">
                  <div
                    class="video-item"
                    :class="{active:k.id===play.id}"
                    @click.stop="toPlay(k,item)"
                  >{{k.title}}</div>
                </van-cell>
              </van-list>
            </van-collapse-item>
          </template>
        </van-collapse>
      </div>
    </template>
    <van-empty v-else description="暂无数据" />
  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      list: [],
      url: "",
      type: "",
      activeNames: [],
      timer: null,
      play: { title: "", count: "", number: "", url: "", id: "" }
    };
  },
  created() {
    if (this.$route.query.type) {
      this.type = this.$route.query.type;
      this.getData();
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },

  methods: {
    async toPlay(k) {
      this.play = {
        url: k.url,
        title: k.title,
        count: k.count,
        number: k.number,
        id: k.id
      };
      this.$route.meta.title = k.title;
      let video = this.$refs.video;
      let status = 0;

      video.currentTime = k.time || 0;
      video.oncanplay = () => {
        video.play();
      };

      video.ontimeupdate = () => {
        if (video.currentTime >= video.duration) status = 1;
      };
      this.timer = setInterval(() => {
        this.axios("/studyapi/video/time", {
          params: {
            hours: Math.floor(video.currentTime),
            video_id: this.play.id,
            type: this.type,
            status
          }
        });
      }, 1000 * 30);
      await this.axios("/studyapi/video/times", {
        params: { id: this.play.id }
      });
    },

    async getData() {
      let { data } = await this.axios("/studyapi/video/play", {
        params: { type: this.type }
      });
      if (data.code) {
        if (data.code == 2) {
          this.$router.back();
          this.$toast.fail(data.msg);
        }
        this.list = data.data.data.reverse();
        this.toPlay(data.data.hours);
      } else {
        this.$toast.fail(data.msg);
        this.$router.push("/user/login");
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
  .video {
    padding-bottom: 56.25%;
    position: relative;
    overflow: hidden;
    height: 0;
    background: #ccc;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    video {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      margin: auto;
    }
  }
  .info {
    margin: 0 0.2rem;
    text-align: left;
    padding-bottom: 0.2rem;
    border-bottom: 0.05rem solid #d2d2d2;
    .title {
      font-size: 0.36rem;
      margin: 0.4rem 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .subtitle {
      font-size: 0.22rem;
      color: #7d7d7d;
      margin: 0.2rem 0;
      span {
        margin-right: 0.2rem;
      }
    }
  }
  // .list {
  //   margin: 0.5rem 0.2rem;
  //   .item {
  //     height: 1.5rem;
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;
  //     box-shadow: 0 0 0.1rem #eee;
  //     border-radius: 0.03rem;
  //     padding: 0.15rem;
  //     margin: 0.3rem auto;
  //     .left {
  //       width: 2.38rem;
  //       height: 1.35rem;
  //       background: #eee;
  //     }
  //     .right {
  //       width: 4rem;
  //       text-align: left;
  //       font-size: 0.34rem;
  //       color: #000000;
  //     }
  //   }
  // }
  .list {
    height: calc(100% - 40px);
    overflow-y: scroll;
    background: #fff;
    text-align: left;
    .video-item {
      cursor: pointer;
      &.active {
        color: #f60;
      }
    }
  }
}
</style>