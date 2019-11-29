import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router/router'
import animate from 'animate.css'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import 'element-ui/lib/theme-chalk/index.css'
import './bootstrap/css/bootstrap.min.css'
import 'lib-flexible/flexible'
Vue.use(ElementUI)
Vue.use(animate)
Vue.prototype.$video = Video
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
