const path = require('path');
const fs = require('fs');
const mapEmployeePhoto = require('./mapEmployeePhoto');


function loadTeamData() {
  const teamInfoFilepath = path.join(process.cwd(), 'data', 'team', 'bios.json');
  console.log(teamInfoFilepath);
  try {
    const data = fs.readFileSync(teamInfoFilepath, 'utf8');
    const employees = JSON.parse(data);
    const employeesWithPhoto = employees.map(emp => ({ ...emp, photo: mapEmployeePhoto(emp.id)}));
    return employeesWithPhoto;
  } catch (err) {
    console.error('Ошибка загрузки данных сотрудников:', err);
    return [];
  }
}


module.exports = loadTeamData;