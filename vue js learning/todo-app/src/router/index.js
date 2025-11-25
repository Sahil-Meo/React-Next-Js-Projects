// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/view/Home.vue';
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';

const routes = [
     {
          path: '/',
          name: 'home',
          component: Home,
          meta: { title: 'Todo Home' }
     },
     {
          path: '/about',
          name: 'about',
          component: About,
          meta: { title: 'Todo About -' }
     },
     {
          path: '/contact',
          name: 'contact',
          component: Contact,
          meta: { title: 'Todo Contact -' }
     },
     {
          path: '/item/:id',
          name: 'item',
          component: Contact,
          meta: { title: 'Dynamic routes -' }
     }
];

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL), // or createWebHistory(import.meta.env.BASE_URL)
     routes,
     scrollBehavior(to, from, savedPosition) {
          if (savedPosition) return savedPosition;
          return { top: 0 };
     }
});

router.beforeEach((to, from, next) => {
     document.title = to.meta.title ? `${to.meta.title} Todo App` : 'Todo App';
     next();
});

export default router;
