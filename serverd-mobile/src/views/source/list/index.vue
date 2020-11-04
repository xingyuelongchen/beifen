<!--
Template Name: 列表
Create author: qinglong
Create Time  : 2020-06-19
-->
<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="selectList" @change="toogleClass" />
    </van-dropdown-menu>
    <div class="shop-list" v-if="list.length>0">
      <template v-for="(item,index) in list">
        <a target="_blank" :href="item.url" :key="index">
          <div class="item">
            <div class="img">
              <img :src="item.pic" alt />
            </div>
            <div class="title">
              <span>{{item.title}}</span>
            </div>
            <div class="price">￥{{item.retail_price}}</div>
          </div>
        </a>
      </template>
      <van-pagination
        v-if="page.total>page.limit"
        v-model="page.page"
        mode="simple"
        :total-items="page.total"
        :items-per-page="page.limit"
        @change="changePage"
      />
    </div>
    <van-empty v-else description="暂无商品哦~"></van-empty>
  </div>
</template>
<script>
export default {
  name: "list",
  data() {
    return {
      value: 0,
      selectList: [],
      list: [],
      type: {},
      page: { page: 1, limit: 10, total: 0 },
      option: [
        { text: "默认排序", value: 1 },
        { text: "价格排序", value: 2 },
        { text: "销量排序", value: 3 },
        { text: "好评排序", value: 4 }
      ]
    };
  },
  async created() {
    if (this.$route.query.type) {
      this.type.type = this.$route.query.type;
      this.getData();
    }
  },
  methods: {
    toogleClass(val) {
      this.type.id = val;
      this.getData();
    },
    changePage(val) {
      this.page.page = val;
      this.getData();
    },
    async getData() {
      let { data } = await this.axios("/studyapi/Goods/screen", {
        params: Object.assign({}, this.type, this.page)
      });
      if (data.code) {
        this.page.total = data.count;
        this.list = data.data.list;
        this.selectList = data.data.types.map(e => {
          return {
            text: e.label,
            value: e.id
          };
        });
        this.selectList.unshift({ text: "全部分类", value: 0 });
      }
    }
  }
};
</script>
<style lang='less' scoped>
.dropdownMenu {
  font-size: 0.3rem;
  margin: 0.5rem auto;
  span {
    font-size: 0.2rem;
    margin: 0.05rem 0.08rem;
    padding: 0.2rem;
    &.active {
      background: #eee;
      border-radius: 0.05rem;
    }
  }
}
.shop-list {
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: 49% 49%;
  grid-column-gap: 2%;
  grid-row-gap: 0.2rem;
  margin: 0.2rem;
  .item {
    background: #fff;
    box-shadow: 0 0 0.1rem #ccc;
    border-radius: 0.05rem;
    .img {
      width: 100%;
      height: 3rem;
      overflow: hidden;
      img {
        display: inline-block;
        width: 100%;
        object-fit: contain;
      }
    }

    .title {
      font-size: 0.2rem;
      text-align: center;
      padding: 0.05rem;
      color: #666;
      .text {
        display: inline-block;
        text-align: left;
        padding: 0.05rem;
        span {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
    .price {
      color: #e33;
      font-size: 0.22rem;
    }
  }
}
</style>