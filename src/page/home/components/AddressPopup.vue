<template>
  <div class="topic-popup-wrapper" v-show="status">
    <div class="topic-content-wrapper">
      <div class="topic-main-content">
        <div class="close-btn" @click="handleCloseTip">
          <img :src="CloseBtn" alt="CloseBtn">
        </div>
        <div class="topic-answer-box">
          <p>恭喜您！全对！请在此填写正确的收件地址，工作人员将与您联系，寄送礼包。</p>
          <input type="text" placeholder="电话号码" v-model="phone" disabled />
          <input type="text" placeholder="收件人" v-model="name" />
          <input type="text" placeholder="收件地址" v-model="address" />
        </div>
        <div class="btn-list-box">
          <button @click="handleSubmitClick">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CloseBtn from '../../../assets/img/btn_close.png'
  import { submitAddress } from '@/api/home'
  import { getStore } from '@/config/mUtils'
  export default {
    name: 'AddressPopup',
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
        phone: '',
        name: '',
        address: ''
      }
    },
    mounted () {
      this.phone = getStore('answerPhoneH5')
    },
    methods: {
      handleCloseTip () {
        this.$emit('handleCloseTip')
      },
      /**
       * 提交
       */
      handleSubmitClick () {
        if (!this.name) {
          this.$emit('handleCheckInput', '收件人不能为空');
          return;
        }
        if (!this.address) {
          this.$emit('handleCheckInput', '收件地址不能为空');
          return;
        }
        this.phone = getStore('answerPhoneH5')
        submitAddress(this.phone, this.name, this.address).then(res => {
          if (res.code === '000') {
            this.$emit('handleSubmitClick', true)
          } else {
            this.$emit('handleSubmitClick', false)
          }
        })

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
      @include wh(16rem, 23rem);
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -11.5rem;
      margin-left: -8rem;
      .topic-main-content{
        @include wh(100%, 100%);
        position: relative;
        background: url("../../../assets/img/pop_address.png");
        background-size: 100% 100%;
        .close-btn{
          width: 1.5rem;
          height: 2.5rem;
          position: absolute;
          right: 0.5rem;
          top: -0.2rem;
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
          margin-top: -5.5rem;
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
            text-indent: 0.5rem;
            line-height: 1rem;
            &::before{
              content: '';
              position: absolute;
              @include wh(0.3rem, 0.3rem);
              display: block;
              background: #bf0d00;
              left: 0;
              top: 0.25rem;
              border-radius: 5rem;
            }
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
