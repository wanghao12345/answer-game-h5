<template>
  <div class="suc-tip-box">
    <img :src="icon" alt="icon">
    <p>您的回答正确</p>
  </div>
</template>

<script>
  import icon from '../../../assets/img/icon_right@2x.png'
  export default {
    name: 'SucTip',
    components: {

    },
    data () {
      return {
        icon: icon
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../style/mixin";
  .suc-tip-box{
    @include wh(8rem, 8rem);
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -4rem;
    margin-top: -5rem;
    background: rgba(0,0,0,0.6);
    z-index: 6;
    border-radius: 0.5rem;
    img{
      width: 2.5rem;
      margin: 1.5rem auto;
      display: block;
    }
    p{
      font-size: 0.75rem;
      color: white;
      text-align: center;
    }
  }
</style>
