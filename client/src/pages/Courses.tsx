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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">{t('courses.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t('courses.subtitle')}</p>
          </div>
        </div>
      </section>
      
      {/* JSS PDA Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">{t('courses.diploma.title', 'Diploma Courses')}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('courses.diploma.description', 'The following courses are offered as approved by the Govt. of Karnataka and AICTE, New Delhi.')}
            </p>
            
            {/* Course Table */}
            <div className="overflow-x-auto bg-white rounded-xl shadow-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-primary text-primary-foreground">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">{t('courses.table.headers.course', 'Course')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">{t('courses.table.headers.intake', 'Intake')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">{t('courses.table.headers.duration', 'Duration')}</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">{t('courses.table.headers.details', 'Details')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Architecture Assistantship (AR)</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">60</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">3 Years</td>
                    <td className="px-6 py-4 text-sm text-center">
                      <Link href="/courses/architecture" className="text-primary hover:underline">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Commercial Practice (CP)</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">60</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">3 Years</td>
                    <td className="px-6 py-4 text-sm text-center">
                      <Link href="/courses/commercial-practice" className="text-primary hover:underline">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Computer Science and Engineering (CS)</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">60</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">3 Years</td>
                    <td className="px-6 py-4 text-sm text-center">
                      <Link href="/courses/computer-science" className="text-primary hover:underline">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <strong>Jewellery Design and Technology (JD)</strong>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">30</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">3 Years</td>
                    <td className="px-6 py-4 text-sm text-center">
                      <Link href="/courses/jewellery-design" className="text-primary hover:underline">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Electronics and Communication Engineering (EC)</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">60</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">3 Years</td>
                    <td className="px-6 py-4 text-sm text-center">
                      <Link href="/courses/electronics" className="text-primary hover:underline">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Computer Applications (CA)</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">30</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">3 Years</td>
                    <td className="px-6 py-4 text-sm text-center">
                      <Link href="/courses/computer-applications" className="text-primary hover:underline">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Apparel Design and Fabrication Technology (FT)</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">30</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">3 Years</td>
                    <td className="px-6 py-4 text-sm text-center">
                      <Link href="/courses/apparel-design" className="text-primary hover:underline">View Details</Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <strong>Electrical Engineering and Electric Vehicle Technology (EV)</strong>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">60</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">3 Years</td>
                    <td className="px-6 py-4 text-sm text-center">
                      <Link href="/courses/electric-vehicle" className="text-primary hover:underline">View Details</Link>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-bold text-center text-gray-900">TOTAL</td>
                    <td className="px-6 py-4 text-sm font-bold text-center text-gray-900">390</td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center"></td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Course Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Computer Science Related */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 bg-primary/10 flex items-center justify-center">
                <Monitor className="h-14 w-14 text-primary" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">IT Courses</h3>
                <p className="text-sm text-muted-foreground mb-4">Computer Science, Applications & IT related diploma programs</p>
                <Link href="/courses/computer-science" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                  View Details 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Electronics Related */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 bg-primary/10 flex items-center justify-center">
                <Cpu className="h-14 w-14 text-primary" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Electronics & Electrical</h3>
                <p className="text-sm text-muted-foreground mb-4">EC, EV Technology and related engineering diplomas</p>
                <Link href="/courses/electronics" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                  View Details 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Commercial & Design */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 bg-primary/10 flex items-center justify-center">
                <PenTool className="h-14 w-14 text-primary" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Design & Commercial</h3>
                <p className="text-sm text-muted-foreground mb-4">Architecture, Jewellery Design, Apparel Design courses</p>
                <Link href="/courses/design" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                  View Details 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Autonomous Status */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-32 bg-primary/10 flex items-center justify-center">
                <FileSymlink className="h-14 w-14 text-primary" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">Autonomous Status</h3>
                <p className="text-sm text-muted-foreground mb-4">JSSPDA has been granted autonomous status since 1999-2000</p>
                <Link href="/about" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
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
