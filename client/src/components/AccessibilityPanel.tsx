import { useState } from "react";
import { Settings } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useFontSize } from "@/hooks/useFontSize";
import { useTranslation } from "react-i18next";

export default function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { fontSize, setFontSize } = useFontSize();
  const { t } = useTranslation();

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-24 left-4 z-50 hidden md:block" id="accessibility-panel">
      <button 
        id="accessibility-toggle" 
        className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50" 
        aria-label={t('accessibility.options')}
        onClick={togglePanel}
      >
        <Settings className="text-primary" size={20} />
      </button>
      
      {isOpen && (
        <div 
          id="accessibility-options" 
          className="bg-white rounded-lg shadow-xl p-4 mt-2 w-64"
        >
          <h3 className="font-bold mb-3 text-center">{t('accessibility.options')}</h3>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2">{t('accessibility.textSize')}</h4>
            <div className="flex justify-between border rounded-md overflow-hidden">
              <button 
                className={`flex-1 py-1 hover:bg-gray-100 text-sm ${fontSize === 'small' ? 'bg-gray-100 font-bold' : ''}`}
                id="acc-decrease-font"
                onClick={() => setFontSize('small')}
              >
                A-
              </button>
              <button 
                className={`flex-1 py-1 hover:bg-gray-100 text-sm ${fontSize === 'medium' ? 'bg-gray-100 font-bold' : ''}`}
                id="acc-normal-font"
                onClick={() => setFontSize('medium')}
              >
                A
              </button>
              <button 
                className={`flex-1 py-1 hover:bg-gray-100 text-sm ${fontSize === 'large' ? 'bg-gray-100 font-bold' : ''}`}
                id="acc-increase-font"
                onClick={() => setFontSize('large')}
              >
                A+
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">{t('accessibility.colorThemes')}</h4>
            <div className="grid grid-cols-2 gap-2">
              <button 
                className={`p-2 rounded border flex items-center gap-2 hover:bg-gray-50 ${theme === 'color-theme-blue' ? 'ring-2 ring-blue-500' : ''}`}
                data-theme="blue"
                onClick={() => setTheme('color-theme-blue')}
              >
                <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                <span className="text-sm">{t('accessibility.blue')}</span>
              </button>
              <button 
                className={`p-2 rounded border flex items-center gap-2 hover:bg-gray-50 ${theme === 'color-theme-green' ? 'ring-2 ring-green-500' : ''}`}
                data-theme="green"
                onClick={() => setTheme('color-theme-green')}
              >
                <span className="w-4 h-4 rounded-full bg-green-500"></span>
                <span className="text-sm">{t('accessibility.green')}</span>
              </button>
              <button 
                className={`p-2 rounded border flex items-center gap-2 hover:bg-gray-50 ${theme === 'color-theme-purple' ? 'ring-2 ring-purple-500' : ''}`}
                data-theme="purple"
                onClick={() => setTheme('color-theme-purple')}
              >
                <span className="w-4 h-4 rounded-full bg-purple-500"></span>
                <span className="text-sm">{t('accessibility.purple')}</span>
              </button>
              <button 
                className={`p-2 rounded border flex items-center gap-2 hover:bg-gray-50 ${theme === 'color-theme-orange' ? 'ring-2 ring-amber-500' : ''}`}
                data-theme="orange"
                onClick={() => setTheme('color-theme-orange')}
              >
                <span className="w-4 h-4 rounded-full bg-amber-500"></span>
                <span className="text-sm">{t('accessibility.orange')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
