import Vue from 'vue'
import App from './App.vue'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import VueSmoothScroll from 'vue-smooth-scroll'
Vue.use(VueSmoothScroll);

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  VueSmoothScroll
}).$mount('#app')

