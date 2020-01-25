<template>
  <div>
    
    <Header/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tabbar/>
    
  </div>
    
</template>

<script>
import Header from './components/common/Header'
import Tabbar from './components/common/Tabbar'
  export default {
    name: 'app',
    components: {
      Header,
      Tabbar
    }
  }
</script>

<style>
  @import "./assets/css/common.css";
  @import "../public/iconfont/iconfont.css"

</style>


