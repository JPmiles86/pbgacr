import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata = {
  title: 'Costa Rica Labor Law Updates 2024-2025 | Pacific Business & Accounting Group',
  description: 'Latest Costa Rica labor law changes, minimum wage updates, remote work regulations, employment benefits, and compliance requirements for 2024-2025. Stay informed with current Ministry of Labor updates.',
}

const LaborLawUpdatesPage = () => {
  const keyUpdates2025 = [
    {
      title: 'Minimum Wage Increase - 2.37%',
      date: 'January 1, 2025',
      category: 'Wages',
      status: 'Effective',
      impact: 'High',
      details: [
        'General adjustment of 2.37% to all private sector minimum wages',
        'Unskilled workers: ₡367,108/month (USD $725)',
        'Specialized workers: ₡476,866/month (USD $940)',
        'Bachelor degree holders: ₡653,427/month (USD $1,290)',
        'University graduates: ₡784,139/month (USD $1,550)'
      ],
      source: 'National Wage Council (CNS) & Ministry of Labor and Social Security (MTSS)'
    },
    {
      title: 'Digital Nomad Visa Program Enhancements',
      date: 'Ongoing 2024-2025',
      category: 'Remote Work',
      status: 'Active',
      impact: 'Medium',
      details: [
        'Streamlined application process with 2-week response time',
        '$3,000/month minimum income requirement (individual)',
        '$4,000/month minimum income requirement (with dependents)',
        '1-year initial visa with 1-year extension possible',
        '$50,000 minimum health insurance coverage required'
      ],
      source: 'Dirección General de Migración y Extranjería'
    },
    {
      title: 'Newborn Care Leave Guidelines',
      date: 'October 2024',
      category: 'Benefits',
      status: 'New',
      impact: 'Medium',
      details: [
        'Paid leave for medical appointments related to newborns',
        'Extended benefits for mothers and primary caregivers',
        'Integration with existing maternity/paternity leave policies',
        'CCSS coordination for healthcare coverage'
      ],
      source: 'MTSS Directive DAJ-AER-OFP-115-23'
    },
    {
      title: 'Severance and Termination Clarifications',
      date: '2024 Updates',
      category: 'Termination',
      status: 'Clarified',
      impact: 'High',
      details: [
        'Streamlined wrongful dismissal case processing',
        'Clear severance calculation methods maintained',
        '3-6 months service: 7 days wages severance',
        '6-12 months service: 14 days wages severance',
        '1+ years service: ~20 days per year worked'
      ],
      source: 'Costa Rica Labor Code & MTSS'
    }
  ]

  const minimumWages2025 = [
    {
      category: 'General Workers',
      unskilled: '₡367,108',
      semiskilled: '₡400,000',
      skilled: '₡450,000',
      dailyUnskilled: '₡12,237',
      dailySkilled: '₡15,984'
    },
    {
      category: 'Domestic Workers',
      unskilled: '₡335,000',
      semiskilled: '₡350,000',
      skilled: '₡365,000',
      dailyUnskilled: '₡11,167',
      dailySkilled: '₡12,167'
    },
    {
      category: 'Agriculture & Livestock',
      unskilled: '₡335,000',
      semiskilled: '₡350,000',
      skilled: '₡365,000',
      dailyUnskilled: '₡11,167',
      dailySkilled: '₡12,167'
    },
    {
      category: 'Commerce & Services',
      unskilled: '₡365,000',
      semiskilled: '₡380,000',
      skilled: '₡400,000',
      dailyUnskilled: '₡12,167',
      dailySkilled: '₡13,333'
    },
    {
      category: 'Manufacturing',
      unskilled: '₡380,000',
      semiskilled: '₡400,000',
      skilled: '₡420,000',
      dailyUnskilled: '₡12,667',
      dailySkilled: '₡14,000'
    },
    {
      category: 'Construction',
      unskilled: '₡400,000',
      semiskilled: '₡420,000',
      skilled: '₡450,000',
      dailyUnskilled: '₡13,333',
      dailySkilled: '₡15,000'
    },
    {
      category: 'Professional Services',
      bachelor: '₡653,427',
      graduate: '₡784,139',
      dailyBachelor: '₡21,781',
      dailyGraduate: '₡26,138'
    }
  ]

  const remoteWorkFramework = [
    {
      type: 'Home-Based Telework',
      description: 'Work performed from employee\'s residence',
      requirements: [
        'Written agreement between employer and employee',
        'Defined work schedule and performance metrics',
        'Employer responsibility for equipment and utilities',
        'Regular communication protocols established'
      ],
      legalBasis: 'Work-from-Home Bill (Law signed 2021)'
    },
    {
      type: 'Mobile Telework (Digital Nomad)',
      description: 'Work performed from any location with flexibility',
      requirements: [
        'Performance-based work obligations',
        'Technology infrastructure requirements',
        'Clear deliverables and deadlines',
        'Voluntary agreement framework'
      ],
      legalBasis: 'Telework Regulations (MTSS Guidelines)'
    },
    {
      type: 'Hybrid Work Models',
      description: 'Combination of office and remote work',
      requirements: [
        'Flexible schedule arrangements',
        'Office space allocation considerations',
        'Technology and security protocols',
        'Performance management systems'
      ],
      legalBasis: 'Employer-Employee Agreements'
    }
  ]

  const mandatoryBenefitsUpdates = [
    {
      benefit: '13th Month Salary (Aguinaldo)',
      rate: '1 month salary',
      deadline: 'December 20, 2024',
      calculation: 'Average salary of last 12 months ÷ 12 × months worked',
      updates: 'No changes for 2025 - calculation method remains the same'
    },
    {
      benefit: 'Vacation Pay',
      rate: '2 weeks minimum',
      deadline: 'Within 12 months of earning',
      calculation: '2 weeks salary after 50 weeks worked',
      updates: 'Enhanced tracking requirements for remote workers'
    },
    {
      benefit: 'CCSS Employer Contributions',
      rate: '26.67%',
      deadline: '15th of following month',
      calculation: 'Percentage of gross salary',
      updates: 'Contribution rates stable for 2025'
    },
    {
      benefit: 'CCSS Employee Deductions',
      rate: '10.67%',
      deadline: 'Automatic payroll deduction',
      calculation: 'Percentage of gross salary',
      updates: 'Deduction rates unchanged for 2025'
    },
    {
      benefit: 'Maternity Leave',
      rate: '4 months (120 days)',
      deadline: 'Continuous period around birth',
      calculation: 'Paid by CCSS at 100% salary',
      updates: 'Enhanced newborn care appointment coverage added'
    },
    {
      benefit: 'Paternity Leave',
      rate: '8 days',
      deadline: 'Within first month of birth',
      calculation: 'Paid by employer at 100% salary',
      updates: 'Expanded coverage for adoption cases'
    }
  ]

  const complianceChecklist2025 = [
    {
      category: 'Wage Compliance',
      priority: 'Critical',
      items: [
        'Update payroll systems with new 2025 minimum wage rates',
        'Review all employee salaries against new minimums',
        'Adjust contracts for affected employees',
        'Document wage rate justifications by skill level',
        'Prepare for potential wage audits by MTSS'
      ],
      deadline: 'Immediate - January 2025'
    },
    {
      category: 'Remote Work Policies',
      priority: 'High',
      items: [
        'Develop written telework agreements',
        'Establish performance measurement systems',
        'Define equipment and technology responsibilities',
        'Create communication and availability protocols',
        'Implement data security measures for remote work'
      ],
      deadline: 'Q1 2025'
    },
    {
      category: 'Benefits Administration',
      priority: 'High',
      items: [
        'Update newborn care leave policies',
        'Integrate new CCSS healthcare guidelines',
        'Review vacation tracking for remote employees',
        'Prepare 13th month salary calculations',
        'Ensure CCSS contribution accuracy'
      ],
      deadline: 'Ongoing compliance'
    },
    {
      category: 'Employment Contracts',
      priority: 'Medium',
      items: [
        'Update standard employment contracts',
        'Include remote work clauses where applicable',
        'Review termination and severance clauses',
        'Ensure compliance with MTSS guidelines',
        'Prepare contracts in Spanish with official translations'
      ],
      deadline: 'Q2 2025'
    }
  ]

  const workPermitUpdates = [
    {
      permitType: 'Temporary Work Visa',
      duration: '2 years (renewable)',
      requirements: [
        'Job offer from Costa Rican employer',
        'Criminal background check (apostilled)',
        'Educational credentials (apostilled)',
        'Health certificate',
        'Proof of financial solvency'
      ],
      processingTime: '6-8 months',
      updates: 'Accredited companies receive priority processing'
    },
    {
      permitType: 'Digital Nomad Visa',
      duration: '1 year (1-year extension possible)',
      requirements: [
        '$3,000/month minimum income (individual)',
        '$4,000/month minimum income (with dependents)',
        'Health insurance ($50,000 minimum coverage)',
        'Work exclusively for entities outside Costa Rica',
        'Clean criminal record'
      ],
      processingTime: '2 weeks application review',
      updates: 'Streamlined application process implemented 2024'
    },
    {
      permitType: 'Professional Visa',
      duration: '2 years (renewable)',
      requirements: [
        'University degree (apostilled)',
        'Professional certification or license',
        'Job offer in specialized field',
        'No criminal record',
        'Health certificate'
      ],
      processingTime: '6-8 months',
      updates: 'Enhanced validation process for professional credentials'
    }
  ]

  const implementationTimeline = [
    {
      phase: 'Immediate Actions (January 2025)',
      tasks: [
        'Implement new minimum wage rates',
        'Update payroll systems',
        'Review and adjust affected employee salaries',
        'Communicate changes to employees'
      ],
      responsible: 'HR & Payroll Departments'
    },
    {
      phase: 'Q1 2025 (January - March)',
      tasks: [
        'Develop remote work policies',
        'Update employment contracts',
        'Train managers on new compliance requirements',
        'Establish performance metrics for remote work'
      ],
      responsible: 'HR & Legal Departments'
    },
    {
      phase: 'Q2 2025 (April - June)',
      tasks: [
        'Complete contract updates',
        'Implement new leave policies',
        'Conduct compliance audit',
        'Update employee handbook'
      ],
      responsible: 'HR & Compliance Teams'
    },
    {
      phase: 'Ongoing (2025)',
      tasks: [
        'Monitor MTSS updates',
        'Maintain CCSS contribution compliance',
        'Regular wage compliance reviews',
        'Annual benefits calculations'
      ],
      responsible: 'HR & Accounting Departments'
    }
  ]

  const businessImpactAnalysis = [
    {
      area: 'Payroll Costs',
      impact: 'Increase',
      magnitude: 'Low-Medium (2.37%)',
      description: 'Minimum wage increase affects entry-level positions primarily',
      actionRequired: 'Budget adjustment for affected employees'
    },
    {
      area: 'Remote Work Management',
      impact: 'Process Change',
      magnitude: 'Medium',
      description: 'Need for new policies, technology, and management approaches',
      actionRequired: 'Policy development and manager training'
    },
    {
      area: 'Compliance Complexity',
      impact: 'Increase',
      magnitude: 'Medium',
      description: 'Additional requirements for remote work and leave policies',
      actionRequired: 'Enhanced HR processes and documentation'
    },
    {
      area: 'Talent Acquisition',
      impact: 'Opportunity',
      magnitude: 'High',
      description: 'Remote work options improve talent pool access',
      actionRequired: 'Update recruitment strategies'
    },
    {
      area: 'Administrative Burden',
      impact: 'Increase',
      magnitude: 'Low-Medium',
      description: 'Additional documentation and reporting requirements',
      actionRequired: 'Process automation and staff training'
    }
  ]

  const actionItems = [
    {
      priority: 'Urgent',
      task: 'Update Minimum Wage Rates',
      deadline: 'January 31, 2025',
      owner: 'Payroll Manager',
      description: 'Implement 2025 minimum wage rates across all affected positions'
    },
    {
      priority: 'Urgent',
      task: 'Salary Compliance Review',
      deadline: 'February 15, 2025',
      owner: 'HR Director',
      description: 'Review all employee salaries against new minimum wage requirements'
    },
    {
      priority: 'High',
      task: 'Remote Work Policy Development',
      deadline: 'March 31, 2025',
      owner: 'HR Manager',
      description: 'Create comprehensive remote work policies and agreements'
    },
    {
      priority: 'High',
      task: 'Employment Contract Updates',
      deadline: 'April 30, 2025',
      owner: 'Legal Counsel',
      description: 'Update standard employment contracts with new provisions'
    },
    {
      priority: 'Medium',
      task: 'Manager Training Program',
      deadline: 'May 31, 2025',
      owner: 'Training Coordinator',
      description: 'Train managers on new labor law requirements and remote work management'
    },
    {
      priority: 'Medium',
      task: 'Compliance Audit',
      deadline: 'June 30, 2025',
      owner: 'Compliance Officer',
      description: 'Conduct comprehensive audit of labor law compliance'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Costa Rica Labor Law Updates 2024-2025
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Stay current with the latest changes to Costa Rican labor regulations, minimum wage updates, 
              remote work frameworks, and employment compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Updates Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">2024-2025 Key Updates Summary</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Critical changes affecting employers and employees in Costa Rica
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {keyUpdates2025.map((update, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-blue-900">{update.title}</h3>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        update.impact === 'High' ? 'bg-red-100 text-red-800' :
                        update.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {update.impact} Impact
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {update.date}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {update.category}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        update.status === 'Effective' ? 'bg-green-100 text-green-800' :
                        update.status === 'New' ? 'bg-purple-100 text-purple-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {update.status}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {update.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-xs text-gray-500 border-t pt-3">
                  <strong>Source:</strong> {update.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Minimum Wage Tables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">2025 Minimum Wage Tables by Sector</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Updated minimum wage rates effective January 1, 2025 (2.37% increase)
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Sector</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-900">Unskilled<br/><span className="font-normal">(Monthly)</span></th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-900">Semi-Skilled<br/><span className="font-normal">(Monthly)</span></th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-900">Skilled<br/><span className="font-normal">(Monthly)</span></th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-900">Daily Rate<br/><span className="font-normal">(Unskilled)</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {minimumWages2025.slice(0, -1).map((sector, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{sector.category}</td>
                      <td className="px-6 py-4 text-sm text-center font-semibold text-red-600">{sector.unskilled}</td>
                      <td className="px-6 py-4 text-sm text-center font-semibold text-yellow-600">{sector.semiskilled}</td>
                      <td className="px-6 py-4 text-sm text-center font-semibold text-green-600">{sector.skilled}</td>
                      <td className="px-6 py-4 text-sm text-center font-semibold text-blue-600">{sector.dailyUnskilled}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Professional Services Table */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-purple-900 mb-6">Professional & Educational Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 border border-purple-200">
                <h4 className="text-lg font-bold text-purple-900 mb-4">Bachelor's Degree Holders</h4>
                <div className="text-3xl font-bold text-purple-600 mb-2">₡653,427</div>
                <div className="text-purple-700 mb-2">Monthly Minimum</div>
                <div className="text-sm text-purple-600">Daily: ₡21,781</div>
                <div className="text-sm text-gray-600 mt-2">USD equivalent: ~$1,290/month</div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-purple-200">
                <h4 className="text-lg font-bold text-purple-900 mb-4">University Graduates</h4>
                <div className="text-3xl font-bold text-purple-600 mb-2">₡784,139</div>
                <div className="text-purple-700 mb-2">Monthly Minimum</div>
                <div className="text-sm text-purple-600">Daily: ₡26,138</div>
                <div className="text-sm text-gray-600 mt-2">USD equivalent: ~$1,550/month</div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">2025 Wage Update Details</h3>
                <ul className="text-yellow-800 space-y-1 text-sm">
                  <li>• Wages increased by 2.37% across all sectors effective January 1, 2025</li>
                  <li>• All figures shown are monthly amounts in Costa Rican colones</li>
                  <li>• Daily rates calculated based on 30-day month standard</li>
                  <li>• Employers must pay at least the minimum for applicable sector and skill level</li>
                  <li>• Source: National Wage Council (CNS) & Ministry of Labor and Social Security (MTSS)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Work Legal Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Remote Work Legal Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Updated regulations for telework, digital nomads, and hybrid work arrangements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {remoteWorkFramework.map((framework, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1h-6a1 1 0 01-1-1V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{framework.type}</h3>
                <p className="text-gray-600 mb-6">{framework.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-blue-800">Requirements:</h4>
                  {framework.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{req}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-xs text-gray-500 border-t pt-3">
                  <strong>Legal Basis:</strong> {framework.legalBasis}
                </div>
              </div>
            ))}
          </div>

          {/* Digital Nomad Visa Details */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Digital Nomad Visa Program Details</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-blue-800 mb-4">Eligibility Requirements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Minimum $3,000/month income (individual)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Minimum $4,000/month income (with dependents)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Health insurance coverage minimum $50,000</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Work exclusively for entities outside Costa Rica</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-blue-800 mb-4">Application Process</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">2-week application review period</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">90-day provisional status upon entry</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">In-person appointment in San José required</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">$100 USD application fee plus bank charges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Changes to Mandatory Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Mandatory Benefits Updates 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current requirements and recent changes to employee benefits
            </p>
          </div>

          <div className="space-y-8">
            {mandatoryBenefitsUpdates.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-green-900 mb-2">{benefit.benefit}</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">{benefit.rate}</div>
                    <div className="text-sm text-green-700">{benefit.deadline}</div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-green-800 mb-2">Calculation Method:</h4>
                    <p className="text-gray-700 mb-4">{benefit.calculation}</p>
                    <h4 className="font-semibold text-green-800 mb-2">2025 Updates:</h4>
                    <p className="text-gray-700">{benefit.updates}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Key Points:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Calculation unchanged</li>
                      <li>• Payment timing maintained</li>
                      <li>• Documentation requirements</li>
                      <li>• Compliance monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Permit Changes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Work Permit Changes for Foreigners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Updated requirements and processing times for foreign worker permits
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workPermitUpdates.map((permit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{permit.permitType}</h3>
                  <div className="text-purple-600 font-medium mb-1">{permit.duration}</div>
                  <div className="text-sm text-gray-600">{permit.processingTime}</div>
                </div>

                <div className="space-y-4 mb-6">
                  <h4 className="font-semibold text-blue-800">Requirements:</h4>
                  {permit.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{req}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">2024-2025 Updates:</h4>
                  <p className="text-purple-700 text-sm">{permit.updates}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employment Compliance Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Employment Compliance Checklist 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential compliance tasks for employers to meet new requirements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {complianceChecklist2025.map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 border border-red-200">
                <div className="flex items-center mb-6">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    section.priority === 'Critical' ? 'bg-red-200' :
                    section.priority === 'High' ? 'bg-yellow-200' : 'bg-blue-200'
                  }`}>
                    <span className={`font-bold text-sm ${
                      section.priority === 'Critical' ? 'text-red-800' :
                      section.priority === 'High' ? 'text-yellow-800' : 'text-blue-800'
                    }`}>
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900">{section.category}</h3>
                    <div className={`text-sm font-medium ${
                      section.priority === 'Critical' ? 'text-red-600' :
                      section.priority === 'High' ? 'text-yellow-600' : 'text-blue-600'
                    }`}>
                      {section.priority} Priority
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-red-200">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="text-sm text-red-700 font-medium">
                  Deadline: {section.deadline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Analysis for Businesses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Business Impact Analysis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How 2025 labor law changes affect your business operations
            </p>
          </div>

          <div className="space-y-6">
            {businessImpactAnalysis.map((impact, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{impact.area}</h3>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      impact.impact === 'Increase' ? 'bg-red-100 text-red-800' :
                      impact.impact === 'Opportunity' ? 'bg-green-100 text-green-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {impact.impact}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Impact Level</div>
                    <div className={`font-bold ${
                      impact.magnitude.includes('High') ? 'text-red-600' :
                      impact.magnitude.includes('Medium') ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      {impact.magnitude}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Description</div>
                    <p className="text-gray-700">{impact.description}</p>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Action Required</div>
                    <p className="text-blue-700 font-medium">{impact.actionRequired}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Implementation Timeline for New Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Phased approach to implementing 2025 labor law changes
            </p>
          </div>

          <div className="space-y-8">
            {implementationTimeline.map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">{phase.phase}</h3>
                    <p className="text-gray-600">Responsible: {phase.responsible}</p>
                  </div>
                </div>
                <div className="ml-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {phase.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{task}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {index < implementationTimeline.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-8 bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Items for Employers */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Action Items for Employers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prioritized tasks to ensure compliance with new labor law requirements
            </p>
          </div>

          <div className="space-y-6">
            {actionItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.priority === 'Urgent' ? 'bg-red-100 text-red-800' :
                      item.priority === 'High' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {item.priority}
                    </div>
                    <h3 className="text-lg font-bold text-blue-900">{item.task}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Due Date</div>
                    <div className="font-semibold text-gray-900">{item.deadline}</div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Owner</div>
                    <div className="font-medium text-gray-900">{item.owner}</div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="text-sm text-gray-600 mb-1">Description</div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Sources & Citations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Official Government Sources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Primary sources and citations for all labor law information
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Primary Government Sources</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Ministry of Labor and Social Security (MTSS)</h4>
                  <p className="text-gray-700 text-sm mb-2">Official labor regulations and compliance guidelines</p>
                  <div className="text-xs text-gray-500">Ministerio de Trabajo y Seguridad Social</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">National Wage Council (CNS)</h4>
                  <p className="text-gray-700 text-sm mb-2">Minimum wage determinations and sector classifications</p>
                  <div className="text-xs text-gray-500">Consejo Nacional de Salarios</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">CCSS (Social Security System)</h4>
                  <p className="text-gray-700 text-sm mb-2">Social security contributions and benefits administration</p>
                  <div className="text-xs text-gray-500">Caja Costarricense de Seguro Social</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-6">Legal Framework Sources</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Costa Rica Labor Code</h4>
                  <p className="text-gray-700 text-sm mb-2">Fundamental employment law provisions and worker rights</p>
                  <div className="text-xs text-gray-500">Código de Trabajo de Costa Rica</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Immigration & Visa Regulations</h4>
                  <p className="text-gray-700 text-sm mb-2">Work permit and digital nomad visa requirements</p>
                  <div className="text-xs text-gray-500">Dirección General de Migración y Extranjería</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Telework Legislation</h4>
                  <p className="text-gray-700 text-sm mb-2">Remote work framework and digital nomad programs</p>
                  <div className="text-xs text-gray-500">Work-from-Home Bill (2021) & MTSS Guidelines</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 rounded-xl p-8 border border-yellow-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-yellow-900 mb-2">Document Last Updated</h3>
              <p className="text-yellow-800">January 15, 2025</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-semibold text-yellow-900">Minimum Wage Data</div>
                <div className="text-yellow-700 text-sm">January 1, 2025</div>
                <div className="text-xs text-yellow-600">CNS Decree 2025</div>
              </div>
              <div>
                <div className="font-semibold text-yellow-900">Remote Work Regulations</div>
                <div className="text-yellow-700 text-sm">October 2024</div>
                <div className="text-xs text-yellow-600">MTSS Guidelines</div>
              </div>
              <div>
                <div className="font-semibold text-yellow-900">Benefits Updates</div>
                <div className="text-yellow-700 text-sm">December 2024</div>
                <div className="text-xs text-yellow-600">CCSS Directives</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Important Disclaimers</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-yellow-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Labor Laws Subject to Change</h3>
                  <p className="text-gray-700">
                    Costa Rican labor laws, minimum wages, and contribution rates are subject to periodic updates. 
                    Always verify current requirements with official government sources or qualified legal counsel before making business decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Professional Legal Advice Recommended</h3>
                  <p className="text-gray-700">
                    This guide provides general information only. For specific employment situations, complex compliance questions, 
                    or legal disputes, consult with qualified Costa Rican employment attorneys or HR specialists.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Translation and Documentation</h3>
                  <p className="text-gray-700">
                    All official documents, contracts, and legal filings must be in Spanish or accompanied by certified translations. 
                    This guide provides information in English for reference purposes only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Expert Help with Labor Law Compliance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our experienced HR and legal specialists help businesses navigate Costa Rica's evolving labor regulations, 
            ensure full compliance, and implement efficient HR systems that protect your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get Expert Assistance
            </Link>
            <Link
              href="/resources/employee-benefits"
              className="inline-flex items-center bg-transparent hover:bg-blue-800 text-white border-2 border-white hover:border-blue-300 px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              View Benefits Guide
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default LaborLawUpdatesPage