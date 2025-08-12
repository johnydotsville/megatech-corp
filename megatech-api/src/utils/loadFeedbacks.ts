import path from 'path';
import fs from 'fs';
import { loadDataFromDirectories } from './loadDataFromDirectories';
import { generateFeedbackDate } from './generateFeedbackDate';


export function loadFeedbacks(rootPath) {
  return loadDataFromDirectories(rootPath, (fullPath, uuid, result) => {
    const feedbackPath = path.join(fullPath, 'feedbacks.json');
    try {
      const feedbackData = fs.readFileSync(feedbackPath, 'utf8');
      const feedbackJson = JSON.parse(feedbackData);
      result.push({ 
        employeeId: uuid, 
        feedbacks: feedbackJson.map((fb, i) => ({ 
          id: `${uuid}-${i}`,
          date: generateFeedbackDate(`${uuid}-${i}`),
          ...fb
        }))
      });
      console.log(`✅ Успешно считаны отзывы о специалисте: ${uuid}`);
    } catch (err) {
      console.error(`❌ Ошибка в ${fullPath}:`, err.message);
    }
  });
}