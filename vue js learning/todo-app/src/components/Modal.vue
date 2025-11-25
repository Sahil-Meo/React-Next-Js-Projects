<template>
  <!-- Dark background -->
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    
    <!-- Modal box -->
    <div class="bg-white p-6 rounded-md w-80">

      <h2 class="text-xl font-bold mb-4">This is a Modal!</h2>
      <p class="mb-4">You can put anything inside a modal.</p>

      <button 
        @click="$emit('close')" 
        class="bg-red-500 text-white px-3 py-1 rounded"
      >
        Close
      </button>
    </div>

  </div>
</template>

<script>
export default {
     name:'Modal'
};
</script>
