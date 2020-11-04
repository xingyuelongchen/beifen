<!--
Template Name: 学习记录
Create author: qinglong
Create Time  : 2020-06-23
-->
<template>
  <div class="box">
    <van-list>
      <template v-for="(item,index) in list">
        <van-cell :key="index">
          <div class="item" @click="toPlay(item)">
            <span class="title">{{item.title}}</span>
            <span class="hours">{{item.hours}}</span>
            <span class="time" :class="{active:item.status}">{{item.status?'已看完':'未看完'}}</span>
          </div>
        </van-cell>
      </template>
    </van-list>
    <van-pagination
      mode="simple"
      v-if="page.limit<page.total"
      v-model="page.page"
      :total-items="page.total"
      @change="changePage"
    />
  </div>
</template>
<script>
export default {
  name: "learning",
  data() {
    return { list: [], page: { limit: 20, page: 1, total: 0 } };
  },
  async created() {
    this.getData();
  },
  methods: {
    async getData() {
      let { data } = await this.axios("/studyapi/members/record", {
        params: this.page
      });
      if (data.code) {
        this.list = data.data;
        this.page.total = data.count;
      }
    },
    changePage(val) {
      this.page.page = val;
      this.getData();
    },
    toPlay(item) {
      this.$router.push({
        path: "/school/details",
        query: { type: item.type, id: item.video_id }
      });
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  margin: 0.4rem auto;
}
.item {
  span {
    display: inline-block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .title {
    width: 60%;
    padding: 0 0.2rem;
    text-align: left;
  }
  .hours {
    text-align: center;
    width: 15%;
  }
  .time {
    text-align: center;
    width: 15%;
    color: #e33;
    &.active {
      color: #60c306;
    }
  }
}
</style>