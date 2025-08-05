const express = require('express');
const router = express.Router();

module.exports = (team, feedbacks) => {
  router.get('/', team.getEmployeesPagination);
  router.get('/:id', team.getEmployeeById);
  router.get('/:id/feedbacks', feedbacks.getFeedbacksByEmployeeId);
  
  return router;
};