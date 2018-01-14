import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import Time from '@/components/Time/Time';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        id: 'home',
        title: 'My Pi',
      },
    },
    {
      path: '/time',
      name: 'Time',
      component: Time,
      meta: {
        id: 'time',
        title: 'Time and Weather',
      },
    },
  ],
});
