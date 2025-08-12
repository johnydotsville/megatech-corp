export function shuffleArray(array, seed = 0) {
   const newArray = [...array];
  let random = seed;

  // Простой линейный конгруэнтный генератор (LCG)
  function lcg() {
    const a = 1664525;
    const c = 1013904223;
    const m = 4294967296;  // 2^32
    random = (a * random + c) % m;
    return random / m;  // Нормализуем до [0, 1)
  }

  // Тасование Фишера — Йетса с использованием LCG
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(lcg() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
}