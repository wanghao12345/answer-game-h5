<template>
  <div class="home-wrapper">
    <img class="bottom-img-box" :src="BottomImg" alt="BottomImg">
    <img class="button-img-box" :src="ButtonImg" alt="ButtonImg">
    <img class="icon-img-box" :src="IconImg" alt="IconImg">
    <TopicPopup


    />
  </div>
</template>

<script>
  import BottomImg from '../../assets/img/img_huodongguize.png'
  import ButtonImg from '../../assets/img/btn_lijidati@2x.png'
  import IconImg from '../../assets/img/logo@2x.png'

  import TopicPopup from './components/TopicPopup'
  export default {
    name: "Home",
    components: {
      TopicPopup
    },
    data () {
      return {
        BottomImg: BottomImg,
        ButtonImg: ButtonImg,
        IconImg: IconImg
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../style/mixin";
  .home-wrapper{
    @include wh(100%, 100%);
    background: url("../../assets/img/img_bg.png");
    background-size: 100% 100%;
    position: relative;
    .bottom-img-box{
      position: absolute;
      width: 100%;
      bottom: 0rem;
    }
    .button-img-box{
      width: 70%;
      position: absolute;
      bottom: 2rem;
      z-index: 2;
      left: 15%;
    }
    .icon-img-box{
      width: 8rem;
      position: absolute;
      top: 1rem;
      z-index: 2;
      left: 1rem;
    }
  }
</style>
