<template>
  <div id="app" :style="appStyle">
    <div class="main-header-wrapper" style="display: none">
      <Header />
    </div>
    <div class="main-body-wrapper">
      <transition name="router-fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
    <div class="main-footer-wrapper" v-if="showToolBar" style="display: none">
      <Footer />
    </div>
    <div class="loading-main-wrapper" v-if="$store.getters.loading" style="display: none">
      <Loading />
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
  import Loading from '@/components/Loading'
  export default {
    name: 'app',
    components: {
      Header,
      Footer,
      Loading
    },
    data () {
      return {
        showToolBar: false,
        appStyle: {
          paddingBottom: '0rem'
        }
      }
    },
    watch:{
      $route (to) {
        if (to.meta.toolBar) {
          this.showToolBar = true;
          this.appStyle.paddingBottom = '0rem'
        } else {
          this.showToolBar = false;
          this.appStyle.paddingBottom = '0'
        }
      }
    }
  }
</script>

<style lang="scss">
  @import './style/common';
  @import './style/mixin';
  #app{
    @include wh(100%, 100%);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    .main-header-wrapper{
      @include wh(100%, 3rem);
      position: absolute;
      left: 0;
      top: 0;
    }
    .main-body-wrapper{
      @include wh(100%, 100%);
      overflow-y: auto;
    }
    .main-footer-wrapper{
      @include wh(100%, 3rem);
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
</style>
