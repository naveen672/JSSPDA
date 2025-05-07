import { useState } from "react";
import { Settings } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useFontSize } from "@/hooks/useFontSize";
import { useTranslation } from "react-i18next";

import { Accessibility, Eye, Type, Palette } from "lucide-react";

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { fontSize, setFontSize } = useFontSize();
  const { t } = useTranslation();

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-36 left-4 z-50 hidden md:block" id="accessibility-panel">
      <button 
        id="accessibility-toggle" 
        className="w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center hover:bg-primary/90 text-primary-foreground transition-all transform hover:scale-105" 
        aria-label={t('accessibility.options')}
        onClick={togglePanel}
      >
        <Accessibility className="text-primary-foreground" size={24} />
      </button>
      
      {isOpen && (
        <div 
          id="accessibility-options" 
          className="bg-[hsl(var(--card-accent))] rounded-lg shadow-xl p-5 mt-3 w-72 border border-primary/20 animate-fade-in"
        >
          <div className="flex items-center gap-3 mb-4 border-b pb-3">
            <Eye size={22} className="text-primary" />
            <h3 className="font-bold text-lg">{t('accessibility.options')}</h3>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Type size={18} className="text-primary" />
              <h4 className="font-medium">{t('accessibility.textSize')}</h4>
            </div>
            <div className="p-1 bg-white rounded-full shadow-sm flex justify-between">
              <button 
                className={`flex-1 py-2 px-3 rounded-full transition-colors text-sm 
                  ${fontSize === 'small' 
                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm' 
                    : 'hover:bg-gray-100'}`}
                id="acc-decrease-font"
                onClick={() => setFontSize('small')}
                aria-label={t('accessibility.smallText')}
              >
                A<span className="text-xs">-</span>
              </button>
              <button 
                className={`flex-1 py-2 px-3 rounded-full transition-colors 
                  ${fontSize === 'medium' 
                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm' 
                    : 'hover:bg-gray-100'}`}
                id="acc-normal-font"
                onClick={() => setFontSize('medium')}
                aria-label={t('accessibility.mediumText')}
              >
                A
              </button>
              <button 
                className={`flex-1 py-2 px-3 rounded-full transition-colors 
                  ${fontSize === 'large' 
                    ? 'bg-primary text-primary-foreground font-semibold shadow-sm' 
                    : 'hover:bg-gray-100'}`}
                id="acc-increase-font"
                onClick={() => setFontSize('large')}
                aria-label={t('accessibility.largeText')}
              >
                A<span className="text-xs">+</span>
              </button>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Palette size={18} className="text-primary" />
              <h4 className="font-medium">{t('accessibility.colorThemes')}</h4>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button 
                className={`p-3 rounded-lg border flex items-center gap-3 hover:bg-white/70 transition-colors
                  ${theme === 'color-theme-blue' 
                    ? 'ring-2 ring-blue-500 bg-white shadow-sm' 
                    : 'bg-white/50'}`}
                data-theme="blue"
                onClick={() => setTheme('color-theme-blue')}
                aria-label={t('accessibility.blueTheme')}
              >
                <span className="w-6 h-6 rounded-full bg-blue-500 shadow-inner flex items-center justify-center">
                  {theme === 'color-theme-blue' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </span>
                <span className="font-medium">{t('accessibility.blue')}</span>
              </button>
              <button 
                className={`p-3 rounded-lg border flex items-center gap-3 hover:bg-white/70 transition-colors
                  ${theme === 'color-theme-green' 
                    ? 'ring-2 ring-green-500 bg-white shadow-sm' 
                    : 'bg-white/50'}`}
                data-theme="green"
                onClick={() => setTheme('color-theme-green')}
                aria-label={t('accessibility.greenTheme')}
              >
                <span className="w-6 h-6 rounded-full bg-green-500 shadow-inner flex items-center justify-center">
                  {theme === 'color-theme-green' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </span>
                <span className="font-medium">{t('accessibility.green')}</span>
              </button>
              <button 
                className={`p-3 rounded-lg border flex items-center gap-3 hover:bg-white/70 transition-colors
                  ${theme === 'color-theme-purple' 
                    ? 'ring-2 ring-purple-500 bg-white shadow-sm' 
                    : 'bg-white/50'}`}
                data-theme="purple"
                onClick={() => setTheme('color-theme-purple')}
                aria-label={t('accessibility.purpleTheme')}
              >
                <span className="w-6 h-6 rounded-full bg-purple-500 shadow-inner flex items-center justify-center">
                  {theme === 'color-theme-purple' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </span>
                <span className="font-medium">{t('accessibility.purple')}</span>
              </button>
              <button 
                className={`p-3 rounded-lg border flex items-center gap-3 hover:bg-white/70 transition-colors
                  ${theme === 'color-theme-orange' 
                    ? 'ring-2 ring-amber-500 bg-white shadow-sm' 
                    : 'bg-white/50'}`}
                data-theme="orange"
                onClick={() => setTheme('color-theme-orange')}
                aria-label={t('accessibility.orangeTheme')}
              >
                <span className="w-6 h-6 rounded-full bg-amber-500 shadow-inner flex items-center justify-center">
                  {theme === 'color-theme-orange' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </span>
                <span className="font-medium">{t('accessibility.orange')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
