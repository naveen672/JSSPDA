import { useState, useEffect } from 'react';

type Theme = 'color-theme-blue' | 'color-theme-green' | 'color-theme-purple' | 'color-theme-orange';

export const useTheme = () => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Get theme from localStorage or default to blue theme
    const savedTheme = localStorage.getItem('jss-theme') as Theme;
    return savedTheme || 'color-theme-blue';
  });
  
  // Update theme in localStorage and on body class when changed
  useEffect(() => {
    localStorage.setItem('jss-theme', theme);
    
    // Remove all theme classes from body
    document.body.classList.remove(
      'color-theme-blue',
      'color-theme-green',
      'color-theme-purple',
      'color-theme-orange'
    );
    
    // Add current theme class to body
    document.body.classList.add(theme);
  }, [theme]);
  
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };
  
  return { theme, setTheme };
};
