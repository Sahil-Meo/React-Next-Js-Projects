// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Lazy-loaded view components
const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');
const UsersList = () => import('../views/Users/UsersList.vue');
const UserProfile = () => import('../views/Users/UserProfile.vue');
const AdminLayout = () => import('../views/Admin/AdminLayout.vue');
const AdminDashboard = () => import('../views/Admin/AdminDashboard.vue');
const NotFound = () => import('../views/NotFound.vue');
const Sidebar = () => import('../components/Sidebar.vue'); // for named view demo
const HeaderBar = () => import('../components/HeaderBar.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home' },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { title: 'About' },
  },
  {
    path: '/users',
    name: 'users',
    component: UsersList,
    meta: { title: 'Users' }
  },
  // Route with dynamic param and props:true so component receives `id` as prop (Options API friendly)
  {
    path: '/users/:id',
    name: 'user',
    component: UserProfile,
    props: true, // route params -> component props
    meta: { title: 'User Profile' }
  },
  // Nested routes (admin area)
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'admin.dashboard',
        component: AdminDashboard,
        meta: { title: 'Admin Dashboard' }
      },
      // more admin children...
    ]
  },
  // Named views example
  {
    path: '/layout-demo',
    components: {
      default: Home,      // main view
      sidebar: Sidebar,   // named outlet
      header: HeaderBar,  // another named outlet
    },
    meta: { title: 'Layout Demo' }
  },
  // 404 / catch-all
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
    meta: { title: 'Not Found' }
  }
];

const router = createRouter({
  history: createWebHistory(), // or createWebHashHistory()
  routes,
  scrollBehavior(to, from, savedPosition) {
    // nice scroll behavior
    if (savedPosition) return savedPosition;
    return { top: 0 };
  }
});

// Simple auth mock — replace with real auth logic
function isAuthenticated() {
  // e.g. check a store / cookie / localStorage token
  return !!localStorage.getItem('mock_token');
}

// Global navigation guard example
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} — MyApp` : 'MyApp';

  if (to.meta.requiresAuth && !isAuthenticated()) {
    // redirect to home (or login) with intended path
    return next({ name: 'home', query: { redirect: to.fullPath } });
  }
  next();
});

export default router;
