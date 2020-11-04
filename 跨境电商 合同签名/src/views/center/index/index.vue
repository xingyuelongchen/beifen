<!--
Template Name: center
Create author: qinglong
Create Time  : 2020-06-18
-->
<template>
  <div class="box">
    <div class="author">
      <div class="bg"></div>
      <div class="head">
        <div class="left">&nbsp;</div>
        <div class="center">我的</div>
        <div class="right">
          <van-icon name="setting-o" @click="show=true" />
        </div>
      </div>
      <div class="card">
        <van-uploader :before-read="beforeRead">
          <div class="touxiang">
            <van-image round width="100%" height="100%" :src="userInfo.pic" />
          </div>
        </van-uploader>
        <div class="name" @click="showUserName=true">{{userInfo.nickname || '无昵称'}}</div>
        <div class="version">
          <span>{{userInfo.meal}}</span>
        </div>
        <div class="content">
          <div class="left">
            <div class="a">我的收藏</div>
            <div class="b">456</div>
          </div>
          <div class="right">
            <div class="a">本地下载</div>
            <div class="b">123</div>
          </div>
        </div>
      </div>
    </div>
    <div class="list">
      <van-list>
        <van-cell class="item" @click.native="to('learning')">
          <div>
            <van-icon name="play-circle-o" />
            <span>学习记录</span>
          </div>
          <van-icon name="arrow" />
        </van-cell>
        <van-cell class="item" @click.native="to('answer')">
          <div>
            <van-icon name="send-gift-o" />
            <span>答题记录</span>
          </div>
          <van-icon name="arrow" />
        </van-cell>
        <van-cell class="item" @click.native="to('examination')">
          <div>
            <van-icon name="todo-list-o" />
            <span>考试答题</span>
          </div>
          <van-icon name="arrow" />
        </van-cell>
        <van-cell class="item" @click.native="to('order')">
          <div>
            <van-icon name="orders-o" />
            <span>订单记录</span>
          </div>
          <van-icon name="arrow" />
        </van-cell>
        <van-cell class="item" @click.native="to('sign')">
          <div>
            <van-icon name="records" />
            <span>合同签署</span>
          </div>
          <van-icon name="arrow" />
        </van-cell>
        <van-cell class="item" @click.native="to('contract')">
          <div>
            <!-- <van-icon name="records" /> -->
            <van-icon name="description" />
            <span>查看合同</span>
          </div>
          <van-icon name="arrow" />
        </van-cell>
        <van-cell class="item" @click.native="to('feedback')">
          <div>
            <van-icon name="info-o" />
            <span>意见反馈</span>
          </div>
          <van-icon name="arrow" />
        </van-cell>
        <van-cell class="item" @click.native="to('about')">
          <div>
            <van-icon name="friends-o" />
            <span>关于我们</span>
          </div>
          <van-icon name="arrow" />
        </van-cell>
      </van-list>
    </div>
    <van-action-sheet v-model="show" :actions="actions" close-on-click-action @select="onSelect" />
    <van-popup v-model="cover" :close-on-click-overlay="false" closeable>
      <div class="cover">
        <div>
          <vueCropper
            ref="cropper"
            :img="img.base64"
            :autoCrop="true"
            :info="false"
            :canScale="true"
            :fixedBox="true"
            :fixed="true"
            :fixedNumber="[1,1]"
            :canMoveBox="false"
            :centerBox="true"
            :infoTrue="true"
            :full="true"
            :high="false"
            mode="100% auto"
          />
        </div>
        <!-- <cover :imgUrl="img.base64" /> -->
      </div>
      <van-button type="primary" block @click="onUpdate">确定</van-button>
    </van-popup>
    <van-dialog
      v-model="showUserName"
      title="昵称修改"
      show-cancel-button
      @confirm="changeUserName"
      @cancel="showUserName = false"
    >
      <van-field v-model="userName" placeholder="请输入昵称" />
    </van-dialog>
  </div>
