<template>
<div class="pb-3">
    <router-link  :to="{name:'BookDescription' , params:{id:bookid}}">
        <img :src=bookImgPath alt="book image" class="book" >
        
       
        
    </router-link>
</div>    
</template>

<script>
export default{
    props:['bookImgPath','bookid'],
    data()
    {
    },
    // computed:{
    //     path()
    //     {
    //         return "https://airbook-app.herokuapp.com"+this.bookImgPath;
    //     }
    // }
   
   
}
</script>

<style scoped>
.book{
    width:150px;
    height:220px;
}
</style>