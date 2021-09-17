import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag-next";

const app = createApp(App);

app.use(VueGtag, {
  property: {
    id: "G-D3VY41X17M"
  }
});

app.mount("#app");