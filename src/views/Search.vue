<template>
  <div class="main pt-3 ">
    <div class="container">
      <h1 style="color:white;">Search</h1>
      <div class="row w-75 d-flex justify-content-center">
          <div class="col-12 pt-5">
            <input type="text" class="search-form" v-model="searchedValue">
          </div>
          <div class="col-12  d-flex justify-content-evenly">
            <input type="button" value="Search" class="btn btn-lg btn-info mt-4" @click="search">
          </div>
      </div>
      <div class="row">
        <div class="col-3" v-for="item in items" :key="item.id">

        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Search",

  data()
  {
    return{
      searchedValue:"",
      items:""
    }
  },
  methods:{
      search()
      {
        this.items=this.$store.bookdata.filter(e=>e.name.toLowerCase().includes(this.searchedValue))
      }

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

</style>