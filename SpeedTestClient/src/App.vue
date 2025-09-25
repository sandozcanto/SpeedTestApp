<template>
  <div id="app">
    <header style="text-align:center; padding:1rem; background:#1976d2; color:white;">
      <h1>Internet Speed Test</h1>
    </header>

    <main style="padding:2rem; display:flex; justify-content:center;">
      <SpeedTest />
    </main>

    <footer style="text-align:center; padding:1rem; font-size:0.9rem; color:#555;">
      &copy; 2025 Sandoz Speed Test App
    </footer>
  </div>
</template>

<script setup lang="ts">
import SpeedTest from './components/SpeedTest.vue'
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
}
</style>
