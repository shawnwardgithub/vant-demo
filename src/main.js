import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import { Lazyload } from 'vant';
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import { Divider } from 'vant';


import 'vant/lib/index.css'
Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(Lazyload)
Vue.use(BScroll)
Vue.use(Pullup)
Vue.use(Divider)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
