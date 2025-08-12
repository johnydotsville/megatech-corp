import express from 'express';


const router = express.Router();

export function feedbackRouter(controller) {
  // router.get('/', controller.getEmployeesPagination);
  router.get('/:id', controller.getFeedbacksByEmployeeId);
  
  return router;
};