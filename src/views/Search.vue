<template>
  <div class="main pt-3 ">
    <div class="container">
      <h1 style="color:white;">Search</h1>
      <div class="row w-90 d-flex justify-content-center">
          <div class="col-12 pt-5 d-flex">
            <input type="text" class="search-form ps-4 fs-4" placeholder="Search Book ...." v-model="searchedValue">
            <input type="button" value="Search" class="btn btn-lg btn-secondary my-3 ms-3" @click="search">
          </div>
         
      </div>
      <div v-if="clicked">
        <h3  class="mt-3">Searched Results are</h3> <hr />
      </div>
      <div class="row">
        <!-- <span style="color:white;">search {{searchedValue}} and {{items}} and {{books}}</span> -->
        <div class="col-3" v-for="item in searchesData" :key="item.id">
          <router-link :to="{name:'BookDescription' , params:{id:item.id}}">
          <div class=" my-3 mx-2 p-3 align-middle"  style="background-color: brown; border-radius: 20px; width: 90%; min-height:180px;" >
            {{item.name}}
          </div>
            </router-link>
      </div>
      </div>

    </div>
    <router-view />
  </div>
</template>
<script>
import axios from "axios"
export default {


  name:"Search",

  data:()=>(
  {
      clicked:false,
      searchedValue:"",
      items:"",
      books:""
     })
     ,computed:{
       searchesData()
       {
         return this.items;
       }

     },
  methods:{
      search()
      {
        const searched=this.searchedValue.toLowerCase();
        this.items=this.books.filter(e=>e.name.toLowerCase().includes(searched));
        console.log(this.items);
        this.clicked=true;
      }

  },
  created:async function(){
    
    console.log("axios description");
        await axios.get(this.$store.state.BaseURLLocal+"list-all-books/").then(resp => {
        console.log("Resp",resp.data);
        
        if(resp.status == 200)
        {
        
          this.books=resp.data;
        }
        
        
      
        });
}
  
  }
</script>
<style scoped>
.main{
  padding-left:350px;
  
}
.search-form{
  width:100%;
  padding:20px 0px 20px 0px;
  border-radius:30px;
}
.btn{
  border-radius:30px !important;
}
.search-form:focus { outline: none; }
.w-90{
  width:90%;
}
a{
  text-decoration: none;
  color:#fff !important;
}

</style>