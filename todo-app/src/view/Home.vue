<template>
     <div class="min-h-screen flex items-center justify-center bg-purple-500">
          <div class="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
               <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">My Todo App</h1>

               <div class="flex gap-2 mb-6">
                    <input v-model="newTodo" @keyup.enter="addTodo" type="text" placeholder="Add a new task..."
                         class="flex-grow border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    <button @click="addTodo"
                         class="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer">
                         Add
                    </button>
               </div>

               <ul class="space-y-3">
                    <li v-for="(todo, index) in todos" :key="index"
                         class="flex items-center justify-between bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 transition-all">
                         <span :class="{
                              'line-through text-gray-400': todo.completed,
                              'text-gray-800': !todo.completed
                         }" class="cursor-pointer" @click="toggleTodo(index)">
                              {{ todo.text }}
                         </span>

                         <button @click="deleteTodo(index)"
                              class="text-red-500 hover:text-red-700 transition-colors duration-200">
                              ✕
                         </button>
                    </li>
               </ul>

               <p v-if="todos.length === 0" class="text-center text-gray-400 mt-6">
                    No tasks yet. Add one above!
               </p>
          </div>

     <div class="p-6">
          <!-- Button to open modal -->
          <button @click="handleModal" class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
               Open Modal
          </button>

          <!-- Modal Component -->
          <!-- template unwraps ref, so v-if="showModal" works -->
          <Modal v-if="showModal" @close="showModal = false" />
     </div>

     <div v-for="numId in idCollection" class="flex items-center">
          
          <RouterLink :key="numId" class="bg-gray-300 rounded-md px-2 py-1 text-sm font-semibold ml-2" :to="`/item/${numId}`">item {{ numId }}</RouterLink>
       
     </div>
     </div>

</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const newTodo = ref('')
const todos = ref([])
const idCollection = [1,2,3,4,5,]

const showModal = ref(false)

function handleModal() {
     console.log('you click on this button')
     showModal.value = true
}

function addTodo() {
     if (newTodo.value.trim() === '') return
     todos.value.push({ text: newTodo.value, completed: false })
     newTodo.value = ''
}

function toggleTodo(index) {
     todos.value[index].completed = !todos.value[index].completed
}

function deleteTodo(index) {
     todos.value.splice(index, 1)
}
</script>

<style scoped>
li {
     transition: all 0.2s ease;
}
</style>
