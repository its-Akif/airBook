<template>
    <div class="main pt-3">
        <GoBack />
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
import GoBack from "../components/GoBack.vue"
import axios from "axios"
export default {

components:{
    Book,
    GoBack,
},
data()
{
    return{
        booksData:""
    }
    
},
computed:{
    // booksData()
    // {
    //     console.log(this.$store.state.bookdata);
    //     return this.$store.state.bookdata;
    // }
},
methods:{
    

},
created:async function(){
        console.log("axios1");
        await axios.get(this.$store.state.BaseURLLocal+"category-list-books/"+this.$route.params.category+"/").then(resp => {
        console.log("Resp",resp);
        if(resp.status == 200)
        {
          this.booksData=resp.data;
        }
        
        
      
        });
        // this.$store.dispatch('loadBooksOfCategory',this.$route.params.category);
          
        
    }

}
</script>

<style scoped>
.main{
   
 padding-left: 400px;
  
}



</style>