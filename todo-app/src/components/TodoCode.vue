<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">📝 Todo App</h1>

      <!-- Input section -->
      <div class="flex gap-2 mb-6">
        <input
          v-model="newTodo"
          @keyup.enter="addTodo"
          type="text"
          placeholder="Add a new task..."
          class="flex-grow border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          @click="addTodo"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200"
        >
          Add
        </button>
      </div>

      <!-- Todo List -->
      <ul class="space-y-3">
        <li
          v-for="(todo, index) in todos"
          :key="index"
          class="flex items-center justify-between bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 transition-all"
        >
          <span
            :class="{
              'line-through text-gray-400': todo.completed,
              'text-gray-800': !todo.completed
            }"
            class="cursor-pointer"
            @click="toggleTodo(index)"
          >
            {{ todo.text }} 
          </span>

          <button
            @click="deleteTodo(index)"
            class="text-red-500 hover:text-red-700 transition-colors duration-200"
          >
            ✕
          </button>
        </li>
      </ul>

      <!-- Empty state -->
      <p v-if="todos.length === 0" class="text-center text-gray-400 mt-6">
        No tasks yet. Add one above!
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref([])

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
/* Optional: small animations */
li {
  transition: all 0.2s ease;
}
</style>
