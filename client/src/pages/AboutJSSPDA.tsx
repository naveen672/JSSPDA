import { useTranslation } from "react-i18next";
import { useAppContext } from "@/contexts/AppContext";
import jsspdaEntrance from "@assets/image_1750098781136.png";
import organizationChart from "@assets/image_1750098860303.png";

export default function AboutJSSPDA() {
  const { t } = useTranslation();
  const { theme, fontSize } = useAppContext();
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">{t('aboutJSSPDA.title', 'About JSS Polytechnic for the Differently Abled')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('aboutJSSPDA.subtitle', 'First of its kind in India - Empowering differently abled students since 1991')}
            </p>
          </div>
        </div>
      </section>
      
      {/* About JSSPDA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <img 
                src={jsspdaEntrance} 
                alt="JSS Polytechnic for the Differently Abled Entrance" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg mb-6"
              />
            </div>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                JSS Polytechnic for the Differently Abled - JSSPDA is the <strong>first Polytechnic of its kind in the country</strong> and <strong>only polytechnic in the state of Karnataka</strong> started in the year <strong>1991-92</strong> to offer Professional Education with the approval of AICTE, New Delhi for Differently Abled at Diploma Level.
              </p>
              
              <p>
                It was started under the World Bank Assistance Scheme of the Government of Karnataka by JSS Mahavidyapeetha. The new Buildings of the Polytechnic were inaugurated by the then <strong>Honorable Prime Minister of India on 3rd January 1999</strong> in the gracious presence of His Holiness Jagadguru Sri Shivarathri Deshikendra Mahaswamigalavaru, the President of JSS Mahavidyapeetha, Mysuru.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-primary">{t('aboutJSSPDA.autonomous.title', 'Autonomous Institution')}</h4>
                <p>
                  JSSPDA has been granted <strong>autonomous status since 1999-2000</strong>. As such the curriculum, scheme of examination, evaluation and award of Diploma are all governed by the rules of autonomy approved by the Department of Collegiate and Technical Education, Government of Karnataka.
                </p>
              </div>
              
              {/* Courses Offered Table */}
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-[#A52A2A]">Courses Offered</h4>
                <p className="mb-4 text-gray-600">The following courses are offered as approved by the Government of Karnataka and AICTE, New Delhi:</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mb-4">
                    <thead>
                      <tr className="bg-[#A52A2A] text-white">
                        <th className="border border-gray-300 px-4 py-3 text-left">Course</th>
                        <th className="border border-gray-300 px-4 py-3 text-center">Intake</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Architecture Assistantship (AR)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">60</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Commercial Practice (CP)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">60</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Computer Science and Engineering (CS)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">60</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Jewellery Design and Technology (JD)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">30</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Electronics and Communication Engineering (EC)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">60</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Computer Applications (CA)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">30</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Apparel Design and Fabrication Technology (FT)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">30</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Electrical Engineering and Electric Vehicle Technology (EV)</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">60</td>
                      </tr>
                      <tr className="bg-[#A52A2A] text-white font-bold">
                        <td className="border border-gray-300 px-4 py-2">TOTAL</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">390</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Government Support & Recognition */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-[#A52A2A]">Government Support & Recognition</h4>
                <p className="mb-4">
                  As per the National Policy of the Government, there is a provision to earmark <strong>3% of the budget for the welfare of differently abled persons</strong>. Further there is also reservation in job placements. Our experience shows that industries/service establishments are keen to help the differently abled who are competent for suitable jobs.
                </p>
                
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <h5 className="font-bold text-gray-800">🏆 National Award (2012)</h5>
                    <p className="text-sm text-gray-600">
                      "Best Institution working for the cause of Persons with Disabilities" by the Ministry of Social Justice and Empowerment, Government of India. The award was presented by His Excellency The President of India.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                    <h5 className="font-bold text-gray-800">🏆 State Award (2016)</h5>
                    <p className="text-sm text-gray-600">
                      The Government of Karnataka honored us with a State Award under the category of "Best Institution working for the cause of Persons with Disabilities".
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Organization Chart */}
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-[#A52A2A]">Organization Chart of JSSPDA</h4>
                <div className="text-center">
                  <img 
                    src={organizationChart} 
                    alt="JSSPDA Organization Chart" 
                    className="w-full max-w-6xl mx-auto rounded-lg shadow-lg border"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}