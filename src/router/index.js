import Vue from 'vue';
import Router from 'vue-router';
const Layout = r => require.ensure([], () => r(require('@/views/layout')), 'layout');
const Overview = r => require.ensure([], () => r(require('@/views/overview')), 'overview');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'overview',
          component: Overview,
        }
      ]
    },
  ],
});
