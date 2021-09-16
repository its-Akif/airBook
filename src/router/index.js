import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/library",
    name: "Library",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Library.vue"),
  },
  {
    path: "/search",
    name: "Search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue"),
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
      beforeEnter: (to, from, next) => {
        if(store.state.isLogin){
          next()
        }
        else{
          next({name:"Home"})
        }
      }
  },
  {
    path: "/books/:category",
    name: "Books",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Books" */ "../views/Books.vue"),
  },
  {
    path: "/desc/:id",
    name: "BookDescription",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Book Description" */ "../views/Book-desc.vue"),
  },
  {
    path: "/my-books/:type",
    name: "LibraryBooks",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Book Description" */ "../views/libraryBooks.vue"),
    beforeEnter: (to, from, next) => {
      if(store.state.isLogin){
        next()
      }
      else{
        next({name:"Home"})
      }
    }
  },
  {
    path:"/:pathMatch(.*)*",
    name:"404",
    component: () =>
      import(/* webpackChunkName: "Book Description" */ "../views/Home.vue"),
  },
  // beforeEach((to, from, next) => {
  //   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  //   else next()
  // })
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
