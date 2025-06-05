<template>
  <div class="contacts">
    <h1>Контакты</h1>
    <div class="contact-info">
      <div class="info-card">
        <h3>Адрес</h3>
        <p>г. Москва, ул. Политехническая, д. 32</p>
      </div>
      <div class="info-card">
        <h3>Телефон</h3>
        <p>+7 (495) 123-45-67</p>
      </div>
      <div class="info-card">
        <h3>Email</h3>
        <p>info@polytechnic-school.ru</p>
      </div>
    </div>
    <form class="contact-form">
      <h3>Напишите нам</h3>
      <div class="form-group">
        <label for="name">Ваше имя</label>
        <input type="text" id="name" v-model="form.name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email">
      </div>
      <div class="form-group">
        <label for="message">Сообщение</label>
        <textarea id="message" v-model="form.message"></textarea>
      </div>
      <button type="submit" @click.prevent="submitForm">Отправить</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  alert(`Спасибо, ${form.value.name}! Ваше сообщение отправлено.`)
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.contacts {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
.contact-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}
.info-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}
.contact-form {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.form-group {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
}
input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  background-color: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
@media (max-width: 600px) {
  .contact-info {
    grid-template-columns: 1fr;
  }
}
</style>