import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import GAuth from 'vue3-google-oauth2'

const gAuthOptions = { clientId: '676120224150-alhk2rgrqe1s3nm0o3kkkcj9a6idjh7r.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: true }

createApp(App).use(VueAxios, axios).use(GAuth, gAuthOptions).use(store).use(router).mount("#app");
