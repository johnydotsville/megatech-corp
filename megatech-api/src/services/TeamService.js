class TeamService {

  constructor(teamData) {
    this.team = teamData;
  }


  getEmployeeById(id) {
    return this.team.find(employee => employee.id === id);
  }


  getEmployeesPagination(page = 1, limit = 10) {
    if (page < 1) page = 1;
    if (limit < 1) limit = 10;

    limit = Math.min(limit, 25);
    const maxPage = Math.ceil(this.team.length / limit);

    if (page > maxPage) page = maxPage;

    const offset = (page-1) * limit;

    return this.team.slice(offset, offset + limit);
  }
}


module.exports = TeamService;