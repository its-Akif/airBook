<template>
 

     <div class="mb-3 text-success"> <i class="fa fa-arrow-left"></i> <a href="javascript:void(0)" @click="goBack" id="go-back" >Go Back</a></div>
   
  
</template>

<script>

export default {
  
  methods: {
    
    goBack(){
       window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },

  

};
</script>

<style scoped>

#go-back{
  color:#198754;
  text-decoration:none;
}

</style>
