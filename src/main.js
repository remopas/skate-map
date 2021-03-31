import App from './App.vue'
import router from './router'
import store from './store'
import Vue from "vue";
import VueAnime from 'vue-animejs';
Vue.use(VueAnime)

import VueLottiePlayer from "vue-lottie-player";
Vue.use(VueLottiePlayer);

import Leaflet from 'leaflet'
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


