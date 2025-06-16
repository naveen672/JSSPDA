import { useTranslation } from "react-i18next";
import { Users, Shield, FileText, Award, Building, Briefcase } from "lucide-react";

export default function Governance() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">{t('governance.title', 'Governance')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('governance.subtitle', 'Administrative structure and committees ensuring effective governance of JSS Polytechnic for the Differently Abled')}
            </p>
          </div>
        </div>
      </section>

      {/* Governing Council */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">{t('governance.council.title', 'Governing Council')}</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
                {t('governance.council.description', 'The Polytechnic has the Governing Council which has a set of members constituted by the Management as per the norms of AICTE for giving guidance regarding administration of the Institution.')}
              </p>
            </div>

            {/* Council Composition */}
            <div className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--primary))]">{t('governance.council.composition', 'Composition of Governing Council')}</h3>
              <p className="text-[hsl(var(--foreground))] mb-6">
                {t('governance.council.compositionText', 'The Governing Council shall have at least 11 members including the Chairman and the Member-Secretary. The Management / Registered Society shall nominate members including the Chairman and the Member-Secretary as indicated below:')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3"></div>
                    <span className="text-[hsl(var(--foreground))]">The Chairman</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3"></div>
                    <span className="text-[hsl(var(--foreground))]">Two to Five members (Industrialist / Technologist / Educationalist)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3"></div>
                    <span className="text-[hsl(var(--foreground))]">One nominee from the Affiliating Board</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3"></div>
                    <span className="text-[hsl(var(--foreground))]">One nominee from All India Council for Technical Education (Ex-Officio)</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3"></div>
                    <span className="text-[hsl(var(--foreground))]">One nominee from the State Government (Ex-Officio)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3"></div>
                    <span className="text-[hsl(var(--foreground))]">One Senior Faculty member of the Institute</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mr-3"></div>
                    <span className="text-[hsl(var(--foreground))]">Principal of the concerned Technical institution is the Member Secretary</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Council Members Table */}
            <div className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] p-6">
                <h3 className="text-2xl font-bold">{t('governance.council.members', 'Governing Council Members')}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[hsl(var(--muted))]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[hsl(var(--foreground))]">Sl. No</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[hsl(var(--foreground))]">Name & Designation</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-[hsl(var(--foreground))]">Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[hsl(var(--border))]">
                    <tr>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">1</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">His Holiness Jagadguru Sri Shivarathri Deshikendra Mahaswamigalavaru, President, JSS Mahavidyapeetha, Mysuru</td>
                      <td className="px-6 py-4 text-sm font-medium text-[hsl(var(--primary))]">Chairman</td>
                    </tr>
                    <tr className="bg-[hsl(var(--muted))]">
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">2</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Dr. C G Betsurmath, Executive Secretary, JSS Mahavidyapeetha, Mysuru</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Member</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">3</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Prof. M H Dhananjaya, Advisor, Technical Education Division, JSS Mahavidyapeetha, Mysuru</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Member</td>
                    </tr>
                    <tr className="bg-[hsl(var(--muted))]">
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">4</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Dr. H R Mahadevaswamy, Joint Director, Technical Education Division, JSS Mahavidyapeetha, Mysuru</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Member</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">5</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Sri B R Umakant, Joint Director (Projects), Technical Education Division, JSS Mahavidyapeetha, Mysuru</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Member</td>
                    </tr>
                    <tr className="bg-[hsl(var(--muted))]">
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">6</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Smt. Shanthi Raghavan, Founder, Managing Trustee, M/s EnAable India Pvt. Ltd., #473/B, Adugodi Main Road, 8th Block Koramangala, Bengaluru – 560 095</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Member</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">7</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">The Director, Department of Technical Education, Govt. of Karnataka, TantrikaShikshanaBhavan, Palace Road, Bengaluru – 560 001</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Member</td>
                    </tr>
                    <tr className="bg-[hsl(var(--muted))]">
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">8</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">The Regional Officer, SWRO – AICTE, University Campus, Bengaluru – 560 001</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Member</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">9</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">The State Commissioner for Persons with Disabilities, # 55, Rasildhar Street, Sheshadripuram, Bengaluru – 560 001</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Member</td>
                    </tr>
                    <tr className="bg-[hsl(var(--muted))]">
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">10</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Sri N Narendra, Managing Director, M/s Vinyas Innovative Technologies Pvt. Ltd., Hebbal Industrial Estate, Hebbal, Mysuru – 570 027</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Member</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">11</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Sri Murali Kumar, Programme Director, Centre for Inclusion, M/s EnAble India Pvt. Ltd.,# 473/B, Adugodi Main Road, 8th Block, Koramangala, Bengaluru – 560 095</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Member</td>
                    </tr>
                    <tr className="bg-[hsl(var(--muted))]">
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">12</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Sri N M Shivakumaraswamy, Sl. Gr. Lecturer in Science, JSS Polytechnic for the Differently Abled, Mysuru – 570 006</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Member</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">13</td>
                      <td className="px-6 py-4 text-sm text-[hsl(var(--foreground))]">Sri B Elangovan, Principal, JSS Polytechnic for the Differently Abled, Mysuru – 570 006</td>
                      <td className="px-6 py-4 text-sm font-medium text-[hsl(var(--primary))]">Member Secretary</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Functions and Responsibilities */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">{t('governance.council.functions', 'Functions and Responsibilities of the Governing Council')}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Review the action taken in connection with the resolution made during last meeting.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Analyze and understand the present administrative processes and provide guidance for improvement of overall development of the Institute.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Critical comments on the proposed list of activities of the Institute.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Analyze and guide the financial status of the Institute.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Suggestions to improve the admissions, placement and other academic requirements of the institute.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Approval for various activities conducted by the Institute in the areas of curricular, co-curricular and extra curricular.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Approval of new initiatives, projects and suggestions for improvement.</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-secondary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Suggestions / recommendations for further development.</p>
                </div>
              </div>
            </div>

            {/* GC Meeting Proceedings */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-secondary">{t('governance.council.meetings', 'GC Meeting Proceedings')}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">27th GC Meeting Proceedings</span>
                  <button className="text-primary hover:text-secondary font-medium">Click Here</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">26th GC Meeting Proceedings</span>
                  <button className="text-primary hover:text-secondary font-medium">Click Here</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium">25th GC Meeting Proceedings</span>
                  <button className="text-primary hover:text-secondary font-medium">Click Here</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administrative Committees */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">{t('governance.committees.title', 'Administrative Committees')}</h2>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                {t('governance.committees.description', 'Various committees formed to assist the Polytechnic administration for effective governance and student welfare')}
              </p>
            </div>

            {/* Committee Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* IQAC */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Internal Quality Assurance Cell (IQAC)</h3>
                <p className="text-gray-600 text-sm mb-4">Inspects and verifies all academic related documents and prepares detailed proceedings for quality improvement.</p>
                <div className="text-sm text-gray-500">
                  <p><strong>Chairman:</strong> Sri B Elangovan, Principal</p>
                  <p><strong>Coordinator:</strong> Sri N M Shivakumaraswamy</p>
                </div>
              </div>

              {/* Women's Security */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Women's Security & Grievance Redressal</h3>
                <p className="text-gray-600 text-sm mb-4">Handles cases of sexual harassment and other types of harassment of female students and staff.</p>
                <div className="text-sm text-gray-500">
                  <p><strong>Chairman:</strong> Sri B Elangovan, Principal</p>
                  <p><strong>Member Secretary:</strong> Smt. Geetha V</p>
                </div>
              </div>

              {/* Anti Ragging */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Anti Ragging Committee</h3>
                <p className="text-gray-600 text-sm mb-4">Creates awareness about ragging and ensures a student-friendly environment at all times.</p>
                <div className="text-sm text-gray-500">
                  <p><strong>Chairman:</strong> Sri B Elangovan, Principal</p>
                  <p><strong>Member Secretary:</strong> Smt. Uma S</p>
                </div>
              </div>

              {/* Grievance Redressal */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Grievance Redressal Committee</h3>
                <p className="text-gray-600 text-sm mb-4">Receives grievances from stakeholders including students, staff, and parents through web interface.</p>
                <div className="text-sm text-gray-500">
                  <p><strong>Ombudsman:</strong> Prof. B.S. Basavarajaiah</p>
                  <p><strong>Principal:</strong> Sri B Elangovan</p>
                </div>
              </div>

              {/* SC/ST Committee */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">SC/ST Committee</h3>
                <p className="text-gray-600 text-sm mb-4">Uplifts the morale of deprived section of students and staff, provides scholarship information.</p>
                <div className="text-sm text-gray-500">
                  <p><strong>Chairman:</strong> Sri B Elangovan, Principal</p>
                  <p><strong>Member Secretary:</strong> Sri Srinivasa B</p>
                </div>
              </div>

              {/* Internal Complaints */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">Internal Complaints Committee</h3>
                <p className="text-gray-600 text-sm mb-4">Addresses complaints received by students with proper investigation and documentation.</p>
                <div className="text-sm text-gray-500">
                  <p><strong>Presiding Officer:</strong> Smt. C Nirupama</p>
                  <p><strong>Members:</strong> Faculty and Student Representatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Governance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">{t('governance.academic.title', 'Academic Governance')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Academic Committee */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Academic Committee</h3>
                <p className="text-gray-700 mb-6">Under Autonomous scheme, the Institute has constituted the Academic Board to review and approve academic related matters through meetings when and where required.</p>
                
                <h4 className="text-lg font-semibold mb-4 text-secondary">Key Responsibilities:</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Frame curricula for courses based on DTE guidelines</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Decide teaching methods and sequence</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Evolve practical and project oriented training programmes</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Update course contents according to changing needs</span>
                  </div>
                </div>
              </div>

              {/* Examination Committee */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-secondary">Examination Committee</h3>
                <p className="text-gray-700 mb-6">Under Autonomous scheme, the Institute has constituted the Awards Committee to review and approve examination related matters through meetings at the end of each examination.</p>
                
                <h4 className="text-lg font-semibold mb-4 text-primary">Key Responsibilities:</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Review internal and external evaluation schemes</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Provide statistical analysis of student performance</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Recommend candidates for promotion or diploma awards</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Device mechanism to hear student appeals</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Building className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">{t('governance.services.title', 'Support Services & Administrative Sections')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary">Admission Section</h3>
                <p className="text-sm text-gray-600">Smt. C. Nirupama, HOD of CS</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-secondary">Establishment Section</h3>
                <p className="text-sm text-gray-600">Sri Raju N, First Division Assistant</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary">Development Section</h3>
                <p className="text-sm text-gray-600">Dr. Palaniswamy, Second Division Assistant</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-secondary">Accounts Section</h3>
                <p className="text-sm text-gray-600">Smt. S Shashikala</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}