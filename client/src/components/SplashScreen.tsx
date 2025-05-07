import { useTranslation } from "react-i18next";
import mainLogo from "@/assets/main-logo.png";
import secondaryLogo from "@/assets/logo2.png";

export default function SplashScreen() {
  const { t } = useTranslation();
  
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
      <div className="splash-logo mb-6 flex flex-col items-center">
        <div className="h-32 w-auto mb-4 animate-logo-pulse">
          <img 
            src={mainLogo} 
            alt="JSS Polytechnic for the Differently Abled" 
            className="h-full w-auto object-contain"
          />
        </div>
        <div className="h-16 w-auto">
          <img 
            src={secondaryLogo} 
            alt="Secondary Logo" 
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
      <div className="text-center animate-slide-up mt-6">
        <h1 className="text-3xl font-serif font-bold mb-2">{t('splashScreen.title')}</h1>
        <p className="text-lg">{t('splashScreen.subtitle')}</p>
      </div>
      <div className="mt-8 animate-pulse">
        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
    </div>
  );
}
