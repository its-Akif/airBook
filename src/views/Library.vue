<template>
 
  <div class="main container-fluid pt-3 cat-opt">
    <!-- <GoBack /> -->
    <div class="main-content">
      <h1 style="color: white">Librarry</h1>
      <!-- <h1 style="color:grey !important;"> You Need to login First </h1> -->
      
      <div class="row pt-5">
        <router-link :to="{name:'LibraryBooks',params:{type:'read'}}">
        <div class="col-12 py-2 mb-3 opt-row">
          <span>Read</span>
          <span class="float-end me-5">> {{ readbooks }}</span>
          <hr />
        </div>
        </router-link>

        <router-link :to="{name:'LibraryBooks',params:{type:'wantread'}}">
        <div class="col-12 py-2 mb-3 opt-row">
          <span>Want to read</span>
          <span class="float-end me-5">> {{ wantread }}</span>

          <hr />
        </div>
        </router-link>
        <!-- <div class="col-12 py-2 mb-3 opt-row">
        <span>WishList</span>
        <hr />
      </div> -->
      <router-link :to="{name:'LibraryBooks',params:{type:'reading'}}">
        <div class="col-12 py-2 me-5 mb-3 opt-row">
          <span>Reading</span>
          <span class="float-end me-5">> {{ reading }}</span>

          <hr />
        </div>
        </router-link>
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
      readbooks: "",
      wantread: "",
      reading: "",
    };
  },
  methods: {
    setlibrarystatus(libdata) {
      console.log("Library Data ", libdata);
      const read = libdata.read;
      const wanttoread = libdata.wantread;
      const reading = libdata.reading;
      console.log(read, wanttoread, reading);
      this.readbooks = read.length;
      this.wantread = wanttoread.length;
      this.reading = reading.length;
    },
    
  },

  created: async function () {
    await axios
      .get(this.$store.state.BaseURLLocal + "show-library/", {
        headers: { Authorization: "Token" + " " + this.$store.state.token },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setlibrarystatus(response.data);
        }
      });
  },

};
</script>

<style scoped>
.main {
  padding-left: 350px;
}
/* .opt-row:hover{
    background-color:rgba(64, 63, 63,0.5);
   
    
} */
.cat-opt a{
    text-decoration: none;
  
    color:white;
}
#go-back{
  color:#198754;
}

</style>
