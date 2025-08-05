class FeedbackService {

  constructor(feedbacks) {
    this.feedbacks = feedbacks;
  }


  getFeedbacksByEmployeeId(employeeId) {
    return this.feedbacks.find(fb => fb.employeeId === employeeId);
  }


  // getEmployeesPagination(page = 1, limit = 10) {
  //   if (page < 1) page = 1;
  //   if (limit < 1) limit = 10;

  //   limit = Math.min(limit, 25);
  //   const maxPage = Math.ceil(this.feedbacks.length / limit);

  //   if (page > maxPage) page = maxPage;

  //   const offset = (page-1) * limit;

  //   return this.feedbacks.slice(offset, offset + limit);
  // }
}


module.exports = FeedbackService;