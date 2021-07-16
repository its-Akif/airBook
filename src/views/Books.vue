<template>
    <div class="main pt-3">
        <h1>Books</h1>
        <div class="d-flex flex-wrap">
            <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="i in number" :key="i">
            <Book ></Book>
            </div>
        </div>
    </div>
</template>


<script>
import Book from "../components/Book.vue"
export default {

components:{
    Book,
},
data()
{
    return{
        number:10,
    }
}

}
</script>

<style scoped>
.main{
   
 padding-left: 400px;
  
}



</style>