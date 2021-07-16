<template>
    <div class="main pt-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 col-8">
                    <img :src="require(`@/media/pictures/a.jpg`)" alt="book image" class="book" >
                    <div class="row mt-3">
                        <div class="col-3 ">
                        <a href="javascript:void(0)" @click="addToread"> <i class="fa fa-book  px-2 "  :class="{golden:read}" aria-hidden="true"></i> <p class="fs-8"> Read </p> </a> 
                        </div>
                        <div class="col-4">
                            <a href="javascript:void(0)"><i class="fa fa-book px-3 " aria-hidden="true"></i>  <p class="fs-8"> Reading </p></a>
                        </div>
                        <div class="col-5">
                            <a href="javascript:void(0)"><i class="fa fa-book px-4 " aria-hidden="true"></i> <p class="fs-8"> Want to read </p></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 ps-md-3 col-12">
                    <p class="fs-3 ">Stone of Ages </p>
                    <h2>Description</h2>
                    <p>I have an HTML textarea that is of fixed width, but variable height. I would like to set overflow:scroll and be able to show a vertical scrollbar, but not a horizontal one. I am not able to use overflow:auto due to other things specific to my situation.

    I know there is no way using CSS2 to show only vertical but not horizontal scrollbars. Is there anything I can do with JavaScript to hide the horizontal scrollbar? </p>
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
    read:false,
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
    }
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