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
      :ansWerNumber="ansWerNumber"
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
      @handleCheckInput="handleCheckInput"
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
        phone: '',
        ansWerNumber: 0,
        answer: ['A','A','B', 'B','B', 'A', 'A', 'B', 'A']
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
       * 地址输入检查
       */
      handleCheckInput (val) {
        this.errorTxt = val;
        this.errorStatus = true
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
          if (val.data.user.tis === 0) {
            this.sucTxt = '开始接着上次的答的题继续答题';
          } else if (val.data.user.tis === 9) {
            this.sucTxt = '答题已经完成，请填写收件地址';
          } else {
            this.sucTxt = '开始接着上次的答的题继续答题';
          }
          this.sucStatus = true;
          this.updateTisRequest(val.data.user.phone, val.data.user.tis)
        }

      },
      /**
       * 更新题目
       */
      updateTisRequest (phone, tis) {
        this.ansWerNumber = tis;
        this.topicStatus = true;
        if (tis === 9) {
          this.addressStatus = true;
          this.topicStatus = false;
        }

        updateTis(phone, tis).then(res => {
          console.log(res);
        })
      },
      /**
       * 提交地址
       */
      handleAddressSubmitClick (val) {
        if (val) {
          this.addressStatus = false
          this.sucTxt = '提交成功';
          this.sucStatus = true;
        } else {
          this.addressStatus = true
          this.sucTxt = '提交失败，请重试';
          this.sucStatus = true;
        }
      },
      /**
       * 选择答案
       */
      handleSelectAnswerClick (val) {
        const index = this.ansWerNumber
        const value = this.answer[index]
        if (value === val) { // 正确
          this.updateTisRequest(this.phone, index + 1)
          this.sucTxt = '恭喜你回答正确';
          this.sucStatus = true;
        } else { // 错误
          this.updateTisRequest(this.phone, 99)
          this.topicStatus = false;
          this.errorTxt = '回答错误';
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
