import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import pl from './locales/pl.json';

i18next.use(initReactI18next).init({
  resources: {
    pl: {
      translation: pl,
    },
  },
  lng: 'en',
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false,
  },
});
