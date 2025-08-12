/**
 * Генерирует дату на основе его ID.
 */
export function generateFeedbackDate(id: string, baseYear: number = new Date().getFullYear()): string {
    // Создаем хэш из ID для детерминированного результата
    const hash = id.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    
    // Определяем параметры даты на основе хэша
    const yearsAgo = hash % 5;       // Сколько лет назад (0-4)
    const month = (hash % 12) + 1;   // Месяц от 1 до 12
    const day = (hash % 28) + 1;     // День от 1 до 28
    
    // Вычисляем абсолютный год (сохраняем "возраст" отзыва)
    const year = baseYear - yearsAgo;
    
    // Форматируем дату
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
    
    return `${year}-${formattedMonth}-${formattedDay}`;
}