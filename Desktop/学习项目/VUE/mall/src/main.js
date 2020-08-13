import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueLazyload from "vue-lazyload"
import store from "./store";
import toast from '../src/components/common/toast'
import fastClick from 'fastclick'

fastClick.attach(document.body)
Vue.prototype.$bus = new Vue()
Vue.use(toast)

Vue.use(Vant);
Vue.use(VueLazyload)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
