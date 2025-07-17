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

    page = parseInt(page);
    limit = parseInt(limit);

    if (isNaN(page)) page = 1;
    if (isNaN(limit)) limit = 10;

    const employees = this.teamService.getEmployeesPagination(page, limit);

    response.json(employees);
  }
}


module.exports = TeamController;