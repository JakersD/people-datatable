import { core } from '@/shared/i18n/ru/core';
import { init } from 'i18next';

const defaultNS = 'people-datatable';

export const i18next = init({
  lng: 'ru',
  contextSeparator: '#',
  nsSeparator: false,
  keySeparator: false,
  interpolation: { escapeValue: false },
  resources: {
    ru: {
      [`${defaultNS}-Core`]: core,
    },
  },
  defaultNS,
});
