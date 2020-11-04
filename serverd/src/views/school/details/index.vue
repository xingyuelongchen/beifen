<!--
Template Name: video
Create author: qinglong
Create Time  : 2020-06-08
-->
<template>
  <div class="video">
    <div class="title">{{title}}</div>
    <div class="content">
      <div class="left">
        <!-- 视频播放器 -->
        <video controls controlslist="nodownload" preload :key="key" ref="video" :src="videoHref" />

        <div class="btn" @click.stop="show=!show">
          <van-icon name="arrow" v-if="show" />
          <van-icon name="arrow-left" v-if="!show" />
        </div>
      </div>
      <div class="right" :class="{active:!show}">
        <!-- 右边列表 -->
        <div class="right-title">课程目录</div>

        <div class="list" v-if="list.length">
          <van-collapse v-model="activeNames">
            <template v-for="(item,index) in list">
              <van-collapse-item :title="item.title" :name="''+index" :key="index">
                <van-list>
                  <van-cell v-for="(k,i) in item.video" :key="i">
                    <div
                      class="video-item"
                      :class="{active:k.id===id}"
                      @click.stop="toPlay(k,item)"
                    >{{k.title}}</div>
                  </van-cell>
                </van-list>
              </van-collapse-item>
            </template>
          </van-collapse>
        </div>
        <van-empty v-else description="描述文字"></van-empty>
      </div>
    </div>
    <div class="info">
      <!-- 评论 -->
    </div>
  </div>
</template>
<script>
export default {
  name: "appvideo",
  data() {
    return {
      show: true,
      type: { type: null, id: null },
      key: 0,
      title: "新手掌柜开店基础-如何高效进行学习",
      activeNames: [],
      list: [],
      videoHref: " "
    };
  },
  created() {
    if (this.$route.query.type) {
      this.type.type = this.$route.query.type;
    }
    if (this.$route.query.id) {
      this.type.id = this.$route.query.id;
    }
    this.getData();
  },
  mounted() {
    this.$refs.video.addEventListener("ended", this.toNext);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    async getPlay(data) {
      data.data.filter(e => {
        if (data.recommend.type2 == e.id) {
          this.toPlay(data.recommend, e);
        }
      });
    },
    async toPlay(a, item) {
      if (this.$refs.video.currentSrc == a.href) return;
      this.title = item.title + " / " + a.title;
      this.id = a.id;
      this.videoHref = a.url;
      let video = this.$refs.video;
      let status = 0;
      video.currentTime = a.time || 0;
      video.oncanplay = () => {
        video.play();
      };

      video.ontimeupdate = () => {
        if (video.currentTime >= video.duration) status = 1;
      };
      this.timer = setInterval(() => {
        this.axios("/api/video/time", {
          params: {
            hours: Math.floor(video.currentTime),
            video_id: this.id,
            type: this.type,
            status
          }
        });
      }, 1000 * 30);
      await this.axios("/api/video/times", {
        params: { id: this.id }
      });
    },
    toNext() {
      console.log(0);
    },
    async getData() {
      let { data } = await this.axios("/api/video/tree", {
        params: this.type
      });

      if (data.code) {
        this.list = data.data.data;
        if (this.type.id) this.getPlay(data.data);
        else this.toPlay(this.list[0].video[0], this.list[0]);
      } else {
        this.$alert(data.msg);
      }
    }
  }
};
</script>
<style lang='less' scoped>
.video {
  background: #ccc;
  padding: 40px 40px;
  overflow: hidden;
  .title {
    height: 80px;
    line-height: 80px;
    background: #fff;
    font-size: 24px;
    text-indent: 2em;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
    position: relative;
  }
  .content {
    display: flex;
    justify-content: space-between;
    .left {
      flex: 1 1 auto;
      position: relative;
      .btn {
        top: 0;
        bottom: 0;
        width: 30px;
        right: -30px;
        display: flex;
        position: absolute;
        text-align: center;
        align-items: center;
        justify-content: center;
        i {
          background: #fff;
          padding: 30px 5px;
          border-radius: 5px;
          cursor: pointer;
        }
      }
      video {
        width: 100%;
        height: 600px;
        max-width: 1920px;
        background: #eee;
        margin: 0 auto;
        outline: none;
        padding-top: 20px;
      }
    }
    .right {
      height: 620px;
      min-width: 600px;
      max-width: 600px;
      background: #eee;
      margin-left: 40px;
      transition: all 0.2s;
      overflow: hidden;
      &.active {
        min-width: 0;
        max-width: 0;
        margin-left: 0;
        transition: all 0.2s;
        overflow: hidden;
      }
      .right-title {
        height: 40px;
        text-indent: 2em;
        line-height: 40px;
      }
      .list {
        height: calc(100% - 40px);
        overflow-y: scroll;
        background: #fff;
        .video-item {
          cursor: pointer;
          &.active {
            color: #f60;
          }
        }
      }
    }
  }
}
</style>