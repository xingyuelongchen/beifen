<!--
Template Name: 考试答题
Create author: qinglong
Create Time  : 2020-06-23
-->
<template>
  <div class="box" v-if="list.length">
    <van-swipe :show-indicators="false" ref="swipe" :loop="false" @change="changIndex">
      <template v-for="(item,index) in list">
        <van-swipe-item :key="index" v-if="item.type==1 || item.type==3">
          <div class="item">
            <div class="title">
              <span class="tag">{{['','单选题','多选题','判断题'][item.type]}}</span>
              <span>{{index+1}}、{{item.title}}</span>
            </div>
            <van-radio-group :value="radio[index]" class="select">
              <template v-for="(v,i) in item.option">
                <van-radio
                  class="option"
                  :name="['A','B','C','D','E'][i]"
                  :key="i"
                  icon-size="0.5rem"
                  :checked-color="item.answer==['A','B','C','D','E'][i]?'#07c160':'#e33'"
                  @click.native.stop="clickAnswer(['A','B','C','D','E'][i],index,item)"
                >{{['A','B','C','D','E'][i]}}、{{v}}</van-radio>
              </template>
            </van-radio-group>
          </div>
          <div
            class="answer"
            v-if="radio[index] && radio[index]!=item.answer"
          >正确答案是： {{item.answer }}</div>
        </van-swipe-item>
        <van-swipe-item :key="index" v-else-if="item.type==2">
          <div class="item">
            <div class="title">
              <span class="tag">多选题</span>
              <span>{{index+1}}、{{item.title}}</span>
            </div>
            <van-checkbox-group :value="radio[index]" class="select" :key="key">
              <template v-for="(v,i) in item.option">
                <van-checkbox
                  class="option"
                  icon-size="0.5rem"
                  shape="square"
                  :key="i"
                  :name="['A','B','C','D','E'][i]"
                  :checked-color="item.answer.includes(['A','B','C','D','E'][i])?'#07c160':'#e33'"
                  @click.native.stop="checkAnswer(['A','B','C','D','E'][i],index,item)"
                >{{['A','B','C','D','E'][i]}}、{{v}}</van-checkbox>
              </template>
            </van-checkbox-group>
          </div>
          <div class="answer" v-if="ifShow[index]">正确答案是： {{item.answer }}</div>
        </van-swipe-item>
      </template>
    </van-swipe>
    <div class="btn">
      <van-button type="info" block @click="prev" v-if="upIndex!==0 ">上一题</van-button>
      <van-button type="primary" block @click="next" v-if="upIndex<list.length-1">下一题</van-button>
      <van-button type="danger" block @click="submit" v-if="upIndex==list.length-1">交卷</van-button>
    </div>
    <div class="jilu">
      <div>
        <van-icon name="checked" color="#07c160" size="0.4rem" />
        {{dui.length}}题
      </div>
      <div>
        <van-icon name="clear" color="#e33" size="0.4rem" />
        {{radio.length-dui.length}}题
      </div>
      <div>
        <van-icon name="clock" color="#3677f7" size="0.4rem" />
        {{time.second}}:{{time.minute}}
      </div>
      <div>
        <van-button type="danger" block @click="submit">交卷</van-button>
      </div>
    </div>
  </div>
  <van-empty v-else description="题库整理中……" />
