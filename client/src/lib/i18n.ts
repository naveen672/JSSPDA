import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all locale files
import enTranslation from '../locales/en.json';
import hiTranslation from '../locales/hi.json';
import knTranslation from '../locales/kn.json';
import taTranslation from '../locales/ta.json';
import mlTranslation from '../locales/ml.json';

const resources = {
  en: {
    translation: enTranslation
  },
  hi: {
    translation: hiTranslation
  },
  kn: {
    translation: knTranslation
  },
  ta: {
    translation: taTranslation
  },
  ml: {
    translation: mlTranslation
  }
};

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
