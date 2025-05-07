import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { 
  School, 
  Settings, 
  Users, 
  Heart, 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from "lucide-react";
import instituteFrontImage from "@/assets/pda-front.jpg";

export default function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-neutral-light">
        {/* Title and subtitle */}
        <div className="bg-gradient-to-b from-[#1e3a8a]/10 to-[#1e3a8a]/5 py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1e3a8a] mb-4">
                {t('home.hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link href="/courses" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium">
                  {t('home.hero.exploreCourses')}
                </Link>
                <Link href="/about" className="bg-white hover:bg-gray-100 text-primary border border-primary px-6 py-3 rounded-md font-medium">
                  {t('home.hero.aboutUs')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Hero Image - Institution Front */}
        <div className="flex flex-col items-center">
          <img 
            src={instituteFrontImage} 
            alt="JSS Polytechnic for the Differently Abled Front Entrance" 
            className="w-full h-auto object-cover max-h-[400px]"
          />
        </div>
      </section>

      {/* Announcements */}
      <section className="bg-primary/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 11 18-5v12L3 13v-2z"/>
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
              </svg>
            </div>
            <div className="overflow-hidden relative w-full">
              <div className="flex gap-4 whitespace-nowrap">
                <p className="text-sm md:text-base font-medium">
                  {t('home.announcements.admissions')}
                </p>
                <span className="mx-4">•</span>
                <p className="text-sm md:text-base font-medium">
                  {t('home.announcements.computerLab')}
                </p>
                <span className="mx-4">•</span>
                <p className="text-sm md:text-base font-medium">
                  {t('home.announcements.careerFair')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {t('home.about.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('home.about.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <School className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('home.about.features.education.title')}</h3>
              <p className="text-muted-foreground">{t('home.about.features.education.description')}</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Settings className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('home.about.features.campus.title')}</h3>
              <p className="text-muted-foreground">{t('home.about.features.campus.description')}</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('home.about.features.faculty.title')}</h3>
              <p className="text-muted-foreground">{t('home.about.features.faculty.description')}</p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t('home.about.features.career.title')}</h3>
              <p className="text-muted-foreground">{t('home.about.features.career.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t('home.courses.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">{t('home.courses.subtitle')}</p>
            </div>
            <Link href="/courses" className="mt-4 md:mt-0 text-primary font-medium flex items-center gap-1 hover:underline">
              {t('home.courses.viewAll')} 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src="https://images.unsplash.com/photo-1581092787765-e3feb951d987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80" 
                   alt={t('home.courses.computerScience.imageAlt')} 
                   className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{t('home.courses.computerScience.title')}</h3>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{t('home.courses.duration')}</span>
                </div>
                <p className="text-muted-foreground mb-4">{t('home.courses.computerScience.description')}</p>
                <Link href="/courses/computer-science" className="text-primary font-medium hover:underline flex items-center gap-1">
                  {t('home.courses.learnMore')} 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Course 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80" 
                   alt={t('home.courses.mechanical.imageAlt')} 
                   className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{t('home.courses.mechanical.title')}</h3>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{t('home.courses.duration')}</span>
                </div>
                <p className="text-muted-foreground mb-4">{t('home.courses.mechanical.description')}</p>
                <Link href="/courses/mechanical" className="text-primary font-medium hover:underline flex items-center gap-1">
                  {t('home.courses.learnMore')} 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Course 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80" 
                   alt={t('home.courses.electronics.imageAlt')} 
                   className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{t('home.courses.electronics.title')}</h3>
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{t('home.courses.duration')}</span>
                </div>
                <p className="text-muted-foreground mb-4">{t('home.courses.electronics.description')}</p>
                <Link href="/courses/electronics" className="text-primary font-medium hover:underline flex items-center gap-1">
                  {t('home.courses.learnMore')} 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t('home.cta.title')}</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">{t('home.cta.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/admissions" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium">
              {t('home.cta.applyNow')}
            </Link>
            <Link href="/contact" className="bg-transparent hover:bg-white/10 border-2 border-white px-8 py-3 rounded-md font-medium">
              {t('home.cta.scheduleVisit')}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t('home.contact.title')}</h2>
              <p className="text-lg text-muted-foreground mb-8">{t('home.contact.subtitle')}</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('home.contact.location.title')}</h3>
                    <p className="text-muted-foreground">{t('home.contact.location.address')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('home.contact.phone.title')}</h3>
                    <p className="text-muted-foreground">{t('home.contact.phone.number1')}</p>
                    <p className="text-muted-foreground">{t('home.contact.phone.number2')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('home.contact.email.title')}</h3>
                    <p className="text-muted-foreground">{t('home.contact.email.address1')}</p>
                    <p className="text-muted-foreground">{t('home.contact.email.address2')}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('home.contact.hours.title')}</h3>
                    <p className="text-muted-foreground">{t('home.contact.hours.weekdays')}</p>
                    <p className="text-muted-foreground">{t('home.contact.hours.saturday')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">{t('home.contact.form.title')}</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">{t('home.contact.form.name')}</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">{t('home.contact.form.email')}</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">{t('home.contact.form.subject')}</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" 
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">{t('home.contact.form.message')}</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium"
                  >
                    {t('home.contact.form.send')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
