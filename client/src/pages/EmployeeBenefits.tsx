import { Shield, Heart, Coins, Users, Baby, Umbrella, LifeBuoy } from "lucide-react";

export default function EmployeeBenefits() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-primary">JSSPDA Employee Benefits</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive benefits package ensuring security and welfare for all our valued employees
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Gratuity */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Coins className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">Gratuity</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    It is a prescribed benefit plan and is one of the many retirement privileges by the employer to the employee upon leaving the organization.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-secondary mb-2">Eligibility & Calculation:</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• A person who has served in this organization for at least 5 years is eligible</li>
                      <li>• The employee is eligible for 15 days of salary for every one calendar year of service</li>
                      <li>• Computation based on average salary, dearness allowance, and years of service</li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p><strong>Management employees:</strong> Provided with Gratuity (linked to LIC scheme) as per Govt. of India notification</p>
                    <p><strong>Grant-in-aid employees:</strong> Applicable as per the KCSR</p>
                  </div>
                </div>
              </div>

              {/* EPF & EPS */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary">Employee Provident Fund (EPF) & Employee Pension Scheme</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Employee Provident Fund (EPF) & Employee Pension Schemes are provided to all eligible employees as per Central Government norms.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-bold text-primary mb-2">Contribution Details:</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Employee: 12% of monthly basic salary + dearness allowance (max ceiling Rs. 15,000/-)</li>
                      <li>• Employer: 12% (8.33% towards EFPS + 3.67% EPF)</li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p><strong>Management employees:</strong> As per Govt. of India notification</p>
                    <p><strong>Grant-in-aid employees:</strong> Applicable as per the KCSR</p>
                  </div>
                </div>
              </div>

              {/* Group Mediclaim */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">Group Mediclaim Facility</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Group mediclaim facility is provided to all the employees of JSSPDA (optional) with cashless hospital admission facility.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 text-red-500 mr-2" />
                      <span className="font-semibold text-secondary">Cashless Hospital Admission Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ESI */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary">Employee State Insurance Corporation (ESI)</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    ESI Medical Benefits - A comprehensive social security program for workers in the event of medical contingencies, such as sickness, maternity, death, or disablement due to employment injury and occupational disease.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-bold text-primary mb-2">Coverage:</h3>
                    <p className="text-sm text-gray-700">ESI facility is extended to all employees with ceiling limit of total salary Rs. 21,000/- per month</p>
                  </div>
                </div>
              </div>

              {/* Maternity Benefit */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Baby className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">Maternity Benefit</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Women Employees can avail maternity leave with full salary and comprehensive support during this important time.
                  </p>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-bold text-secondary mb-2">Leave Entitlement:</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 135 days of maternity leave with full salary</li>
                      <li>• Maximum two occasions during service period</li>
                      <li>• ESI Scheme employees: Up to 180 days extended leave</li>
                    </ul>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p><strong>Coverage:</strong> Benefits extended to all eligible employees as per Government notification. For grant-in-aid employees applicable as per KCSR.</p>
                  </div>
                </div>
              </div>

              {/* Group Personal Accident Policy */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                    <Umbrella className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-secondary">Group Personal Accident Policy</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    All JSSPDA Employees are covered under Group Personal Accident Insurance providing comprehensive protection.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-bold text-primary mb-2">Coverage Details:</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Sum Assured: Rs. 2,50,000/-</li>
                      <li>• Accidental hospitalization expenses: Up to Rs. 50,000/-</li>
                      <li>• Weekly compensation for temporary total disabilities: Rs. 5,000/- for 52 weeks</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EDLI Scheme */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <LifeBuoy className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">Early Death Life Insurance (EDLI) Scheme</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    EDLI facility related to the death of the employee during his service period, providing financial security to families.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-bold text-secondary mb-2">Coverage:</h3>
                    <p className="text-sm text-gray-700">Extended to all MANAGEMENT employees of JSSPDA up to a limit of Rs. 7,00,000/-</p>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p><strong>Grant-in-aid employees:</strong> This scheme will be applicable as per the KCSR</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-8 text-primary">Comprehensive Employee Welfare</h2>
            <p className="text-lg text-gray-700 mb-8">
              JSSPDA is committed to providing comprehensive benefits that ensure the security, health, and welfare of all our employees and their families.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Financial Security</h3>
                <p className="text-gray-600 text-sm">Gratuity, EPF, and life insurance coverage</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-secondary">Health Coverage</h3>
                <p className="text-gray-600 text-sm">Mediclaim and ESI medical benefits</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">Family Support</h3>
                <p className="text-gray-600 text-sm">Maternity benefits and accident coverage</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}