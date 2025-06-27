import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata = {
  title: 'VAT Compliance Checklist Costa Rica 2025 | Pacific Business & Accounting Group',
  description: 'Complete VAT compliance checklist for Costa Rica 2025. Electronic invoicing, monthly filing requirements, tax rates, penalties, and step-by-step filing process.',
  keywords: 'VAT Costa Rica 2025, IVA compliance, electronic invoicing, monthly filing, tax rates, VAT registration, business compliance checklist',
}

const VATChecklistPage = () => {
  const vatRates = [
    {
      rate: '13%',
      type: 'Standard Rate',
      description: 'Most goods and services',
      examples: ['Professional services', 'Retail goods', 'Restaurant services', 'Construction services']
    },
    {
      rate: '10%',
      type: 'Reduced Rate',
      description: 'Specific services and products',
      examples: ['Some medical services', 'Educational materials', 'Certain agricultural products']
    },
    {
      rate: '4%',
      type: 'Reduced Rate',
      description: 'Essential goods and services',
      examples: ['Basic food items', 'Medicines', 'Medical equipment', 'Educational services']
    },
    {
      rate: '2%',
      type: 'Reduced Rate',
      description: 'Specific essential items',
      examples: ['Basic foodstuffs', 'Agricultural inputs', 'Some medical supplies']
    },
    {
      rate: '1%',
      type: 'Minimal Rate',
      description: 'Very specific essential goods',
      examples: ['Basic medicines', 'Essential food products', 'Educational materials']
    },
    {
      rate: '0.5%',
      type: 'Minimal Rate',
      description: 'Critical essential goods',
      examples: ['Life-saving medicines', 'Basic food staples']
    },
    {
      rate: '0%',
      type: 'Exempt',
      description: 'Tax-free goods and services',
      examples: ['Financial services', 'Insurance', 'Medical services', 'Educational services']
    }
  ]

  const registrationRequirements = [
    {
      title: 'No Registration Threshold',
      description: 'All businesses must register for VAT regardless of revenue size',
      icon: '🏢',
      required: true
    },
    {
      title: 'Business Registration',
      description: 'Valid business registration with Registro Nacional',
      icon: '📋',
      required: true
    },
    {
      title: 'Tax ID Number',
      description: 'Cedula Juridica or physical person identification',
      icon: '🆔',
      required: true
    },
    {
      title: 'Legal Representative',
      description: 'Designated legal representative for the business',
      icon: '👤',
      required: true
    },
    {
      title: 'Physical Address',
      description: 'Registered business address in Costa Rica',
      icon: '📍',
      required: true
    },
    {
      title: 'Bank Account',
      description: 'Costa Rican bank account for tax payments',
      icon: '🏦',
      required: true
    }
  ]

  const monthlyChecklist = [
    {
      category: 'Week 1 (1st-7th)',
      tasks: [
        {
          task: 'Collect all sales invoices from previous month',
          description: 'Gather all issued invoices, credit notes, and debit notes',
          priority: 'high'
        },
        {
          task: 'Collect all purchase invoices from previous month',
          description: 'Organize supplier invoices, import documents, expense receipts',
          priority: 'high'
        },
        {
          task: 'Verify electronic invoice compliance',
          description: 'Ensure all invoices are in proper XML format and transmitted to DGT',
          priority: 'critical'
        },
        {
          task: 'Review VAT rates applied',
          description: 'Check correct VAT rates were applied to all transactions',
          priority: 'high'
        }
      ]
    },
    {
      category: 'Week 2 (8th-14th)',
      tasks: [
        {
          task: 'Calculate VAT collected (output VAT)',
          description: 'Sum all VAT charged on sales and services provided',
          priority: 'critical'
        },
        {
          task: 'Calculate VAT paid (input VAT)',
          description: 'Sum all VAT paid on purchases and deductible expenses',
          priority: 'critical'
        },
        {
          task: 'Determine net VAT liability',
          description: 'Calculate amount owed or refund due (Output VAT - Input VAT)',
          priority: 'critical'
        },
        {
          task: 'Prepare VAT return (D-104)',
          description: 'Complete official VAT declaration form',
          priority: 'critical'
        }
      ]
    },
    {
      category: 'By 15th of Month',
      tasks: [
        {
          task: 'Submit VAT return electronically',
          description: 'File D-104 form through DGT online portal',
          priority: 'critical'
        },
        {
          task: 'Make VAT payment',
          description: 'Pay net VAT liability if applicable',
          priority: 'critical'
        },
        {
          task: 'Print and file confirmation receipts',
          description: 'Keep proof of filing and payment for records',
          priority: 'high'
        },
        {
          task: 'Update accounting records',
          description: 'Record VAT return and payment in accounting system',
          priority: 'medium'
        }
      ]
    }
  ]

  const electronicInvoicingRequirements = [
    {
      title: 'XML Format Mandatory',
      description: 'All invoices must be generated in XML format according to DGT specifications',
      details: [
        'Use certified invoicing software',
        'Include all required fields (tax ID, amounts, VAT breakdown)',
        'Apply digital signature',
        'Sequential numbering system'
      ]
    },
    {
      title: 'Real-time Transmission',
      description: 'Invoices must be transmitted to DGT within specified timeframes',
      details: [
        'Immediate transmission for amounts over ₡3,000,000',
        'Within 48 hours for smaller amounts',
        'Obtain DGT acceptance confirmation',
        'Provide invoice to customer only after DGT approval'
      ]
    },
    {
      title: 'Required Information',
      description: 'All invoices must contain mandatory information elements',
      details: [
        'Supplier and customer tax identification',
        'Invoice date and sequential number',
        'Description of goods/services',
        'Unit prices and quantities',
        'VAT rate and amount breakdown',
        'Total amounts in Costa Rican colones'
      ]
    },
    {
      title: 'System Requirements',
      description: 'Technical requirements for electronic invoicing compliance',
      details: [
        'Certified invoicing software or system',
        'Valid digital certificate for signing',
        'Reliable internet connection',
        'Backup and recovery procedures',
        'Regular software updates'
      ]
    }
  ]

  const recordKeepingObligations = [
    {
      category: 'Invoice Records',
      period: '5 years',
      requirements: [
        'All issued sales invoices and supporting documents',
        'All received purchase invoices and receipts',
        'Credit notes and debit notes',
        'Electronic invoice transmission confirmations'
      ]
    },
    {
      category: 'VAT Returns',
      period: '5 years',
      requirements: [
        'Monthly VAT return forms (D-104)',
        'Payment confirmations and receipts',
        'Supporting calculations and workpapers',
        'Correspondence with tax authorities'
      ]
    },
    {
      category: 'Accounting Records',
      period: '5 years',
      requirements: [
        'General ledger and subsidiary ledgers',
        'Trial balances and financial statements',
        'Bank statements and reconciliations',
        'VAT account reconciliations'
      ]
    },
    {
      category: 'Supporting Documents',
      period: '5 years',
      requirements: [
        'Contracts and agreements',
        'Import/export documents',
        'Inventory records and valuations',
        'Employee and payroll records (for service businesses)'
      ]
    }
  ]

  const commonPenalties = [
    {
      violation: 'Late VAT Return Filing',
      penalty: '50% of minimum wage (approximately ₡155,000)',
      howToAvoid: [
        'Set up monthly calendar reminders',
        'File by the 15th of each month',
        'Use electronic filing system',
        'Maintain backup filing procedures'
      ]
    },
    {
      violation: 'Late VAT Payment',
      penalty: '20% of tax owed plus monthly interest',
      howToAvoid: [
        'Pay simultaneously with filing',
        'Set up automatic bank transfers',
        'Maintain sufficient cash flow',
        'File even if unable to pay to avoid additional penalties'
      ]
    },
    {
      violation: 'Incorrect VAT Rate Application',
      penalty: 'Tax difference plus 50% penalty',
      howToAvoid: [
        'Maintain updated VAT rate table',
        'Review product/service classifications regularly',
        'Consult with tax advisor for complex items',
        'Implement internal review procedures'
      ]
    },
    {
      violation: 'Non-compliant Electronic Invoices',
      penalty: 'Up to ₡465,000 per violation',
      howToAvoid: [
        'Use certified invoicing software',
        'Ensure all required fields are completed',
        'Transmit invoices within required timeframes',
        'Maintain proper digital certificates'
      ]
    },
    {
      violation: 'Inadequate Record Keeping',
      penalty: '₡155,000 to ₡775,000',
      howToAvoid: [
        'Maintain organized filing system',
        'Keep all records for minimum 5 years',
        'Ensure records are easily accessible',
        'Implement document backup procedures'
      ]
    },
    {
      violation: 'Failure to Register for VAT',
      penalty: '100% of minimum wage (approximately ₡310,000)',
      howToAvoid: [
        'Register immediately upon starting business',
        'No revenue threshold exemption exists',
        'Complete registration process properly',
        'Obtain VAT certificate confirmation'
      ]
    }
  ]

  const filingProcess = [
    {
      step: 1,
      title: 'Prepare Monthly Records',
      description: 'Organize all invoices and supporting documents',
      details: [
        'Collect all sales invoices (XML format)',
        'Gather all purchase invoices and receipts',
        'Verify all electronic invoices were transmitted to DGT',
        'Ensure all invoices contain required information'
      ],
      timeframe: '1st week of month'
    },
    {
      step: 2,
      title: 'Calculate VAT Amounts',
      description: 'Determine VAT collected and VAT paid',
      details: [
        'Sum VAT charged on all sales (Output VAT)',
        'Sum VAT paid on all deductible purchases (Input VAT)',
        'Calculate net VAT liability (Output VAT - Input VAT)',
        'Identify any exempt or zero-rated transactions'
      ],
      timeframe: '2nd week of month'
    },
    {
      step: 3,
      title: 'Complete VAT Return (D-104)',
      description: 'Fill out the official VAT declaration form',
      details: [
        'Access DGT online portal (ATV system)',
        'Enter business identification information',
        'Input calculated VAT amounts in respective fields',
        'Review all entries for accuracy'
      ],
      timeframe: 'Before 15th of month'
    },
    {
      step: 4,
      title: 'Submit Electronic Return',
      description: 'File the VAT return through official channels',
      details: [
        'Submit form through DGT online portal',
        'Obtain filing confirmation number',
        'Print confirmation receipt for records',
        'Note any error messages or rejection notices'
      ],
      timeframe: 'By 15th of month'
    },
    {
      step: 5,
      title: 'Make VAT Payment',
      description: 'Pay the net VAT liability if applicable',
      details: [
        'Use DGT payment system or authorized banks',
        'Pay exact amount shown on filed return',
        'Obtain payment confirmation receipt',
        'Ensure payment is processed by due date'
      ],
      timeframe: 'By 15th of month'
    },
    {
      step: 6,
      title: 'Update Records and File Documents',
      description: 'Complete the monthly compliance cycle',
      details: [
        'Update accounting system with VAT return data',
        'File confirmation receipts with monthly records',
        'Reconcile VAT accounts in general ledger',
        'Prepare for next monthly cycle'
      ],
      timeframe: 'Immediately after filing'
    }
  ]

  const quickChecklistItems = [
    { item: 'All invoices in XML format and transmitted to DGT', critical: true },
    { item: 'VAT rates correctly applied to all transactions', critical: true },
    { item: 'All purchase invoices collected and verified', critical: true },
    { item: 'Monthly VAT calculation completed', critical: true },
    { item: 'D-104 form completed and reviewed', critical: true },
    { item: 'VAT return filed by 15th of month', critical: true },
    { item: 'VAT payment made (if applicable)', critical: true },
    { item: 'Filing and payment confirmations saved', critical: false },
    { item: 'Accounting records updated', critical: false },
    { item: 'Monthly files organized and stored', critical: false }
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              VAT Compliance Checklist Costa Rica 2025
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Complete guide to VAT compliance in Costa Rica. Electronic invoicing requirements, 
              monthly filing procedures, tax rates, and penalties - everything you need to stay compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#quick-checklist"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quick Checklist
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Get VAT Compliance Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Monthly Checklist */}
      <section id="quick-checklist" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Monthly VAT Compliance Quick Checklist</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use this checklist every month to ensure you meet all VAT compliance requirements
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 gap-4">
              {quickChecklistItems.map((item, index) => (
                <div key={index} className={`flex items-center p-4 rounded-lg border-2 ${item.critical ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'}`}>
                  <div className="flex-shrink-0 mr-4">
                    <div className={`w-6 h-6 rounded border-2 ${item.critical ? 'border-red-400' : 'border-gray-300'} flex items-center justify-center`}>
                      <svg className="w-4 h-4 text-green-600 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className={`font-medium ${item.critical ? 'text-red-900' : 'text-gray-900'}`}>
                      {item.item}
                    </p>
                    {item.critical && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-1">
                        CRITICAL
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VAT Registration Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">VAT Registration Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All businesses in Costa Rica must register for VAT regardless of revenue size
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {registrationRequirements.map((requirement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{requirement.icon}</div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{requirement.title}</h3>
                </div>
                <p className="text-gray-600 text-center">{requirement.description}</p>
                {requirement.required && (
                  <div className="mt-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      REQUIRED
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VAT Rates Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">VAT Rates by Product & Service Type</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Costa Rica has multiple VAT rates depending on the type of goods or services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {vatRates.map((rate, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-blue-900">{rate.rate}</span>
                    <h3 className="text-lg font-bold text-blue-900 mt-1">{rate.type}</h3>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    rate.rate === '13%' ? 'bg-blue-100 text-blue-800' :
                    rate.rate === '0%' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {rate.rate === '13%' ? 'Standard' : rate.rate === '0%' ? 'Exempt' : 'Reduced'}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{rate.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {rate.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Compliance Checklist */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Monthly Compliance Checklist</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step tasks to complete each month for VAT compliance
            </p>
          </div>

          <div className="space-y-8">
            {monthlyChecklist.map((week, weekIndex) => (
              <div key={weekIndex} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-blue-900 mb-6 border-b border-gray-200 pb-3">
                  {week.category}
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {week.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-gray-900 flex-1 pr-2">{task.task}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityColor(task.priority)}`}>
                          {task.priority.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{task.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electronic Invoicing Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Electronic Invoicing Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All invoices must be electronic (XML format) and transmitted to DGT
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {electronicInvoicingRequirements.map((requirement, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">{requirement.title}</h3>
                <p className="text-gray-600 mb-4">{requirement.description}</p>
                <ul className="space-y-2">
                  {requirement.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Record Keeping Obligations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Record Keeping Obligations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintain organized records for minimum 5 years for tax compliance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recordKeepingObligations.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-blue-900">{category.category}</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {category.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {category.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Penalties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Common Penalties & How to Avoid Them</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding penalties helps you maintain compliance and avoid costly mistakes
            </p>
          </div>

          <div className="space-y-6">
            {commonPenalties.map((penalty, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-red-900 mb-2">{penalty.violation}</h3>
                    <p className="text-red-700 font-medium">{penalty.penalty}</p>
                  </div>
                  <div className="text-red-500">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.93-.833-2.5 0L4.233 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-3">How to Avoid:</h4>
                  <ul className="space-y-2">
                    {penalty.howToAvoid.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-green-800">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Filing Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Step-by-Step VAT Filing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete guide to filing your monthly VAT return (Form D-104)
            </p>
          </div>

          <div className="space-y-8">
            {filingProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium ml-4">
                        {step.timeframe}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Help CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Need Professional VAT Compliance Help?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Don't risk penalties and compliance issues. Our Costa Rica VAT experts ensure 
              your business meets all electronic invoicing and filing requirements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">100% VAT Compliance</h3>
                <p className="text-blue-200">Electronic invoicing, monthly filing, and record keeping</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Penalty Avoidance</h3>
                <p className="text-blue-200">Prevent costly mistakes and late filing penalties</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Electronic Invoicing Setup</h3>
                <p className="text-blue-200">Complete XML invoicing system implementation</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
              >
                Get VAT Compliance Help
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
                  <li>• Dirección General de Tributación (DGT)</li>
                  <li>• Ministerio de Hacienda (Ministry of Finance)</li>
                  <li>• Código de Normas y Procedimientos Tributarios</li>
                  <li>• Ley del Impuesto General sobre las Ventas</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Disclaimer</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This checklist is provided for informational purposes only and should not be considered 
                  legal or tax advice. VAT laws and regulations may change. Always consult with a qualified 
                  tax professional for specific guidance regarding your business VAT obligations.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <span className="font-medium">Last Updated:</span> January 2025. We regularly update this checklist 
                to reflect the latest VAT law changes and regulatory updates from DGT.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default VATChecklistPage