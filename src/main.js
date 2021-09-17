import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import GAuth from 'vue3-google-oauth2'

const gAuthOptions = { clientId: '1012457281282-236nl8u648gheblj45jj2nq3mndun8ni.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: true }

createApp(App).use(VueAxios, axios).use(GAuth, gAuthOptions).use(store).use(router).mount("#app");
