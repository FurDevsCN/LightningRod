<template>
  <div class="wrapper">
    <div class="DailyWallpaper"></div>
    <div class="app">
      <div class="container">
        <div class="left-container glass">
          <div class="toolsbar">
            <span class="title">{{ msg }}</span>
          </div>
          <div class="form-outer">
            <p class="second-title">
              <span size="3">请输入账号查询:</span>
            </p>
            <form action="" class="form-sign" method="post">
              <input type="text" class="input-form" name="qq" id="qq" placeholder="请输入..">
              <div class="submit anim">
                <input class="submit-action" type="submit" value="查询" >
              </div>
            </form>
          </div>
        </div>
        <div class="right-container glass">
          <div class="banner-image">
            <slider animation="normal" width=auto height="600px">
              <slider-item v-for="(i, index) in list" :key="index">
                <img :src="i">
              </slider-item>
            </slider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Furry LightningRod',
      list: [
        'https://img1.imgtp.com/2022/07/07/p6ewLX0s.jpg',
        'https://img1.imgtp.com/2022/07/07/6Jc8Ispt.jpg',
        'https://img1.imgtp.com/2022/07/07/JVaTwnkX.jpg',
        'https://img1.imgtp.com/2022/07/07/m3kYFBbs.jpg'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/style.css">
</style>
