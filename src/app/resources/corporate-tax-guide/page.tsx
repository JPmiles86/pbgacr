import Layout from '@/components/layout/Layout'
import Link from 'next/link'

export const metadata = {
  title: 'Costa Rica Corporate Tax Guide 2025 | Pacific Business & Accounting Group',
  description: 'Complete guide to Costa Rica corporate income tax 2025. Progressive rates for smaller companies, 30% flat rate for large companies, special incentives, territorial taxation, and compliance requirements.',
  keywords: 'Costa Rica corporate tax 2025, corporate income tax rates, territorial taxation, tax incentives, micro business tax, filing deadline March 15, corporate tax compliance',
}

const CorporateTaxGuidePage = () => {
  const taxRateStructure = [
    {
      category: 'Micro Businesses',
      description: 'First 3 years of operation',
      rate: '0%',
      conditions: 'Annual gross income ≤ ₡119 million',
      details: 'Complete tax exemption for qualifying micro businesses during their first three years of operation'
    },
    {
      category: 'Small Companies - Bracket 1',
      description: 'First ₡5 million of taxable income',
      rate: '5%',
      conditions: 'Annual gross income ≤ ₡119 million',
      details: 'Lowest rate applied to the first portion of taxable income'
    },
    {
      category: 'Small Companies - Bracket 2',
      description: 'Next ₡5 million of taxable income',
      rate: '10%',
      conditions: 'Annual gross income ≤ ₡119 million',
      details: 'Applied to taxable income from ₡5M to ₡10M'
    },
    {
      category: 'Small Companies - Bracket 3',
      description: 'Next ₡5 million of taxable income',
      rate: '15%',
      conditions: 'Annual gross income ≤ ₡119 million',
      details: 'Applied to taxable income from ₡10M to ₡15M'
    },
    {
      category: 'Small Companies - Bracket 4',
      description: 'Remaining taxable income',
      rate: '20%',
      conditions: 'Annual gross income ≤ ₡119 million',
      details: 'Applied to all taxable income above ₡15M'
    },
    {
      category: 'Large Companies',
      description: 'All taxable income',
      rate: '30%',
      conditions: 'Annual gross income > ₡119 million',
      details: 'Flat rate applied to all taxable income for large companies'
    }
  ]

  const territorialTaxationPrinciples = [
    {
      title: 'Costa Rican Source Income',
      description: 'Income generated within Costa Rica is subject to corporate income tax',
      examples: ['Sales within Costa Rica', 'Services provided in Costa Rica', 'Rental income from Costa Rican properties', 'Interest from Costa Rican banks']
    },
    {
      title: 'Foreign Source Income',
      description: 'Income generated outside Costa Rica is generally not subject to Costa Rican corporate tax',
      examples: ['Export sales FOB', 'Services provided abroad', 'Foreign investment income', 'Royalties from foreign use of IP']
    },
    {
      title: 'Mixed Source Income',
      description: 'Income with both Costa Rican and foreign components requires careful allocation',
      examples: ['International shipping', 'Cross-border services', 'Manufacturing for export', 'International consulting']
    }
  ]

  const deductionsAndIncentives = [
    {
      category: 'Standard Business Deductions',
      items: [
        'Operating expenses directly related to business',
        'Employee salaries and benefits',
        'Social security contributions',
        'Professional services (legal, accounting)',
        'Office rent and utilities',
        'Depreciation of business assets',
        'Marketing and advertising expenses',
        'Business insurance premiums'
      ]
    },
    {
      category: 'Special Deductions',
      items: [
        'Research and development expenses (150% deduction)',
        'Training and education expenses (200% deduction)',
        'Environmental protection investments',
        'Accessibility improvements for disabled persons',
        'Donations to approved entities (up to 10% of net income)',
        'Bad debt provisions (with proper documentation)'
      ]
    },
    {
      category: 'Export and Free Zone Incentives',
      items: [
        'Free zone companies: 0% corporate tax for first 8 years',
        'Export companies: Various tax credits and exemptions',
        'Tourism sector: Special depreciation rates',
        'Renewable energy projects: Accelerated depreciation',
        'Technology companies: R&D tax credits'
      ]
    }
  ]

  const complianceRequirements = [
    {
      title: 'Annual Tax Return Filing',
      deadline: 'March 15',
      description: 'Corporate income tax return (Form D-101) must be filed by March 15 of the following year',
      requirements: [
        'Audited financial statements (for companies above certain thresholds)',
        'Detailed income and expense schedules',
        'Transfer pricing documentation (if applicable)',
        'Supporting documentation for all deductions'
      ]
    },
    {
      title: 'Quarterly Advance Payments',
      deadline: 'Quarterly - 15th of month following quarter',
      description: 'Companies must make quarterly advance tax payments based on prior year tax or current year estimates',
      requirements: [
        'Calculate based on 25% of prior year tax liability',
        'Adjust for estimated current year income',
        'File quarterly payment forms',
        'Maintain cash flow for quarterly payments'
      ]
    },
    {
      title: 'Books and Records',
      deadline: 'Ongoing',
      description: 'Maintain proper accounting records and supporting documentation',
      requirements: [
        'General ledger with daily transactions',
        'Sales and purchase registers',
        'Inventory records (if applicable)',
        'Bank reconciliations',
        'All invoices and receipts',
        'Payroll records and social security payments'
      ]
    }
  ]

  const penalties = [
    {
      violation: 'Late Filing of Tax Return',
      penalty: '₡12,500 - ₡750,000',
      description: 'Penalty varies based on company size and delay period. Additional interest charges apply.'
    },
    {
      violation: 'Late Payment of Tax',
      penalty: '20% + interest',
      description: 'Immediate 20% penalty plus monthly interest charges (current rate ~15% annually)'
    },
    {
      violation: 'Failure to Maintain Books',
      penalty: '₡150,000 - ₡7.5 million',
      description: 'Penalties for inadequate record keeping or failure to provide books to tax authorities'
    },
    {
      violation: 'Tax Evasion',
      penalty: '50-100% of tax + criminal charges',
      description: 'Severe penalties including potential imprisonment for intentional tax evasion'
    },
    {
      violation: 'Incorrect Transfer Pricing',
      penalty: '100% of additional tax',
      description: 'Penalty for not following arm&apos;s length principle in related party transactions'
    }
  ]

  const strategicTaxTips = [
    {
      title: 'Take Advantage of Progressive Rates',
      tip: 'Structure your business to benefit from lower progressive rates if your gross income is under ₡119 million',
      benefit: 'Can save significant tax compared to 30% flat rate'
    },
    {
      title: 'Maximize R&D Deductions',
      tip: 'Document research and development activities to claim 150% deduction',
      benefit: 'Every ₡1 spent on R&D reduces taxable income by ₡1.50'
    },
    {
      title: 'Consider Free Zone Status',
      tip: 'Evaluate eligibility for free zone benefits if you export products or services',
      benefit: '0% corporate tax for first 8 years, then reduced rates'
    },
    {
      title: 'Optimize Territorial Tax Benefits',
      tip: 'Structure operations to maximize foreign-source income classification',
      benefit: 'Foreign-source income is not subject to Costa Rican corporate tax'
    },
    {
      title: 'Plan Quarterly Payments',
      tip: 'Make strategic quarterly payments to avoid penalties and manage cash flow',
      benefit: 'Avoid underpayment penalties and spread tax burden throughout the year'
    },
    {
      title: 'Timing of Income and Expenses',
      tip: 'Consider timing of revenue recognition and expense payments for tax optimization',
      benefit: 'Can shift income between tax years to manage tax brackets'
    }
  ]

  const professionalHelpIndicators = [
    {
      situation: 'International Transactions',
      description: 'If your company has related party transactions, transfer pricing issues, or significant international operations'
    },
    {
      situation: 'Complex Business Structure',
      description: 'Multiple entities, partnerships, or complex ownership structures requiring specialized tax planning'
    },
    {
      situation: 'High Tax Liability',
      description: 'Companies with significant tax obligations that could benefit from advanced tax planning strategies'
    },
    {
      situation: 'Free Zone or Incentive Applications',
      description: 'Applying for special tax regimes, export incentives, or free zone status'
    },
    {
      situation: 'Tax Audits or Disputes',
      description: 'Facing tax authority investigations, audits, or need to resolve tax disputes'
    },
    {
      situation: 'Mergers and Acquisitions',
      description: 'Business combinations, restructuring, or major ownership changes with tax implications'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Costa Rica Corporate Tax Guide 2025
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Master Costa Rica's corporate income tax system. From progressive rates for smaller companies 
              to territorial taxation principles, get the complete guide to corporate tax compliance and optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get Professional Tax Help
              </Link>
              <Link
                href="/resources/tax-calendar"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                View Tax Calendar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">2025 Corporate Tax Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key facts about Costa Rica's corporate income tax system
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">0% - 30%</h3>
              <p className="text-gray-600 font-medium">Corporate Tax Rates</p>
              <p className="text-sm text-gray-500 mt-2">Progressive for small, flat for large</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">March 15</h3>
              <p className="text-gray-600 font-medium">Filing Deadline</p>
              <p className="text-sm text-gray-500 mt-2">Annual tax return due</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">₡119M</h3>
              <p className="text-gray-600 font-medium">Rate Threshold</p>
              <p className="text-sm text-gray-500 mt-2">Progressive vs. flat rate</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Territorial</h3>
              <p className="text-gray-600 font-medium">Tax System</p>
              <p className="text-sm text-gray-500 mt-2">Only Costa Rican source</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Rate Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Corporate Tax Rate Structure 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Costa Rica uses a dual system: progressive rates for smaller companies and flat rates for large companies
            </p>
          </div>

          <div className="space-y-6">
            {taxRateStructure.map((bracket, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold text-blue-900">{bracket.category}</h3>
                      <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-lg font-bold">
                        {bracket.rate}
                      </span>
                    </div>
                    <p className="text-blue-700 font-medium mb-2">{bracket.description}</p>
                    <p className="text-blue-600 text-sm mb-2">{bracket.conditions}</p>
                    <p className="text-gray-700 text-sm">{bracket.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tax Calculation Examples */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Tax Calculation Examples</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Small Company Example */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="text-lg font-bold text-green-700 mb-4">Small Company Example</h4>
                <p className="text-sm text-gray-600 mb-4">Gross Income: ₡80M, Taxable Income: ₡12M</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>First ₡5M @ 5%</span>
                    <span>₡{(250000).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next ₡5M @ 10%</span>
                    <span>₡{(500000).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Next ₡2M @ 15%</span>
                    <span>₡{(300000).toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-2 font-bold flex justify-between">
                    <span>Total Tax</span>
                    <span>₡{(1050000).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Effective Rate</span>
                    <span>8.75%</span>
                  </div>
                </div>
              </div>

              {/* Large Company Example */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="text-lg font-bold text-red-700 mb-4">Large Company Example</h4>
                <p className="text-sm text-gray-600 mb-4">Gross Income: ₡200M, Taxable Income: ₡12M</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>All Income @ 30%</span>
                    <span>₡{(3600000).toLocaleString()}</span>
                  </div>
                  <div className="border-t pt-2 font-bold flex justify-between">
                    <span>Total Tax</span>
                    <span>₡{(3600000).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Effective Rate</span>
                    <span>30%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Territorial Taxation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Territorial Taxation Principle</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Costa Rica only taxes income generated within its territory - understanding source rules is crucial
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {territorialTaxationPrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{principle.title}</h3>
                <p className="text-gray-700 mb-4">{principle.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Examples:</h4>
                  <ul className="space-y-1">
                    {principle.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 rounded-xl p-8 border border-yellow-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Note</h3>
                <p className="text-yellow-800">
                  Proper documentation and legal structuring are essential to benefit from territorial taxation. 
                  The tax authorities scrutinize source-of-income determinations, especially for international businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deductions and Incentives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Deductions & Tax Incentives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maximize your tax savings with available deductions and special incentive programs
            </p>
          </div>

          <div className="space-y-12">
            {deductionsAndIncentives.map((category, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-6">{category.category}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Compliance Requirements & Deadlines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay compliant with all corporate tax obligations and avoid costly penalties
            </p>
          </div>

          <div className="space-y-8">
            {complianceRequirements.map((requirement, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{requirement.title}</h3>
                    <p className="text-gray-700 mb-4">{requirement.description}</p>
                  </div>
                  <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg font-bold text-center lg:ml-6">
                    {requirement.deadline}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requirement.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{req}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Penalties for Non-Compliance</h2>
            <p className="text-xl text-red-700 max-w-3xl mx-auto">
              Understanding penalties helps you avoid costly mistakes and maintain compliance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {penalties.map((penalty, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-red-200">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-red-900 flex-1">{penalty.violation}</h3>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold ml-4">
                    {penalty.penalty}
                  </span>
                </div>
                <p className="text-gray-700">{penalty.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 border border-red-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">Prevention is Key</h3>
                <p className="text-red-800">
                  Penalties can be severe and accumulate quickly. It's far more cost-effective to maintain proper 
                  compliance than to deal with penalties and legal issues after the fact. Consider professional 
                  help if you're unsure about any requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Tax Planning */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Strategic Tax Planning Tips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimize your corporate tax strategy with these proven techniques
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {strategicTaxTips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-900 mb-3">{tip.title}</h3>
                <p className="text-gray-700 mb-4">{tip.tip}</p>
                <div className="bg-yellow-200 rounded-lg p-3">
                  <p className="text-yellow-800 font-medium text-sm">
                    <span className="font-bold">Benefit:</span> {tip.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Hire a Professional */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">When to Hire a Professional</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Complex situations require expert guidance. Here's when you should consider professional help
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalHelpIndicators.map((indicator, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-blue-200">
                <h3 className="text-lg font-bold text-blue-900 mb-3">{indicator.situation}</h3>
                <p className="text-gray-700">{indicator.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-900 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Expert Tax Guidance?</h3>
              <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
                Our experienced Costa Rican tax professionals can help you navigate complex corporate tax requirements, 
                optimize your tax strategy, and ensure full compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  View Tax Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources and Disclaimer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Sources & Disclaimer</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Legal Sources</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Ley del Impuesto sobre la Renta (Income Tax Law)</li>
                  <li>• Código de Normas y Procedimientos Tributarios</li>
                  <li>• Dirección General de Tributación (DGT) regulations</li>
                  <li>• Ministerio de Hacienda official publications</li>
                  <li>• PROMOTORA de Comercio Exterior (PROCOMER)</li>
                  <li>• Costa Rican Free Zone Administration</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Important Disclaimer</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This guide provides general information about Costa Rican corporate tax laws as of 2025. 
                  Tax laws are complex and change frequently. This information should not be considered 
                  legal or tax advice. Always consult with qualified Costa Rican tax professionals for 
                  specific guidance regarding your business situation.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-medium">Last Updated:</span> January 2025. We regularly update this guide 
                to reflect the latest tax law changes and regulatory updates from Costa Rican tax authorities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CorporateTaxGuidePage