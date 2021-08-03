<template>
  <div id="app">
    <Navheader></Navheader>
   <router-view class="home"></router-view>
   <Footer></Footer>
  </div>
</template>

<script>
import HomeView from './home.vue'
import Navheader from "../src/components/Navheader.vue"
import Footer from './Footer.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
     
    HomeView,
    Navheader,
    Footer
    
  
    
  }
}
</script>

<style>

</style>

