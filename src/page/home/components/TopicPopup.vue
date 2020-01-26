<template>
  <div class="topic-popup-wrapper">
    <div class="topic-content-wrapper">
      <div class="topic-main-content">
        <div class="close-btn">
          <img :src="CloseBtn" alt="CloseBtn">
        </div>
        <div class="topic-answer-box"></div>
        <div class="btn-list-box">
          <button>A:陆逊</button>
          <button>B:边让</button>
        </div>
      </div>
    </div>
    <SucTip />
  </div>
</template>

<script>
  import SucTip from './SucTip'
  import CloseBtn from '../../../assets/img/btn_close.png'
  export default {
    name: 'TopicPopup',
    components: {
      SucTip
    },
    data () {
      return {
        CloseBtn: CloseBtn
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../style/mixin";
  .topic-popup-wrapper{
    @include wh(100%, 100%);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    z-index: 5;
    .topic-content-wrapper{
      @include wh(16rem, 14rem);
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -9rem;
      margin-left: -8rem;
      .topic-main-content{
        @include wh(100%, 100%);
        position: relative;
        background: url("../../../assets/img/pop_chulufengmang.png");
        background-size: 100% 100%;
        .close-btn{
          width: 1.5rem;
          height: 2.5rem;
          position: absolute;
          right: 0.5rem;
          top: -1.4rem;
          img{
            @include wh(100%, 100%);
          }

        }
        .topic-answer-box{
          position: absolute;
          @include wh(10rem, 5rem);
          background: url("../../../assets/img/mimian1.png");
          background-size: 100% 100%;
          left: 50%;
          top: 50%;
          margin-left: -5rem;
          margin-top: -3.5rem;
        }
        .btn-list-box{
          @include wh(100%, 3rem);
          position: absolute;
          bottom: 1rem;
          display: flex;
          justify-content: center;
          button{
            background: #f24336;
            color: white;
            border-radius: 2rem;
            width: 4.5rem;
            height: 2rem;
            margin: 0 0.5rem;
            font-size: 0.85rem;
          }
        }
      }
    }
  }
</style>
