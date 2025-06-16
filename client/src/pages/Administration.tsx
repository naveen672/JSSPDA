import { useTranslation } from "react-i18next";
import { Users, Mail, Phone, User, Building, Briefcase } from "lucide-react";

export default function Administration() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-[#1a1a1a]">{t('administration.title', 'Administration')}</h1>
            <p className="text-xl text-[#1a1a1a] max-w-3xl mx-auto">
              {t('administration.subtitle', 'Administrative staff and key functionaries managing JSS Polytechnic for the Differently Abled')}
            </p>
          </div>
        </div>
      </section>

      {/* Principal Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <User className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold mb-6 text-[#1a1a1a]">{t('administration.principal.title', 'Principal Profile')}</h2>
            </div>

            <div className="bg-[hsl(var(--background))] border border-[hsl(var(--border))] rounded-xl shadow-lg p-8 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-2">Sri. Elangovan B</h3>
                <p className="text-lg text-[hsl(var(--primary))] font-semibold mb-4">
                  {t('administration.principal.designation', 'Principal, JSS Polytechnic for the Differently Abled (JSSPDA)')}
                </p>
                <p className="text-[hsl(var(--muted-foreground))]">Mysuru-570006</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <a href="mailto:jsspda@gmail.com" className="text-[hsl(var(--primary))] hover:underline block">jsspda@gmail.com</a>
                      <a href="mailto:elango1.india@gmail.com" className="text-[hsl(var(--primary))] hover:underline block">elango1.india@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700">+91-9686677236</p>
                      <p className="text-gray-700">0821-2548315, 2548316</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministerial Staff */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">{t('administration.staff.title', 'Ministerial Staff of JSSPDA')}</h2>
            </div>

            {/* Grant-in-Aid Employees */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="bg-primary text-white p-6">
                <h3 className="text-2xl font-bold">{t('administration.staff.grantInAid', 'Grant-in-Aid Employees')}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Sl. No</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Designation</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Qualification</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Experience</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Contact Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">1</td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Elangovan B</td>
                      <td className="px-6 py-4 text-sm text-primary font-medium">Principal</td>
                      <td className="px-6 py-4 text-sm text-gray-900">M.Sc.</td>
                      <td className="px-6 py-4 text-sm text-gray-900">25 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9687766236</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">2</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Raju N</td>
                      <td className="px-6 py-4 text-sm text-gray-900">F D A (Establishment)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">B.A.</td>
                      <td className="px-6 py-4 text-sm text-gray-900">24 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9844944077</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">3</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Shivakumar H S</td>
                      <td className="px-6 py-4 text-sm text-gray-900">F D A (Examination)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">B.Com</td>
                      <td className="px-6 py-4 text-sm text-gray-900">24 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9481528694</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">4</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Madappa N</td>
                      <td className="px-6 py-4 text-sm text-gray-900">F D A</td>
                      <td className="px-6 py-4 text-sm text-gray-900">M A</td>
                      <td className="px-6 py-4 text-sm text-gray-900">24 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9379682613</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">5</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Narendra N</td>
                      <td className="px-6 py-4 text-sm text-gray-900">F D A (Admission)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">B A., LLB.</td>
                      <td className="px-6 py-4 text-sm text-gray-900">23 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9945878036</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">6</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Dr. Palaniswamy</td>
                      <td className="px-6 py-4 text-sm text-gray-900">S D A(DVP)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">M.A, Ph.D</td>
                      <td className="px-6 py-4 text-sm text-gray-900">24 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9342818459</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">7</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mahadevaswamy R</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Typist</td>
                      <td className="px-6 py-4 text-sm text-gray-900">B.A</td>
                      <td className="px-6 py-4 text-sm text-gray-900">24 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9480667772</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">8</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Shashikala S</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Typist Account Section</td>
                      <td className="px-6 py-4 text-sm text-gray-900">B.Sc. M.Ed.</td>
                      <td className="px-6 py-4 text-sm text-gray-900">24 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9611947088</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">9</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Sridhara M</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Driver</td>
                      <td className="px-6 py-4 text-sm text-gray-900">7th Std</td>
                      <td className="px-6 py-4 text-sm text-gray-900">24 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">7892567069</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">10</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Nijaguna</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Driver</td>
                      <td className="px-6 py-4 text-sm text-gray-900">7th Std</td>
                      <td className="px-6 py-4 text-sm text-gray-900">24 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9901241474</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">11</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mahesh S M</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Attendar</td>
                      <td className="px-6 py-4 text-sm text-gray-900">SSLC</td>
                      <td className="px-6 py-4 text-sm text-gray-900">24 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9480405895</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">12</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Srinivasa D</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Peon</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Literate</td>
                      <td className="px-6 py-4 text-sm text-gray-900">24 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9611805359</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">13</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mallesha K S</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Peon</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Literate</td>
                      <td className="px-6 py-4 text-sm text-gray-900">24 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9901253936</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Management Employees */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-secondary text-white p-6">
                <h3 className="text-2xl font-bold">{t('administration.staff.management', 'Management Employees')}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Sl. No</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Designation</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Qualification</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Experience</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Contact Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">1</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Bhagya M J</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Stenographer (Personal Section)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Dip. In CP</td>
                      <td className="px-6 py-4 text-sm text-gray-900">20 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9620947682</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">2</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mahadevaswamy B</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Stenographer (Office Correspondance)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Dip. In CP</td>
                      <td className="px-6 py-4 text-sm text-gray-900">10 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">7975293578</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">3</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Basavaraju H R</td>
                      <td className="px-6 py-4 text-sm text-gray-900">S D A (Examination)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">SSLC</td>
                      <td className="px-6 py-4 text-sm text-gray-900">19 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9980656767</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">4</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Ramachandra T</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Helper Office</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Literate</td>
                      <td className="px-6 py-4 text-sm text-gray-900">24 Years</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9743347297</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Functionaries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Building className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">{t('administration.functionaries.title', 'Key Functionaries of JSSPDA')}</h2>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-6">
                <h3 className="text-2xl font-bold">{t('administration.functionaries.subtitle', 'Department Heads & Coordinators')}</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Sl. No</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Department/Section</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Contact Number</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">E-mail ID</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">1</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">Architecture</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Dr. S Uma</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9448957991</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdaar@gmail.com" className="hover:underline">jsspdaar@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">2</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">Commercial Practice</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mr. K Mahadevaswamy</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9886558878</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdacp@gmail.com" className="hover:underline">jsspdacp@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">3</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">Computer Science & Engineering</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mrs. C Nirupama</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9986011217</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdacs@gmail.com" className="hover:underline">jsspdacs@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">4</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">Jewellery Design & Technology</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mr. N M Shivakumaraswamy</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9448826306</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspda.jdt@gmail.com" className="hover:underline">jsspda.jdt@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">5</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">Electronics & Communication Engineering</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mrs. C Kavya</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9739319715</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdaec@gmail.com" className="hover:underline">jsspdaec@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">6</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">Computer Applications for the Visually Impaired</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mrs. V Geetha</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9483608707</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdacavi@gmail.com" className="hover:underline">jsspdacavi@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">7</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">Controller of Examinations</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mr. G P Sathisha</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9066868931</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdaexam@gmail.com" className="hover:underline">jsspdaexam@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">8</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">Librarian</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mrs. B Sunitha</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9844079269</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdalib@gmail.com" className="hover:underline">jsspdalib@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">9</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">Training & Placement Officer</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mr. B J Kushal</td>
                      <td className="px-6 py-4 text-sm text-blue-600">8050709919</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdaplacement@gmail.com" className="hover:underline">jsspdaplacement@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">10</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">Hostel Warden</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mr. N M Shivakumaraswamy</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9448826306</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:nmswarden@gmail.com" className="hover:underline">nmswarden@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">11</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">Internal Quality Assurance Cell (IQAC)</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mr. N M Shivakumaraswamy</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9448826306</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:nmswarden@gmail.com" className="hover:underline">nmswarden@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">12</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">AISHE & E-Governance Cell Coordinator</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mr. K S Mahesh</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9886067061</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:ksmmahesh@gmail.com" className="hover:underline">ksmmahesh@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">13</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">NBA Coordinator</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Dr. S G Srikantaswamy</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9900898748</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdanba@gmail.com" className="hover:underline">jsspdanba@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">14</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">Alumni Association Coordinator</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mrs. Sunanda</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9844496133</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:sunandacs@gmail.com" className="hover:underline">sunandacs@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">15</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">NSS Coordinator</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mr. B Srinivasa</td>
                      <td className="px-6 py-4 text-sm text-blue-600">8722670778</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdanss@gmail.com" className="hover:underline">jsspdanss@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">16</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">ISTE Student Chapter Coordinator</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mrs. D V Nandini</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9901591463</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdaiste@gmail.com" className="hover:underline">jsspdaiste@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">17</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">IIP Cell Coordinator</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mr. M B Raghu</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9448434270</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdaiipc@gmail.com" className="hover:underline">jsspdaiipc@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">18</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">Scholarship Coordinator & Student Counselor</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mrs. M Suchetha</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9555356789</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:suchethapda@gmail.com" className="hover:underline">suchethapda@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">19</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">Sign Language Interpreter</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mrs. Kanchan S Sharma</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9611807979</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:jsspdasl@gmail.com" className="hover:underline">jsspdasl@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">20</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">Youth Red Cross Coordinator</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mrs. Murugamma</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9538962593</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:murugammaj15@gmail.com" className="hover:underline">murugammaj15@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">21</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">Medical Officer</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Dr. A M Mahesh</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9481150303</td>
                      <td className="px-6 py-4 text-sm text-gray-500">--</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">22</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">Sports Coordinator</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mr. H N Mahadevaswamy</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9980049708</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:crazyms.swamy@gmail.com" className="hover:underline">crazyms.swamy@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">23</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">Cultural Coordinator</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Smt. M Prathima</td>
                      <td className="px-6 py-4 text-sm text-blue-600">8277474055</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:prathimadivyap@gmail.com" className="hover:underline">prathimadivyap@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">24</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">Anti Ragging Committee</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Dr. S G Srikantaswamy</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9900898748</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:sgsrikantaswamy@gmail.com" className="hover:underline">sgsrikantaswamy@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">25</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">SC / ST Committee</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Mr. B Srinivasa</td>
                      <td className="px-6 py-4 text-sm text-blue-600">8722670778</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:srinivasmbs22@gmail.com" className="hover:underline">srinivasmbs22@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">26</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">OMBUDSMEN Grievance Redressal Committee</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Smt. C Nirupama</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9986011217</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:c.nirupama2007@gmail.com" className="hover:underline">c.nirupama2007@gmail.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">27</td>
                      <td className="px-6 py-4 text-sm font-medium text-primary">Internal Complaint Committee</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Smt. C Nirupama</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9986011217</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:c.nirupama2007@gmail.com" className="hover:underline">c.nirupama2007@gmail.com</a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-900">28</td>
                      <td className="px-6 py-4 text-sm font-medium text-secondary">Women's Security, Welfare & Grievance</td>
                      <td className="px-6 py-4 text-sm text-gray-900">Dr. S Uma</td>
                      <td className="px-6 py-4 text-sm text-blue-600">9448957991</td>
                      <td className="px-6 py-4 text-sm text-blue-600">
                        <a href="mailto:umasarch53@gmail.com" className="hover:underline">umasarch53@gmail.com</a>
                      </td>
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