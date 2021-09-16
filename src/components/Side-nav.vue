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
         <router-link :to="{ name: 'Login' }" v-if="$store.state.isLogin" class="col-10">
          <div class="py-3">
            <i class="fa fa-user" aria-hidden="true"></i> &nbsp;Profile
          </div>
        </router-link>
         
        <!-- <a href="http://airbook-app.herokuapp.com/accounts/google/login/?process=login/" class="col-10"> -->
          <a href="javascript:void(0)" class="col-10"  @click="logout" v-if="$store.state.isLogin">
            <div class="py-3 ">
              <i class="fa fa-sign-out" aria-hidden="true"></i> &nbsp;Logout
              <!-- <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin> -->
            </div>
            </a>
          <a href="javascript:void(0)" class="col-10" v-else @click="login">
            <div class="py-3 ">
              <i class="fa fa-sign-in" aria-hidden="true"></i> &nbsp;Login
              <!-- <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin> -->
            </div>
            </a>

            
          
        <!-- </a> -->
         
      </div>
    </div>
  </div>
</template>
<script>
// import GoogleLogin from 'vue-google-login';
export default {

  // components:{
  //   GoogleLogin
  // },
    data(){
        return {
            link:"http://airbook-app.herokuapp.com/accounts/google/login/?process=login/",
            // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
                // params: {
                //     client_id: "676120224150-alhk2rgrqe1s3nm0o3kkkcj9a6idjh7r.apps.googleusercontent.com"
                // },
                // only needed if you want to render the button with the google ui
                // renderParams: {
                //     width: 250,
                //     height: 50,
                //     longtitle: true
                // }
        }
        },
        methods: {
        
        async login(){
          try{
              const googleUser= await this.$gAuth.signIn();
              // const instance= await this.$gAuth.instance();
            //  console.log(this.gapi.auth2.BasicProfile())
              this.$store.state.image=googleUser.getBasicProfile().getImageUrl();
              this.$store.state.email=googleUser.getBasicProfile().getEmail();
              this.$store.state.username=googleUser.getBasicProfile().getName();
              this.$store.state.isLogin=true;
               this.$router.push({name:"Login"})
              // console.log("Auth",googleUser.getAuthResponse())
              // console.log("Auth",this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse())
              // console.log(this.$gAuth.getAuthCode())
          }
          catch(error){
            console.log(error)
            alert("Something Went Wrong !!")
          }
        },
        async logout(){
          try{
              const resp= await this.$gAuth.signOut();
              console.log(resp);
              
              if(resp)
              {
                this.$store.state.isLogin=false;
                this.$store.state.username="";
                this.$store.state.email="";
                this.$store.state.image="";
                this.$router.push({name:"Home"})
              }

              // const instance= await this.$gAuth.instance();
            //  console.log(this.gapi.auth2.BasicProfile())
              // this.$store.state.image=googleUser.getBasicProfile().getImageUrl();
              // this.$store.state.email=googleUser.getBasicProfile().getEmail();
              // this.$store.state.username=googleUser.getBasicProfile().getName();
              // this.$store.state.isLogin=false;
              // console.log("Auth",googleUser.getAuthResponse())
              // console.log("Auth",this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse())
              // console.log(this.$gAuth.getAuthCode())
          }
          catch(error){
            console.log(error)
            alert("Something Went Wrong !!")
          }
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
