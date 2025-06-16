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
                  Empowering Differently Abled persons with the state-of-art professional skills, enhancing morality and mental ability for better living.
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
            <h2 className="text-3xl font-serif font-bold mb-6 text-[#A52A2A]">MISSION of the Institution</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mr-4">
                M1
              </div>
              <div>
                <p className="text-lg font-semibold text-black">
                  Creating a barrier free environment for differently abled to emerge as competent technical professionals
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mr-4">
                M2
              </div>
              <div>
                <p className="text-lg font-semibold text-black">
                  Inculcating values to address the social needs and achieve equitable, sustainable livelihood
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mr-4">
                M3
              </div>
              <div>
                <p className="text-lg font-semibold text-black">
                  Providing value-added life skills and knowledge in addition to the regular academic input to make them employment-ready
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mr-4">
                M4
              </div>
              <div>
                <p className="text-lg font-semibold text-black">
                  Instilling the spirit of socialization, equity, ethics and social responsibility
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#A52A2A]">Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our fundamental principles that guide every aspect of our educational mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Accessibility className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Inclusivity</h3>
              <p className="text-muted-foreground">Creating an environment where every student feels valued, supported, and empowered to achieve their full potential.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Monitor className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-muted-foreground">Embracing cutting-edge technology and adaptive learning methods to enhance educational outcomes.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <HeartHandshake className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Empowerment</h3>
              <p className="text-muted-foreground">Providing students with the skills, confidence, and support systems needed for professional and personal success.</p>
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