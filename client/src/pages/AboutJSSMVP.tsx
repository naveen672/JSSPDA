import { useTranslation } from "react-i18next";
import presidentImage from "@assets/image_1750098685509.png";
import buildingImage from "@assets/image_1750098690353.png";

export default function AboutJSSMVP() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-light py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">{t('aboutJSSMVP.hero.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('aboutJSSMVP.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      {/* JSS Mahavidyapeetha Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Content About JSS Mahavidyapeetha with President Image on Right */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Text Content - Takes 2/3 of the space */}
              <div className="lg:col-span-2">
                <div className="prose max-w-none">
                  <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                    The origin of JSS Mahavidyapeetha (JSSMVP), a formidable educational movement, can be traced to the establishment of a small hostel in 1928 to cater to the accommodation needs of students pursuing higher studies in Mysore. His Holiness Jagadguru Dr. Sri Shivarathri Rajendra Mahaswamiji established the Jagadguru Sri Shivarathreeshwara Mahavidyapeetha (JSSMVP) in 1954 and it was registered under the Societies' Registration Act 1960.
                  </p>
                  
                  <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                    Focusing on a purpose as expansive and yet as specific as improving quality of life through Human Development, the JSS Mahavidyapeetha has grown from strength to strength. A long and healthy life, Education for all and a decent standard of living, the indicators of Human development, have been the underlying philosophy of Jagadguru Sri Veerasimhasana Mahasamsthana Math, Suttur Srikshethra, for centuries. This is also the philosophy for which the Mahavidyapeetha today stands for.
                  </p>
                  
                  <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                    Today, the JSS Mahavidyapeetha is one of the most prestigious educational institutions in the country with over 300 educational institutions, 48 hostels and 34 health units. The institutions affiliated to JSS Mahavidyapeetha provide education at all levels from KG to PG, in almost all streams of knowledge, including medical, engineering, arts, commerce, physical sciences, bio-sciences, hotel management and catering technology.
                  </p>
                  
                  <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                    The JSS Mahavidyapeetha has been constantly working to keep itself up to date with the latest developments in the field of education and research. It has always been in the forefront of educational innovation and excellence. The vision of the JSS Mahavidyapeetha is to be a leading educational organization that provides quality education and promotes human development.
                  </p>
                </div>
              </div>
              
              {/* President Image - Takes 1/3 of the space on the right */}
              <div className="text-center lg:sticky lg:top-8">
                <img 
                  src={presidentImage} 
                  alt="Jagadguru His Holiness Sri Sri Sri Shivarathri Deshikendra Mahaswamiji" 
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                />
                <h3 className="text-lg font-bold mt-4 text-primary">
                  {t('aboutJSSMVP.president.name', 'Jagadguru His Holiness Sri Sri Sri Shivarathri Deshikendra Mahaswamiji')}
                </h3>
                <p className="text-muted-foreground">{t('aboutJSSMVP.president.title', 'President, JSS Mahavidyapeetha')}</p>
              </div>
            </div>
          </div>
          
          {/* Building Image - Centered */}
          <div className="text-center mb-12">
            <img 
              src={buildingImage} 
              alt="JSS Mahavidyapeetha Building" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
            <h3 className="text-lg font-bold mt-4 text-primary">
              {t('aboutJSSMVP.campus.name', 'JSS Mahavidyapeetha Campus')}
            </h3>
            <p className="text-muted-foreground">{t('aboutJSSMVP.campus.location', 'Main Building, Mysuru')}</p>
          </div>
          
          {/* Managing Committee Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Managing Committee */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">{t('aboutJSSMVP.committee.title', 'Managing Committee Members')}</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="border border-gray-300 px-4 py-3 text-left">{t('aboutJSSMVP.committee.headers.position', 'Position')}</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">{t('aboutJSSMVP.committee.headers.name', 'Name')}</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">{t('aboutJSSMVP.committee.headers.designation', 'Designation')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">President</td>
                      <td className="border border-gray-300 px-4 py-2">Jagadguru His Holiness Sri Sri Sri Shivarathri Deshikendra Mahaswamiji</td>
                      <td className="border border-gray-300 px-4 py-2">President, JSS Mahavidyapeetha</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Secretary</td>
                      <td className="border border-gray-300 px-4 py-2">Dr. B. Suresh</td>
                      <td className="border border-gray-300 px-4 py-2">Secretary, JSS Mahavidyapeetha</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Deputy Secretary</td>
                      <td className="border border-gray-300 px-4 py-2">Dr. N.G. Prasad</td>
                      <td className="border border-gray-300 px-4 py-2">Deputy Secretary, JSS Mahavidyapeetha</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Executive Secretary</td>
                      <td className="border border-gray-300 px-4 py-2">Dr. Surendra S.V.</td>
                      <td className="border border-gray-300 px-4 py-2">Executive Secretary, JSS Mahavidyapeetha</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Principal</td>
                      <td className="border border-gray-300 px-4 py-2">Dr. Mahesh V. Mungurwadi</td>
                      <td className="border border-gray-300 px-4 py-2">Principal, JSSPDA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}