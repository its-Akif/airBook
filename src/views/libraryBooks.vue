<template>

    
    <div class="main pt-3" >
        <GoBack />
        <h1>My Books</h1>
        <div v-if="booksData.length > 0">
        
        <div class="d-flex flex-wrap">
            <div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="book in booksData" :key="book.id" @bookDetails="getBookDetails">

                <Book :bookImgPath="book.pic" :bookid="book.book_id" />
            </div>
        </div>
        </div>
        <div v-else>
      <h1 style="color:grey !important; " > No Books to Show </h1>
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
    booksdata()
    {
        // console.log(this.$store.state.bookdata);
        return this.booksData.length;
    }
},
methods:{
    

},
created:async function(){
        console.log("created library books");
        // await axios.get(this.$store.state.BaseURLLocal+"category-list-books/"+this.$route.params.category+"/").then(resp => {
        // console.log("Resp",resp);
        // if(resp.status == 200)
        // {
        //   this.booksData=resp.data;
        // }
        
        
      
        // });
        const type= this.$route.params.type
         await axios
      .get(this.$store.state.BaseURLLocal + "show-library/", {
        headers: { Authorization: "Token" + " " + this.$store.state.token },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        //   this.setlibrarystatus(response.data);
         this.booksData=response.data[type];
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