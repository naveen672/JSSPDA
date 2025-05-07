import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { 
  Monitor, 
  Cpu, 
  Cog, 
  PenTool, 
  TrendingUp, 
  FileSymlink 
} from "lucide-react";

export default function Courses() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('courses.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('courses.subtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* Course Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Computer Science */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <Monitor className="h-20 w-20 text-primary" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{t('courses.categories.computerScience.title')}</h2>
                <p className="text-muted-foreground mb-6">{t('courses.categories.computerScience.description')}</p>
                <Link href="/courses/computer-science" className="text-primary font-medium flex items-center gap-1 hover:underline">
                  {t('courses.viewCourses')} 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Mechanical Engineering */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <Cog className="h-20 w-20 text-primary" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{t('courses.categories.mechanical.title')}</h2>
                <p className="text-muted-foreground mb-6">{t('courses.categories.mechanical.description')}</p>
                <Link href="/courses/mechanical" className="text-primary font-medium flex items-center gap-1 hover:underline">
                  {t('courses.viewCourses')} 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Electronics & Communication */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <Cpu className="h-20 w-20 text-primary" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{t('courses.categories.electronics.title')}</h2>
                <p className="text-muted-foreground mb-6">{t('courses.categories.electronics.description')}</p>
                <Link href="/courses/electronics" className="text-primary font-medium flex items-center gap-1 hover:underline">
                  {t('courses.viewCourses')} 
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
      
      {/* Featured Courses */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">{t('courses.featured.title')}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Course 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1581092787765-e3feb951d987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" 
                    alt={t('courses.featured.webDevelopment.imageAlt')} 
                    className="h-48 md:h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{t('courses.featured.webDevelopment.title')}</h3>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{t('courses.featured.webDevelopment.duration')}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{t('courses.featured.webDevelopment.description')}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <Monitor className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t('courses.department.computerScience')}</span>
                  </div>
                  <Link href="/courses/web-development" className="text-primary font-medium hover:underline flex items-center gap-1">
                    {t('courses.details')} 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Course 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" 
                    alt={t('courses.featured.cadDesign.imageAlt')} 
                    className="h-48 md:h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{t('courses.featured.cadDesign.title')}</h3>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{t('courses.featured.cadDesign.duration')}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{t('courses.featured.cadDesign.description')}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <PenTool className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t('courses.department.mechanical')}</span>
                  </div>
                  <Link href="/courses/cad-design" className="text-primary font-medium hover:underline flex items-center gap-1">
                    {t('courses.details')} 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Course 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" 
                    alt={t('courses.featured.embeddedSystems.imageAlt')} 
                    className="h-48 md:h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{t('courses.featured.embeddedSystems.title')}</h3>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{t('courses.featured.embeddedSystems.duration')}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{t('courses.featured.embeddedSystems.description')}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <FileSymlink className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t('courses.department.electronics')}</span>
                  </div>
                  <Link href="/courses/embedded-systems" className="text-primary font-medium hover:underline flex items-center gap-1">
                    {t('courses.details')} 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Course 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" 
                    alt={t('courses.featured.dataAnalytics.imageAlt')} 
                    className="h-48 md:h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold">{t('courses.featured.dataAnalytics.title')}</h3>
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{t('courses.featured.dataAnalytics.duration')}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{t('courses.featured.dataAnalytics.description')}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">{t('courses.department.computerScience')}</span>
                  </div>
                  <Link href="/courses/data-analytics" className="text-primary font-medium hover:underline flex items-center gap-1">
                    {t('courses.details')} 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">{t('courses.admission.title')}</h2>
              <p className="text-lg text-muted-foreground">{t('courses.admission.subtitle')}</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('courses.admission.steps.apply.title')}</h3>
                    <p className="text-muted-foreground">{t('courses.admission.steps.apply.description')}</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('courses.admission.steps.documents.title')}</h3>
                    <p className="text-muted-foreground">{t('courses.admission.steps.documents.description')}</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('courses.admission.steps.assessment.title')}</h3>
                    <p className="text-muted-foreground">{t('courses.admission.steps.assessment.description')}</p>
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{t('courses.admission.steps.enrollment.title')}</h3>
                    <p className="text-muted-foreground">{t('courses.admission.steps.enrollment.description')}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Link href="/admissions" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-medium inline-block">
                  {t('courses.admission.applyNow')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
