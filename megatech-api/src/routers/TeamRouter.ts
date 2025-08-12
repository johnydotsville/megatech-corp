import express from 'express';


const router = express.Router();

export function teamRouter(team, feedbacks) {
  router.get('/', team.getEmployeesPagination);
  router.get('/:id', team.getEmployeeById);
  router.get('/:id/feedbacks', feedbacks.getFeedbacksByEmployeeId);
  
  return router;
};