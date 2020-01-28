<template>
  <div class="topic-popup-wrapper" v-if="status">
    <div class="topic-content-wrapper">
      <div class="topic-main-content">
        <div class="close-btn" @click="handleCloseTip">
          <img :src="CloseBtn" alt="CloseBtn">
        </div>
        <div class="topic-answer-box">
          <input type="text" placeholder="请输入您的手机号" v-model="phone" />
          <p v-if="tip">{{tip}}</p>
        </div>
        <div class="btn-list-box">
          <button @click="handleStartAnswerClick">开始答题</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CloseBtn from '../../../assets/img/btn_close.png'

  import { checkUser } from '@/api/home'
  import { setStore } from '@/config/mUtils'
  export default {
    name: 'PhonePopup',
    props: {
      status: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        CloseBtn: CloseBtn,
        tip: '一个手机号只能参与一次，请关注CCN公众号其他活动',
        phone: ''
      }
    },
    methods: {
      handleCloseTip () {
        this.$emit('handleCloseTip')
      },
      /**
       * 选择A
       */
      handleStartAnswerClick () {
        if(!(/^1[3456789]\d{9}$/.test(this.phone))){
          this.tip = '请输入正确的手机号码';
          return;
        }
        checkUser(this.phone).then(res => {
          const { code } = res
          switch (code) {
            case "999":
              this.tip = '请求错误,请重新试一下';
              break;
            case "000":
              setStore('answerPhoneH5', this.phone);
              this.$emit('handleStartAnswerClick', {
                type: '000',
              });
              break;
            case "001":
              setStore('answerPhoneH5', this.phone);
              this.$emit('handleStartAnswerClick', {
                type: '001',
                data: res
              })
              break;
            case "002":
              this.tip = '一个手机号只能参与一次，请关注CCN公众号其他活动';
              break;
            case "003":
              this.tip = '答题错误过，不能参加';
              break;
          }
          console.log(res);
        });
      },
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
      @include wh(16rem, 12rem);
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -9rem;
      margin-left: -8rem;
      .topic-main-content{
        @include wh(100%, 100%);
        position: relative;
        background: url("../../../assets/img/pop_phone.png");
        background-size: 100% 100%;
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
          @include wh(12rem, 6rem);
          left: 50%;
          top: 50%;
          margin-left: -6rem;
          margin-top: -3.5rem;
          input{
            @include wh(100%, 3rem);
            text-align: center;
            background: rgba(0,0,0,0);
            border-bottom: 2px solid #fab19d;
            font-size: 0.9rem;
            font-weight: 550;
          }
          input::-webkit-input-placeholder {
            color: black;
          }
          input::-moz-input-placeholder {
            color: black;
          }
          input::-ms-input-placeholder {
            color: black;
          }
          p{
            color: #bf0d00;
            font-size: 0.6rem;
            margin-top: 0.5rem;
            font-weight: bold;
            position: relative;
            text-indent: 0.7rem;
            line-height: 1rem;
            &::before{
              content: '';
              position: absolute;
              @include wh(0.3rem, 0.3rem);
              display: block;
              background: #bf0d00;
              left: 0;
              top: 0.3rem;
              border-radius: 50%;
            }
          }
        }
        .btn-list-box{
          @include wh(100%, 3rem);
          position: absolute;
          bottom: 0.2rem;
          display: flex;
          justify-content: center;
          button{
            background: #f24336;
            color: white;
            border-radius: 2rem;
            width: 7rem;
            height: 2rem;
            margin: 0 0.5rem;
            font-size: 0.85rem;
          }
        }
      }
    }
  }
</style>
