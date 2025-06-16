import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";
import principalImage from "@assets/image_1750101332054.png";

export default function Messages() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">{t('messages.title', 'Messages')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('messages.subtitle', 'Messages from our leadership and administration')}
            </p>
          </div>
        </div>
      </section>
      
      {/* Principal's Message */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">{t('messages.principal.title', 'MESSAGE FROM PRINCIPAL')}</h2>
            </div>
            
            {/* Principal Profile Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="md:flex">
                {/* Principal Image */}
                <div className="md:w-1/3 p-8 flex justify-center items-start">
                  <div className="text-center">
                    <img 
                      src={principalImage} 
                      alt="Sri. Elangovan B - Principal" 
                      className="w-48 h-64 object-cover rounded-lg shadow-md mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sri. Elangovan B</h3>
                    <p className="text-primary font-semibold mb-4">
                      {t('messages.principal.designation', 'Principal, JSS Polytechnic for the Differently Abled (JSSPDA)')}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      JSS Technical Institutions' Campus<br />
                      Mysuru-570006
                    </p>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="md:w-2/3 p-8">
                  <h4 className="text-xl font-bold mb-6 text-primary">{t('messages.principal.profile', 'PROFILE')}</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <a href="mailto:jsspda@gmail.com" className="text-blue-600 hover:underline block">jsspda@gmail.com</a>
                        <a href="mailto:elango1.india@gmail.com" className="text-blue-600 hover:underline block">elango1.india@gmail.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">+91-9686677236</p>
                        <p className="text-gray-700">0821-2548315, 2548316</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <p className="text-gray-700">JSS Technical Institutions' Campus, Mysuru-570006</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Principal's Message Content */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('messages.principal.message.para1', 'In India, a person born with any kind of disability was believed to be a sin in the society. For decades, opportunities in education, employment and other living status was denied for the differently abled even though efforts are being made to rehabilitate them by the Government and other socially responsible organizations both in terms of education and employment.')}
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('messages.principal.message.para2', 'Recent years this trend has changed drastically and many organizations and institutions are inclined towards providing opportunities for the persons with special needs.')}
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('messages.principal.message.para3', 'In this direction, JSS Polytechnic for the Differently Abled, Mysuru was established by JSS Mahavidyapeetha in the year 1991-92 under the World Bank Assistance Scheme of the Government of Karnataka.')}
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  {t('messages.principal.message.para4', 'It was a unique concept conceived and became reality by providing educational and employment opportunities for the persons with disabilities.')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}