import { createInstance } from 'i18next';
import { CORE } from './ru/Core';

const defaultNS = 'people-datatable';

export const i18next = createInstance({
  lng: 'ru',
  contextSeparator: '#',
  nsSeparator: false,
  keySeparator: false,
  interpolation: { escapeValue: false },
  resources: {
    ru: {
      [`${defaultNS}-Core`]: CORE,
    },
  },
  defaultNS,
});

export { CORE };
