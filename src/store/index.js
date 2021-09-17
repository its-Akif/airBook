import { createStore } from "vuex";
import axios from 'axios'


export default createStore({
  state:()=>( {
    
    bookdata:"",
    BaseURL:"https://airbook-app.herokuapp.com/",
    BaseURLLocal:"https://airbook-app.herokuapp.com/",

    token:localStorage.getItem("token"),

    username:localStorage.getItem("username"),
    email:localStorage.getItem("email"),
    image:localStorage.getItem('image'),
    isLogin:localStorage.getItem('isLogin'),


  }),
  getters: {
    isLogin: state=>{
      console.log("Set Login Called",localStorage.getItem('isLogin'))
      if(localStorage.getItem('isLogin') === null || localStorage.getItem('isLogin') == "false" )
      {
        state.isLogin=false
        return state.isLogin
      }
      else{
        state.isLogin=true
        return state.isLogin

      }
      
    }
  },
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
      

    },

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
