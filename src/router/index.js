import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = r => require.ensure([],()=>r(require('@/page/home')),'home')

const bannerImg = r => require.ensure([],()=>r(require('@/components/bannerImg')),'bannerImg')


const routes = [
   {
       path:'/',
       component: home
   },
   {
       path:'/bannerImg',
       component: bannerImg
   }
]

export default new Router(
   {
      routes
   }
)