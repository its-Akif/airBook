import { createStore } from "vuex";
import axios from 'axios'


export default createStore({
  state:()=>( {
    bookdata:"",
    BaseURL:"https://airbook-app.herokuapp.com/",
    BaseURLLocal:"http://127.0.0.1:8000/"

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
      console.log("Resp",category);
        await axios.get(context.state.BaseURLLocal+"list-books/"+category+"/").then(resp => {
        console.log("Resp",resp);
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
