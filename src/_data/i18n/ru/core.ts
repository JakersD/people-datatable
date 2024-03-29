import { EDepartment } from '@/_data/models/employee';

export const core = {
  search: {
    title: 'Поиск',
    placeholder: 'Введите имя, тег, почту...',
    sorting: {
      title: 'Сортировка',
      by_default: 'По умолчанию',
      by_firstName: 'По алфавиту',
      by_birthday: 'По дню рождения',
    },
  },
  table: {
    department: {
      [EDepartment.all]: 'Все',
      [EDepartment.android]: 'Android',
      [EDepartment.ios]: 'iOS',
      [EDepartment.design]: 'Дизайн',
      [EDepartment.management]: 'Менеджмент',
      [EDepartment.qa]: 'QA',
      [EDepartment.back_office]: 'Бэк-офис',
      [EDepartment.frontend]: 'Frontend',
      [EDepartment.hr]: 'HR',
      [EDepartment.pr]: 'PR',
      [EDepartment.backend]: 'Backend',
      [EDepartment.support]: 'Техподдержка',
      [EDepartment.analytics]: 'Аналитика',
    },
  },
};
