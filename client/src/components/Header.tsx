import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { 
  Menu, 
  X, 
  Home, 
  GraduationCap, 
  BookOpen, 
  Building2, 
  Users, 
  Mail, 
  ExternalLink, 
  School,
  LifeBuoy,
  Briefcase,
  Medal,
  MoreHorizontal,
  ChevronDown,
  Info
} from "lucide-react";
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
    // Close any open dropdowns when toggling mobile menu
    setOpenDropdown(null);
    // Also clear any mobile dropdowns
    setMobileDropdowns({});
  };
  
  // This special function just for mobile dropdowns
  const handleMobileDropdownToggle = (id: string) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // This function is specifically for mobile dropdowns
  const toggleMobileDropdown = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Toggling dropdown:', id, 'Current open:', openDropdown);
    if (id === openDropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
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

  // Track which dropdown is currently open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // For mobile dropdowns, we'll track them separately with individual boolean states
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  
  // Close dropdowns when clicking outside
  const navRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown menu
  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  
  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  // Main navigation structure
  const navLinks = [
    { 
      href: "#", 
      label: "Home", 
      icon: <Home className="w-4 h-4" />,
      hasDropdown: true,
      id: "home-dropdown",
      dropdown: [
        { href: "/", label: "Home Page" },
        { href: "/about-jssmvp", label: "About JSSMVP" },
        { href: "/about-jsspda", label: "About JSSPDA" },
        { href: "/about", label: "Vision, Mission and Core Values" },
        { href: "/messages", label: "Messages" },
        { href: "/governance", label: "Governance" },
        { href: "/administration", label: "Administration" },
        { href: "/green-initiatives", label: "JSSPDA Green Initiatives" },
        { href: "/employee-benefits", label: "Employee Benefits" },
        { href: "/contact", label: "Contact us" },
      ]
    },
    { 
      href: "/admission", 
      label: "Admission", 
      icon: <GraduationCap className="w-4 h-4" />,
      hasDropdown: false,
      id: "admission-dropdown"
    },
    { 
      href: "#", 
      label: "Academics", 
      icon: <BookOpen className="w-4 h-4" />,
      hasDropdown: true,
      id: "academics-dropdown",
      dropdown: [
        { href: "/departments/ar", label: "Dept. of AR" },
        { href: "/departments/cp", label: "Dept. of CP" },
        { href: "/departments/cse", label: "Dept. of CSE" },
        { href: "/departments/jd", label: "Dept. of JD" },
        { href: "/departments/ec", label: "Dept. of EC" },
        { href: "/departments/ca", label: "Dept. of CA" },
        { href: "/departments/evt", label: "Dept. of EVT" },
        { href: "/calendar", label: "Calendar of Events" },
        { href: "/professional-bodies", label: "Professional Bodies" },
        { href: "/collaborations", label: "JSSPDA Collaborations and MOU's" }
      ]
    },
    { 
      href: "#", 
      label: "Facilities", 
      icon: <Building2 className="w-4 h-4" />,
      hasDropdown: true,
      id: "facilities-dropdown",
      dropdown: [
        { href: "/campus", label: "PDA Campus" },
        { href: "/library", label: "Library and Information" },
        { href: "/sports", label: "Sports" },
        { href: "/cafeteria", label: "Cafeteria" },
        { href: "/hostel", label: "Hostel" }
      ]
    },
    { 
      href: "#", 
      label: "Student Support", 
      icon: <LifeBuoy className="w-4 h-4" />,
      hasDropdown: true,
      id: "student-support-dropdown",
      dropdown: [
        { href: "/exam", label: "Exam" },
        { href: "/scholarships", label: "Scholarships" },
        { href: "/sponsorships", label: "Sponsorships" },
        { href: "/counselling", label: "Counselling" },
        { href: "/mentoring", label: "Mentoring Scheme" },
        { href: "/sign-language", label: "Sign Language Support" },
        { href: "/nss", label: "NSS" },
        { href: "/red-cross", label: "Red Cross" },
        { href: "/cultural", label: "Cultural Crew" },
        { href: "/iipc", label: "IIPC" },
        { href: "/health", label: "Health Centre" },
        { href: "/bank", label: "Bank" },
        { href: "/datthi-awards", label: "Datthi Awards" },
        { href: "/insurance", label: "Accidental Insurance Scheme" }
      ]
    },
    { 
      href: "#", 
      label: "Training & Placement", 
      icon: <Briefcase className="w-4 h-4" />,
      hasDropdown: true,
      id: "training-dropdown",
      dropdown: [
        { href: "/placement", label: "Placement" },
        { href: "/training", label: "Training" },
        { href: "/internship", label: "Internship" }
      ]
    },
    { 
      href: "/iqac", 
      label: "IQAC", 
      icon: <Medal className="w-4 h-4" />,
      hasDropdown: false
    },
    { 
      href: "#", 
      label: "More", 
      icon: <MoreHorizontal className="w-4 h-4" />,
      hasDropdown: true,
      id: "more-dropdown",
      dropdown: [
        { href: "/alumni", label: "Alumni" },
        { href: "/grievance", label: "Online Grievance Support" },
        { href: "/gallery", label: "Photo Gallery" },
        { href: "/media", label: "Media" },
        { href: "/achievements", label: "Achievements" }
      ]
    }
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
      <div className="bg-[hsl(var(--header-bg))] shadow-sm py-5 px-4">
        <div className="container mx-auto">
          {/* Main header content */}
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              {/* Left logo */}
              <div className="flex-shrink-0 mr-3">
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
              <div className="flex-shrink-0 ml-3">
                <img
                  src={mainLogo}
                  alt="JSS Polytechnic Main Logo"
                  className="h-20 w-auto"
                />
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden ml-4 text-2xl absolute top-6 right-4" 
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
      <div className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Main navigation */}
            <nav className="hidden md:flex items-center" ref={navRef}>
              {navLinks.map((link, index) => (
                <div 
                  key={`nav-item-${index}`} 
                  className="relative group"
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Explicitly check if dropdown is already open and close it
                          if (openDropdown === link.id) {
                            setOpenDropdown(null);
                          } else {
                            setOpenDropdown(link.id || '');
                          }
                        }}
                        className={`px-4 py-3 font-medium flex items-center gap-1.5 hover:bg-primary-hover transition-colors ${openDropdown === link.id ? 'bg-primary-hover' : ''}`}
                      >
                        {link.icon}
                        <span>{link.label}</span>
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      {link.hasDropdown && (
                        <div 
                          className={`absolute top-full left-0 bg-white shadow-lg rounded-md mt-0.5 py-2 min-w-[200px] z-50 ${openDropdown === link.id ? 'block' : 'hidden'}`}
                        >
                          {link.dropdown?.map((item, subIndex) => (
                            <Link 
                              key={`dropdown-item-${subIndex}`} 
                              href={item.href}
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-primary"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={link.href}
                      className={`px-4 py-3 font-medium flex items-center gap-1.5 hover:bg-primary-hover transition-colors ${location === link.href ? 'bg-primary-hover' : ''}`}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  )}
                </div>
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
      <div className={`md:hidden bg-[hsl(var(--header-bg))] shadow-lg fixed top-[106px] w-full left-0 z-50 h-[calc(100vh-106px)] overflow-y-auto ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <nav className="container mx-auto px-4 py-3 flex flex-col">
          {navLinks.map((link, idx) => (
            <div key={`mobile-nav-${idx}`} className="border-b">
              {link.hasDropdown ? (
                <div>
                  <button
                    className={`w-full py-2 font-medium flex items-center justify-between gap-2 ${mobileDropdowns[link.id || ''] ? 'text-primary' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleMobileDropdownToggle(link.id || '');
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {link.icon}
                      <span>{link.label}</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdowns[link.id || ''] ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`pl-8 ${mobileDropdowns[link.id || ''] ? 'block' : 'hidden'}`}>
                    {link.dropdown?.map((item, subIdx) => (
                      <Link
                        key={`mobile-dropdown-${subIdx}`}
                        href={item.href}
                        className="block py-2 text-sm hover:text-primary"
                        onClick={() => {
                          setOpenDropdown(null);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  href={link.href}
                  className={`py-2 font-medium flex items-center gap-2 ${location === link.href ? 'text-primary' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.icon}
                  {link.label}
                </Link>
              )}
            </div>
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
