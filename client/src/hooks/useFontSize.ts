import { useState, useEffect } from 'react';

type FontSize = 'small' | 'medium' | 'large';

export const useFontSize = () => {
  const [fontSize, setFontSizeState] = useState<FontSize>(() => {
    // Get font size from localStorage or default to medium
    const savedFontSize = localStorage.getItem('jss-font-size') as FontSize;
    return savedFontSize || 'medium';
  });
  
  // Update font size in localStorage and on body attribute when changed
  useEffect(() => {
    localStorage.setItem('jss-font-size', fontSize);
    
    // Update data-font-size attribute on body
    document.body.setAttribute('data-font-size', fontSize);
    
    // Apply actual font size styles
    switch (fontSize) {
      case 'small':
        document.body.style.fontSize = '0.9rem';
        break;
      case 'medium':
        document.body.style.fontSize = '1rem';
        break;
      case 'large':
        document.body.style.fontSize = '1.15rem';
        break;
    }
  }, [fontSize]);
  
  const setFontSize = (newFontSize: FontSize) => {
    setFontSizeState(newFontSize);
  };
  
  return { fontSize, setFontSize };
};
