import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/instructions',
    name: 'Instructions',
    // route level code-splitting
    // this generates a separate chunk (instructions.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "instructions" */ '../views/Instructions.vue'),
  },
  {
    path: '/selected_deck/:code',
    name: 'selected_deck',
    component: () => import(/* webpackChunkName: "selected_deck" */ '../views/SelectedDeck.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
