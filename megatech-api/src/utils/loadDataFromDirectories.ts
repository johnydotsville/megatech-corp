import path from 'path';
import fs from 'fs';


export function loadDataFromDirectories(rootPath, processFileCallback) {
  const result = [];

  function traverseDirectory(directory) {
    try {
      const items = fs.readdirSync(directory);

      for (const item of items) {
        const fullPath = path.join(directory, item);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
          const parts = item.split('_');
          if (parts.length === 3 && parts[2].length === 8) {
            const uuid = parts[2];
            processFileCallback(fullPath, uuid, result);
          }
          traverseDirectory(fullPath);
        }
      }
    } catch (err) {
      console.error(`⚠️ Ошибка при обработке ${directory}:`, err.message);
    }
  }

  traverseDirectory(rootPath);
  return result;
}