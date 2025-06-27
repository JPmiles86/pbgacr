import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata = {
  title: 'Costa Rica Payroll Tax Rates 2025 | Pacific Business & Accounting Group',
  description: 'Complete guide to Costa Rica payroll tax rates for 2025. Employer contributions 26.67%, employee deductions 10.67%, CCSS rates, payment deadlines, and compliance requirements.',
}

const PayrollRatesPage = () => {
  const employerContributions = [
    {
      category: 'CCSS - Caja Costarricense de Seguro Social',
      subcategories: [
        { name: 'Health Insurance (SEM)', rate: '9.25%', description: 'Mandatory health coverage' },
        { name: 'Invalidity, Old Age & Death (IVM)', rate: '4.92%', description: 'Pension and disability benefits' },
        { name: 'Family Allowances (AF)', rate: '5.25%', description: 'Family support benefits' },
        { name: 'Occupational Risks (RT)', rate: '1.00%', description: 'Workplace injury coverage' },
      ],
      total: '20.42%'
    },
    {
      category: 'National Institute of Learning (INA)',
      rate: '1.50%',
      description: 'Vocational training and education'
    },
    {
      category: 'Mixed Institute of Social Assistance (IMAS)',
      rate: '0.50%',
      description: 'Social assistance programs'
    },
    {
      category: 'National Children\'s Trust (PANI)',
      rate: '0.75%',
      description: 'Child welfare and protection'
    },
    {
      category: 'National Institute of Housing (INVU)',
      rate: '2.00%',
      description: 'Housing development programs'
    },
    {
      category: 'National Insurance Institute (INS)',
      rate: '1.50%',
      description: 'Workers\' compensation insurance'
    }
  ]

  const employeeDeductions = [
    {
      category: 'CCSS - Employee Portion',
      subcategories: [
        { name: 'Health Insurance (SEM)', rate: '5.50%', description: 'Employee health contribution' },
        { name: 'Invalidity, Old Age & Death (IVM)', rate: '2.67%', description: 'Employee pension contribution' },
      ],
      total: '8.17%'
    },
    {
      category: 'Workers\' Association (Asociación Solidarista)',
      rate: '2.00-3.00%',
      description: 'Optional employee association (if applicable)',
      optional: true
    },
    {
      category: 'Income Tax Withholding',
      rate: 'Variable',
      description: 'Based on tax brackets and exemptions',
      note: 'Applied to salaries exceeding ₡929,000 monthly'
    }
  ]

  const selfEmployedRates = [
    {
      category: 'Basic Coverage',
      rate: '10.67%',
      description: 'Minimum required coverage for self-employed'
    },
    {
      category: 'Full Coverage',
      rate: '18.62%',
      description: 'Complete coverage including all benefits'
    }
  ]

  const keyDeadlinesAndLimits = [
    {
      title: 'Payment Deadline',
      value: '15th of following month',
      description: 'All contributions must be paid by the 15th of the month following the payroll period'
    },
    {
      title: 'Contribution Ceiling',
      value: '₡2,318,389',
      description: 'Maximum monthly salary subject to contributions (2025)'
    },
    {
      title: 'Minimum Wage Base',
      value: '₡365,000+',
      description: 'Varies by sector and job category'
    },
    {
      title: 'Late Payment Penalties',
      value: '1% monthly',
      description: 'Interest charges on overdue contributions'
    }
  ]

  const complianceChecklist = [
    'Register all employees with CCSS within 8 days of hiring',
    'Submit monthly payroll reports (Planilla de Salarios) by the 15th',
    'Pay all contributions by the monthly deadline',
    'Maintain detailed payroll records for at least 4 years',
    'Issue salary certificates to employees',
    'Report salary changes and employee departures promptly',
    'Ensure minimum wage compliance by sector',
    'Calculate and withhold income tax correctly'
  ]

  const totalEmployerRate = employerContributions.reduce((total, contrib) => {
    if (contrib.subcategories) {
      return total + contrib.subcategories.reduce((subTotal, sub) => 
        subTotal + parseFloat(sub.rate.replace('%', '')), 0)
    }
    return total + parseFloat(contrib.rate.replace('%', ''))
  }, 0)

  const totalEmployeeRate = employeeDeductions
    .filter(deduction => !deduction.optional && deduction.rate !== 'Variable')
    .reduce((total, deduction) => {
      if (deduction.subcategories) {
        return total + deduction.subcategories.reduce((subTotal, sub) => 
          subTotal + parseFloat(sub.rate.replace('%', '')), 0)
      }
      return total + parseFloat(deduction.rate.replace('%', ''))
    }, 0)

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Costa Rica Payroll Tax Rates 2025
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Complete guide to employer contributions, employee deductions, and compliance requirements 
              for Costa Rican payroll taxes and social security contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{totalEmployerRate.toFixed(2)}%</h3>
              <p className="text-gray-600 font-medium">Total Employer Contributions</p>
              <p className="text-sm text-gray-500 mt-2">Paid by employer on top of salary</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{totalEmployeeRate.toFixed(2)}%</h3>
              <p className="text-gray-600 font-medium">Employee Deductions</p>
              <p className="text-sm text-gray-500 mt-2">Withheld from employee salary</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">15th</h3>
              <p className="text-gray-600 font-medium">Payment Deadline</p>
              <p className="text-sm text-gray-500 mt-2">Of the following month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Detailed Rate Breakdown</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding each component of Costa Rica's payroll tax system
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Employer Contributions */}
            <div className="space-y-6">
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Employer Contributions ({totalEmployerRate.toFixed(2)}%)
                </h3>
                <p className="text-red-700 mb-6">
                  Paid by the employer in addition to the employee's salary
                </p>

                <div className="space-y-6">
                  {employerContributions.map((contribution, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
                      {contribution.subcategories ? (
                        <div>
                          <h4 className="font-semibold text-red-900 mb-3">{contribution.category}</h4>
                          <div className="space-y-2">
                            {contribution.subcategories.map((sub, subIndex) => (
                              <div key={subIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                <div>
                                  <span className="text-sm font-medium text-gray-900">{sub.name}</span>
                                  <span className="text-xs text-gray-500 block">{sub.description}</span>
                                </div>
                                <span className="font-bold text-red-600">{sub.rate}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-red-200 flex justify-between items-center">
                            <span className="font-semibold text-red-900">Subtotal:</span>
                            <span className="text-lg font-bold text-red-600">{contribution.total}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-red-900">{contribution.category}</h4>
                            <p className="text-sm text-gray-600">{contribution.description}</p>
                          </div>
                          <span className="text-lg font-bold text-red-600">{contribution.rate}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Employee Deductions */}
            <div className="space-y-6">
              <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                <h3 className="text-2xl font-bold text-yellow-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  Employee Deductions
                </h3>
                <p className="text-yellow-700 mb-6">
                  Amounts withheld from the employee's gross salary
                </p>

                <div className="space-y-4">
                  {employeeDeductions.map((deduction, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-yellow-200">
                      {deduction.subcategories ? (
                        <div>
                          <h4 className="font-semibold text-yellow-900 mb-3">{deduction.category}</h4>
                          <div className="space-y-2">
                            {deduction.subcategories.map((sub, subIndex) => (
                              <div key={subIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                <div>
                                  <span className="text-sm font-medium text-gray-900">{sub.name}</span>
                                  <span className="text-xs text-gray-500 block">{sub.description}</span>
                                </div>
                                <span className="font-bold text-yellow-600">{sub.rate}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-yellow-200 flex justify-between items-center">
                            <span className="font-semibold text-yellow-900">Subtotal:</span>
                            <span className="text-lg font-bold text-yellow-600">{deduction.total}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-yellow-900 flex items-center">
                              {deduction.category}
                              {deduction.optional && (
                                <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Optional</span>
                              )}
                            </h4>
                            <p className="text-sm text-gray-600">{deduction.description}</p>
                            {deduction.note && (
                              <p className="text-xs text-gray-500 mt-1">{deduction.note}</p>
                            )}
                          </div>
                          <span className="text-lg font-bold text-yellow-600">{deduction.rate}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Employed Rates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Self-Employed Rates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Social security contribution rates for independent workers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {selfEmployedRates.map((rate, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{rate.rate}</h3>
                <h4 className="text-lg font-semibold text-green-700 mb-3">{rate.category}</h4>
                <p className="text-gray-600">{rate.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Deadlines and Limits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Key Deadlines & Limits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important dates and thresholds for payroll compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyDeadlinesAndLimits.map((item, index) => (
              <div key={index} className="bg-blue-50 rounded-xl p-6 border border-blue-100 text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-3">{item.value}</div>
                <p className="text-sm text-blue-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Compliance Checklist</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential steps to ensure payroll compliance in Costa Rica
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complianceChecklist.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Example Calculation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how payroll taxes apply to a typical salary
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Employee Salary: ₡1,000,000/month</h3>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-red-900 mb-2">Employer Costs:</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Base Salary</span>
                        <span>₡1,000,000</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Employer Contributions ({totalEmployerRate.toFixed(2)}%)</span>
                        <span>₡{(1000000 * totalEmployerRate / 100).toLocaleString()}</span>
                      </div>
                      <div className="border-t pt-1 font-semibold flex justify-between">
                        <span>Total Employer Cost</span>
                        <span>₡{(1000000 * (1 + totalEmployerRate / 100)).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Employee Take-Home</h3>
                
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Employee Deductions:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Gross Salary</span>
                      <span>₡1,000,000</span>
                    </div>
                    <div className="flex justify-between text-yellow-600">
                      <span>CCSS Deductions ({totalEmployeeRate.toFixed(2)}%)</span>
                      <span>-₡{(1000000 * totalEmployeeRate / 100).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-yellow-600">
                      <span>Income Tax*</span>
                      <span>-₡{(71000 * 0.10).toLocaleString()}</span>
                    </div>
                    <div className="border-t pt-1 font-semibold flex justify-between">
                      <span>Net Take-Home</span>
                      <span>₡{(1000000 - (1000000 * totalEmployeeRate / 100) - (71000 * 0.10)).toLocaleString()}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    *Income tax calculated on amount exceeding ₡929,000 monthly exemption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes & Disclaimers */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Important Notes & Disclaimers</h2>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 border border-yellow-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">Rate Changes</h3>
                  <p className="text-gray-700">
                    Payroll tax rates may change during the year. Always verify current rates with CCSS 
                    or consult with a qualified accountant before processing payroll.
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
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Professional Advice</h3>
                  <p className="text-gray-700">
                    This information is for general guidance only. For specific situations, complex payroll scenarios, 
                    or compliance questions, consult with a qualified Costa Rican CPA or payroll specialist.
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sources & References</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• CCSS (Caja Costarricense de Seguro Social) - Official rates and regulations</li>
                    <li>• Ministry of Labor and Social Security - Labor law requirements</li>
                    <li>• Directorate General of Taxation - Income tax withholding guidelines</li>
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
          <h2 className="text-3xl font-bold mb-6">Need Help with Payroll Compliance?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our experienced team can help you navigate Costa Rica's payroll requirements, 
            set up compliant payroll systems, and ensure you never miss a deadline.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Get Payroll Help
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center bg-transparent hover:bg-blue-800 text-white border-2 border-white hover:border-blue-300 px-8 py-4 rounded-lg font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PayrollRatesPage