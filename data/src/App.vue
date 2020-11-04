<template>
  <div id="app">
    <router-view />
    <van-number-keyboard safe-area-inset-bottom />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  color: #fff;
  font-size: 0.14rem;
  overflow-x: hidden;
}
html,
body {
  border: 0;
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
