<template>
  <div class="nav ps-5 pt-3">
    <div>
      <h1 class="logo"><span id="air">air</span>book</h1>

      <div class="nav-links mt-5 row">
        <router-link :to="{ name: 'Home' }" class="col-10">
          <div class="py-3">
            <i class="fa fa-home" aria-hidden="true"></i> &nbsp; Home
          </div>
        </router-link>

        <router-link :to="{ name: 'Library' }" class="col-10">
          <div class="py-3">
            <i class="fa fa-book" aria-hidden="true"></i> &nbsp; Library
          </div>
        </router-link>

        <router-link :to="{ name: 'Search' }" class="col-10">
          <div class="py-3">
            <i class="fa fa-search" aria-hidden="true"></i> &nbsp;Search
          </div>
        </router-link>
         <router-link :to="{ name: 'Login' }" class="col-10">
          <div class="py-3">
            <i class="fa fa-search" aria-hidden="true"></i> &nbsp;Profile
          </div>
        </router-link>

        <a href="http://airbook-app.herokuapp.com/accounts/google/login/?process=login/" class="col-10">
          
            <div class="py-3">
              <i class="fa fa-sign-in" aria-hidden="true"></i> &nbsp;Login
            
            </div>
          
        </a>
         
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            link:"http://airbook-app.herokuapp.com/accounts/google/login/?process=login/",
        }
        }
};
</script>
<style scoped>
.nav {
  width: 300px;
  min-height: 100%;
  position: fixed;
  background-color: #1d1d1d;
  color: white;
}
#air {
  color: #27d7cc !important;
}
.logo {
  margin-bottom: 0px;
}
/* .nav-links div a{
    text-decoration: none;
    font-size: 18px;
    color:white;
} */
a {
  text-decoration: none;
  font-size: 18px;
  color: white;
}
a:hover {
  background-color: rgba(64, 63, 63, 0.5);
  border-radius: 15px;
}
</style>
