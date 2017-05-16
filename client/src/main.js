// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue';
// import App from './App';
// import router from './router';

// Vue.config.productionTip = false;
// src/index.js

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Vue from 'vue';
import App from './components/App';
import Home from './components/Home';
import SecretQuote from './components/SecretQuote';
import Signup from './components/Signup';
import Login from './components/Login';
import auth from './auth';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/secretquote',
      component: SecretQuote,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/signup',
      component: Signup,
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});

export { router as default };

auth.checkAuth();
// Optional
Vue.http.headers.common = auth.getAuthHeader();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
