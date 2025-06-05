<template>
  <div class="home">
    <h1>Добро пожаловать в онлайн-школу "Политехник"</h1>
    <div class="hero">
      <p>Инновационные курсы по программированию и веб-разработке</p>
      <RouterLink to="/courses" class="btn">Посмотреть курсы</RouterLink>
    </div>
    <div class="features">
      <div v-for="(feature, index) in features" :key="index" class="feature-card">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    title: 'Практические знания',
    description: 'Обучение через решение реальных задач'
  },
  {
    title: 'Опытные преподаватели',
    description: 'Преподаватели с промышленным опытом'
  },
  {
    title: 'Гибкий график',
    description: 'Учитесь в удобное для вас время'
  }
]
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
.hero {
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  text-align: center;
}
.btn {
  display: inline-block;
  background-color: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 1rem;
}
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}
.feature-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
}
</style>