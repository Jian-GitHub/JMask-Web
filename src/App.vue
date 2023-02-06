<template>
  <router-view id="view"></router-view>

  <template>
    <div id="app">
      <router-view />
      <div style="position:fixed;text-align:center;bottom:0;margin:0 auto;width:100%;color: #5c6b77">
        <a target="_blank" style="color: #5c6b77" href="https://beian.miit.gov.cn/">
          琼ICP备2020005513号-1
        </a>
        &nbsp;
        @2020-2022 祁剑 版权所有
        &nbsp;
        <a target="_blank" style="color: #5c6b77" href="http://www.beian.gov.cn/portal/registerSystemInfo">
          公安备案号: 46010802000682
        </a>
      </div>
    </div>
  </template>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px -8px auto;
}
html,body, #app {
  height: 100%;
}
</style>
