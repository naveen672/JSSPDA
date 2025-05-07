import { createContext, useEffect, useContext, ReactNode } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { useFontSize } from '@/hooks/useFontSize';
import { useLanguage } from '@/hooks/useLanguage';
import i18n from '@/lib/i18n';

// Context type definitions
type AppContextType = {
  theme: ReturnType<typeof useTheme>['theme'];
  setTheme: ReturnType<typeof useTheme>['setTheme'];
  fontSize: ReturnType<typeof useFontSize>['fontSize'];
  setFontSize: ReturnType<typeof useFontSize>['setFontSize'];
  language: ReturnType<typeof useLanguage>['language'];
  setLanguage: ReturnType<typeof useLanguage>['setLanguage'];
};

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useTheme();
  const { fontSize, setFontSize } = useFontSize();
  const { language, setLanguage } = useLanguage();
  
  // Initialize i18n when the context is first mounted
  useEffect(() => {
    // This ensures i18n is initialized 
    // The actual initialization happens in i18n.ts
    const currentLang = i18n.language;
    if (currentLang !== language) {
      i18n.changeLanguage(language);
    }
  }, [language]);
  
  const value = {
    theme,
    setTheme,
    fontSize,
    setFontSize,
    language,
    setLanguage
  };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
