import { useTranslation } from "react-i18next";
import { 
  Accessibility, 
  Monitor, 
  HeartHandshake 
} from "lucide-react";
import presidentImage from "@assets/image_1750098685509.png";
import buildingImage from "@assets/image_1750098690353.png";
import jsspdaEntrance from "@assets/image_1750098781136.png";
import organizationChart from "@assets/image_1750098860303.png";

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
      
      {/* Our Vision */}
      <section id="vision-mission" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-[#A52A2A]">VISION of the Institution</h2>
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
      <section className="py-12 bg-neutral-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center text-[#A52A2A]">MISSION of the Institution</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mr-4">
                M1
              </div>
              <div>
                <p className="text-lg font-semibold text-black">
                  Imparting knowledge to the differently abled students with accessible learning environment
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex items-start">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mr-4">
                M2
              </div>
              <div>
                <p className="text-lg font-semibold text-black">
                  Facilitating appropriate co-curricular, extracurricular and extension activities
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
          
          {/* About JSSPDA Section */}
          <div id="jsspda" className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <img 
                src={jsspdaEntrance} 
                alt="JSS Polytechnic for the Differently Abled Entrance" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-lg mb-6"
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-[#A52A2A]">About JSS Polytechnic for the Differently Abled (JSSPDA)</h3>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                JSS Polytechnic for the Differently Abled - JSSPDA is the <strong>first Polytechnic of its kind in the country</strong> and <strong>only polytechnic in the state of Karnataka</strong> started in the year <strong>1991-92</strong> to offer Professional Education with the approval of AICTE, New Delhi for Differently Abled at Diploma Level.
              </p>
              
              <p>
                It was started under the World Bank Assistance Scheme of the Government of Karnataka by JSS Mahavidyapeetha. The new Buildings of the Polytechnic were inaugurated by the then <strong>Honorable Prime Minister of India on 3rd January 1999</strong> in the gracious presence of His Holiness Jagadguru Sri Shivarathri Deshikendra Mahaswamigalavaru, the President of JSS Mahavidyapeetha, Mysuru.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-3 text-[#A52A2A]">Autonomous Institution</h4>
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
      
      {/* JSS Mahavidyapeetha Section */}
      <section id="jssmvp" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#A52A2A]">About JSS Mahavidyapeetha</h2>
          </div>
          
          {/* President and Building Images Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <img 
                src={presidentImage} 
                alt="Jagadguru His Holiness Sri Sri Sri Shivarathri Deshikendra Mahaswamiji" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
              <h3 className="text-lg font-bold mt-4 text-[#A52A2A]">
                Jagadguru His Holiness Sri Sri Sri Shivarathri Deshikendra Mahaswamiji
              </h3>
              <p className="text-muted-foreground">President, JSS Mahavidyapeetha</p>
            </div>
            <div className="text-center">
              <img 
                src={buildingImage} 
                alt="JSS Mahavidyapeetha Building" 
                className="w-full rounded-lg shadow-lg"
              />
              <h3 className="text-lg font-bold mt-4 text-[#A52A2A]">
                JSS Mahavidyapeetha Campus
              </h3>
              <p className="text-muted-foreground">Main Building, Mysuru</p>
            </div>
          </div>
          
          {/* Content About JSS Mahavidyapeetha */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none">
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                The origin of JSS Mahavidyapeetha (JSSMVP), a formidable educational movement, can be traced to the establishment of a small hostel in 1928 to cater to the accommodation needs of students pursuing higher studies in Mysore. His Holiness Jagadguru Dr. Sri Shivarathri Rajendra Mahaswamiji established the Jagadguru Sri Shivarathreeshwara Mahavidyapeetha (JSSMVP) in 1954 and it was registered under the Societies' Registration Act 1960.
              </p>
              
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Focusing on a purpose as expansive and yet as specific as improving quality of life through Human Development, the JSS Mahavidyapeetha has grown from strength to strength. A long and healthy life, Education for all and a decent standard of living, the indicators of Human development, have been the underlying philosophy of Jagadguru Sri Veerasimhasana Mahasamsthana Math, Suttur Srikshethra, for centuries. This is also the philosophy for which the Mahavidyapeetha today stands for.
              </p>
              
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Under the untiring efforts of Jagadguru Dr. Sri Shivarathri Rajendra Mahaswamiji, the Mahavidyapeetha has witnessed enormous growth in the field of education and today has over 300 institutions under its fold, from kindergartens to postgraduate centres and postdoctoral research catering to the educational needs of more than 1,00,000 students.
              </p>
              
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                The Mahavidyapeetha continues to play an important role in expanding the scope of its activities to several branches of knowledge, welfare and culture. Its educational efforts span crèches for toddlers of working rural women, schools to impart primary and secondary education in both Kannada and English medium, Colleges, Polytechnics, Technical, Medicine, etc. Apart from formal education, the initiatives stretch to integrated rural development through training and empowering of rural folk, reaching out healthcare to people through modern and traditional Indian systems of medicine, patronizing literary activities, visual arts, performing arts, restoration of temples and historical monuments.
              </p>
              
              {/* Managing Committee */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-6 text-[#A52A2A]">Managing Committee Members</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-[#A52A2A] text-white">
                        <th className="border border-gray-300 px-4 py-2 text-left">Sl. No.</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Position</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">1.</td>
                        <td className="border border-gray-300 px-4 py-2">Jagadguru His Holiness Sri Shivarathri Deshikendra Mahaswamiji President, JSS Mahavidyapeetha, Mysuru</td>
                        <td className="border border-gray-300 px-4 py-2">Chairman</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">2.</td>
                        <td className="border border-gray-300 px-4 py-2">Justice Dr.Shivaraj V. Patil Retd. Justice of Supreme Court</td>
                        <td className="border border-gray-300 px-4 py-2">Member</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">3.</td>
                        <td className="border border-gray-300 px-4 py-2">Sri Chiranjeevi Singh, IAS (Retd) Retd. Principal Secretary</td>
                        <td className="border border-gray-300 px-4 py-2">Member</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">4.</td>
                        <td className="border border-gray-300 px-4 py-2">Dr.Channabasappa</td>
                        <td className="border border-gray-300 px-4 py-2">Member</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">5.</td>
                        <td className="border border-gray-300 px-4 py-2">Sri. M.B. Dhyaberi, IAS (Retd)</td>
                        <td className="border border-gray-300 px-4 py-2">Member</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">6.</td>
                        <td className="border border-gray-300 px-4 py-2">Sri V. Vinayaka Shankar, B.E</td>
                        <td className="border border-gray-300 px-4 py-2">Member</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">7.</td>
                        <td className="border border-gray-300 px-4 py-2">Sri S. ShivakumaraSwamy Retd., Associate Professor</td>
                        <td className="border border-gray-300 px-4 py-2">Honorary secretary</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
