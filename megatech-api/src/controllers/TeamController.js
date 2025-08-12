class TeamController {

  constructor(teamService) {
    this.teamService = teamService;
  }


  getEmployeeById = (request, response) => {
    const id = request.params.id;
    const employee = this.teamService.getEmployeeById(id);
    response.json(employee);
  }


  getEmployeesPagination = (request, response) => {
    let { page = 1, limit = 10 } = request.query;

    page = Math.max(1, parseInt(page) || 1);
    limit = Math.max(1, parseInt(limit) || 10);

    const employees = this.teamService.getEmployeesPagination(page, limit);

    response.header('X-Total-Count', this.teamService.getTotalEmployeesCount());
    response.json(employees);
  }
}


module.exports = TeamController;