import Vue from 'vue';
import App from './App.vue';
import router from './router';

// 引入 Element UI 组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 使用 Element UI
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')