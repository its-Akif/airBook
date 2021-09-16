import { createStore } from "vuex";
import axios from 'axios'


export default createStore({
  state:()=>( {
    bookdata:"",
    BaseURL:"https://airbook-app.herokuapp.com/",
    BaseURLLocal:"https://airbook-app.herokuapp.com/",

    token:"b7378021760d0a0ef34593ea4f8e6793386b3cee",

    username:'',
    email:'',
    image:'',
    isLogin:false,


  }),
  mutations: {
    loadBooksOfCategory:(state,books)=>
    {
      console.log("mutate", books);
      state.bookdata=books;
      console.log("mutate",state.bookdata);
      

    },

  showLibrary:(state,library)=>
    {
      console.log("mutate show library", library);
      // state.bookdata=books;
      // console.log("mutate",state.bookdata);
      return library;
      

    }
  },

  actions: {
    async loadBooksOfCategory(context,category)
    {
      console.log("Resp",category);
        await axios.get(context.state.BaseURLLocal+"list-books/"+category+"/").then(resp => {
        console.log("Resp",resp);
        if(resp.status == 200)
        {
          context.commit('loadBooksOfCategory',resp.data)
        }
        
        
      
        });
        
    },
    async showLibrary(context,library)
    {
      console.log(library)
      await axios.get(this.$store.state.BaseURLLocal+"show-library/",{ 'headers': { 'Authorization': "Token"+" "+context.state.token} }).then((response)=>{
        if (response.status === 200)
        {
          console.log(response.data)  
          context.commit("showLibrary",response.data)
        }
    })
      
    }
  },
  modules: {},
  
});
