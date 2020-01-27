<template>
  <div class="suc-tip-box" v-show="status">
    <img :src="icon" alt="icon">
    <p>{{txt}}</p>
  </div>
</template>

<script>
  import icon from '../../../assets/img/icon_error@2x.png'
  export default {
    name: 'ErrorTip',
    props: {
      status: {
        type: Boolean,
        default: false
      },
      txt: {
        type: String,
        default: ''
      }
    },
    watch: {
      status: {
        handler (val) {
          if (val) {
            setTimeout(() => {
              this.handleCloseTip()
            }, 2000)
          }
        },
        immediate: true
      }
    },
    data () {
      return {
        icon: icon
      }
    },
    mounted () {

    },
    methods: {
      /**
       * 关闭弹窗
       */
      handleCloseTip () {
        this.$emit('handleCloseTip')
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
