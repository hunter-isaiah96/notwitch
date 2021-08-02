import Vue from 'vue';
import VueRouter from 'vue-router';
import Profile from '../views/Profile.vue';
import Directory from '../views/directory/Directory.vue';
import Browse from '../views/directory/Browse.vue';
import Categories from '../views/directory/Categories.vue';
import All from '../views/directory/All.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/directory',
    component: Directory,
    children: [
      {
        path: '/',
        component: Browse,
        children: [
          {
            path: '',
            name: 'directory-categories',
            component: Categories,
          },
          {
            path: 'all',
            name: 'all-live-streams',
            component: All,
          }
        ]
      }
    ]
  },
  {
    path: '/:id',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
