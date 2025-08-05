const express = require('express');
const router = express.Router();

module.exports = (controller) => {
  // router.get('/', controller.getEmployeesPagination);
  router.get('/:id', controller.getFeedbacksByEmployeeId);
  
  return router;
};