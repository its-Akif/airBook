<template>
    <div class="main pt-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-8">
                    <img :src=bookDetails.pic alt="book image" class="book" >
                    <div class="row mt-3">
                        <div class="col-3 ">
                        <a href="javascript:void(0)" @click="addToread"> <i class="fa fa-book  px-2 "  :class="{golden:bookDetailsC.read}" aria-hidden="true"></i> <p class="fs-8"> Read {{bookDetailsC.read}}</p> </a> 
                        </div>
                        <div class="col-4">
                            <a href="javascript:void(0)" @click="addToreading"><i class="fa fa-book px-3 " :class="{golden:bookDetailsC.reading}" aria-hidden="true" ></i>  <p class="fs-8"> Reading </p></a>
                        </div>
                        <div class="col-5">
                            <a href="javascript:void(0)" @click="addTowantread"><i class="fa fa-book px-4 " :class="{golden:bookDetailsC.wantread}" aria-hidden="true"></i> <p class="fs-8"> Want to read </p></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 ps-md-3 col-12">
                    <p class="fs-3 "> {{bookDetailsC.name}} </p>
                    <h2> Description</h2>
                    <p>{{bookDetailsC.description}}</p>
                </div>

            </div>
            
            
                
                

            


        </div>
    </div>
</template>


<script>
import axios from "axios"
export default {

components:{
    
},
data:()=>({
    
        
      
        bookDetails:"",
        
    
    
}),
computed:{
    //  bookDetails()
    // {
        
    //     console.log("deatils" ,this.$store.state.bookdata)
    //     var data=this.$store.state.bookdata.find(book => book.id == this.bookid);
    //     console.log(data)
    //     return data;
    // }
    bookDetailsC()
    {
        return this.bookDetails;
    }
},
methods:{
    addToread()
    {
        if(this.bookDetails.read)
            this.bookDetails.read=false
        else
            this.bookDetails.read=true
        
        
        
      
      
    },
    addTowantread()
    {
        if(this.bookDetails.wantread)
            this.bookDetails.wantread=false
        else
            this.bookDetails.wantread=true
        console.log("add to wantread " , this.bookDetails.wantread);
    },
    addToreading()
    {
        if(this.bookDetails.reading)
            this.bookDetails.reading=false
        else
            this.bookDetails.reading=true
        console.log("add to reading " , this.bookDetails.reading);
    },
   
},
created:async function(){
    
    console.log("axios description");
    await axios.get(this.$store.state.BaseURLLocal+"get-book/"+this.$route.params.id+"/").then(resp => {
    console.log("Resp",resp);
    if(resp.status == 200)
    {
        this.bookDetails=resp.data;
    }
    });
    await axios.get(this.$store.state.BaseURLLocal+"read-book/"+this.$route.params.id+"/").then(resp => {
        console.log("Resp book read",resp);
        if(resp.status == 200)
        {
        //   this.bookDetails=resp.data;
        }
        
        
      
        });
        
}


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