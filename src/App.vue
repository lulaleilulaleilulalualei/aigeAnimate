<template>
  <div id="app">
    <cxkPdl></cxkPdl>
  </div>
</template>

<script>
import rem from './assets/js/rem.js'
import cxkPdl from './components/cxk_pdl'

export default {
  name: "app",
  created() {
    rem()
  },
  components: { cxkPdl },
  mounted() {
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
