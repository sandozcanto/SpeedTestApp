<template>
  <div class="container">
    <button :disabled="running" @click="runTest">
      {{ running ? 'Testing…' : 'Run Speed Test' }}
    </button>
    <div v-if="running">Running test — This may take up to several minutes...</div>
    <div v-if="speedMbps">Download: {{ speedMbps }}</div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const running = ref(false)
const speedMbps = ref<number | null>(null)
const error = ref<string | null>(null)

async function runTest() {
  running.value = true
  error.value = null
  try {
    const res = await axios.get('api/run', { timeout: 240000 })
    speedMbps.value = res.data.downloadSpeedMbps
  } catch (e) {
    console.error(e)
  } finally {
    running.value = false
  }
}
</script>

<style>
.container {
  padding: 2rem;
  font-family: Arial, Helvetica, sans-serif;
}
button {
  padding: 0.5rem 1rem;
}
.error {
  color: red;
  margin-top: 1rem;
}
</style>
