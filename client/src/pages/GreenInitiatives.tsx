import { Leaf, Sun, Droplets, Wifi, Monitor, Shield, TreePine } from "lucide-react";
import corridorImage from "@assets/image_1750102187886.png";
import greenCampus1 from "@assets/image_1750102192199.png";
import greenCampus2 from "@assets/image_1750102197396.png";
import greenCampus3 from "@assets/image_1750102201804.png";
import solarCollege from "@assets/image_1750102206517.png";
import solarHostel from "@assets/image_1750102211277.png";

export default function GreenInitiatives() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">JSSPDA Green Initiatives</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sustainable and eco-friendly campus designed for environmental responsibility and digital innovation
            </p>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Campus */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">ECO-FRIENDLY CAMPUS</h2>
            </div>

            {/* Green Initiatives Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Environmental Features */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary flex items-center">
                  <TreePine className="w-6 h-6 mr-3" />
                  Green Environment
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Campus is covered with trees, flower plants and ornamental plants and lawn which are well maintained</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Our campus is specially designed for persons with special needs through international standard accessibility</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Regular maintenance of garden, lawn and other trees by the identified agency</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">The waste collected from trees, biodegradable waste are properly collected and placed in the pits. The manure used as fertilizer for gardening</p>
                  </div>
                </div>
              </div>

              {/* Solar Energy */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                  <Sun className="w-6 h-6 mr-3" />
                  Solar Energy
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Solar power generation is set up as an alternate energy source. Around 15,000 units of electricity is expected to generate through solar power</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Reduction of CO2 is achieved through solar power</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Uninterrupted electrical power supply is provided through centralized generator</p>
                  </div>
                </div>
              </div>

              {/* Water Management */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary flex items-center">
                  <Droplets className="w-6 h-6 mr-3" />
                  Water Management
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Use of rain water for watering trees and plants</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Safe & purified drinking water facility is extended to all the departments and hostel</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Sufficient water sources through borewells and storage tanks is available for uninterrupted water supply</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Proper sewage disposal through UGD is in place</p>
                  </div>
                </div>
              </div>

              {/* Waste Management */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Waste Management
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Solid waste disposal system is in place</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">Sign boards regarding cleanliness of campus is placed for user awareness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Campus */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">DIGITAL CAMPUS</h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-secondary flex items-center">
                    <Wifi className="w-6 h-6 mr-3" />
                    Technology Infrastructure
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">The Campus is enabled with WiFi facility for students and staff</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">ERP Software is in place for examination, admission, library and other academic activities</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                    <Shield className="w-6 h-6 mr-3" />
                    Security & Accessibility
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">The Campus has connected with CCTV surveillance for effective monitoring</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">Class rooms are equipped with audio visual systems for effective teaching for the differently abled students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Campus Gallery</h2>
              <p className="text-lg text-gray-700">Visual showcase of our eco-friendly and accessible campus infrastructure</p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Corridor with railings */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={corridorImage} 
                  alt="Corridor with railings for accessibility" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-primary">Corridor with railings</h3>
                  <p className="text-gray-600 text-sm">Accessible corridors designed for persons with special needs</p>
                </div>
              </div>

              {/* Green campus 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={greenCampus1} 
                  alt="Green campus with lawn and trees" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-secondary">Green campus</h3>
                  <p className="text-gray-600 text-sm">Well-maintained lawns and landscaping throughout the campus</p>
                </div>
              </div>

              {/* Green campus 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={greenCampus2} 
                  alt="Aerial view of green campus" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-primary">Green campus</h3>
                  <p className="text-gray-600 text-sm">Aerial view showcasing extensive green cover and tree plantation</p>
                </div>
              </div>

              {/* Green campus 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={greenCampus3} 
                  alt="Campus pathways with greenery" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-secondary">Green campus</h3>
                  <p className="text-gray-600 text-sm">Tree-lined pathways creating a natural and peaceful environment</p>
                </div>
              </div>

              {/* Solar installation - College */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={solarCollege} 
                  alt="Solar panels installed for college" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-primary">Solar installed for college</h3>
                  <p className="text-gray-600 text-sm">Solar power generation system for sustainable energy</p>
                </div>
              </div>

              {/* Solar installation - Hostel */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={solarHostel} 
                  alt="Solar panels installed for hostel" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-secondary">Solar installed for hostel</h3>
                  <p className="text-gray-600 text-sm">Renewable energy infrastructure for hostel facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-8 text-primary">Environmental Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">15,000 Units</h3>
                <p className="text-gray-600">Annual solar power generation</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary">Water Conservation</h3>
                <p className="text-gray-600">Rainwater harvesting system</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Zero Waste</h3>
                <p className="text-gray-600">Biodegradable waste to compost</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}