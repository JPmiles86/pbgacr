import Temp from '@/components/layout/Layout'
import Temp from 'next/link'
import Temp from './DownloadButton'

export const metadata = {
  title: 'Cash Flow Template & Analysis Guide Costa Rica | Pacific Business & Accounting Group',
  description: 'Comprehensive cash flow template and analysis guide for Costa Rica businesses. IFRS-compliant templates, industry-specific patterns, CCSS payment timing, seasonal analysis, and expert insights.',
  keywords: 'Costa Rica cash flow template, IFRS cash flow statement, IAS 7 compliance, CCSS payment timing, business cash flow analysis, monthly cash projections, industry cash flow patterns',
}

const CashFlowTemplatePage = () => {
  const templateFeatures = [
    {
      title: 'IFRS-Compliant Structure',
      description: 'Follows IAS 7 Statement of Cash Flows requirements with proper classification of operating, investing, and financing activities',
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 2a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Costa Rica Tax Integration',
      description: 'Built-in timing for CCSS payments, quarterly tax advances, and territorial tax considerations',
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Industry-Specific Patterns',
      description: 'Templates and analysis for agriculture, tourism, manufacturing, and services sectors with seasonal considerations',
      icon: (
        <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: 'Monthly & Annual Projections',
      description: 'Comprehensive 12-month projections with annual summary and comparative analysis tools',
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    }
  ]

  const ifrsCashFlowComponents = [
    {
      category: 'Operating Activities',
      description: 'Principal revenue-producing activities and other activities that are not investing or financing',
      color: 'blue',
      examples: [
        'Cash receipts from sales of goods and services',
        'Cash payments to suppliers and employees',
        'CCSS and social security payments',
        'Income tax payments',
        'Interest payments (if not classified as financing)',
        'Dividend receipts from investments'
      ],
      costaRicaSpecific: [
        'Monthly CCSS payments (due by last day of following month)',
        'Quarterly corporate tax advance payments (15th of following month)',
        'VAT payments (monthly by 15th)',
        'Municipal tax payments (quarterly)'
      ]
    },
    {
      category: 'Investing Activities',
      description: 'Acquisition and disposal of long-term assets and other investments',
      color: 'green',
      examples: [
        'Purchase/sale of property, plant, and equipment',
        'Acquisition/disposal of investments',
        'Loans made to other entities',
        'Collection of loan principal'
      ],
      costaRicaSpecific: [
        'Free zone infrastructure investments',
        'Technology and equipment for export activities',
        'Environmental protection investments (tax incentives)',
        'Real estate acquisitions (transfer tax implications)'
      ]
    },
    {
      category: 'Financing Activities',
      description: 'Activities that result in changes in the size and composition of equity and borrowings',
      color: 'purple',
      examples: [
        'Cash from issuing shares',
        'Cash payments to repurchase shares',
        'Proceeds from borrowings',
        'Repayments of borrowings',
        'Dividend payments to shareholders'
      ],
      costaRicaSpecific: [
        'Capital increases (notarization and registration costs)',
        'Dividend distributions (withholding tax considerations)',
        'Local bank financing (colón vs. dollar considerations)',
        'Foreign investment registration with Central Bank'
      ]
    }
  ]

  const industryPatterns = [
    {
      industry: 'Agriculture & Coffee',
      seasonality: 'High',
      peakCashFlow: 'Oct-Feb (Harvest)',
      lowCashFlow: 'Mar-Sep (Growing)',
      specificConsiderations: [
        'Weather-dependent cash flows',
        'Export payment timing (60-90 days)',
        'Seasonal labor costs during harvest',
        'Input costs concentrated in growing season',
        'Price volatility based on international markets'
      ],
      planningSuggestions: [
        'Maintain 6-month operating cash reserves',
        'Secure credit lines for growing season',
        'Consider forward contracts for price stability',
        'Plan equipment purchases during low season'
      ]
    },
    {
      industry: 'Tourism & Hospitality',
      seasonality: 'High',
      peakCashFlow: 'Dec-Apr (Dry Season)',
      lowCashFlow: 'May-Nov (Rainy Season)',
      specificConsiderations: [
        'Extreme seasonality (80% revenue in 6 months)',
        'Fixed costs year-round (staff, maintenance)',
        'Advance bookings create timing differences',
        'Currency exchange rate sensitivity',
        'Weather and external event impacts'
      ],
      planningSuggestions: [
        'Build cash reserves during peak season',
        'Negotiate flexible payment terms with suppliers',
        'Consider seasonal staff adjustments',
        'Develop rainy season revenue streams'
      ]
    },
    {
      industry: 'Manufacturing & Free Zones',
      seasonality: 'Low',
      peakCashFlow: 'Consistent',
      lowCashFlow: 'Holiday periods',
      specificConsiderations: [
        'Working capital tied to inventory cycles',
        'Export payment terms (30-60 days)',
        'Raw material import timing',
        'Free zone tax benefits impact',
        'Equipment depreciation planning'
      ],
      planningSuggestions: [
        'Optimize inventory management',
        'Negotiate better payment terms with customers',
        'Plan maintenance during holiday shutdowns',
        'Monitor exchange rate impacts on exports'
      ]
    },
    {
      industry: 'Professional Services',
      seasonality: 'Medium',
      peakCashFlow: 'Jan-Mar, Oct-Dec',
      lowCashFlow: 'Jul-Aug (Vacation)',
      specificConsiderations: [
        'Project-based revenue timing',
        'Seasonal client demand patterns',
        'Accounts receivable management critical',
        'Lower fixed costs than other industries',
        'Tax season peaks for accounting services'
      ],
      planningSuggestions: [
        'Implement strict collection policies',
        'Offer retainer arrangements',
        'Plan vacation and training during slow periods',
        'Diversify service offerings for stability'
      ]
    }
  ]

  const costaRicaTaxTiming = [
    {
      obligation: 'Corporate Income Tax',
      frequency: 'Quarterly Advances + Annual',
      dueDate: '15th of month following quarter',
      cashFlowImpact: 'High',
      planning: 'Plan 25% of prior year tax liability quarterly, adjust for current year projections'
    },
    {
      obligation: 'CCSS Social Security',
      frequency: 'Monthly',
      dueDate: 'Last day of following month',
      cashFlowImpact: 'High',
      planning: '26.67% of gross payroll - budget monthly, automatic deduction available'
    },
    {
      obligation: 'VAT (Sales Tax)',
      frequency: 'Monthly',
      dueDate: '15th of following month',
      cashFlowImpact: 'Medium',
      planning: 'Net VAT position - consider input timing for optimization'
    },
    {
      obligation: 'Municipal Business Tax',
      frequency: 'Quarterly',
      dueDate: 'Varies by municipality',
      cashFlowImpact: 'Low',
      planning: 'Based on gross revenue - budget 0.1% to 0.25% quarterly'
    },
    {
      obligation: 'Annual Tax Return',
      frequency: 'Annual',
      dueDate: 'March 15',
      cashFlowImpact: 'High',
      planning: 'Final settlement of tax liability - can be significant payment or refund'
    }
  ]

  const cashFlowAnalysisTechniques = [
    {
      technique: 'Direct vs. Indirect Method',
      description: 'Choose the most appropriate cash flow presentation method for your business',
      application: 'IFRS allows both methods, but indirect method is more common for management reporting',
      benefits: [
        'Direct method provides clearer operational insights',
        'Indirect method easier to prepare from existing records',
        'Both methods produce same cash flow totals'
      ]
    },
    {
      technique: 'Rolling 13-Week Forecast',
      description: 'Maintain a detailed 13-week rolling cash flow forecast updated weekly',
      application: 'Critical for businesses with seasonal patterns or growth phases',
      benefits: [
        'Early warning system for cash shortfalls',
        'Better negotiation position with lenders',
        'Improved supplier payment planning'
      ]
    },
    {
      technique: 'Scenario Analysis',
      description: 'Develop best case, worst case, and most likely cash flow scenarios',
      application: 'Essential for businesses in volatile industries like tourism or agriculture',
      benefits: [
        'Risk management and contingency planning',
        'Better investment decision making',
        'Improved lending and financing discussions'
      ]
    },
    {
      technique: 'Cash Conversion Cycle',
      description: 'Monitor the time between cash outflows and inflows in your operating cycle',
      application: 'Particularly important for manufacturing and retail businesses',
      benefits: [
        'Identifies working capital optimization opportunities',
        'Improves supplier and customer payment terms',
        'Reduces financing needs'
      ]
    }
  ]

  const downloadTemplates = [
    {
      name: 'Basic Cash Flow Template',
      description: 'Standard IFRS-compliant cash flow statement template',
      features: ['IAS 7 compliance', 'Monthly and annual views', 'Basic industry adjustments'],
      fileType: 'Excel (.xlsx)',
      complexity: 'Beginner'
    },
    {
      name: 'Advanced Costa Rica Template',
      description: 'Comprehensive template with Costa Rica tax integration',
      features: ['CCSS timing', 'Tax advance calculations', 'Currency considerations', 'Industry-specific tabs'],
      fileType: 'Excel (.xlsx)',
      complexity: 'Intermediate'
    },
    {
      name: '13-Week Rolling Forecast',
      description: 'Detailed weekly cash flow forecasting tool',
      features: ['Weekly detail', 'Automatic date rolling', 'Scenario analysis', 'Alert systems'],
      fileType: 'Excel (.xlsx)',
      complexity: 'Advanced'
    },
    {
      name: 'Industry-Specific Templates',
      description: 'Specialized templates for different Costa Rica industries',
      features: ['Agriculture seasonality', 'Tourism patterns', 'Manufacturing cycles', 'Service businesses'],
      fileType: 'Excel (.xlsx) - Multiple files',
      complexity: 'Intermediate'
    }
  ]

  const implementationSteps = [
    {
      step: 1,
      title: 'Choose Your Template',
      description: 'Select the appropriate template based on your business size, industry, and complexity',
      tasks: [
        'Assess your business needs and industry patterns',
        'Consider your accounting system capabilities',
        'Evaluate internal reporting requirements',
        'Download the appropriate template'
      ]
    },
    {
      step: 2,
      title: 'Set Up Chart of Accounts Mapping',
      description: 'Align your accounting system accounts with cash flow categories',
      tasks: [
        'Map operating activities accounts',
        'Identify investing activity transactions',
        'Categorize financing activities',
        'Set up Costa Rica specific items (CCSS, taxes)'
      ]
    },
    {
      step: 3,
      title: 'Historical Data Input',
      description: 'Enter 12 months of historical data to establish patterns',
      tasks: [
        'Input monthly cash receipts and payments',
        'Classify all transactions properly',
        'Identify seasonal patterns',
        'Verify accuracy with bank statements'
      ]
    },
    {
      step: 4,
      title: 'Projection Development',
      description: 'Create forward-looking cash flow projections',
      tasks: [
        'Develop sales and collection forecasts',
        'Plan major capital expenditures',
        'Schedule tax and social security payments',
        'Include seasonal adjustments'
      ]
    },
    {
      step: 5,
      title: 'Monthly Monitoring',
      description: 'Establish a monthly review and update process',
      tasks: [
        'Compare actual vs. projected cash flows',
        'Update forecasts based on new information',
        'Identify variances and their causes',
        'Adjust future projections accordingly'
      ]
    }
  ]

  const integrationSystems = [
    {
      system: 'SAP Business One',
      description: 'Popular ERP system used by larger Costa Rican companies',
      integration: 'Direct cash flow report generation with customizable templates',
      benefits: ['Real-time data', 'Automated categorization', 'Multi-currency support']
    },
    {
      system: 'Exact Synergy',
      description: 'Comprehensive business management system',
      integration: 'Built-in cash flow forecasting with Costa Rica localization',
      benefits: ['Local tax integration', 'CCSS calculations', 'Banking connectivity']
    },
    {
      system: 'QuickBooks Desktop',
      description: 'Widely used by small to medium businesses',
      integration: 'Cash flow reports with manual adjustments for Costa Rica requirements',
      benefits: ['User-friendly', 'Cost-effective', 'Good for service businesses']
    },
    {
      system: 'Contpaq',
      description: 'Popular local accounting software',
      integration: 'Local compliance features with cash flow reporting capabilities',
      benefits: ['Costa Rica compliance', 'Spanish language', 'Local support']
    },
    {
      system: 'Excel/Google Sheets',
      description: 'Manual but flexible approach using our templates',
      integration: 'Full customization with our provided templates and macros',
      benefits: ['Complete control', 'Low cost', 'High customization']
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Cash Flow Template & Analysis Guide
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Master cash flow management for your Costa Rica business with IFRS-compliant templates, 
              industry-specific patterns, and expert analysis techniques. Includes CCSS payment timing, 
              tax considerations, and seasonal planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DownloadButton
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Download Templates
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </DownloadButton>
              <Link
                href="/contact"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Get Expert Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Template Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Template Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade cash flow templates designed specifically for Costa Rica businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templateFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IFRS Cash Flow Components */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">IFRS Cash Flow Statement Components</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding IAS 7 requirements with Costa Rica-specific considerations
            </p>
          </div>

          <div className="space-y-12">
            {ifrsCashFlowComponents.map((component, index) => {
              const colorClasses = {
                blue: {
                  bg: 'bg-gradient-to-r from-blue-50 to-blue-100',
                  border: 'border-blue-200',
                  title: 'text-blue-900',
                  description: 'text-blue-800',
                  heading: 'text-blue-900',
                  bullet: 'text-blue-600'
                },
                green: {
                  bg: 'bg-gradient-to-r from-green-50 to-green-100',
                  border: 'border-green-200',
                  title: 'text-green-900',
                  description: 'text-green-800',
                  heading: 'text-green-900',
                  bullet: 'text-green-600'
                },
                purple: {
                  bg: 'bg-gradient-to-r from-purple-50 to-purple-100',
                  border: 'border-purple-200',
                  title: 'text-purple-900',
                  description: 'text-purple-800',
                  heading: 'text-purple-900',
                  bullet: 'text-purple-600'
                }
              }
              const colors = colorClasses[component.color as keyof typeof colorClasses]
              
              return (
                <div key={index} className={`${colors.bg} rounded-xl p-8 border ${colors.border}`}>
                  <h3 className={`text-2xl font-bold ${colors.title} mb-4`}>{component.category}</h3>
                  <p className={`${colors.description} mb-6`}>{component.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className={`font-semibold ${colors.heading} mb-3`}>Standard IFRS Examples:</h4>
                      <ul className="space-y-2">
                        {component.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start">
                            <span className={`${colors.bullet} mr-2 flex-shrink-0`}>•</span>
                            <span className="text-gray-700 text-sm">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className={`font-semibold ${colors.heading} mb-3`}>Costa Rica Specific Items:</h4>
                      <ul className="space-y-2">
                        {component.costaRicaSpecific.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className={`${colors.bullet} mr-2 flex-shrink-0`}>•</span>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry-Specific Patterns */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Industry-Specific Cash Flow Patterns</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding seasonal patterns and industry-specific considerations for Costa Rica businesses
            </p>
          </div>

          <div className="space-y-8">
            {industryPatterns.map((pattern, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-blue-900">{pattern.industry}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        pattern.seasonality === 'High' ? 'bg-red-100 text-red-800' :
                        pattern.seasonality === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {pattern.seasonality} Seasonality
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 mb-2">Peak Cash Flow</h4>
                        <p className="text-green-800">{pattern.peakCashFlow}</p>
                      </div>
                      <div className="bg-red-50 rounded-lg p-4">
                        <h4 className="font-semibold text-red-900 mb-2">Low Cash Flow</h4>
                        <p className="text-red-800">{pattern.lowCashFlow}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Specific Considerations:</h4>
                    <ul className="space-y-2">
                      {pattern.specificConsiderations.map((consideration, considerationIndex) => (
                        <li key={considerationIndex} className="flex items-start">
                          <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                          <span className="text-gray-700 text-sm">{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3">Planning Suggestions:</h4>
                    <ul className="space-y-2">
                      {pattern.planningSuggestions.map((suggestion, suggestionIndex) => (
                        <li key={suggestionIndex} className="flex items-start">
                          <span className="text-green-600 mr-2 flex-shrink-0">•</span>
                          <span className="text-gray-700 text-sm">{suggestion}</span>
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

      {/* Costa Rica Tax Timing */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Costa Rica Tax Timing & Cash Flow Impact</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Critical tax obligations and their timing for accurate cash flow planning
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-sm border border-gray-100">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Tax Obligation</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Frequency</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Due Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Cash Flow Impact</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900">Planning Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {costaRicaTaxTiming.map((tax, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{tax.obligation}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{tax.frequency}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{tax.dueDate}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tax.cashFlowImpact === 'High' ? 'bg-red-100 text-red-800' :
                        tax.cashFlowImpact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {tax.cashFlowImpact}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{tax.planning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cash Flow Analysis Techniques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Cash Flow Analysis Techniques</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional techniques for analyzing and managing your business cash flows
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cashFlowAnalysisTechniques.map((technique, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">{technique.technique}</h3>
                <p className="text-gray-700 mb-4">{technique.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Application:</h4>
                  <p className="text-gray-700 text-sm">{technique.application}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {technique.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="text-yellow-600 mr-2 flex-shrink-0">•</span>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Download Cash Flow Templates</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional Excel templates ready for your Costa Rica business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {downloadTemplates.map((template, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{template.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    template.complexity === 'Beginner' ? 'bg-green-100 text-green-800' :
                    template.complexity === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {template.complexity}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">{template.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {template.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-yellow-500 mr-2 flex-shrink-0">•</span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{template.fileType}</span>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-yellow-500 rounded-xl p-6 text-gray-900">
              <h3 className="text-xl font-bold mb-3">Complete Template Package</h3>
              <p className="mb-4">Get all templates plus video tutorials and implementation guide</p>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Download Complete Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Implementation Steps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step guide to implementing cash flow management in your business
            </p>
          </div>

          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                
                <div className="flex-1 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {step.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                        <span className="text-gray-700 text-sm">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with Accounting Systems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Integration with Accounting Systems</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How to integrate cash flow management with popular accounting systems used in Costa Rica
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {integrationSystems.map((system, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{system.system}</h3>
                <p className="text-gray-700 mb-4">{system.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Integration Method:</h4>
                  <p className="text-gray-700 text-sm">{system.integration}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {system.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorial Preview */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Video Tutorial Series</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Step-by-step video tutorials covering everything from basic setup to advanced analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-800 rounded-xl p-6">
              <div className="w-full h-32 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Basic Setup</h3>
              <p className="text-blue-100 text-sm">Learn how to set up your first cash flow template</p>
            </div>

            <div className="bg-blue-800 rounded-xl p-6">
              <div className="w-full h-32 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Costa Rica Specifics</h3>
              <p className="text-blue-100 text-sm">Master CCSS timing and tax obligation planning</p>
            </div>

            <div className="bg-blue-800 rounded-xl p-6">
              <div className="w-full h-32 bg-blue-700 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Advanced Analysis</h3>
              <p className="text-blue-100 text-sm">Scenario planning and cash optimization techniques</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
              Watch Tutorial Series
            </button>
          </div>
        </div>
      </section>

      {/* Get Professional Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-blue-900 rounded-xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Need Expert Cash Flow Analysis?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Our experienced Costa Rican accounting professionals can help you implement sophisticated 
                cash flow management, optimize your working capital, and ensure compliance with local requirements.
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
                  View Financial Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources and Disclaimer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Sources & Important Information</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Accounting Standards Sources</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• International Financial Reporting Standards (IFRS)</li>
                  <li>• IAS 7 Statement of Cash Flows</li>
                  <li>• IFRS 18 General Presentation and Disclosures (2025)</li>
                  <li>• Colegio de Contadores Públicos de Costa Rica</li>
                  <li>• Costa Rica IFRS adoption regulations</li>
                  <li>• Dirección General de Tributación (DGT)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Legal and Regulatory Sources</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Caja Costarricense de Seguro Social (CCSS)</li>
                  <li>• Ministerio de Hacienda tax regulations</li>
                  <li>• Central Bank of Costa Rica (BCCR)</li>
                  <li>• Costa Rica corporate tax law</li>
                  <li>• Municipal tax regulations</li>
                  <li>• Free zone administration guidelines</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-3">Important Disclaimer</h4>
              <p className="text-sm text-yellow-800 leading-relaxed">
                This cash flow template and guide provides general information about cash flow management 
                and IFRS requirements as of 2025. While we strive for accuracy, accounting standards, 
                tax laws, and regulations change frequently. This information should not be considered 
                legal, tax, or accounting advice. Always consult with qualified Costa Rican accounting 
                and tax professionals for specific guidance regarding your business situation. 
                The templates are provided for educational purposes and should be customized for your 
                specific business needs and circumstances.
              </p>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-medium">Last Updated:</span> January 2025. This guide incorporates 
                the latest IFRS 18 requirements for cash flow statements effective from 2025, current 
                Costa Rica tax obligations, and updated CCSS payment schedules.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CashFlowTemplatePage