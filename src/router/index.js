import Vue from 'vue';
import VueRouter from 'vue-router';
import Profile from '@/views/Profile';
// Directory
import Directory from '@/views/directory/Directory';
// Browser
import Browse from '@/views/directory/browse/Browse';
import BrowseCategories from '@/views/directory/browse/Categories';
import BrowseAll from '@/views/directory/browse/All';
// Following
import Following from '@/views/directory/following/Following';
import FollowingOverview from '@/views/directory/following/Overview';
import FollowingLive from '@/views/directory/following/Live';
import FollowingVideos from '@/views/directory/following/Videos';
import FollowingHosts from '@/views/directory/following/Hosts';
import FollowingCategories from '@/views/directory/following/Categories';
import FollowingChannels from '@/views/directory/following/Channels';

Vue.use(VueRouter);

const routes = [
  {
    path: '/directory',
    component: Directory,
    children: [
      {
        path: '',
        component: Browse,
        children: [
          {
            path: '',
            name: 'directory-browse-categories',
            component: BrowseCategories,
          },
          {
            path: 'all',
            name: 'all-live-streams',
            component: BrowseAll,
          }
        ]
      },
      {
        path: 'following',
        component: Following,
        children: [
          {
            path: '',
            name: 'directory-following-overview',
            component: FollowingOverview,
          },
          {
            path: 'live',
            name: 'directory-following-live',
            component: FollowingLive,
          },
          {
            path: 'videos',
            name: 'directory-following-videos',
            component: FollowingVideos,
          },
          {
            path: 'hosts',
            name: 'directory-following-hosts',
            component: FollowingHosts,
          },
          {
            path: 'games',
            name: 'directory-following-categories',
            component: FollowingCategories,
          },
          {
            path: 'channels',
            name: 'directory-following',
            component: FollowingChannels,
          },
        ]
      },
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
    component: () => import(/* webpackChunkName: "about" */ '@/views/About')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
