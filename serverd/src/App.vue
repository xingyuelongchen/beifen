<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,
body {
  padding: 0;
  margin: 0;
  font-size: 14px;
}

.container {
  max-width: 1200px;
  min-width: 1200px;
  width: 90%;
  margin: auto;
}
img {
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.page {
  margin: 40px auto;
  text-align: center;
}
</style>
