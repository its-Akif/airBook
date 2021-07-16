<template>
  <div id="nav">
    <SideNav />
  </div>
  <router-view />
</template>

<script>

import SideNav from "./components/Side-nav.vue"

export default{
  components:{
    SideNav,
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
