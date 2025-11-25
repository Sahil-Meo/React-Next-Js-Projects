<script setup></script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center p-6">
    <div id="app" class="w-full max-w-xl">
    <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-6">
      <h1 class="text-2xl font-semibold text-slate-700 mb-4">🌤️ Vue Weather</h1>

      <!-- Search -->
      <div class="flex gap-2 mb-4">
        <input
          v-model="city"
          @keyup.enter="fetchWeather"
          placeholder="Enter city (e.g. London)"
          class="flex-1 rounded-lg border border-slate-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />
        <button @click="fetchWeather" :disabled="loading" class="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg">
          {{ loading ? 'Loading...' : 'Search' }}
        </button>
      </div>

      <!-- Error -->
      <div v-if="error" class="mb-4 text-sm text-red-600">
        {{ error }}
      </div>

      <!-- Result card -->
      <transition name="fade">
        <div v-if="weather" class="p-4 rounded-lg border border-slate-100 bg-gradient-to-br from-white to-sky-50">
          <div class="flex items-center gap-4">
            <img :src="iconUrl" :alt="weather.weather[0].description" class="w-20 h-20" />
            <div>
              <div class="text-3xl font-bold text-slate-800">{{ weather.main.temp }}°C</div>
              <div class="text-sm text-slate-600 capitalize">{{ weather.weather[0].description }}</div>
              <div class="text-xs text-slate-500 mt-1">{{ weather.name }}, {{ weather.sys.country }}</div>
            </div>
            <div class="ml-auto text-sm text-slate-600">
              <div>Feels: {{ weather.main.feels_like }}°C</div>
              <div>Humidity: {{ weather.main.humidity }}%</div>
              <div>Wind: {{ weather.wind.speed }} m/s</div>
            </div>
          </div>

          <!-- Optional extra: sunrise/sunset formatted -->
          <div class="mt-4 text-xs text-slate-500">
            Sunrise: {{ sunrise }} — Sunset: {{ sunset }}
          </div>
        </div>
      </transition>

      <!-- Hint / small note -->
      <p class="mt-4 text-xs text-slate-400">Data from OpenWeatherMap. Make sure you have a valid API key configured in the script below.</p>
    </div>
  </div>
  </div>
</template>


  <script>

    const OPENWEATHER_API_KEY = 'PASTE_YOUR_API_KEY_HERE';

    const { createApp, ref, computed } = Vue;

    createApp({
      setup() {
        const city = ref('');
        const weather = ref(null);
        const loading = ref(false);
        const error = ref('');

        const iconUrl = computed(() => {
          if (!weather.value) return '';
          const icon = weather.value.weather[0].icon;
          return `https://openweathermap.org/img/wn/${icon}@2x.png`;
        });

        const sunrise = computed(() => {
          if (!weather.value) return '';
          return new Date(weather.value.sys.sunrise * 1000).toLocaleTimeString();
        });
        const sunset = computed(() => {
          if (!weather.value) return '';
          return new Date(weather.value.sys.sunset * 1000).toLocaleTimeString();
        });

        async function fetchWeather() {
          error.value = '';
          weather.value = null;
          const q = city.value && city.value.trim();
          if (!q) {
            error.value = 'Please enter a city name.';
            return;
          }
          if (!OPENWEATHER_API_KEY || OPENWEATHER_API_KEY === 'PASTE_YOUR_API_KEY_HERE') {
            error.value = 'No API key set — put your OpenWeather API key into the OPENWEATHER_API_KEY constant.';
            return;
          }

          loading.value = true;
          try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(q)}&appid=${OPENWEATHER_API_KEY}&units=metric`;
            const res = await fetch(url);
            if (!res.ok) {
              const body = await res.json().catch(()=>({message:'Unknown error'}));
              throw new Error(body.message || 'Failed to fetch weather');
            }
            const data = await res.json();
            weather.value = data;
          } catch (err) {
            error.value = err.message || 'Error fetching weather';
          } finally {
            loading.value = false;
          }
        }

        return { city, weather, loading, error, fetchWeather, iconUrl, sunrise, sunset };
      }
    }).mount('#app');
  </script>


  <style>
    .fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
    .fade-enter-from, .fade-leave-to { opacity: 0; }
  </style>