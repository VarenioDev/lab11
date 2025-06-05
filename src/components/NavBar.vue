<template>
  <nav class="navbar">
    <RouterLink to="/">Главная</RouterLink>
    <RouterLink to="/about">О школе</RouterLink>
    <RouterLink to="/courses">Курсы</RouterLink>
    <RouterLink to="/contacts">Контакты</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  background-color: #42b983;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}
.navbar a {
  color: white;
  text-decoration: none;
}
.navbar a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>