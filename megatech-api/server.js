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



app.get('/team', (request, response) => {
  let { page = 1, limit = 10 } = request.query;

  page = parseInt(page);
  limit = parseInt(limit);

  if (isNaN(page) || page < 1) page = 1;
  if (isNaN(limit) || limit < 1) limit = 10;

  limit = Math.min(limit, 25);
  const maxPage = Math.ceil(team.length / limit);

  if (page > maxPage) page = maxPage;

  const offset = (page-1) * limit;

  const employees = team.slice(offset, offset + limit);

  response.json(employees);
})


// Запуск сервера
const PORT = 3007;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});


