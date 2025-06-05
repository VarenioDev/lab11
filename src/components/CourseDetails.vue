<template>
  <div v-if="course">
    <h2>{{ course.title }}</h2>
    <p>{{ course.fullDescription }}</p>
    <button @click="enroll">Записаться на курс</button>
  </div>
  <div v-else>
    Курс не найден
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const course = ref(null)

const coursesData = {
  1: { title: 'Программирование на Vue', fullDescription: 'Полный курс по Vue 3 с Composition API...' },
  2: { title: 'JavaScript продвинутый', fullDescription: 'Асинхронное программирование, паттерны...' },
  3: { title: 'Веб-дизайн', fullDescription: 'Основы типографики, цветовые схемы...' }
}

onMounted(() => {
  course.value = coursesData[route.params.id]
})

const enroll = () => {
  alert(`Вы записаны на курс "${course.value.title}"`)
}
</script>