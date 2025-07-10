const path = require('path');
const fs = require('fs');

function loadTeamData() {
  const teamInfoFilepath = path.join(process.cwd(), 'data', 'team', 'bios.json');
  console.log(teamInfoFilepath);
  try {
    const data = fs.readFileSync(teamInfoFilepath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Ошибка загрузки данных сотрудников:', err);
    return [];
  }
}

module.exports = { loadTeamData };