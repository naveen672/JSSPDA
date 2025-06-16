import { useTranslation } from "react-i18next";
import { Mail, Phone, Link as LinkIcon } from "lucide-react";

export default function Faculty() {
  const { t } = useTranslation();
  
  const departments = [
    'computerScience',
    'mechanical',
    'electronics',
    'generalScience'
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">{t('faculty.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('faculty.subtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Faculty Leadership */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-primary">{t('faculty.leadership.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* HOD Computer Science */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" 
                alt={t('faculty.leadership.computerScience.name')} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t('faculty.leadership.computerScience.name')}</h3>
                <p className="text-primary mb-4">{t('faculty.leadership.computerScience.position')}</p>
                <p className="text-muted-foreground mb-4">{t('faculty.leadership.computerScience.bio')}</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{t('faculty.leadership.computerScience.email')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{t('faculty.leadership.computerScience.phone')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* HOD Mechanical */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" 
                alt={t('faculty.leadership.mechanical.name')} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t('faculty.leadership.mechanical.name')}</h3>
                <p className="text-primary mb-4">{t('faculty.leadership.mechanical.position')}</p>
                <p className="text-muted-foreground mb-4">{t('faculty.leadership.mechanical.bio')}</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{t('faculty.leadership.mechanical.email')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{t('faculty.leadership.mechanical.phone')}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* HOD Electronics */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80" 
                alt={t('faculty.leadership.electronics.name')} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{t('faculty.leadership.electronics.name')}</h3>
                <p className="text-primary mb-4">{t('faculty.leadership.electronics.position')}</p>
                <p className="text-muted-foreground mb-4">{t('faculty.leadership.electronics.bio')}</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{t('faculty.leadership.electronics.email')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{t('faculty.leadership.electronics.phone')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Faculty by Department */}
      {departments.map((department) => (
        <section key={department} className={`py-16 ${department !== departments[0] ? 'bg-neutral-light' : ''}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">{t(`faculty.departments.${department}.title`)}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <img 
                        src={`https://images.unsplash.com/photo-${1500000000000 + (department.length * 100) + index * 111}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80`} 
                        alt={t(`faculty.departments.${department}.members.${index}.name`)} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{t(`faculty.departments.${department}.members.${index}.name`)}</h3>
                    <p className="text-primary text-sm mb-2">{t(`faculty.departments.${department}.members.${index}.position`)}</p>
                    <p className="text-muted-foreground text-sm mb-4">{t(`faculty.departments.${department}.members.${index}.qualification`)}</p>
                    <div className="flex justify-center gap-4">
                      <a href={`mailto:${t(`faculty.departments.${department}.members.${index}.email`)}`} aria-label="Email" className="text-primary hover:text-primary/80">
                        <Mail className="h-5 w-5" />
                      </a>
                      <a href={t(`faculty.departments.${department}.members.${index}.profileUrl`)} target="_blank" rel="noopener noreferrer" aria-label="Profile" className="text-primary hover:text-primary/80">
                        <LinkIcon className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* Join Us CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{t('faculty.joinUs.title')}</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10">{t('faculty.joinUs.description')}</p>
          <a 
            href="mailto:careers@jsspolytechnic.edu.in" 
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium inline-block"
          >
            {t('faculty.joinUs.contactUs')}
          </a>
        </div>
      </section>
    </>
  );
}
