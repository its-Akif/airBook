<template>
  <div class="main pt-3">
    <div class="main-content">
    <h1 style="color:white;">Recomendations</h1>
    <div >
      <category-option v-for="category in categories" :key="category.id" :catName="category.name" />
      
      
    </div>
    </div>
  </div>
   <router-view />
</template>

<style scoped>
.main{
  padding-left:350px;
  
}

</style>

<script>
import CategoryOption from '../components/category-option.vue';
import axios from 'axios'
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    CategoryOption,
    
  },
  data()
  {
    return{
      categories:"Social"      
    }
  },
  computed:{
    
    
  },
  created: async function(){
   
    await axios.get(this.$store.state.BaseURLLocal+"list-categories/").then(resp => {
    console.log(resp);
    if(resp.status == 200)
    {
      this.categories=resp.data;
    }
        });

  }
};
</script>

