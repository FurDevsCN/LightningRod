<template>
    <div class="wrapper">
      <div class="container">
        <div class="container-left">
          <div class="form-outer">
            <h2 class="title">
                {{title}}
            </h2>
            {{msg}}
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
      title: "HelloWorld",
      msg: "Hello Vue! This is a SPA application use vue!",
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../assets/style.css"></style>