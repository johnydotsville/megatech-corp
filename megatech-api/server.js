const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors()); // Разрешить запросы с любого origin (для разработки)
app.use(express.json()); // Парсинг JSON в теле запроса


const teamInfoFilepath = path.join(__dirname, 'data', 'team', 'bios.json');
let team = [];

try {
  const data = fs.readFileSync(teamInfoFilepath, 'utf8');
  team = JSON.parse(data);
  console.log('Данные о сотрудниках успешно загружены.');
} catch (err) {
  console.error('Ошибка загрузки данных сотрудников:', err);
  team = [];
}

console.log(team.length);
console.log(team[0] || 'Нема сотрудников');


app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
  next();
});



app.get('/team/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const employee = team.find(emp => emp.id === id);
  response.json(employee);
});


// Запуск сервера
const PORT = 3007;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});


