import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag-next";//for google analytics

const app = createApp(App);

//for google analytics
app.use(VueGtag, {
  property: {
    id: "G-D3VY41X17M"
  }
});

app.mount("#app");
