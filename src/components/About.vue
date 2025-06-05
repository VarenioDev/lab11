<template>
  <div class="about">
    <h1>О нашей школе</h1>
    <div class="content">
      <img src="../assets/school.jpg" alt="Школа Политехник" class="school-image">
      <div class="text">
        <p>Онлайн-школа "Политехник" основана в 2020 году с целью предоставления качественного IT-образования.</p>
        <p>Наша миссия - сделать современные технологии доступными для каждого.</p>
        <h3>Наши преимущества:</h3>
        <ul>
          <li>Актуальные программы обучения</li>
          <li>Поддержка после курса</li>
          <li>Сертификаты об окончании</li>
          <li>Доступ к материалам навсегда</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
.content {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  align-items: center;
}
.school-image {
  width: 50%;
  border-radius: 8px;
}
.text {
  flex: 1;
}
@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }
  .school-image {
    width: 100%;
  }
}
</style>