<template>
  <div id="app">
    <Navbar/>
    <router-view />                <!-- default view -->
    <router-view name="modal" />   
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';


</script>
<style scoped>

</style>
