import { useTranslation } from "react-i18next";
import { 
  Accessibility, 
  Monitor, 
  HeartHandshake 
} from "lucide-react";

export default function About() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('about.subtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Our Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">{t('about.mission.title')}</h2>
              <p className="text-lg mb-6 text-muted-foreground">{t('about.mission.description1')}</p>
              <p className="text-lg text-muted-foreground">{t('about.mission.description2')}</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt={t('about.mission.imageAlt')} 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-1 md:order-0">
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt={t('about.vision.imageAlt')} 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">{t('about.vision.title')}</h2>
              <p className="text-lg mb-6 text-muted-foreground">{t('about.vision.description1')}</p>
              <p className="text-lg text-muted-foreground">{t('about.vision.description2')}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* History & Timeline */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t('about.history.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('about.history.subtitle')}</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {/* 1995 */}
              <div className="relative flex flex-col md:grid md:grid-cols-2 gap-8">
                <div className="md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-xl font-bold text-primary block mb-2">1995</span>
                    <h3 className="text-xl font-bold mb-3">{t('about.history.timeline.founding.title')}</h3>
                    <p className="text-muted-foreground">{t('about.history.timeline.founding.description')}</p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start">
                  <div className="w-4 h-4 rounded-full bg-primary mt-5 -ml-2"></div>
                </div>
              </div>
              
              {/* 2005 */}
              <div className="relative flex flex-col md:grid md:grid-cols-2 gap-8">
                <div className="hidden md:flex justify-end">
                  <div className="w-4 h-4 rounded-full bg-primary mt-5 -mr-2"></div>
                </div>
                <div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-xl font-bold text-primary block mb-2">2005</span>
                    <h3 className="text-xl font-bold mb-3">{t('about.history.timeline.expansion.title')}</h3>
                    <p className="text-muted-foreground">{t('about.history.timeline.expansion.description')}</p>
                  </div>
                </div>
              </div>
              
              {/* 2015 */}
              <div className="relative flex flex-col md:grid md:grid-cols-2 gap-8">
                <div className="md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-xl font-bold text-primary block mb-2">2015</span>
                    <h3 className="text-xl font-bold mb-3">{t('about.history.timeline.recognition.title')}</h3>
                    <p className="text-muted-foreground">{t('about.history.timeline.recognition.description')}</p>
                  </div>
                </div>
                <div className="hidden md:flex justify-start">
                  <div className="w-4 h-4 rounded-full bg-primary mt-5 -ml-2"></div>
                </div>
              </div>
              
              {/* 2023 */}
              <div className="relative flex flex-col md:grid md:grid-cols-2 gap-8">
                <div className="hidden md:flex justify-end">
                  <div className="w-4 h-4 rounded-full bg-primary mt-5 -mr-2"></div>
                </div>
                <div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-xl font-bold text-primary block mb-2">2023</span>
                    <h3 className="text-xl font-bold mb-3">{t('about.history.timeline.today.title')}</h3>
                    <p className="text-muted-foreground">{t('about.history.timeline.today.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Campus Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t('about.campus.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('about.campus.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Accessibility className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('about.campus.features.accessibility.title')}</h3>
              <p className="text-muted-foreground">{t('about.campus.features.accessibility.description')}</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Monitor className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('about.campus.features.technology.title')}</h3>
              <p className="text-muted-foreground">{t('about.campus.features.technology.description')}</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <HeartHandshake className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('about.campus.features.support.title')}</h3>
              <p className="text-muted-foreground">{t('about.campus.features.support.description')}</p>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80" 
              alt={t('about.campus.gallery.building')} 
              className="rounded-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80" 
              alt={t('about.campus.gallery.technology')} 
              className="rounded-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80" 
              alt={t('about.campus.gallery.classroom')} 
              className="rounded-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80" 
              alt={t('about.campus.gallery.support')} 
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Leadership & Management */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t('about.leadership.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('about.leadership.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Director */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" 
                alt={t('about.leadership.members.director.name')} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t('about.leadership.members.director.name')}</h3>
                <p className="text-primary mb-4">{t('about.leadership.members.director.position')}</p>
                <p className="text-muted-foreground">{t('about.leadership.members.director.bio')}</p>
              </div>
            </div>
            
            {/* Principal */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" 
                alt={t('about.leadership.members.principal.name')} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t('about.leadership.members.principal.name')}</h3>
                <p className="text-primary mb-4">{t('about.leadership.members.principal.position')}</p>
                <p className="text-muted-foreground">{t('about.leadership.members.principal.bio')}</p>
              </div>
            </div>
            
            {/* Dean */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" 
                alt={t('about.leadership.members.dean.name')} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t('about.leadership.members.dean.name')}</h3>
                <p className="text-primary mb-4">{t('about.leadership.members.dean.position')}</p>
                <p className="text-muted-foreground">{t('about.leadership.members.dean.bio')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
