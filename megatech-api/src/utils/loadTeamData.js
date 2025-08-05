const path = require('path');
const fs = require('fs');
const shuffleArray = require('./shuffleArray');


function loadTeamData(rootPath) {
  const bios = [];

  function processDirectory(directory) {
    try {
      const items = fs.readdirSync(directory);

      for (const item of items) {
        const fullPath = path.join(directory, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
          const parts = item.split('_');
          if (parts.length === 3 && parts[2].length === 8) {
            const uuid = parts[2];
            const bioPath = path.join(fullPath, 'bio.json');

            try {
              const bioData = fs.readFileSync(bioPath, 'utf8');
              const bioJson = JSON.parse(bioData);
              bios.push({ 
                id: uuid, 
                ...bioJson,
                photo: `/team/photo/${uuid}.jpg`
              });
              console.log(`✅ Успешно считана инфа о специалисте: ${uuid}`);
            } catch (err) {
              console.error(`❌ Ошибка в ${fullPath}:`, err.message);
            }
          }

          processDirectory(fullPath);
        }
      }
    } catch (err) {
      console.error(`⚠️ Ошибка при обработке ${directory}:`, err.message);
    }
  }

  processDirectory(rootPath);
  console.log(`⚠️ Всего специалистов обработано: ${bios.size}`);
  
  return shuffleArray(bios, 5);
}


module.exports = loadTeamData;