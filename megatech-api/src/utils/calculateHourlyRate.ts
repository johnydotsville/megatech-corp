export function calculateHourlyRate(
    bio: any,
    minRate: number = 2000,
    maxRate: number = 7000
): number {
    // Весовые коэффициенты для каждого фактора
    const experienceWeight = 0.5;
    const techsWeight = 0.3;
    const platformsWeight = 0.15;
    const langsWeight = 0.05;

    // Нормализация факторов (приведение к шкале 0-1)
    const normalizedExperience = Math.min(bio.experienceYears / 20, 1); // Предполагаем, что 20 лет - максимально значимый опыт
    const normalizedTechs = Math.min(bio.skills.techs.length / 10, 1);  // Максимум 10 технологий
    const normalizedPlatforms = Math.min(bio.skills.platforms.length / 5, 1);  // Максимум 5 платформ
    const normalizedLangs = Math.min(bio.skills.langs.length / 5, 1);  // Максимум 5 языков

    // Расчет взвешенной оценки
    const weightedScore =
        normalizedExperience * experienceWeight +
        normalizedTechs * techsWeight +
        normalizedPlatforms * platformsWeight +
        normalizedLangs * langsWeight;

    // Масштабирование оценки в диапазон [minRate, maxRate]
    const rate = minRate + weightedScore * (maxRate - minRate);

    // Округление до сотен рублей для более красивого числа
    return Math.round(rate / 100) * 100;
}