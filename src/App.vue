<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import rem from './assets/js/rem.js'
export default {
  name: "app",
  created() {
    rem()
  }
};
</script>

<style lang="less">
  #app {
    width: 100%;
    height: 100%;
    background-color: #908B91;
  }
</style>
