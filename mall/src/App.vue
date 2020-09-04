<template>
  <div id="app">
    
    <router-view></router-view>
    <home/>
    <storage/>
  </div>
</template>

<script>
import Home from './pages/home.vue'
import Storage from './storage/index.js'


export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
   Home,Storage
  },
  mounted(){
    Storage.setItem('user',{a:1});
  }
}
</script>

<style>
#app {
  
}
</style>
