import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false

const Hello = () => import('./components/Hello.vue')
const HelloVue = () => import('./components/HelloVue.vue')
const HelloWorld = () => import('./components/HelloWorld.vue')

function resolveVue (promise: () => Promise<any>) {
  return () => {
    console.log('加载中')
    console.dir(promise())
    return new Promise((resolve, rejct) => {
      promise().then(res => {
        console.log('加载完成')
        resolve(res)
      }).catch(error => {
        window.location.reload()
        console.log(error)
        rejct(error)
      })
    })
  }
}

const routes = [
  { path: '/', component: resolveVue(Hello) },
  { path: '/HelloVue', component: resolveVue(HelloVue) },
  { path: '/HelloWorld', component: resolveVue(HelloWorld) }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
