<!--
Template Name: index
Create author: qinglong
Create Time  : 2020-07-12
-->
<template>
  <div class="box">
    <div class="nav">
      <span :class="{active: !page.pid}" @click.stop="toClass({id:null})">全部</span>
      <template v-for="(item,index) in list.types">
        <span
          :key="index"
          :class="{active:item.value == page.pid}"
          @click.stop="toClass(item)"
        >{{item.key}}</span>
      </template>
    </div>
    <div style="height:.7rem"></div>
    <div class="list">
      <template v-for="(item,index) in list.list">
        <div
          class="item"
          :key="index"
          :style="'background:url('+item.pic+') no-repeat center / 100% 100%'"
          @click.stop="toDetails(item)"
        >
          <div class="title">
            <span>{{item.title}}</span>
          </div>
        </div>
      </template>
    </div>
    <van-pagination
      v-if="page.total>10"
      v-model="page.page"
      mode="simple"
      :total-items="page.total"
      :items-per-page="page.limit"
      @change="changePage"
    />
  </div>
</template>
<script>
export default {
  name: "shops",
  data() {
    return {
      id: 0,
      list: [],
      page: { limit: 10, page: null, total: null, pid: null }
    };
  },
  async created() {
    if (this.$route.query.pid) {
      this.page.pid = this.$route.query.pid;
    }
    if (this.$route.query.page) {
      let page = this.$route.query.page;
      this.page.page = page * 1;
    }
    this.getData();
  },
  methods: {
    toClass(item) {
      this.page.pid = item.value;
      this.$router.push({ path: "/shop", query: { page: 1, pid: item.value } });
      this.getData();
    },
    changePage(val) {
      this.page.page = val;
      this.$router.push({ path: "/shop", query: this.page });
      this.getData();
    },
    toDetails(item) {
      this.$router.push({ path: "details", query: { id: item.id } });
    },
    async getData() {
      let { data } = await this.axios("/studyapi/Renovation/list", {
        params: this.page
      });
      if (data.code) {
        this.list = data.data;
        this.page.total = data.count;
      }
    }
  }
};
</script>
<style lang='less' scoped>
.box {
  background: #fff;
}
.nav {
  position: fixed;
  top: 0.7rem;
  left: 0;
  right: 0;
  margin: auto;
  background: #fff;
  overflow-y: hidden;
  overflow-x: auto;
  height: 0.7rem;
  border-top: 1px solid #ccc;
  box-shadow: 0rem 0.1rem 0.1rem #ccc;
  white-space: nowrap;
  z-index: 999;
  span {
    margin: 0 0.2rem;
    line-height: 0.7rem;
    &.active {
      color: #f60;
    }
  }
}
.list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .item {
    width: 46%;
    margin: 0.2rem 2%;
    box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.1);
    height: 5.5rem;
    position: relative;
    .title {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      padding: 0.1rem;
      line-height: 1.6;
      font-size: 0.24rem;
      height: 0.7rem;
      color: #000;
      background: rgba(0, 0, 0, 0.2);
      text-align: center;
      color: #fff;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      span {
        text-align: left;
        display: inline-block;
      }
    }
  }
}
</style>