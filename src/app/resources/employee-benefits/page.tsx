import Temp from '@/components/layout/Layout'
import Temp from 'next/link'

export const metadata = {
  title: 'Costa Rica Employee Benefits Guide 2025 | Pacific Business & Accounting Group',
  description: 'Complete guide to mandatory and optional employee benefits in Costa Rica 2025. 13th month salary, vacation pay, severance calculations, CCSS contributions, maternity leave, and compliance requirements.',
}

const EmployeeBenefitsPage = () => {
  const mandatoryBenefits = [
    {
      title: '13th Month Salary (Aguinaldo)',
      calculation: 'Monthly salary ÷ 12 × months worked',
      paymentDate: 'December 20th (or pro-rated upon termination)',
      details: [
        'Equivalent to one month\'s salary for full year employment',
        'Pro-rated based on months worked (minimum 1 month)',
        'Based on average salary of last 12 months',
        'Must be paid even if employee leaves during the year'
      ],
      example: 'Employee earning ₡600,000/month = ₡600,000 aguinaldo'
    },
    {
      title: 'Vacation Pay (Vacaciones)',
      calculation: '2 weeks minimum per year (50 weeks worked = 2 weeks vacation)',
      paymentDate: 'Before vacation period or upon termination',
      details: [
        'Minimum 2 weeks after 50 weeks of continuous work',
        'Must be taken within 12 months after earning',
        'Cannot be waived or exchanged for money while employed',
        'Paid at current salary rate when taken'
      ],
      example: 'Employee earning ₡600,000/month = ₡300,000 vacation pay (2 weeks)'
    },
    {
      title: 'Severance Pay (Cesantía)',
      calculation: 'Varies by length of service and reason for termination',
      paymentDate: 'Upon termination (unjustified dismissal)',
      details: [
        '3+ months to 6 months: 20 days salary',
        '6+ months to 1 year: 30 days salary',
        '1+ year to 3 years: 20 days per year worked',
        '3+ years to 6 years: 21 days per year worked',
        '6+ years to 9 years: 22 days per year worked',
        '9+ years: 23 days per year worked'
      ],
      example: 'Employee with 2 years service = 40 days salary (20 days × 2 years)'
    },
    {
      title: 'Notice Period (Preaviso)',
      calculation: 'Based on length of service',
      paymentDate: 'If notice not given, paid with final settlement',
      details: [
        '3+ months to 6 months: 1 week notice',
        '6+ months to 1 year: 2 weeks notice',
        '1+ year: 1 month notice',
        'Can be worked or paid in lieu',
        'Required for both employer and employee terminations'
      ],
      example: 'Employee with 2 years service = 1 month notice period'
    }
  ]

  const ccssContributions = [
    {
      type: 'Employer Contributions',
      total: '26.67%',
      color: 'red',
      details: [
        { name: 'Health Insurance (SEM)', rate: '9.25%', description: 'Medical coverage and benefits' },
        { name: 'Invalidity, Old Age & Death (IVM)', rate: '4.92%', description: 'Pension and disability insurance' },
        { name: 'Family Allowances (AF)', rate: '5.25%', description: 'Family support benefits' },
        { name: 'Occupational Risks (RT)', rate: '1.00%', description: 'Workplace injury coverage' },
        { name: 'National Learning Institute (INA)', rate: '1.50%', description: 'Vocational training programs' },
        { name: 'Mixed Institute Social Assistance (IMAS)', rate: '0.50%', description: 'Social assistance programs' },
        { name: 'National Children\'s Trust (PANI)', rate: '0.75%', description: 'Child welfare programs' },
        { name: 'National Housing Institute (INVU)', rate: '2.00%', description: 'Housing development programs' },
        { name: 'National Insurance Institute (INS)', rate: '1.50%', description: 'Workers\' compensation insurance' }
      ]
    },
    {
      type: 'Employee Deductions',
      total: '10.67%',
      color: 'yellow',
      details: [
        { name: 'Health Insurance (SEM)', rate: '5.50%', description: 'Employee health contribution' },
        { name: 'Invalidity, Old Age & Death (IVM)', rate: '2.67%', description: 'Employee pension contribution' },
        { name: 'Bank Popular', rate: '2.50%', description: 'Workers\' development bank contribution' }
      ]
    }
  ]

  const workingConditions = [
    {
      title: 'Standard Work Week',
      details: [
        'Maximum 48 hours per week (8 hours/day, 6 days)',
        'Maximum 8 hours per day for daytime work',
        'Maximum 6 hours per day for nighttime work (10 PM - 6 AM)',
        'Overtime paid at 150% of regular rate',
        'Sunday work requires 150% premium pay'
      ]
    },
    {
      title: 'Rest Periods & Breaks',
      details: [
        'Minimum 1 hour lunch break for 8+ hour workdays',
        'Weekly rest: minimum 24 consecutive hours (usually Sunday)',
        'Public holidays: 9 official holidays per year',
        'Employer can designate additional rest days'
      ]
    }
  ]

  const maternityPaternityLeave = [
    {
      title: 'Maternity Leave',
      duration: '4 months (120 days)',
      payment: 'Paid by CCSS (Social Security)',
      details: [
        '1 month before due date + 3 months after birth',
        'Can extend pre-birth leave if medically necessary',
        'Job protection during leave period',
        'Breastfeeding breaks: 15 minutes every 3 hours for 10 months',
        'Cannot be dismissed during pregnancy or 6 months after return'
      ]
    },
    {
      title: 'Paternity Leave',
      duration: '8 days',
      payment: 'Paid by employer',
      details: [
        'Must be taken within first month of birth',
        'Can be extended if complications arise',
        'Applies to biological and adoptive fathers',
        'Additional unpaid leave may be negotiated'
      ]
    }
  ]

  const minimumWagesBySector = [
    {
      sector: 'Domestic Workers',
      skilled: '₡365,000',
      semiskilled: '₡350,000',
      unskilled: '₡335,000'
    },
    {
      sector: 'General Services',
      skilled: '₡380,000',
      semiskilled: '₡365,000',
      unskilled: '₡350,000'
    },
    {
      sector: 'Agriculture & Livestock',
      skilled: '₡365,000',
      semiskilled: '₡350,000',
      unskilled: '₡335,000'
    },
    {
      sector: 'Commerce & Services',
      skilled: '₡400,000',
      semiskilled: '₡380,000',
      unskilled: '₡365,000'
    },
    {
      sector: 'Manufacturing',
      skilled: '₡420,000',
      semiskilled: '₡400,000',
      unskilled: '₡380,000'
    },
    {
      sector: 'Construction',
      skilled: '₡450,000',
      semiskilled: '₡420,000',
      unskilled: '₡400,000'
    }
  ]

  const sickLeavePolicy = [
    {
      duration: 'First 3 days',
      payment: 'Employer pays 50% of salary',
      requirements: 'Doctor\'s certificate required'
    },
    {
      duration: 'Days 4 and beyond',
      payment: 'CCSS pays 60% of salary',
      requirements: 'CCSS medical evaluation required'
    }
  ]

  const optionalBenefits = [
    {
      title: 'Transportation Allowance',
      description: 'Non-taxable if reasonable and documented'
    },
    {
      title: 'Meal Allowance',
      description: 'Up to ₡53,000/month tax-free (2025 limit)'
    },
    {
      title: 'Education Allowance',
      description: 'Non-taxable if for job-related education'
    },
    {
      title: 'Life Insurance',
      description: 'Private life insurance premiums'
    },
    {
      title: 'Private Health Insurance',
      description: 'Supplemental to mandatory CCSS coverage'
    },
    {
      title: 'Profit Sharing',
      description: 'Discretionary bonus payments'
    }
  ]

  const complianceChecklist = [
    {
      category: 'Employee Registration',
      items: [
        'Register employee with CCSS within 8 days of hiring',
        'Obtain work permit for foreign employees',
        'Complete employment contract in writing',
        'Register with Ministry of Labor if required'
      ]
    },
    {
      category: 'Payroll Obligations',
      items: [
        'Pay all CCSS contributions by 15th of following month',
        'Submit monthly payroll reports (Planilla)',
        'Withhold and remit income taxes',
        'Maintain detailed payroll records'
      ]
    },
    {
      category: 'Benefits Administration',
      items: [
        'Calculate and pay 13th month salary by December 20th',
        'Track vacation accrual and ensure employees take leave',
        'Calculate severance and notice pay upon termination',
        'Provide required certificates and documentation'
      ]
    },
    {
      category: 'Record Keeping',
      items: [
        'Maintain employment files for minimum 4 years',
        'Keep records of hours worked and overtime',
        'Document disciplinary actions and performance issues',
        'Store payroll records and tax withholdings'
      ]
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Costa Rica Employee Benefits Guide 2025
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Complete guide to mandatory and optional employee benefits in Costa Rica. 
              Understand your obligations as an employer and your rights as an employee.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Key Benefits Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential employee benefits and contribution rates in Costa Rica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">26.67%</h3>
              <p className="text-gray-600 font-medium">Employer CCSS</p>
              <p className="text-sm text-gray-500 mt-1">Total contributions</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">10.67%</h3>
              <p className="text-gray-600 font-medium">Employee CCSS</p>
              <p className="text-sm text-gray-500 mt-1">Deducted from salary</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">48</h3>
              <p className="text-gray-600 font-medium">Max Hours/Week</p>
              <p className="text-sm text-gray-500 mt-1">Standard work limit</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">4</h3>
              <p className="text-gray-600 font-medium">Months</p>
              <p className="text-sm text-gray-500 mt-1">Maternity leave</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mandatory Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Mandatory Employee Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Benefits required by Costa Rican labor law for all employees
            </p>
          </div>

          <div className="space-y-8">
            {mandatoryBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">{benefit.title}</h3>
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2">Calculation Method:</h4>
                        <p className="text-gray-700">{benefit.calculation}</p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2">Payment Date:</h4>
                        <p className="text-gray-700">{benefit.paymentDate}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-4">Key Details:</h4>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    {benefit.example && (
                      <div className="mt-4 bg-white rounded-lg p-3 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 text-sm mb-1">Example:</h5>
                        <p className="text-gray-700 text-sm">{benefit.example}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CCSS Contributions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">CCSS Social Security Contributions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of mandatory social security contributions and coverage
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {ccssContributions.map((contrib, index) => (
              <div key={index} className={`bg-${contrib.color}-50 rounded-xl p-8 border border-${contrib.color}-200`}>
                <h3 className={`text-2xl font-bold text-${contrib.color}-900 mb-6 flex items-center`}>
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {contrib.type} ({contrib.total})
                </h3>

                <div className="space-y-4">
                  {contrib.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className={`font-semibold text-${contrib.color}-900 mb-1`}>{detail.name}</h4>
                          <p className="text-gray-600 text-sm">{detail.description}</p>
                        </div>
                        <span className={`text-lg font-bold text-${contrib.color}-600 ml-4`}>{detail.rate}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`mt-6 pt-4 border-t border-${contrib.color}-200`}>
                  <div className="flex justify-between items-center">
                    <span className={`font-bold text-${contrib.color}-900 text-lg`}>Total Rate:</span>
                    <span className={`text-2xl font-bold text-${contrib.color}-600`}>{contrib.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maternity and Paternity Leave */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Maternity & Paternity Leave</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leave entitlements and job protection for new parents
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {maternityPaternityLeave.map((leave, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 border border-pink-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-pink-900 mb-2">{leave.title}</h3>
                  <div className="text-3xl font-bold text-pink-600 mb-1">{leave.duration}</div>
                  <p className="text-pink-700 font-medium">{leave.payment}</p>
                </div>

                <div className="space-y-3">
                  {leave.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Conditions & Sick Leave */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Working Conditions & Sick Leave</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Work hour limits, rest periods, and sick leave policies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {workingConditions.map((condition, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-blue-900 mb-6">{condition.title}</h3>
                <ul className="space-y-3">
                  {condition.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sick Leave Policy */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Sick Leave Policy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sickLeavePolicy.map((policy, index) => (
                <div key={index} className="bg-orange-50 rounded-lg p-6 border border-orange-200 text-center">
                  <h4 className="text-lg font-bold text-orange-900 mb-3">{policy.duration}</h4>
                  <div className="text-2xl font-bold text-orange-600 mb-3">{policy.payment}</div>
                  <p className="text-orange-700">{policy.requirements}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Minimum Wages by Sector */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Minimum Wages by Sector 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current minimum wage rates by industry and skill level
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Sector</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-900">Skilled</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-900">Semi-Skilled</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-900">Unskilled</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {minimumWagesBySector.map((sector, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{sector.sector}</td>
                      <td className="px-6 py-4 text-sm text-center font-semibold text-green-600">{sector.skilled}</td>
                      <td className="px-6 py-4 text-sm text-center font-semibold text-blue-600">{sector.semiskilled}</td>
                      <td className="px-6 py-4 text-sm text-center font-semibold text-orange-600">{sector.unskilled}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Notes</h3>
                <ul className="text-yellow-800 space-y-1 text-sm">
                  <li>• Minimum wages are adjusted periodically by the National Wage Council</li>
                  <li>• All figures are monthly amounts in Costa Rican colones</li>
                  <li>• Employers must pay at least the minimum wage for the applicable sector and skill level</li>
                  <li>• Skill levels are determined by job requirements and employee qualifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Optional Employee Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional benefits employers can offer to attract and retain talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optionalBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Compliance Checklist for Employers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential steps to ensure full compliance with Costa Rican employment law
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {complianceChecklist.map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-800 font-bold text-sm">{index + 1}</span>
                  </div>
                  {section.category}
                </h3>
                
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3 bg-white rounded-lg p-3 border border-blue-200">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deadlines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Important Deadlines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key dates every employer must remember
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">15th</h3>
              <p className="text-gray-600 font-medium">CCSS Payments</p>
              <p className="text-sm text-gray-500 mt-2">Monthly contributions due</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Dec 20</h3>
              <p className="text-gray-600 font-medium">13th Month Salary</p>
              <p className="text-sm text-gray-500 mt-2">Aguinaldo payment deadline</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">8 Days</h3>
              <p className="text-gray-600 font-medium">CCSS Registration</p>
              <p className="text-sm text-gray-500 mt-2">New employee registration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Complete Cost Example</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Total employment cost breakdown for a typical employee
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Employee Salary: ₡800,000/month</h3>
              <p className="text-blue-700">Full annual cost breakdown including all mandatory benefits</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Monthly Costs */}
              <div className="bg-white rounded-xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Monthly Costs</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Base Salary</span>
                    <span className="font-semibold">₡800,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-red-600">Employer CCSS (26.67%)</span>
                    <span className="font-semibold text-red-600">₡213,360</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-yellow-600">Employee CCSS Deduction (10.67%)</span>
                    <span className="font-semibold text-yellow-600">-₡85,360</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t-2 border-blue-200 pt-3">
                    <span className="font-bold text-blue-900">Total Monthly Cost to Employer</span>
                    <span className="font-bold text-blue-900 text-lg">₡1,013,360</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-bold text-green-700">Employee Net Take-Home</span>
                    <span className="font-bold text-green-700 text-lg">₡714,640</span>
                  </div>
                </div>
              </div>

              {/* Annual Benefits */}
              <div className="bg-white rounded-xl p-6 border border-blue-200">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Additional Annual Benefits</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">13th Month Salary</span>
                    <span className="font-semibold">₡800,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">Vacation Pay (2 weeks)</span>
                    <span className="font-semibold">₡400,000</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">CCSS on 13th Month</span>
                    <span className="font-semibold">₡213,360</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-t-2 border-blue-200 pt-3">
                    <span className="font-bold text-blue-900">Total Annual Employment Cost</span>
                    <span className="font-bold text-blue-900 text-lg">₡13,573,680</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Cost per employee:</strong> Approximately 69.7% more than base salary when including all mandatory contributions and benefits.
                  </p>
                </div>
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
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Legal Requirements May Change</h3>
                  <p className="text-gray-700">
                    Employment laws, contribution rates, and minimum wages are subject to change. 
                    Always verify current requirements with official government sources or qualified legal counsel.
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
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Professional Advice Recommended</h3>
                  <p className="text-gray-700">
                    This guide provides general information only. For specific situations, complex employment scenarios, 
                    or compliance questions, consult with a qualified Costa Rican employment attorney or HR specialist.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sources & Last Updated</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• CCSS (Caja Costarricense de Seguro Social) - Official contribution rates</li>
                    <li>• Ministry of Labor and Social Security - Employment regulations</li>
                    <li>• National Wage Council - Minimum wage decrees</li>
                    <li>• Labor Code of Costa Rica - Legal requirements</li>
                    <li>• Last updated: January 2025</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Help with Employee Benefits & Compliance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our experienced HR and payroll specialists can help you navigate Costa Rica's employment requirements, 
            ensure full compliance, and set up efficient benefit administration systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get HR Assistance
            </Link>
            <Link
              href="/resources/payroll-rates"
              className="inline-flex items-center bg-transparent hover:bg-blue-800 text-white border-2 border-white hover:border-blue-300 px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              View Payroll Rates
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default EmployeeBenefitsPage