import express from 'express';
import cors from 'cors';
import path from 'path';
import { loadTeamData } from './utils/loadTeamData';
import { TeamService } from './services/TeamService';
import { FeedbackService } from './services/FeedbackService';
import { TeamController } from './controllers/TeamController';
import { FeedbackController } from './controllers/FeedbackController';
import { teamRouter } from './routers/TeamRouter';
import { feedbackRouter } from './routers/FeedbackRouter';

import { loadDataFromDirectories } from './utils/loadDataFromDirectories';
import { loadBios } from './utils/loadBios';
import { loadFeedbacks } from './utils/loadFeedbacks';


const app = express();
app.use(cors()); // Разрешить запросы с любого origin (для разработки)
app.use(express.json()); // Парсинг JSON в теле запроса

const team = loadBios(path.join(__dirname, '../data/team'));
const feedbacks = loadFeedbacks(path.join(__dirname, '../data/team'));

const teamService = new TeamService(team);
const feedbackService = new FeedbackService(feedbacks);

const teamController = new TeamController(teamService);
const feedbackController = new FeedbackController(feedbackService);


const empPhotoPath = path.join(__dirname, '..', 'public', 'team', 'photo');
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


