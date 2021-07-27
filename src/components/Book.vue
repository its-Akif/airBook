<template>
<div class="pb-3">
    <router-link  :to="{name:'BookDescription' , params:{id:bookid}}">
        <img :src=path alt="book image" class="book" >
        
    </router-link>
</div>    
</template>

<script>
export default{
    props:['bookImgPath','bookid'],
    data()
    {
    },
    computed:{
        path()
        {
            return "http://127.0.0.1:8000"+this.bookImgPath;
        }
    }
   
   
}
</script>

<style scoped>
.book{
    width:150px;
    height:220px;
}
</style>