<template>
  <div>视频



  <button @click="start">开始</button>

    <div class="video-grid" id="video_grid">
      <div id="local_stream" class="video-placeholder">
        <div id="local_video_info" class="video-info"></div>
      </div>
    </div>

  </div>
</template>

<script>
  import RTCClient from '@/utils/rtc-client'
  import { genTestUserSig } from '@/utils/GenerateTestUserSig'
  export default {
    name: "index",
    mounted () {

      console.log('创建');

    },
    methods: {
      start () {
        const config = genTestUserSig('user_79441211');
        this.client = new RTCClient({
          userId: 'user_79441211',
          roomId: '889988',
          sdkAppId: config.sdkAppId,
          userSig: config.userSig
        })

        this.client.join()
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/common.css";
</style>
