const express = require('express');
const cors = require('cors');
const path = require('path');
const loadTeamData = require('./src/utils/loadTeamData');
const TeamService = require('./src/services/TeamService');
const FeedbackService = require('./src/services/FeedbackService');
const TeamController = require('./src/controllers/TeamController');
const FeedbackController = require('./src/controllers/FeedbackController');
const teamRouter = require('./src/routers/TeamRouter');
const feebackRouter = require('./src/routers/FeedbackRouter');

const loadDataFromDirectories = require('./src/utils/loadDataFromDirectories');
const loadBios = require('./src/utils/loadBios');
const loadFeedbacks = require('./src/utils/loadFeedbacks');


const app = express();
app.use(cors()); // Разрешить запросы с любого origin (для разработки)
app.use(express.json()); // Парсинг JSON в теле запроса

const team = loadBios(path.join(__dirname, 'data/team'));
console.log(team)
const feedbacks = loadFeedbacks(path.join(__dirname, 'data/team'));

const teamService = new TeamService(team);
const feedbackService = new FeedbackService(feedbacks);

const teamController = new TeamController(teamService);
const feedbackController = new FeedbackController(feedbackService);


const empPhotoPath = path.join(__dirname, 'public', 'team', 'photo');
app.use('/team/photo', express.static(empPhotoPath));
// http://localhost:3007/team/photo/2f154d50.jpg


app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
  next();
});


app.use('/team', teamRouter(teamController, feedbackController));


// Запуск сервера
const PORT = 3007;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});


