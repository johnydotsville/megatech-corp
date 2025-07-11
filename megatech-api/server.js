const express = require('express');
const cors = require('cors');
const path = require('path');
const loadTeamData = require('./utils/loadTeamData');
const TeamService = require('./services/TeamService');
const TeamController = require('./controllers/TeamController');
const teamRouter = require('./routers/TeamRouter');


const app = express();
app.use(cors()); // Разрешить запросы с любого origin (для разработки)
app.use(express.json()); // Парсинг JSON в теле запроса

const team = loadTeamData();
const teamService = new TeamService(team);
const teamController = new TeamController(teamService);


const empPhotoPath = path.join(__dirname, 'public', 'employees');
app.use('/employees/photos', express.static(empPhotoPath));
// http://localhost:3007/employees/photos/m001.jpeg


app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
  next();
});


app.use('/team', teamRouter(teamController));


// Запуск сервера
const PORT = 3007;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});


