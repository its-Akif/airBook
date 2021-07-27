<template>
    <div class="main pt-3">
        <h1>Books</h1>
        <div class="d-flex flex-wrap">
            <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="book in booksData" :key="book.id" @bookDetails="getBookDetails">

                <Book :bookImgPath="book.pic" :bookid="book.id" />
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
    
},
computed:{
    booksData()
    {
        console.log( this.$store.state.bookdata);
        return this.$store.state.bookdata;
    }
},
methods:{
    

},
created: function(){
        console.log("axios1");
        this.$store.dispatch('loadBooksOfCategory',this.$route.params.category);
          
        
    }

}
</script>

<style scoped>
.main{
   
 padding-left: 400px;
  
}



</style>