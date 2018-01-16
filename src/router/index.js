import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import Time from '@/components/Time/Time';
import menu from '../config/menu';

Vue.use(Router);

const routes = menu.map((v) => {
  let component;
  switch (v.id) {
    case 'home': component = Home; break;
    case 'time': component = Time; break;
    default: component = undefined; break;
  }
  return {
    path: v.path,
    name: v.name,
    component,
    meta: {
      id: v.id,
      title: v.title,
    },
  };
});

export default new Router({
  routes,
});
