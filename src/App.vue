<template>
  <div class="app">
    <NavBar />
    <main>
      <RouterView />
    </main>
    <FooterComp />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>