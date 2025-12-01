<template>
     <div class="bg-purple-500 py-4">
          <div class="flex items-center justify-between max-w-6xl mx-auto ">
               <RouterLink to="/">
                    <h1 class="text-4xl font-extrabold text-white">Todo App</h1>
               </RouterLink>

               <div class="flex items-center space-x-8">
                    <RouterLink to="/" class="text-base font-semibold text-white hover:text-gray-200">Home</RouterLink>
                    <RouterLink to="/about" class="text-base font-semibold text-white hover:text-gray-200">About
                    </RouterLink>
                    <RouterLink to="/contact" class="text-base font-semibold text-white hover:text-gray-200">Contact
                    </RouterLink>
               </div>
          </div>
     </div>
</template>


<script>
</script>

<style scoped></style>