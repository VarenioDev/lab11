<template>
  <div class="courses">
    <h1>Наши курсы</h1>
    <div v-for="course in courses" :key="course.id" class="course-card">
      <RouterLink :to="'/courses/' + course.id">
        <h3>{{ course.title }}</h3>
      </RouterLink>
      <p>{{ course.description }}</p>
    </div>
  </div>
</template>

<script setup>
const courses = [
  { id: 1, title: 'Программирование на Vue', description: 'Изучение основ Vue 3' },
  { id: 2, title: 'JavaScript продвинутый', description: 'Углубленное изучение JS' },
  { id: 3, title: 'Веб-дизайн', description: 'Основы UI/UX дизайна' }
]
</script>

<style scoped>
.course-card {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
}
</style>