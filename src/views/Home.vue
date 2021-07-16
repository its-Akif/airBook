<template>
  <div class="main pt-3">
    <div class="main-content">
    <h1 style="color:white;">Recomendations</h1>
    <div >
      <category-option :catName="catname" />
      <category-option :catName="catname" />
      <category-option :catName="catname" />
      <category-option :catName="catname" />
      <category-option :catName="catname" />
      <category-option :catName="catname" />
      <category-option :catName="catname" />
      <category-option :catName="catname" />
      
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
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    CategoryOption,
    
  },
  data()
  {
    return{
      catname:"Social"      
    }
  },
  computed:{
 
  },
};
</script>

