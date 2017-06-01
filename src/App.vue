<template>
  <div id="app">
    <div class="tab">
        <div class="tab-item"><router-link to="/">首页</router-link></div>
    	<div class="tab-item"><router-link to="/channel">频道</router-link></div>
      <div class="tab-item"><router-link to="/ranking">排行</router-link></div>
      <div class="tab-item"><router-link to="/person">我的</router-link></div>
    </div>
     <router-view></router-view>
  </div>
</template>

<script>
// import display from './components/display.vue'
// import increment from './components/increment.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    // display,
    // increment
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tab{
 display: block;
 width: 100%;
}
.tab-item{
  display: inline-block;
  width: 25%;
}
</style>
