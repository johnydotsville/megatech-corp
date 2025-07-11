const basePath = '/employees/photos/';

const maleCount = 50;
const femaleCount = 25;

// TODO: Сделать маппинг вручную, чтобы фотографии больше соответствовали биографиям
const mapper = new Map();
for (let i = 1; i <= maleCount; i++) {
  mapper.set(i, `${basePath}m${i}.jpg`);
}
for (let i = 100; i < femaleCount; i++) {
  mapper.set(i, `${basePath}f${i}.jpg`);
}


function mapEmployeePhoto(id) {
  return mapper.get(id);
}


module.exports = mapEmployeePhoto;