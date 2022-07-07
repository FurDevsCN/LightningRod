<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'App'
}
</script>

<style>
body{
  background: rgb(240, 240, 240);
}
#app {
    max-width: 1024px;
    max-height: 700px;
    background: rgba(255, 255, 255, 1);
    border-radius:30px;
    box-shadow: 5px 5px 5px #bbbbbb;
    display: flex;
    position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;
}
</style>
