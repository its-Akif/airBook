<template>
    <div class="main pt-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-8">
                    <img :src=bookDetails.pic alt="book image" class="book" >
                    <div class="row mt-3">
                        <div class="col-3 ">
                        <a href="javascript:void(0)" @click="addToread"> <i class="fa fa-book  px-2 "  :class="{golden:bookDetails.read}" aria-hidden="true"></i> <p class="fs-8"> Read </p> </a> 
                        </div>
                        <div class="col-4">
                            <a href="javascript:void(0)" @click="addToread"><i class="fa fa-book px-3 " :class="{golden:bookDetails.read}" aria-hidden="true" ></i>  <p class="fs-8"> Reading </p></a>
                        </div>
                        <div class="col-5">
                            <a href="javascript:void(0)" @click="addToread"><i class="fa fa-book px-4 " :class="{golden:bookDetails.read}" aria-hidden="true"></i> <p class="fs-8"> Want to read </p></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 ps-md-3 col-12">
                    <p class="fs-3 "> {{bookDetails.name}} </p>
                    <h2> Description</h2>
                    <p>{{bookDetails.description}}</p>
                </div>

            </div>
            
            
                
                

            


        </div>
    </div>
</template>


<script>

export default {

components:{
    
},
data(){
    return{
        
        bookid:this.$route.params.id,
        booksData:"",
        
    
    }
},
computed:{
     bookDetails()
    {
        
        console.log("deatils" ,this.$store.state.bookdata)
        var data=this.$store.state.bookdata.find(book => book.id == this.bookid);
        console.log(data)
        return data;
    }
},
methods:{
    addToread()
    {
        if(this.read)
            this.read=false
        else
            this.read=true
        console.log("add to read " , this);
    },
   
},


}
</script>


<style scoped>
.main{
    padding-left: 350px;
}
.book{
    width:98%;
    height:340px;
}
.fs-8
{
    font-size: 14px;
}
a{
    color:white;
    text-decoration: none;
}
.golden{
    color:#ffb733;
}


</style>