import { useTranslation } from "react-i18next";

export default function SplashScreen() {
  const { t } = useTranslation();
  
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999]">
      <div className="splash-logo mb-6">
        <div className="h-24 w-24 rounded-full flex items-center justify-center bg-primary text-primary-foreground text-3xl font-bold animate-logo-pulse">
          JSS
        </div>
      </div>
      <div className="text-center animate-slide-up">
        <h1 className="text-3xl font-serif font-bold mb-2">{t('splashScreen.title')}</h1>
        <p className="text-lg">{t('splashScreen.subtitle')}</p>
      </div>
      <div className="mt-8 animate-pulse">
        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
    </div>
  );
}
