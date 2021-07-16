<template>
<div class="pb-3">
    <router-link  :to="{name:'BookDescription'}">
        <img :src="require(`@/media/pictures/${imgName}`)" alt="book image" class="book" >
    </router-link>
</div>    
</template>

<script>
export default{
    data()
    {
        return{

                imgName:"Double Blind A Novel.jpg",

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