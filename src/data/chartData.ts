export const validityData = {
    comparison: [
      { name: 'День 1', control: 65, experimental: 67 },
      { name: 'День 2', control: 68, experimental: 72 },
      { name: 'День 3', control: 67, experimental: 75 },
      { name: 'День 4', control: 69, experimental: 78 },
      { name: 'День 5', control: 70, experimental: 82 },
      { name: 'День 6', control: 72, experimental: 85 }
    ],
    
    radar: [
        { aspect: "Внутренняя", value: 85, fullMark: 100 },
        { aspect: "Внешняя", value: 75, fullMark: 100 },
        { aspect: "Конструктная", value: 90, fullMark: 100 },
        { aspect: "Статистическая", value: 80, fullMark: 100 },
        { aspect: "Надежность", value: 88, fullMark: 100 }
      ],
  
    threats: [
      { name: 'История', value: 25, color: '#EF4444', description: 'Внешние события во время эксперимента' },
      { name: 'Выборка', value: 30, color: '#F59E0B', description: 'Репрезентативность участников' },
      { name: 'Измерение', value: 20, color: '#10B981', description: 'Точность инструментов оценки' },
      { name: 'Взаимодействие', value: 25, color: '#3B82F6', description: 'Влияние исследователя на участников' }
    ],
  
    methods: [
      { 
        category: 'Планирование',
        metrics: [
          { name: 'Чёткость целей', value: 92 },
          { name: 'Выборка', value: 85 },
          { name: 'Контроль переменных', value: 78 }
        ]
      },
      { 
        category: 'Исполнение',
        metrics: [
          { name: 'Стандартизация', value: 88 },
          { name: 'Документирование', value: 95 },
          { name: 'Объективность', value: 82 }
        ]
      }
    ],
  
    practical: [
      {
        phase: 'Подготовка',
        score: 85,
        recommendations: [
          'Детальное планирование процедур',
          'Пилотное тестирование',
          'Проверка инструментов'
        ]
      },
      {
        phase: 'Проведение',
        score: 92,
        recommendations: [
          'Строгое следование протоколу',
          'Регулярная проверка данных',
          'Контроль условий'
        ]
      },
      {
        phase: 'Анализ',
        score: 88,
        recommendations: [
          'Статистическая проверка',
          'Учёт ограничений',
          'Документирование аномалий'
        ]
      }
    ]
  };