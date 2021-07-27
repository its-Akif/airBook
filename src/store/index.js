import { createStore } from "vuex";
import axios from 'axios'


export default createStore({
  state:()=>( {
    bookdata:"",
    BaseURL:"http://127.0.0.1:8000/"

  }),
  mutations: {
    loadBooksOfCategory:(state,books)=>
    {
      console.log("mutate", books);
      state.bookdata=books;
      console.log("mutate",state.bookdata);
      

    }
  },
  actions: {
    async loadBooksOfCategory(context,category)
    {
      console.log();
        await axios.get(context.state.BaseURL+"list-books/"+category+"/").then(resp => {
        console.log(resp);
        if(resp.status == 200)
        {
          context.commit('loadBooksOfCategory',resp.data)
        }
        
        
      
        });
        
    },
    async getCategeory()
    {
      
      
    }
  },
  modules: {},
  
});
