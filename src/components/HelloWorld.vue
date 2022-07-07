<template>
    <div class="wrapper">
      <div class="container">
        <div class="container-left">
          <div class="form-outer">
            <h2 class="title">{{msg}}</h2>
            <p class="second-title"><font size="3">请输入账号查询:</font></p>

            <form action="" class="form-sign" method="post">
                <input type="text" class="input-from" name="qq" id="qq" placeholder="请输入..">
                <div class="submit">
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" value="查询" class="submit-action">
                </div>
            </form>
          </div>
        </div>
        <div class="container-right">
            <div class="banner-image">
                <slider animation="normal" width= auto height="600px">
                    <slider-item v-for="(i, index) in list" :key="index">
                        <img :src="i">
                    </slider-item>
                </slider>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HelloWorld',
  data () {
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
<style scoped src="../assets/style.css"></style>
