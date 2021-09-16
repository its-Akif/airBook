<template>

  <div id="nav">
    <SideNav />
    
  </div>
  <router-view />
  
</template>

<script>

import SideNav from "./components/Side-nav.vue"
import getBrowserFingerprint from 'get-browser-fingerprint';

export default{
  components:{
    SideNav,
  },
  data(){
    // return {
    //   fingerprint:''
    // }
  },
  computed:{
     fingerprint()
    {
      const print=getBrowserFingerprint();
      console.log("print",print)
      return print;
    }
    
  }
}
  
</script>


<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:aliceblue;
  
}




#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
