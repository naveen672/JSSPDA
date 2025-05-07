import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'hi' | 'kn' | 'ta' | 'ml';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  
  const [language, setLanguageState] = useState<Language>(() => {
    // Get language from localStorage or use current i18n language
    const savedLanguage = localStorage.getItem('jss-language') as Language;
    return savedLanguage || (i18n.language.split('-')[0] as Language) || 'en';
  });
  
  // Update language in i18n and localStorage when changed
  useEffect(() => {
    localStorage.setItem('jss-language', language);
    i18n.changeLanguage(language);
    
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language, i18n]);
  
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };
  
  return { language, setLanguage };
};
