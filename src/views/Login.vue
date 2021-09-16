<template>
  <div class="main container-fluid pt-3">
    <!-- <GoBack /> -->
    <div class="main-content">
      <h1 style="color: white">My Profile</h1>
    </div>
    <!-- <h1 style="color: grey">Will be added Soon Google Auth !!!</h1> -->
    <div class="row mt-5">
      <div class="col-12">
        <img
          :src="$store.state.image"
          class="rounded float-start"
          height="100"
          width="100"
          
        />
      </div>
      <div class="col-4">
        <input
          type="text"
          :value="$store.state.email"
          class="form-control mt-3"
          readonly
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import GoBack from "../components/GoBack.vue"

export default {
  components:{
    // GoBack,
  },
  data() {
    return {
      // link:"http://airbook-app.herokuapp.com/accounts/google/login/?process=login/",
    };
  },


  created: async function() {
    const resp1 = await axios.get(
      this.$store.state.BaseURLLocal + "check-user-status/"
    );
    console.log("user Status", resp1);
  },
};
</script>

<style scoped>
.main {
  padding-left: 350px;
}
</style>
