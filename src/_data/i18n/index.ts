import { init } from 'i18next';
import { core } from './ru/core';

const defaultNS = 'people-datatable';

export const i18n = init({
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
