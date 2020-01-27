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
      @handleCloseTip="handleCloseSucTip"
    />
    <!--失败-->
    <ErrorTip
      :status="errorStatus"
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
        errorStatus: false,
        topicStatus: false,
        phoneStatus: false,
        addressStatus: true
      }
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
        this.topicStatus = true
      },
      /**
       * 开始答题
       */
      handleStartAnswerClick () {

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
