import { core } from '@/_data/i18n/ru/core';
import { ESort } from '@/_data/models/employee';
import { t } from 'i18next';

export const getSortItems = () => [
  {
    text: t(core.search.sorting.by_default),
    sort: ESort.default,
  },
  {
    text: t(core.search.sorting.by_firstName),
    sort: ESort.firstName,
  },
  {
    text: t(core.search.sorting.by_birthday),
    sort: ESort.birthday,
  },
];
