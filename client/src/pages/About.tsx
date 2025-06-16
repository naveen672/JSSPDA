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
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">{t('about.title', 'Vision, Mission & Core Values')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering lives through quality education and innovative support systems
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Vision */}
      <section id="vision-mission" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">{t('about.vision.title', 'VISION of the Institution')}</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg mb-4 font-semibold text-black">
                  {t('about.vision.description', 'Empowering Differently Abled persons with the state-of-art professional skills, enhancing morality and mental ability for better living.')}
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Vision - Empowering Differently Abled persons" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-6 text-primary">{t('about.mission.title', 'MISSION of the Institution')}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mr-4">
                M1
              </div>
              <div>
                <p className="text-lg font-semibold text-black">
                  {t('about.mission.m1', 'Imparting knowledge to the differently abled students with accessible learning environment')}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mr-4">
                M2
              </div>
              <div>
                <p className="text-lg font-semibold text-black">
                  {t('about.mission.m2', 'Facilitating appropriate co-curricular, extracurricular and extension activities')}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mr-4">
                M3
              </div>
              <div>
                <p className="text-lg font-semibold text-black">
                  {t('about.mission.m3', 'Providing value-added life skills and knowledge in addition to the regular academic input to make them employment-ready')}
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mr-4">
                M4
              </div>
              <div>
                <p className="text-lg font-semibold text-black">
                  {t('about.mission.m4', 'Instilling the spirit of socialization, equity, ethics and social responsibility')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">{t('about.coreValues.title', 'CORE VALUES')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('about.coreValues.subtitle', 'Our fundamental principles that guide every aspect of our educational mission')}
            </p>
          </div>
          
          <div className="space-y-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-lg text-gray-700">
                {t('about.coreValues.value1', 'Transforming minds of the differently abled students with positive attitude and bring them into the main stream of society.')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <p className="text-lg text-gray-700">
                {t('about.coreValues.value2', 'Providing high quality technical education on par with the other diploma level institutions.')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-lg text-gray-700">
                {t('about.coreValues.value3', 'Creating accessible environment for improvement of teaching-learning process.')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <p className="text-lg text-gray-700">
                {t('about.coreValues.value4', 'Encouraging students to participate in beyond-the-curriculum activities for facing the society with confidence.')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-lg text-gray-700">
                {t('about.coreValues.value5', 'Bridging-the-Gap between the education and employment needs among the differently abled students.')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <p className="text-lg text-gray-700">
                {t('about.coreValues.value6', 'Become the Center of Excellence in technical education exclusively for the differently abled.')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-lg text-gray-700">
                {t('about.coreValues.value7', 'Expansion of facilities to accommodate more number of differently abled students through addition of new need based programmes.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#A52A2A]">Educational Philosophy</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At JSS Polytechnic for the Differently Abled, we believe that every individual possesses unique talents and capabilities. Our educational philosophy centers on recognizing, nurturing, and developing these inherent abilities while providing comprehensive support systems that enable our students to overcome challenges and achieve excellence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We are committed to creating an inclusive learning environment that not only imparts technical knowledge but also builds character, instills values, and prepares our students to be contributing members of society. Through innovative teaching methodologies, personalized attention, and state-of-the-art facilities, we ensure that our graduates are well-equipped to meet the demands of the modern workplace.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach goes beyond traditional education by incorporating life skills training, career guidance, and continuous mentorship, ensuring that each student receives holistic development and achieves their full potential in both professional and personal spheres.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}