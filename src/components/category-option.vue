<template>
    <div class="cat-opt">

    <router-link :to="{name:'Login'}" >
        <div class="d-flex opt-row p-2 col-10" >   
            <div class="option-logo" :style="generateRandomColor">
                <i class="fa fa-book fs-5" aria-hidden="true"></i>
            </div>
            <div class="option-name fs-5 ms-3 pt-3">
                {{catName}}
            </div>
        </div>
    </router-link>





    </div>
</template>

<script>
export default{
props:
    ['catName','randColor']
    ,
    computed:{
        
    generateRandomColor()
    { 
        var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        while(randomColor.length == 6)
        {
            randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            console.log("Called" , randomColor)
           
                
        }
        return "background-color:"+randomColor;

    //random color will be fres
    }
    }
    
}
</script>
<style scoped>
.option-logo {
    /* background-color:blueviolet; */
    padding:20px;
    border-radius:10px;
}
.option-name{

}
.cat-opt a{
    text-decoration: none;
  
    color:white;
}
.opt-row:hover{
    background-color:rgba(64, 63, 63,0.5);
    border-radius:15px;
    
}

</style>

