import Temp from '@/components/layout/Layout'
import Temp from 'next/link'

export const metadata = {
  title: 'Costa Rica Business Budget Planning Guide 2025 | Pacific Business & Accounting Group',
  description: 'Comprehensive budget planning guide for Costa Rica businesses. Tax integration, seasonal planning, operational costs, and industry-specific budget templates for effective financial planning.',
  keywords: 'Costa Rica budget planning 2025, business budgeting Costa Rica, tax planning integration, seasonal budgeting, operational costs Costa Rica, financial planning',
}

const BudgetPlanningPage = () => {
  const budgetingSteps = [
    {
      step: '1',
      title: 'Revenue Forecasting',
      description: 'Project income based on historical data and market conditions',
      details: [
        'Analyze 3-year historical revenue trends',
        'Factor in Costa Rica economic growth (3.8% projected 2025)',
        'Consider seasonal variations (tourism peak/low seasons)',
        'Account for currency exchange impacts on exports',
        'Include new product/service launches',
        'Assess market competition and pricing power'
      ],
      costaRicaFactors: [
        'Tourism seasonality: High (Dec-Apr), Low (May-Nov)',
        'Coffee harvest cycle (Oct-Feb) affects agricultural regions',
        'Government budget cycles impact B2B payments',
        'Free zone incentives may affect revenue recognition'
      ]
    },
    {
      step: '2',
      title: 'Fixed Cost Planning',
      description: 'Identify and budget for recurring operational expenses',
      details: [
        'Rent and utilities (factor in 6-8% annual increases)',
        'Insurance premiums (liability, property, workers comp)',
        'Software subscriptions and technology costs',
        'Professional services (legal, accounting, consulting)',
        'Equipment leases and maintenance contracts',
        'Regulatory compliance and licensing fees'
      ],
      costaRicaFactors: [
        'Electricity rates average ₡127 per kWh (among highest in region)',
        'Commercial rent increases limited to 15% annually by law',
        'Mandatory insurance requirements vary by industry',
        'Municipal tax rates vary significantly by location'
      ]
    },
    {
      step: '3',
      title: 'Variable Cost Analysis',
      description: 'Budget costs that fluctuate with business activity',
      details: [
        'Raw materials and inventory (consider import duties)',
        'Sales commissions and performance bonuses',
        'Marketing and advertising expenses',
        'Shipping and logistics costs',
        'Credit card processing fees',
        'Temporary labor and contractors'
      ],
      costaRicaFactors: [
        'Import duties range 1-15% depending on product category',
        'Fuel cost volatility affects transportation expenses',
        'Digital marketing costs increased 15% in 2024',
        'Port congestion may increase logistics costs'
      ]
    },
    {
      step: '4',
      title: 'Labor Cost Budgeting',
      description: 'Plan for comprehensive employee-related expenses',
      details: [
        'Base salaries with annual adjustments (6-8% projected)',
        'Social security contributions (26.33% of gross salary)',
        'Mandatory benefits (aguinaldo, vacations, severance fund)',
        'Health and safety compliance costs',
        'Training and development programs',
        'Recruitment and onboarding expenses'
      ],
      costaRicaFactors: [
        'Minimum wage increased 6.8% in 2024, similar increases expected',
        'Aguinaldo (13th month salary) due in December',
        'Vacation pay accumulates at 2 days per month worked',
        'Occupational risk insurance (INS) rates vary by industry risk'
      ]
    },
    {
      step: '5',
      title: 'Tax Planning Integration',
      description: 'Incorporate all tax obligations into budget planning',
      details: [
        'Corporate income tax (progressive or 30% flat rate)',
        'VAT/Sales tax (13% standard rate) monthly payments',
        'Municipal business tax (varies by location and activity)',
        'Property taxes on business real estate',
        'Import duties and customs fees',
        'Professional services tax withholdings'
      ],
      costaRicaFactors: [
        'Quarterly advance tax payments required',
        'Electronic invoicing mandatory (affects administrative costs)',
        'Free zone companies have different tax structures',
        'Tax deadlines concentrated in March (income tax) and monthly (VAT)'
      ]
    },
    {
      step: '6',
      title: 'Capital Expenditure Planning',
      description: 'Budget for investments in long-term assets',
      details: [
        'Equipment purchases and upgrades',
        'Technology infrastructure investments',
        'Facility improvements and renovations',
        'Vehicle purchases or leases',
        'Research and development projects',
        'Expansion and growth initiatives'
      ],
      costaRicaFactors: [
        'Depreciation rates for tax purposes vary by asset type',
        'Import duties on equipment may qualify for exemptions',
        'Free zone companies enjoy duty-free equipment imports',
        'Energy-efficient equipment may qualify for tax incentives'
      ]
    }
  ]

  const seasonalConsiderations = [
    {
      season: 'Q1 (Jan-Mar): Tax Season & Planning',
      description: 'Heavy tax compliance period with cash flow implications',
      planning: [
        'Corporate tax returns due March 15',
        'Large tax payments may strain cash flow',
        'Tourism peak season generates higher revenues',
        'New year budget reviews and adjustments',
        'Salary increases typically implemented',
        'Insurance renewals and premium payments'
      ],
      cashFlowImpact: 'Negative (tax payments) offset by tourism revenues',
      budgetActions: [
        'Reserve cash for large tax payments',
        'Plan employee salary adjustments',
        'Review and update insurance coverage',
        'Assess Q4 performance vs budget'
      ]
    },
    {
      season: 'Q2 (Apr-Jun): Operational Focus',
      description: 'Normal business operations with moderate seasonal effects',
      planning: [
        'Easter week (April) tourism surge',
        'School year begins (affects family spending)',
        'Rainy season preparation (May-June)',
        'Mid-year performance review',
        'Equipment maintenance before wet season',
        'Inventory adjustments for seasonal demand'
      ],
      cashFlowImpact: 'Stable with seasonal revenue variations',
      budgetActions: [
        'Review 6-month budget performance',
        'Adjust forecasts based on H1 results',
        'Plan facility maintenance projects',
        'Assess working capital needs'
      ]
    },
    {
      season: 'Q3 (Jul-Sep): Growth & Investment',
      description: 'Optimal period for expansion and major investments',
      planning: [
        'Summer vacation period affects productivity',
        'Coffee harvest preparation (agriculture)',
        'Back-to-school spending increases retail activity',
        'Government fiscal year planning (Oct-Sep)',
        'Infrastructure projects peak activity',
        'Export season begins for many products'
      ],
      cashFlowImpact: 'Positive for most sectors',
      budgetActions: [
        'Execute capital expenditure projects',
        'Launch new product/service initiatives',
        'Increase marketing for Q4 preparation',
        'Plan workforce expansion if needed'
      ]
    },
    {
      season: 'Q4 (Oct-Dec): Holiday & Harvest',
      description: 'Peak revenue period with high expenses for bonuses',
      planning: [
        'Christmas tourism peak season',
        'Coffee harvest generates rural income',
        'Aguinaldo (13th month) payments due December',
        'Holiday season increases retail sales',
        'Year-end inventory counts and valuations',
        'Annual performance bonuses and reviews'
      ],
      cashFlowImpact: 'Mixed: High revenues but significant bonus payments',
      budgetActions: [
        'Reserve funds for aguinaldo payments',
        'Maximize revenue opportunities',
        'Plan year-end inventory management',
        'Prepare next year\'s budget and forecasts'
      ]
    }
  ]

  const industryBudgetTemplates = [
    {
      industry: 'Tourism & Hospitality',
      keyMetrics: {
        'Revenue per Room': '₡45,000-75,000',
        'Food & Beverage Cost': '28-35%',
        'Labor Cost': '35-45%',
        'Marketing': '3-7%',
        'Utilities': '8-12%'
      },
      specificConsiderations: [
        'High seasonality requires cash reserves for low season',
        'Sustainability certifications increasingly important',
        'Digital booking platform commissions (8-15%)',
        'Government tourism taxes vary by region',
        'Staff housing costs in tourist areas',
        'Emergency fund for natural disasters/pandemics'
      ],
      budgetTips: [
        'Budget 40% of annual revenue to be earned Nov-April',
        'Maintain 6-month operating expense reserve',
        'Factor in renovation costs (5-7% of revenue annually)',
        'Plan for sustainability certification investments'
      ]
    },
    {
      industry: 'Manufacturing & Export',
      keyMetrics: {
        'Raw Materials': '45-65%',
        'Labor Cost': '15-25%',
        'Utilities': '5-10%',
        'Quality Control': '2-4%',
        'Logistics': '3-8%'
      },
      specificConsiderations: [
        'Currency exchange risk on imported materials',
        'Free zone vs. non-free zone cost structures',
        'Export documentation and compliance costs',
        'Quality certifications (ISO, etc.) maintenance',
        'Environmental compliance and sustainability',
        'Supply chain diversification costs'
      ],
      budgetTips: [
        'Hedge currency exposure for major imports',
        'Budget for quality certification renewals',
        'Plan working capital for export payment cycles',
        'Consider free zone relocation for tax benefits'
      ]
    },
    {
      industry: 'Technology Services',
      keyMetrics: {
        'Personnel Cost': '55-75%',
        'Technology Infrastructure': '8-15%',
        'Marketing': '5-12%',
        'Professional Development': '3-5%',
        'Office Space': '8-12%'
      },
      specificConsiderations: [
        'High talent acquisition and retention costs',
        'Bilingual talent commands 40-60% premium',
        'Cloud services and software subscription growth',
        'Cybersecurity compliance requirements',
        'International client payment processing fees',
        'Nearshoring opportunity investments'
      ],
      budgetTips: [
        'Invest heavily in employee development and retention',
        'Budget for salary inflation (10-15% annually)',
        'Plan for technology infrastructure upgrades',
        'Consider remote work cost savings vs office needs'
      ]
    },
    {
      industry: 'Agriculture & Food Processing',
      keyMetrics: {
        'Seeds/Inputs': '20-35%',
        'Labor (Seasonal)': '25-40%',
        'Processing/Packaging': '15-25%',
        'Transportation': '5-10%',
        'Certifications': '2-5%'
      },
      specificConsiderations: [
        'Highly seasonal revenue and expense patterns',
        'Weather-related crop insurance needs',
        'Organic and sustainability certification costs',
        'Export market access and compliance requirements',
        'Water usage and conservation investments',
        'Climate change adaptation measures'
      ],
      budgetTips: [
        'Maintain significant cash reserves for seasonal cycles',
        'Invest in crop insurance and risk management',
        'Budget for certification and compliance costs',
        'Plan for climate adaptation technology investments'
      ]
    }
  ]

  const budgetingTools = [
    {
      tool: 'Cash Flow Forecasting',
      description: 'Predict monthly cash inflows and outflows',
      features: [
        '12-month rolling cash flow projections',
        'Seasonal adjustment factors',
        'Currency exchange rate scenarios',
        'Tax payment scheduling',
        'Working capital requirements',
        'Sensitivity analysis for key variables'
      ],
      benefits: [
        'Avoid cash shortages during slow periods',
        'Plan financing needs in advance',
        'Optimize payment timing',
        'Identify investment opportunities'
      ]
    },
    {
      tool: 'Variance Analysis',
      description: 'Compare actual results vs. budget regularly',
      features: [
        'Monthly budget vs. actual comparisons',
        'Key performance indicator tracking',
        'Trend analysis and forecasting',
        'Exception reporting for significant variances',
        'Root cause analysis documentation',
        'Corrective action planning'
      ],
      benefits: [
        'Early identification of problems',
        'Performance accountability',
        'Improved forecasting accuracy',
        'Better decision-making data'
      ]
    },
    {
      tool: 'Scenario Planning',
      description: 'Model different business scenarios and outcomes',
      features: [
        'Best case/worst case/most likely scenarios',
        'Economic impact modeling',
        'Currency fluctuation impacts',
        'Market demand sensitivity analysis',
        'Cost structure optimization',
        'Break-even analysis by scenario'
      ],
      benefits: [
        'Better risk management',
        'Contingency planning',
        'Strategic decision support',
        'Stress testing financial assumptions'
      ]
    },
    {
      tool: 'Capital Allocation Framework',
      description: 'Prioritize investments and resource allocation',
      features: [
        'Return on investment calculations',
        'Payback period analysis',
        'Net present value modeling',
        'Risk assessment matrix',
        'Strategic alignment scoring',
        'Resource constraint optimization'
      ],
      benefits: [
        'Maximize return on investments',
        'Better resource utilization',
        'Strategic alignment assurance',
        'Improved capital efficiency'
      ]
    }
  ]

  const budgetMonitoring = [
    {
      frequency: 'Daily',
      focus: 'Cash Flow & Operations',
      activities: [
        'Monitor bank balances and cash position',
        'Review daily sales and revenue',
        'Track key operational metrics',
        'Identify any unusual expenses or variances',
        'Update short-term cash flow projections'
      ]
    },
    {
      frequency: 'Weekly',
      focus: 'Performance Tracking',
      activities: [
        'Compile weekly financial summary',
        'Review department budget performance',
        'Analyze customer payment collections',
        'Track inventory levels and turnover',
        'Update quarterly forecast if needed'
      ]
    },
    {
      frequency: 'Monthly',
      focus: 'Comprehensive Review',
      activities: [
        'Prepare detailed budget variance reports',
        'Analyze month-over-month trends',
        'Review and update annual forecasts',
        'Assess tax compliance and planning needs',
        'Update stakeholder reports and presentations'
      ]
    },
    {
      frequency: 'Quarterly',
      focus: 'Strategic Assessment',
      activities: [
        'Comprehensive budget performance review',
        'Strategic plan alignment assessment',
        'Market condition impact analysis',
        'Resource allocation optimization',
        'Next quarter detailed planning'
      ]
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Costa Rica Business Budget Planning Guide 2025
            </h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto mb-8">
              Master business budgeting in Costa Rica with tax integration, seasonal planning, and 
              industry-specific templates. Create effective budgets that drive growth and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get Budget Planning Help
              </Link>
              <Link
                href="/resources/startup-calculator"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Startup Cost Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Planning Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Why Budget Planning Matters in Costa Rica</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Effective budgeting helps navigate Costa Rica's unique business environment with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">Tax Integration</h3>
              <p className="text-gray-600 text-sm">Seamlessly integrate tax obligations into your budget planning</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Seasonal Planning</h3>
              <p className="text-gray-600 text-sm">Account for Costa Rica's distinct seasonal business patterns</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">Industry Templates</h3>
              <p className="text-gray-600 text-sm">Customized budget frameworks for key Costa Rican industries</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Budget Planning Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-4">6-Step Budget Planning Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive framework for creating effective budgets in Costa Rica's business environment
            </p>
          </div>

          <div className="space-y-12">
            {budgetingSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-green-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-3/4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                      <h4 className="font-bold text-green-900 mb-3">Key Planning Activities</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-sm text-gray-700 flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                      <h4 className="font-bold text-yellow-900 mb-3">Costa Rica Specific Factors</h4>
                      <ul className="space-y-2">
                        {step.costaRicaFactors.map((factor, factorIndex) => (
                          <li key={factorIndex} className="text-sm text-gray-700 flex items-start">
                            <span className="text-yellow-600 mr-2">⚠</span>
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Considerations */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Seasonal Budget Planning</h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Navigate Costa Rica's distinct seasonal patterns for more accurate budget planning
            </p>
          </div>

          <div className="space-y-8">
            {seasonalConsiderations.map((season, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-blue-200">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{season.season}</h3>
                    <p className="text-gray-700 mb-4">{season.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Planning Considerations:</h4>
                        <ul className="space-y-1">
                          {season.planning.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Budget Actions:</h4>
                        <ul className="space-y-1">
                          {season.budgetActions.map((action, actionIndex) => (
                            <li key={actionIndex} className="text-sm text-gray-600 flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8 bg-blue-100 rounded-lg p-4 min-w-[250px]">
                    <h4 className="font-bold text-blue-900 mb-2">Cash Flow Impact</h4>
                    <p className="text-sm text-blue-800">{season.cashFlowImpact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Budget Templates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Industry-Specific Budget Templates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored budget frameworks for Costa Rica's key business sectors
            </p>
          </div>

          <div className="space-y-12">
            {industryBudgetTemplates.map((template, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-green-900 mb-6">{template.industry}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-bold text-green-900 mb-4">Typical Cost Structure</h4>
                    <div className="space-y-3">
                      {Object.entries(template.keyMetrics).map(([metric, value]) => (
                        <div key={metric} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                          <span className="text-gray-700 text-sm font-medium">{metric}:</span>
                          <span className="text-green-900 font-bold text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-green-900 mb-4">Special Considerations</h4>
                    <ul className="space-y-2">
                      {template.specificConsiderations.map((consideration, considerationIndex) => (
                        <li key={considerationIndex} className="text-sm text-gray-700 flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          {consideration}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-green-900 mb-4">Budget Tips</h4>
                    <ul className="space-y-2">
                      {template.budgetTips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-gray-700 flex items-start">
                          <span className="text-yellow-600 mr-2">💡</span>
                          {tip}
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

      {/* Budgeting Tools & Techniques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-green-900 mb-4">Essential Budgeting Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced tools and techniques for effective budget management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {budgetingTools.map((tool, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-3">{tool.tool}</h3>
                <p className="text-gray-700 mb-4">{tool.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {tool.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">→</span>
                          {benefit}
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

      {/* Budget Monitoring & Control */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Budget Monitoring & Control</h2>
            <p className="text-xl text-purple-700 max-w-3xl mx-auto">
              Establish systematic monitoring to ensure budget performance and early problem detection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {budgetMonitoring.map((monitoring, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-purple-200">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-purple-900 mb-2">{monitoring.frequency}</h3>
                  <p className="text-sm text-purple-700 font-medium">{monitoring.focus}</p>
                </div>
                
                <ul className="space-y-2">
                  {monitoring.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="text-xs text-gray-600 flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 border border-purple-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Pro Tip: Variance Thresholds</h3>
                <p className="text-purple-800">
                  Set variance thresholds (e.g., 10% for revenues, 5% for major expense categories) to trigger 
                  automatic reviews and corrective actions. This prevents small issues from becoming major problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Help CTA */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Costa Rica Business Budget?</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Our experienced Costa Rican business advisors can help you develop comprehensive budgets, 
              integrate tax planning, and establish monitoring systems for sustained success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200"
              >
                Schedule Budget Planning Session
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200"
              >
                View Financial Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sources and Disclaimer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-green-900 mb-6">Sources & Disclaimer</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Data Sources</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Banco Central de Costa Rica (BCCR) - Economic indicators and forecasts</li>
                  <li>• Instituto Nacional de Estadística y Censos (INEC) - Statistical data</li>
                  <li>• Ministerio de Hacienda - Tax rates and regulatory information</li>
                  <li>• CINDE - Investment and industry data</li>
                  <li>• Cámara de Comercio de Costa Rica - Business surveys</li>
                  <li>• PROCOMER - Export and trade statistics</li>
                  <li>• Instituto Nacional de Seguros (INS) - Insurance and risk data</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Important Disclaimer</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  This budget planning guide provides general information and recommendations based on 
                  typical Costa Rican business conditions as of January 2025. Every business situation 
                  is unique, and actual costs, revenues, and financial requirements may vary significantly. 
                  This information should not replace professional financial and tax advice. Always consult 
                  with qualified Costa Rican financial professionals for guidance specific to your business.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <span className="font-medium">Last Updated:</span> January 2025. Information reflects 
                current Costa Rican business conditions, tax rates, and economic forecasts. Budget 
                templates and recommendations are updated regularly to reflect market changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BudgetPlanningPage