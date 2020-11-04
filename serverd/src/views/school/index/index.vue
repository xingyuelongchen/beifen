<!--
Template Name: school
Create author: qinglong
Create Time  : 2020-06-04
-->
<template>
  <div>
    <div class="banner">
      <van-swipe :autoplay="2000" indicator-color="white">
        <van-swipe-item>
          <img src="~@/assets/image/school/school.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="list container">
      <template v-for="(item,index) in list">
        <div class="box" :key="index">
          <div class="item">
            <div class="img">
              <img :src="item.pic" alt />
            </div>
            <div class="wrap">
              <div class="title">{{item.title}}</div>
              <div class="content">{{item.content}}</div>
              <div class="info">
                <span>
                  <van-icon name="orders-o" />
                  共{{item.number}}章节
                </span>
                <span>
                  <van-icon name="eye-o" />
                  {{item.count }}次播放
                </span>
                <span>
                  <van-icon name="user-o" />
                  授课老师：{{item.teacher}}
                </span>
              </div>
              <div>
                <div class="btn" @click.stop="toDetails(item)">立即学习</div>
                <div
                  class="btn"
                  v-if="item.see"
                  style="background:#f60"
                  @click.stop="toSee(item)"
                >试看课程</div>
              </div>
            </div>
          </div>
          <div class="sub" v-if="item.video">
            <div class="title">课程预览</div>
            <div class="sub-list">
              <template v-for="(k,i) in item.video">
                <div class="sub-item" :key="i" @click.stop="toDetails(item,k)">
                  <img :src="k.pic" />
                </div>
              </template>
            </div>
          </div>
        </div>
      </template>
    </div>
    <el-dialog
      title="试看课程视频"
      :visible.sync="dialogVisible"
      width="800px"
       
    >
      <div class="video" v-if="dialogVisible">
        <video controls controlslist="nodownload" preload ref="video" :src="videoHref" />
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "school",
  data() {
    return {
      list: [],
      dialogVisible: false,
      videoHref: ""
    };
  },
  created() {
    this.getVideo();
  },
  methods: {
    toSee(item) {
      this.dialogVisible = true;
      this.videoHref = item.see;
    }, 
    async toDetails(item, k) {
      if (!window.localStorage.getItem("userInfo")) {
        this.$store.commit("setLogin", true);
        return;
      }
      let { data } = await this.axios("/api/video/tree", {
        params: { type: item.id }
      });
      if (!data.code) {
        this.$alert(data.msg);
        return;
      }
      this.$router.push({
        path: "/school/details",
        query: { type: item.id, id: k && k.id }
      });
    },
    async getVideo() {
      let { data } = await this.axios("/api/Video/list");
      if (data.code) {
        this.list = data.data;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.line-hidden(@num) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: @num;
  -webkit-box-orient: vertical;
}

.list {
  overflow: hidden;
  .box {
    margin: 100px auto;
    overflow: hidden;
    .item {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 290px;
      .img {
        flex: 1;
        margin-right: 20px;
        height: 100%;
        img {
          object-fit: contain;
        }
      }
      .wrap {
        flex: 1;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        .title {
          font-size: 33px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 2px;
        }
        .content {
          font-family: MicrosoftYaHei;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 1px;
          height: 150px;
          text-indent: 1em;
        }
        .info {
          padding: 10px 0;
          color: #7d7d7d;
          span {
            margin-right: 20px;
            vertical-align: middle;
            .van-icon {
              margin-right: 5px;
            }
          }
        }
        .btn {
          width: 124px;
          height: 39px;
          color: #fff;
          text-align: center;
          border-radius: 8px;
          line-height: 39px;
          background-color: #5065a6;
          cursor: pointer;
          display: inline-block;
          margin-right: 20px;
        }
      }
    }
    .sub {
      .title {
        height: 80px;
        font-size: 20px;
        line-height: 80px;
        padding-left: 40px;
      }
      .sub-list {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .sub-item {
          margin: 10px;
          width: 24%;
        }
      }
    }
  }
}
.video {
  width: 100%;
  border: 1px solid #ccc;
  video {
    border: 1px solid #ccc;
    width: 100%;
  }
}
</style>