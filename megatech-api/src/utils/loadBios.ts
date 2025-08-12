import path from 'path';
import fs from 'fs';
import { loadDataFromDirectories } from './loadDataFromDirectories';
import { calculateHourlyRate } from './calculateHourlyRate';


export function loadBios(rootPath) {
  return loadDataFromDirectories(rootPath, (fullPath, uuid, result) => {
    const bioPath = path.join(fullPath, 'bio.json');
    try {
      const bioData = fs.readFileSync(bioPath, 'utf8');
      const bioJson = JSON.parse(bioData);
      result.push({ 
        id: uuid, 
        ...bioJson,
        hourlyRate: calculateHourlyRate(bioJson),
        photo: `/team/photo/${uuid}.jpg`
      });
      console.log(`✅ Успешно считана инфа о специалисте: ${uuid}`);
    } catch (err: any) {
      console.error(`❌ Ошибка в ${fullPath}:`, err.message);
    }
  });
}