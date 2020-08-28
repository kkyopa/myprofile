import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import VueSmoothScroll from 'vue-smooth-scroll'
Vue.use(VueSmoothScroll);

Vue.use(axios);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  VueSmoothScroll
}).$mount('#app')

