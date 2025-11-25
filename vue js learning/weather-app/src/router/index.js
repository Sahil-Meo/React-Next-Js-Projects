import { createRouter, createWebHistory } from "vue-router";
import About from "@/About/About.vue";
import Contact from "@/Contact/Contact.vue";

const router = createRouter({
     // history:createWebHistory(),  pending just dude to half knowledge
     routes: [
          {
               path: '/about',
               name: 'about',
               component: About
          },
          {
               path: '/contact',
               name: 'about',
               component: Contact
          },
          {
               path: '/',
               name: 'home',
               component: Home
          },
     ]
})