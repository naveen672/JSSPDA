import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useFontSize } from "@/hooks/useFontSize";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const { fontSize, setFontSize } = useFontSize();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('#language-button') && !target.closest('#language-menu')) {
      setLanguageMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "/", label: t('navigation.home') },
    { href: "/about", label: t('navigation.about') },
    { href: "/courses", label: t('navigation.courses') },
    { href: "/faculty", label: t('navigation.faculty') },
    { href: "/contact", label: t('navigation.contact') }
  ];

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'ta', label: 'தமிழ்' },
    { code: 'ml', label: 'മലയാളം' }
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50" onClick={handleClickOutside}>
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground text-xl font-bold">
              JSS
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold font-serif">{t('header.title')}</h1>
              <p className="text-xs text-muted-foreground">{t('header.subtitle')}</p>
            </div>
          </Link>
        </div>
        
        {/* Accessibility Panel */}
        <div className="flex items-center gap-2 md:gap-4 order-last md:order-none">
          <div className="hidden md:flex items-center border rounded-full overflow-hidden p-1">
            <button 
              className="p-1 font-bold text-xs rounded-full hover:bg-gray-100 focus:bg-gray-100" 
              aria-label={t('accessibility.decreaseFontSize')}
              onClick={() => setFontSize('small')}
            >
              A-
            </button>
            <button 
              className="p-1 font-bold text-sm rounded-full hover:bg-gray-100 focus:bg-gray-100" 
              aria-label={t('accessibility.normalFontSize')}
              onClick={() => setFontSize('medium')}
            >
              A
            </button>
            <button 
              className="p-1 font-bold text-base rounded-full hover:bg-gray-100 focus:bg-gray-100" 
              aria-label={t('accessibility.increaseFontSize')}
              onClick={() => setFontSize('large')}
            >
              A+
            </button>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            <button 
              className={`w-6 h-6 rounded-full bg-blue-500 border-2 ${theme === 'color-theme-blue' ? 'border-primary' : 'border-white'} focus:ring-2`} 
              aria-label={t('accessibility.blueTheme')}
              onClick={() => setTheme('color-theme-blue')}
            ></button>
            <button 
              className={`w-6 h-6 rounded-full bg-green-500 border-2 ${theme === 'color-theme-green' ? 'border-primary' : 'border-white'} focus:ring-2`} 
              aria-label={t('accessibility.greenTheme')}
              onClick={() => setTheme('color-theme-green')}
            ></button>
            <button 
              className={`w-6 h-6 rounded-full bg-purple-500 border-2 ${theme === 'color-theme-purple' ? 'border-primary' : 'border-white'} focus:ring-2`} 
              aria-label={t('accessibility.purpleTheme')}
              onClick={() => setTheme('color-theme-purple')}
            ></button>
            <button 
              className={`w-6 h-6 rounded-full bg-amber-500 border-2 ${theme === 'color-theme-orange' ? 'border-primary' : 'border-white'} focus:ring-2`} 
              aria-label={t('accessibility.orangeTheme')}
              onClick={() => setTheme('color-theme-orange')}
            ></button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`font-medium ${location === link.href ? 'text-primary' : 'hover:text-primary'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Language Selector */}
        <div className="flex items-center gap-4">
          <div className="relative" id="language-selector">
            <button 
              className="flex items-center gap-1 border rounded-md px-3 py-1.5 text-sm hover:bg-gray-50" 
              id="language-button"
              onClick={toggleLanguageMenu}
            >
              <span>{languages.find(lang => lang.code === language)?.label || 'English'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <div 
              className={`absolute right-0 mt-1 bg-white shadow-lg rounded-md py-2 px-1 w-32 z-50 ${languageMenuOpen ? 'block' : 'hidden'}`} 
              id="language-menu"
            >
              {languages.map((lang) => (
                <button 
                  key={lang.code}
                  className="block w-full text-left px-3 py-1.5 text-sm rounded hover:bg-gray-100"
                  onClick={() => {
                    setLanguage(lang.code);
                    setLanguageMenuOpen(false);
                  }}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            className="md:hidden text-2xl" 
            id="mobile-menu-button" 
            aria-label={t('accessibility.openMenu')}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white shadow-lg absolute w-full left-0 z-50 ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <nav className="container mx-auto px-4 py-3 flex flex-col">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`py-2 font-medium border-b ${location === link.href ? 'text-primary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="py-4 border-b">
            <p className="font-medium mb-2">{t('accessibility.options')}</p>
            <div className="flex items-center gap-2 mb-4">
              <button 
                className="p-1 border font-bold text-xs" 
                aria-label={t('accessibility.decreaseFontSize')}
                onClick={() => setFontSize('small')}
              >
                A-
              </button>
              <button 
                className="p-1 border font-bold text-sm" 
                aria-label={t('accessibility.normalFontSize')}
                onClick={() => setFontSize('medium')}
              >
                A
              </button>
              <button 
                className="p-1 border font-bold text-base" 
                aria-label={t('accessibility.increaseFontSize')}
                onClick={() => setFontSize('large')}
              >
                A+
              </button>
            </div>
            
            <p className="font-medium mb-2">{t('accessibility.colorThemes')}</p>
            <div className="flex items-center gap-2">
              <button 
                className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white" 
                aria-label={t('accessibility.blueTheme')}
                onClick={() => setTheme('color-theme-blue')}
              ></button>
              <button 
                className="w-8 h-8 rounded-full bg-green-500 border-2 border-white" 
                aria-label={t('accessibility.greenTheme')}
                onClick={() => setTheme('color-theme-green')}
              ></button>
              <button 
                className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white" 
                aria-label={t('accessibility.purpleTheme')}
                onClick={() => setTheme('color-theme-purple')}
              ></button>
              <button 
                className="w-8 h-8 rounded-full bg-amber-500 border-2 border-white" 
                aria-label={t('accessibility.orangeTheme')}
                onClick={() => setTheme('color-theme-orange')}
              ></button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
