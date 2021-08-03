import Vue from 'vue'
import App from './App.vue'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

// import Element from "element-ui"
// import "element-ui/lib/theme-chalk/index.css"
// Vue.use(Element)
// 方法二
// import {Button,Rate} from "element-ui"
// Vue.component(Button.name,Button)
// Vue.component(Rate.name,Rate)
// 三
// import "./ElementUI.js"
import axios from "axios"
//发送请求
axios.interceptors.request.use(function(config){
  return config
},function(error){
  return Promise.reject(error)

})
//配置请求返回的信息
axios.interceptors.request.use(function(response){
  return response
},function(error){
  return Promise.reject(error)
})
//挂载到实例上，没方法，挂在原型上
Vue.prototype.$http = axios

//后期使用$http代替axios



import Router from "vue-router"
import RouterConfig from "./router.config.js"
Vue.use(Router)
const router = new Router(RouterConfig)
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
