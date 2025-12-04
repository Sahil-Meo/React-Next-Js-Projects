import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import MainLayoutFile from '@/layout/MainLayoutFile.vue'
import Weather from '@/pages/Weather.vue'
import Invoice from '@/pages/Invoice.vue'

const routes = [
     {
          path: '/',
          component: MainLayoutFile,
          children: [
               { path: '', component: Home },
               { path: 'about', component: About },
               { path: 'contact', component: Contact },
               { path: 'weather', component: Weather },
               { path: 'invoice-send', component: Invoice },
          ]
     }
]

export default createRouter({
     history: createWebHistory(),
     routes
})
