<template>
  <div class="home-wrapper">
    <img
      class="bottom-img-box"
      :src="BottomImg"
      alt="BottomImg"
    >
    <img
      class="button-img-box"
      :src="ButtonImg"
      alt="ButtonImg"
      @click="handleAnswerClick"
    >
    <img
      class="icon-img-box"
      :src="IconImg"
      alt="IconImg"
    >
    <!--问题框-->
    <TopicPopup
      :status="topicStatus"
      @handleCloseTip="handleCloseTopicTip"
      @handleSelectAnswerClick="handleSelectAnswerClick"
    />

    <!--手机框-->
    <PhonePopup
      :status="phoneStatus"
      @handleCloseTip="handleClosePhoneTip"
      @handleStartAnswerClick="handleStartAnswerClick"
    />

    <!--地址框-->
    <AddressPopup
      :status="addressStatus"
      @handleCloseTip="handleCloseAddressTip"
      @handleSubmitClick="handleAddressSubmitClick"
    />

    <!--成功-->
    <SucTip
      :status="sucStatus"
      :txt="sucTxt"
      @handleCloseTip="handleCloseSucTip"
    />
    <!--失败-->
    <ErrorTip
      :status="errorStatus"
      :txt="errorTxt"
      @handleCloseTip="handleCloseErrorTip"
    />
  </div>
</template>

<script>
  import BottomImg from '../../assets/img/img_huodongguize.png'
  import ButtonImg from '../../assets/img/btn_lijidati@2x.png'
  import IconImg from '../../assets/img/logo@2x.png'

  import TopicPopup from './components/TopicPopup'
  import PhonePopup from './components/PhonePopup'
  import AddressPopup from './components/AddressPopup'
  import SucTip from './components/SucTip'
  import ErrorTip from './components/ErrorTip'

  import { updateTis } from '@/api/home'
  import { getStore } from '@/config/mUtils'
  export default {
    name: "Home",
    components: {
      TopicPopup,
      SucTip,
      ErrorTip,
      PhonePopup,
      AddressPopup
    },
    data () {
      return {
        BottomImg: BottomImg,
        ButtonImg: ButtonImg,
        IconImg: IconImg,
        sucStatus: false,
        sucTxt: '',
        errorStatus: false,
        errorTxt: '',
        topicStatus: false,
        phoneStatus: true,
        addressStatus: false,
        phone: ''
      }
    },
    mounted () {

    },
    methods: {
      /**
       * 关闭成功提示
       */
      handleCloseSucTip () {
        this.sucStatus = false
      },
      /**
       * 关闭失败提示
       */
      handleCloseErrorTip () {
        this.errorStatus = false
      },
      /**
       * 关闭问题框
       */
      handleCloseTopicTip () {
        this.topicStatus = false
      },
      /**
       * 关闭手机问题框
       */
      handleClosePhoneTip () {
        this.phoneStatus = false
      },
      /**
       * 关闭地址框
       */
      handleCloseAddressTip () {
        this.addressStatus = false
      },
      /**
       * 回答问题
       */
      handleAnswerClick () {
        this.phoneStatus = true
      },
      /**
       * 开始答题
       */
      handleStartAnswerClick (val) {

        this.phoneStatus = false
        this.phone = getStore('answerPhoneH5')

        if (val.type === '000') { // 从头开始
          this.sucTxt = '开始答题';
          this.sucStatus = true;
          this.updateTisRequest(this.phone, 0)
        }

        if (val.type === '001') { // 接着开始
          this.sucTxt = '开始接着上次的答的题继续答题';
          this.sucStatus = true
          this.updateTisRequest(val.data.user.phone, val.data.user.tis)
        }

      },
      updateTisRequest (phone, tis) {
        updateTis(phone, tis).then(res => {
          console.log(res);
        })
      },
      /**
       * 提交地址
       */
      handleAddressSubmitClick () {
        this.addressStatus = false
      },
      /**
       * 选择答案
       */
      handleSelectAnswerClick (val) {
        if (val === 'A') {
          this.sucStatus = true
        }

        if (val === 'B') {
          this.errorStatus = true
        }
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
