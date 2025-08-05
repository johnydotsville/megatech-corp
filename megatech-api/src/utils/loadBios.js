const path = require('path');
const fs = require('fs');
const loadDataFromDirectories = require('./loadDataFromDirectories');


function loadBios(rootPath) {
  return loadDataFromDirectories(rootPath, (fullPath, uuid, result) => {
    const bioPath = path.join(fullPath, 'bio.json');
    try {
      const bioData = fs.readFileSync(bioPath, 'utf8');
      const bioJson = JSON.parse(bioData);
      result.push({ 
        id: uuid, 
        ...bioJson,
        photo: `/team/photo/${uuid}.jpg`
      });
      console.log(`✅ Успешно считана инфа о специалисте: ${uuid}`);
    } catch (err) {
      console.error(`❌ Ошибка в ${fullPath}:`, err.message);
    }
  });
}


module.exports = loadBios;