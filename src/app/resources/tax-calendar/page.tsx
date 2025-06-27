import Temp from '@/components/layout/Layout'
import Temp from 'next/link'

export const metadata = {
  title: '2025 Tax Calendar Costa Rica | Pacific Business & Accounting Group',
  description: 'Complete 2025 tax calendar for Costa Rica with all important deadlines including Corporate Income Tax, VAT declarations, Annual Tax Returns, and CCSS payments.',
  keywords: 'Costa Rica tax calendar 2025, tax deadlines, corporate income tax, VAT, CCSS, annual tax returns, business compliance',
}

const TaxCalendarPage = () => {
  const monthlyDeadlines = [
    {
      month: 'January 2025',
      deadlines: [
        {
          date: '15',
          description: 'VAT Declaration and Payment - December 2024',
          type: 'VAT',
          importance: 'high'
        },
        {
          date: '15',
          description: 'CCSS Employer Contributions - December 2024',
          type: 'CCSS',
          importance: 'high'
        },
        {
          date: '31',
          description: 'Fourth Quarter Municipal Tax Payment',
          type: 'Municipal',
          importance: 'medium'
        }
      ]
    },
    {
      month: 'February 2025',
      deadlines: [
        {
          date: '15',
          description: 'VAT Declaration and Payment - January 2025',
          type: 'VAT',
          importance: 'high'
        },
        {
          date: '15',
          description: 'CCSS Employer Contributions - January 2025',
          type: 'CCSS',
          importance: 'high'
        },
        {
          date: '28',
          description: 'Prepare Annual Tax Return Documentation',
          type: 'Preparation',
          importance: 'medium'
        }
      ]
    },
    {
      month: 'March 2025',
      deadlines: [
        {
          date: '15',
          description: 'Corporate Income Tax Return Filing (2024 tax year)',
          type: 'Corporate Tax',
          importance: 'critical'
        },
        {
          date: '15',
          description: 'Annual Tax Return Filing (2024 tax year)',
          type: 'Annual Return',
          importance: 'critical'
        },
        {
          date: '15',
          description: 'VAT Declaration and Payment - February 2025',
          type: 'VAT',
          importance: 'high'
        },
        {
          date: '15',
          description: 'CCSS Employer Contributions - February 2025',
          type: 'CCSS',
          importance: 'high'
        }
      ]
    },
    {
      month: 'April 2025',
      deadlines: [
        {
          date: '15',
          description: 'VAT Declaration and Payment - March 2025',
          type: 'VAT',
          importance: 'high'
        },
        {
          date: '15',
          description: 'CCSS Employer Contributions - March 2025',
          type: 'CCSS',
          importance: 'high'
        },
        {
          date: '30',
          description: 'First Quarter Municipal Tax Payment',
          type: 'Municipal',
          importance: 'medium'
        }
      ]
    },
    {
      month: 'May 2025',
      deadlines: [
        {
          date: '15',
          description: 'VAT Declaration and Payment - April 2025',
          type: 'VAT',
          importance: 'high'
        },
        {
          date: '15',
          description: 'CCSS Employer Contributions - April 2025',
          type: 'CCSS',
          importance: 'high'
        }
      ]
    },
    {
      month: 'June 2025',
      deadlines: [
        {
          date: '15',
          description: 'VAT Declaration and Payment - May 2025',
          type: 'VAT',
          importance: 'high'
        },
        {
          date: '15',
          description: 'CCSS Employer Contributions - May 2025',
          type: 'CCSS',
          importance: 'high'
        }
      ]
    },
    {
      month: 'July 2025',
      deadlines: [
        {
          date: '15',
          description: 'VAT Declaration and Payment - June 2025',
          type: 'VAT',
          importance: 'high'
        },
        {
          date: '15',
          description: 'CCSS Employer Contributions - June 2025',
          type: 'CCSS',
          importance: 'high'
        },
        {
          date: '31',
          description: 'Second Quarter Municipal Tax Payment',
          type: 'Municipal',
          importance: 'medium'
        }
      ]
    },
    {
      month: 'August 2025',
      deadlines: [
        {
          date: '15',
          description: 'VAT Declaration and Payment - July 2025',
          type: 'VAT',
          importance: 'high'
        },
        {
          date: '15',
          description: 'CCSS Employer Contributions - July 2025',
          type: 'CCSS',
          importance: 'high'
        }
      ]
    },
    {
      month: 'September 2025',
      deadlines: [
        {
          date: '15',
          description: 'VAT Declaration and Payment - August 2025',
          type: 'VAT',
          importance: 'high'
        },
        {
          date: '15',
          description: 'CCSS Employer Contributions - August 2025',
          type: 'CCSS',
          importance: 'high'
        }
      ]
    },
    {
      month: 'October 2025',
      deadlines: [
        {
          date: '15',
          description: 'VAT Declaration and Payment - September 2025',
          type: 'VAT',
          importance: 'high'
        },
        {
          date: '15',
          description: 'CCSS Employer Contributions - September 2025',
          type: 'CCSS',
          importance: 'high'
        },
        {
          date: '31',
          description: 'Third Quarter Municipal Tax Payment',
          type: 'Municipal',
          importance: 'medium'
        }
      ]
    },
    {
      month: 'November 2025',
      deadlines: [
        {
          date: '15',
          description: 'VAT Declaration and Payment - October 2025',
          type: 'VAT',
          importance: 'high'
        },
        {
          date: '15',
          description: 'CCSS Employer Contributions - October 2025',
          type: 'CCSS',
          importance: 'high'
        }
      ]
    },
    {
      month: 'December 2025',
      deadlines: [
        {
          date: '15',
          description: 'VAT Declaration and Payment - November 2025',
          type: 'VAT',
          importance: 'high'
        },
        {
          date: '15',
          description: 'CCSS Employer Contributions - November 2025',
          type: 'CCSS',
          importance: 'high'
        },
        {
          date: '31',
          description: 'Year-end Financial Statements Preparation',
          type: 'Preparation',
          importance: 'high'
        }
      ]
    }
  ]

  const criticalDeadlines = [
    {
      date: 'March 15, 2025',
      title: 'Corporate Income Tax Return',
      description: 'Annual corporate income tax return for 2024 tax year must be filed',
      penalty: 'Late filing penalties range from ₡12,500 to ₡750,000 depending on business size'
    },
    {
      date: 'March 15, 2025',
      title: 'Annual Tax Return (D-101)',
      description: 'Individual and corporate annual tax returns due for 2024 tax year',
      penalty: 'Penalties for late filing can reach up to 75% of tax owed'
    },
    {
      date: 'Monthly - 15th',
      title: 'VAT Declarations',
      description: 'Monthly VAT returns and payments due by the 15th of following month',
      penalty: 'Late payment penalty: 20% of tax owed plus interest'
    },
    {
      date: 'Monthly - 15th',
      title: 'CCSS Contributions',
      description: 'Social security contributions (26.67% employer + 10.67% employee)',
      penalty: 'Interest charges apply immediately, plus potential legal action'
    }
  ]

  const taxTypes = [
    {
      type: 'Corporate Income Tax',
      rate: '30%',
      description: 'Tax on corporate profits',
      frequency: 'Annual',
      dueDate: 'March 15 (following year)'
    },
    {
      type: 'VAT (IVA)',
      rate: '13%',
      description: 'Value Added Tax on goods and services',
      frequency: 'Monthly',
      dueDate: '15th of following month'
    },
    {
      type: 'CCSS Contributions',
      rate: '26.67% (employer)',
      description: 'Social security and healthcare contributions',
      frequency: 'Monthly',
      dueDate: '15th of following month'
    },
    {
      type: 'Municipal Tax',
      rate: '0.25%',
      description: 'Tax on gross revenue (varies by municipality)',
      frequency: 'Quarterly',
      dueDate: 'End of quarter month'
    }
  ]

  const downloadableResources = [
    {
      title: '2025 Complete Tax Calendar PDF',
      description: 'Printable calendar with all important tax dates',
      type: 'PDF',
      coming: true
    },
    {
      title: 'Monthly Tax Checklist',
      description: 'Monthly compliance checklist for businesses',
      type: 'PDF',
      coming: true
    },
    {
      title: 'Tax Penalty Reference Guide',
      description: 'Complete guide to penalties and interest rates',
      type: 'PDF',
      coming: true
    },
    {
      title: 'CCSS Contribution Calculator',
      description: 'Excel template for calculating payroll contributions',
      type: 'Excel',
      coming: true
    }
  ]

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Corporate Tax':
      case 'Annual Return':
        return 'bg-red-500'
      case 'VAT':
        return 'bg-blue-500'
      case 'CCSS':
        return 'bg-green-500'
      case 'Municipal':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Costa Rica Tax Calendar 2025
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Never miss another tax deadline. Your comprehensive guide to all Costa Rican tax obligations, 
              filing dates, and compliance requirements for 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#download"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Calendar
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Get Professional Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Deadlines Alert */}
      <section className="bg-red-50 border-b border-red-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full font-medium mb-4">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.93-.833-2.5 0L4.233 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Critical Deadlines
            </div>
            <h2 className="text-3xl font-bold text-red-900 mb-4">Don't Miss These Key Dates</h2>
            <p className="text-lg text-red-700">
              Missing these deadlines can result in significant penalties and legal complications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {criticalDeadlines.map((deadline, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-red-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-red-900 mb-1">{deadline.title}</h3>
                    <p className="text-red-600 font-medium">{deadline.date}</p>
                  </div>
                  <div className="text-red-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{deadline.description}</p>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="text-sm text-red-800">
                    <span className="font-medium">Penalty:</span> {deadline.penalty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Monthly Tax Calendar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete month-by-month breakdown of all tax obligations and deadlines
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {monthlyDeadlines.map((month, monthIndex) => (
              <div key={monthIndex} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-6 border-b border-gray-200 pb-3">
                  {month.month}
                </h3>
                <div className="space-y-4">
                  {month.deadlines.map((deadline, deadlineIndex) => (
                    <div key={deadlineIndex} className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="text-center min-w-[3rem]">
                          <div className="bg-blue-900 text-white text-lg font-bold rounded-lg px-3 py-2">
                            {deadline.date}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={`w-3 h-3 rounded-full ${getTypeColor(deadline.type)}`}></div>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getImportanceColor(deadline.importance)}`}>
                              {deadline.importance.toUpperCase()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-800 leading-relaxed">{deadline.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Types Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Costa Rica Tax Types & Rates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the different types of taxes and their rates in Costa Rica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {taxTypes.map((tax, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-blue-900">{tax.type}</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tax.rate}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{tax.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Frequency: <span className="font-medium text-gray-700">{tax.frequency}</span></span>
                  <span className="text-gray-500">Due: <span className="font-medium text-gray-700">{tax.dueDate}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section id="download" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Downloadable Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get our comprehensive tax planning tools and calendars to stay organized
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableResources.map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-3">{resource.description}</p>
                    <span className="inline-flex items-center bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {resource.type}
                    </span>
                  </div>
                </div>
                {resource.coming ? (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-yellow-800 text-sm">
                      <span className="font-medium">Coming Soon:</span> This resource is being prepared and will be available shortly.
                    </p>
                  </div>
                ) : (
                  <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Now
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Help CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Need Professional Tax Help?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't risk penalties and compliance issues. Our Costa Rica tax experts ensure 
              your business stays compliant and optimizes tax strategies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">100% Compliance</h3>
                <p className="text-blue-200">Never miss a deadline with our comprehensive tax management</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Tax Optimization</h3>
                <p className="text-blue-200">Strategic planning to minimize your tax burden legally</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 3v6m0 6v6m6-12h-6m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                <p className="text-blue-200">Local expertise with international standards</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
              >
                Schedule Free Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 012 0v4a1 1 0 01-2 0zM8 7v8a1 1 0 002 0V7a1 1 0 10-2 0z" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes & Disclaimers */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Important Notes & Disclaimers</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Data Sources</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Ministerio de Hacienda (Ministry of Finance)</li>
                  <li>• Dirección General de Tributación (DGT)</li>
                  <li>• Caja Costarricense de Seguro Social (CCSS)</li>
                  <li>• Código de Normas y Procedimientos Tributarios</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Disclaimer</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This calendar is provided for informational purposes only and should not be considered 
                  legal or tax advice. Tax laws and regulations may change. Always consult with a qualified 
                  tax professional for specific guidance regarding your business situation.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <span className="font-medium">Last Updated:</span> January 2025. We regularly update this calendar 
                to reflect the latest tax law changes and regulatory updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TaxCalendarPage