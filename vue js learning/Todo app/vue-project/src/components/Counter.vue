<script setup>
import { ref } from 'vue'

// local (component) state
const count = ref(0)
const step = ref(1)
const allowNegative = ref(false)

// actions
const increment = () => { count.value += Number(step.value) }
const decrement = () => {
  if (!allowNegative.value && count.value - Number(step.value) < 0) {
    count.value = 0
    return
  }
  count.value -= Number(step.value)
}
const reset = () => { count.value = 0 }

// expose props/emits if needed later (none now)
</script>

<template>
  <div class="counter-card">
    <h2>Counter Component</h2>

    <div class="controls">
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
      <button @click="reset">Reset</button>
      <label>
        Step <input type="number" v-model.number="step" />
      </label>
    </div>

    <div class="count">{{ count }}</div>

    <label><input type="checkbox" v-model="allowNegative" /> Allow negative</label>
  </div>
</template>

<style scoped>
.counter-card{ padding:16px; border-radius:8px; background:#fff; box-shadow:0 6px 16px rgba(0,0,0,.05); }
.controls{ display:flex; gap:8px; align-items:center; margin-bottom:12px; }
button{ padding:6px 10px; border-radius:6px; border:none; cursor:pointer; }
.count{ font-size:36px; font-weight:700; text-align:center; padding:8px 0; }
</style>
