import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Send 
} from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();
  
  const quickLinks = [
    { href: "/about", label: t('footer.quickLinks.about') },
    { href: "/courses", label: t('footer.quickLinks.courses') },
    { href: "/admissions", label: t('footer.quickLinks.admissions') },
    { href: "/faculty", label: t('footer.quickLinks.faculty') },
    { href: "/facilities", label: t('footer.quickLinks.facilities') },
    { href: "/events", label: t('footer.quickLinks.events') },
    { href: "/contact", label: t('footer.quickLinks.contact') }
  ];
  
  const resources = [
    { href: "#", label: t('footer.resources.studentPortal') },
    { href: "#", label: t('footer.resources.eLibrary') },
    { href: "#", label: t('footer.resources.academicCalendar') },
    { href: "#", label: t('footer.resources.scholarships') },
    { href: "#", label: t('footer.resources.placementCell') },
    { href: "#", label: t('footer.resources.assistiveTechnologies') },
    { href: "#", label: t('footer.resources.alumniNetwork') }
  ];
  
  const footerPolicies = [
    { href: "#", label: t('footer.policies.privacy') },
    { href: "#", label: t('footer.policies.terms') },
    { href: "#", label: t('footer.policies.accessibility') },
    { href: "#", label: t('footer.policies.siteMap') }
  ];

  return (
    <footer className="bg-[hsl(var(--footer-bg))] text-[hsl(var(--footer-text))] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-full flex items-center justify-center bg-white text-primary text-xl font-bold">
                JSS
              </div>
              <div>
                <h2 className="text-lg font-bold font-serif">{t('footer.title')}</h2>
                <p className="text-xs text-white/60">{t('footer.subtitle')}</p>
              </div>
            </div>
            
            <p className="text-white/70 mb-6">{t('footer.description')}</p>
            
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.quickLinksHeading')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.resourcesHeading')}</h3>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">{t('footer.subscribeHeading')}</h3>
            <p className="text-white/70 mb-4">{t('footer.subscribeText')}</p>
            <form className="mb-6">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder={t('footer.emailPlaceholder')} 
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-neutral-dark"
                  aria-label={t('footer.emailPlaceholder')}
                />
                <button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90 px-4 rounded-r-md text-primary-foreground"
                  aria-label={t('footer.subscribe')}
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
            
            <div>
              <h3 className="text-lg font-bold mb-3">{t('footer.accreditationsHeading')}</h3>
              <div className="flex gap-4">
                <div className="h-10 w-20 bg-white/20 rounded flex items-center justify-center text-xs">AICTE</div>
                <div className="h-10 w-20 bg-white/20 rounded flex items-center justify-center text-xs">ISO 9001</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              {footerPolicies.map((policy, index) => (
                <a key={index} href={policy.href} className="text-white/60 hover:text-white transition-colors">
                  {policy.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
