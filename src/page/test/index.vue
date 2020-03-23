<template>
  <div class="wrapper">
    <nav class="navbar navbar-light fixed-top rtc-primary-bg">
      <h5>基础音视频通话</h5>
    </nav>
    <form id="form">
      <div class="custom-container container">
        <div class="row">
          <div class="custom-row-container">
            <div class="row">
              <div class="col-ms">
                <div class="card custom-card">
                  <div class="form-group">
                    <label for="userId" class="bmd-label-floating">用户ID:</label>
                    <input type="text" class="form-control" name="userId" id="userId">
                  </div>
                  <div class="form-group bmd-form-group">
                    <label for="roomId" class="bmd-label-floating">房间号:</label>
                    <input type="text" class="form-control" name="roomId" id="roomId">
                  </div>
                  <div class="form-group bmd-form-group">
                    <button id="join" type="button" class="btn btn-raised btn-primary rtc-primary-bg">加入房间</button>
                    <button id="leave" type="button" class="btn btn-raised btn-primary rtc-primary-bg">离开房间</button>
                    <button id="publish" type="button" class="btn btn-raised btn-primary rtc-primary-bg">开始推流</button>
                    <button id="unpublish" type="button" class="btn btn-raised btn-primary rtc-primary-bg">停止推流</button>
                  </div>
                </div>
                <div class="card">
                  <button class="btn btn-raised rtc-expand-btn" id="settings" data-toggle="collapse"
                          data-target="#setting-collapse" aria-expanded="false" aria-controls="collapse">
                    设置
                  </button>
                  <div id="setting-collapse" class="collapse" aria-labelledby="setting-collapse">
                    <div class="card-body">
                      <div class="form-group">
                        <label for="cameraId" class="bmd-label-floating">摄像头</label>
                        <select class="form-control" id="cameraId" name="cameraId">
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="microphoneId" class="bmd-label-floating">麦克风</label>
                        <select class="form-control" id="microphoneId" name="microphoneId">
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="video-grid" id="video_grid">
      <div id="local_stream" class="video-placeholder">
        <div id="local_video_info" class="video-info"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/bootstrap-material-design.min.css";
  @import "../../assets/css/common.css";
  @import "../../assets/css/toastify.min.css";
  .wrapper{
    width: 100%;
    height: 100%;
  }
</style>
