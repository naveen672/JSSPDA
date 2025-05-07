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
    <header className="sticky top-0 bg-[hsl(var(--header-bg))] shadow-md z-50" onClick={handleClickOutside}>
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        {/* Left side - Logo combination */}
        <div className="flex items-center">
          <Link href="/" className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex items-center gap-3">
              <img
                src={logo2}
                alt="JSS Polytechnic for the Differently Abled Logo"
                className="h-16 w-auto rounded-md shadow-sm"
              />
              <img
                src={mainLogo}
                alt="JSS Polytechnic Main Logo"
                className="h-16 w-auto rounded-md shadow-sm"
              />
            </div>
            <div className="hidden md:block ml-2">
              <h1 className="text-lg font-bold font-serif">{t('header.title')}</h1>
              <p className="text-xs text-muted-foreground">{t('header.subtitle')}</p>
            </div>
          </Link>
        </div>
        
        {/* Middle - Accessibility Panel */}
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
        
        {/* Right side - Navigation and Language */}
        <div className="flex items-center">
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 mr-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-medium flex items-center gap-1.5 ${location === link.href ? 'text-primary' : 'hover:text-primary'}`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Language Selector */}
          <div className="flex items-center">
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
              className="md:hidden ml-4 text-2xl" 
              id="mobile-menu-button" 
              aria-label={t('accessibility.openMenu')}
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-[hsl(var(--header-bg))] shadow-lg absolute w-full left-0 z-50 ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <nav className="container mx-auto px-4 py-3 flex flex-col">
          <div className="flex justify-between items-center mb-4 pb-2 border-b">
            <img
              src={logo2}
              alt="JSS Polytechnic for the Differently Abled Logo"
              className="h-12 w-auto"
            />
            <img
              src={mainLogo}
              alt="JSS Polytechnic Main Logo"
              className="h-12 w-auto"
            />
          </div>
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
