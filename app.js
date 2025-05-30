const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Лабораторная №11', message: 'Добро пожаловать!' });
});

app.get('/about', (req, res) => {
  res.send('<h2>О сайте</h2><p>Это пример маршрута.</p>');
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
