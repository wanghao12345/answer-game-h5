<template>
  <div class="topic-popup-wrapper" v-show="status">
    <div class="topic-content-wrapper">
      <div
        class="topic-main-content"
        :class="`topic-main-content${ansWerNumber}`"
      >
        <div class="close-btn" @click="handleCloseTip">
          <img :src="CloseBtn" alt="CloseBtn">
        </div>
        <div
          class="topic-answer-box topic-answer-box0"
          v-if="ansWerNumber === 0"
        ></div>
        <div
          class="topic-answer-box topic-answer-box1"
          v-if="ansWerNumber === 1"
        ></div>
        <div
          class="topic-answer-box topic-answer-box2"
          v-if="ansWerNumber === 2"
        ></div>
        <div
          class="topic-answer-box topic-answer-box3"
          v-if="ansWerNumber === 3"
        ></div>
        <div
          class="topic-answer-box topic-answer-box4"
          v-if="ansWerNumber === 4"
        ></div>
        <div
          class="topic-answer-box topic-answer-box5"
          v-if="ansWerNumber === 5"
        ></div>
        <div
          class="topic-answer-box topic-answer-box6"
          v-if="ansWerNumber === 6"
        ></div>
        <div
          class="topic-answer-box topic-answer-box7"
          v-if="ansWerNumber === 7"
        ></div>
        <div
          class="topic-answer-box topic-answer-box8"
          v-if="ansWerNumber === 8"
        ></div>
        <div class="btn-list-box">
          <button @click="handleSelectAClick">{{btnTxt[ansWerNumber].A}}</button>
          <button @click="handleSelectBClick">{{btnTxt[ansWerNumber].B}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CloseBtn from '../../../assets/img/btn_close.png'
  export default {
    name: 'TopicPopup',
    props: {
      status: {
        type: Boolean,
        default: false
      },
      ansWerNumber: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        CloseBtn: CloseBtn,
        btnTxt: [
          {
            A: 'A: 入',
            B: 'B: 囚'
          },
          {
            A: 'A: 闽',
            B: 'B: 闯'
          },
          {
            A: 'A: 冈',
            B: 'B: 几'
          },
          {
            A: 'A: 鹳',
            B: 'B：鸡'
          },
          {
            A: 'A：呆',
            B: 'B：未'
          },
          {
            A: 'A: 杜迁',
            B: 'B：柴进'
          },
          {
            A: 'A：陆逊',
            B: 'B:边让'
          },
          {
            A: 'A：青天白日',
            B: 'B：白玉无瑕'
          },
          {
            A: 'A：一草一木',
            B: 'B：开源节流'
          }
        ]
      }
    },
    methods: {
      handleCloseTip () {
        this.$emit('handleCloseTip')
      },
      /**
       * 选择A
       */
      handleSelectAClick () {
        this.$emit('handleSelectAnswerClick', 'A')
      },
      /**
       * 选择B
       */
      handleSelectBClick () {
        this.$emit('handleSelectAnswerClick', 'B')
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
      @include wh(16rem, 15rem);
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -9rem;
      margin-left: -8rem;
      .topic-main-content{
        @include wh(100%, 100%);
        position: relative;
        &.topic-main-content0{
          background: url("../../../assets/img/pop_chulufengmang.png");
          background-size: 100% 100%;
        }
        &.topic-main-content1{
          background: url("../../../assets/img/pop_chulufengmang.png");
          background-size: 100% 100%;
        }
        &.topic-main-content2{
          background: url("../../../assets/img/pop_chulufengmang.png");
          background-size: 100% 100%;
        }
        &.topic-main-content3{
          background: url("../../../assets/img/pop_shenglizaiwang.png");
          background-size: 100% 100%;
        }
        &.topic-main-content4{
          background: url("../../../assets/img/pop_shenglizaiwang.png");
          background-size: 100% 100%;
        }
        &.topic-main-content5{
          background: url("../../../assets/img/pop_shenglizaiwang.png");
          background-size: 100% 100%;
        }
        &.topic-main-content6{
          background: url("../../../assets/img/pop_zhichengyiji.png");
          background-size: 100% 100%;
        }
        &.topic-main-content7{
          background: url("../../../assets/img/pop_zhichengyiji.png");
          background-size: 100% 100%;
        }
        &.topic-main-content8{
          background: url("../../../assets/img/pop_zhichengyiji.png");
          background-size: 100% 100%;
        }
        .close-btn{
          width: 1.5rem;
          height: 2.5rem;
          position: absolute;
          right: 0.5rem;
          top: -1.6rem;
          img{
            @include wh(100%, 100%);
          }

        }
        .topic-answer-box{
          position: absolute;
          @include wh(10rem, 5rem);
          left: 50%;
          top: 50%;
          margin-left: -5rem;
          margin-top: -3.5rem;
          &.topic-answer-box0{
            background: url("../../../assets/img/mimian1.png");
            background-size: 100% 100%;
          }
          &.topic-answer-box1{
            background: url("../../../assets/img/mimian2.png");
            background-size: 100% 100%;
          }
          &.topic-answer-box2{
            background: url("../../../assets/img/mimian3.png");
            background-size: 100% 100%;
          }
          &.topic-answer-box3{
            background: url("../../../assets/img/mimian4.png");
            background-size: 100% 100%;
          }
          &.topic-answer-box4{
            background: url("../../../assets/img/mimian5.png");
            background-size: 100% 100%;
          }
          &.topic-answer-box5{
            background: url("../../../assets/img/mimian6.png");
            background-size: 100% 100%;
          }
          &.topic-answer-box6{
            background: url("../../../assets/img/mimian7.png");
            background-size: 100% 100%;
          }
          &.topic-answer-box7{
            background: url("../../../assets/img/mimian8.png");
            background-size: 100% 100%;
          }
          &.topic-answer-box8{
            background: url("../../../assets/img/mimian9.png");
            background-size: 100% 100%;
          }
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
            width: 5rem;
            height: 2rem;
            margin: 0 0.2rem;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
</style>
