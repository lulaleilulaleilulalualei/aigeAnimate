import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store";
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import './assets/css/common.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