</template>
<script>
export default {
  name: "examination",
  data() {
    return {
      radio: [],
      answer: [],
      list: [],
      timer: null,
      index: 60 * 45,
      dui: [],
      key: 0,
      form: [],
      upIndex: 0,
      ifShow: [],
      time: { second: "00", minute: "00" }
    };
  },
  async created() {
    let { data } = await this.axios("/studyapi/Questions/list");
    if (data.code) {
      this.list = data.data;
      this.answer = data.data.map(e => e.answer);
      this.countdown();
    }
  },

  methods: {
    clickAnswer(a, index, item) {
      if (this.radio[index]) return;
      this.radio[index] = this.radio[index] ? this.radio[index] + a : a;
      this.form.push({ id: item.id, answer: a });
      this.dui = this.radio.filter((e, i) => {
        if (typeof e == "string") {
          return e == this.answer[i];
        }
        if (typeof e == "object" && e.length) {
          let a = JSON.parse(JSON.stringify(e));
          return a.sort().join("") == this.answer[i];
        }
      });

      this.show(item, index);
    },
    checkAnswer(a, index, item) {
      if (!this.radio[index]) this.radio[index] = [];
      if (this.radio[index] && this.radio[index].includes(a)) return;
      this.radio[index].push(a);
      let position;
      let arr = this.form.filter((e, i) => {
        position = i;
        return e.id == item.id;
      });
      if (arr.length) {
        this.form[position] = {
          id: item.id,
          answer: this.radio[index].join("")
        };
      } else {
        this.form.push({ id: item.id, answer: this.radio[index].join("") });
      }
      this.key = Math.floor(Math.random() * 100);
      this.dui = this.radio.filter((e, i) => {
        if (typeof e == "string") {
          return e == this.answer[i];
        }
        if (typeof e == "object" && e.length) {
          let a = JSON.parse(JSON.stringify(e));
          return a.sort().join("") == this.answer[i];
        }
      });
      this.show(item, index);
    },
    countdown() {
      clearTimeout(this.timer);
      this.index--;
      this.time = {
        second:
          Math.floor(this.index / 60) < 10
            ? "0" + Math.floor(this.index / 60)
            : Math.floor(this.index / 60),
        minute: this.index % 60 < 10 ? "0" + (this.index % 60) : this.index % 60
      };
      if (this.index == 0) {
        clearTimeout(this.timer);
        this.$toast.fail("考试已截止");
        this.submit();
        return;
      }
      this.timer = setTimeout(this.countdown, 1000);
    },
    show(item, index) {
      if (this.radio[index] && typeof this.radio[index] == "object") {
        this.radio[index].forEach(e => {
          if (!item.answer.includes(e)) {
            this.ifShow[index] = true;
          }
        });
      }
    },
    prev() {
      this.upIndex--;
      this.$refs.swipe.prev();
    },
    next() {
      this.upIndex++;
      this.$refs.swipe.next();
    },
    changIndex(index) {
      this.upIndex = index;
      if (typeof this.ifShow[index] !== "boolean") this.ifShow[index] = false;
    },
    async submit() {
      if (this.radio.length < this.list.length) {
        let bool = await this.$dialog.confirm({
          title: "警告！",
          message: "还有未答题目，是否继续交卷？"
        });
        if (!bool) return;
      }
      let form = this.form.map((e, i) => {
        return {
          ...e,
          status: e.answer == this.list[i].answer
        };
      });
      if (!form.length) {
        this.$toast.fail("请答题后再提交");
        return;
      }
      let { data } = await this.axios("/studyapi/Questions/answer", {
        method: "post",
        data: { answer: form }
      });
      if (data.code) {
        await this.$dialog({
          title: data.msg,
          message: "本次得分：" + data.data + "分"
        });

        this.$router.replace("/center");
      }
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  background: #fff;
  min-height: 90vh;

  .item {
    padding: 0 0.3rem;
    overflow: hidden;
    font-size: 0.34rem;
    .title {
      margin: 0.3rem 0;
      text-align: left;
      line-height: 1.7;
      .tag {
        padding: 0.05rem 0.15rem;
        background: #606dea;
        color: #fff;
        border-radius: 0.1rem;
        font-size: 0.3rem;
        margin-right: 0.2rem;
      }
    }
    .select {
      min-height: 50vh;
      .option {
        min-height: 1.5rem;
        font-size: 0.3rem;
        text-align: left;
        /deep/ .van-radio__label {
          line-height: 1.8;
        }
      }
    }
  }
  .btn {
    height: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .van-button {
      margin: 0 0.3rem;
    }
  }
  .jilu {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.8rem;
    z-index: 9999;
    background: #fff;
    box-shadow: 0 0 0.2rem #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.3rem;
    > div {
      flex: 1;
      .van-icon {
        vertical-align: middle;
      }
    }
  }
  .answer {
    font-size: 0.4rem;
    height: 1rem;
    line-height: 1rem;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.1);
  }
}
</style>