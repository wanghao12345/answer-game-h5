<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {

      }
    },
  }
</script>

<style lang="scss">
  @import "./style/mixin";
  #app{
    @include wh(100%, 100%);
    box-sizing: border-box;
    padding-top: 3rem;
    overflow: hidden;
  }
</style>
