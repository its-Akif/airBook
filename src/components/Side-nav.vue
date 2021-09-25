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
         <router-link :to="{ name: 'Login' }" v-if="$store.getters.isLogin" class="col-10">
          <div class="py-3">
            <i class="fa fa-user" aria-hidden="true"></i> &nbsp;Profile
          </div>
        </router-link>
         
        <!-- <a href="http://airbook-app.herokuapp.com/accounts/google/login/?process=login/" class="col-10"> -->
          <router-link  class="col-10" :to="{name:'Logout'}" @click="logout" v-if="$store.getters.isLogin">
            <div class="py-3 ">
              <i class="fa fa-sign-out" aria-hidden="true"></i> &nbsp;Logout
              <!-- <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin> -->
            </div>
            </router-link >
          <router-link :to="{name:'Login'}" class="col-10" v-else @click="login">
            <div class="py-3 ">
              <i class="fa fa-sign-in" aria-hidden="true"></i> &nbsp;Login
              <!-- <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin> -->
            </div>
            </router-link >

            
          
        <!-- </a> -->
         
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
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

            //Session Save 
              // this.$store.state.image=googleUser.getBasicProfile().getImageUrl();
              // this.$store.state.email=googleUser.getBasicProfile().getEmail();
              // this.$store.state.username=googleUser.getBasicProfile().getName();

              localStorage.setItem("email",googleUser.getBasicProfile().getEmail())
              localStorage.setItem("image",googleUser.getBasicProfile().getImageUrl())
              localStorage.setItem("username",googleUser.getBasicProfile().getName())
             
              localStorage.setItem("isLogin",true)
              this.$store.state.image=localStorage.getItem("image");
              this.$store.state.email=localStorage.getItem("email");
              this.$store.state.username=localStorage.getItem("username");
               this.$store.state.isLogin=true;
              


              
                const payload={
                  "email":localStorage.getItem('email')
                }
              await axios.post(this.$store.state.BaseURLLocal+"generate-token/",payload).then(response=>{
                 console.log("token" , response.data.token);
                //  this.$store.state.token=response.data.token;
                  localStorage.setItem("token",response.data.token)
               }); 
               this.$router.push({name:"Login"})
              // console.log("Auth",googleUser.getAuthResponse())
              // console.log("Auth",this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse())
              // console.log(this.$gAuth.getAuthCode())
          }
          catch(error){
            console.log(error)
            // alert("Something Went Wrong !!")
          }
        },
        async logout(){
          try {
        const payload = {
          email: localStorage.getItem("email"),
        };

        await axios
          .post(this.$store.state.BaseURLLocal + "revoke-token/", payload)
          .then((response) => {
            console.log("logout", response);
          });
        // console.log(resp);
        const resp1 = await this.$gAuth.signOut();

        console.log(resp1);
        if (resp1) {
          localStorage.setItem("isLogin", false);

          localStorage.removeItem("email");
          localStorage.removeItem("image");
          localStorage.removeItem("username");
          localStorage.removeItem("token");
          this.$store.state.isLogin = false;
          this.$store.state.username = "";
          this.$store.state.email = "";
          this.$store.state.image = "";
          this.$store.state.token = "";
          // this.$router.push({name:"Home"})
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
      } catch (error) {
        console.log(error);
        // alert("Something Went Wrong !!")
      }
        }
    },
    created: function(){
      console.log("Created NAc",this.$store.getters.isLogin);
      
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
