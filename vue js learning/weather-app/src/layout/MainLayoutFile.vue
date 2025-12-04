<template>
     <div class="min-h-screen flex flex-col">

          <!-- Navbar -->
          <Navbar />

          <!-- Page Content -->
          <main class="flex-1 p-6">
               <router-view></router-view>
          </main>

          <!-- Footer -->
          <Footer />
     </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>