</template>
<script>
export default {
  name: "center",
  data() {
    return {
      show: false,
      cover: false,
      showUserName: false,
      userName: "",
      userInfo: JSON.parse(localStorage.getItem("userInfo")),
      actions: [{ name: "退出登录", type: "logout" }],
      img: {
        base64: "",
        file: {}
      }
    };
  },
  methods: {
    async onSelect(item) {
      if (item.type == "logout") {
        let { data } = await this.axios("/studyapi/login/out");
        if (data.code) {
          window.localStorage.removeItem("userInfo");
          this.$toast.success(data.msg);
          this.$router.push("/school");
        }
      }
    },
    async changeUserName() {
      let { data } = await this.axios("/studyapi/members/nickname", {
        method: "post",
        data: { nickname: this.userName }
      });
      if (data.code) {
        this.$toast.success(data.msg);
        this.showUserName = false;
        this.changeUser("nickname", this.userName);
      }
    },
    onUpdate() {
      this.$refs.cropper.getCropData(async base64 => {
        let formdata = new FormData();
        let arr = base64.split(",");
        let img = window.atob(arr[1]);
        let mime = arr[0].match(/:(.*?);/)[1];
        let ia = new Uint8Array(img.length);
        for (var i = 0; i < img.length; i++) {
          ia[i] = img.charCodeAt(i);
        }
        let blob = new Blob([ia], { type: mime });
        let file = new File([blob], Math.floor(Math.random() * 900) + ".jpeg");
        formdata.append("img", file);
        let { data } = await this.axios("/studyapi/members/portrait", {
          method: "post",
          data: formdata
        });
        if (data.code) {
          this.$refs.cropper.clearCrop();
          this.cover = false;
          this.$toast.success(data.msg);
          this.changeUser("pic", data.data.url);
        }
      });
    },
    changeUser(type, value) {
      let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
      userInfo[type] = value;
      this.userInfo = userInfo;
      window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    beforeRead(file) {
      let that = this;
      this.img.file = file;
      var reader = new FileReader();
      reader.onload = function() {
        that.img.base64 = this.result;
      };
      reader.readAsDataURL(file);
      this.cover = true;
    },
    to(val) {
      this.$router.push("/center/" + val);
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  background: #fff;
  min-height: 100vh;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.8rem;
  margin: 0 0.4rem;
  color: #fff;
  position: relative;

  > div {
    width: 33%;
    font-size: 0.3rem;
    &:last-child {
      font-size: 0.36rem;
      text-align: right;
    }
  }
}
.author {
  position: relative;
  height: 35vh;
  margin-bottom: 0.7rem;
  background: #fff;
  font-size: 0.24rem;
  .bg {
    background: #7a86fb;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 0 0 30% 30%;
    &::before {
      background: #6572ed;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
      height: 80%;
      width: 100%;
      border-radius: 0 0 30% 30%;
      content: "";
    }
  }
  .card {
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    right: 0;
    margin: auto;
    z-index: inherit;
    width: 80%;
    height: 4rem;
    background: #fff;
    border-radius: 0.1rem;
    box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.2);
    .touxiang {
      width: 1.5rem;
      height: 1.5rem;
      margin: 0.3rem auto;
      background: #eee;
      border-radius: 50%;
      border: 0.1rem solid #e5e6fe;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      margin-top: -0.4rem;
      img {
        display: inline-block;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .name {
    text-align: center;
    height: 0.6rem;
    line-height: 0.6rem;
  }
  .version {
    text-align: center;
    height: 0.7rem;
    line-height: 0.7rem;
    span {
      margin: 0 auto;
      background: #6572ed;
      padding: 0.1rem 0.1rem;
      border-radius: 0.05rem;
      color: #fff;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #6572ed99;
    margin: 0 0.2rem;
    height: 1rem;
    .a {
      color: #6e6e6f;
      opacity: 0.7;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 0.2rem;
    }
    .b {
      color: #6e6e6f;
      font-size: 0.3rem;
    }
    .left {
      flex: 1;
      border-right: 1px solid #6572ed50;
    }
    .right {
      flex: 1;
    }
  }
}
.list {
  .van-cell__value {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .van-icon {
      font-size: 0.4rem;
      vertical-align: middle;
    }

    > div {
      .van-icon {
        color: #3677f7;
      }
    }
    span {
      margin-left: 0.2rem;
    }
  }
}
.cover {
  position: relative;
  height: 0;
  width: 100vw;
  overflow: hidden;
  padding-bottom: 80vh;
  background: #fff;
  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 100%;
  }
}
</style>