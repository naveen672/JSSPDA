import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Home, Info, BookOpen, Users, Mail, ExternalLink } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useFontSize } from "@/hooks/useFontSize";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslation } from "react-i18next";
import mainLogo from "@/assets/main-logo.png";
import logo2 from "@/assets/logo2.png";

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
    { href: "/", label: t('navigation.home'), icon: <Home className="w-4 h-4" /> },
    { href: "/about", label: t('navigation.about'), icon: <Info className="w-4 h-4" /> },
    { href: "/courses", label: t('navigation.courses'), icon: <BookOpen className="w-4 h-4" /> },
    { href: "/faculty", label: t('navigation.faculty'), icon: <Users className="w-4 h-4" /> },
    { href: "/contact", label: t('navigation.contact'), icon: <Mail className="w-4 h-4" /> }
  ];

  // Type-safe language codes matching the type in useLanguage.ts
  const languages: { code: 'en' | 'hi' | 'kn' | 'ta', label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिंदी' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'ta', label: 'தமிழ்' }
  ];

  return (
    <header className="sticky top-0 z-50" onClick={handleClickOutside}>
      {/* Top header with logos and title */}
      <div className="bg-[hsl(var(--header-bg))] shadow-sm py-3 px-4">
        <div className="container mx-auto">
          {/* Main header content */}
          <div className="flex items-center justify-between">
            {/* Left logo */}
            <div className="flex-shrink-0">
              <img
                src={logo2}
                alt="JSS Polytechnic for the Differently Abled Logo"
                className="h-20 w-auto"
              />
            </div>
            
            {/* Center title */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-sm md:text-base text-primary font-semibold">JSS Mahavidyapeetha</h3>
              <h2 className="text-xs md:text-sm hidden md:block text-gray-700 mb-1">ಜೆ ಎಸ್ ಎಸ್ ವಿಶೇಷ ಚೇತನರ ಪಾಲಿಟೆಕ್ನಿಕ್, ಮೈಸೂರು</h2>
              <h1 className="text-lg md:text-2xl font-bold text-[#1e3a8a]">
                JSS Polytechnic for the Differently Abled, Mysuru
              </h1>
              <p className="text-xs md:text-sm text-gray-600 hidden md:block">
                (An Autonomous institution aided by the Government of Karnataka and Approved by AICTE)
              </p>
            </div>
            
            {/* Right logo */}
            <div className="flex-shrink-0">
              <img
                src={mainLogo}
                alt="JSS Polytechnic Main Logo"
                className="h-20 w-auto"
              />
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden ml-4 text-2xl absolute top-4 right-4" 
              id="mobile-menu-button" 
              aria-label={t('accessibility.openMenu')}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation bar */}
      <div className="bg-[#1e3a8a] text-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Main navigation */}
            <nav className="hidden md:flex items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`px-4 py-3 font-medium flex items-center gap-1.5 hover:bg-blue-700 transition-colors ${location === link.href ? 'bg-blue-700' : ''}`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </nav>
            
            {/* Right side - Accessibility and Language */}
            <div className="hidden md:flex items-center">
              {/* Accessibility controls */}
              <div className="flex items-center mr-4">
                <div className="flex items-center border border-blue-400 rounded-full overflow-hidden p-1 bg-white/10">
                  <button 
                    className="p-1 text-xs rounded-full hover:bg-white/20 focus:bg-white/20" 
                    aria-label={t('accessibility.decreaseFontSize')}
                    onClick={() => setFontSize('small')}
                  >
                    A-
                  </button>
                  <button 
                    className="p-1 text-sm rounded-full hover:bg-white/20 focus:bg-white/20" 
                    aria-label={t('accessibility.normalFontSize')}
                    onClick={() => setFontSize('medium')}
                  >
                    A
                  </button>
                  <button 
                    className="p-1 text-base rounded-full hover:bg-white/20 focus:bg-white/20" 
                    aria-label={t('accessibility.increaseFontSize')}
                    onClick={() => setFontSize('large')}
                  >
                    A+
                  </button>
                </div>
              </div>
              
              {/* Color themes */}
              <div className="flex items-center gap-1 mr-4">
                <button 
                  className={`w-6 h-6 rounded-full bg-blue-500 border-2 ${theme === 'color-theme-blue' ? 'border-white' : 'border-transparent'} focus:ring-2`} 
                  aria-label={t('accessibility.blueTheme')}
                  onClick={() => setTheme('color-theme-blue')}
                ></button>
                <button 
                  className={`w-6 h-6 rounded-full bg-green-500 border-2 ${theme === 'color-theme-green' ? 'border-white' : 'border-transparent'} focus:ring-2`} 
                  aria-label={t('accessibility.greenTheme')}
                  onClick={() => setTheme('color-theme-green')}
                ></button>
                <button 
                  className={`w-6 h-6 rounded-full bg-purple-500 border-2 ${theme === 'color-theme-purple' ? 'border-white' : 'border-transparent'} focus:ring-2`} 
                  aria-label={t('accessibility.purpleTheme')}
                  onClick={() => setTheme('color-theme-purple')}
                ></button>
                <button 
                  className={`w-6 h-6 rounded-full bg-amber-500 border-2 ${theme === 'color-theme-orange' ? 'border-white' : 'border-transparent'} focus:ring-2`} 
                  aria-label={t('accessibility.orangeTheme')}
                  onClick={() => setTheme('color-theme-orange')}
                ></button>
              </div>
              
              {/* Language Selector */}
              <div className="relative" id="language-selector">
                <button 
                  className="flex items-center gap-1 bg-white/10 border border-blue-400 rounded-md px-3 py-1.5 text-sm hover:bg-white/20" 
                  id="language-button"
                  onClick={toggleLanguageMenu}
                >
                  <span>{languages.find(lang => lang.code === language)?.label || 'English'}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                <div 
                  className={`absolute right-0 mt-1 bg-white text-gray-800 shadow-lg rounded-md py-2 px-1 w-32 z-50 ${languageMenuOpen ? 'block' : 'hidden'}`} 
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
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-[hsl(var(--header-bg))] shadow-lg absolute w-full left-0 z-50 ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <nav className="container mx-auto px-4 py-3 flex flex-col">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`py-2 font-medium border-b flex items-center gap-2 ${location === link.href ? 'text-primary' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.icon}
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
