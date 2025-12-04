<template>
  <div class="flex justify-between items-center py-4 bg-gray-800 px-36">
    <div class="flex">
      <h1 class="text-4xl font-bold text-white">Invoice Sender</h1>
    </div>
    <nav class=" text-white flex gap-6">
      <router-link to="/" class="hover:text-yellow-400">Home</router-link>
      <router-link to="/about" class="hover:text-yellow-400">About</router-link>
      <router-link to="/contact" class="hover:text-yellow-400">Contact</router-link>
      <router-link to="/weather" class="hover:text-yellow-400">Weather</router-link>
      <router-link to="/invoice-send" class="hover:text-yellow-400">Invoice</router-link>
    </nav>
  </div>
</template>
